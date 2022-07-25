import resGIF from '../../../../assets/gif/res.gif'
import corpGIF from '../../../../assets/gif/corp.gif'
import packingGIF from '../../../../assets/gif/packing.gif'
import movingGIF from '../../../../assets/gif/moving.gif'
import airGIF from '../../../../assets/gif/air.gif'
import MTGIF from '../../../../assets/gif/mtg.gif'
import parcelGIF from '../../../../assets/gif/parcel.gif'
import commerceGIF from '../../../../assets/gif/commerce.gif'
import productGIF from '../../../../assets/gif/product.gif'

import { Fragment } from 'react'
import { ServiceCard } from '../widgets/serviceCard'
import { ServiceCardInterface } from '../interfaces'

export const ServicesSection = () => {

    const relo_one: ServiceCardInterface[] = [
        { title: "Home & Office Moves", description: "Moving house whether short or long distance with our residential move service is easy", image: resGIF },
        { title: "Freight Transport", description: "Description for Road freight", image: airGIF },
        { title: "Packing Services", description: "Our professional packing teams will pack your belongings & make sure they are safe for transport or export", image: packingGIF },
        { title: "Storage", description: "Relocating your office or staff is easy with Shipeazi’s comprehensive moving service offering", image: corpGIF },
        { title: "Moving Suplies", description: "Strong Carton moving boxes & packaging materials for your smooth move", image: movingGIF },
        { title: "Move-To-Go-Box", description: "Providing an environmentally friendly way to move your home or office. Rent moving & storage boxes for just when you need them", image: MTGIF },]

    const commerce: ServiceCardInterface[] = [
        { title: "E-commerce Fulfillment", description: "Description for Road freight", image: commerceGIF },
        { title: "Product Delivery", description: "Description for Road freight", image: productGIF },
        { title: "Parcel Delivery", description: "Description for Road freight", image: parcelGIF },
    ]

    return (
        <Fragment>
            {/* Relocation */}
            <div className="container">
                <p className='text-xl font-bold text-center lg:text-4xl pb-6 lg:pb-12 lg:pt-5'>Services</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relo_one.map((menu, i) => (
                        <ServiceCard service={menu} key={i}/>
                    ))}
                </div>
            </div>

            {/* Ecommerce */}
            <div className="container">
                <p className='text-xl font-bold text-center lg:text-4xl pb-6 lg:pb-12 lg:pt-5'>E-Commerce Solutions</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {commerce.map((menu, i) => (
                        <ServiceCard service={menu} key={i}/>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}