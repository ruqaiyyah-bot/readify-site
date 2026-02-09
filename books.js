// ===== BOOK DATA =====
const books = [
  {
    id: 1,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: "fantasy",
    image: "images/The Night Curcus -Erin Morgenstern.png",
    synopsis: "A magical competition between two illusionists in a mysterious circus that only opens at night.",
    sequels: [],
    reviews: [
      { reviewer: "Anna", rating: 5, comment: "Loved it!" },
      { reviewer: "Tom", rating: 4, comment: "Very engaging." }
    ]
  },
  {
    id: 2,
    title: "The Goldfinch",
    author: "Donna Tartt",
    genre: "fiction",
    image: "images/The Goldfinch -Donna Tartt.png",
    synopsis: "A boy survives a terrorist attack and navigates grief, love, and identity over years.",
    sequels: [],
    reviews: [
      { reviewer: "Sara", rating: 4, comment: "A bit long but brilliant." },
      { reviewer: "Mike", rating: 5, comment: "Couldn’t put it down." }
    ]
  },
  {
    id: 3,
    title: "Normal People",
    author: "Sally Rooney",
    genre: "fiction",
    image: "images/Normal People -Sally Rooney.png",
    synopsis: "Two Irish teenagers explore love, friendship, and the challenges of adulthood.",
    sequels: [],
    reviews: [
      { reviewer: "Lucy", rating: 5, comment: "Beautifully written." },
      { reviewer: "Jake", rating: 4, comment: "Very realistic characters." }
    ]
  },
  {
    id: 4,
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    genre: "fiction",
    image: "images/The Shadow of the Wind — Carlos Ruiz Zafón.png",
    synopsis: "A young boy discovers a forgotten book that changes his life forever.",
    sequels: ["The Angel’s Game"],
    reviews: [
      { reviewer: "Emma", rating: 5, comment: "A literary masterpiece." },
      { reviewer: "Liam", rating: 4, comment: "Mysterious and captivating." }
    ]
  },
  {
    id: 5,
    title: "A Little Life",
    author: "Hanya Yanagihara",
    genre: "fiction",
    image: "images/A Little Life — Hanya Yanagihara.png",
    synopsis: "Four friends navigate life in New York, exploring trauma, love, and friendship.",
    sequels: [],
    reviews: [
      { reviewer: "Nina", rating: 5, comment: "Heartbreaking and beautiful." },
      { reviewer: "Paul", rating: 4, comment: "Emotionally intense." }
    ]
  },
  {
    id: 6,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "fiction",
    image: "images/The Seven Husbands of Evelyn Hugo — Taylor Jenkins Reid.png",
    synopsis: "An aging Hollywood star shares her scandalous life story with a journalist.",
    sequels: [],
    reviews: [
      { reviewer: "Mia", rating: 5, comment: "Addictive!" },
      { reviewer: "Ethan", rating: 4, comment: "Loved the storytelling." }
    ]
  },
  {
    id: 7,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "fantasy",
    image: "images/The Name of the Wind — Patrick Rothfuss.png",
    synopsis: "The story of Kvothe, a legendary figure, recounting his extraordinary life.",
    sequels: ["The Wise Man's Fear"],
    reviews: [
      { reviewer: "Olivia", rating: 5, comment: "Epic and magical." },
      { reviewer: "Noah", rating: 4, comment: "Incredible storytelling." }
    ]
  },
  {
    id: 8,
    title: "The Priory of the Orange Tree",
    author: "Samantha Shannon",
    genre: "fantasy",
    image: "images/The Priory of the Orange Tree — Samantha Shannon.png",
    synopsis: "A sprawling tale of dragons, queens, and magic in a richly imagined world.",
    sequels: [],
    reviews: [
      { reviewer: "Sophia", rating: 5, comment: "Fantasy perfection." },
      { reviewer: "Lucas", rating: 4, comment: "Loved the worldbuilding." }
    ]
  },
  {
    id: 9,
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    genre: "fantasy",
    image: "images/Mistborn The Final Empire — Brandon Sanderson.png",
    synopsis: "A heist story in a world ruled by the immortal Lord Ruler, featuring unique magic.",
    sequels: ["The Well of Ascension", "The Hero of Ages"],
    reviews: [
      { reviewer: "Ella", rating: 5, comment: "Epic fantasy!" },
      { reviewer: "James", rating: 4, comment: "Amazing magic system." }
    ]
  },
  {
    id: 10,
    title: "The Poppy War",
    author: "R.F. Kuang",
    genre: "fantasy",
    image: "images/The Poppy War — R.F. Kuang.png",
    synopsis: "A dark military fantasy inspired by Chinese history, exploring war and power.",
    sequels: ["The Dragon Republic", "The Burning God"],
    reviews: [
      { reviewer: "Chloe", rating: 5, comment: "Intense and gripping." },
      { reviewer: "Eli", rating: 4, comment: "Loved the worldbuilding." }
    ]
  },
  {
    id: 11,
    title: "Uprooted",
    author: "Naomi Novik",
    genre: "fantasy",
    image: "images/Uprooted — Naomi Novik.png",
    synopsis: "A young woman is chosen by a powerful wizard to protect her village from dark forces.",
    sequels: [],
    reviews: [
      { reviewer: "Grace", rating: 5, comment: "Magical and thrilling." },
      { reviewer: "Ryan", rating: 4, comment: "Beautiful story." }
    ]
  },
  {
    id: 12,
    title: "The Lies of Locke Lamora",
    author: "Scott Lynch",
    genre: "fantasy",
    image: "images/The Lies of Locke Lamora — Scott Lynch.png",
    synopsis: "A story about a master thief and his crew pulling off heists in a corrupt city.",
    sequels: ["Red Seas Under Red Skies"],
    reviews: [
      { reviewer: "Zoe", rating: 5, comment: "Clever and fun." },
      { reviewer: "Leo", rating: 4, comment: "Loved the characters." }
    ]
  },
  {
    id: 13,
    title: "Dune",
    author: "Frank Herbert",
    genre: "scifi",
    image: "images/Dune — Frank Herbert.png",
    synopsis: "A young duke must navigate political intrigue and control of a desert planet with valuable spice.",
    sequels: ["Dune Messiah", "Children of Dune"],
    reviews: [
      { reviewer: "Sophia", rating: 5, comment: "A sci-fi classic." },
      { reviewer: "Max", rating: 4, comment: "Epic worldbuilding." }
    ]
  },
  {
    id: 14,
    title: "The Three Body Problem",
    author: "Cixin Liu",
    genre: "scifi",
    image: "images/The Three Body Problem — Cixin Liu.png",
    synopsis: "Humanity makes contact with an alien civilization with unexpected consequences.",
    sequels: ["The Dark Forest", "Death’s End"],
    reviews: [
      { reviewer: "Ivy", rating: 5, comment: "Mind-blowing!" },
      { reviewer: "Ethan", rating: 4, comment: "Complex but worth it." }
    ]
  },
  {
    id: 15,
    title: "Neuromancer",
    author: "William Gibson",
    genre: "scifi",
    image: "images/Neuromancer — William Gibson.png",
    synopsis: "A cyberpunk story of a washed-up hacker hired for a final job in a digital dystopia.",
    sequels: [],
    reviews: [
      { reviewer: "Lily", rating: 5, comment: "Cyberpunk classic." },
      { reviewer: "Ben", rating: 4, comment: "Innovative ideas." }
    ]
  },
  {
    id: 16,
    title: "The Expanse: Leviathan Wakes",
    author: "James S.A. Corey",
    genre: "scifi",
    image: "images/The Expanse Leviathan Wakes — James S.A. Corey.png",
    synopsis: "A detective and spaceship crew uncover a conspiracy that could destroy humanity.",
    sequels: ["Caliban’s War", "Abaddon’s Gate"],
    reviews: [
      { reviewer: "Nina", rating: 5, comment: "Space opera at its best." },
      { reviewer: "Tom", rating: 4, comment: "Exciting and fast-paced." }
    ]
  },
  {
    id: 17,
    title: "Kindred",
    author: "Octavia E. Butler",
    genre: "scifi",
    image: "images/Kindred — Octavia E. Butler.png",
    synopsis: "A young African-American woman travels back in time to save her ancestors.",
    sequels: [],
    reviews: [
      { reviewer: "Maya", rating: 5, comment: "Powerful and thought-provoking." },
      { reviewer: "Alex", rating: 4, comment: "Amazing storytelling." }
    ]
  },
  {
    id: 18,
    title: "The Long Way to a Small, Angry Planet",
    author: "Becky Chambers",
    genre: "scifi",
    image: "images/The Long Way to a Small, Angry Planet — Becky Chambers.png",
    synopsis: "A crew aboard a spaceship travels across the galaxy, forming bonds and discovering wonders.",
    sequels: ["A Closed and Common Orbit"],
    reviews: [
      { reviewer: "Clara", rating: 5, comment: "Heartwarming and fun." },
      { reviewer: "Jack", rating: 4, comment: "Lovely characters." }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const bookGrid = document.querySelector(".book-explorer-grid");
  if (bookGrid) renderBooks(books);

  // Random Recommender Page Logic
  if (document.getElementById("pick-random")) {
    initRecommender();
  }
});

// ===== BOOK EXPLORER LOGIC =====
function renderBooks(bookArray) {
  const bookGrid = document.querySelector("main section div:nth-of-type(2)");
  if (!bookGrid) return;

  bookGrid.innerHTML = bookArray.map(book => `
        <article data-id="${book.id}" class="reveal-on-scroll">
            <img src="${book.image}" alt="Book cover of ${book.title}">
            <h3>${book.title}</h3>
            <p>- ${book.author}</p>
        </article>
    `).join("");

  bookGrid.querySelectorAll("article").forEach(article => {
    article.addEventListener("click", () => showBookModal(parseInt(article.dataset.id)));
  });
}

// Filter Logic
const searchInput = document.getElementById("search");
const genreSelect = document.getElementById("genre");

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const filtered = books.filter(b =>
      b.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      b.author.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderBooks(filtered);
  });
}

