import { useFetch } from "../Hooks/useFetch"

 
 export const MutipleCustomHooks = () => {


      const { data, isLoading, hasError} =  useFetch('https://api.breakingbadquotes.xyz/v1/quotes');

    

    // Sintaxis permitida en JavaScrip PERO no permitida en TypeScript 
    // a menos que la constante "data" pueda ser del tipo "any"  
    // Si data es Null o Undefined al negarlo se convierte en True
    //  y al negar True se vuelve False.

    // const {quote, author} = !!data && data[0];


    console.log({ data, isLoading, hasError} );


   return (
    <>
    
        <h1>Breaking Bad Frases</h1>
         <hr></hr>


            {

                isLoading ? (                    
                    <div className="alert alert-info text-center"> 
                    Loading...
                    </div>
                )
                : (

                    <blockquote className="blockquote text-end me-4">
                    <p className="mb-4">{!!data && data[0].quote}</p>
                    <footer className="blockquote-footer">{!!data && data![0].author}</footer>
                </blockquote>

                )
            }



            <button className="btn btn-primary ms-4">

                Next quote
            </button>


     

   

    </>
   )
 }
 