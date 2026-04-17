import axios from 'axios';
import { getDefaultStore } from 'jotai';
import { tokenAtom } from '../atoms/auth.atom';


const userService = {

    getAll: async () => {

        // Jotai: Acces au contenu de l'atom en dehors de React
        const token = getDefaultStore().get(tokenAtom);

        // Requete avec axios en ajoutant le token dans le header
  const response = await axios.get('http://localhost:3000/api/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Renvoi des données
        return response.data.users;
    }

};

export default userService;
