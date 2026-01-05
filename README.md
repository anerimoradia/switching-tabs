# Tabs Components

A simple, accessible tabs component built with vanilla JavaScript, HTML, and CSS. Clicking each tab hides the content of other tabs and displays the content of the selected tab.

## Features

- ✨ Simple and lightweight vanilla JavaScript implementation
- ♿ Accessible with ARIA attributes (`aria-selected`, `aria-label`)
- 🎨 Customizable styling with CSS
- 📱 Responsive design ready
- 🚀 No external dependencies

## Project Structure

```
switching-tabs/
├── index.html      # Main HTML structure
├── styles.css      # Styling for the tabs component
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

No prerequisites needed! Just a modern web browser.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd switching-tabs
```

2. Open `index.html` in your web browser, or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser.

## How It Works

The tabs component consists of:

- **Tab Buttons**: Navigation buttons with `data-tab` attributes that correspond to panel IDs
- **Tab Panels**: Content sections with unique IDs that match the `data-tab` values
- **Active States**: The first tab and panel have the `active` class by default

When a tab button is clicked:
1. All tabs and panels have their `active` class removed
2. The clicked tab receives the `active` class
3. The corresponding panel (matching the `data-tab` attribute) receives the `active` class
4. ARIA attributes are updated for accessibility

## Project Details
https://roadmap.sh/projects/simple-tabs

## Shareable Link
https://roadmap.sh/projects/simple-tabs/solutions?u=66c52a3b34a9226f385ab651



