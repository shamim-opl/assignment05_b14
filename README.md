<div align="center">

# 🧱 Dev Stack

**Build Your Ideal Development Stack**

</div>

## 📖 About The Project

**Dev Stack** is an interactive technology explorer built for developers who
are planning their next project. Browse frontend, backend, database,
language, styling, and DevOps tools side by side, then curate your own
personal **"Your Stack"** collection by adding the technologies you want to
use — complete with ratings, difficulty levels, and short descriptions to
help you decide at a glance.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| ⚛️ **React 19** | Component-driven UI |
| ⚡ **Vite** | Dev server & build tool |
| 🎨 **Tailwind CSS v4** | Utility-first styling |
| 🔔 **React-Toastify** | Toast notifications |
| 📦 **JSON** | Technology data, loaded at runtime with `fetch` |

## ✨ Features

### 1. 🧰 Curate a Personal Stack
Add any technology card to the **"Your Stack"** panel with a single click.
Trying to add the same technology twice shows a warning toast instead of a
duplicate, and the source card's button changes to a disabled
**"✓ Added to Stack"** state.

### 2. 📦 Fully Data-Driven Catalog
All 15 technologies live in `public/technologies.json` and are fetched at
runtime instead of being hardcoded — the catalog can grow or change without
touching a single line of component code.

### 3. 🎨 One-Gradient Brand Theme
The signature orange → pink → violet gradient is defined **once** as a
Tailwind theme token in `src/index.css`, then reused everywhere — the brand
name, the hero heading, and every primary button — so the entire site can be
re-themed by changing just three color values.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax that lets us write HTML-like code directly inside
JavaScript. React uses it because it makes the UI structure much easier to
read and write — instead of building elements with nested function calls,
we just describe what the UI should look like, and the build tool converts
it into plain JavaScript behind the scenes.

**2. What is the difference between props and state?**

Props are values passed **into** a component from its parent, and a
component cannot change its own props — they are read-only. State is data a
component manages **by itself**, and it can change over time, usually
because of user interaction, which then triggers a re-render. In this
project, `tech` passed into `TechCard` is a prop, while the `stack` array
inside `TechGrid` is state.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a component remember values between renders and update
them. I used it in `TechGrid.jsx` for `technologies` (the fetched list),
`loading` (whether the data is still loading), and `stack` (the technologies
the user has added), and in `Navbar.jsx` for `menuOpen` to open and close
the mobile hamburger menu.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs code after a component renders — things like fetching
data, timers, or anything that happens outside of the normal render flow.
Fetching the JSON is exactly this kind of side effect, so it has to run once
when `TechGrid` first mounts, which is what
`useEffect(() => { ... }, [])` does with an empty dependency array.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

The `key` helps React tell items apart between renders, so it knows exactly
which item was added, removed, or moved instead of re-rendering the whole
list from scratch. Without a stable, unique key, React can mix up items and
cause bugs. I used each technology's own `id` (like `"react"` or `"redis"`)
as the key for both the technology cards and the stack items.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different UI depending on a condition,
using plain JavaScript like ternaries or `&&` inside JSX. In `YourStack.jsx`,
I check if the stack is empty to show a friendly empty message instead of
the list:

```jsx
{stack.length === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <div>{stack.map((tech) => (/* ...stack item... */))}</div>
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent sends data down by writing it as a prop on the child element, like
`<TechCard tech={tech} isAdded={isAdded} onAdd={handleAdd} />`. For a child
to send something back up, the parent passes a **function** as a prop, and
the child calls that function when something happens. In this project,
`TechGrid` passes `onAdd={handleAdd}` to every `TechCard`; clicking the
button calls `onAdd(tech)`, which runs `handleAdd` back in `TechGrid` and
updates the stack there.
