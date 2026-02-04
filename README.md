🎨 Etch-a-SketchA browser-based sketchpad that blends mathematical logic with dynamic DOM manipulation. This project was built as part of The Odin Project Foundations curriculum to master JavaScript-driven layouts and event handling.

✨ Live Demo

🚀 FeaturesDynamic Grid Generation: Generate a custom $N \times N$ grid (up to 100x100) that fits perfectly within a fixed 700px container.Rainbow Pen: Every hover interaction triggers a random RGB color generation for a vibrant drawing experience.Modern UI Controls: Replaced the standard browser prompt with a sleek HTML5 input and button interface for better User Experience (UX).Tactile Feedback: Buttons feature active-state scaling transforms and smooth transitions for a "pro" feel.Mobile-Aware Layout: Utilizes min-height: 100dvh to ensure the layout remains centered and fully visible on mobile browsers, avoiding address-bar overlap.🛠️ Technical Highlights

🧠 Performance-First Event DelegationInstead of attaching thousands of event listeners to individual squares—which would slow down the browser—I implemented a single Event Delegation listener on the parent container.JavaScript// Example of the efficient event delegation used:

grid.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = generateRandomColor();
  }
});

📏 Precise Box-Model MathTo prevent the grid from "breaking" or overflowing, I used box-sizing: border-box and swapped standard borders for CSS Outlines. This ensures that the math ($700\text{px} / \text{gridSize}$) remains pixel-perfect regardless of the grid density.

💻 Built WithJavaScript (ES6+): 
Dynamic DOM creation, Event Delegation, and Functional logic.
CSS3: Flexbox (Grid layout), dvh units, and CSS Transitions.
HTML5: Semantic structure and custom input controls.

🔧 How to UseEnter a number between 1 and 100 in the input field.
Click "Generate Grid".
Hover your mouse (or finger on touch devices) over the grid to start creating!