import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Feedback from './pages/Feedback'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'

function App() {
  const [wishlist, setWishlist] = useState([])

  const wishlistIds = useMemo(() => wishlist.map((item) => item.id), [wishlist])

  const toggleWishlist = (product) => {
    setWishlist((items) => {
      const exists = items.some((item) => item.id === product.id)
      return exists
        ? items.filter((item) => item.id !== product.id)
        : [...items, product]
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlist((items) => items.filter((item) => item.id !== productId))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout wishlistCount={wishlist.length} />}>
          <Route
            path="/"
            element={
              <Home wishlistIds={wishlistIds} onToggleWishlist={toggleWishlist} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                items={wishlist}
                wishlistIds={wishlistIds}
                onToggleWishlist={toggleWishlist}
                onRemove={removeFromWishlist}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
