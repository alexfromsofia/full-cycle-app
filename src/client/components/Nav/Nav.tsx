import { NavLink } from "react-router-dom"
import routes from "../../../shared/routes"

const Nav = () => (
  <nav>
    {routes.map(({ route, text }) => (
      <NavLink exact key={route} to={route} activeClassName="active">
        {text}
      </NavLink>
    ))}
  </nav>
)

export default Nav
