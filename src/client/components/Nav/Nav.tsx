import { Link } from "react-router-dom"
import routes from "../../../shared/routes"

const Nav = () => (
  <div>
    {routes.map(({ route, text }) => (
      <Link key={route} to={route}>
        {text}
      </Link>
    ))}
  </div>
)

export default Nav
