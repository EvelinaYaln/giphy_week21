searchGif = () => {
    const gif = document.getElementById('gifName').value;

    fetch('https://api.giphy.com/v1/gifs/search?api_key=T0ELDkMItmoHmak4BGbWDSazUqh8XZjz&q=' + gif + '&limit=5&offset=0&rating=g&lang=en')

    .then(response => response.json())
        .then(gifs => {
            for (let gif of gifs.data) {
                console.log(`${gif.url}`);
                document.getElementById('img').src = `${gif.url}`;
            }

        })
        .catch(error => console.log(error));
}

search.addEventListener("click", searchGif);