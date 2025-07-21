document.addEventListener("DOMContentLoaded", function () {
  // --- DATA ---
  // In a real application, this data would come from a server/API
  const events = [
    {
      id: 1,
      title: "Annual Science Fair 2025",
      date: "2025-10-20",
      category: "Educational",
      description:
        "Explore the wonders of science with projects from students across all grades. A day of innovation, discovery, and learning. Special guest lecture by Dr. Evelyn Reed, a renowned astrophysicist. Awards for the most creative and impactful projects will be presented at the closing ceremony.",
      thumbnailUrl:
        "https://placehold.co/300x400/16a34a/ffffff?text=Science+Fair",
      facebookUrl: "https://facebook.com/events/1",
      youtubeUrl: "https://youtube.com/watch?v=1",
    },
    {
      id: 2,
      title: "Grand Summer Festival",
      date: "2025-08-05",
      category: "Festival",
      description:
        "Join us for a day of fun, food, and festivities! The Summer Festival features game stalls, live music from the school band, delicious food from local vendors, and a spectacular fireworks display to end the evening. A perfect day out for the whole family.",
      thumbnailUrl:
        "https://placehold.co/300x400/f97316/ffffff?text=Summer+Fest",
      facebookUrl: "https://facebook.com/events/2",
      youtubeUrl: "https://youtube.com/watch?v=2",
    },
    {
      id: 3,
      title: "Inter-House Sports Day",
      date: "2025-09-12",
      category: "Extracurricular",
      description:
        "Cheer for your house in a day of thrilling athletic competitions. Events include track and field, team sports, and fun relays. Witness the spirit of sportsmanship and teamwork as students compete for the championship trophy.",
      thumbnailUrl:
        "https://placehold.co/300x400/3b82f6/ffffff?text=Sports+Day",
      facebookUrl: "https://facebook.com/events/3",
      youtubeUrl: "https://youtube.com/watch?v=3",
    },
    {
      id: 4,
      title: "Annual Day Function 2024",
      date: "2024-12-18",
      category: "Functions",
      description:
        "A celebration of our school's achievements and talents. The evening will feature cultural performances, prize distribution for academic excellence, and a keynote address from our esteemed principal. A memorable night for students, parents, and staff.",
      thumbnailUrl:
        "https://placehold.co/300x400/8b5cf6/ffffff?text=Annual+Day",
      facebookUrl: "https://facebook.com/events/4",
      youtubeUrl: "https://youtube.com/watch?v=4",
    },
    {
      id: 5,
      title: "Upcoming: Coding Workshop",
      date: "2025-11-05",
      category: "Upcoming",
      description:
        "A hands-on workshop for aspiring programmers. Learn the basics of Python and web development from industry experts. This workshop is open to students from grades 8 to 12. Limited seats available, so register early!",
      thumbnailUrl: "https://placehold.co/300x400/14b8a6/ffffff?text=Coding",
      facebookUrl: "https://facebook.com/events/5",
      youtubeUrl: "https://youtube.com/watch?v=5",
    },
    {
      id: 6,
      title: "Art & Craft Exhibition",
      date: "2024-11-22",
      category: "Extracurricular",
      description:
        "A vibrant display of creativity from our talented students. The exhibition will showcase paintings, sculptures, pottery, and other crafts. Come and appreciate the artistic talents nurtured at our school.",
      thumbnailUrl: "https://placehold.co/300x400/ec4899/ffffff?text=Art+Expo",
      facebookUrl: "https://facebook.com/events/6",
      youtubeUrl: "https://youtube.com/watch?v=6",
    },
    {
      id: 7,
      title: "Parent-Teacher Meeting",
      date: "2025-10-30",
      category: "Functions",
      description:
        "An important meeting for parents and teachers to discuss student progress and academic performance. Your active participation is crucial for the holistic development of your child. Please book your slot in advance.",
      thumbnailUrl: "https://placehold.co/300x400/64748b/ffffff?text=PTM",
      facebookUrl: "https://facebook.com/events/7",
      youtubeUrl: null,
    },
    {
      id: 8,
      title: "Upcoming: Charity Bake Sale",
      date: "2025-12-01",
      category: "Upcoming",
      description:
        "Support a good cause by buying delicious baked goods prepared by our students and staff. All proceeds will be donated to the local children's orphanage. Your sweet tooth can make a big difference!",
      thumbnailUrl: "https://placehold.co/300x400/f43f5e/ffffff?text=Bake+Sale",
      facebookUrl: "https://facebook.com/events/8",
      youtubeUrl: null,
    },
  ];

  // --- DOM ELEMENTS ---
  const eventGrid = document.getElementById("event-grid");
  const noResultsDiv = document.getElementById("no-results");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const yearFilter = document.getElementById("year-filter");
  const sortSelect = document.getElementById("sort-select");
  const categoryButtonsContainer = document.getElementById("category-buttons");
  const eventModal = document.getElementById("event-modal");
  const modalContent = document.getElementById("modal-content");

  let currentFilters = {
    search: "",
    category: "All",
    year: "All",
    sort: "latest",
  };

  // --- FUNCTIONS ---

  /**
   * Renders the event cards based on the provided event data.
   * @param {Array} eventsToRender - The array of event objects to display.
   */
  function renderEvents(eventsToRender) {
    eventGrid.innerHTML = "";
    if (eventsToRender.length === 0) {
      noResultsDiv.classList.remove("hidden");
      eventGrid.classList.add("hidden");
      return;
    }

    noResultsDiv.classList.add("hidden");
    eventGrid.classList.remove("hidden");

    eventsToRender.forEach((event) => {
      const eventCard = document.createElement("div");
      eventCard.className =
        "bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer";
      eventCard.dataset.eventId = event.id;

      const eventDate = new Date(event.date);
      const formattedDate = eventDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      eventCard.innerHTML = `
                        <div class="relative">
                            <img class="w-full h-auto object-cover aspect-3-4" src="${event.thumbnailUrl}" alt="${event.title}" onerror="this.onerror=null;this.src='https://placehold.co/300x400/cccccc/ffffff?text=Image+Not+Found';">
                            <span class="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">${event.category}</span>
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 truncate">${event.title}</h3>
                            <p class="text-sm text-gray-500 mt-1">${formattedDate}</p>
                        </div>
                    `;
      eventCard.addEventListener("click", () => openModal(event.id));
      eventGrid.appendChild(eventCard);
    });
  }

  /**
   * Populates filter dropdowns and category buttons.
   */
  function populateFilters() {
    // Categories
    const categories = ["All", ...new Set(events.map((e) => e.category))];
    categoryFilter.innerHTML = categories
      .map((c) => `<option value="${c}">${c}</option>`)
      .join("");

    categoryButtonsContainer.innerHTML = categories
      .map(
        (c) => `
                    <button class="category-btn whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
                      c === "All"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }" data-category="${c}">
                        ${c}
                    </button>
                `
      )
      .join("");

    // Years
    const years = [
      "All",
      ...new Set(events.map((e) => new Date(e.date).getFullYear())),
    ].sort((a, b) => b - a);
    yearFilter.innerHTML = years
      .map((y) => `<option value="${y}">${y}</option>`)
      .join("");
  }

  /**
   * Applies all current filters and sorting to the event list and re-renders it.
   */
  function applyFiltersAndSort() {
    let filteredEvents = [...events];

    // Filter by search term
    if (currentFilters.search) {
      filteredEvents = filteredEvents.filter((e) =>
        e.title.toLowerCase().includes(currentFilters.search)
      );
    }

    // Filter by category
    if (currentFilters.category !== "All") {
      filteredEvents = filteredEvents.filter(
        (e) => e.category === currentFilters.category
      );
    }

    // Filter by year
    if (currentFilters.year !== "All") {
      filteredEvents = filteredEvents.filter(
        (e) => new Date(e.date).getFullYear() == currentFilters.year
      );
    }

    // Sort
    filteredEvents.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return currentFilters.sort === "latest" ? dateB - dateA : dateA - dateB;
    });

    renderEvents(filteredEvents);
  }

  /**
   * Opens the modal with details for a specific event.
   * @param {number} eventId - The ID of the event to display.
   */
  function openModal(eventId) {
    const event = events.find((e) => e.id === eventId);
    if (!event) return;

    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    modalContent.innerHTML = `
                    <div class="relative">
                        <img class="w-full h-64 object-cover rounded-t-2xl" src="${event.thumbnailUrl.replace(
                          "300x400",
                          "600x400"
                        )}" alt="${
      event.title
    }" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
                        <button id="close-modal-btn" class="absolute top-4 right-4 bg-white/70 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="p-6 sm:p-8">
                        <span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">${
                          event.category
                        }</span>
                        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">${
                          event.title
                        }</h2>
                        <div class="flex items-center text-gray-500 mt-2">
                            <i class="fas fa-calendar-alt mr-2"></i>
                            <span>${formattedDate}</span>
                        </div>
                        <p class="text-gray-600 mt-6 text-base leading-relaxed">${
                          event.description
                        }</p>
                        <div class="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                            ${
                              event.facebookUrl
                                ? `
                            <a href="${event.facebookUrl}" target="_blank" rel="noopener noreferrer" class="w-full text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                <i class="fab fa-facebook-f"></i> View on Facebook
                            </a>`
                                : ""
                            }
                            ${
                              event.youtubeUrl
                                ? `
                            <a href="${event.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="w-full text-center bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2">
                                <i class="fab fa-youtube"></i> Comment on YouTube
                            </a>`
                                : ""
                            }
                        </div>
                    </div>
                `;

    eventModal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent background scroll

    document
      .getElementById("close-modal-btn")
      .addEventListener("click", closeModal);
  }

  /**
   * Closes the event detail modal.
   */
  function closeModal() {
    eventModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }

  // --- EVENT LISTENERS ---
  searchInput.addEventListener("input", (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    applyFiltersAndSort();
  });

  categoryFilter.addEventListener("change", (e) => {
    currentFilters.category = e.target.value;
    applyFiltersAndSort();
    // Sync category buttons
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.classList.toggle(
        "bg-blue-500",
        btn.dataset.category === currentFilters.category
      );
      btn.classList.toggle(
        "text-white",
        btn.dataset.category === currentFilters.category
      );
      btn.classList.toggle(
        "bg-white",
        btn.dataset.category !== currentFilters.category
      );
      btn.classList.toggle(
        "text-gray-700",
        btn.dataset.category !== currentFilters.category
      );
    });
  });

  yearFilter.addEventListener("change", (e) => {
    currentFilters.year = e.target.value;
    applyFiltersAndSort();
  });

  sortSelect.addEventListener("change", (e) => {
    currentFilters.sort = e.target.value;
    applyFiltersAndSort();
  });

  categoryButtonsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const category = e.target.dataset.category;
      categoryFilter.value = category;
      // Manually trigger change event
      categoryFilter.dispatchEvent(new Event("change"));
    }
  });

  // Close modal on background click
  eventModal.addEventListener("click", (e) => {
    if (e.target === eventModal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !eventModal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // --- INITIALIZATION ---
  populateFilters();
  applyFiltersAndSort();
});
