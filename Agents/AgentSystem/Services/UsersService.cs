using AgentSystem.Database;
using AgentSystem.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgentSystem.Services
{
    public class UsersService : IUsersService
    {
        private readonly agentsdbContext _ctx;

        public UsersService(agentsdbContext ctx)
        {
            _ctx = ctx;
        }

        public Task<UserDto> GetUserInfo(int userId)
        {
            throw new NotImplementedException();
        }

        public Task<UserDto> Login(LoginDto credentials)
        {
            throw new NotImplementedException();
        }

        public Task<UserDto> Register(RegisterDto credentials)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UserExists(string username)
        {
            throw new NotImplementedException();
        }
    }
}
