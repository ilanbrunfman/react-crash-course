// Loads ALL images inside assets/images at build time
const imageModules = import.meta.glob(
    "/src/assets/images/**/*.{png,jpg,jpeg,svg,webp}",
    { eager: true, import: "default" }
)

// Convert to easy lookup map:  "hero.jpg" → URL
const imageMap = {}

Object.entries(imageModules).forEach(([path, module]) => {
    const fileName = path.split("/").pop()
    imageMap[fileName] = module
})

export default imageMap
