import { NavLink } from "react-router"
import { TaskUserSelector } from '../components/TaskUserSelector'

export const TaskHome = () => {
    return (
        <>
            <section className="py-6 px-12 flex items-center gap-6">
                <img className="w-40" src="/images/beehome2.svg" alt="note petite abeille " />

                <h1 className="text-xs font-semibold  uppercase text-secondary-400 mb-1">
          Bonjour, Miel sucré ⋆˚🐝˖°﹒</h1>
            </section>

            <section className="flex flex-col gap-3">
                    {/* TODO : Normalement il y aura les tâches de l'API, là on va juste faire des liens vers des tâches inexistantes pour comprendre le routing */}

                    {/* <NavLink to="/task/1">
                        Voir détails tâche 1
                    </NavLink>

                    <NavLink to="/task/2">
                        Voir détails tâche 2
                    </NavLink>

                    <NavLink to="/task/3">
                        Voir détails tâche 3
                    </NavLink> */}

                    {/* TODO: On tester que le TaskUserSelector fonctionne, on l'utilisera par la suite pour ajouter ou voir des taches */}
                    <TaskUserSelector />

            </section>
        </>
    )
}