import { useEffect, useState, Fragment } from 'react'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import { IntroSection } from './introSection'

export const Slider = () => {

    const images = [img1, img2, img3, img4, img5, img6]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            current >= 0 && current < (images.length - 1) ? setCurrent(current + 1) : setCurrent(0)
        }, 5000);

        return () => clearInterval(interval);
    }, [current])

    return (
        <Fragment>
            <div className='h-screen w-screen'>
                {
                    images.map((img, index) => (
                        <div key={index} className={`h-screen w-screen absolute ease-in-out transition-all duration-700 ${current === index ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={img} className="h-full w-full object-cover object-center" alt="" />
                        </div>
                    ))
                }
                <div className='bg-[#050036] h-screen w-screen absolute opacity-60'></div>
                <div className="absolute h-screen w-auto flex items-center justify-end lg:w-2/3">
                    <IntroSection />
                </div>
            </div>
        </Fragment>
    )
}