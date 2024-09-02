import { useCallback, useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"


type carouselProps = {
    data: {
        slides: {
            src: string;
            alt: string
        }[]
    }
}

export const Carousel = ( { data }: carouselProps ) => {
    
    const [slide, setSlide] = useState<number>(0);

    const handleNextSlide = useCallback(() => {
        setSlide((prevSlide) => ( prevSlide === data.slides.length-1 ? 0 : prevSlide + 1))
    }, [data.slides.length])

    function handlePrevSlide() {
        setSlide((prevSlide) => ( prevSlide === 0 ? data.slides.length-1 : prevSlide - 1))
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            handleNextSlide();
        }, 3000); 

        return () => clearTimeout(timer);

    }, [slide, handleNextSlide])

    return (
        <div className="h-screen flex justify-center items-center bg-slate-600">
            <div className="relative flex justify-center items-center w-[600px] h-[400px] overflow-hidden " >
                <BsArrowLeftCircleFill 
                    className="arrows left-4" 
                    onClick={handlePrevSlide}
                />
                
                {data.slides.map((item, index) => (
                    <img 
                        src={item.src}
                        alt={item.alt}
                        key={index}
                        className={`rounded-xl size-full shadow-md ${slide === index ? "" : "hidden"}`}
                    />
                ))}

                
                
                <BsArrowRightCircleFill 
                    className="arrows right-4" 
                    onClick={handleNextSlide}
                />
                <span className="flex absolute bottom-4">
                    {data.slides.map((_, index) => (
                        <button 
                            key={index} 
                            className={`size-2 rounded-full border-0 outline-none shadow-md mx-1 cursor-pointer ${slide === index ? "bg-white" : "bg-gray-400"} `}
                            onClick={() => setSlide(index)}
                        />
                    ))}
                </span>
            </div>
        </div>
    )
}
