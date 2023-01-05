import './App.css';
import Header from './components/header';
import MainPage from './pages/MainPage';
import CoinPage from './pages/CoinPage';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import AdminPanel from "./pages/AdminPanel.js";
import EditCoin from './pages/EditCoin';

function App() {
  return (
    <>
      <Header/>
      <main>
        <div className='wrapper main'>
    <Routes>
    <Route exact path="/AdminPanel/editCoin/" element={<EditCoin/>}></Route>
      <Route exact path="/AdminPanel/editCoin/:id" element={<EditCoin/>}></Route>
      <Route path="/AdminPanel" element={<AdminPanel/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/BullionCoins' element={<MainPage category="BullionCoins"/>}></Route>
      <Route path='/ExclusiveCoins' element={<MainPage category='ExclusiveCoins'/>}></Route>
      <Route path='/CommemorativeCoins' element={<MainPage category='CommemorativeCoins'/>}></Route>
      <Route path='/:id' element={<CoinPage/>}></Route>
      <Route path='*' element={<MainPage category="*"/>}></Route>
      <Route path='/' element={<MainPage/>}></Route>
    </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
