
import './App.css'
import Getname from './components/Getname'
import Login from './components/Login'
import Name from './components/Name'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
     <h1>Welcome to React</h1>
     <Name/>
     <Login/>
     <Profile/>
     <Getname/>
    </UserContextProvider>
  )
}

export default App
