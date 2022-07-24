import {Routes,Route} from 'react-router-dom'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign/sign.component';
import {Fragment} from 'react'
import {Link,Outlet} from 'react-router-dom'

const Shop =()=>{
  return(
    <Fragment>
      <Outlet/>
      <h1>you are in the shop route</h1>
      <Link to='/'>go to home page</Link>
    </Fragment>

  )
}

const App = () => {
  return ( 
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='' element={<Navigation/>}/>
      </Route>
      <Route path='/shop' element={<Shop/>}>
        <Route path='' element={<Navigation/>}/>
      </Route>
      <Route path='/sign' element={<SignIn/>}>
        <Route path='' element={<Navigation/>}/>
      </Route>

    </Routes>

  )
};

export default App;