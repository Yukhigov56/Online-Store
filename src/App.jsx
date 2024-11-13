import { Header } from "./Components/Header/Header"
import { SectionCatalog } from "./Components/Section-Catalog/Catalog"
import { Mixes } from "./Components/Section-Mixes/Mixes"
import { SectionBirds } from "./Components/Section-Birds/SectionBirds"
import { Grains } from "./Components/Section-Grains/Grains"
import { Feed } from "./Components/Section-Feed/Feed"
import { Footer } from "./Components/Footer/Footer"

function App() {

  return (
    <div>
      <Header />
      <SectionCatalog />
      <Mixes />
      <SectionBirds />
      <Grains />
      <Feed />ъ
      <Footer />
    </div>
  )
}

export default App
