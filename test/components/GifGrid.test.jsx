import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Simulamos el custom hook
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        // screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

    });

    //Las pruebas no suponen probar un custom hook, sino probar el componente que usa el custom hook
    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    
        //Creamos un arreglo de imagenes para simular el custom hook
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquier/Saitama.jpg',
                title: 'Saitama'
            },
            {
                id: '123',
                url: 'https://localhost/cualquier/Goku.jpg',
                title: 'Goku'    
            }
        ];
        // Simulamos el custom hook con un mock
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length ).toBe(2);

    });
    
    

})

