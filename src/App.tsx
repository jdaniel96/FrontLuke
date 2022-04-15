import Navbar from './components/Navbar'
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';
import Carousel from './components/CarouselComponent/Carousel'
import CarouselNfts from './components/CarouselComponent/CarouselNfts';
import GridDisplay from './components/GridDisplay';

function App() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <GridDisplay/>
      <Carousel nfts={CarouselNfts}/>
      <Footer/>

    </div>
    
    
  );
}

export default App;
