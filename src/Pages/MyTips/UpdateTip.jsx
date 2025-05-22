import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

export const UpdateTip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [tipData, setTipData] = useState(null);

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const res = await fetch(`https://gardenhub.vercel.app/tips/${id}`);
        const data = await res.json();
        setTipData(data);
      } catch (error) {
        console.error("Failed to fetch tip data:", error);
      }
    };

    fetchTip();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedTip = {
      title: form.title.value,
      topic: form.topic.value,
      description: form.description.value,
      category: form.category.value,
      imageUrl: form.imageUrl.value,
      availability: form.availability.value,
      difficulty: form.difficulty.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    try {
      const res = await fetch(`https://gardenhub.vercel.app/tips/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTip),
      });

      const result = await res.json();
      console.log("Update result:", result);

      if (res.ok) {
        await Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Tip updated successfully!",
          confirmButtonColor: "#22c55e",
        });
        navigate("/mytips");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result?.message || "Failed to update tip.",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  if (!tipData) return <p className="text-center mt-6">Loading tip data...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-3xl font-bold mb-6 text-green-700">
        ✏️ Update Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          defaultValue={tipData.title}
          placeholder="Title"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="topic"
          defaultValue={tipData.topic}
          placeholder="Topic"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          defaultValue={tipData.description}
          placeholder="Description"
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
        <input
          type="text"
          name="category"
          defaultValue={tipData.category}
          placeholder="Category"
          className="w-full p-2 border rounded"
        />
        <input
          type="url"
          name="imageUrl"
          defaultValue={tipData.imageUrl}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />
        <select
          name="availability"
          defaultValue={tipData.availability}
          className="w-full p-2 border rounded"
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
        <select
          name="difficulty"
          defaultValue={tipData.difficulty}
          className="w-full p-2 border rounded"
        >
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
        </select>
        <input
          type="email"
          value={user?.email}
          readOnly
          className="w-full p-2 border rounded bg-gray-100"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Update Tip
        </button>
      </form>
    </div>
  );
};
