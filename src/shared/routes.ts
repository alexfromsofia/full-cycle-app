interface Route {
  route: string
  text: string
}

export default [
  {
    route: "/",
    text: "Home",
  },
  {
    route: "/about",
    text: "About",
  },
  {
    route: "/contact",
    text: "Contact",
  },
] as Route[]
