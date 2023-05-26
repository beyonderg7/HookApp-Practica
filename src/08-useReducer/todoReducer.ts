

type todo = {
    id: number,
    descripcion: string,
    done: boolean
    }




type Tipo1 = todo[];

type action = {

    type:string,
    payload:todo
}

const init:Tipo1 = [{
    id: 0,
    descripcion: '',
    done: false
}]


export const todoReducer = (initialState:Tipo1=init,action:action) => {



        switch (action.type) {
            case 'Add Todo':
                
               return [...initialState, action.payload];

            case 'Remove Todo':
                
               return initialState.filter((todo) => todo.id != action.payload.id);
        
            default:
                return initialState;
        }

}