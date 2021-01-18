using AgentSystem.Database;
using AgentSystem.DTOs;
using AgentSystem.Utils;
using Konscious.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgentSystem.Services
{
    public class UsersService : IUsersService
    {
        private CaesarHasher _hasher = new CaesarHasher();
        private readonly agentsdbContext _ctx;

        public UsersService(agentsdbContext ctx)
        {
            _ctx = ctx;
        }

        public Task<UserDto> GetUserInfo(int userId)
        {
            throw new NotImplementedException();
        }

        public async Task<UserDto> Login(LoginDto credentials)
        {
            var loginDecrypted = _hasher.Encrypt(credentials.Login);
            var user = await _ctx.Users.SingleOrDefaultAsync(account => account.UserUsername == loginDecrypted);
            if (user == null || !await IsPaswordValid(credentials.Password, user.UserPassword))
            {
                return null;
            }
            return new UserDto(user);
        }

        public async Task<UserDto> Register(RegisterDto credentials)
        {
            
            var user = new User
            {
                UserUsername = _hasher.Encrypt(credentials.Login),
                UserEmail = _hasher.Encrypt(credentials.Email),
                UserPassword = await HashPassword(credentials.Password)
            };
            _ctx.Users.Add(user);
            await _ctx.SaveChangesAsync();
            return new UserDto(user);
        }

        public Task<bool> UserExists(string username)
        {
            var usernameEncrypted = _hasher.Encrypt(username);
            return _ctx.Users.AnyAsync(acc => acc.UserUsername == usernameEncrypted);
        }
        private async Task<string> HashPassword(string password)
        {
            var hashBytes = await GetPasswordHash(password);
            return Convert.ToBase64String(hashBytes);
        }
        private async Task<byte[]> GetPasswordHash(string password)
        {
            var argon2 = new Argon2i(Encoding.UTF8.GetBytes(password))
            {
                DegreeOfParallelism = 8,
                MemorySize = 4096,
                Iterations = 40
            };
            return await argon2.GetBytesAsync(128);
        }
        private async Task<bool> IsPaswordValid(string password, string hashedPassword)
        {
            var storedHash = Convert.FromBase64String(hashedPassword);
            var passwordHashBytes = await GetPasswordHash(password);
            for (int i = 0; i < passwordHashBytes.Length; i++)
            {
                if (passwordHashBytes[i] != storedHash[i]) return false;
            }
            return true;
        }
    }
}
