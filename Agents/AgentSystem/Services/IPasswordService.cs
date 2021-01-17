using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgentSystem.Services
{
    public interface IPasswordService
    {
        string Hash(string text);
        bool IsHashEqual(string text, string hashedText);
    }
}
