const container = document.getElementById('content-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

/**
 * COMIC PAGE LIST
 * Page 1: Custom overlay with animated text.
 * Page 2+: Images or Videos.
 * Ensure filenames match your GitHub uploads exactly (case-sensitive).
 */
const comicPages = [
    { 
        type: 'custom_overlay', 
        bg_url: 'page1-comics.png', 
        harlem_text: 'HARLEM', 
        series_text: 'An Animated Musical Time-Travel Series.'
    },
    { type: 'img', url: 'page2-comics.png' },
    { type: 'img', url: 'page3-comics.png' },
    { type: 'img', url: 'page4-comics.png' },
    { type: 'img', url: 'page5-comics.png' }
    // Add more pages here as you upload them!
];

let currentIndex = 0;

/**
 * Function to render the current page based on its type
 */
function updatePage(index) {
    const page = comicPages[index];
    
    // Clear the container before adding new content
    container.innerHTML = '';

    if (page.type === 'custom_overlay') {
        // Special render for the Harlem Title Screen
        container.innerHTML = `
            <div id="page-background" style="background-image: url('${page.bg_url}')"></div>
            <div class="title-overlay">
                <h1 class="title-harlem">${page.harlem_text}</h1>
                <div class="title-divider">✣</div>
                <p class="title-series">${page.series_text}</p>
            </div>`;
            
    } else if (page.type === 'img') {
        // Standard Image Page
        const imgDiv = document.createElement('div');
        imgDiv.id = 'page-background';
        imgDiv.style.backgroundImage = `url('${page.url}')`;
        container.appendChild(imgDiv);
        
    } else if (page.type === 'vid') {
        // Standard Video Page
        const video = document.createElement('video');
        video.id = 'page-background';
        video.autoplay = true;
        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        
        const source = document.createElement('source');
        source.src = page.url;
        source.type = 'video/mp4';
        
        video.appendChild(source);
        container.appendChild(video);
    }
}

/**
 * Event Listeners for Navigation
 */
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= comicPages.length) {
        currentIndex = 0; // Loop back to the title screen
    }
    updatePage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = comicPages.length - 1; // Loop back to the last page
    }
    updatePage(currentIndex);
});

// Load Page 1 on startup
updatePage(0);