if (genreSelect) {
  genreSelect.addEventListener("change", (e) => {
    const filtered = e.target.value === "all" ? books : books.filter(b => b.genre === e.target.value);
    renderBooks(filtered);
  });
}

// ===== MODAL LOGIC =====
function showBookModal(id) {
  const book = books.find(b => b.id === id);
  const modal = document.getElementById("book-modal");

  modal.querySelector("h2").textContent = book.title;
  modal.querySelector(".synopsis").textContent = book.synopsis;

  // Sequels List
  const sequels = modal.querySelector(".sequels-list");
  sequels.innerHTML = book.sequels.length ? book.sequels.map(s => `<li>${s}</li>`).join("") : "<li>None</li>";

  // Reviews Table
  const tbody = modal.querySelector("tbody");
  tbody.innerHTML = book.reviews.map(r => `<tr><td>${r.reviewer}</td><td>${r.rating}⭐</td><td>${r.comment}</td></tr>`).join("");

  modal.hidden = false;
}

// ===== RANDOM RECOMMENDER =====
function initRecommender() {
  const pickBtn = document.getElementById("pick-random");
  const againBtn = document.getElementById("pick-again-btn");
  const resultArea = document.getElementById("recommendation-result");
  const actionContainer = document.getElementById("action-container");

  const getRecommendation = () => {
    const gen = document.getElementById("genre").value;
    const len = document.getElementById("length").value;

    // Filter pool from your books array
    let pool = books.filter(b => (gen === "all" || b.genre === gen) && (len === "all" || b.length === len));

    if (pool.length === 0) {
      resultArea.innerHTML = "<p style='text-align:center; padding:20px;'>No books found for this criteria. Try another!</p>";
      if (actionContainer) actionContainer.style.display = "none";
      return;
    }

    const randomBook = pool[Math.floor(Math.random() * pool.length)];

    // Show the "Pick again" button area
    if (actionContainer) actionContainer.style.display = "flex";

    // Injecting the REAL book data - Image size is fixed at 120px here
    resultArea.innerHTML = `
            <div class="book-card animated-pick" style="display: flex; gap: 20px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 10px; align-items: center; margin-top: 20px;">
                <img src="${randomBook.image}" alt="${randomBook.title}" style="width: 120px; height: 180px; object-fit: cover; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                <div class="book-details" style="text-align: left;">
                    <h4 style="margin-top:0;">${randomBook.title}</h4>
                    <p><strong>Author:</strong> ${randomBook.author}</p>
                    <p><strong>Synopsis:</strong> ${randomBook.synopsis}</p>
                    <button class="btn-save" onclick="window.saveToReadingList(${randomBook.id})" style="background: #6a1b9a; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">💖 Add to Read List</button>
                </div>
            </div>
        `;
  };

  if (pickBtn) pickBtn.addEventListener("click", getRecommendation);
  if (againBtn) againBtn.addEventListener("click", getRecommendation);
}


