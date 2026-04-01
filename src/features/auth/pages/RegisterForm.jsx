import { useId } from "react";
import { useNavigate } from "react-router";
 
 
export const RegisterForm = () => {
 
    const id = useId();
    const navigate = useNavigate()
 const handleRegisterSubmit= async (formData) =>{
     console.log('FormData', formData)

     //conversion des données vers un objet js
     //se base sur la valeur des champs (checkbox ->"on")
     const data =Object.fromEntries(formData.entries())
     console.log('Data','data')
     //il faut transformer le formData en object js car la webAPi ne s'attend pas a recevoir des données du type "FormData"


     //utliser le servicz qui premet de conntacter la webAPI
      await authService.registser(data)
      //redirection vers la page d accueil
       navigate('/')

 }
    return (
        <form action={handleRegisterSubmit}>
            <div>
                <label htmlFor={id + 'username'}> Email d'utilisateur :</label>
                <input id={id + 'username'} type="text" className="border" name="email" />
            </div>
            <div>
                <label htmlFor={id + 'firstname'}>Prénom :</label>
                <input id={id + 'firstname'} type="text" className="border" name="lastname"/>
            </div>
            <div>
                <label htmlFor={id + 'lastname'}>Nom :</label>
                <input id={id + 'lastname'} type="text" className="border"/>
            </div>
            <div>
                <label htmlFor={id + 'password'}>Mot de passe :</label>
                <input id={id + 'password'} type="password" className="border" name="password"/>
            </div>
            <div>
                <button className="btn" type="submit">S'enregistrer</button>
            </div>
        </form>
    )
}
 