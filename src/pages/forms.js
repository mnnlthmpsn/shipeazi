import { Fragment } from "react"
import { ChevronLeftIcon } from "@heroicons/react/solid"
import { SimpleHeader } from "../components/shared"
import useForm from "../hooks/useForm"
import { useNavigate } from "react-router-dom"

export const Forms = () => {

    const { activeForm } = useForm()
    const router = useNavigate()
    const goBack = () => router(-1)
    
    return (
        <Fragment>
            <SimpleHeader />
            <div className="kPadding flex flex-col space-y-6 pb-10">
                <div className="flex pt-8 lg:px-32 items-center space-x-4">
                    <ChevronLeftIcon className="h-10 w-10 rounded-full border p-2 cursor-pointer hover:bg-gray-100 duration-200" onClick={goBack} />
                    <p className="text-lg lg:text-xl font-bold">Please fill in the forms below to get a Quote</p>
                </div>

                {activeForm}
            </div>
        </Fragment>
    )
}