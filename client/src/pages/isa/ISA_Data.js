import Eligibilitys from "./pages/eligibility/Eligibilitys";
import Students from "./pages/eligibility/Students";
import Employers from "./pages/eligibility/Employers";
import Templates from "./pages/contracts/Templates"

export const isaPages = [
  // {
  //   slug: "eligibility",
  //   label: "Eligibility",
  //   component: Eligibilitys,
  //   children: [],
  // },
  {
    slug: "eligibility",
    label: "Eligibility",
    children: [
      {
        slug: "students",
        label: "Students",
        component: Students
      },
      {
        slug: "employers",
        label: "Employers",
        component: Employers
      }
    ]
  },
  {
    slug: "contracts",
    label: "Contracts",
    children: [
      {
        slug: "templates",
        label: "Templates",
        component: Templates
      }
    ]
  }
]