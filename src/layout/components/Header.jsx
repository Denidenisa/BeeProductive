
export const Header = () => {

  return (
      <header className="flex justify-between py-4 px-8 bg-secondary-50">
          
          <div className="flex items-center gap-4">
              <img className="w-12" src="/icons/butterfly.svg" alt="logo du site  représentant un papillion" />

              <p className="text-main-400   font-bold font-Gramond tracking-widest"> Butterfly<span className="text-secondary-400">Productivity</span>Effect </p>
          </div>

          <nav>
              <ul className="flex items-center gap-4">
                  <li>
                      <a href="">Accueil</a>
                  </li>
                  <li>
                      <a href="">Tâches</a>
                  </li>
                  <li>
                      <a href="">Pomodoro</a>
                  </li>
              </ul>
          </nav>
      </header>
  )
}

