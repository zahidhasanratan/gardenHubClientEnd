import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

export const ShareTip = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    difficulty: "Easy",
    description: "",
    imageUrl: "",
    category: "Composting",
    availability: "Public",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tipData = {
      ...formData,
      userEmail: user.email,
      userName: user.displayName,
    };

    try {
      const res = await fetch("http://localhost:5000/tips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tipData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Tip Shared Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          title: "",
          topic: "",
          difficulty: "Easy",
          description: "",
          imageUrl: "",
          category: "Composting",
          availability: "Public",
        });
      } else {
        throw new Error("Failed to share tip");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
        ➕ Share a Garden Tip
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Tip Title"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Plant Type/Topic"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={4}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        >
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Hydroponics</option>
          <option>Herb Gardening</option>
        </select>

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <input
          type="text"
          value={user?.displayName}
          readOnly
          className="w-full px-4 py-2 border border-gray-200 bg-gray-100 rounded text-gray-600"
        />

        <input
          type="email"
          value={user?.email}
          readOnly
          className="w-full px-4 py-2 border border-gray-200 bg-gray-100 rounded text-gray-600"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Submit Tip
        </button>
      </form>
    </section>
  );
};
