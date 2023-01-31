import React, {FunctionComponent} from 'react';
import {InputProps} from "../types/InputProps";
import {useInput} from "../hooks/useInput";


const TextField: FunctionComponent<InputProps> = ({source, label, placeholder, type, validate}) => {
    const { value, onChange, error } = useInput({source, validate});  
    
    function displayError() {
        return error ? <p>{label} {error}</p> : null;
    }

    return (
        <div>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <label htmlFor={source}>{label}</label>
                <input value={value} onChange={e => onChange(e.target.value)} name={source} type={type}
                       placeholder={placeholder}/>
            </div>

            <div>
                {displayError()}
            </div>
        </div>
    );
};

export default TextField;
