import { Route, Switch } from "react-router-dom"
import Nav from "./Nav/Nav"

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Contact = () => <div>Contact</div>

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </>
)

export default App
