import React from "react";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      

      {/* Main Dashboard */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Leave Portal</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow p-4 rounded">
            <p className="text-gray-500">Annual Leave</p>
            <p className="text-2xl font-bold">12 Days</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <p className="text-gray-500">Sick Leave</p>
            <p className="text-2xl font-bold">5 Days</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <p className="text-gray-500">Used Leave</p>
            <p className="text-2xl font-bold">8 Days</p>
          </div>
        </div>

        {/* Leave Request and History */}
        <div className="grid grid-cols-2 gap-4">
          {/* Leave Request */}
          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-lg font-bold mb-4">Request Leave</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Leave Type</label>
                <select className="w-full border-gray-300 rounded">
                  <option>Select Leave Type</option>
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  className="w-full border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  className="w-full border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Reason</label>
                <textarea
                  className="w-full border-gray-300 rounded"
                  rows="3"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>

          {/* Leave History */}
          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-lg font-bold mb-4">Leave History</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-gray-700">
                  <th className="py-2">Type</th>
                  <th className="py-2">From</th>
                  <th className="py-2">To</th>
                  <th className="py-2">Days</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-2">Annual Leave</td>
                  <td className="py-2">Feb 15, 2024</td>
                  <td className="py-2">Feb 18, 2024</td>
                  <td className="py-2">4</td>
                  <td className="py-2 text-yellow-500">Pending</td>
                  <td className="py-2 text-red-500 cursor-pointer">Cancel</td>
                </tr>
                <tr>
                  <td className="py-2">Sick Leave</td>
                  <td className="py-2">Jan 10, 2024</td>
                  <td className="py-2">Jan 11, 2024</td>
                  <td className="py-2">2</td>
                  <td className="py-2 text-green-500">Approved</td>
                  <td className="py-2 text-blue-500 cursor-pointer">View</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
