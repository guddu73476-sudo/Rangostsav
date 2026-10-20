Rangotsav – Dussehra Mela Website
A responsive, dark-themed Dussehra Mela website built with HTML, CSS, and vanilla JavaScript. Rangotsav uses a festive purple-and-gold visual style, animated details, event cards, food highlights, an image gallery, and a simple visit-planning demo form.
Features
- Responsive layout for desktop, tablet, and mobile
- Dark purple theme with gold and orange accents
- Festive hero section with image and countdown timer
- About section highlighting culture and celebration
- Event cards with category filters
- Food zone section
- Gallery with click-to-expand lightbox
- Mobile navigation menu
- Visit-planning demo form with basic validation
- Back-to-top button and active navigation highlighting
- Reduced-motion accessibility support
- External images and Google Fonts
Project Structure
Rangotsav/
├── index.html
├── style.css
├── script.js
└── README.md
Getting Started
1. Download or clone the project
Place all project files in the same folder.
2. Open the website
Option A — Quick start
- Double-click index.html to open it in your browser.
Option B — VS Code Live Server
1. Open the Rangotsav folder in Visual Studio Code.
2. Install the Live Server extension if you don't already have it.
3. Right-click index.html.
4. Select Open with Live Server.
An internet connection is recommended because the page loads photos from Unsplash and fonts from Google Fonts.
Customize the Website
Change the festival countdown
Open script.js and edit the FESTIVAL_DATE value near the top:
const FESTIVAL_DATE = "2026-10-20T18:00:00+05:30";
Use this format:
YYYY-MM-DDTHH:MM:SS+05:30
The +05:30 offset represents Indian Standard Time. Replace the example with your event's actual date and time.
Update venue and timings
In index.html, find the Plan Your Visit section (id="visit") and replace the placeholder venue, festival date, and opening-hours text with your event details.
Change photos
In index.html, replace the relevant image URLs in src attributes. Gallery images also use a data-image attribute for the enlarged lightbox image. Update both values when changing a gallery photo.

The current photos are loaded from external URLs, so they may require an internet connection and can change or become unavailable.
Change colours and styling
At the top of style.css, edit the CSS custom properties in :root, such as:
--bg: #100b20;
--surface: #1e1633;
--gold: #f4c66a;
--orange: #ff8a43;
Add or edit event cards
In index.html, find the event grid (id="eventGrid"). Each .event-card has a data-category attribute. Make sure its category matches one of the filter values in the event filter buttons (all, culture, fun, or shopping).
Technologies Used
- HTML5 — page structure and content
- CSS3 — responsive layout, theme, transitions, and animations
- JavaScript (ES6+) — countdown, navigation, filters, gallery lightbox, and form interaction
- Google Fonts — Cinzel and Poppins
- Unsplash — externally hosted photos
Important Notes
- This is a front-end demonstration project.
- The visit form does not send, store, or confirm bookings. It only displays a visit-plan message in the browser.
- No backend, database, payment system, or ticketing integration is included.
- Event names, venue, schedule, and countdown date should be updated for a real event.
- Check image usage rights and replace any unavailable image URLs before publishing.
Possible Future Improvements
- Connect the visit form to a secure backend
- Add real event schedules and venue maps
- Add ticket booking and QR-code tickets
- Add language selection (Hindi and English)
- Host the site using GitHub Pages, Netlify, or another static hosting provider
License
No license is specified yet. Add a LICENSE file if you plan to distribute or reuse the project publicly.
