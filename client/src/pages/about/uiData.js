import CardsUI from "./ui/CardsUI"
import FAQUI from "./ui/FAQUI"
import TableUI from "./ui/TableUI"
import TabsUI from "./ui/TabsUI"

export const aboutPages = [
  // { slug: "animation", label: "Animation", title: "Good Day", component: FAQUI },
  { slug: "cards", label: "Cards", title: "Cards UI", component: CardsUI },
  { slug: "faq", label: "FAQs", title: "FAQs UI", component: FAQUI },
  // { slug: "form-steps", label: "Form steps", title: "Good Day", component: FAQUI },
  { slug: "table", label: "Table", title: "Table List UI", component: TableUI },
  { slug: "tabs", label: "Tabs", title: "Tabs UI", component: TabsUI },
]