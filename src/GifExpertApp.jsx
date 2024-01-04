import { useState } from "react"
// Esto es lo mismo que poner "./components/AddCategory" y "./components/GifGrid"
// porque en el archivo index.js de la carpeta components se exporta todo
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        // categories.push(newCategory);
        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
        //Tambien de otra forma puede ser
        //setCategories( cats => [...cats, 'Valorant']);
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Listado de gif */}
                { 
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={ category } 
                        />
                    ))
                }
            {/* Gif Item */}
        </>
    )
}
