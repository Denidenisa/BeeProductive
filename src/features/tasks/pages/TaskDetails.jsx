import { NavLink, useParams } from "react-router"

export const TaskDetails =()=>{
  const {id}=useParams()
  return(
    <>
    <section className ="py-4 px-12">
      <NavLink className="text-secondary-400 underline" to="/tasks">Revenir à la liste des tâches </NavLink>
      <h1 className="text-3xl text-main-300">Tâche n°{id} </h1>
    </section>
    
    </>
  )
}