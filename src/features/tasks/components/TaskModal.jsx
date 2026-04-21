import { useState, useEffect } from "react";
import { getDefaultStore } from "jotai";
import { tokenAtom } from "../../../atoms/auth.atom";

const API = "http://localhost:3000/api";

const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getDefaultStore().get(tokenAtom)}`,
});

export const TaskModal = ({ onClose, onSubmit, initial = {} }) => {
  const [form, setForm] = useState({
    name: initial.name || "",
    before: initial.before || "",
    categoryId: initial.categoryId?._id || initial.categoryId || "",
    fromUserId: initial.fromUserId?._id || initial.fromUserId || "",
    toUserId: initial.toUserId?._id || initial.toUserId || "",
  });

  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API}/categories`, { headers: headers() })
      .then((r) => r.json())
      .then((d) => setCategories(d.categories || d))
      .catch(console.error);

    fetch(`${API}/users`, { headers: headers() })
      .then((r) => r.json())
      .then((d) => setUsers(d.users || d))
      .catch(console.error);
  }, []);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-7 w-full max-w-md shadow-2xl flex flex-col gap-5">
        <h2 className="text-xl font-serif text-main-700">
          {initial._id ? "Modifier la tâche" : "Nouvelle tâche"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Nom */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-main-400">Nom</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-main-100 rounded-xl px-4 py-2.5 text-sm text-main-700 bg-main-50 outline-none focus:border-secondary-400"
              placeholder="Ex: Acheter des pommes"
            />
          </div>

          {/* Échéance */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-main-400">Échéance</label>
            <input
              type="date"
              name="before"
              value={form.before}
              onChange={handleChange}
              className="border border-main-100 rounded-xl px-4 py-2.5 text-sm text-main-700 bg-main-50 outline-none focus:border-secondary-400"
            />
          </div>

          {/* Catégorie */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-main-400">Catégorie</label>
            <select
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              required
              className="border border-main-100 rounded-xl px-4 py-2.5 text-sm text-main-700 bg-main-50 outline-none focus:border-secondary-400"
            >
              <option value="">-- Choisir --</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Assignée par */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-main-400">Assignée par</label>
            <select
              name="fromUserId"
              value={form.fromUserId}
              onChange={handleChange}
              required
              className="border border-main-100 rounded-xl px-4 py-2.5 text-sm text-main-700 bg-main-50 outline-none focus:border-secondary-400"
            >
              <option value="">-- Choisir --</option>
              {users.map((u) => (
                <option key={u._id} value={u._id}>{u.firstname} {u.lastname}</option>
              ))}
            </select>
          </div>

          {/* Assignée à */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-main-400">Assignée à</label>
            <select
              name="toUserId"
              value={form.toUserId}
              onChange={handleChange}
              required
              className="border border-main-100 rounded-xl px-4 py-2.5 text-sm text-main-700 bg-main-50 outline-none focus:border-secondary-400"
            >
              <option value="">-- Choisir --</option>
              {users.map((u) => (
                <option key={u._id} value={u._id}>{u.firstname} {u.lastname}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 justify-end mt-2">
            <button
              type="button"
              onClick={onClose}
              className="border border-main-200 text-main-500 text-sm px-5 py-2.5 rounded-xl hover:opacity-80 transition-opacity"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-secondary-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-85 transition-opacity"
            >
              {initial._id ? "Enregistrer" : "Créer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};