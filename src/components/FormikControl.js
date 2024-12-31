import React from 'react'
import Input from './Input'
import Select from './Select'
import Radio from './Radio'
import CheckBoxGroup from './CheckBoxGroup'
import DatePicker from './DatePicker'

const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <Input {...rest}/>
        case 'textarea': return <Input {...rest}/>
        case 'select': return <Select {...rest}/>
        case 'radio': return <Radio {...rest}/>
        case 'checkbox': return <CheckBoxGroup {...rest}/>
        case 'date': return <DatePicker {...rest} />
        default:
            return null
    }
}

export default FormikControl