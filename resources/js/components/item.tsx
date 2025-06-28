import React, { useState } from 'react';

const NewItemForm = () => {
  const [type, setType] = useState<'Goods' | 'Service'>('Goods');

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl max-w-3xl w-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">New Item</h2>
        <button className="text-gray-400 hover:text-red-500 text-2xl">&times;</button>
      </div>

      <form className="space-y-5">
        {/* Type */}
        <div>
          <label className="block text-sm mb-1 font-medium">Type</label>
          <div className="flex gap-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                checked={type === 'Goods'}
                onChange={() => setType('Goods')}
              />
              <span className="ml-2">Goods</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                checked={type === 'Service'}
                onChange={() => setType('Service')}
              />
              <span className="ml-2">Service</span>
            </label>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm mb-1 font-medium">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter item name"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block text-sm mb-1 font-medium">Unit</label>
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            <option>Select or type to add</option>
          </select>
        </div>

        {/* Selling Price */}
        <div>
          <label className="block text-sm mb-1 text-red-400 font-medium">Selling Price*</label>
          <div className="flex gap-2 items-center">
            <span className="bg-gray-800 border border-gray-700 px-3 py-2 rounded">BDT</span>
            <input
              type="number"
              placeholder="0.00"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm mb-1 font-medium">Description</label>
          <textarea
            rows={3}
            placeholder="Optional"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tax */}
        <div>
          <label className="block text-sm mb-1 font-medium">Tax</label>
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            <option>Select a Tax</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-medium"
          >
            Save
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItemForm;
