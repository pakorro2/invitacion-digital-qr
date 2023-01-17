import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Invitations from './pages/Invitations'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProtectedRoutes from './pages/ProtectedRoutes'
import SignUp from './pages/SignUp'
import './App.css'
import RecoveryPassword from './pages/RecoveryPassword'
import RecoveryPasswordId from './pages/RecoveryPasswordId'

function App() {


  return (
    <div className="App">
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/recovery-password/:id' element={<RecoveryPasswordId />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/invitations' element={<Invitations />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
