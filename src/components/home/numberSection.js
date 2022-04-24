export const NumberSection = () => {
    return (
        <div className="kPaddingMedium bg-[#F5F7F9]">
            <div className="grid lg:grid-cols-3 px-6 gap-8 lg:gap-0">
                <div className="flex flex-col items-center space-y-3">
                    <p className="text-4xl lg:text-6xl text-blue-400">300K +</p>
                    <p className="text-gray-500 lg:text-xl">Moves completed</p>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <p className="text-4xl lg:text-6xl text-blue-400">20K +</p>
                    <p className="text-gray-500 lg:text-xl">Customer Reviews </p>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <p className="text-4xl lg:text-6xl text-blue-400">4.8 +</p>
                    <p className="text-gray-500 lg:text-xl">Average rating</p>
                </div>
            </div>
        </div>
    )
}