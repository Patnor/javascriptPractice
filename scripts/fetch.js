function init(){
    fetch('../data/artists.json')
    .then((response) => {
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.type);
        console.log(response.bodyUsed);
        console.log(response.headers);
        console.log(response.ok);
        console.log(response.redirected);
        console.log(response.url);

        return response.json();
    })
    .then((result) => {
        const table = initTable();
        const artists = result.artists;
        for(let i = 0; i < artists.length; i++){
            const artist = artists[i];
            const albums = artist.albums;
            for(let j = 0; j < albums.length; j++){
                const album = albums[j];
                const row = createRow(
                    artist.name,
                    album.title,
                    album.year
                );
                table.tBodies[0].appendChild(row);
            }
        }
        document.getElementById('artists-container').appendChild(table);
    })
    .catch((error) => {
        console.error(error);
    })
}

document.addEventListener('DOMContentLoaded', init);