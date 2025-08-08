// Event data
const events = [
    {
        id: 1,
        title: "Teachers And Non-Academics friendly Cricket Tournament",
        description: "A friendly cricket tournament between teachers, non-academic staff and students. Join us for a day of fun and sportsmanship!",
        category: "Sports",
        date: "2025-08-07",
        time: "8:30 AM",
        status: "ongoing",
        link: "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/120",
        image: "./Events/Event-imgs/Scl post for Cricket match-01.jpg"
    },
    {
        id: 2,
        title: "Official Website Launch",
        description: "WP/ Hr/ Polegoda M.V. - Official Website Launch. A milestone in digital presence and modern communication for our school community.",
        category: "Special",
        date: "2025-08-18",
        time: "8:30 AM",
        status: "upcoming",
        link: "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/120",
        image: "./Events/Event-imgs/Scl post for web-01.jpg"
    },
    {
        id: 3,
        title: "What's NEW Project Launch",
        description: "Launching of the monthly magazine Jathrabhimani, a group project of A/L Arts students.",
        category: "Educational",
        date: "2025-08-15",
        time: "2:00 PM",
        status: "upcoming",
        link: "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/120",
        image: "./webhero-01.jpg"
    },
    {
        id: 4,
        title: "A/L Freshman Recruitment",
        description: "Interviews for the recruitment of new Advanced Level students. Join us for this important academic milestone and opportunity.",
        category: "educational",
        date: "2025-08-12",
        time: "8:30 AM",
        status: "completed",
        link: "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/121",
        image: "./Events/Event-imgs/event-img.jpeg"
    },
    {
        id: 5,
        title: "Jathrabhimani Magazine Launch",
        description: "Inter-house sports competition featuring various athletic events and team sports. Show your house spirit and athletic prowess!",
        category: "sports",
        date: "2025-08-20",
        time: "8:00 AM",
        status: "upcoming",
        image: "./Events/Event-imgs/Scl post for Jathrabhimani-01.jpg"
    },
    {
        id: 6,
        title: "Leadership Badge Ceremony",
        description: "The Student Leader Badge Ceremony recognizing outstanding student leadership and academic excellence. A prestigious event celebrating our future leaders.",
        category: "special",
        date: "2025-07-20",
        time: "12:30 PM",
        status: "completed",
        link: "https://web.facebook.com/share/p/19RgV4Wcpr/",
        image: "./Events/Event-imgs/prefect-img.jpg"
    }
];

// Global variables
let filteredEvents = [...events];
let currentCategory = 'all';
let isFilterVisible = false;

// DOM elements
const filterBtn = document.getElementById('filterBtn');
const backBtn = document.getElementById('backBtn');
const filterCategories = document.getElementById('filterCategories');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const eventsGrid = document.getElementById('eventsGrid');
const noResults = document.getElementById('noResults');
const eventModal = document.getElementById('eventModal');

// Initialize the app
function init() {
    console.log('Initializing app with', events.length, 'events');
    renderEvents();
    setupEventListeners();
}

// Setup all event listeners
function setupEventListeners() {
    // Filter button toggle
    if (filterBtn) {
        filterBtn.addEventListener('click', toggleFilter);
    }

    // Back button
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (isFilterVisible) {
                toggleFilter();
            } else {
                // Handle back navigation (could be window.history.back() or custom logic)
                window.history.back();
            }
        });
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => handleCategoryClick(btn));
    });

    // Modal close on background click
    if (eventModal) {
        eventModal.addEventListener('click', (e) => {
            if (e.target === eventModal) closeModal();
        });
    }

    // Handle escape key for modal and filter
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (eventModal.classList.contains('show')) {
                closeModal();
            } else if (isFilterVisible) {
                toggleFilter();
            }
        }
    });
}

// Toggle filter visibility
const filterButton = document.getElementById('filterBtn');
const filterOptions = document.getElementById('filterOptions');

filterButton.addEventListener('click', () => {
    filterOptions.classList.toggle('hidden');
});

// Update back button based on filter state
function updateBackButton(filterOpen) {
    const backBtnText = backBtn.querySelector('.btn-text');
    const backBtnIcon = backBtn.querySelector('i');
    
    if (filterOpen) {
        backBtnIcon.className = 'fas fa-times';
        if (backBtnText) backBtnText.textContent = 'Close';
    } else {
        backBtnIcon.className = 'fas fa-arrow-left';
        if (backBtnText) backBtnText.textContent = 'Back';
    }
}

// Handle search input
function handleSearch(e) {
    const query = searchInput.value.toLowerCase().trim();
    applyFilters(query, currentCategory);
}

// Handle category button clicks
function handleCategoryClick(btn) {
    // Update active state
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentCategory = btn.dataset.category;
    const searchQuery = searchInput.value.toLowerCase().trim();
    applyFilters(searchQuery, currentCategory);
    
    // Hide filter after selection on mobile
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            toggleFilter();
        }, 300);
    }
}

