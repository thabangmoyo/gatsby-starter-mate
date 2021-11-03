export default {
  topbar: {
    sticky: true,
    maxWidth: 100%,
  },
  header: {
    sticky: true,
    stickyMobile: true,
    maxWidth: 100%,
    mobileNavWidth: 100%,
    mobileAnimation: "fade", // fade, fadeInUp, fadeInDown, slideRight, slideLeft
    spring: { tension: 170, friction: 26 }, // React Spring config object for your MobileNav
  },
  sideNav: {
    width: "18em",
    spring: { tension: 170, friction: 26 }, // spring config for your responsive SideNav
  },
  content: {
    maxWidth: 100%,
    gridGap: 30,
  },
  sidebar: {
    width: ".3fr",
  },
  footer: {
    maxWidth: 100%,
    gridGap: 30,
  },
  breakpoints: {
    sm: 750,
    md: 960,
    lg: 1240,
  },
}
