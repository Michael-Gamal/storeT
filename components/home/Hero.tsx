"use client"
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
function Hero() {
    return (
        <section className="flex lg:flex-row justify-center h-[550] ">
            {/* Description */}
            <div className="flex flex-1 flex-col">
                {/* text */}
                <div className="lg:mr-15">
                    <h1 className=' text-4xl md:text-6xl font-bold  mb-10'>We are changing the way people shop</h1>
                    <p className='text-muted-foreground text-lg leading-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et voluptas saepe in quae voluptate, 
                        laborum maiores possimus illum reprehenderit aut delectus veniam cum perferendis unde sint doloremque non nam.
                    </p>
                </div>
                <Link href="/products" className="w-fit px-9 py-2 bg-primary text-primary-foreground mt-8 rounded-md">Our Product</Link>
            </div>
            {/* slider */}
            <div className="h-full flex-1 hidden lg:flex">
                <HeroCarousel />
            </div>
        </section>
)}

export default Hero;