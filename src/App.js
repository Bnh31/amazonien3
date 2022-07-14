import {Routes,Route} from 'react-router-dom'
import Home from './routes/home.component';
import Navigation from './routes/navigation.component';


const App = () => {
  return ( 
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='' element={<Navigation/>}/>
      </Route>
    </Routes>

  )
};

export default App;