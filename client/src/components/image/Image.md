# Image Component

Reusable image component with support for local assets, external URLs, aspect ratios, object-fit behavior, lazy loading, and fallback images.

---

## 📦 Import

```js
import Image from '@/components/Image/Image'
```

---

## 🚀 Basic Usage

### Local Bundled Image

```jsx
<Image
    file="pexels-adenir-28242916.jpeg"
    alt="Team member"
/>
```

### External Image URL

```jsx
<Image
    src="https://images.unsplash.com/photo-123"
    alt="External image"
/>
```

---

## 🎨 Props

| Prop | Type | Default | Description |
|------|------|------|------|
| `src` | `string` | `undefined` | External image URL |
| `file` | `string` | `undefined` | Local bundled image filename from `imageMap` |
| `alt` | `string` | `""` | Image alt text |
| `width` | `string \| number` | `undefined` | Image width |
| `ratio` | `string` | `undefined` | Aspect ratio (example: `"16/9"` or `"1/1"`) |
| `fit` | `string` | `"cover"` | CSS object-fit behavior |
| `rounded` | `boolean` | `false` | Adds rounded corners |
| `circle` | `boolean` | `false` | Makes image circular |
| `lazy` | `boolean` | `true` | Enables lazy loading |
| `fallback` | `string` | `"/images/fallback.png"` | Fallback image if loading fails |
| `className` | `string` | `""` | Additional custom class names |

---

## 🖼 Aspect Ratio

```jsx
<Image
    file="landscape.jpg"
    alt="Landscape"
    ratio="16/9"
/>
```

---

## 📏 Width

```jsx
<Image
    file="portrait.jpg"
    alt="Portrait"
    width="300px"
/>
```

---

## 🔲 Rounded Images

```jsx
<Image
    file="avatar.jpg"
    alt="Avatar"
    rounded
/>
```

---

## ⚪ Circle Images

```jsx
<Image
    file="profile.jpg"
    alt="Profile"
    width="120px"
    circle
/>
```

---

## 🎯 Object Fit

### Cover

```jsx
<Image
    file="banner.jpg"
    alt="Banner"
    fit="cover"
/>
```

### Contain

```jsx
<Image
    file="logo.png"
    alt="Logo"
    fit="contain"
/>
```

---

## ⚡ Lazy Loading

```jsx
<Image
    file="gallery-image.jpg"
    alt="Gallery"
    lazy
/>
```

Disable lazy loading:

```jsx
<Image
    file="hero.jpg"
    alt="Hero"
    lazy={false}
/>
```

---

## 🛟 Fallback Image

```jsx
<Image
    src="https://invalid-url.com/image.jpg"
    alt="Broken image"
    fallback="/images/default.png"
/>
```

---

## 🧩 Custom Class Names

```jsx
<Image
    file="photo.jpg"
    alt="Photo"
    className="custom-image"
/>
```

---

## 🗂 Example With Team Data

```jsx
const TEAM = [
    {
        name: 'John Doe',
        role: 'CEO',
        image: 'pexels-adenir-28242916.jpeg',
    },
]

{TEAM.map(member => (
    <Image
        key={member.name}
        file={member.image}
        alt={member.name}
        ratio="1/1"
        rounded
    />
))}
```

---

## 📁 imageMap Example

```js
const imageModules = import.meta.glob('@/assets/images/*', {
    eager: true,
    import: 'default',
})

const imageMap = Object.fromEntries(
    Object.entries(imageModules).map(([path, module]) => [
        path.split('/').pop(),
        module,
    ])
)

export default imageMap
```

---

## ✅ Features

- Supports local bundled assets
- Supports external image URLs
- Automatic fallback image handling
- Aspect ratio support
- Object-fit support
- Rounded and circle styles
- Lazy loading support
- Custom class names
