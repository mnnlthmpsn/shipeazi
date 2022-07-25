import React, { useState } from 'react'
import shippingGIF from '../../assets/gif/shippingGIF.gif'
import logoLong from '../../assets/images/logo_long.jpg'
import { showAlert } from '../utilities'
import { AlertType } from '../utilities/showAlert'
import usePost from '../utilities/usePost'

export const Construction = () => {

    const { execute } = usePost('mailing/subscribe')
    const [email, setEmail] = useState<string>('')

    const subscribe = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const res = await execute({email: email})
        showAlert(AlertType.success, res.message)

        setEmail("")
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">

            <div className="absolute top-10 left-5 lg:top-16 lg:left-24">
                <img src={logoLong} alt="logo_mobile" className='h-24 w-auto' />
            </div>
            <img src={shippingGIF} alt="shipezi_gif" className='w-96 h-auto' />
            <form className="flex flex-col px-12 md:px-24 lg:px-0 items-center space-y-5 lg:space-y-8" onSubmit={subscribe}>
                <p className='text-4xl lg:text-6xl text-center font-bold'>Coming Soon!!!</p>
                <p className='lg:text-xl text-center'>Our team is working hard to deliver excellent customer service. Get a notification when we are live</p>
                <div className="flex-col flex w-full gap-y-3 lg:w-2/3">
                    <input type="text" className='lowercase outline-none border-blue-400 w-full text-lg p-2 lg:px-4 py-3 border' onChange={e => setEmail(e.target.value)} placeholder='john@doe.com' required/>
                    <div className='flex justify-center'>
                    <button className='bg-primary duration-200 border-primary px-4 py-3 w-full lg:w-auto lg:px-10 text-white lg:font-semibold'>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
