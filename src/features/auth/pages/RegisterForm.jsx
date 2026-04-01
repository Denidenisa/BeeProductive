import { useId } from "react";
import { useNavigate } from "react-router";

export const RegisterForm = () => {

    const id = useId();
    const navigate = useNavigate();

    const handleRegisterSubmit = async (formData) => {
        console.log('FormData', formData);

        //conversion des données vers un objet js
        //se base sur la valeur des champs (checkbox ->"on")
        const data = Object.fromEntries(formData.entries());
        console.log('Data', 'data');
        //il faut transformer le formData en object js car la webAPI ne s'attend pas a recevoir des données du type "FormData"

        //utiliser le service qui permet de contacter la webAPI
        await authService.register(data);
        //redirection vers la page d'accueil
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center px-4 py-14">
            <div className="w-full max-w-md">

                {/* Titre du formulaire */}
                <div className="mb-10 text-center">
                    <h1 className="font-serif text-3xl font-bold text-secondary-400">
                        Créer un compte
                    </h1>
                    <div  />
                </div>

                <form
                    action={handleRegisterSubmit}
                    className="bg-white rounded-2xl shadow-sm border border-main-200 p-8 flex flex-col gap-5"
                >
                    {/* Champ email */}
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor={id + 'username'}
                            className="text-xs font-medium tracking-widest uppercase text-secondary-400"
                        >
                            Email d'utilisateur
                        </label>
                        <input
                            id={id + 'username'}
                            type="text"
                            name="email"
                            placeholder="exemple@mail.com"
                            className="border border-main-200 rounded-lg px-4 py-2.5 bg-[#faf9f6] "
                        />
                    </div>

                    {/* Champ prénom */}
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor={id + 'firstname'}
                            className="text-xs font-medium tracking-widest uppercase text-secondary-400"
                        >
                            Prénom
                        </label>
                        <input
                            id={id + 'firstname'}
                            type="text"
                            name="lastname"
                            placeholder="Votre prénom"
                            className="border  border-main-200 rounded-lg px-4 py-2.5  bg-[#faf9f6]  "
                        />
                    </div>

                    {/* Champ nom */}
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor={id + 'lastname'}
                            className=" font-medium tracking-widest uppercase text-secondary-400"
                        >
                            Nom
                        </label>
                        <input
                            id={id + 'lastname'}
                            type="text"
                            name="firstname"
                            placeholder="Votre nom"
                            className=" border  border-main-200 rounded-lg px-4 py-2.5  ] bg-[#faf9f6] "
                        />
                    </div>

                    {/* Champ mot de passe */}
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor={id + 'password'}
                            className=" font-medium tracking-widest uppercase  text-secondary-400"
                        >
                            Mot de passe
                        </label>
                        <input
                            id={id + 'password'}
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="border border-main-200 rounded-lg px-4 py-2.5  bg-[#faf9f6]  "
                        />
                    </div>

                    {/* Bouton de soumission */}
                    <button
                        type="submit"
                        className="btn"
                    >
                        S'enregistrer
                    </button>
                </form>
            </div>
        </div>
    );
};