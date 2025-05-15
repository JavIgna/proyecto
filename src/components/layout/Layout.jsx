import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"


const Layout = () => {
  return (
    <div className="d-flex flex-column vh-100 vw-100">
      <Header />
      <div className="d-flex flex-grow-1 w-100">
        <Sidebar />
        <main className="flex-grow-1 bg-light p-3">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
