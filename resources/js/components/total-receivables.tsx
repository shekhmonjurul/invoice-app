import React from "react";

const TotalReceivables: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl w-full mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-2">
        <h2 className="text-xl font-semibold">Total Receivables</h2>
        <button
          className="flex items-center space-x-1 text-blue-400 hover:text-blue-500 transition-colors"
          aria-label="Add New Receivable"
        >
          <span className="text-sm font-medium">New</span>
        </button>
      </div>

      {/* Total amount */}
      <div className="text-gray-300 text-sm font-medium">
        Total Receivables <span className="font-bold text-lg">BDT0.00</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Receivables grid */}
      <div className="grid grid-cols-5 text-center text-sm font-semibold gap-4">
        <div>
          <p className="text-blue-400 uppercase tracking-wide">Current</p>
          <p className="text-white text-lg font-bold">BDT0.00</p>
        </div>
        <div>
          <p className="text-red-400 uppercase tracking-wide">Overdue</p>
          <p className="text-white text-lg font-bold">BDT0.00</p>
          <p className="text-gray-400 text-xs font-normal mt-1">1-15 Days</p>
        </div>
        <div>
          <p className="text-white text-lg font-bold">BDT0.00</p>
          <p className="text-gray-400 text-xs font-normal mt-1">16-30 Days</p>
        </div>
        <div>
          <p className="text-white text-lg font-bold">BDT0.00</p>
          <p className="text-gray-400 text-xs font-normal mt-1">31-45 Days</p>
        </div>
        <div>
          <p className="text-white text-lg font-bold">BDT0.00</p>
          <p className="text-gray-400 text-xs font-normal mt-1">Above 45 days</p>
        </div>
      </div>
    </div>
  );
};

export default TotalReceivables;

