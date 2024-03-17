import NavBar from "./components/NavBar"
import Highlight from "./components/Highlight"
import Products from "./components/Products"
import Footer from "./components/Footer"

const iPhone_products = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    href: '#',
    imageSrc: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/14-Pro-Gold.png',
    imageAlt: "iPhone 14 Pro Max",
    price: '$35',
    color: 'Black',
  },
  {
      id: 1,
      name: 'iPhone 14 Pro Max',
      href: '#',
      imageSrc: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/14-Pro-Gold.png',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      href: '#',
      imageSrc: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/14-Pro-Gold.png',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      href: '#',
      imageSrc: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/14-Pro-Gold.png',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    }
]

const mac_products = [
  {
    id: 1,
    name: 'MacBook Pro 2024',
    href: '#',
    imageSrc: 'https://media.loom-app.com/bi/dist/images/2021/06/14/mba-nakayama-00.jpg?w=1280',
    imageAlt: "iPhone 14 Pro Max",
    price: '$35',
    color: 'Black',
  },
  {
      id: 1,
      name: 'MacBook Pro 2024',
      href: '#',
      imageSrc: 'https://media.loom-app.com/bi/dist/images/2021/06/14/mba-nakayama-00.jpg?w=1280',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'MacBook Pro 2024',
      href: '#',
      imageSrc: 'https://media.loom-app.com/bi/dist/images/2021/06/14/mba-nakayama-00.jpg?w=1280',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'MacBook Pro 2024',
      href: '#',
      imageSrc: 'https://media.loom-app.com/bi/dist/images/2021/06/14/mba-nakayama-00.jpg?w=1280',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    }
]

const accesorios_products = [
  {
    id: 1,
    name: 'AirPods Max',
    href: '#',
    imageSrc: 'https://acdn.mitiendanube.com/stores/001/414/148/products/1-apple-airpods-max-azul1-27f54c5e39c003757f16638557131197-640-0.webp',
    imageAlt: "iPhone 14 Pro Max",
    price: '$35',
    color: 'Black',
  },
  {
      id: 1,
      name: 'AirPods Max',
      href: '#',
      imageSrc: 'https://acdn.mitiendanube.com/stores/001/414/148/products/1-apple-airpods-max-azul1-27f54c5e39c003757f16638557131197-640-0.webp',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'AirPods Max',
      href: '#',
      imageSrc: 'https://acdn.mitiendanube.com/stores/001/414/148/products/1-apple-airpods-max-azul1-27f54c5e39c003757f16638557131197-640-0.webp',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'AirPods Max',
      href: '#',
      imageSrc: 'https://acdn.mitiendanube.com/stores/001/414/148/products/1-apple-airpods-max-azul1-27f54c5e39c003757f16638557131197-640-0.webp',
      imageAlt: "iPhone 14 Pro Max",
      price: '$35',
      color: 'Black',
    }
]

function App() {
  return (
    <>
      <NavBar />
      <Products category="iPhone" products={iPhone_products}/>
      <Products category="Mac" products={mac_products}/>
      <Products category="Accesorios" products={accesorios_products}/>
      <Highlight />
      <Footer />
    </>
  )
}

export default App
