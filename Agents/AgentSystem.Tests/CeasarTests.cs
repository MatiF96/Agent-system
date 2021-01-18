using AgentSystem.Utils;
using System;
using Xunit;

namespace AgentSystem.Tests
{
    public class CeasarTests
    {
        [Theory]
        [InlineData("test", "uftu", true)]
        [InlineData("asd", "exc", false)]
        public void IsStringEqual(string text, string encryptedText, bool isEqual)
        {
            var hasher = new CaesarHasher();
            var hashedText = hasher.Encrypt(text);
            Assert.Equal(isEqual, hashedText == encryptedText);
        }

        [Fact]
        public void Encrypt()
        {
            var hasher = new CaesarHasher();
            var text = "Lubieplacki";
            var encryptedText = hasher.Encrypt(text);
            Assert.Equal(text, hasher.Decrypt(encryptedText));
        }
    }
}
