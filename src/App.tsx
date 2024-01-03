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
import WithI18n from './i18n/WithI18n'
import DropdownI18n from './i18n/dropdownI18n/DropdownI18n'

const basename = process.env.NODE_ENV === 'production'
  ? '/raketa-market-web' : ''
const App: React.FC = () => {
  return <WithI18n>{(i18n, setLanguage) =>
    <StoriesProvider>
      <DropdownI18n i18n={i18n} setLanguage={setLanguage}/>
      <BrowserRouter basename={basename}>
          <Routes>            
            <Route path='/' element={<AuthContainer i18n={i18n} />} />
            <Route path='/auth' element={<AuthContainer i18n={i18n} />} /> 
            <Route path='/confirmCode' element={
              <ConfirmCodeContainer i18n={i18n} />} 
            />
            <Route path='/home' element={
              <Layout i18n={i18n} >
                <Home i18n={i18n} />
              </Layout>   
            } />      
            <Route path='/news' element={
              <Layout i18n={i18n} >
                <News i18n={i18n} />
              </Layout>
            } /> 
            <Route path='/chat' element={
              <Layout i18n={i18n} >
                <Chat i18n={i18n} />
              </Layout> 
            } /> 
            <Route path='/portfolio' element={              
                <Layout i18n={i18n} > 
                  <Profile i18n={i18n} >
                    <StockList i18n={i18n} />
                  </Profile> 
                </Layout>              
            } />
            <Route path='/donations' element={
              <Layout i18n={i18n} >
                <Profile i18n={i18n} >
                  <DonationsList/>
                </Profile> 
              </Layout>
            } />                                                                   
            <Route path='/profile' element={
              <Layout i18n={i18n} >
                <Profile  i18n={i18n} >
                  <StockList i18n={i18n} />
                </Profile>
              </Layout>
            } />                                                               
            <Route path='/pecords' element={
              <Layout i18n={i18n} >
                <Profile  i18n={i18n} >
                  <FinRecordList />
                </Profile>
              </Layout>
            } /> 
            <Route path='/token' element={
              <Layout i18n={i18n} >
                <Profile  i18n={i18n} >
                  <ConnectTinkoffTokenAlert i18n={i18n} />
                </Profile>
              </Layout>
            } /> 
        </Routes>
      </BrowserRouter>  
    </StoriesProvider> 
  }</WithI18n> 
}
export default App
