import React from 'react';

const DashboardSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 py-4">
          <div className="flex items-center gap-4">
            {/* Profile Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-64">
              <img
                src="https://via.placeholder.com/100"
                alt="User Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-center text-xl font-semibold">Prabhleen Kaur</h2>
              <p className="text-center text-gray-400">prabhleen@gmail.com</p>
              <p className="text-center text-gray-400">9899999882</p>
              <p className="text-center text-gray-400">Delhi, India</p>
            </div>
          </div>
          {/* Welcome Message */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Good morning, Prabhleen! 👋</h1>
            <p className="text-gray-400">Monday, 14 October</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Schedule Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Monday, 14 October 2024</h3>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                  &larr;
                </button>
                <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                  &rarr;
                </button>
              </div>
            </div>
            {/* Webinar List */}
            <div className="space-y-4">
              {[
                { time: "11:30 AM", status: "Live", title: "UX Webinar" },
                { time: "11:30 AM", status: "Upcoming", title: "My first Webinar" },
                { time: "11:30 AM", status: "Upcoming", title: "Important Webinar" },
                { time: "11:30 AM", status: "Upcoming", title: "Webinar 1" },
              ].map((webinar, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{webinar.time}</p>
                    <p className="text-gray-400">{webinar.status} • {webinar.title}</p>
                  </div>
                  <span
                    className={`${
                      webinar.status === "Live" ? "bg-red-500" : "bg-blue-500"
                    } w-3 h-3 rounded-full`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Actions Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-4">
            <button className="flex items-center justify-between p-4 bg-teal-500 text-black rounded-lg hover:bg-teal-400">
              <span>Schedule a Webinar</span>
              <span>📅</span>
            </button>
            <button className="flex items-center justify-between p-4 bg-teal-500 text-black rounded-lg hover:bg-teal-400">
              <span>Join a Webinar</span>
              <span>➕</span>
            </button>
            <button className="flex items-center justify-between p-4 bg-teal-500 text-black rounded-lg hover:bg-teal-400">
              <span>Open Recordings</span>
              <span>📂</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;

