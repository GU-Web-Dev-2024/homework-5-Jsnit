// List of artworks
const initialArtworks = [
    { title: 'Starry Night', artist: 'Vincent van Gogh', img: 'images/Starry_Night.jpg' },
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', img: 'images/Mona_Lisa.jpg' },
    { title: 'The Persistence of Memory', artist: 'Salvador Dalí', img: 'images/the_persistence_of_memory.jpg' }
];

const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'images/The_Scream.jpg' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'images/girl_with_pearl_earring.jpeg' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'images/Birth_of_Venus.jpg' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'images/The_Night_Watch.jpg' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'images/the_kiss.jpeg' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'images/American_Gothic.jpg' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'images/las_meninas.jpeg' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'images/The_Last_Supper.jpg' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'images/Water_Lilies.jpg' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'images/Starry_night_over_rhone.jpg' }
    { title: 'Starry Night', artist: 'Vincent van Gogh', img: 'images/Starry_Night.jpg' },
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', img: 'images/Mona_Lisa.jpg' },
    { title: 'The Persistence of Memory', artist: 'Salvador Dalí', img: 'images/the_persistence_of_memory.jpg' }
];

// DOM element selections
const addArtButton = document.getElementById('add-art-button');
const resetButton = document.getElementById('reset-button');
// Selects the first & only .art-grid element
const artGrid = document.querySelector('.art-grid');
const counter = document.getElementById('counter');

let artCounter = 0;

// Function to update the counter
function updateCounter() {
    counter.textContent = `Artworks Viewed: ${artCounter}`;
}

// Function to handle artwork being clicked (viewed)
function markAsViewed(event) {
    // Reference the art panel, target of event listener
    const artPanel = event.currentTarget;

    // Check if this panel has already been clicked
    if (!artPanel.classList.contains('viewed')) {
        artCounter++;
        // Add 1 to view counter & mark as viewed
        updateCounter();
        artPanel.classList.add('viewed');
        artPanel.style.backgroundColor = '#d0f0d0'; //Change background to indicate viewed
    }
}

// Function to create and add a new art panel
function createArtPanel(artwork) {
    // Create artwork panel as a new div element 
    const artPanel = document.createElement('div');
    // Set the class to the art panel div
    artPanel.classList.add('art-panel');
    // Add image
    const img = document.createElement('img');
    img.src = artwork.img;
    img.alt = artwork.title;
    // Add image description
    const p = document.createElement('p');
    p.textContent = `${artwork.title} by ${artwork.artist}`;

    // Set the art-panel div elements
    artPanel.appendChild(img);
    artPanel.appendChild(p);

    // Add event listener to art-panel div pointing to the markAsViewed() function
    artPanel.addEventListener('click', markAsViewed);
    // Add art-panel div to the art-grid section
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
