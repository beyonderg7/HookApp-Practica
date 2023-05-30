import { createContext } from "react";


type user = {
    
    id: number,
    name: string,
    email: string
}

type ContextType = {

    user: user
    setUser: (parametro:user) => void
}





const inicial:ContextType = {

    user: {
        id: 1,
        name: 'Marco',
        email: 'marcoTarma21@gmail.com'

    },
    setUser: () => {}

}

 export const UserContext = createContext<ContextType>(inicial);