import Home from './Components/Home'
import Home2 from './Components/Home2'
import Result from './Components/Result'
import Speaking from './Components/Speaking'
import Page404 from './Components/Page404'
import Login from './Components/Login'
import CreateAccount from './Components/CreateAccount'

export const routes = [
    {path : '/' , nanme : 'Home', component : Home},
    {path : '/dashboard2' , nanme : 'Home2', component : Home2},
    {path : '/result' , name : 'Result', component : Result},
    {path : '/speaking' ,name : 'Speaking', component : Speaking},
    {path : '/login' , component : Login },
    {path : '/createaccount' , component : CreateAccount },
    {path : '/:catchAll(.*)' , component : Page404}
]