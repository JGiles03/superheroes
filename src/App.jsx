import { Routes, Route } from "react-router-dom"
import "./App.css"
import { HomePage, SearchPage, HeroesPage, TeamPage, HeroPage } from "./pages"
import { Header } from "./components"
import { HeroProvider, TeamProvider, SelectedProvider } from "./contexts"

const App = () => {

  return (
    <HeroProvider>
      <TeamProvider>
        <SelectedProvider>
          <Routes>
            <Route path="/" element={<Header />} >
              <Route index element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search/:id" element={<HeroPage />} />
              <Route path="/heroes" element={<HeroesPage />} />
              <Route path="/heroes/:id" element={<HeroPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/:id" element={<HeroPage />} />
            </Route>
          </Routes>
        </SelectedProvider>
      </TeamProvider>
    </HeroProvider>
  )
}

export default App
