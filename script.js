const container = document.getElementById('content-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

/**
 * COMIC PAGE LIST
 * Page 2 now has special internal formatting to create the multi-font, bottom-right look.
 */
const comicPages = [
    { type: 'title', url: 'page1-comics.png' },
    { type: 'hook', url: 'page2-comics.png' }, // Updated to 'hook' type
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
    container.innerHTML = '';

    const bg = document.createElement('div');
    bg.className = 'full-bg';
    bg.style.backgroundImage = `url('${page.url}')`;
    container.appendChild(bg);

    // Page 1 Overlay (CENTERED)
    if (page.type === 'title') {
        const overlay = document.createElement('div');
        overlay.className = 'title-overlay';
        overlay.innerHTML = `
            <div class="centered-group">
                <h1 class="title-harlem">HARLEM</h1>
                <p class="title-series">An Animated Musical Time-Travel Series</p>
            </div>`;
        container.appendChild(overlay);
    } 
    // Page 2 Overlay (The Hook - BOTTOM RIGHT)
    else if (page.type === 'hook') {
        const overlay = document.createElement('div');
        overlay.className = 'title-overlay'; // Kept for consistency, but logic shifts inside
        
        // This structure allows the specific formatting and hover aura
        overlay.innerHTML = `
            <div class="hook-wrapper">
                <div class="title-hook-block">
                    <p class="hook-header">The Hook :</p>
                    <p class="hook-body">What if history wasn’t something you learned... but something your family barely survived?</p>
                </div>
            </div>
        `;
        container.appendChild(overlay);
    }
}

// Navigation Listeners
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % comicPages.length;
    updatePage();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + comicPages.length) % comicPages.length;
    updatePage();
});

// Load Page 1 on startup
updatePage();
