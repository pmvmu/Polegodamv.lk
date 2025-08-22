// Event data array
const events = [
    {
        id: 1,
        title: "Application For IT Club",
        description: 'New members are being recruited for the IT Club. Join us to improve your technical and creative skills.. Reserve your seat befor <strong>September 10th</strong>.<br><br>Click "Read More" and "Apply" to join.',
        category: "educational",
        date: "2025-08-20",
        time: "8:30 AM",
        status: "ongoing",
        link: "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/131",
        image: "./Events/Event-imgs/ITS poster-01.jpg",
        showRegister: true, // Add register button for this event
        registerLink: "https://forms.gle/91wW16PmJNfWpNYe6" // Direct link for registration/application
    },
    {
        id: 2,
        title: "Chhathrabhimani Magazine Launch",
        description: 'Launching of the monthly magazine <strong>"Chhathrabhimani"</strong>, a group project of A/L Arts students.<br><br>Coming Soon..',
        category: "special",
        date: "2025-08-20",
        time: "8:30 AM",
        status: "upcoming",
        image: "./Events/Event-imgs/Scl post for Jathrabhimani-01.jpg",
        showRegister: false
    },
    {
        id: 3,
        title: "Teachers And Non-Academics friendly Cricket Tournament",
        description: "A friendly cricket tournament between teachers, non-academic staff and students. Join us for a day of fun and sportsmanship!",
        category: "Sports",
        date: "2025-08-07",
        time: "8:30 AM",
        status: "Completed",
        link: "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/120",
        image: "./Events/Event-imgs/Scl post for Cricket match-01.jpg",
        showRegister: false // No register button for completed events
    },
    {
        id: 4,
        title: "Official Website Launch",
        description: "WP/ Hr/ Polegoda M.V. - Official Website Launch. A milestone in digital presence and modern communication for our school community.",
        category: "Special",
        date: "2025-08-18",
        time: "8:30 AM",
        status: "completed",
        link: "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/120",
        image: "./Events/Event-imgs/Scl post for web-01.jpg",
        showRegister: false // No register button for completed events
    },
    {
        id: 5,
        title: "A/L Freshman Recruitment",
        description: "Interviews for the recruitment of new Advanced Level students. Join us for this important academic milestone and opportunity.",
        category: "educational",
        date: "2025-08-12",
        time: "8:30 AM",
        status: "completed",
        link: "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/121",
        image: "./Events/Event-imgs/event-img.jpeg",
        showRegister: false // No register button for completed events
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
        image: "./Events/Event-imgs/prefect-img.jpg",
        showRegister: false // No register button for completed events
    },
];

// Global variables
let filteredEvents = [...events];
let currentCategory = 'all';
let isFilterVisible = false;

// DOM elements
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


// Handle search input
function handleSearch(e) {
    const query = searchInput.value.toLowerCase().trim();
    applyFilters(query, currentCategory);
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

// Initialize the application
function init() {
    renderEvents();
    setupEventListeners();
    console.log('Events page initialized with', events.length, 'events');
}

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearchClick);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    });

    // Back button
    backBtn.addEventListener('click', handleBackClick);

    // Event card clicks
    eventsGrid.addEventListener('click', handleEventClick);
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
                        <i class="fas fa-external-link-alt"></i> Read More...</button>
                    <button class="action-btn secondary" onclick="shareEvent(${event.id})">
                        <i class="fas fa-share"></i> Share...</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle search input
function handleSearch(e) {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    applyFilters();
}

// Handle search button click
function handleSearchClick() {
    currentSearchTerm = searchInput.value.toLowerCase().trim();
    applyFilters();
}

// Handle category button clicks
function handleCategoryClick(btn) {
    // Update active state
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentCategory = btn.dataset.category;
    applyFilters();
}

// Handle back button click
function handleBackClick() {
    // Reset filters
    currentCategory = 'all';
    currentSearchTerm = '';
    searchInput.value = '';
    
    // Reset active category
    categoryBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    
    applyFilters();
}

// Handle event card clicks
function handleEventClick(e) {
    const eventCard = e.target.closest('.event-card');
    if (eventCard && !e.target.closest('.action-btn')) {
        const eventId = parseInt(eventCard.dataset.eventId);
        readMore(eventId);
    }
}

// Apply filters based on current search and category
function applyFilters() {
    filteredEvents = events.filter(event => {
        // Search filter
        const matchesSearch = !currentSearchTerm || 
            event.title.toLowerCase().includes(currentSearchTerm) ||
            event.description.toLowerCase().includes(currentSearchTerm) ||
            event.category.toLowerCase().includes(currentSearchTerm) ||
            formatDate(event.date).toLowerCase().includes(currentSearchTerm);
        
        // Category filter
        const matchesCategory = currentCategory === 'all' || 
            event.category.toLowerCase() === currentCategory.toLowerCase() ||
            event.status.toLowerCase() === currentCategory.toLowerCase() ||
            (currentCategory === 'all-events');
        
        return matchesSearch && matchesCategory;
    });
    
    // Sort events by date (upcoming first, then by date)
    filteredEvents.sort((a, b) => {
        // Priority: upcoming > ongoing > completed
        const statusPriority = { upcoming: 3, ongoing: 2, completed: 1 };
        const statusDiff = statusPriority[b.status] - statusPriority[a.status];
        
        if (statusDiff !== 0) return statusDiff;
        
        // Within same status, sort by date
        return new Date(b.date) - new Date(a.date);
    });
    
    renderEvents();
    
    console.log(`Filtered ${filteredEvents.length} events for category: ${currentCategory}, search: ${currentSearchTerm}`);
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return 'TBD';
    
    const date = new Date(dateString);
    const options = { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
    };
    
    return date.toLocaleDateString('en-US', options);
}

