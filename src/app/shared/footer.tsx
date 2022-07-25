export const Footer = () => {
    return (
        <div className="bg-[#233152] py-10 lg:py-20 relative">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-8">
                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col lg:items-center">
                            <p className="font-bold text-xl py-4">Shipping Services</p>
                            <div className="flex flex-col space-y-2">
                                <p className="quick-link">Road Freight</p>
                                <p className="quick-link">Air Freight</p>
                                <p className="quick-link">Ocean Freight</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:items-center">
                            <p className="font-bold text-xl py-4">E-commerce Services</p>
                            <div className="flex flex-col space-y-2">
                                <p className="quick-link">E-Commerce Fulfillment</p>
                                <p className="quick-link">Product & Parcel Delivery</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:items-center">
                        <p className="font-bold text-xl py-4">Relocation Services</p>
                        <div className="flex flex-col space-y-2">
                            <p className="quick-link">Residential Move</p>
                            <p className="quick-link">Corporate Move</p>
                            <p className="quick-link">Packing Service</p>
                            <p className="quick-link">Moving Supplies</p>
                            <p className="quick-link">Move-To-G-Box</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:items-center">
                        <p className="font-bold text-xl py-4">Quick Links</p>
                        <div className="flex flex-col space-y-2">
                            <p className="quick-link">Book a Mover</p>
                            <p className="quick-link">Services</p>
                            <p className="quick-link">About Us</p>
                            <p className="quick-link">Become a Mover</p>
                            <p className="quick-link">Contact Us</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:items-center">
                        <p className="font-bold text-xl py-4">Social Media</p>
                        <div className="flex flex-col space-y-2">
                            <p className="quick-link">Instagram</p>
                            <p className="quick-link">Facebook</p>
                            <p className="quick-link">Twitter</p>
                            <p className="quick-link">Whatsapp</p>
                            <p className="quick-link">Email</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-white absolute text-center bottom-5 w-full font-light">All rights reserved</p>
        </div>
    )
}