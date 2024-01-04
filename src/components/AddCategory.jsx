import { useState } from "react"

//Recibimos el props setCategories del GifExpertApp para poder agregar un nuevo elemento
export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 2) return;
        
        //Agregamos el nuevo elemento
        // setCategories( cats => [inputValue, ...cats]);
        //Limpiamos el input
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={ (event) => onInputChange(event) }
                // otra forma puede ser
                // onChange={ onInputChange } ya que el evento se pasa automaticamente
            />
        </form>
    )
}