"use strict";
// Function to create an album object
function makeAlbum(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three different album objects using the makeAlbum function
const album1 = makeAlbum('Artist 1', 'Album 1');
const album2 = makeAlbum('Artist 2', 'Album 2', 12); // Including the number of tracks
const album3 = makeAlbum('Artist 3', 'Album 3');
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
