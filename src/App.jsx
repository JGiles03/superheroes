import { Routes, Route } from "react-router-dom"
import "./App.css"
import { HomePage, SearchPage, HeroPage } from "./pages"
import { Header } from "./components"
import { HeroProvider } from "./contexts"

const App = () => {

  return (
    <HeroProvider>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/heroes" element={<HeroPage />} />
        </Route>
      </Routes>
    </HeroProvider>
  )
}

export default App
