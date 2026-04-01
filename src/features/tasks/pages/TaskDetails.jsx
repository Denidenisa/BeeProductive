import { NavLink, useParams } from "react-router";

export const TaskDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-main-50 py-10 px-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        {/* Retour */}
        <NavLink
          to="/tasks"
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary-500 hover:text-secondary-700 transition-colors w-fit"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Revenir à la liste des tâches
        </NavLink>

        {/* En-tête */}
        <div className="flex items-center gap-3">
          <span className="bg-secondary-100 text-secondary-600 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
            Tâche n°{id}
          </span>
          <h1 className="text-3xl font-serif text-main-300">Détails de la tâche</h1>
        </div>

        {/* Card */}
        <div className="bg-white border border-main-100 rounded-2xl p-7 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-main-700 w-28">Statut</span>
            <span className="bg-secondary-100 text-secondary-700 text-xs font-semibold px-3 py-1 rounded-full">
              En cours
            </span>
          </div>
          <hr className="border-main-100" />
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="font-medium text-main-700 w-28">Assignée à</span>
            <span>Eren Jager </span>
          </div>
          <hr className="border-main-100" />
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="font-medium text-main-700 w-28">Échéance</span>
            <span>15 avril 2026</span>
          </div>
          <hr className="border-main-100" />
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <span className="font-medium text-main-700 w-28">Description</span>
            <span>Acheter des pommes .</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="btn">
            Marquer comme terminée
          </button>
          <button className="border border-secondary-200 text-secondary-600 text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-85 transition-opacity">
            Modifier
          </button>
        </div>

      </div>
    </div>
  );
};