const container = document.getElementById('content-container');
const nextBtn = document.getElementById('next-btn');

// ADD YOUR PAGES HERE
const comicPages = [
    { type: 'img', url: 'page1-comics.png' },
    { type: 'vid', url: 'videos/page2.mp4' },
    { type: 'vid', url: 'videos/page3.mp4' }
];

let currentIndex = 0;

function updatePage(index) {
    const page = comicPages[index];
    
    if (page.type === 'img') {
        container.innerHTML = `<div id="bg-image" style="background-image: url('${page.url}');"></div>`;
    } else {
        container.innerHTML = `
            <video autoplay muted playsinline loop>
                <source src="${page.url}" type="video/mp4">
            </video>`;
    }
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= comicPages.length) {
        currentIndex = 0; // Go back to the first page
    }
    updatePage(currentIndex);
});

// Initialize the first page
updatePage(0);
