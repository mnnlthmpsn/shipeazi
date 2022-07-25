import { Carousel } from 'react-responsive-carousel';

export const TestimonialCarousel = (props: any) => {
    return (
        <Carousel showThumbs={false} showArrows={false} autoPlay={true} showStatus={false} infiniteLoop={true} interval={5000} className="hidden md:block" >
            {
                [1, 2, 3, 4].map(item => (
                    <div key={item} className="mb-6">
                        <p className={`${props.fontColor || 'text-white'} font-light text-center tracking-wide`}>
                            I’ve been using Bellhop since 2015 and have never had a bad
                            experience. Someone asked me recently what company I’m most loyal to,
                            and this is the first one that came to mind
                        </p>
                        <p className={`py-4 ${props.fontColor || 'text-white'} font-thin text-sm`}>Emmanuel Thompson</p>
                    </div>
                ))
            }
        </Carousel>
    )
}