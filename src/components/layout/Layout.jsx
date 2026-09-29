import { useState } from "react";

import AddClients from "../clients/AddClients.jsx";
export default function PageLayout() {
  const [showAddClient, setShowAddClient] = useState(false);
  const onClose = function () {
    setShowAddClient(false);
  };
  const handleAddClient = function () {
    setShowAddClient(true);
  };

  return (
    <div className="fixed top-[97px] right-0 w-[calc(100%-22%)] h-[calc(100vh-97px)] bg-[#0B1120] text-white p-10">
      <div className="mb-10">
        <h2>Clients</h2>
        <p>Manage your client roster and track their progress.</p>
      </div>
      <div className="mb-10 flex items-center gap-4">
        <label htmlFor="clientFilter">Filter Clients:</label>
        <input
          type="text"
          placeholder="Search clients..."
          id="clientFilter"
          className="bg-[#1A2030] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[500px] h-[30px] px-2 rounded-md"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Filter
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          onClick={handleAddClient}
        >
          Add Client
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100%-200px)]">
        <img
          src="../public/images/pexels-17.jpg"
          alt="No Clients"
          className="width-[100px] h-[100px] mb-4 rounded-full object-cover "
        />
        <h3 className="text-xl font-bold mb-2">no clients yet</h3>
        <p className="text-gray-400 mb-4">
          Add your first client to start building plans and tracking progress.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          onClick={handleAddClient}
        >
          Add Client
        </button>
      </div>
      {showAddClient && <AddClients onClose={onClose} />}
    </div>
  );
}
