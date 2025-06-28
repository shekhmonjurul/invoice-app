import React from 'react';

const NewInvoice = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl max-w-5xl mx-auto shadow-xl">
      <h1 className="text-2xl font-bold mb-6">New Invoice</h1>

      {/* Customer Section */}
      <div className="mb-4">
        <label className="block mb-1 text-sm">Customer Name*</label>
        <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
          <option>Select or add a customer</option>
        </select>
      </div>

      {/* Invoice Info */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm">Invoice#*</label>
          <input type="text" value="INV-000001" readOnly className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
        </div>
        <div>
          <label className="block mb-1 text-sm">Invoice Date*</label>
          <input type="date" value="2025-06-18" className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
        </div>
        <div>
          <label className="block mb-1 text-sm">Due Date</label>
          <input type="date" value="2025-06-18" className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
        </div>
      </div>

      {/* Item Table */}
      <div className="overflow-auto border border-gray-700 rounded mb-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2 text-left">Item Details</th>
              <th className="p-2 text-right">Quantity</th>
              <th className="p-2 text-right">Rate</th>
              <th className="p-2 text-right">Tax</th>
              <th className="p-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-2">
                <input type="text" placeholder="Type or click to select an item" className="w-full bg-gray-800 border border-gray-600 rounded p-1" />
              </td>
              <td className="p-2 text-right">1.00</td>
              <td className="p-2 text-right">0.00</td>
              <td className="p-2 text-right">
                <select className="bg-gray-800 border border-gray-600 rounded p-1">
                  <option>Select a Tax</option>
                </select>
              </td>
              <td className="p-2 text-right">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Row Buttons */}
      <div className="flex gap-4 mb-4">
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">+ Add New Row</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">+ Add Items in Bulk</button>
      </div>

      {/* Notes & Terms */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm">Customer Notes</label>
          <textarea defaultValue="Thanks for your business." className="w-full h-20 p-2 rounded bg-gray-800 border border-gray-700" />
        </div>
        <div>
          <label className="block mb-1 text-sm">Terms & Conditions</label>
          <textarea placeholder="Enter the terms and conditions..." className="w-full h-20 p-2 rounded bg-gray-800 border border-gray-700" />
        </div>
      </div>

      {/* Total */}
      <div className="text-right mb-4">
        <p className="text-lg font-semibold">Total (BDT): 0.00</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Save as Draft</button>
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Save and Send</button>
        <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-500">Cancel</button>
      </div>
    </div>
  );
};

export default NewInvoice;
