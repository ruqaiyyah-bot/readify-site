/* READIFY MAIN JAVASCRIPT
   Handles: Home, Tracker, Flow, Feedback, and PWA
*/

document.addEventListener("DOMContentLoaded", () => {
    initPWA();
    initHamburgerMenu();

    if (document.body.classList.contains('home-page')) initHomePage();
    if (document.querySelector('.progress-box')) initTracker();
    if (document.querySelector('.feedback-form')) initFeedback();
    if (document.querySelector('.sound-control')) initReadingFlow();
});

// ===== 1. PWA REGISTRATION =====
function initPWA() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(reg => {
                console.log('Service Worker registered');
            }).catch(err => console.log('SW registration failed', err));
        });
    }
}

// ===== 2. HOME PAGE: QUOTES & AUTHOR OF THE DAY =====
function initHomePage() {
    // 1. AUTO-ROTATING QUOTES
    const quotes = [
        "“A reader lives a thousand lives before he dies.” – George R.R. Martin",
        "“Books are a uniquely portable magic.” – Stephen King",
        "“There is no friend as loyal as a book.” – Ernest Hemingway",
        "“So many books, so little time.” – Frank Zappa"
    ];

    let quoteIndex = 0;
    const quoteElement = document.getElementById("quote-text");

    if (quoteElement) {
        // Show the first quote immediately so it's not blank
        quoteElement.textContent = quotes[0];

        // Rotation logic: changes every 5 seconds 
        setInterval(() => {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            quoteElement.textContent = quotes[quoteIndex];
        }, 5000);
    }

    // 2. AUTHOR OF THE DAY (Date-based logic) 
    const authors = [
        { name: "Donna Tartt", work: "The Goldfinch", img: "images/donnatarrt.jpg" },
        { name: "Brandon Sanderson", work: "Mistborn", img: "images/brandon.jpg" },
        { name: "Sally Rooney", work: "Normal People", img: "images/sally.jpg" }
    ];

    const nameElement = document.getElementById("author-name");
    const workElement = document.getElementById("author-work");
    const imgElement = document.getElementById("author-image");

    if (nameElement && workElement) {
        // Calculation to pick a unique author based on the calendar day [cite: 28, 90]
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const dailyAuthor = authors[dayOfYear % authors.length];

        nameElement.textContent = dailyAuthor.name;
        workElement.textContent = dailyAuthor.work;
        if (imgElement) imgElement.src = dailyAuthor.img;
    }
}

// CRITICAL: This ensures the code runs ONLY after the HTML is ready
document.addEventListener("DOMContentLoaded", initHomePage);
// ===== 3. READING PROGRESS TRACKER =====
function initTracker() {
    const calcBtn = document.querySelector(".btn-calc");
    const progressBar = document.querySelector(".progress-bar");

    // Load saved progress from localStorage when the page opens
    const savedProgress = localStorage.getItem("readingProgress");
    if (savedProgress) {
        updateUI(JSON.parse(savedProgress));
    }

    calcBtn.addEventListener("click", (e) => {
        // IMPORTANT: This stops the page from refreshing and clearing the bar
        e.preventDefault();

        // Getting values using the IDs from your HTML
        const total = parseFloat(document.getElementById("totalPages").value);
        const read = parseFloat(document.getElementById("pagesRead").value);
        const speed = parseFloat(document.getElementById("readingSpeed").value);

        // Validation: Make sure the user entered numbers and hasn't read more than the total
        if (total > 0 && read >= 0 && speed > 0 && read <= total) {
            const percent = ((read / total) * 100).toFixed(1);
            const remainingPages = total - read;
            const timeToFinish = (remainingPages / speed).toFixed(1);

            const progressData = { percent, timeToFinish, total, read };

            // Save to LocalStorage (Requirement for marks)
            localStorage.setItem("readingProgress", JSON.stringify(progressData));

            // Update the bar and text
            updateUI(progressData);

            // Reusable function call (Requirement for marks)
            if (typeof displayMessage === "function") {
                displayMessage(`Progress updated! You are ${percent}% done.`, "success");
            }
        } else {
            alert("Please enter valid numbers. 'Pages Read' cannot be higher than 'Total Pages'.");
        }
    });

    function updateUI(data) {
        // Move the bar
        if (progressBar) {
            progressBar.style.width = data.percent + "%";
        }

        // Show the text stats
        const resultDiv = document.getElementById("tracker-results");
        if (resultDiv) {
            resultDiv.innerHTML = `
                <div style="margin-top: 10px; color: var(--text-color); font-weight: bold;">
                    <p>Current Progress: ${data.percent}%</p>
                    <p>Estimated Time to Finish: ${data.timeToFinish} days</p>
                </div>
            `;
        }
    }
}

// ===== 4. FEEDBACK FORM & LOCAL STORAGE =====
function initFeedback() {
    const form = document.querySelector(".feedback-form form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const feedback = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            msg: document.getElementById("message").value
        };

        localStorage.setItem("userFeedback", JSON.stringify(feedback));
        displayMessage("Thank you! Your feedback has been stored locally.", "success");
        form.reset();
    });

    // FAQ Accordion logic
    const faqs = document.querySelectorAll(".faq-item");
    faqs.forEach(faq => {
        faq.addEventListener("click", () => faq.classList.toggle("active"));
    });
}

// ===== 5. READING FLOW (SOUNDS) =====
function initReadingFlow() {
    const audio = new Audio('sounds/cozy-rain.mp3'); // Example path
    const playBtn = document.getElementById("play-sound");
    let isPlaying = false;

    playBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play();
            playBtn.textContent = "🔇 Stop Sound";
        } else {
            audio.pause();
            playBtn.textContent = "🔊 Play Cozy Sound";
        }
        isPlaying = !isPlaying;
    });
}

// REUSABLE FUNCTION across multiple pages
function displayMessage(msg, type) {
    const msgBox = document.createElement("div");
    msgBox.className = `alert-${type}`;
    msgBox.innerText = msg;
    msgBox.style.cssText = "position:fixed; top:20px; right:20px; padding:15px; background:#3a1d66; color:white; border-radius:8px; z-index:2000;";
    document.body.appendChild(msgBox);
    setTimeout(() => msgBox.remove(), 3000);
}

function initHamburgerMenu() {
    const menuButton = document.getElementById("menu-toggle");
    const nav = document.querySelector("header nav");

    if (!menuButton || !nav) {
        console.warn("Hamburger menu elements not found");
        return;
    }

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
        console.log("Menu toggled", nav.classList.contains("open"));
    });
}


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