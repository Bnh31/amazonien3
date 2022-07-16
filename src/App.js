import {Routes,Route} from 'react-router-dom'
import Home from './routes/home.component';
import {Fragment} from 'react'
import {Link,Outlet} from 'react-router-dom'
import Navigation from './routes/navigation.component';
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

    </Routes>

  )
};

export default App;