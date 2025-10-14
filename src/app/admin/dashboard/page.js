"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
  const router = useRouter();
  const [waitlist, setWaitlist] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // API Base URL
  const API = process.env.NEXT_PUBLIC_API_URL;

  // Fetch waitlist entries
  useEffect(() => {
    const token = localStorage.getItem("atalis_admin_token");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    const fetchWaitlist = async () => {
      try {
        const res = await fetch(`${API}/api/waitlist`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch waitlist");
        setWaitlist(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWaitlist();
  }, [API, router]);

  // ➕ Add new entry
  const handleAdd = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("atalis_admin_token");
    if (!token) return router.push("/admin/login");

    try {
      setLoading(true);
      const res = await fetch(`${API}/api/waitlist/manual`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error adding user");

      setWaitlist([data.newEntry, ...waitlist]);
      setNewUser({ name: "", email: "" });
      setShowModal(false);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete entry
  const handleDelete = async (id) => {
    const token = localStorage.getItem("atalis_admin_token");
    if (!token) return router.push("/admin/login");

    if (!confirm("Are you sure you want to delete this entry?")) return;

    try {
      const res = await fetch(`${API}/api/waitlist/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Error deleting entry");
      setWaitlist(waitlist.filter((entry) => entry._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("atalis_admin_token");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-green-600">
          Waitlist Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Add User Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
        >
          + Add User
        </button>
      </div>

      {/* Waitlist Table */}
      <div className="bg-white rounded-xl shadow p-4 md:p-6 overflow-x-auto">
        <table className="min-w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-green-100 text-green-700">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Joined</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {waitlist.map((entry) => (
              <tr
                key={entry._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">{entry.name}</td>
                <td className="p-3">{entry.email}</td>
                <td className="p-3">
                  {new Date(entry.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(entry._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {waitlist.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No entries found yet.
          </p>
        )}
      </div>

      {/* Add User Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Add New Waitlist Entry
              </h2>
              <form onSubmit={handleAdd} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                  >
                    {loading ? "Adding..." : "Add User"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
