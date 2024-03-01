import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => {
  
    test('Debe de cambiar el valor de la caja de texto', () => {
        //El componente AddCategory requiere una funcion para poder agregar un nuevo elemento (props onNewCategory)
        render(<AddCategory onNewCategory={ ()=> {} } />);

        //Para disparar un evento necesito una referencia al elemento
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});

        expect( input.value ).toBe('Saitama');
        // screen.debug();
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); //Simulamos la funcion <Mock>

        // 1. Simular el inputChange
        // 2. Simular el submit
        // 3. onNewCategory debe de haber sido llamada
        // 4. El valor del input debe de estar ''

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Cambiamos el valor del input
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe(''); // Nos aeeguramos que el input este vacio luego del submit
        
        expect(onNewCategory).toHaveBeenCalled(); //Nos aseguramos que la funcion se haya llamado
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Nos aseguramos que la funcion se haya llamado
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); //Nos aseguramos que la funcion se haya llamado con una funcion como argumento
    })

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
        
        const onNewCategory = jest.fn(); //Simulamos la funcion <Mock>

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled(); //Es lo mismo que la linea anterior
    })
    
    

})

