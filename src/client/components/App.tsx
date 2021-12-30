import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import { selectCounter } from "../../store/selectors"
import { incrementByAmount } from "../../store/slices/counter"
import Nav from "./Nav/Nav"

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Contact = () => <div>Contact</div>

const App = () => {
  const state = useSelector(selectCounter)
  const dispatch = useDispatch()

  useEffect(() => {
    setInterval(() => {
      dispatch(incrementByAmount(Math.random()))
    }, 5000)
  }, [])

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <div>{state.value}</div>
    </>
  )
}

export default App