// Apply filters
function applyFilters(searchQuery = '', category = 'all') {
    filteredEvents = events.filter(event => {
        // Search filter
        const matchesSearch = !searchQuery || 
            event.title.toLowerCase().includes(searchQuery) ||
            event.description.toLowerCase().includes(searchQuery) ||
            event.category.toLowerCase().includes(searchQuery) ||
            formatDate(event.date).toLowerCase().includes(searchQuery);
        
        // Category filter
        const matchesCategory = category === 'all' || 
            event.category === category ||
            event.status === category ||
            (category === 'latest' && isRecent(event.date)) ||
            (category === 'old' && !isRecent(event.date));
        
        return matchesSearch && matchesCategory;
    });
    
    // Sort by date (upcoming first, then by date)
    filteredEvents.sort((a, b) => {
        if (a.status === 'upcoming' && b.status !== 'upcoming') return -1;
        if (b.status === 'upcoming' && a.status !== 'upcoming') return 1;
        return new Date(b.date) - new Date(a.date);
    });
    
    renderEvents();
}

// Check if event is recent (within last 30 days)
function isRecent(dateString) {
    const eventDate = new Date(dateString);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return eventDate >= thirtyDaysAgo;
}

// Render events to the grid
function renderEvents() {
    if (filteredEvents.length === 0) {
        eventsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No Events Found</h3>
                <p>Try adjusting your search or category filter</p>
            </div>
        `;
        return;
    }

    eventsGrid.innerHTML = filteredEvents.map(event => `
        <div class="event-card" data-event-id="${event.id}">
                <div class="card-image" style="background-image: url('${event.image || ''}'); background-size: cover; background-position: center;">
                    ${!event.image ? 'Image<br>1:1' : ''}
                </div>
            <div class="card-content">
                <div class="card-category">${event.category}</div>
                <h3 class="card-title">${event.title}</h3>
                <p class="card-description">${event.description}</p>
                <div class="card-meta">
                    <div class="card-date">${formatDate(event.date)}<br>${event.time}</div>
                </div>
                <div class="card-actions">
                    <button class="action-btn primary" onclick="readMore(${event.id})">
                        Read More...
                    </button>
                    <button class="action-btn secondary" onclick="shareEvent(${event.id})">
                        Share...
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return 'TBD';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Open event modal
function openModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = event.title;
    modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <div class="card-image" style="background-image: url('${event.image || ''}'); background-size: cover; background-position: center; height: 250px; border-radius: 0.5rem; position: relative;">
                ${!event.image ? '<div style="color: white; font-size: 2rem;">Image 1:1</div>' : ''}
                <div class="card-category" style="position: absolute; top: 1rem; right: 1rem;">${event.category}</div>
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <span class="action-btn" style="margin-right: 0.5rem; background: var(--primary-color); color: white; border-color: var(--primary-color);">${event.status}</span>
            <span class="action-btn" style="background: #3b82f6; color: white; border-color: #3b82f6;">${event.category}</span>
        </div>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text-secondary);">${event.description}</p>
        
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; color: var(--text-secondary);">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-calendar"></i>
                <span>${event.date ? formatDate(event.date) : 'TBD'}</span>
            </div>
            ${event.time ? `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-clock"></i>
                <span>${event.time}</span>
            </div>
            ` : ''}
        </div>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            ${event.link ? `
            <a href="${event.link}" class="action-btn primary" target="_blank" style="text-decoration: none;">
                <i class="fas fa-external-link-alt"></i> Read More...
            </a>
            ` : ''}
            <button onclick="shareEvent(${event.id})" class="action-btn">
                <i class="fas fa-share"></i> Share...
            </button>
        </div>
    `;
    
    eventModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    eventModal.classList.remove('show');
    document.body.style.overflow = '';
}

// Share event
function shareEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    const shareData = {
        title: event.title,
        text: event.description,
        url: event.link || window.location.href
    };
    
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback to clipboard
        const shareText = `${event.title}\n\n${event.description}\n\n${event.link || window.location.href}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                showNotification('Event details copied to clipboard!');
            }).catch(() => {
                showNotification('Unable to copy to clipboard', 'error');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('Event details copied to clipboard!');
            } catch (err) {
                showNotification('Unable to copy to clipboard', 'error');
            }
            document.body.removeChild(textArea);
        }
    }
}

// Show notification (simple implementation)
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-color)' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 3000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Handle window resize for responsive behavior
function handleResize() {
    // Hide filter categories on resize if screen becomes desktop size
    if (window.innerWidth > 768 && isFilterVisible) {
        // Keep filter open on desktop
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle window resize
window.addEventListener('resize', handleResize);

// Also ensure it runs after a short delay as backup
setTimeout(init, 100);