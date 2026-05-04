# Button Component

Reusable button component with support for variants, sizes, icons, and loading state.

---

## 📦 Import

```js
import Button from '@/components/Button/Button'
```

---

## 🚀 Basic Usage

```jsx
<Button>Click Me</Button>
```

---

## 🎨 Variants

Controls the visual style of the button.

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>
```

> Default: `primary`

---

## 📏 Sizes

```jsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

> Default: `md`

---

## ⏳ Loading State

Disables the button and shows a spinner.

```jsx
<Button loading>Saving...</Button>
```

---

## 🚫 Disabled State

```jsx
<Button disabled>Disabled</Button>
```

---

## 🧩 With Icon

```jsx
<Button
  icon={{ name: 'IconPlus', position: 'left' }}
>
  Add Item
</Button>
```

### Icon on Right

```jsx
<Button
  icon={{ name: 'IconArrowRight', position: 'right' }}
>
  Continue
</Button>
```

### Icon Options

| Prop     | Type   | Default        | Description          |
| -------- | ------ | -------------- | -------------------- |
| name     | string | —              | Icon name (required) |
| position | string | `left`         | `left` or `right`    |
| size     | number | `18`           | Icon size            |
| color    | string | `currentColor` | Icon color           |

---

## 🖱️ Click Handler

```jsx
<Button onClick={() => console.log('Clicked')}>
  Click Me
</Button>
```

---

## 🔘 Button Type

```jsx
<Button type="submit">Submit</Button>
<Button type="button">Cancel</Button>
```

> Default: `button`

---

## 🎯 Custom Classes

```jsx
<Button className="my-custom-class">
  Styled Button
</Button>
```

---

## 🧠 Props

| Prop      | Type     | Default   | Description                       |
| --------- | -------- | --------- | --------------------------------- |
| children  | node     | —         | Button label                      |
| variant   | string   | `primary` | Visual style                      |
| size      | string   | `md`      | `sm`, `md`, `lg`                  |
| type      | string   | `button`  | `button`, `submit`                |
| loading   | boolean  | `false`   | Shows spinner and disables button |
| disabled  | boolean  | `false`   | Disables button                   |
| onClick   | function | —         | Click handler                     |
| icon      | object   | `null`    | Icon configuration                |
| className | string   | `''`      | Additional CSS classes            |

---

## ⚠️ Notes

* When `loading` is `true`, the button is automatically disabled.
* Icon will not render while loading.
* Make sure the icon name exists in the Icon component.

---

## 🧪 Example (All Features)

```jsx
<Button
  variant="primary"
  size="lg"
  loading={false}
  icon={{ name: 'IconCheck', position: 'left' }}
  onClick={() => console.log('Submit')}
>
  Submit
</Button>
```

---
