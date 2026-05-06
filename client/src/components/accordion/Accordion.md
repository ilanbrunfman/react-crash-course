# Accordion Component

A flexible and reusable Accordion component built with React.

Supports single or multiple open items and uses a render prop pattern for full control over UI.

---

## 📦 Import

```js
import Accordion from '@/components/Accordion/Accordion'
```

---

## 🚀 Basic Usage (Single Open)

```jsx
const items = [
  { title: "Item 1", content: "Content 1" },
  { title: "Item 2", content: "Content 2" }
]

<Accordion
  items={items}
  renderHeader={(item, isOpen) => (
    <button>
      {item.title} {isOpen ? "-" : "+"}
    </button>
  )}
  renderContent={(item) => (
    <div>{item.content}</div>
  )}
/>
```

### Behavior

* Only one item can be open at a time
* Clicking an open item will close it

---

## 🔁 Multiple Open Items

```jsx
<Accordion
  items={items}
  allowMultiple
  renderHeader={(item, isOpen) => (
    <button>
      {item.title} {isOpen ? "-" : "+"}
    </button>
  )}
  renderContent={(item) => (
    <div>{item.content}</div>
  )}
/>
```

### Behavior

* Multiple items can be open simultaneously
* Each item toggles independently

---

## 🎨 Custom Rendering

Accordion is **headless**, meaning you control the UI completely.

```jsx
<Accordion
  items={faqItems}
  className="faq"
  renderHeader={(item, isOpen) => (
    <button className="faq-question">
      {item.question}
      {isOpen ? "−" : "+"}
    </button>
  )}
  renderContent={(item) => (
    <div className="faq-answer">
      {item.answer}
    </div>
  )}
/>
```

---

## 🧠 Props

| Prop            | Type     | Default | Description                  |
| --------------- | -------- | ------- | ---------------------------- |
| `items`         | array    | `[]`    | List of accordion items      |
| `allowMultiple` | boolean  | `false` | Allow multiple open sections |
| `renderHeader`  | function | —       | Render function for header   |
| `renderContent` | function | —       | Render function for content  |
| `className`     | string   | `""`    | Additional wrapper class     |

---

## 🧩 Render Functions

### `renderHeader(item, isOpen)`

* `item` → current item object
* `isOpen` → boolean open state

---

### `renderContent(item, isOpen)`

* `item` → current item object
* `isOpen` → boolean open state

---

## 🎯 Example: Sidebar Navigation

```jsx
<Accordion
  items={[navItem]}
  renderHeader={(item, isOpen) => (
    <button className={`nav-link ${isOpen ? "active" : ""}`}>
      {item.label}
    </button>
  )}
  renderContent={(item) => (
    <div>
      {item.children.map(child => (
        <a key={child.to} href={child.to}>
          {child.label}
        </a>
      ))}
    </div>
  )}
/>
```

---

## 🎨 Styling

Basic styles:

```scss
.accordion-item {
  border-bottom: 1px solid var(--color-border);
}

.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.open {
    max-height: 500px;
  }
}
```

---

## 🔍 How It Works

```js
const isOpen = openIndexes.includes(index)
```

* Maintains internal state (`openIndexes`)
* Toggles items based on `allowMultiple`
* No external state required

---

## ⚠️ Notes

* This is an **uncontrolled component**
* Fully UI-agnostic (no styling assumptions)
* Works with:

  * CSS transitions
  * Framer Motion (if wrapped externally)
* `renderHeader` handles click interaction

---

## 🧪 Example (Full)

```jsx
<Accordion
  items={faqItems}
  allowMultiple
  className="faq"
  renderHeader={(item, isOpen) => (
    <button className="faq-question">
      {item.question}
      {isOpen ? "−" : "+"}
    </button>
  )}
  renderContent={(item) => (
    <div className="faq-answer">
      {item.answer}
    </div>
  )}
/>
```

---

## 💡 Best Practice

Use Accordion when you need:

* Expand/collapse behavior
* Reusable UI patterns (FAQ, Sidebar, Filters)
* Full control over layout and styling

Avoid duplicating accordion logic across components—reuse this instead.
