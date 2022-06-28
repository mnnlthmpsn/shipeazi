import resGIF from '../../images/res.gif'
import freightGIF from '../../images/freight.gif'
import corpGIF from '../../images/corp.gif'
import packingGIF from '../../images/packing.gif'
import movingGIF from '../../images/moving.gif'
import airGIF from '../../images/air.gif'
import shipGIF from '../../images/ship.gif'
import MTGIF from '../../images/mtg.gif'
import parcelGIF from '../../images/parcel.gif'
import commerceGIF from '../../images/commerce.gif'
import productGIF from '../../images/product.gif'
import { Fragment } from 'react'

export const ServicesSection = () => {

    const relo_one = [
        { title: "Residential Move", description: "Moving house whether short or long distance with our residential move service is easy", img: resGIF },
        { title: "Corporate Move", description: "Relocating your office or staff is easy with Shipeazi’s comprehensive moving service offering", img: corpGIF },
        { title: "Packing Services", description: "Our professional packing teams will pack your belongings & make sure they are safe for transport or export", img: packingGIF },
        { title: "Moving Suplies", description: "Strong Carton moving boxes & packaging materials for your smooth move", img: movingGIF },
        { title: "Move-To-Go-Box", description: "Providing an environmentally friendly way to move your home or office. Rent moving & storage boxes for just when you need them", img: MTGIF },]

    const shipping = [
        { title: "Road Freight", description: "Description for Road freight", img: freightGIF },
        { title: "Air Freight", description: "Description for Road freight", img: airGIF },
        { title: "Ocean Freight", description: "Description for Road freight", img: shipGIF },
    ]

    const commerce = [
        { title: "E-commerce Fulfillment", description: "Description for Road freight", img: commerceGIF },
        { title: "Product Delivery", description: "Description for Road freight", img: productGIF },
        { title: "Parcel Delivery", description: "Description for Road freight", img: parcelGIF },
    ]

    return (
        <Fragment>
            {/* Relocation */}
            <div className="container">
                <p className='text-xl font-bold text-center lg:text-4xl pb-6 lg:pb-12 lg:pt-5'>Relocation Services</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relo_one.map(menu => (
                        <ServiceCard service={menu} />
                    ))}
                </div>
            </div>

            {/* shipping */}
            <div className="container">
                <p className='text-xl font-bold text-center lg:text-4xl pb-6 lg:pb-12 lg:pt-5'>Shipping Services</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {shipping.map(menu => (
                        <ServiceCard service={menu} />
                    ))}
                </div>
            </div>

            {/* Ecommerce */}
            <div className="container">
                <p className='text-xl font-bold text-center lg:text-4xl pb-6 lg:pb-12 lg:pt-5'>E-Commerce Services</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {commerce.map(menu => (
                        <ServiceCard service={menu} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

const ServiceCard = ({ service }) => {
    return (
        <div className="shadow-md rounded-xl border border-gray-100 flex flex-col select-none items-center justify-center h-full w-full p-6">
            <img src={service.img} alt="" className='h-32 lg:h-36 w-auto' />
            <p className="font-semibold text-gray-600 py-2">{service.title}</p>
            <p className="text-sm text-center">{service.description}</p>
        </div>
    )
}