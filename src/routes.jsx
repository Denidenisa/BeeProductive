import App from "./App";

import { NotFound } from "./layout/pages/NotFound";
import { Home } from "./layout/pages/Home"
import { TaskHome } from "./features/tasks/pages/TaskHome";
import { TaskDetails } from "./features/tasks/pages/TaskDetails";

/**
 * @type { import("react-router").RouteObject}
 */
export const routes = [
    {
        path : '/',
        element : <App />,
        children : [
            {
                index : true, 
                /* pour indiquer que c'est l'accueil du path '/' */
                element : <Home/>
            },
            {
                path : 'tasks',
                element : <TaskHome/>
            },
            {
                path : 'task/:id',
                element : <TaskDetails/>
                
            },
            

         







            // Chemin qui signifie "si aucun des chemins défini au dessus" donc attention à toujours le mettre en dernier
            {
                path : '*',
                element : <NotFound />
            }
        ]
    }
]