using RecommendingAgents;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AgentSystem.Services
{
    public class RecomendationsService
    {
        private static string TrainingDataLocation = GetAbsolutePath(@"Amazon0302.txt");
        public void UserProductInteraction(int userId, int productId)
        {
            using (StreamWriter sw = File.AppendText(TrainingDataLocation))
            {
                string text = Environment.NewLine + $"{userId}\t{productId}";
                sw.WriteLine(text);
            }
        }

        public List<int> Recommend(int userId)
        {
            var r = new AgentsRecommendations();
            var agent1 = r.Agent_1(TrainingDataLocation, userId);
            var agent2 = r.Agent_2(TrainingDataLocation, userId);
            return r.Result(agent1, agent2);
        }

        public static string GetAbsolutePath(string relativeDatasetPath)
        {
            FileInfo _dataRoot = new FileInfo(typeof(Program).Assembly.Location);
            string assemblyFolderPath = _dataRoot.Directory.FullName;
            string fullPath = Path.Combine(assemblyFolderPath, relativeDatasetPath);
            return fullPath;
        }
    }
}
