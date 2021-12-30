import Home from "../client/pages/Home"

interface Route {
  route: string
  text: string
  fetchData: () => Promise<any>
}

export default [
  {
    route: "/",
    text: "Home",
    fetchData: Home.fetchData,
  },
  {
    route: "/about",
    text: "About",
    fetchData: () => new Promise((res) => res(null)),
  },
  {
    route: "/contact",
    text: "Contact",
    fetchData: () => new Promise((res) => res(null)),
  },
] as Route[]
