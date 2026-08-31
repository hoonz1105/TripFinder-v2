import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Place from './Place'
import Home from './Home'
import ErrorPage from './ErrorPage'

function App() {

  return (
    <>
      <Link to="/place">/place</Link>
      <Link to="/">/home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </>
  )
}

export default App
