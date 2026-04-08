
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AppLayouts() {
  return (
    <div >
      {/* Navbar */}
      <Navbar />

      {/* Main pages */}
      <Outlet/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
