using Microsoft.ML;
using Microsoft.ML.Data;
using Microsoft.ML.Trainers;
using System;
using System.IO;
using System.Linq;

namespace RecommendingAgents
{
    class Program
    {
        private static string BaseDataSetRelativePath = @"../../../Data";
        private static string TrainingDataRelativePath = $"{BaseDataSetRelativePath}/Amazon0302.txt";
        private static string TrainingDataLocation = GetAbsolutePath(TrainingDataRelativePath);

        static void Main(string[] args)
        {
            var recommendation = new AgentsRecommendations();
            var a = recommendation.Agent_1(TrainingDataLocation, 3);
            var b = recommendation.Agent_2(TrainingDataLocation, 3);
            recommendation.Result(a, b);
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
