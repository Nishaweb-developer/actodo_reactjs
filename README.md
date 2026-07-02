# Actodo — Task Manager

A lightweight task management app with user login, persistent tasks, and a live dashboard header. Originally built in vanilla JS, rebuilt in React.

## Live Demo
[https://actodo-reactjs.vercel.app/]

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [How to Use](#how-to-use)
6. [Future Improvements](#future-improvements)
7. [Contributing](#contributing)

---

## Project Overview
**Actodo** is a task management app that lets users log in, add and organize daily tasks, and pick up where they left off — tasks persist across sessions via `localStorage`. Built with React, React Router, and Tailwind CSS.

## Features
- **Login flow**: simple username/password gate before reaching the task dashboard
- **Add tasks**: quick-add via input field or Enter key, with empty-input validation
- **Mark complete**: checkbox toggles a task's completed state with a strikethrough
- **Delete tasks**: one-click removal
- **Persistent storage**: tasks survive a page refresh via `localStorage`
- **Live dashboard header**: date and time update in real time, no page reload needed
- **Responsive layout**: built with Tailwind's flex utilities

## Technologies Used
- **React** — component structure, state, hooks (`useState`, `useEffect`)
- **React Router** — client-side routing between login, signup, and the task dashboard
- **Tailwind CSS** — utility-first styling
- **localStorage API** — client-side task persistence

## Getting Started
```bash
git clone https://github.com/Nishaweb-developer/actodo_reactjs.git
cd actodo_reactjs
npm install
npm start
```
App runs at `http://localhost:3000`.

## How to Use
1. Log in (or sign up) to reach the dashboard.
2. Type a task into the input field and press Enter or click **Add**.
3. Check the box next to a task to mark it complete.
4. Click **Delete** to remove a task.
5. Refresh the page — your tasks are still there.

## Future Improvements
- Task prioritization / tagging
- Due dates and reminders
- Edit-in-place for existing tasks
- Replace `localStorage` with a real backend (e.g. Firebase or a small Node API) so tasks sync across devices
- Real authentication (current login is a local demo check, not production auth)

## Contributing
Contributions are welcome. Open an issue first for major changes, or submit a pull request directly for small fixes.
