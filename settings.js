// Settings Module
const settings = {
    // Initialize settings page
    init: function() {
        this.setupSEOTools();
        this.setupExportSettings();
        this.setupAnalytics();
        this.setupEventListeners();
    },

    // Setup SEO tools
    setupSEOTools: function() {
        const optimizeBtn = document.querySelector('button.bg-blue-500');
        if (optimizeBtn) {
            optimizeBtn.addEventListener('click', this.optimizeSEO);
        }

        // Tag management
        const tagInput = document.querySelector('input[placeholder="Add tag"]');
        if (tagInput) {
            tagInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && tagInput.value.trim()) {
                    this.addTag(tagInput.value.trim());
                    tagInput.value = '';
                }
            });
        }
    },

    // Optimize SEO automatically
    optimizeSEO: function() {
        const titleInput = document.querySelector('input[type="text"]');
        const descriptionInput = document.querySelector('textarea');
        
        if (titleInput && descriptionInput) {
            const suggestions = ai.generateSEOSuggestions(titleInput.value, descriptionInput.value);
            
            // Apply suggestions
            titleInput.value = `${titleInput.value} ${suggestions.title.includes('2023') ? '2023' : ''}`;
            descriptionInput.value = `${descriptionInput.value} ${suggestions.description}`;
            
            // Add suggested tags
            suggestions.tags.forEach(tag => this.addTag(tag));
            
            alert('SEO optimized automatically!');
        }
    },

    // Add tag
    addTag: function(tag) {
        const tagsContainer = document.querySelector('.flex-wrap');
        if (tagsContainer) {
            const tagElement = document.createElement('span');
            tagElement.className = 'bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center';
            tagElement.innerHTML = `
                ${tag}
                <button class="ml-1 text-xs" onclick="this.parentElement.remove()">&times;</button>
            `;
            tagsContainer.insertBefore(tagElement, tagsContainer.lastElementChild);
        }
    },

    // Setup export settings
    setupExportSettings: function() {
        const exportBtn = document.querySelector('button.bg-green-500');
        if (exportBtn) {
            exportBtn.addEventListener('click', this.exportVideo);
        }

        // Quality selector
        const qualitySelect = document.querySelector('select');
        if (qualitySelect) {
            qualitySelect.addEventListener('change', (e) => {
                console.log('Export quality set to:', e.target.value);
            });
        }
    },

    // Export video with settings
    exportVideo: function() {
        const platform = document.querySelector('select').value;
        const quality = document.querySelectorAll('select')[1].value;
        const watermark = document.getElementById('watermark').checked;
        
        alert(`Exporting to ${platform} in ${quality} ${watermark ? 'with watermark' : 'without watermark'}`);
    },

    // Setup analytics
    setupAnalytics: function() {
        // In a real app, this would fetch actual analytics data
        this.renderAnalyticsChart();
        
        // Download report button
        const downloadBtn = document.querySelector('button.bg-blue-500');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', this.downloadReport);
        }
    },

    // Render analytics chart
    renderAnalyticsChart: function() {
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Views',
                    data: [1200, 1900, 3000, 5000, 2000, 3000],
                    borderColor: '#3B82F6',
                    tension: 0.1
                },
                {
                    label: 'Watch Time (hours)',
                    data: [50, 80, 120, 200, 150, 180],
                    borderColor: '#10B981',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },

    // Download report
    downloadReport: function() {
        alert('Analytics report would be downloaded as PDF');
    },

    // Setup event listeners
    setupEventListeners: function() {
        // Dark mode toggle
        const darkModeToggle = document.querySelector('input[type="checkbox"]');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('change', (e) => {
                document.documentElement.classList.toggle('dark', e.target.checked);
                localStorage.setItem('darkMode', e.target.checked);
            });
        }
    }
};

// Initialize settings when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    settings.init();
});