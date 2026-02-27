import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { minimalImage } from "./quartz/util/customOg"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "flowing-abyss",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://umami.flowing-abyss.com",
      websiteId: "a40322ae-9ec6-4313-9cd4-9564fcca1961",
    },
    locale: "en-US",
    baseUrl: "flowing-abyss.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Tinos",
        body: "Rubik",
        code: "Roboto Mono",
      },
      colors: {
        lightMode: {
          light: "#1F1F1F",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "#282828",
          textHighlight: "rgb(72, 25, 65)",
        },
        darkMode: {
          light: "#1F1F1F",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "#282828",
          textHighlight: "rgb(72, 25, 65)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "slack-dark",
          dark: "slack-dark",
        },
        keepBackground: false,
        langs: ["python", "js", "ts", "css", "scss", "html", "sh", "json", "bash", "shell"],
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages({ imageStructure: minimalImage }),
    ],
  },
}

export default config
