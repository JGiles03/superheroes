import { Routes, Route } from "react-router-dom"
import "./App.css"
import { HomePage, SearchPage, HeroPage, TeamPage } from "./pages"
import { Header } from "./components"
import { HeroProvider, TeamProvider } from "./contexts"

const App = () => {

  return (
    <HeroProvider>
      <TeamProvider>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/heroes" element={<HeroPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Route>
        </Routes>
      </TeamProvider>
    </HeroProvider>
  )
}

export default App
