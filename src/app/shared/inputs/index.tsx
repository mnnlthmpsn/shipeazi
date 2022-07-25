import { DropdownOptionsInterface } from "../../utilities/drop_down_items"

export const TextField = (props: any) => {
    return (
        <div className="space-y-2">
            <label htmlFor="fullname" className="text-sm font-semibold lg:text-base">{props.label}</label>
            <input type="text" className="form-control" {...props} placeholder={`Enter ${props.label}`} />
        </div>
    )
}

export const SelectField = (props: any) => {
    return (
        <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-semibold lg:text-base">{props.label}</label>
            <select defaultValue="" className="border rounded border-gray-300 w-full px-4 py-4 text-gray-500 outline-none focus:border-primary" {...props} required>
                <option value="" disabled>-- {props.label} --</option>
                {props.options.map((option: DropdownOptionsInterface, i: number) => <option value={option.value} key={i}>{option.key}</option>)}
            </select>
        </div>
    )
}

export const TextArea = (props: any) => {
    return (
        <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-semibold lg:text-base">{props.label}</label>
            <textarea className="form-control" rows="5" {...props}></textarea>
        </div>
    )
}

export const DateField = (props: any) => {
    return (
        <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-semibold lg:text-base">{props.label}</label>
            <input type="date" className="form-control" {...props} required />
        </div>
    )
}