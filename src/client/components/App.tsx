import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Nav from "./Nav/Nav"

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
