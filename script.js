const videoPlayer = document.getElementById('comic-video');
const videoSource = document.getElementById('video-source');
const nextBtn = document.getElementById('next-btn');

// List your video files here in order
const pages = [
    'videos/page1.mp4',
    'videos/page2.mp4',
    'videos/page3.mp4'
];

let currentPage = 0;

nextBtn.addEventListener('click', () => {
    currentPage++;
    
    // If we reach the end, go back to the first page (loop)
    if (currentPage >= pages.length) {
        currentPage = 0;
    }

    // Update source and reload video
    videoSource.src = pages[currentPage];
    videoPlayer.load();
    videoPlayer.play();
});