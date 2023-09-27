
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Add  from './users/Add';
import View from './users/View';
import Edit from './users/Edit';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/add' element={<Add></Add>}></Route>
        <Route exact path='/editUser/:id' element={<Edit></Edit>}></Route>
        <Route exact path='/viewUser/:id' element={<View></View>}></Route>
       
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
