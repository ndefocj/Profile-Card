#Profile Card

A simple, accessible profile card. Shows a profile image, bio, current UTC time, social links, and lists of hobbies/dislikes.

## Repository structure

- `index.html` — main page with semantic markup and test ids.
- `styles.css` — styles with CSS variables, responsive grid, and accessibility tweaks.
- `script.js` — small script that shows current UTC time and updates every second.
- `jotham.jpg` (or your avatar file) — profile image used on the page.
- `README.md` — this document.

## Quick preview / Run locally (Windows PowerShell)

1. Open the project folder in File Explorer.
2. Right-click `index.html` and choose "Open with" and pick your browser.  
   Or from PowerShell run:

```powershell
# From the project root
Start-Process index.html
```

This opens the page in your default browser.

## What the code does

- `index.html` provides semantic structure (`article`, `header`, `nav`, `section`) and `data-testid` attributes for automated tests.
- `styles.css` defines a dark-themed, responsive profile card with focus styles and reduced-motion support.
- `script.js` populates the "Current Time (UTC)" field with a readable UTC timestamp, aligns the ticks to real seconds, pauses updates while the tab is hidden, and cleans up timers on unload.

## Manual checks / testing

Open DevTools (F12) and verify:
- No errors logged in the Console.
- The UTC time is visible and updates every second.
- The avatar displays and scales when resizing the window.
- `My Hobbies` and `What I Dislike` sections are visible and responsive.
- Tab through the social links and ensure the focus outline and box-shadow are visible.

Optional automated test idea
- Use Playwright or similar to check that:
  - `[data-testid="test-user-time"]` has non-empty text after page load.
  - Social links exist and are focusable.

## Accessibility notes

- Uses semantic HTML and visible focus states.
- Respects `prefers-reduced-motion`.
- Uses a monospace stack for the time and prevents awkward mid-word breaks.
- Contrast tuning variables are available in `:root` (edit `--border-color-light` if you need tighter contrast).

## Contributing

- Feel free to file issues or open a PR for improvements.
- Keep changes small and focused. If adding dependencies or test runners, include instructions in the README.

