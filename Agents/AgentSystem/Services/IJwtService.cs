using AgentSystem.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgentSystem.Services
{
    public interface IJwtService
    {
        string CreateToken(UserDto user);
    }
}
