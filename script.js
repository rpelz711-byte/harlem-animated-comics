const container = document.getElementById('content-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const harlemAudio = document.getElementById('harlem-audio');

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
        composer_title: 'Male Muse', composer_name: '"The Composer"',
        voice_title: 'Female Muse', voice_name: '"The Voice"',
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
        overlay.style.width = "100%"; overlay.style.height = "100%";
        overlay.innerHTML = `
            <div class="overlay-element label-block top-left-composer">
                <p class="era-label-role">${page.composer_title}</p>
                <p class="era-label-title">${page.composer_name}</p>
            </div>
            <div class="overlay-element label-block bottom-center-voice">
                <p class="era-label-role">${page.voice_title}</p>
                <p class="era-label-title">${page.voice_name}</p>
            </div>
            <div class="overlay-element era-title-block">
                <h1 class="era-title">${page.era_title}</h1>
            </div>
            <div class="overlay-element spec-player">
                <h3 class="spec-player-title">HARLEM</h3>
                <div class="timeline-slider" id="harlem-slider">
                    <div id="harlem-progress" class="timeline-progress"></div>
                    <div id="harlem-handle" class="timeline-handle"></div>
                </div>
                <div class="player-controls">
                    <button class="icon-btn material-icons">favorite_border</button>
                    <button class="icon-btn material-icons">skip_previous</button>
                    <button id="harlem-play-btn" class="icon-btn"><span class="material-icons">play_arrow</span></button>
                    <button class="icon-btn material-icons">skip_next</button>
                    <button class="icon-btn material-icons">shuffle</button>
                </div>
            </div>
        `;
        container.appendChild(overlay);
        initPage8Controls();
    }
}

function initPage8Controls() {
    const playBtn = document.getElementById('harlem-play-btn');
    const playIcon = playBtn.querySelector('.material-icons');
    const timelineProgress = document.getElementById('harlem-progress');
    const timelineHandle = document.getElementById('harlem-handle');
    const timelineSlider = document.getElementById('harlem-slider');

    playBtn.onclick = () => {
        if (harlemAudio.paused) { harlemAudio.play(); playIcon.innerText = 'pause'; }
        else { harlemAudio.pause(); playIcon.innerText = 'play_arrow'; }
    };

    harlemAudio.ontimeupdate = () => {
        if (harlemAudio.duration) {
            const percent = (harlemAudio.currentTime / harlemAudio.duration) * 100;
            timelineProgress.style.width = percent + '%';
            timelineHandle.style.left = percent + '%';
        }
    };

    timelineSlider.onclick = (e) => {
        const percent = e.offsetX / timelineSlider.offsetWidth;
        harlemAudio.currentTime = percent * harlemAudio.duration;
    };
}

nextBtn.onclick = () => { harlemAudio.pause(); currentIndex = (currentIndex + 1) % comicPages.length; updatePage(); };
prevBtn.onclick = () => { harlemAudio.pause(); currentIndex = (currentIndex - 1 + comicPages.length) % comicPages.length; updatePage(); };

updatePage();
