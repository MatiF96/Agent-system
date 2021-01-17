using AgentSystem.Database;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AgentSystem.DTOs
{
    public class UserDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Login { get; set; }

        [Required]
        public string Email { get; set; }

        public UserDto(User user)
        {
            Id = user.UserId;
            Login = user.UserUsername;
            Email = user.UserEmail;
        }
    }
}
