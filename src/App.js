import './App.css';
import Header from './components/Header/Header';
import Nav from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/news';
import { addPost } from './Redux/State';



function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Header />
        <Nav state={props.appState.navBar} />
        <div className='app-wraper-content'>
          <Routes>
            <Route path='profile' element={<Profile state={props.appState.profilePage} addPosts={props.addPost} />} />
            <Route path='Dialogs' element={<Dialogs state={props.appState.dialogsPage}/>} />
            <Route path='News' element={<News />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
