import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ wishlistCount }) {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar wishlistCount={wishlistCount} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
