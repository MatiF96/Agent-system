﻿using AgentSystem.DTOs;
using AgentSystem.Services;
using AgentSystem.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AgentSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _usersService;
        private readonly IJwtService _jwtService;

        public UsersController(IUsersService authService, IJwtService jwtService)
        {
            _usersService = authService;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        [ProducesResponseType(typeof(UserDto), 200)]
        [ProducesResponseType(typeof(Error), 400)]
        public async Task<ActionResult> Register([FromBody] RegisterDto credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error("Invalid credentials"));
            }

            if (await _usersService.UserExists(credentials.Login))
            {
                return BadRequest(new Error("User with this login already exists"));
            }
            var user = await _usersService.Register(credentials);
            return Ok(user);
        }

        [HttpPost("login")]
        [ProducesResponseType(typeof(LoginResponse), 200)]
        [ProducesResponseType(typeof(Error), 400)]
        public async Task<ActionResult> Login([FromBody] LoginDto credentials)
        {
            var user = await _usersService.Login(credentials);
            if (user == null) return BadRequest(new Error("Invalid credentials"));
            return Ok(new LoginResponse()
            {
                Token = _jwtService.CreateToken(user),
                User = user
            });
        }


        [HttpGet("whoami")]
        [Authorize]
        [ProducesResponseType(typeof(UserDto), 200)]
        [ProducesResponseType(typeof(Error), 404)]

        public async Task<ActionResult> WhoAmIAsync()
        {
            var userId = User.Claims.First(i => i.Type == ClaimTypes.Sid).Value;
            var user = await _usersService.GetUserInfo(int.Parse(userId));
            if (user == null) return NotFound(new Error("User not found"));
            return Ok(user);
        }
    }
}
