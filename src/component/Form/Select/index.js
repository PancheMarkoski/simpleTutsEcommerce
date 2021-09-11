import React, {useState} from 'react'
import "./styles.scss"
import ReactSelect from 'react-select';


const Select = ({getValue, options, title}) => {  
    const [selectedOptions, setSelectedOptions] = useState(null)
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption)
        console.log(selectedOption)
        getValue(selectedOption)
    }
    return (
        <div>
            <h5 style={{textAlign: "center", fontSize: "1.4rem"}}>{title}</h5>
            <ReactSelect 
                value={selectedOptions}
                onChange={handleChange}
                options={options}
                className="Select"
                classNamePrefix="onSelect"
                placeholder="Category"
            />
        </div>
    )
}

export default Select
