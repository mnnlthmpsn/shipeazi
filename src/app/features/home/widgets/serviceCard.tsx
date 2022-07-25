import { ServiceCardInterface } from "../interfaces"

export const ServiceCard = (props: { service: ServiceCardInterface }) => {
    return (
        <div className="shadow-md rounded-xl border border-gray-200 flex flex-col select-none items-center justify-center h-full w-full p-6" key={props.service.title}>
            <img src={props.service.image} alt="" className='h-32 lg:h-36 w-auto' />
            <p className="font-semibold text-gray-600 py-2">{props.service.title}</p>
            <p className="text-sm text-center">{props.service.description}</p>
        </div>
    )
}