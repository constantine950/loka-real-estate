"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const ContactAgentForm = () => {
  const searchParams = useSearchParams();
  const property = searchParams.get("property");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: property ? `I'm interested in the property: ${property}` : "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-24 pb-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center">
        Contact Agent
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-xl space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default ContactAgentForm;
