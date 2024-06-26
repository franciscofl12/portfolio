import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "xDrive",
        image: new URL("../assets/featured/xdrive.png", import.meta.url)
          .href,
        description:
          "Cloud Storage Laravel Project, where you could save your files.",
        techs: ["Laravel", "PHP", "TailwindCSS", "MySQL"],
        link: "https://github.com/franciscofl12/xDrive",
      },
      {
        id: 2,
        name: "Old Colossion Team",
        image: new URL("../assets/featured/colossion.png", import.meta.url)
          .href,
        description:
          "Old Colossion Team website, design and production.",
        techs: ["Bootstrap","Javascript"],
        link: "https://colossion.com/",
      },
      {
        id: 3,
        name: "Lupone Enterprise",
        image: new URL("../assets/featured/lupone.png", import.meta.url).href,
        description:
          "Lupone Enteprise Website APP, Course Manager, Financial Manager...",
        techs: ["Laravel", "TailwindCSS", "JQuery", "MySQL","Javascript"],
        link: "https://www.luponenterprise.com/",
        latest: false,
      },
      {
        id: 4,
        name: "Chain Capitals",
        image: new URL("../assets/featured/chaincapitals.png", import.meta.url).href,
        description:
          "Chain Capitals Website APP, Financial Project Manager, Mailing System",
        techs: ["Laravel", "Bootstrap", "JQuery", "MySQL", "Javascript"],
        link: "https://www.chaincapitals.com/",
        latest: false,
      },
      {
        id: 5,
        name: "MIV Gaming",
        image: new URL("../assets/featured/mivgaming.gif", import.meta.url).href,
        description:
          "eSports Club, Giveaways, Team & Players System",
        techs: ["Laravel", "Tailwind", "Vite", "MySQL", "Javascript"],
        link: "https://www.mivgaming.com/",
        latest: false,
      },
      {
        id: 6,
        name: "Colossion Team",
        image: new URL("../assets/featured/colossionteam.png", import.meta.url).href,
        description:
          "Colossion Team website, design and production",
        techs: ["Vue", "Tailwind", "Vite", "CSS", "Javascript"],
        link: "https://www.colossion.com/",
        latest: false,
      },
      {
        id: 7,
        name: "React Ecommerce Landing",
        image: new URL("../assets/featured/react-ecommerce.jpg", import.meta.url).href,
        description:
          "Simple React Ecommerce Landing with request of API to get all the products.",
        techs: ["React", "REST Api", "Vite", "CSS", "Javascript", "API"],
        link: "https://host.franciscofl.dev/preview/ecommerce-landing.com/",
        latest: false,
      },
      {
        id: 8,
        name: "Private eBay Inventory APP",
        image: new URL("../assets/featured/quickauto.png", import.meta.url).href,
        description:
          "eBay Private App for directly post products in different marketplaces with translations.",
        techs: ["Laravel", "REST Api", "eBay API", "API"],
        link: "https://quickauto24.com/",
        latest: false,
      },
      {
        id: 9,
        name: "Florier Ecommerce",
        image: new URL("../assets/featured/florier.jpg", import.meta.url).href,
        description:
          "Shopify Ecommerce with modifications on the base template and multiple apps configuration and optimization.",
        techs: ["Shopify", "Apps", "Ecommerce", "SEO", "Liquid"],
        link: "https://florier.com/",
        latest: true,
      },
      {
        id: 10,
        name: "Og's Ecommerce",
        image: new URL("../assets/featured/ogs.jpg", import.meta.url).href,
        description:
          "Shopify Ecommerce with modifications, optimizations and custom pages, custom applications and multiple apps configuration and optimization.",
          techs: ["Shopify", "Apps", "Ecommerce", "SEO", "Liquid"],
        link: "https://www.ogsbrand.com/",
        latest: true,
      },
    ]
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getLatestProjects: (state) => state.projects.filter((project) => project.latest),
    getProjectsByLatestId: (state) => [...state.projects].sort((a, b) => b.id - a.id)
  }
});
