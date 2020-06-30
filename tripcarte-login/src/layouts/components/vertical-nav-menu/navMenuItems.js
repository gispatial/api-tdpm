/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
    Developers: TripcarteDev
  API Pricing URL: https://partners.tripcarte.asia/api-pricing-table/
==========================================================================================*/


export default [
  {
    url: "/",
    name: "DASHBOARD",
    slug: "home",
    icon: "MonitorIcon",
  },
  {
              url: 'https://tripcarte-asia.gispatial.vercel.app/pages/login',
              name: "Login / Register",
              icon: "LockIcon",
              slug: "external",
              i18n: "Login / Register",
              target: "_blank"
            },
]
