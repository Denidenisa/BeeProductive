import App from "./App";

import { NotFound } from "./layout/pages/NotFound";
import { Home } from "./layout/pages/Home"
import { TaskHome } from "./features/tasks/pages/TaskHome";
import { TaskDetails } from "./features/tasks/pages/TaskDetails";

import { AboutHome } from "./features/tasks/pages/AboutHome";
import { FAQ } from "./features/tasks/pages/FAQ";
import { Register } from "./features/auth/pages/Register";

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

            {
                path : 'faq',
                element : <FAQ/>
                
            },
            {
                path : 'about',
                element : <AboutHome/>
                
            },
            
            {
                path : 'auth',
                children : [
                    {
                        path : 'register',
                        element : <Register />
                    }
                ]
            },


          

          

         







            // Chemin qui signifie "si aucun des chemins défini au dessus" donc attention à toujours le mettre en dernier
            {
                path : '*',
                element : <NotFound />
            }
        ]
    }
]