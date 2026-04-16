const container = document.getElementById('content-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const comicPages = [
    { type: 'title', url: 'page1-comics.png' },
    { type: 'hook', url: 'page2-comics.png' },
    { type: 'img', url: 'page3-comics.png' },
    { type: 'img', url: 'page4-comics.png' },
    { type: 'img', url: 'page5-comics.png' },
    { type: 'img', url: 'page6-comics.png' },
    { type: 'img', url: 'page7-comics.png' },
    { 
        type: 'era_intro', 
        url: 'page8-comics.png',
        composer_title: 'Male Muse',
        composer_name: '"The Composer"',
        voice_title: 'Female Muse',
        voice_name: '"The Voice"',
        era_title: '1910s—1920s — THE FOUNDATION ERA'
    }
];

let currentIndex = 0;

function updatePage() {
    const page = comicPages[currentIndex];
    container.innerHTML = '';

    const bg = document.createElement('div');
    bg.className = 'full-bg';
    bg.style.backgroundImage = `url('${page.url}')`;
    container.appendChild(bg);

    if (page.type === 'title') {
        const overlay = document.createElement('div');
        overlay.className = 'title-overlay';
        overlay.innerHTML = `
            <h1 class="title-harlem">HARLEM</h1>
            <p class="title-series">An Animated Musical Time-Travel Series</p>
        `;
        container.appendChild(overlay);
    } 
    else if (page.type === 'hook') {
        const overlay = document.createElement('div');
        overlay.className = 'hook-wrapper';
        overlay.innerHTML = `
            <p class="hook-header">The Hook :</p>
            <p class="hook-body">What if history wasn’t something you learned... but something your family barely survived?</p>
        `;
        container.appendChild(overlay);
    }
    else if (page.type === 'era_intro') {
        const overlay = document.createElement('div');
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.innerHTML = `
            <div class="label-block top-left-composer">
                <p class="era-label-role">${page.composer_title}</p>
                <p class="era-label-title">${page.composer_name}</p>
            </div>
            <div class="label-block bottom-center-voice">
                <p class="era-label-role">${page.voice_title}</p>
                <p class="era-label-title">${page.voice_name}</p>
            </div>
            <div class="era-title-block">
                <h1 class="era-title">${page.era_title}</h1>
            </div>
        `;
        container.appendChild(overlay);
    }
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % comicPages.length;
    updatePage();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + comicPages.length) % comicPages.length;
    updatePage();
});

updatePage();
