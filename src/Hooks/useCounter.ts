
import {useState, } from 'react'


type Retorno = {


    counter: number,
    incrementar: (parametro?:number)=> void,
    decrementar: (parametro?:number)=> void,
    reset: ()=> void
}


export const useCounter = (initialValue: number = 10): Retorno => {


const [counter, setCounter] = useState<number>(initialValue);


    const incrementar = (value:number = 1):void =>{

        if(counter==30) {

            setCounter(initialValue);
            return;
          }

         setCounter(counter+value);
    }


    const decrementar = (value:number = 1):void =>{

         if(counter==0) {

            setCounter(initialValue);
            return;
          }

         setCounter(counter-value);
    }



    const reset = ():void =>{

         setCounter(initialValue);
    }


    return {

        counter: counter,
        incrementar: incrementar,
        decrementar,
        reset: reset
    }

                       
};