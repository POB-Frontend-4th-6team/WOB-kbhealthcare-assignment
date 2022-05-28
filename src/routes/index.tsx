import { Routes, Route } from 'react-router-dom'

import styles from './routes.module.scss'
import LoginPage from './LoginPage'
import MainPage from './MainPage'
import NotFoundPage from './NotFoundPage'

const App = () => {
  return (
    <div className={styles.container}>
      <header>header</header>
      <main className={styles.app}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
