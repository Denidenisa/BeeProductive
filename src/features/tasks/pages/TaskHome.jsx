import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { taskService } from "../services/taskService";
import { TaskModal } from "../components/TaskModal";

export const TaskHome = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await taskService.getAll();
      console.log("Réponse API :", data);
      setTasks(data.tasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleCreate = async (form) => {
    await taskService.create(form);
    setShowModal(false);
    fetchTasks();
  };

  const handleUpdate = async (form) => {
    await taskService.update(editTask._id, form);
    setEditTask(null);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer cette tâche ?")) return;
    await taskService.remove(id);
    fetchTasks();
  };

  return (
    <>
      <section className="py-6 px-12 flex items-center gap-6">
        <img className="w-40" src="/images/beehome2.svg" alt="abeille" />
        <h1 className="text-xs font-semibold uppercase text-secondary-400 mb-1">
          Bonjour, Miel sucré ⋆˚🐝˖°﹒
        </h1>
      </section>

      <section className="px-12 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif text-main-700">Mes tâches</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-secondary-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-85 transition-opacity"
          >
            + Nouvelle tâche
          </button>
        </div>

        {loading && <p className="text-sm text-main-400">Chargement...</p>}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {!loading && tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white border border-main-100 rounded-2xl px-5 py-4 flex items-center justify-between"
          >
            <div className="flex flex-col gap-1">
              <span className="font-medium text-main-700 text-sm">{task.name}</span>
              <span className="text-xs text-main-400">{task.before}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-secondary-100 text-secondary-700 text-xs font-semibold px-3 py-1 rounded-full">
                {task.isDone ? "Terminée" : "En cours"}
              </span>
              <NavLink
                to={`/task/${task._id}`}
                className="border border-main-200 text-main-500 text-xs px-3 py-1.5 rounded-lg hover:opacity-80 transition-opacity"
              >
                Voir
              </NavLink>
              <button
                onClick={() => setEditTask(task)}
                className="border border-main-200 text-main-500 text-xs px-3 py-1.5 rounded-lg hover:opacity-80 transition-opacity"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="border border-red-200 text-red-400 text-xs px-3 py-1.5 rounded-lg hover:opacity-80 transition-opacity"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </section>

      {showModal && (
        <TaskModal onClose={() => setShowModal(false)} onSubmit={handleCreate} />
      )}
      {editTask && (
        <TaskModal onClose={() => setEditTask(null)} onSubmit={handleUpdate} initial={editTask} />
      )}
    </>
  );
};