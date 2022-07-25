import { SharedLayout } from "../../../shared"
import { DateField, SelectField, TextArea, TextField } from "../../../shared/inputs"
import { office_moving_sizes, storey, yes_or_no } from "../../../utilities/drop_down_items"
import { BookQuestionnaireLayout } from "../layout"
import useCorpMoveServices from "./services"

const CorporateMove = () => {

    const { getQuote, step, activeStep, isLoading, handleEntityInputChange, handleMoveInputChage } = useCorpMoveServices()

    return (
        <SharedLayout>
            <BookQuestionnaireLayout title="Book a Corporate Move">
                <form onSubmit={getQuote} >

                    {/* personal info */}
                    {
                        activeStep === 1 &&
                        <div>
                            <div className="bg-gray-200 md:mx-32 xl:mx-96 p-4 rounded-md flex justify-between">
                                <p className="text-xs md:text-base md:font-bold">Personal Information</p>
                                <p className="text-gray-500 font-bold">1 of 3</p>
                            </div>
                            <div className="md:px-32 xl:px-96 py-4">
                                <div className="grid grid-cols-1 gap-6">
                                    <TextField label='Business Name' name='name' onChange={handleEntityInputChange} />
                                    <TextField label='Email' name='email' onChange={handleEntityInputChange} />
                                    <TextField label='Phone' name='phone' onChange={handleEntityInputChange} />
                                    <TextArea label="What's your reason for moving" name='mov_reason' onChange={handleMoveInputChage} />
                                </div>
                            </div>
                        </div>
                    }

                    {activeStep === 2 &&
                        <div>
                            <div className="bg-gray-200 md:mx-32 xl:mx-96 p-4 rounded-md flex justify-between">
                                <p className="text-xs md:text-base md:font-bold">Move Details</p>
                                <p className="text-gray-500 font-bold">2 of 3</p>
                            </div>
                            <div className="md:px-32 xl:px-96 py-4">
                                <div className="grid grid-cols-1 gap-6">
                                    <DateField label='Anticipated Moving Date' name='mov_date' onChange={handleMoveInputChage} />
                                    <SelectField label='What is the size of move' name='mov_size' onChange={handleMoveInputChage} options={office_moving_sizes} />
                                    <SelectField label='What type of building are you moving to' name="move_to_building_type" onChange={handleMoveInputChage} options={storey} />
                                    <SelectField label='What type of building are you moving from' name="move_from_building_type" onChange={handleMoveInputChage} options={storey} />
                                </div>
                            </div>
                        </div>
                    }

                    {activeStep === 3 &&
                        <div>
                            <div className="bg-gray-200 md:mx-32 xl:mx-96 p-4 rounded-md flex justify-between">
                                <p className="text-xs md:text-base md:font-bold">Final</p>
                                <p className="text-gray-500 font-bold">3 of 3</p>
                            </div>
                            <div className="md:px-32 xl:px-96 py-4">
                                <div className="grid grid-cols-1 gap-6">
                                    <SelectField label='Will you require Packaging Services' name="is_packaging_required" options={yes_or_no} onChange={handleMoveInputChage} disabled={isLoading}/>
                                    <SelectField label='Will you require Dismantling Services' name="is_dismantling_required" options={yes_or_no} onChange={handleMoveInputChage} disabled={isLoading} />
                                    <SelectField label='Will you require Storage' name="is_storage_required" options={yes_or_no} onChange={handleMoveInputChage} disabled={isLoading} />
                                    <TextArea label='Please provide details of items to move (Not required/in-person office survey)' name="items_to_move" onChange={handleMoveInputChage} disabled={isLoading}/>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="flex w-full md:px-32 xl:px-96 space-x-2 justify-end">
                        {activeStep > 1 && <button className="btn-quote-info" type="button" onClick={() => step('prev')}>Back</button>}
                        {activeStep < 3 && <button className="btn-info" type="button" onClick={() => step('next')}>Continue</button>}
                        {activeStep === 3 && <button className="btn-info" type="submit" disabled={isLoading}>{isLoading ? 'Please wait ...' : 'Get Quote'}</button>}
                    </div>
                </form>
            </BookQuestionnaireLayout>
        </SharedLayout>
    )
}

export default CorporateMove