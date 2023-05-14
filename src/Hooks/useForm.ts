import { useState } from "react"



export const useForm = <T>(initialForm:T) => {

      const [formState, setformState] = useState(initialForm);
    
    
      const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{

        const  {value, name } = event.target;
    

          setformState({  

               ...formState,
               [name]: value,
            });
          
         
      }
    
  return (

        {

            formState: formState,
            onInputChange: onInputChange,


        }


     )
}
