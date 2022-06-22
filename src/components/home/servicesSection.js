import resGIF from '../../images/res.gif'
import freightGIF from '../../images/freight.gif'
import corpGIF from '../../images/corp.gif'
import packingGIF from '../../images/packing.gif'
import movingGIF from '../../images/moving.gif'
import MTGIF from '../../images/mtg.gif'
import commerceGIF from '../../images/commerce.gif'

export const ServicesSection = () => {

    const menus = [
        { title: "Residential Move", description: "Moving house whether short or long distance with our residential move service is easy", img: resGIF },
        { title: "Corporate Move", description: "Relocating your office or staff is easy with Shipeazi’s comprehensive moving service offering", img: corpGIF },
        { title: "Freight", description: "Move just a single furniture or bed, a pallet. Whether LTL or FTL, we’ve got your covered", img: freightGIF },
        { title: "Packing Services", description: "Our professional packing teams will pack your belongings & make sure they are safe for transport or export", img: packingGIF },
    ]

    const menus2 = [
        { title: "Moving Suplies", description: "Strong Carton moving boxes & packaging materials for your smooth move", img: movingGIF },
        { title: "Move-To-Go-Box", description: "Providing an environmentally friendly way to move your home or office. Rent moving & storage boxes for just when you need them", img: MTGIF },
        { title: "E-commerce Fulfillment", description: "Fast & Secure fulfillment solution to get your products to your customers & help you concentrate on growing your online business", img: commerceGIF },
    ]

    return (
        <div className="px-8 lg:px-40 pt-10 lg:pt-24 space-y-6">
            <p className='py-4 text-xl lg:text-4xl font-bold text-center'>Our Services</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {menus.map(menu => (
                    <ServiceCard service={menu} />
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 px-32 gap-8 pt-4">
                {menus2.map(menu => (
                    <ServiceCard service={menu} />
                ))}
            </div>
        </div>
    )
}

const ServiceCard = ({ service }) => {
    return (
        <div className="shadow-md rounded-xl border border-gray-100 flex flex-col items-center justify-center h-full w-full p-6">
            <img src={service.img} alt="" className='h-32 lg:h-48 w-auto' />
            <p className="font-semibold text-gray-600 py-2">{service.title}</p>
            <p className="text-sm text-center">{service.description}</p>
        </div>
    )
}