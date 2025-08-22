Cred Vista Hub – Real Auth (Local API + Cookies)

What's included
- server/index.js (Express API) with endpoints:
  POST /api/auth/signup, POST /api/auth/login, POST /api/auth/logout, GET /api/auth/me
  • bcrypt password hashing
  • httpOnly cookie for JWT (secure in prod)
- src/api/client.ts (axios instance, uses VITE_API_URL + withCredentials)
- src/api/auth.ts (API functions)
- src/context/AuthProvider.tsx (frontend auth context backed by API)
- src/components/Protected.tsx (route guard)
- src/pages/Login.tsx wired to the context (login/signup)
- src/components/Navigation.tsx shows Logout when logged in
- .env with VITE_API_URL=http://localhost:5000/api
- package.json scripts:
    npm run server   # start API at http://localhost:5000
    npm run dev      # start Vite at http://localhost:8080
    npm run dev:full # run both together

How to run
  1) npm install
  2) npm run dev:full
  3) Open http://localhost:8080
     • Sign Up, then Login. You should land in /profile.
     • Logout via the nav button.

Notes
  - Data persists to server/data/users.json
  - For HTTPS/production, set JWT_SECRET and secure cookies, and update allowed CORS origins.