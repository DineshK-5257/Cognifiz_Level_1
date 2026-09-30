# Cognifiz Level 1 - Interactive Webpage

A complete, responsive, and visually appealing frontend webpage built with **HTML5**, **CSS3**, and **Vanilla JavaScript** for Cognifiz Internship Level 1 (Tasks 1 & 2).

![Interactive Webpage Preview](assets/hero-illustration.jpg)

## 📌 Features & Implemented Requirements

### 1. Navigation Menu
- Fixed top navigation bar with glassmorphism visual styling.
- Exactly three links: **Home**, **About**, and **Contact**.
- Smooth scrolling to sections and active section highlighting.
- Fully responsive mobile navigation menu with animated hamburger toggle.

### 2. Home Section
- Modern hero layout with heading `"Welcome to My Website"`.
- Explanatory paragraph on frontend interactive features.
- High-resolution web development illustration graphic.
- **"Change My Color" Button**: Dynamic color cycling through preset palette with smooth CSS transitions.

### 3. Current Time Greeting
- Automatically computes local time on page load using JavaScript `Date()`.
  - **Before 12 PM**: Displays `"Good Morning!" ☀️`
  - **12 PM to 6 PM**: Displays `"Good Afternoon!" 🌤️`
  - **6 PM onwards**: Displays `"Good Evening!" 🌙`
- **"Show Greeting" Button**: Triggers a live time check and interactive popup alert.

### 4. Basic Form with Validation
- Form with input field `"Enter your name"` and submit button.
- Client-side input validation preventing blank submissions.
- Dynamically renders greeting `"Hello, [Name]! Welcome to my website."` on page without reloading.

### 5. Basic Calculator
- Numerical input fields for **First Number** and **Second Number**.
- **"Add Numbers" Button**: Performs arithmetic addition using Vanilla JavaScript.
- Input validation to ensure both numbers are provided.
- Live result rendering without page refresh.

### 6. About Section
- Explains core concepts demonstrated: HTML elements, CSS styling, Navigation, Forms, JavaScript events, Conditional statements, Date and time, DOM manipulation, and Basic arithmetic.

### 7. Contact Section
- Displays Email (`example@email.com`), Phone (`+91 98765 43210`), and Location (`Chennai, India`).
- Clean SVG visual icons.

---

## 🛠️ Project Structure

```
LEVEL 1/
│
├── index.html               # Main HTML5 semantic structure
├── style.css                # Custom CSS3 styling and responsive layout
├── script.js                 # Vanilla JavaScript logic
├── README.md                # Project documentation
└── assets/
    └── hero-illustration.jpg # Web development hero graphic
```

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/DineshK-5257/Cognifiz_Level_1.git
   ```
2. Navigate into the project folder:
   ```bash
   cd Cognifiz_Level_1
   ```
3. Open `index.html` directly in your browser or run via a local server:
   ```bash
   python -m http.server 8080
   ```
4. Access at `http://localhost:8080`.
