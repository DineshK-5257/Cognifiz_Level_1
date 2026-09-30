/**
 * ==========================================================================
 * LEVEL 1 - INTERACTIVE WEBPAGE JAVASCRIPT
 * Demonstrating DOM manipulation, events, conditional statements, form validation, 
 * date handling, and arithmetic calculations.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', function () {
    console.log("Interactive Webpage loaded successfully!");

    // Initialize all components
    initTimeGreeting();
    initColorChanger();
    initFormValidation();
    initCalculator();
    initMobileNavbar();
    initSmoothNavigation();
});

/* ==========================================================================
   1. TIME-BASED GREETING FEATURE (REQUIREMENT 4)
   ========================================================================== */
/**
 * Determines current hour using JS Date object and returns greeting string.
 * @returns {Object} Object containing text and icon for greeting
 */
function getGreetingData() {
    const currentHour = new Date().getHours();
    let text = "";
    let icon = "";

    // Requirement:
    // Before 12 PM -> "Good Morning!"
    // 12 PM to before 6 PM -> "Good Afternoon!"
    // 6 PM onwards -> "Good Evening!"
    if (currentHour < 12) {
        text = "Good Morning!";
        icon = "☀️";
    } else if (currentHour < 18) {
        text = "Good Afternoon!";
        icon = "🌤️";
    } else {
        text = "Good Evening!";
        icon = "🌙";
    }

    return { text, icon, currentHour };
}

/**
 * Initializes and updates the greeting elements on the webpage.
 */
function initTimeGreeting() {
    const greetingBadge = document.getElementById('greetingBadge');
    const greetingText = document.getElementById('greetingText');
    const greetingIcon = document.getElementById('greetingIcon');
    const currentTimeDisplay = document.getElementById('currentTimeDisplay');
    const showGreetingBtn = document.getElementById('showGreetingBtn');

    function updateGreeting() {
        const greetingData = getGreetingData();
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        if (greetingText) greetingText.textContent = greetingData.text;
        if (greetingIcon) greetingIcon.textContent = greetingData.icon;
        if (currentTimeDisplay) {
            currentTimeDisplay.textContent = `${greetingData.text} (Local Time: ${timeString})`;
        }

        // Visual flash feedback on update
        if (greetingBadge) {
            greetingBadge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                greetingBadge.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Run automatically on page load
    updateGreeting();

    // Show Greeting button click listener (Requirement 4)
    if (showGreetingBtn) {
        showGreetingBtn.addEventListener('click', function () {
            updateGreeting();
            const data = getGreetingData();
            alert(`System Time Check:\n\n${data.icon} ${data.text}\n\nCurrent Local Time: ${new Date().toLocaleTimeString()}`);
        });
    }
}

/* ==========================================================================
   2. BUTTON COLOR CYCLE FEATURE (REQUIREMENT 2)
   ========================================================================== */
function initColorChanger() {
    const colorBtn = document.getElementById('colorChangeBtn');
    
    // Array of vibrant modern palette colors
    const colors = [
        { bg: '#4f46e5', text: 'Default Indigo' },
        { bg: '#10b981', text: 'Emerald Green' },
        { bg: '#f43f5e', text: 'Rose Pink' },
        { bg: '#8b5cf6', text: 'Vibrant Purple' },
        { bg: '#d97706', text: 'Amber Orange' },
        { bg: '#06b6d4', text: 'Cyan Wave' }
    ];

    let currentColorIndex = 0;

    if (colorBtn) {
        colorBtn.addEventListener('click', function () {
            // Cycle to the next color in array
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            const newColor = colors[currentColorIndex];

            // Update button background color with smooth transition
            colorBtn.style.backgroundColor = newColor.bg;
            
            // Subtle click scale animation
            colorBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                colorBtn.style.transform = 'translateY(-2px)';
            }, 150);
        });
    }
}

/* ==========================================================================
   3. BASIC FORM VALIDATION & GREETING (REQUIREMENT 3)
   ========================================================================== */
function initFormValidation() {
    const userForm = document.getElementById('userForm');
    const nameInput = document.getElementById('nameInput');
    const nameError = document.getElementById('nameError');
    const formGreetingResult = document.getElementById('formGreetingResult');
    const formGreetingText = document.getElementById('formGreetingText');

    if (userForm && nameInput) {
        userForm.addEventListener('submit', function (event) {
            // Prevent standard form browser reload
            event.preventDefault();

            const userName = nameInput.value.trim();

            // Validate that the user has entered a name
            if (userName === '') {
                // Show error state
                nameInput.classList.add('invalid');
                if (nameError) nameError.classList.add('visible');
                if (formGreetingResult) formGreetingResult.classList.add('hidden');
                nameInput.focus();
            } else {
                // Input is valid
                nameInput.classList.remove('invalid');
                if (nameError) nameError.classList.remove('visible');

                // Display friendly greeting message on page (Requirement 3)
                // Example: "Hello, Sanjay! Welcome to my website."
                if (formGreetingText) {
                    formGreetingText.textContent = `Hello, ${userName}! Welcome to my website.`;
                }

                if (formGreetingResult) {
                    formGreetingResult.classList.remove('hidden');
                }
            }
        });

        // Clear error styling as user types
        nameInput.addEventListener('input', function () {
            if (nameInput.value.trim() !== '') {
                nameInput.classList.remove('invalid');
                if (nameError) nameError.classList.remove('visible');
            }
        });
    }
}

/* ==========================================================================
   4. BASIC CALCULATOR FEATURE (REQUIREMENT 5)
   ========================================================================== */
function initCalculator() {
    const firstNumberInput = document.getElementById('firstNumber');
    const secondNumberInput = document.getElementById('secondNumber');
    const addNumbersBtn = document.getElementById('addNumbersBtn');
    const calcError = document.getElementById('calcError');
    const calcResult = document.getElementById('calcResult');
    const calcResultValue = document.getElementById('calcResultValue');

    if (addNumbersBtn) {
        addNumbersBtn.addEventListener('click', function () {
            const val1Raw = firstNumberInput ? firstNumberInput.value.trim() : '';
            const val2Raw = secondNumberInput ? secondNumberInput.value.trim() : '';

            // Validate both numbers are entered and are valid numeric values
            if (val1Raw === '' || val2Raw === '' || isNaN(val1Raw) || isNaN(val2Raw)) {
                // Show error message
                if (calcError) calcError.classList.add('visible');
                if (calcResult) calcResult.classList.add('hidden');
            } else {
                // Perform addition calculation
                const num1 = parseFloat(val1Raw);
                const num2 = parseFloat(val2Raw);
                const sum = num1 + num2;

                // Hide error
                if (calcError) calcError.classList.remove('visible');

                // Format result nicely (remove unnecessary decimals if integer)
                const formattedResult = Number.isInteger(sum) ? sum : sum.toFixed(2);

                // Display result on page
                if (calcResultValue) calcResultValue.textContent = formattedResult;
                if (calcResult) calcResult.classList.remove('hidden');
            }
        });
    }
}

/* ==========================================================================
   5. MOBILE NAVBAR TOGGLE (REQUIREMENT 1 & 9)
   ========================================================================== */
function initMobileNavbar() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function () {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile nav when clicking any nav link
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/* ==========================================================================
   6. ACTIVE SECTION HIGHLIGHTING & SMOOTH SCROLL (REQUIREMENT 1)
   ========================================================================== */
function initSmoothNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}
