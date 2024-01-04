export const getGifs = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gU2FR5s45xhXCf50YmYpBnkeTw0ONI70&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url //el ? es para verificar si viene la propiedad
    }));

    console.log(gifs);
    return gifs;
};