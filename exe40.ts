// Define an interface for the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

// Function to create an album object
function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three different album objects using the makeAlbum function
const album1: Album = makeAlbum('Artist 1', 'Album 1');
const album2: Album = makeAlbum('Artist 2', 'Album 2', 12); // Including the number of tracks
const album3: Album = makeAlbum('Artist 3', 'Album 3');

// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);




