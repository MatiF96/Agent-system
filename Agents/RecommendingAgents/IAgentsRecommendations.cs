using System;
using System.Collections.Generic;
using System.Text;

namespace RecommendingAgents
{
    interface IAgentsRecommendations
    {
        IEnumerable<(int a, float b)> Agent_1(string TrainingDataLocation, int UserId);
        IEnumerable<(int a, float b)> Agent_2(string TrainingDataLocation, int UserId);
        List<int> Result(IEnumerable<(int a, float b)> a, IEnumerable<(int a, float b)> b);

    }
}
