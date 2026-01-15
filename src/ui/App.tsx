import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import SessionPage from '../pages/SessionPage'


function App() {


  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/session/:meetingKey" element={<SessionPage />} />
    </Routes>
  )
}
  
export default App
