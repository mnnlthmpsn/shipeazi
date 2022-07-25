export interface BookingLayoutInterface {
    children: JSX.Element,
    continue: boolean,
    to: string
}

export interface BookQuestionnaireLayoutInterface {
    children: JSX.Element
    title: string
}

export interface EntityInterface {
    name?: string
    email?: string
    phone?: string
    is_business?: boolean
}

export interface MoveDetailsInterface {
    mov_date?: Date
    mov_reason?: string
    move_to_building_type?: string
    move_from_building_type?: string
    items_to_move?: string
    is_packing_required?: boolean
    is_dismantling_required?: boolean
    is_storage_required?: boolean
}