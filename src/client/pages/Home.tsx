import fetch from "isomorphic-fetch"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { replace } from "../../store/slices/counter"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    setInterval(() => {
      Home.fetchData(dispatch)
    }, 5000)
  }, [])

  return <div>Home</div>
}

interface Price {
  [key: string]: number
}

Home.fetchData = async (dispatch: AppDispatch) => {
  const price = await fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
  )
    .then((response: Response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
    })
    .then((price: Price) => price.USD)

  dispatch(replace(price))
}

export default Home