// ADD "window." HERE
window.saveToReadingList = function (id) {
  let list = JSON.parse(localStorage.getItem("myReadingList")) || [];

  // Convert to Number to match her id: 1, id: 2 format
  const bookId = Number(id);

  if (!list.includes(bookId)) {
    list.push(bookId);
    localStorage.setItem("myReadingList", JSON.stringify(list));
    console.log("Saved to storage:", list); // Debugging
    alert("Book saved to your Reading Flow!");
  } else {
    alert("This book is already in your list!");
  }
}

// ===== READING FLOW & SOUNDS =====
function initReadingFlow() {
  const readingListGrid = document.getElementById("reading-list-grid");
  const playBtn = document.getElementById("play-sound");
  const audio = document.getElementById("cozy-sound");

  // Only run if we are on the Flow page
  if (readingListGrid) {
    renderFlowGrids();
  }

  // Sound Toggle Logic
  if (playBtn && audio) {
    let isPlaying = false;
    playBtn.addEventListener("click", () => {
      if (!isPlaying) {
        audio.play();
        playBtn.textContent = "停"; // or "⏸"
      } else {
        audio.pause();
        playBtn.textContent = "▶";
      }
      isPlaying = !isPlaying;
    });
  }
}

function renderFlowGrids() {
  const readingListGrid = document.getElementById("reading-list-grid");
  const completedGrid = document.getElementById("completed-books-grid");

  // Get the IDs from the Recommend page
  const savedIds = JSON.parse(localStorage.getItem("myReadingList")) || [];
  const completedIds = JSON.parse(localStorage.getItem("completedBooks")) || [];

  // Clear existing content
  readingListGrid.innerHTML = "";
  completedGrid.innerHTML = "";

  // If the list is empty, show a message
  if (savedIds.length === 0) {
    readingListGrid.innerHTML = "<p style='padding:10px;'>Your reading list is empty. Go to the Recommender to add books!</p>";
  }

  savedIds.forEach(id => {
    // FORCE both to be strings for a perfect match check
    const book = books.find(b => String(b.id) === String(id));

    if (book) {
      readingListGrid.innerHTML += `
                <div class="book-card-small" style="display:flex; gap:10px; margin-bottom:10px; background:rgba(255,255,255,0.9); padding:10px; border-radius:5px; color: #4a148c; border: 1px solid #ccc;">
                    <img src="${book.image}" style="width:60px; height:90px; object-fit:cover; border-radius:3px;">
                    <div style="flex:1;">
                        <p style="margin:0; font-weight:bold; font-size:14px;">${book.title}</p>
                        <p style="margin:0; font-size:12px; opacity:0.8;">${book.author}</p>
                        <button onclick="window.markAsComplete(${book.id})" style="cursor:pointer; margin-top:8px; background:#6a1b9a; color:white; border:none; border-radius:3px; padding:4px 10px; font-size:11px;">✔ Finish</button>
                    </div>
                </div>
            `;
    } else {
      console.log("Error: Could not find book with ID:", id);
    }
  });

  completedIds.forEach(id => {
    const book = books.find(b => String(b.id) === String(id));
    if (book) {
      completedGrid.innerHTML += `<img src="${book.image}" title="${book.title}" style="width:45px; height:65px; margin:5px; opacity:0.8; border-radius:2px; object-fit:cover; border: 1px solid white;">`;
    }
  });
}

