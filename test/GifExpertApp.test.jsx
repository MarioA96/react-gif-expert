import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp/>', () => {

    test('Nos aseguramos de que la aplicacion renderice de forma correcta', () => {
        
        const { getByPlaceholderText } = render( <GifExpertApp/> );
        // console.log(getByText, getByPlaceholderText);
        const inputElement = getByPlaceholderText('Buscar gifs...');
        // const input = screen.getByRole('textbox');
        //Nos aseguramos de que el input exista
        expect(inputElement).toBeDefined();
        //console.log(input);

    })

    test('Debe de mandar el formulario y agregar nuevo elemento', () => {
    
        const { getByText, getByPlaceholderText } = render( <GifExpertApp/> );
        const inputElement = getByPlaceholderText('Buscar gifs...');

        // Agregamos un valor al input
        fireEvent.change(inputElement, { target: { value: 'Valorant' } });
        // screen.debug();
        // Disparamos el evento submit
        fireEvent.submit(inputElement);
        // screen.debug();
        // Nos aseguramos de que el elemento se haya agregado
        const title = getByText('Valorant');
        // Esperamos que el titulo sea Valorant el del elemento que se agrego
        expect(title.innerHTML).toBe('Valorant');

    })

    test('Que pasa si se repite la misma categoria', () => {
      
    })
    
    

})
