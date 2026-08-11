"use client"

import { BsArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useState } from "react";
import heroImage1 from "@/public/images/hero1.jpg"
import heroImage2 from "@/public/images/hero2.jpg"
import heroImage3 from "@/public/images/hero3.jpg"
import heroImage4 from "@/public/images/hero4.jpg"
import Image from "next/image";
const slides = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
]


function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    return (
<div className=" w-full p-2 relative h-100">
            <div className="relative overflow-hidden w-full h-100 border-muted-foreground"> 
                    <div 
                        className=" flex h-full transition-transform duration-500"
                        style={{transform: `translateX(-${currentSlide * 100}%)`}}
                    >
                        {slides.map((slide,index) => (
                            <div key={index} className="shadow min-w-full h-full p-2  bg-card rounded-sm">
                                <Image
                                    src={slide}
                                    alt={`slide-${index}`}
                                    priority
                                    className="rounded-sm object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>

            </div>
            <button
                className=" cursor-pointer absolute -left-5 top-1/2 -translate-y-1/2"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                >
                <BsFillArrowLeftCircleFill />
            </button>
            <button
                className="cursor-pointer absolute -right-5 top-1/2 -translate-y-1/2"
                onClick={() =>setCurrentSlide((prev) => (prev + 1) % slides.length)}
            >
                <BsArrowRightCircleFill />
            </button>
         </div>
    )}

export default HeroCarousel