// Global functions for the buttons to work
window.markAsComplete = function (id) {
  let readingList = JSON.parse(localStorage.getItem("myReadingList")) || [];
  let completedList = JSON.parse(localStorage.getItem("completedBooks")) || [];

  readingList = readingList.filter(bookId => bookId !== id);
  if (!completedList.includes(id)) completedList.push(id);

  localStorage.setItem("myReadingList", JSON.stringify(readingList));
  localStorage.setItem("completedBooks", JSON.stringify(completedList));
  renderFlowGrids(); // Refresh the list
};


document.addEventListener("DOMContentLoaded", () => {
  // 1. If we are on the Flow page, start the Reading Flow logic
  if (document.getElementById("reading-list-grid")) {
    initReadingFlow();
  }

  // 2. If we are on the Recommender page, start the Recommender logic
  if (document.getElementById("pick-random")) {
    initRecommender();
  }

  // 3. Keep these if she has logic for Home or Tracker in this same file
  if (document.getElementById("quote-text")) {
    initHomePage();
  }
  if (document.getElementById("total-pages")) {
    initTracker();
  }
});


function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    
    // This looks for EVERY possible way she named her menu
    const navMenu = document.querySelector('.nav-links') || 
                    document.querySelector('nav ul') || 
                    document.querySelector('.navbar ul');

    if (hamburger && navMenu) {
        hamburger.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the 'active' class
            navMenu.classList.toggle('active');
            
            // Debugging: This will tell her exactly what element is being moved
            console.log("Toggling menu:", navMenu);
        };

        // Close menu if clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.error("Hamburger or NavMenu not found on this page!");
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', setupMobileMenu);