import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import type { FC, JSX } from 'react'
import StartPage from './components/StartPage'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import User from './components/User'
import Articles from './components/Articles'
import Article from './components/Article'
import ProtectedRoute from './components/ProtectedRoute'
import { Theme } from './types/general.types'
import './utils/config'

const App: FC = (): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(Theme.Default)
  // const [userId, setUserId] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  // Check if user stored theme before
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    storedTheme && setTheme(parseInt(storedTheme, 10))
  }, [])

  const globalProps = {
    theme,
    setTheme,
    loading,
    setLoading,
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage {...globalProps} />} />
        <Route path="/login" element={<Login {...globalProps} />} />
        <Route path="/register" element={<User {...globalProps} />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home {...globalProps} />} />
          <Route path="/profile" element={<User {...globalProps} />} />
          <Route path="/profile?edit" element={<User {...globalProps} />} />
          <Route path="/articles" element={<Articles {...globalProps} />} />
          <Route path="/articles/new" element={<Article {...globalProps} />} />
          <Route path="/articles/:id" element={<Article {...globalProps} />} />
          <Route path="/articles/:id?edit" element={<Article {...globalProps} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
