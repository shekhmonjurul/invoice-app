import React, { useState } from 'react';
import { useForm } from '@inertiajs/react'

const NewCustomerForm: React.FC = () => {
const { data, setData, post, processing, errors } = useForm<{
  customer_type: 'business' | 'individual'
  salutation: string
  first_name: string
  last_name: string
  company_name: string
  display_name: string
  currency: string
  email: string
  phone: string
  phone_type: 'Work' | 'Mobile'
}>({
  customer_type: 'business',
  salutation: '',
  first_name: '',
  last_name: '',
  company_name: '',
  display_name: '',
  currency: '',
  email: '',
  phone: '',
  phone_type: 'Work',
})

interface FlashProps {
  flash: {
    success?: string;
  };
}

const currencyOptions = [
    { code: 'BDT', label: 'BDT - Bangladeshi Taka' },
    { code: 'USD', label: 'USD - US Dollar' },
    { code: 'EUR', label: 'EUR - Euro' },
    { code: 'INR', label: 'INR - Indian Rupee' },
    { code: 'GBP', label: 'GBP - British Pound' },
    { code: 'AUD', label: 'AUD - Australian Dollar' },
  ];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
           post(route('customer.store'));

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">New Customer</h2>

      {/* Customer Type */}
      <div className="mb-4">
        <label className="block mb-2">Customer Type</label>
        <div className="flex gap-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Business"
              checked={data.customer_type === 'business'}
              onChange={() => setData('customer_type','business')}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Business</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Individual"
              checked={data.customer_type === 'individual'}
              onChange={() => setData('customer_type','individual')}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Individual</span>
          </label>
        </div>
      </div>

      {/* Primary Contact */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-2">Salutation</label>
          <input
            type="text"
            value={data.salutation}
            onChange={(e) => setData('salutation',e.target.value)}
            placeholder="Mr/Ms"
            className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            value={data.first_name}
            onChange={(e) => setData('first_name',e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Last Name</label>
          <input
            type="text"
            value={data.last_name}
            onChange={(e) => setData('last_name',e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
          />
        </div>
      </div>

      {/* Company Name */}
      <div className="mb-4">
        <label className="block mb-2">Company Name</label>
        <input
          type="text"
          value={data.company_name}
          onChange={(e) => setData("company_name",e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
        />
      </div>

      {/* Display Name */}
      <div className="mb-4">
        <label className="block mb-2 text-red-400">Display Name *</label>
        <input
          type="text"
          value={data.display_name}
          onChange={(e) => setData('display_name',e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
          required
        />
      </div>

      {/* Currency */}
      <div className="mb-4">
        <label className="block mb-2">Currency</label>
        <select
          value={data.currency}
          onChange={(e) => setData('currency',e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
        >
          <option value="">Select currency</option>
          {currencyOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-2">Email Address</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData('email',e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <div className="flex gap-4">
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => setData('phone',e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
          />
          <div className="flex items-center space-x-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={data.phone_type === 'Work'}
                onChange={() => setData('phone_type','Work')}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Work</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={data.phone_type=== 'Mobile'}
                onChange={() => setData('phone_type','Mobile')}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Mobile</span>
            </label>
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={processing}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Save Customer
      </button>
    </form>
  );
};

export default NewCustomerForm;
