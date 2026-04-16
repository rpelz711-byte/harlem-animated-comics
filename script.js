const container = document.getElementById('content-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

/**
 * COMIC PAGE LIST
 * Ensure filenames match your GitHub/Replit exactly.
 */
const comicPages = [
    { type: 'title', url: 'page1-comics.png' },
    { type: 'img', url: 'page2-comics.png' },
    { type: 'img', url: 'page3-comics.png' },
    { type: 'img', url: 'page4-comics.png' },
    { type: 'img', url: 'page5-comics.png' },
    { type: 'img', url: 'page6-comics.png' },
    { type: 'img', url: 'page7-comics.png' },
    { type: 'img', url: 'page8-comics.png' }
];

let currentIndex = 0;

function updatePage() {
    const page = comicPages[currentIndex];
    container.innerHTML = ''; // Clear previous content

    // Create Background Layer
    const bg = document.createElement('div');
    bg.className = 'full-bg';
    bg.style.backgroundImage = `url('${page.url}')`;
    container.appendChild(bg);

    // Add Overlay if it's the Title Page
    if (page.type === 'title') {
        const overlay = document.createElement('div');
        overlay.className = 'title-overlay';
        overlay.innerHTML = `
            <h1 class="title-harlem">HARLEM</h1>
            <p class="title-series">An Animated Musical Time-Travel Series</p>
        `;
        container.appendChild(overlay);
    }
}

// Button Listeners
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % comicPages.length;
    updatePage();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + comicPages.length) % comicPages.length;
    updatePage();
});

// Start the site on Page 1
updatePage();
