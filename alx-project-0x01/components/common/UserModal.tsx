import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC <UserModalProps> = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState<Partial<UserData>>({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: { lat: '', lng: '' }
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as UserData);
    onClose();
};

if(!open) return null;

return(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Add New User</h2>
        <button
        type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
        Click Here
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="address.street"
              placeholder="Street"
              value={formData.address?.street}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="address.suite"
              placeholder="Suite"
              value={formData.address?.suite}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="address.city"
              placeholder="City"
              value={formData.address?.city}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="address.zipcode"
              placeholder="Zipcode"
              value={formData.address?.zipcode}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Company Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Company</h3>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="company.name"
              placeholder="Company Name"
              value={formData.company?.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="company.catchPhrase"
              placeholder="Catch Phrase"
              value={formData.company?.catchPhrase}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="company.bs"
              placeholder="Business Service"
              value={formData.company?.bs}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  </div>
);

}
export default UserModal; 