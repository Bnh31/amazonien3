import Directory from './components/directory/directory.component';
import {Routes,Route} from 'react-router-dom'
import Home from './routes/home.component';

const App = () => {
  return ( 
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>

  )
};

export default App;