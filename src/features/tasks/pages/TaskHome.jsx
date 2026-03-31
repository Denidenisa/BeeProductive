import { NavLink } from "react-router"

export const TaskHome = ()=>{
  return(
    <>

<section className="py-6 px-12 flex items-center gap-6">
      <img  className="w-20 "src ="/icons/butterflyy.png" alt="Le papaillion rose" />
      <h1  className = "text-3xl text-main-300 font-Garamond">OOH mais Donuts sucrée au sucre, tu as plein de tâches à faire ... </h1>
      
    </section>
    <section className="flex flex-col px-12">
      <NavLink to= "/task/1">
      Voir détails tâche page 1 
      </NavLink>

      <NavLink to= "/task/2">
      Voir détails tâche page 2 
      </NavLink>

      <NavLink to= "/task/3">
      Voir détails tâche page 3 
      </NavLink>
      
    </section>
    </>
  )

}