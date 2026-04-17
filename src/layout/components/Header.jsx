import { useAtomValue } from "jotai"
import { NavLink } from "react-router"
import { isConnectAtom } from "../../atoms/auth.atom"
import { BtnLogout } from "../../componentsAccount/BtnLogout";

export const Header = () => {

    const isConnect = useAtomValue(isConnectAtom);

    return (
        <header className="flex justify-between items-center py-4 px-8 bg-secondary-50 ">

            <div className="items-center gap-4 hidden lg:flex">
                <img className="w-8" src="/icons/butterfly.svg" alt="logo du site  représentant une abeille" />

                <p className="text-secondary-300 font-bold font-Gramond tracking-widest"> Bee<span className=" text-main-400">Productive</span> </p>

            </div>

            <nav className='flex flex-row justify-between gap-10 w-full lg:w-auto'>
                <ul className="flex items-center gap-6 text-lg font-bold">
                    <li>
                        <NavLink to="/" className='whitespace-nowrap'>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks" className='whitespace-nowrap'>Tâches</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pomodoro" className='whitespace-nowrap'>Pomodoro</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" className='whitespace-nowrap'>Faq</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='whitespace-nowrap'>A propos</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>

                    {!isConnect ? (
                            <div className='btn-grp'>
                                <NavLink className="btn flex flex-row gap-0.5" to="/auth/login">
                                    <span>🐝</span>
                                    <span className='whitespace-nowrap hidden lg:block'>Me connecter</span>
                                </NavLink>
                                <NavLink className="btn flex flex-row gap-0.5" to="/auth/register">
                                    <span>🍯</span>
                                    <span className='whitespace-nowrap hidden lg:block'>Créer un compte</span>
                                </NavLink>
                            </div>
                        ) : (
                            <BtnLogout />
                        )}
                    </li>
                </ul>

            </nav>
        </header>
    )
}
