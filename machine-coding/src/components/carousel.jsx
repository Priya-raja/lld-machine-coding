import {useState} from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import img1 from '/images/1.jpg'
import img2 from '/images/2.jpg'
import img3 from '/images/3.jpg' 
import img4 from '/images/4.jpg'

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images =[img1, img2, img3, img4];

    const nextImage = () => {
        if(currentIndex === images.length-1){
            setCurrentIndex(0)
            return
        }
        setCurrentIndex(currentIndex + 1)
    }

    const prevImage = () => {
        if(currentIndex <=0 ){
            setCurrentIndex(images.length - 1)
            return
        }
        setCurrentIndex(currentIndex - 1)
    }

    return (
        <main>
            <h1 className="text-2xl font-bold text-center mb-4">
                Carousel Component
                </h1>
                <div className="relative w-full max-w-2xl mx-auto h-80 mb-10 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                {/* Image */}
                <img 
                    src={images[currentIndex]} 
                    alt={`carousel image ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
                
                {/* Left Arrow - absolutely positioned */}
                <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                >
                    <FaAngleLeft className="text-2xl" /> 
                </button>
                
                {/* Right Arrow - absolutely positioned */}
                <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                >
                    <FaAngleRight className="text-2xl" />
                </button>
            </div>
                 <div className="flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentIndex 
                                ? 'bg-blue-600' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>      
              

                  
        </main>

  )
}

export default Carousel