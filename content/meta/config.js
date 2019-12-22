module.exports = {
  siteTitle: "Fang's Notebook", // <title>
  shortSiteTitle: "Fang's Notebook", // <title> ending for posts and pages
  siteDescription: "Fang's personal blog on tech and occasionally something else",
  siteUrl: "https://nichijou.co/",
  
  algolia:{
    appId: "JDLZH1UI2F",
    searchOnlyApiKey: "af0f1b50de9f38d2260e3fc4ce24147c",
    indexName: "Blog",
  },

  // pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",

  /* author */
  authorName: "Fang Cabrera",
  authorTwitterAccount: "#",

  /* info */
  headerTitle: "Fang Cabrera",
  headerSubTitle: "A tech notebook",

  /* manifest.json */
  manifestName: "HeroBlog - a GatsbyJS starter",
  manifestShortName: "Notebook", // max 12 characters
  manifestStartUrl: "/index.html",
  manifestBackgroundColor: "white",
  manifestThemeColor: "#666",
  manifestDisplay: "standalone",

  // gravatar
  // Use your Gravatar image. If empty then will use src/images/jpg/avatar.jpg
  // Replace your email adress with md5-code.
  // Example https://www.gravatar.com/avatar/g.strainovic@gmail.com ->
  // gravatarImgMd5: "https://www.gravatar.com/avatar/1db853e4df386e8f699e4b35505dd8c6",
  gravatarImgMd5: "",

  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/TakaiKinoko" },
    //{ name: "twitter", url: "https://twitter.com/greglobinski" },
    //{ name: "facebook", url: "http://facebook.com/greglobinski" }
  ]
};
