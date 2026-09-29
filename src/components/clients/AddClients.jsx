//           **             **              **
//           **             **              **
//           **             **              **
//           **             **              **
//           **             **              **
//           **             **              **
//        ********       ********        ********
//         ******         ******          ******
//          ****           ****            ****
//           **             **              **
// Im sorry m,s yacoub  انا عارف ان الكود صلصه بس انا هعمل الفلاديشن هنا وسب بقا برحتك واشتم عادي الشتيمه بتلف تلف وترجع لصحبها
//  ابسط يعم اديني مرضتش اعمل الفلاديشن هنا و عملتو في ملف منفصل بس بص بقا انا عملت send لل data هنا
import Client from "./client.js";
import { useState } from "react";
export default function AddClients({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let id = Math.floor(Math.random() * 1000000);

    const client = new Client(id, firstName, lastName, email, password, phone);

    const validationErrors = client.validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    const response = await fetch("http://localhost:5000/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-gray-700 bg-[#0B1120] p-7 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-4 text-2xl text-gray-400 hover:text-white"
        >
          ×
        </button>

        <div className="mb-7">
          <h2 className="text-2xl font-semibold">Add New Client</h2>
          <p className="mt-1 text-sm text-gray-400">
            Enter the client information below
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm text-gray-400">
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
                className="h-11 rounded-lg border border-gray-700 bg-[#1A2030] px-3 text-white outline-none focus:border-blue-500"
              />

              {errors.firstName && (
                <p className="text-sm text-red-400">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-sm text-gray-400">
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
                className="h-11 rounded-lg border border-gray-700 bg-[#1A2030] px-3 text-white outline-none focus:border-blue-500"
              />
              {errors.lastName && (
                <p className="text-red-400">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="email" className="text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="h-11 rounded-lg border border-gray-700 bg-[#1A2030] px-3 text-white outline-none focus:border-blue-500"
              />

              {errors.email && (
                <p className="text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="password" className="text-sm text-gray-400">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="h-11 rounded-lg border border-gray-700 bg-[#1A2030] px-3 text-white outline-none focus:border-blue-500"
              />

              {errors.password && (
                <p className="text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="phone" className="text-sm text-gray-400">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="h-11 rounded-lg border border-gray-700 bg-[#1A2030] px-3 text-white outline-none focus:border-blue-500"
              />

              {errors.phone && (
                <p className="text-sm text-red-400">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm text-gray-300 hover:bg-gray-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-green-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-600"
            >
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
