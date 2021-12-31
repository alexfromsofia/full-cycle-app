import { useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import { selectCounter } from "../../store/selectors"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Nav from "./Nav/Nav"

const App = () => {
  const { value } = useSelector(selectCounter)

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <div>{value}</div>
    </>
  )
}

export default App
