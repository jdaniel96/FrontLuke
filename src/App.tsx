import Navbar from './components/NavbarComponent/Navbar'
import Card from './components/CardComponent/Card';
import Footer from './components/FooterComponent/Footer';
import './App.css';
import Carousel from './components/CarouselComponent/Carousel'
import CarouselNfts from './components/CarouselComponent/CarouselNfts';
import GridDisplay from './components/GridGalleryComponent/GridDisplay';
import Buttons from './components/ButtonsComponent/Buttons';
import Frantik from './components/Franti.KComponent/Franti.K';
import AppStyles from './App.module.css'

function App() {
  return (
    <div>
      <div className={AppStyles.area} >
        <ul className={AppStyles.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        < Navbar/>
        <Frantik/>
        {/* <Card/> */}
        {/* <GridDisplay/> */}
        {/* <Carousel nfts={CarouselNfts}/> */}
        <Buttons/>
        
        <Footer/>
        </ul>
      </div >

    </div>
    
    
  );
}

export default App;
