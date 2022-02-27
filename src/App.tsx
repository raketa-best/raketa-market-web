import {Routes} from 'react-router'
import { BrowserRouter, Route } from "react-router-dom"
import AuthContainer from './components/auth/AuthContainer'
import ConfirmCodeContainer from './components/confirmCode/ConfirmCodeContainer'
import FinRecordList from './components/finRecordList/FinRecordList'
import Home from './components/home/Home'
import Layout from './components/Layout'
import News from './components/news/News'
import Portfolio from './components/portfolio/Portfolio'
import Profile from './components/profile/Profile'
import StoriesProvider from './storiesLayout/StoriesProvider'


const App: React.FC = () => {
  return <StoriesProvider>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AuthContainer/> }/> 
          <Route path='/auth' element={ <AuthContainer/> }/>  
          <Route path='/confirmCode' element={ <ConfirmCodeContainer/> }/>
          <Route path='/home' element={ <Layout component={ <Home/> }/> }/>        
          <Route path='/news' element={ <Layout component={ <News/> }/> }/>
          <Route path='/portfolio' element={ <Layout component={ <Portfolio/> }/> }/>
          <Route path='/profile' element={ <Layout component={ <Profile/> }/> }/> 
          <Route path='/pecords' element={ <Layout component={ <FinRecordList /> }/> }/>             
        </Routes>
    </BrowserRouter>  
  </StoriesProvider>
  
}

export default App
