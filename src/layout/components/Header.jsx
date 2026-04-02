import { NavLink } from "react-router"
export const Header = () => {

  return (
      <header className="flex justify-between py-4 px-8 bg-secondary-50">
          
          <div className="flex items-center gap-8">
              <img className="w-8" src="/icons/butterfly.svg" alt="logo du site  représentant une abeille" />

              <p className="text-secondary-300 font-bold font-Gramond tracking-widest"> Bee<span className=" text-main-400">Productive</span> </p>
          </div>

          <nav>
                <ul className="flex items-center gap-6 text-lg font-bold">
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks">Tâches</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pomodoro">Pomodoro</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn"to="/auth/login">Me connecter</NavLink>

                    </li>
                    <li>
                        <NavLink className="btn"to="/auth/register">Créer un compte </NavLink>

                    </li>
                </ul>
            </nav>
        </header>
    )
}


