export const TextField = props => {
    return (
        <div className="space-y-2">
            <label htmlFor="fullname" className="text-sm lg:text-base">{props.label}</label>
            <input type="text" className="form-control" {...props} placeholder={`Enter ${props.label}`}/>
        </div>
    )
}

export const SelectField = props => {
    return (
        <div className="space-y-2">
            <label htmlFor="title" className="text-sm lg:text-base">{props.label}</label>
            <select className="outline rounded outline-gray-200 w-full px-4 py-4 font-semibold text-gray-500">
                <option value="" disabled selected>-- {props.label} --</option>
                { props.options.map(option => <option value={option.value} key={option.value}>{option.key}</option>) }
                
            </select>
        </div>
    )
}

export const TextArea = props => {
    return (
        <div className="space-y-2">
            <label htmlFor="title" className="text-sm lg:text-base">{props.label}</label>
            <textarea className="form-control" rows="5"></textarea>
        </div>
    )
}

export const DateField = props => {
    return (
        <div className="space-y-2">
            <label htmlFor="title" className="text-sm lg:text-base">{props.label}</label>
            <input type="date" className="form-control"/>
        </div>
    )
}