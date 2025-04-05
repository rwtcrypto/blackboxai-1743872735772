// Preview Module
const preview = {
    // Initialize preview page
    init: function() {
        this.setupVideoPlayer();
        this.setupSharingButtons();
        this.loadVideoDetails();
        this.setupEventListeners();
    },

    // Setup video player
    setupVideoPlayer: function() {
        const video = document.getElementById('finalPreview');
        if (video) {
            // In a real app, this would load the actual exported video
            video.src = 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4';
            
            // Setup quality selector
            const qualitySelector = document.createElement('div');
            qualitySelector.className = 'quality-selector absolute bottom-4 right-4 bg-gray-800 bg-opacity-80 rounded p-2';
            qualitySelector.innerHTML = `
                <select class="bg-gray-700 text-white text-sm p-1 rounded">
                    <option>1080p</option>
                    <option>720p</option>
                    <option>480p</option>
                </select>
            `;
            video.parentNode.appendChild(qualitySelector);
        }
    },

    // Setup sharing buttons
    setupSharingButtons: function() {
        const shareButtons = document.querySelectorAll('.flex-wrap button');
        shareButtons.forEach(button => {
            button.addEventListener('click', function() {
                const platform = this.textContent.trim();
                preview.shareVideo(platform);
            });
        });
    },

    // Share video to platform
    shareVideo: function(platform) {
        // Mock sharing functionality
        const message = `Check out my video "${document.querySelector('h3').textContent}"`;
        
        switch(platform) {
            case 'YouTube':
                alert(`${message} - would be shared to YouTube`);
                break;
            case 'Instagram':
                alert(`${message} - would be shared to Instagram`);
                break;
            case 'TikTok':
                alert(`${message} - would be shared to TikTok`);
                break;
            case 'Facebook':
                alert(`${message} - would be shared to Facebook`);
                break;
            case 'Copy Link':
                navigator.clipboard.writeText(window.location.href)
                    .then(() => alert('Link copied to clipboard!'))
                    .catch(() => alert('Failed to copy link'));
                break;
            default:
                alert(`Sharing to ${platform} would be implemented here`);
        }
    },

    // Load video details
    loadVideoDetails: function() {
        // In a real app, this would come from your data store
        const videoDetails = {
            title: 'My Awesome AI-Generated Video',
            description: 'This video was created using our AI-powered video generator with amazing effects and transitions.',
            duration: '2:45',
            resolution: '1080p (HD)',
            fileSize: '45.6 MB'
        };

        document.querySelectorAll('.space-y-4 div').forEach((div, index) => {
            const value = Object.values(videoDetails)[index];
            div.querySelector('p.text-sm').textContent = value;
        });
    },

    // Setup event listeners
    setupEventListeners: function() {
        // Edit button
        const editBtn = document.querySelector('button.bg-blue-500');
        if (editBtn) {
            editBtn.addEventListener('click', () => {
                window.location.href = 'editor.html';
            });
        }

        // Download button
        const downloadBtn = document.querySelector('button.bg-green-500');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', this.downloadVideo);
        }

        // Publish button
        const publishBtn = document.querySelector('button.bg-red-500');
        if (publishBtn) {
            publishBtn.addEventListener('click', this.publishToYouTube);
        }
    },

    // Download video
    downloadVideo: function() {
        // In a real app, this would trigger a download of the actual video file
        alert('Video download would start here');
    },

    // Publish to YouTube
    publishToYouTube: function() {
        // In a real app, this would integrate with YouTube API
        alert('Video would be published to YouTube');
    }
};

// Initialize preview when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    preview.init();
});