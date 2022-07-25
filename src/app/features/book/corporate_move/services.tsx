import React, { FormEvent, HTMLInputTypeAttribute, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { useCustomRouter } from "../../../utilities"
import { showAlert, AlertType } from "../../../utilities/showAlert"
import usePost from "../../../utilities/usePost"
import { EntityInterface, MoveDetailsInterface } from "../interfaces"

const useCorpMoveService = () => {

    const { execute, isLoading } = usePost('moves/new_move')
    const { location, service } = useSelector((state: RootState) => state)
    const { navigateTo } = useCustomRouter()

    const [activeStep, setActiveStep] = useState(1)
    const [entity, setEntity] = useState<EntityInterface>()
    const [moveDetails, setMoveDetails] = useState<MoveDetailsInterface>()


    const step = (direction: string) => {
        if (direction === 'next') setActiveStep(activeStep + 1)
        if (direction === 'prev') {
            activeStep <= 1 ? setActiveStep(1) : setActiveStep(activeStep - 1)
        }
    }

    const handleEntityInputChange = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        setEntity({ ...entity, [e.target.name]: e.target.value })
    }

    const handleMoveInputChage = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        setMoveDetails({ ...moveDetails, [e.target.name]: e.target.value })
    }

    const getQuote = async (e: FormEvent) => {
        e.preventDefault()

        const payload = {
            entity: { ...entity, is_business: false },
            ...moveDetails,
            destination: location.destination,
            origin: location.pickup,
            move_category: service.selectedService
        }
        
        const data = await execute(payload)
        showAlert(AlertType.success, data.message, () => navigateTo('/'))
    }

    useEffect(() => {
        !location.destination && !location.pickup && navigateTo('/book')
    }, [])

    return { activeStep, step, handleEntityInputChange, handleMoveInputChage, isLoading, getQuote }

}

export default useCorpMoveService