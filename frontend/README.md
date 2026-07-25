# LeadDesk Mini

Frontend for the Digital Heroes Full Stack Developer internship assignment.
Built with React 19, Vite, React Router, and Tailwind CSS. This is a
**frontend-only** project — no backend, database, or authentication is
implemented. Everything runs off local React state.

## Tech stack

- React 19 (Vite)
- React Router DOM
- Tailwind CSS
- Axios (API layer scaffolded in `src/services/api.js`, not wired up yet)
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Routes

| Route          | Page             |
| -------------- | ---------------- |
| `/`             | Home             |
| `/admin/login`  | Admin login      |
| `/admin`        | Admin dashboard  |

## Project structure

```
src/
  components/   Navbar, Hero, Features, LeadForm, Footer,
                Sidebar, Topbar, StatsCard, LeadTable
  pages/        Home, AdminLogin, AdminDashboard
  services/     api.js  (Axios instance + endpoint placeholders)
  data/         dummyLeads.js (sample data for the dashboard)
```

## Notes for backend integration

- `src/services/api.js` exports `leadsApi` and `authApi` with the endpoints
  this frontend expects (`GET/POST /leads`, `PATCH /leads/:id`,
  `DELETE /leads/:id`, `POST /auth/login`, `POST /auth/logout`). Swap the
  `console.log` calls in `LeadForm.jsx` and `AdminLogin.jsx` for these once
  a backend is ready.
- The admin dashboard currently seeds itself from `src/data/dummyLeads.js`.
  Replace that with a `leadsApi.list()` call and the rest of the UI (stats,
  search, status updates, delete) will keep working unchanged since it all
  reads from the same `leads` state array.
