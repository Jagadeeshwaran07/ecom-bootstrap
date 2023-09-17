// import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Collections from './components/Collections';
import Comments from './components/Comments';
import Trending from './components/Trending';

function App() {
  return (
    <>
        <Appbar/>
        <Banner/>
        <Collections/>
        <Trending/>
        <Comments/>
        <div className="text-center my-3 bg-light">© Coffeerights JSJ 2020-2024 </div>
    </>
  );
}

export default App;
