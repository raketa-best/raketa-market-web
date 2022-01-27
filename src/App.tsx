import {Routes} from 'react-router'
import { BrowserRouter, Route } from "react-router-dom"
import AuthContainer from './components/auth/AuthContainer'
import { ConfirmCode } from './components/confirmCode/ConfirmCode'
import Home from './components/home/Home'
import Layout from './components/Layout'
import News from './components/news/News'
import Profile from './components/profile/Profile'
import StoriesProvider from './storiesLayout/StoriesProvider'
import Portfolio from './components/commons/portfolio/Portfolio'



const App: React.FC = () => {
  return <StoriesProvider>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AuthContainer/> }/> 
          <Route path='/auth' element={ <AuthContainer/> }/>  
          <Route  path='/confirmCode' element={ <ConfirmCode/> }/>
          <Route  path='/home' element={ <Layout component={ <Home/> }/> }/>        
          <Route  path='/news' element={ <Layout component={ <News/> }/> }/>
          <Route  path='/portfolio' element={ <Layout component={ <Portfolio/> }/> }/>
          <Route  path='/profile' element={ <Layout component={ <Profile/> }/> }/>        
        </Routes>
    </BrowserRouter>  
  </StoriesProvider>
  
}

export default App
