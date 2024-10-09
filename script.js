// List of artworks
const initialArtworks = [
    { title: 'Starry Night', artist: 'Vincent van Gogh', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' },
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'The Persistence of Memory', artist: 'Salvador Dalí', img: 'https://via.placeholder.com/200' }
];

const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

// DOM element selections
const addArtButton = document.getElementById('add-art-button');
const resetButton = document.getElementById('reset-button');
const artGrid = document.querySelector('.art-grid');
const counter = document.getElementById('counter');

let artCounter = 0;

// Function to update the counter
function updateCounter() {
    counter.textContent = `Artworks Viewed: ${artCounter}`;
}

// Function to handle artwork being clicked (viewed)
function markAsViewed(event) {
    const artPanel = event.currentTarget;

    if (!artPanel.classList.contains('viewed')) {
        artCounter++;
        updateCounter();
        artPanel.classList.add('viewed');
        artPanel.style.backgroundColor = '#d0f0d0'; // Optional: change background to indicate viewed
    }
}

// Function to create and add a new art panel
function createArtPanel(artwork) {
    const artPanel = document.createElement('div');
    artPanel.classList.add('art-panel');

    const img = document.createElement('img');
    img.src = artwork.img;
    img.alt = artwork.title;

    const p = document.createElement('p');
    p.textContent = `${artwork.title} by ${artwork.artist}`;

    artPanel.appendChild(img);
    artPanel.appendChild(p);

    artPanel.addEventListener('click', markAsViewed);

    artGrid.appendChild(artPanel);
}

// Function to initialize the gallery with the first 3 artworks
function initializeGallery() {
    for (let i = 0; i < initialArtworks.length; i++) {
        createArtPanel(initialArtworks[i]);
    }
}

// Function to add a new random artwork
function addRandomArtwork() {
    const randomIndex = Math.floor(Math.random() * newArtworks.length);
    const artwork = newArtworks[randomIndex];
    createArtPanel(artwork);
}

// Function to reset the gallery
function resetGallery() {
    artGrid.innerHTML = '';
    artCounter = 0;
    updateCounter();
    initializeGallery();
}

// Event listeners
addArtButton.addEventListener('click', addRandomArtwork);
resetButton.addEventListener('click', resetGallery);

// Initialize gallery on page load
initializeGallery();
updateCounter();
