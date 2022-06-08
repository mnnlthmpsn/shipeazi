import shippingGIF from '../images/shippingGIF.gif'
import logoLong from '../images/logo_long.jpg'
import { Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import { usePostHook } from '../hooks';
import { useEffect, useState } from 'react';
import { showToast } from '../helpers';


export const Construction = () => {

    const [email, setEmail] = useState('')
    const { submitPostReq, data, isLoading } = usePostHook({ url: 'subscribers', body: { email } })

    const links = {
        facebook: 'https://www.facebook.com/shipeazilogistics/',
        instagram: 'http://instagram.com/shipeazimoving',
        linkedIn: 'https://www.linkedin.com/company/shipeazi-logistics/'
    }

    const submit = e => {
        e.preventDefault()
        submitPostReq()
    }

    const afterEffect = () => {
        showToast(data.resp_code === '000' ? 'success' : 'error', data.resp_code === '000' ? 'Subscription added successfully' : data.resp_desc)
        setEmail("")
    }

    useEffect(() => {
        !!data && afterEffect()
    }, [data])

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">

            <div className="absolute top-10 left-5 lg:top-16 lg:left-24">
                <img src={logoLong} alt="logo_mobile" className='h-12 md:h-24 w-auto' />
                {/* <img src={logo} alt="logo_mobile" className='block lg:hidden h-16 w-auto'/> */}
            </div>
            <img src={shippingGIF} alt="shipezi_gif" className='w-96 h-auto' />
            <div className="flex flex-col px-12 md:px-24 lg:px-0 items-center space-y-2 lg:space-y-8">
                <p className='text-2xl lg:text-4xl text-center font-bold'>Working together to bring you something great</p>
                <p className='lg:text-xl text-center'>Send us your email and we will get back to you</p>
                <form className="flex-col flex w-full gap-y-3  pt-8 lg:w-2/3" onSubmit={submit}>
                    <input type="email" required onChange={e => setEmail(e.target.value)} value={email} className='lowercase outline-none border-blue-400 w-full text-lg p-2 lg:px-4 py-3 border' placeholder='john@doe.com' />
                    <div className='flex justify-center'>
                        <button className='bg-primary duration-200 border-primary px-4 py-3 w-full lg:w-auto lg:px-10 text-white lg:font-semibold'>{isLoading ? '...loading' : 'Submit'}</button>
                    </div>
                </form>
                <div className="flex pt-5 space-x-2">
                    <a href={links['facebook']} target="_blank" >
                        <Facebook fontSize='medium' className='cursor-pointer text-gray-500 hover:scale-110' />
                    </a>
                    <a href={links['instagram']} target="_blank" >
                        <Instagram fontSize='medium' className='cursor-pointer text-gray-500 hover:scale-110' />
                    </a>
                    <a href={links['linkedIn']} target="_blank" >
                        <LinkedIn fontSize='medium' className='cursor-pointer text-gray-500 hover:scale-110' />
                    </a>
                </div>
            </div>
        </div>
    )
}