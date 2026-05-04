# RouterLink Component

A unified link component that automatically handles:

* Internal navigation (via `NavLink`)
* External links (`<a target="_blank" />`)
* Icons (left/right)
* Active state styling

---

## 📦 Import

```js
import RouterLink from '@/components/RouterLink/RouterLink'
```

---

## 🚀 Basic Usage (Internal Link)

```jsx
<RouterLink to="/about">
  About Page
</RouterLink>
```

Uses `NavLink` from react-router-dom, so it supports active state.

---

## 🌍 External Links

```jsx
<RouterLink href="https://google.com">
  Open Google
</RouterLink>
```

Or:

```jsx
<RouterLink to="https://google.com">
  Open Google
</RouterLink>
```

### Behavior

* Automatically renders `<a>`
* Opens in a new tab
* Adds `rel="noopener noreferrer"`

---

## 🎨 With Icon

```jsx
<RouterLink
  to="/dashboard"
  icon={{ name: 'IconHome', position: 'left' }}
>
  Dashboard
</RouterLink>
```

### Icon on Right

```jsx
<RouterLink
  to="/next"
  icon={{ name: 'IconArrowRight', position: 'right' }}
>
  Continue
</RouterLink>
```

---

## 🎯 Active State Styling

Because it uses `NavLink`, you can pass a function:

```jsx
<RouterLink
  to="/about"
  className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'
  }
>
  About
</RouterLink>
```

---

## 🎨 Custom Classes

```jsx
<RouterLink to="/about" className="my-link">
  Custom Link
</RouterLink>
```

---

## 🧠 Props

| Prop        | Type              | Description                     |
| ----------- | ----------------- | ------------------------------- |
| `to`        | string            | Internal route or external URL  |
| `href`      | string            | Forces external link            |
| `children`  | node              | Link content                    |
| `className` | string | function | Supports NavLink-style function |
| `icon`      | object            | Icon configuration              |
| `...props`  | any               | Passed to `<a>` or `NavLink`    |

---

## 🧩 Icon Options

| Prop     | Type   | Default        | Description          |
| -------- | ------ | -------------- | -------------------- |
| name     | string | —              | Icon name (required) |
| position | string | `left`         | `left` or `right`    |
| size     | number | `18`           | Icon size            |
| color    | string | `currentColor` | Icon color           |

---

## 🔍 How It Works

```js
const isExternal = href || (to && to.startsWith("http"));
```

* If `href` is provided → external
* If `to` starts with `http` → external
* Otherwise → internal (`NavLink`)

---

## ⚠️ Notes

* `className` supports both:

  * string
  * function (`NavLink` pattern)
* External links always:

  * open in new tab
  * include security attributes
* Icon renders conditionally:

  * left (default)
  * right

---

## 🧪 Example (Full)

```jsx
<RouterLink
  to="/profile"
  className={({ isActive }) =>
    `nav-link ${isActive ? 'active' : ''}`
  }
  icon={{ name: 'IconUser', position: 'left' }}
>
  Profile
</RouterLink>
```

---

## 💡 Best Practice

Use `RouterLink` instead of:

* `<NavLink />`
* `<a />`

This ensures consistent behavior and styling across your app.

---
