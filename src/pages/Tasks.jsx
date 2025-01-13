import { PenSquare } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Your Tasks</h1>
        <div className="flex gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Tasks" value="24" subtitle="This Month" />
        <StatCard title="Completed" value="18" subtitle="75% Success Rate" valueColor="text-green-500" />
        <StatCard title="In Progress" value="4" subtitle="Due This Week" valueColor="text-yellow-500" />
        <StatCard title="Pending" value="2" subtitle="Needs Attention" valueColor="text-red-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Task Update Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Submit Task Update</h2>
          <TaskUpdateForm />
        </div>

        {/* Current Tasks */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Current Tasks</h2>
            <select className="border rounded-md px-3 py-1 text-gray-600">
              <option>All Tasks</option>
            </select>
          </div>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, valueColor = "text-gray-900" }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-gray-600 font-medium">{title}</h3>
    <p className={`text-3xl font-semibold ${valueColor} mt-2`}>{value}</p>
    <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
  </div>
);

const TaskUpdateForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-gray-600 mb-2">Task Title</label>
      <select className="w-full border rounded-lg p-2 text-gray-600">
        <option>Select Task</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-600 mb-2">Status</label>
      <select className="w-full border rounded-lg p-2 text-gray-600">
        <option>Select Status</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-600 mb-2">Hours Spent</label>
      <input
        type="text"
        placeholder="Enter hours spent"
        className="w-full border rounded-lg p-2 text-gray-400"
      />
    </div>
    <div>
      <label className="block text-gray-600 mb-2">Progress Update</label>
      <textarea
        placeholder="Enter your progress update and any challenges faced"
        className="w-full border rounded-lg p-2 h-24 text-gray-400 resize-none"
      />
    </div>
    <div>
      <label className="block text-gray-600 mb-2">Attachments (if any)</label>
      <div className="flex items-center gap-2">
        <button className="px-4 py-1 border rounded text-gray-600 hover:bg-gray-50">
          Choose File
        </button>
        <span className="text-gray-500">No file chosen</span>
      </div>
    </div>
    <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800">
      Submit Update
    </button>
  </form>
);

const TaskList = () => {
  const tasks = [
    {
      title: "UI Design Review",
      description: "Review and update the dashboard UI components according to the new design system.",
      id: "EMP001",
      department: "Design Department",
      dueDate: "Feb 25, 2024",
      status: "In Progress"
    },
    {
      title: "API Integration",
      description: "Integrate the new payment gateway API with existing checkout system.",
      id: "EMP001",
      department: "Development Department",
      dueDate: "Feb 20, 2024",
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium">{task.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm ${
              task.status === "Completed" 
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}>
              {task.status}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{task.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex gap-4">
              <span>{task.id}</span>
              <span>{task.department}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Due: {task.dueDate}</span>
              <PenSquare className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;