// Setup icon click interaction for toggling active icon state
function setupIconClicks() {
  const allOptionGroups = document.querySelectorAll(".option");

  allOptionGroups.forEach((optionGroup) => {
    const icons = optionGroup.querySelectorAll("i");

    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        icons.forEach((i) => {
          i.classList.remove("fa-solid");
          i.classList.add("fa-regular");
        });
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      });

      // Tooltip (title attribute for hover name)
      const iconName = icon.classList.contains("fa-share-from-square")
        ? "Share"
        : icon.classList.contains("fa-heart")
        ? "Like"
        : icon.classList.contains("fa-comment")
        ? "Comment"
        : "";
    });
  });
}

// New Event Card with Countdown Support and Archive Move
function addEventCard(
  title = "Sample Title",
  description = "Event description",
  imageUrl = "",
  sectionId = "latest-events",
  timeStamp = "",
  countdownTime = "", // ⏳ Optional ISO date like "2025-08-15T10:00:00+05:30"
  postUrl = "",
) {
  const container = document.querySelector(`#${sectionId}`);
  if (!container) {
    throw new Error(`Section not found: ${sectionId}`);
  }

  const timestamp = timeStamp || formatDateTimeSriLanka();

  const card = document.createElement("li");
  card.innerHTML = `
    <div class="event-card" ${
      countdownTime ? `data-countdown="${countdownTime}"` : ""
    }>
      <div class="img" style="background-image: url('${imageUrl}')"></div>
      <h3>${title}</h3>
      <p class="description">${description}</p>
      
      ${
        countdownTime
          ? '<hr style="margin-bottom:10px;"><p class="countdown"></p>'
          : ""
      }
      <hr>
        <div class="option">
        <a href="${postUrl}">
          <i class="fa-regular fa-share-from-square" data-tooltip="Share"></i>
        </a>
          <i class="fa-regular fa-heart" data-tooltip="Like"></i>
        <a href="${postUrl}">
          <i class="fa-regular fa-comment" data-tooltip="Comment"></i>
        </a>
        </div>
      <p class="tnd">${timestamp}</p>
    </div>
  `;

  container.appendChild(card);

  setupIconClicks();
  if (countdownTime)
    setupCountdownForCard(card.querySelector(".event-card"), card);
}

// Cards
addEventCard(
  "Leadership Badge Ceremony",
  "The Student Leader Badge Ceremony was held on June 29.",
  "./Event-imgs/prefect-img.jpg",
  "archive-events",
  "20 July 2025 | 12:30",
  "",
  "https://web.facebook.com/share/p/19RgV4Wcpr/"
);

addEventCard(
  "What&apos;s NEW",
  "Launching of Kasun Harshana&apos;s A/L solo project.<br><strong>&quot;What&apos;s NEW&quot;</strong><i> - Update Your Vision..</i>",
  "E:/Scl Project solo/New/webhero-01.jpg",
  "upcoming-events",
  "20 July 2025 | 12:30",
  "2025-08-01T08:30:00+05:30", // countdown time
  "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/120"
);

addEventCard(
  "Website Launch",
  "WP/ Hr/ Polegoda M.V. - Official Website.",
  "E:/Scl Project solo/New/link.jpg",
  "upcoming-events",
  "20 july 2025 | 14:00",
  "2025-08-01T08:30:00+05:30", // countdown time
  "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/120"
);

addEventCard(
  "A/L freshman recruitment interviews",
  "Interviews for the recruitment of new Advanced Level students will be held on July 29th from 8:30 a.m.",
  "https://raw.githubusercontent.com/pmvmu/Polegodamv.lk/refs/heads/main/Events/Event-imgs/event-img.jpeg",
  "latest-events",
  "24 july 2025 | 11:30",
  "",
  "https://whatsapp.com/channel/0029VaqpXrqHVvTdKdBGjn1T/121"
);


// Search Function
const searchInput = document.getElementById("eventSearch");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  // Search inside all three event lists
  ["latest-events", "upcoming-events", "sports-events", "archive-events"].forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    const cards = section.querySelectorAll(".event-card");

    cards.forEach((card) => {
      const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const desc =
        card.querySelector(".description")?.textContent.toLowerCase() || "";
      const time = card.querySelector(".tnd")?.textContent.toLowerCase() || "";

      const match =
        title.includes(query) || desc.includes(query) || time.includes(query);
      card.closest("li").style.display = match ? "block" : "none";
    });
  });
});

// Couuntdown
// Individual Countdown Setup with Move to Archive
function setupCountdownForCard(card, wrapperLi) {
  const targetTime = new Date(card.dataset.countdown);
  const countdownElement = card.querySelector(".countdown");

  function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff <= 0) {
      countdownElement.textContent = "Event Started";
      setTimeout(() => {
        const archive = document.querySelector("#archive-events");
        if (archive) {
          archive.appendChild(wrapperLi);
        } else {
          wrapperLi.remove();
        }
      }, 3000);
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}
