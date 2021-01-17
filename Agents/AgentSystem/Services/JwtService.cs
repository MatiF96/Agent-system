using AgentSystem.DTOs;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AgentSystem.Services
{
    public class JwtService : IJwtService
    {
        private readonly IConfiguration _configuration;

        public JwtService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string CreateToken(UserDto user)
        {
            var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));
            var signingCredentials = new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
            var options = new JwtSecurityToken(
                claims: new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.Login),
                    new Claim(ClaimTypes.Sid, user.Id.ToString())
                },
                expires: DateTime.Now.AddHours(12),
                signingCredentials: signingCredentials
                );
            var token = new JwtSecurityTokenHandler().WriteToken(options);
            return token;
        }
    }
}
