import CardsUI from "./ui/CardsUI"
import FAQUI from "./ui/FAQUI"
import TabsUI from "./ui/TabsUI"

export const aboutPages = [
  // { slug: "animation", label: "Animation", title: "Good Day", component: FAQUI },
  { slug: "cards", label: "Cards", title: "Good Day", component: CardsUI },
  { slug: "faq", label: "FAQs", title: "School Day", component: FAQUI },
  // { slug: "form-steps", label: "Form steps", title: "Good Day", component: FAQUI },
  { slug: "tabs", label: "Tabs", title: "Work Day", component: TabsUI },
]