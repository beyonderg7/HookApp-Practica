import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from '../../src/03-Examples/MultipleCustomHooks';
import React from "react";
import * as useFetchModule from "../../src/Hooks/useFetch";

jest.mock("../../src/Hooks/useFetch", () => ({
  useFetch: jest.fn(),
}));

describe('Pruebas en <MutipleCustomHooks>', () => {

  test('Debe mostrar el componente por defecto', () => {

    (useFetchModule.useFetch as jest.Mock).mockReturnValue({
      data:null,
      isLoading: true,
      hasError: null
    });
    render(<MultipleCustomHooks></MultipleCustomHooks>);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Bad Frases34'));

    const button = screen.getByRole('button', { name: 'Next quote' }) as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
    // Verificar las llamadas a la función simulada
    expect(useFetchModule.useFetch).toHaveBeenCalledTimes(1);

    screen.debug();
  });



  test('Debe de mostrar un Quote', () => {

    (useFetchModule.useFetch as jest.Mock).mockReturnValue({
      data:[ { author: "Autor", quote: "Cita" }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks></MultipleCustomHooks>);

    expect(screen.getByText('Breaking Bad Frases34'));

    const button = screen.getByRole('button', { name: 'Next quote' }) as HTMLButtonElement;

    expect(button.disabled).toBeFalsy();

    expect(useFetchModule.useFetch).toHaveBeenCalledTimes(2);

    screen.debug();

  });



});
 

// jest.mock("../../src/Hooks/useFetch", () => ({
//   useFetch: jest.fn().mockReturnValue({
//     data: [{ quote: 'Hola soy german', author: 'German garmendia'}],
//     isLoading: false,
//     hasError: null
//   })
// }));

        


    





