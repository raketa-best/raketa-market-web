import {Routes} from 'react-router'
import { BrowserRouter, Route } from "react-router-dom"
import AuthContainer from './components/auth/AuthContainer'
import Chat from './components/chat/Chat'
import ConfirmCodeContainer from './components/confirmCode/ConfirmCodeContainer'
import ConnectTinkoffTokenAlert from './components/connectTinkoffTokenAlert/ConnectTinkoffTokenAlert'
import DonationsList from './components/donations/DonationsList'
import FinRecordList from './components/finRecordList/FinRecordList'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'
import News from './components/news/News'
import Profile from './components/profile/Profile'
import StockList from './components/stock/StockList'
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
          <Route path='/chat' element={ <Layout component={ <Chat />  }/> }/>
          <Route path='/portfolio' element={ <Layout component={ <Profile component={ StockList }/> }/> }/>
          <Route path='/donations' element={ <Layout component={ <Profile component={ DonationsList }/> }/> }/>                                                                   
          <Route path='/profile' element={ <Layout component={ <Profile component={ StockList }/> }/> }/>                                                               
          <Route path='/pecords' element={ <Layout component={ <Profile component={ FinRecordList }/> }/> }/>
          <Route path='/token' element={ <Layout component={  <Profile component={ ConnectTinkoffTokenAlert }/> }/> }/>
        </Routes>
    </BrowserRouter>  
  </StoriesProvider>  
}

export default App
