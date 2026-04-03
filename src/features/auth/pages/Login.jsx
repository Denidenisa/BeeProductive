import { useId } from "react";
import { useNavigate } from "react-router";
import authService from "../../../service/auth.service";
import { useSetAtom } from "jotai";
import { tokenAtom } from "../../../atoms/auth.atom";
   
export const Login = () => {
 
    const id = useId();
    const navigate = useNavigate();
    const setToken =useSetAtom(tokenAtom)
 
    const handleLoginSubmit = async (formData) => {
        const data = Object.fromEntries(formData.entries());
        console.log("data:", data);
       
        
        try {
           
            const response = await authService.login(data);
            console.log("Response:", response);
            setToken(response.token ?? response);
            navigate("/");
        } catch (error) {
            console.error("Erreur login:", error.response?.data);
        }
    }

    return (
        <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center px-4 py-14">
            <div className="w-full max-w-md">


                <div className="mb-10 text-center">
                    <h1 className="font-serif text-3xl font-bold text-secondary-400">
                        Se connecter
                    </h1>
                    <div />
                </div>

                <form
                    action={handleLoginSubmit}
                    className="bg-white rounded-2xl shadow-sm border border-main-200 p-8 flex flex-col gap-5"
                >

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


                    <button
                        type="submit"
                        className="btn"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
};