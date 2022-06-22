import { TextField, SelectField, TextArea, DateField } from "../shared/inputs"
import { useNavigate } from 'react-router-dom'
import { Fragment } from "react"

export const titles = [
    { key: 'MR', value: 'MR' },
    { key: 'MRS', value: 'MR' },
    { key: 'MISS', value: 'MISS' },
]

export const yes_or_no = [
    { key: 'Yes', value: true },
    { key: 'No', value: false },
]

export const ResidentialMovingForm = () => {

    const router = useNavigate()
    const goBack = () => router(-1)

    const moving_sizes = [
        { value: 'small_std', key: 'Small Studio' },
        { value: 'one_bed', key: 'One Bedroom Apartment' },
        { value: 'two_bed', key: 'Two Bedroom Apartments' },
    ]

    const packing_options = [
        { key: 'Full Packaging Service', value: 'full' },
        { key: 'Fragile Packaging Service', value: 'fragile' },
        { key: 'No Packaging Service', value: 'no' },
    ]

    return (
        <Fragment>
            <p className="text-2xl lg:px-32">Residential Moving Questionnaire</p>
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
                    <p className="text-xs md:text-base md:font-bold">Move Origin</p>
                </div>
                <form className="md:px-16 lg:px-32 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <TextField label='Moving from (Street/City)'/>
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Country'/>
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Region'/>
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Is Storey Building?' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Floor No.' />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Elevator Available?' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Move Size' options={moving_sizes} />
                        </div>
                        <div className="col-span-2">
                            <TextArea label='Details of Move (eg. List all items to be moved with quantity)' />
                        </div>
                        <div className="col-span-2">
                            <SelectField label='Will you require Packing Services' options={packing_options} />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Will you require any Handyman Services' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Will you require Storage' options={yes_or_no} />
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <div className="bg-gray-200 lg:mx-32 p-4 rounded-md">
                    <p className="text-xs md:text-base md:font-bold">New Destination </p>
                </div>
                <form className="md:px-16 lg:px-32 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2">
                            <TextField label='Moving to (Street/City)'/>
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Country'/>
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Region'/>
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Is Storey Building?' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <TextField label='Floor No.' />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Elevator Available?' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Are you moving with Children?' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Are you moving with Pets?' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Are you moving with a car?' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <SelectField label='Will you require any Handyman Services' options={yes_or_no} />
                        </div>
                        <div className="col-span-fix">
                            <DateField label='Anticipated Moving Date' />
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