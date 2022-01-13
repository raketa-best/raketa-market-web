import {Routes} from 'react-router'
import { BrowserRouter, Route } from "react-router-dom"
import AuthContainer from './components/auth/AuthContainer'
import { ConfirmCode } from './components/confirmCode/ConfirmCode'


const App: React.FC = () => {
  return <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthContainer />} /> 
        <Route path='/auth' element={ <AuthContainer /> }/>  
        <Route  path='/confirmCode' element={<ConfirmCode />}/>
      </Routes>
  </BrowserRouter>  
}

export default App
