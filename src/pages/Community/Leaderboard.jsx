import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Star, Award, Users, ArrowUp } from "lucide-react";

const Leaderboard = () => {
  const tutors = [
    {
      id: 1,
      name: "Dr. Alex Johnson",
      subject: "Physics",
      studentsReached: 1245,
      rating: 4.9,
      materialsShared: 32,
      engagement: "High",
      change: "+2"
    },
    {
      id: 2,
      name: "Prof. Sarah Williams",
      subject: "Mathematics",
      studentsReached: 1120,
      rating: 4.8,
      materialsShared: 28,
      engagement: "High",
      change: "+1"
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      subject: "Computer Science",
      studentsReached: 980,
      rating: 4.7,
      materialsShared: 25,
      engagement: "Medium",
      change: "0"
    },
    {
      id: 4,
      name: "Prof. Emily Davis",
      subject: "Literature",
      studentsReached: 850,
      rating: 4.8,
      materialsShared: 22,
      engagement: "Medium",
      change: "+3"
    },
    {
      id: 5,
      name: "Dr. Robert Smith",
      subject: "Biology",
      studentsReached: 760,
      rating: 4.6,
      materialsShared: 18,
      engagement: "Medium",
      change: "-1"
    }
  ];

  return (
    <div className="animate-fade-in p-6">
      <div className="flex items-center mb-6">
        <Link to="/" className="inline-flex items-center px-3 py-2 mr-2 text-sm rounded-md hover:bg-gray-100">
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back to Home
        </Link>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-indigo-900">Top Tutors</h1>
        <div className="flex items-center bg-blue-50 rounded-full px-3 py-1">
          <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
          <span className="text-sm font-medium text-indigo-900">Tutor Leaderboard</span>
        </div>
      </div>
      
      <div className="overflow-hidden rounded-xl border border-indigo-100 bg-white">
        <table className="min-w-full divide-y divide-indigo-100">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Rank</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Tutor</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Subject</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Students</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Rating</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Materials</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-indigo-100">
            {tutors.map((tutor, index) => (
              <tr key={tutor.id} className="hover:bg-blue-50 transition-colors">
                <td className="py-4 px-4 whitespace-nowrap">
                  {index === 0 ? (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-white">
                      <Trophy className="h-4 w-4" />
                    </div>
                  ) : index === 1 ? (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-white">
                      <Trophy className="h-4 w-4" />
                    </div>
                  ) : index === 2 ? (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-white">
                      <Trophy className="h-4 w-4" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-indigo-900">
                      {index + 1}
                    </div>
                  )}
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-indigo-900">{tutor.name}</td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-indigo-700">{tutor.subject}</td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-indigo-700">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-blue-500" />
                    {tutor.studentsReached.toLocaleString()}
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-indigo-900">{tutor.rating}</span>
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-orange-500 mr-1" />
                    <span className="text-sm text-indigo-900">{tutor.materialsShared}</span>
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className={`flex items-center ${tutor.change.startsWith("+") ? "text-green-500" : tutor.change === "0" ? "text-gray-500" : "text-red-500"}`}>
                    {tutor.change.startsWith("+") && <ArrowUp className="h-4 w-4 mr-1" />}
                    {tutor.change === "0" && <span className="h-4 w-4 mr-1">-</span>}
                    {tutor.change.startsWith("-") && <ArrowUp className="h-4 w-4 mr-1 rotate-180" />}
                    <span className="text-sm">{tutor.change}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;