import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputsForm = (props) => {
    return(
        <TextField
            error={!props.value}
            required
            disabled={props.disable}
            variant='outlined'
            name={props.name}
            label={props.label}
            onChange={props.handlerEvents}
            style={{width: 600, marginTop: 15}}            
        />
    )
}

export default InputsForm;