using AgentSystem.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgentSystem.Services
{
    public interface IUsersService
    {
        Task<UserDto> Register(RegisterDto credentials);
        Task<UserDto> Login(LoginDto credentials);
        Task<bool> UserExists(string username);
        Task<UserDto> GetUserInfo(int userId);
    }
}
