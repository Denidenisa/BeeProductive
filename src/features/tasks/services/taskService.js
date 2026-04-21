import { getDefaultStore } from 'jotai';
import { tokenAtom } from '../../../atoms/auth.atom';

const API_URL = "http://localhost:3000/api/tasks";

const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getDefaultStore().get(tokenAtom)}`,
});

export const taskService = {
  getAll: async () => {
    const res = await fetch(API_URL, { headers: headers() });
    if (!res.ok) throw new Error("Erreur chargement tâches");
    return res.json();
  },

  getById: async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { headers: headers() });
    if (!res.ok) throw new Error("Tâche introuvable");
    return res.json();
  },

  create: async (data) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur création");
    return res.json();
  },

  update: async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur modification");
    return res.json();
  },

  updateStatus: async (id, status) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error("Erreur statut");
    return res.json();
  },

  remove: async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: headers(),
    });
    if (!res.ok) throw new Error("Erreur suppression");
   
  },
};