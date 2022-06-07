// import RemarkableReactRenderer from 'remarkable-react';

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/overwolf-logo_300x240.svg',
    infoLink: 'https://www.overwolf.com',
    pinned: true,
  },
];

const siteConfig = {
  wrapPagesHTML: true,
  title: ' ', // Title for your website.
  homepage_title: 'The Developers Site',
  tagline: 'Easily create apps for PC games on the Overwolf framework',
  url: 'https://overwolf.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'overwolf.github.io',
  organizationName: 'overwolf',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'start/getting-started', label: 'Getting Started'},
    {doc: 'topics/best-practices-overview', label: 'Docs'},
    {doc: 'api/changelog', label: 'API'},
    {doc: 'status/all', label: 'Events Status'},
    //{blog: true, label: 'Blog'},
    {href: 'https://medium.com/overwolf', label: 'Blog', external: true},
    {href: 'https://discuss.overwolf.com/', label: 'Q&A', external: true },
	  {doc: 'support/contact-us', label: 'Support'},  //{page: 'help', label: 'Support'}
	  {search: true }
  ],

  markdownPlugins: [
    // Highlight admonitions.
    require('remarkable-admonitions')({ icon: 'svg-inline' }),
    // function remarkableReact(md) {
    //   console.log(JSON.stringify(RemarkableReactRenderer));
    //   md.renderer = new RemarkableReactRenderer();
    // }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  title: 'Overwolf',
  headerIcon: 'img/headerIcon.svg',
  footerIcon: 'img/ow-logo.svg',
  favicon: 'img/ow-favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#060606',
    secondaryColor: '#606060',
  },

//  Google Analytics tracking ID to track page views:
  gaTrackingId: "UA-144253676-1" ,

  editUrl: 'https://github.com/overwolf/overwolf.github.io/tree/source/docs/',

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Overwolf`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    // theme: 'default',
    version: '9.15.6',
    themeUrl: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    '/js/darkMode.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js',
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js',
    'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.8.0/js/jquery.overlayScrollbars.min.js',
    'https://d10lpsik1i8c69.cloudfront.net/w.js',
    '/js/code-block-buttons.js',
    '/js/onload.js',
    '/js/activeNavBar.js',
    '/js/slicker.js',
    '/js/replaceArrow.js',
    '/js/appendUpdate.js',
    '/js/overlayScrollbars.js',
    '/js/highlight.js',
    '/js/luckyorange.js'
  ],
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atelier-cave-dark.min.css',
    'https://fonts.googleapis.com/css?family=Lato%3A400%2C400i%2C700%2C900&ver=4.5.3',
    'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css',
    'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.8.0/css/OverlayScrollbars.min.css',
    '/css/code-block-buttons.css',
  ],
  separateCss: [
    '/html/submission-form/style.css',
    '/html/submission-form/select2.css',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/ow_share_new.png',
  twitterImage: 'img/ow_share_new.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
   enableUpdateTime: true,
   enableUpdateBy: true,
   scrollToTop: true,
   scrollToTopOptions: {
    zIndex: 100,
    backgroundColor: '#332E4D',
  },
   docsSideNavCollapsible: true,

   algolia: {
     apiKey: 'cc7909d516aa0fbd71371ad4b3769c7e',
     indexName: 'overwolf',
     appId: '4YSGJ6Z1HG',
     algoliaOptions: {} // https://www.algolia.com/doc/api-reference/api-parameters/
   }
   // algolia stylings: https://community.algolia.com/docsearch/styling.html
   // algolia config: https://github.com/algolia/docsearch-configs/blob/master/configs/overwolf.json

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
