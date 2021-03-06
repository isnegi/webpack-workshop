module.exports = {
  plugins: {
    sitemap: {
      hostname: "https://webpack-workshop.netlify.com"
    }
  },
  locales: {
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "webpack Workshop",
      description: "webpack discovering and mastering workshops"
    },
    "/fr/": {
      lang: "fr-FR",
      title: "Ateliers autour de webpack",
      description: "Ateliers pour découvrir et maîtriser webpack"
    }
  },
  themeConfig: {
    editLinkText: "Edit cette page sur Github",
    lastUpdated: "Mis à jour le",
    repo: "Slashgear/webpack-workshop",
    repoLabel: "Contribue !",
    docsRepo: "Slashgear/webpack-workshop",
    docsDir: "docs",
    editLinks: true,
    algolia: {
      apiKey: "5f0c4bd6212a8fc141c63283636d5228",
      indexName: "webpack_workshop"
    },
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        nav: [
          { text: "Home", link: "/" },
          { text: "Workshops", link: "/workshops/" }
        ],
        sidebar: [
          "/workshops/",
          "/why.md",
          {
            title: "Novice",
            collapsable: false,
            children: [
              "/workshops/novice/basics",
              "/workshops/novice/static-assets",
              "/workshops/novice/code-assets",
              "/workshops/novice/outputs",
              "/workshops/novice/novice-koans"
            ]
          },
          {
            title: "Intermediate",
            collapsable: false,
            children: [
              "/workshops/intermediate/dev",
              "/workshops/intermediate/babel",
              "/workshops/intermediate/style",
              "/workshops/intermediate/reduce-bundle-size",
              "/workshops/intermediate/modern-build",
              "/workshops/intermediate/compression",
              "/workshops/intermediate/intermediate-koans"
            ]
          },
          {
            title: "Advanced",
            collapsable: false,
            children: ["/workshops/advanced/plugins"]
          }
        ]
      },
      "/fr/": {
        selectText: "Langues",
        label: "Français",
        nav: [{ text: "Ateliers", link: "/fr/workshops/" }],
        sidebar: [
          "/fr/workshops/",
          "/fr/why.md",
          {
            title: "Débutant",
            collapsable: false,
            children: [
              "/fr/workshops/novice/basics",
              "/fr/workshops/novice/static-assets",
              "/fr/workshops/novice/code-assets",
              "fr/workshops/novice/outputs",
              "fr/workshops/novice/novice-koans"
            ]
          },
          {
            title: "Intermédiaire",
            collapsable: false,
            children: [
              "fr/workshops/intermediate/dev",
              "fr/workshops/intermediate/babel",
              "fr/workshops/intermediate/alias",
              "fr/workshops/intermediate/style",
              "fr/workshops/intermediate/reduce-bundle-size",
              "fr/workshops/intermediate/modern-build",
              "fr/workshops/intermediate/compression",
              "fr/workshops/intermediate/intermediate-koans"
            ]
          },
          {
            title: "Avancé",
            collapsable: false,
            children: [
              "fr/workshops/advanced/plugins",
              "fr/workshops/advanced/loaders"
            ]
          }
        ]
      }
    }
  }
};
