import Home from "../client/pages/Home"
import { AppDispatch } from "../store"

export type FetchData = (dispatch: AppDispatch) => void

interface Route {
  route: string
  text: string
  fetchData: FetchData
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
    fetchData: () => {
      console.log("About")
    },
  },
  {
    route: "/contact",
    text: "Contact",
    fetchData: () => {
      console.log("Contact")
    },
  },
] as Route[]