// Read more functionality
function readMore(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    // Create a simple modal or redirect
    const modal = createModal(event);
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Create modal for event details
function createModal(event) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    // Conditionally render the register button based on showRegister property
    const registerButton = event.showRegister ? `
        <button class="action-btn primary" onclick="registerForEvent(${event.id})">
            <i class="fas fa-user-plus"></i> ${event.status === 'upcoming' ? 'Register' : 'Apply'}
        </button>
    ` : '';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${event.title}</h2>
                <button class="modal-close" onclick="closeModal(this)">&times;</button>
            </div>
            <div class="modal-body">
                <div class="card-image" style="background-image: url('${event.image || ''}'); background-size: cover; background-position: center;">
                    ${!event.image ? 'Image<br>1:1' : ''}
                </div>
                <div class="modal-category">${event.category}</div>
                <div class="modal-meta">
                    <div class="modal-date">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(event.date)} at ${event.time}</span>
                    </div>
                    <div class="modal-status status-${event.status}">
                        ${event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </div>
                </div>
                <div class="modal-description">
                    <p>${event.description}</p>
                </div>
                <div class="modal-actions">
                    ${registerButton}
                    <button class="action-btn secondary" onclick="shareEvent(${event.id})">
                        <i class="fas fa-share"></i> Share
                    </button>
                    <button class="action-btn secondary" onclick="addToCalendar(${event.id})">
                        <i class="fas fa-calendar-plus"></i> Add to Calendar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    return modal;
}

// Close modal
function closeModal(element) {
    const modal = element.closest ? element.closest('.modal-overlay') : element;
    modal.classList.remove('show');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

// Share event functionality
function shareEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    const shareData = {
        title: event.title,
        text: `${event.description}\n\nDate: ${formatDate(event.date)} at ${event.time}`,
        url: window.location.href
    };
    
    // Try native share API first
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback to clipboard
        const shareText = `${event.title}\n\n${event.description}\n\nDate: ${formatDate(event.date)} at ${event.time}\n\n${window.location.href}`;
        
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
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
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

// Register for event
function registerForEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    // Check if event has a specific registration link
    if (event.registerLink && event.registerLink !== '') {
        // Open registration link in new tab
        window.open(event.registerLink, '_blank');
        showNotification(`Opening registration for "${event.title}"!`);
        return;
    }
    
    // Fallback: Check if event has a general link
    if (event.link && event.link !== '') {
        // Open general link in new tab
        window.open(event.link, '_blank');
        showNotification(`Opening link for "${event.title}"!`);
        return;
    }
    
    // No link available - show contact information or default action
    showNotification(`To register for "${event.title}", please contact us at pmvmediaunit@gmail.com`, 'info');
    
    // In a real app, this could open a contact form or show more details
    console.log('No registration link available for event:', event.title);
}

// Add to calendar
function addToCalendar(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    const startDate = new Date(`${event.date} ${event.time}`);
    const endDate = new Date(startDate.getTime() + (2 * 60 * 60 * 1000)); // Add 2 hours
    
    // Format dates for Google Calendar
    const formatDateForCalendar = (date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent('School Campus')}`;
    
    window.open(calendarUrl, '_blank');
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close modal on Escape
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal-overlay.show');
            if (modal) {
                closeModal(modal);
            }
        }
        
        // Search on Ctrl+F
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// Smooth scrolling for category navigation
function setupSmoothScrolling() {
    const categoryNav = document.querySelector('.category-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    categoryNav.addEventListener('mousedown', (e) => {
        isDown = true;
        categoryNav.classList.add('active');
        startX = e.pageX - categoryNav.offsetLeft;
        scrollLeft = categoryNav.scrollLeft;
    });

    categoryNav.addEventListener('mouseleave', () => {
        isDown = false;
        categoryNav.classList.remove('active');
    });

    categoryNav.addEventListener('mouseup', () => {
        isDown = false;
        categoryNav.classList.remove('active');
    });

    categoryNav.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categoryNav.offsetLeft;
        const walk = (x - startX) * 2;
        categoryNav.scrollLeft = scrollLeft - walk;
    });
}

// Initialize when DOM is ready
function waitForDOM() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            loadTheme();
            setupKeyboardNavigation();
            setupSmoothScrolling();
        });
    } else {
        init();
        loadTheme();
        setupKeyboardNavigation();
        setupSmoothScrolling();
    }
}

// Start the application
waitForDOM();

// Export functions for global access (if needed)
window.readMore = readMore;
window.shareEvent = shareEvent;
window.closeModal = closeModal;
window.registerForEvent = registerForEvent;
window.addToCalendar = addToCalendar;
window.toggleTheme = toggleTheme;