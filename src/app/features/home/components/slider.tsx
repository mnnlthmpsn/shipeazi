import { useEffect, useState, Fragment } from 'react'
import img1 from '../../../../assets/images/img1.jpg'
import img2 from '../../../../assets/images/img2.jpg'

import { IntroSection } from './introSection'

export const Slider = () => {

    const images = [img1, img2]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            current >= 0 && current < (images.length - 1) ? setCurrent(current + 1) : setCurrent(0)
        }, 7000);

        return () => clearInterval(interval);
    }, [current])

    return (
        <Fragment>
            <div className='h-screen w-screen'>
                {
                    images.map((img, index) => (
                        <div key={index} className={`h-screen w-screen absolute ease-in-out transition-all duration-700 ${current === index ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={img} className="h-screen w-full object-cover object-center" alt="" />
                        </div>
                    ))
                }
                <div className='bg-[#050036] h-screen w-screen absolute opacity-40'></div>
                <div className='h-screen w-screen absolute inset-0 bg-gradient-to-t from-[#050036]'></div>
                <div className="absolute h-screen w-screen flex items-center justify-center">
                    <IntroSection />
                </div>
            </div>
        </Fragment>
    )
}