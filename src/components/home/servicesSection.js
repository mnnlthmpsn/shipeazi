import resGIF from '../../images/res.gif'
import freightGIF from '../../images/freight.gif'
import corpGIF from '../../images/corp.gif'
import packingGIF from '../../images/packing.gif'

export const ServicesSection = () => {

    const menus = [
        { title: "Residential Move", description: "Some description here", img: resGIF },
        { title: "Corporate Move", description: "Some corporate move description here. let this e long and see", img: corpGIF },
        { title: "Freight", description: "Some freight movement here", img: freightGIF },
        { title: "Packing Services", description: "Some freight movement here", img: packingGIF },
    ]

    return (
        <div className="px-8 lg:px-40 pt-10 lg:pt-24">
            <p className='py-6 text-xl lg:text-4xl font-bold text-center'>Our Services</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {menus.map(menu => (
                <ServiceCard service={menu}/>
            ))}
        </div>
        </div>
    )
}

const ServiceCard = ({ service }) => {
    return (
        <div className="shadow-md rounded-xl border border-gray-100 flex flex-col items-center justify-center h-full w-full p-6">
            <img src={service.img} alt="" className='h-32 lg:h-48 w-auto'/>
            <p className="text-lg font-semibold text-gray-600">{service.title}</p>
            <p className="text-sm text-center">{service.description}</p>
        </div>
    )
}