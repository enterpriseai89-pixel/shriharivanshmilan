## Plan

### Phase 1: Foundation
1. **Enable Lovable Cloud** — database for admin CRUD (Katha bookings, resources)
2. **Replace swami photo** with uploaded image
3. **Install dependencies** — framer-motion, @react-three/fiber@^8.18, @react-three/drei@^9.122.0, three

### Phase 2: Multi-page routing & Navigation
4. **Convert to multi-page app** — separate routes: Home `/`, About `/about`, Katha `/katha`, Schedule `/schedule`, Resources `/resources`, Contact `/contact`, Admin `/admin`
5. **Redesign Navbar** — route-based navigation with active state highlighting, smooth transitions, mobile menu

### Phase 3: 3D & Animations
6. **Add 3D hero scene** — floating lotus/Om symbol with Three.js on home page
7. **Framer-motion scroll animations** — fade-in, slide-up on all sections as they enter viewport

### Phase 4: Resources Section
8. **Resources page** — YouTube video embeds (placeholder), downloadable PDFs (placeholder cards), filterable grid

### Phase 5: Admin Panel
9. **Database tables** — `katha_bookings` (title, date, location, description, status), `resources` (title, type, url, description)
10. **Admin page** — protected route, CRUD for bookings and resources (add/edit/delete PDFs and videos)

### Phase 6: UI/UX Polish
11. **Premium design** — glassmorphism cards, gradient backgrounds, 3D depth effects, rich typography, micro-animations throughout
