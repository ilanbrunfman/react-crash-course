import CardsUI from "./ui/CardsUI"
import FAQUI from "./ui/FAQUI"
import TableUI from "./ui/TableUI"
import TabsUI from "./ui/TabsUI"

export const aboutPages = [
  // { slug: "animation", label: "Animation", title: "Good Day", component: FAQUI },
  { slug: "cards", label: "Cards", title: "Good Day", component: CardsUI },
  { slug: "faq", label: "FAQs", title: "School Day", component: FAQUI },
  // { slug: "form-steps", label: "Form steps", title: "Good Day", component: FAQUI },
  { slug: "table", label: "Table", title: "Table List", component: TableUI },
  { slug: "tabs", label: "Tabs", title: "Work Day", component: TabsUI },
]