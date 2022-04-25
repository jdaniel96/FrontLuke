import CarouselNfts from './CarouselNfts';
import { useState, useEffect, useCallback } from 'react';
import CarouselStyle from './Carousel.module.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'



const Carousel:any = function({nfts}:any){
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = nfts.length

    
    const moveLeft = function() {
        setCurrentSlide(currentSlide === 0 ? length - 1: currentSlide -1);
        
    }
    
    const moveRight = useCallback(():any=>{
    setCurrentSlide(currentSlide === length - 1 ? 0: currentSlide + 1)

    
    //TODO fix a bug that makes the timer render infinitely in a loop
    },[currentSlide, length])
     useEffect(() => { //this allows the carousel autoplay

         const carousel =setInterval(() => {
             moveRight();
         }, 5500);
         return ()=>{
             clearInterval(carousel);

         }

     },);

    if (!Array.isArray(nfts) || nfts.length <= 0){
        return null; // if you remove this it has a cool grid-like gallery effect where all the images are always displayed but it makes it so only 1 image displays at the time.
    }

    return(
        <div className={CarouselStyle.Container}>

        <section className={CarouselStyle.Carousel}>
            <AiOutlineArrowLeft onClick={moveLeft} className={CarouselStyle.LeftArrow}/>
            <AiOutlineArrowRight onClick={moveRight} className={CarouselStyle.RightArrow}/>
            {CarouselNfts.map((nft:any, index:number)=>{
                return(
                    <div className={index === currentSlide ? 'CarouselStyle.ActiveSlide' : 'Carousel.Slide'} key={index}>
                        {index === currentSlide &&(<img className={CarouselStyle.NftImages}src={nft.NftImage} alt="Not working" />)}
                    
                    </div>
                )

            }) 

            }
        </section>
        </div>
        
        
    )

}

export default Carousel;