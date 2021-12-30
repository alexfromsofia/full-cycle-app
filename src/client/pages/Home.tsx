import fetch from "isomorphic-fetch"

const Home = () => <div>Home</div>

interface Price {
  [key: string]: number
}

Home.fetchData = () =>
  fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
    .then((response: Response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
    })
    .then((price: Price) => ({ price: { ETH: price.USD } }))

export default Home
