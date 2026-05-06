import CardsUI from "./ui/CardsUI"
import FAQUI from "./ui/FAQUI"
import ModalUI from "./ui/ModalUI"
import TableUI from "./ui/TableUI"
import TabsUI from "./ui/TabsUI"

export const aboutPages = [
  // { slug: "animation", label: "Animation", title: "Good Day", component: FAQUI },
  { slug: "cards", label: "Cards", title: "Cards UI", icon: 'IconCards', component: CardsUI },
  { slug: "faq", label: "FAQs", title: "FAQs UI", icon: 'IconListBullets', component: FAQUI },
  { slug: "modal", label: "Modals", title: "Modal UI", icon: 'IconBrowsers', component: ModalUI },
  // { slug: "form-steps", label: "Form steps", title: "Good Day", icon: 'IconUser', component: FAQUI },
  { slug: "table", label: "Table", title: "Table List UI", icon: 'IconTable', component: TableUI },
  { slug: "tabs", label: "Tabs", title: "Tabs UI", icon: 'IconTabs', component: TabsUI },
]