import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Add New Prediction</h2>
          <p className="text-sm text-gray-600">Coming soon: Prediction form for upcoming matches.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Manage Users</h2>
          <p className="text-sm text-gray-600">View subscribers, upgrade accounts, handle access.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Subscription Stats</h2>
          <p className="text-sm text-gray-600">Track weekly, monthly, and yearly plans.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Site Settings</h2>
          <p className="text-sm text-gray-600">Control appearance, contact info, banner text, etc.</p>
        </div>
      </div>
    </div>
  );
}
