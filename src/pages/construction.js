import shippingGIF from '../images/shippingGIF.gif'
import logoLong from '../images/logo_long.jpg'

export const Construction = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">

            <div className="absolute top-10 left-5 lg:top-16 lg:left-24">
                <img src={logoLong} alt="logo_mobile" className='h-24 w-auto' />
                {/* <img src={logo} alt="logo_mobile" className='block lg:hidden h-16 w-auto'/> */}
            </div>
            <img src={shippingGIF} alt="shipezi_gif" className='w-96 h-auto' />
            <div className="flex flex-col px-12 md:px-24 lg:px-0 items-center space-y-5 lg:space-y-8">
                <p className='text-4xl lg:text-6xl text-center font-bold'>Coming Soon!!!</p>
                <p className='lg:text-xl text-center'>Our team is working hard to deliver excellent customer service. Get a notification when we are live</p>
                <div className="flex w-full lg:w-2/3">
                    <input type="text" className='outline-none border-blue-400 w-full text-lg p-2 lg:p-4 border' placeholder='john@doe.com'/>
                    <button className='bg-primary duration-200 border-primary px-4 lg:px-10 text-white lg:font-semibold'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}