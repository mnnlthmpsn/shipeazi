import { Fragment } from "react"
import { SelectField, TextArea, TextField } from "../shared/inputs"
import { titles } from "./residential.form"

export const FreightForm = () => {

    const ship_src_origin = [
        { key: 'Port', value: 'port' },
        { key: 'Airport', value: 'aport' },
        { key: 'Factory', value: 'fact' },
        { key: 'Warehouse', value: 'whse' },
        { key: 'Fulfilment Center', value: 'ful_center' },
        { key: 'Residential Address', value: 'res_addr' }
    ]

    const ship_load = []

    return (
        <Fragment>
            <p className="text-2xl lg:px-32">Freight Transport</p>
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
            <div>
                <div className="bg-gray-200 lg:mx-32 p-4 rounded-md">
                    <p className="text-xs md:text-base md:font-bold">Origin</p>
                </div>
                <form className="md:px-16 lg:px-32 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <SelectField label='Where are you shipping from?' options={ship_src_origin} />
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Country' />
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Address' />
                        </div>
                    </div>
                </form>
            </div>

            {/* destination */}
            <div>
                <div className="bg-gray-200 lg:mx-32 p-4 rounded-md">
                    <p className="text-xs md:text-base md:font-bold">Destination</p>
                </div>
                <form className="md:px-16 lg:px-32 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <SelectField label='Where are you shipping to?' options={ship_src_origin} />
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Country' />
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Address' />
                        </div>
                    </div>
                </form>
            </div>

            {/* load */}
            <div>
                <div className="bg-gray-200 lg:mx-32 p-4 rounded-md">
                    <p className="text-xs md:text-base md:font-bold">Load</p>
                </div>
                <form className="md:px-16 lg:px-32 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <SelectField label='What are you shipping?' options={ship_load} />
                        </div>
                        <div className="col-span-2">
                            <TextArea label="Describe in detail what you're shipping (eg. weight (KG), accurate dimensions(LxBxH)" />
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