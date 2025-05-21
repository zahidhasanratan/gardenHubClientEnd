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
      const res = await fetch(`http://localhost:5000/tips/${id}`);
      const data = await res.json();
      setTipData(data);
    };

    fetchTip();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedTip = {
      title: form.title.value,
      category: form.category.value,
      imageUrl: form.imageUrl.value,
      availability: form.availability.value,
    };

    const res = await fetch(`http://localhost:5000/tips/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTip),
    });

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
        text: "Failed to update tip.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  if (!tipData) return <p>Loading tip data...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-green-700">✏️ Update Tip</h2>
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
