export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6298b4f33af7101a22909a93",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6kpns6gb",
                  apiId: "eb81e080-108a-4e1e-87bf-511b0cf2b254",
                },
                {
                  buildHookId: "6298b4f35a2468174d0aac2f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ryu75gir",
                  apiId: "96543b44-e680-4548-8884-e50222ea7487",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/bketelsen/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ryu75gir.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
