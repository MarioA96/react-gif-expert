import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas en getGifs', () => {

    test('Debe de retornar un arreglo de gifs ', async() => {

        const gifs = await getGifs('One Punch');
        // console.log(gifs);
        //no se puede hacer un expect(gifs.length).toBe(0); porque es una promesa
        //No es recomendable hacer un expect(gifs).toBe(10); porque puede cambiar el api

        // Asi solo estamos evaluando que el arreglo tenga al menos un elemento
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String) //Sobre esto mismo es posible hacer mas pruebas
        });

    })

})
