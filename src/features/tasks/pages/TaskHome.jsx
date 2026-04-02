import { NavLink } from "react-router";

const tasks = [
  { id: 1, label: "Préparer le bataillon pour lundi", emoji: "⚔️", tag: "Travail" },
  { id: 2, label: "Aller nourrir les chevaux", emoji: "🐎", tag: "Urgent" },
  { id: 3, label: "Aller s'amuser", emoji: "😃", tag: "Perso" },
];

export const TaskHome = () => {
  return (
    <div className="  px-6 py-10 max-w-xl mx-auto">

      {/* En-tête */}
      <div className="mb-10">
        <p className="text-xs font-semibold  uppercase text-secondary-400 mb-1">
          Bonjour, Miel sucré ⋆˚🐝˖°﹒
        </p>
        <h1 className="font-serif text-2xl text-main-400">
          Tu as {tasks.length} tâches à faire
        </h1>
        <p className="text-sm text-secondary-400 mt-1">Courage, une à la fois *ੈ✩‧₊˚</p>
      </div>

      {/* Liste */}
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <NavLink
            key={task.id}
            to={`/task/${task.id}`}
            className="flex items-center gap-4 bg-white border border-main-100 rounded-2xl px-5 py-4 shadow-sm hover:border-main-300 transition-colors"
          >
            <span className="text-xl w-9 h-9 flex items-center justify-center bg-main-50 rounded-xl ">
              {task.emoji}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-main-900 ">{task.label}</p>
              <span className="text-[10px] font-semibold  uppercase text-secondary-400">
                {task.tag}
              </span>
            </div>
            <span className="text-secondary-400 text-base">→</span>
          </NavLink>
        ))}
      </div>

    </div>
  );
};