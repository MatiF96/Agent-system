using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.ML;
using Microsoft.ML.Data;
using Microsoft.ML.Trainers;
using System.IO;
using System.Linq;

namespace RecommendingAgents
{
    class AgentsRecommendations : IAgentsRecommendations
    {
        public class Product_prediction
        {
            public float Score { get; set; }
        }

        public class Entry
        {
            [KeyType(count: 262112)]
            public uint UserID { get; set; }

            [KeyType(count: 262112)]
            public uint ProductID { get; set; }
        }
        public IEnumerable<(int a, float b)> Agent_1(string TrainingDataLocation, int UserId)
        {
            MLContext mlContext = new MLContext();

            var traindata = mlContext.Data.LoadFromTextFile(path: TrainingDataLocation,
                columns: new[]
                {
                    new TextLoader.Column("Label", DataKind.Single, 0),
                    new TextLoader.Column(name:nameof(Entry.UserID), dataKind:DataKind.UInt32, source: new [] { new TextLoader.Range(0) }, keyCount: new KeyCount(262112)),
                    new TextLoader.Column(name:nameof(Entry.ProductID), dataKind:DataKind.UInt32, source: new [] { new TextLoader.Range(1) }, keyCount: new KeyCount(262112))
                },
                hasHeader: true,
                separatorChar: '\t');

            MatrixFactorizationTrainer.Options options = new MatrixFactorizationTrainer.Options();
            options.MatrixColumnIndexColumnName = nameof(Entry.UserID);
            options.MatrixRowIndexColumnName = nameof(Entry.ProductID);
            options.LabelColumnName = "Label";
            options.LossFunction = MatrixFactorizationTrainer.LossFunctionType.SquareLossOneClass;
            options.Alpha = 0.015;
            options.Lambda = 0.02;
            options.C = 0.00001;

            var est = mlContext.Recommendation().Trainers.MatrixFactorization(options);
            ITransformer model = est.Fit(traindata);

            var predictionengine = mlContext.Model.CreatePredictionEngine<Entry, Product_prediction>(model);
            
            Console.WriteLine("\nAgent 1 recommends: ");
            var top5 = (from m in Enumerable.Range(1, 262112)
                        let p = predictionengine.Predict(
                           new Entry()
                           {
                               UserID = (uint)UserId,
                               ProductID = (uint)m
                           })
                        orderby p.Score descending
                        select (UserID: m, Score: p.Score)).Take(5);
            foreach (var t in top5)
                Console.WriteLine($"  Score:{t.Score}\tProduct: {t.UserID}");
            return top5;
        }
        public IEnumerable<(int a, float b)> Agent_2(string TrainingDataLocation, int UserId)
        {
            MLContext mlContext = new MLContext();

            var traindata = mlContext.Data.LoadFromTextFile(path: TrainingDataLocation,
                columns: new[]
                {
                    new TextLoader.Column("Label", DataKind.Single, 0),
                    new TextLoader.Column(name:nameof(Entry.UserID), dataKind:DataKind.UInt32, source: new [] { new TextLoader.Range(0) }, keyCount: new KeyCount(262112)),
                    new TextLoader.Column(name:nameof(Entry.ProductID), dataKind:DataKind.UInt32, source: new [] { new TextLoader.Range(1) }, keyCount: new KeyCount(262112))
                },
                hasHeader: true,
                separatorChar: '\t');

            MatrixFactorizationTrainer.Options options = new MatrixFactorizationTrainer.Options();
            options.MatrixColumnIndexColumnName = nameof(Entry.UserID);
            options.MatrixRowIndexColumnName = nameof(Entry.ProductID);
            options.LabelColumnName = "Label";
            options.LossFunction = MatrixFactorizationTrainer.LossFunctionType.SquareLossOneClass;
            options.Alpha = 0.025;
            options.Lambda = 0.01;
            options.C = 0.00001;
            options.NumberOfIterations = 30;

            var est = mlContext.Recommendation().Trainers.MatrixFactorization(options);
            ITransformer model = est.Fit(traindata);

            var predictionengine = mlContext.Model.CreatePredictionEngine<Entry, Product_prediction>(model);

            Console.WriteLine("\nAgent2 recommends: ");
            var top5 = (from m in Enumerable.Range(1, 262112)
                        let p = predictionengine.Predict(
                           new Entry()
                           {
                               UserID = (uint)UserId,
                               ProductID = (uint)m
                           })
                        orderby p.Score descending
                        select (UserID: m, Score: p.Score)).Take(5);
            foreach (var t in top5)
                Console.WriteLine($"  Score:{t.Score}\tProduct: {t.UserID}");
            return top5;
        }
        public List<int> Result(IEnumerable<(int a, float b)> a, IEnumerable<(int a, float b)> b)
        {
            List<(int, float)> list = a.Concat(b).ToList();
            var SortedList = list.OrderByDescending(o => o.Item2).ToList();
            var resultList = SortedList.GroupBy(x => x.Item1).Select(y => y.First());
            List<int> productlist = new List<int>();
            Console.WriteLine("\n---------------------------------- ");
            Console.WriteLine("\nFinal recommendation: ");
            foreach (var t in resultList)
            {
                Console.WriteLine($"  Score:{t.Item2}\tProduct: {t.Item1}");
                productlist.Add(t.Item1);
            }
            productlist.Take(5);
            return productlist;
        }
    }
}
