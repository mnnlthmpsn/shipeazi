import { Carousel } from 'react-responsive-carousel'
import partner1 from '../../../../assets/images/partner1.jpg'
import partner2 from '../../../../assets/images/partner2.jpg'
import partner3 from '../../../../assets/images/partner3.jpg'
import partner4 from '../../../../assets/images/partner4.jpg'
import partner5 from '../../../../assets/images/partner5.jpg'

export const Partner = () => {

    const partners_a = [partner1, partner2, partner3]
    const partners_b = [partner4, partner5]

    return (
        <div className="md:py-12 space-y-10 container">
            <p className="text-center text-3xl md:text-4xl font-bold">Our Partners</p>
            <div>
                <Carousel showThumbs={false} showArrows={false} autoPlay={true} showIndicators={true} showStatus={false} infiniteLoop={true} interval={8000} >
                    <div className="flex items-center justify-center mb-5">
                        {
                            partners_a.map((partner, i) => (
                                <img src={partner} className="h-12 md:h-36 object-contain" key={i}/>
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-center mb-5">
                        {
                            partners_b.map((partner, i) => (
                                <img src={partner} className="h-8 md:h-24 object-contain" key={i}/>
                            ))
                        }
                    </div>
                </Carousel>
            </div>
        </div>

    )
}