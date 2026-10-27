# MUGPI School Website

## Description

A responsive, seven-page school website showcasing MUGPI's school information, academics, teachers, students, results, and login interface with a clean layout, Bootstrap components, and a consistent navy-and-gold theme.

## Walk-through

Start at [`index.html`](./index.html), the home page. Use the navigation bar to explore the rest of the site:

1. **Home** (`index.html`) - Browse the welcome carousel, school highlights, academic departments, teacher previews, and notices.
2. **About** (`about.html`) - Read about the school, its head teacher, mission and vision, and administrative staff.
3. **Academic** (`academic.html`) - Explore technical departments and the academic calendar.
4. **Students** (`students.html`) - View student highlights, the student list, and feedback.
5. **Teachers** (`teachers.html`) - Browse teacher profiles grouped by subject.
6. **Results** (`results.html`) - View the previous year's results and try the student result search interface.
7. **Login** (`login.html`) - See the student login page layout.

The top bar and page footers provide the school's email and phone links. The footer also includes site navigation and a newsletter sign-up interface.

## Run locally

This is a static HTML, CSS, and JavaScript project; it does not require a build step or package installation.

- Open `index.html` in a browser, or serve the project directory with a local static web server.
- For example, from the project directory run `py -m http.server 8000`, then visit `http://localhost:8000`.
- Bootstrap, Font Awesome, and the Inter font are loaded from external CDNs, so an internet connection is needed for those assets.

## Project structure

```text
.
├── index.html
├── about.html
├── academic.html
├── students.html
├── teachers.html
├── results.html
├── login.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── Logo/
    ├── Teachers/
    └── Galllery/
```

The HTML files contain each page's content and layout. Shared visual styles are in `css/style.css`, the live date and time are handled by `js/main.js`, and images are stored under `assets/`.

## Contact

The contact details currently shown in the site are:

- **Email:** [principle@mugpi.edu](mailto:principle@mugpi.edu)
- **Phone:** [+880 1565-642426](tel:+8801565642426)

These are the website's displayed school contact details. Confirm they are current and authorized before publishing; update the email and phone links in the HTML pages together if they change. For project or code questions, contact the repository maintainer through the repository's hosting platform.

## Scope and constraints

- This repository provides a front-end website only; it has no server, database, or content-management system.
- The login, result-search, and newsletter areas are interface examples. They do not authenticate users, retrieve real student results, or subscribe email addresses.
- Do not enter real passwords or sensitive student information into the demo.
- School details, staff and student content, notices, results, and contact information are static page content and must be updated in the relevant HTML files.
- The pages rely on external CDN-hosted libraries and fonts; their styling or interactive components may be unavailable without an internet connection.
