using System;
using System.Collections.Generic;

#nullable disable

namespace AgentSystem.Database
{
    public partial class User
    {
        public int UserId { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public string UserUsername { get; set; }
    }
}
