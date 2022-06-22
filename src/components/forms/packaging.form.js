import { Fragment } from "react"
import { DateField, SelectField, TextArea, TextField } from "../shared/inputs"
import { titles, yes_or_no } from "./residential.form"

export const PackagingForm = () => {

    const packing_options = []

    return (
        <Fragment>
            <p className="text-2xl lg:px-32">Packaging Service Questionnaire</p>
            <div>
                <div className="bg-gray-200 lg:mx-32 p-4 rounded-md">
                    <p className="text-xs md:text-base md:font-bold">Personal Information</p>
                </div>
                <form className="md:px-16 lg:px-32 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="col-span-4 md:col-span-1">
                            <SelectField label='Title' options={titles} />
                        </div>
                        <div className="col-span-4 md:col-span-3">
                            <TextField label='Fullname' />
                        </div>
                        <div className="col-span-4 md:col-span-2">
                            <TextField label='Email' />
                        </div>
                        <div className="col-span-4 md:col-span-2">
                            <TextField label='Phone' />
                        </div>
                    </div>
                </form>
            </div>

            {/* packing info */}
            <div>
                <div className="bg-gray-200 lg:mx-32 p-4 rounded-md">
                    <p className="text-xs md:text-base md:font-bold">Packing Information</p>
                </div>
                <form className="md:px-16 lg:px-32 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <SelectField label='Packing Size' options={packing_options} />
                        </div>
                        <div className="col-span-2">
                            <TextArea label='What items do you need packed? (Describe with details all items to be packed with quantities)' />
                        </div>
                        <div className="col-span-2">
                            <SelectField label='Do you have fragile items to pack?' options={yes_or_no} />
                        </div>
                        <div className="col-span-2">
                            <TextArea label='Fragile items' />
                        </div>
                        <div className="col-span-2">
                            <SelectField label='Will some items require dismantling?' options={yes_or_no} />
                        </div>
                        <div className="col-span-2">
                            <TextArea label='Yes? Items to be dismantled' />
                        </div>
                        <div className="col-span-2">
                            <DateField label='Anticipated date for packing' />
                        </div>
                        <div className="col-span-2 flex">
                            <button className="btn-info">Get Me My Free Quote</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}