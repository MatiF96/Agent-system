using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AgentSystem.DTOs
{
    public class LoginResponse
    {
        [Required]
        public string Token { get; set; }
        public UserDto User { get; set; }
    }
}
