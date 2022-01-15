import {Routes} from 'react-router'
import { BrowserRouter, Route } from "react-router-dom"
import AuthContainer from './components/auth/AuthContainer'
import { ConfirmCode } from './components/confirmCode/ConfirmCode'
import Home from './components/home/Home'
import Layout from './components/Layout'
import News from './components/news/News'
import Chat from './components/profile/chat/Chat'
import Profile from './components/profile/Profile'


const App: React.FC = () => {
  return <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AuthContainer/> }/> 
        <Route path='/auth' element={ <AuthContainer/> }/>  
        <Route  path='/confirmCode' element={ <ConfirmCode/> }/>
        <Route  path='/home' element={ <Layout component={ <Home/> }/> }/>        
        <Route  path='/news' element={ <Layout component={ <News/> }/> }/>
        <Route  path='/chat' element={ <Layout component={ <Chat/> }/> }/>
        <Route  path='/profile' element={ <Layout component={ <Profile/> }/> }/>

        
      </Routes>
  </BrowserRouter>  
}

export default App
