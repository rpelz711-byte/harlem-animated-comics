const container = document.getElementById('content-container');
const nextBtn = document.getElementById('next-btn');

/** * COMIC PAGE LIST 
 * Add your filenames here in the order you want them to appear.
 * If you add an animated video later, change type to 'vid'.
 */
const comicPages = [
    { type: 'img', url: 'page1-comics.png' },
    { type: 'img', url: 'page2-comics.png' }, // Ensure this matches your upload
    { type: 'img', url: 'page3-comics.png' },
    { type: 'img', url: 'page4-comics.png' },
    { type: 'img', url: 'page5-comics.png' }
    // You can keep adding more lines like the ones above!
];

let currentIndex = 0;

function updatePage(index) {
    const page = comicPages[index];
    
    // Clear current content
    container.innerHTML = '';

    if (page.type === 'img') {
        const imgDiv = document.createElement('div');
        imgDiv.id = 'bg-image';
        imgDiv.style.backgroundImage = `url('${page.url}')`;
        container.appendChild(imgDiv);
    } else if (page.type === 'vid') {
        const video = document.createElement('video');
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

nextBtn.addEventListener('click', () => {
    // Check if we are at the last page
    if (currentIndex < comicPages.length - 1) {
        currentIndex++;
    } else {
        // Option A: Loop back to start
        currentIndex = 0; 
        
        // Option B: If you want it to stop at the end, comment out the line above 
        // and uncomment the next line:
        // alert("End of the comic!"); return;
    }
    updatePage(currentIndex);
});

// Load the first page immediately
updatePage(0);
