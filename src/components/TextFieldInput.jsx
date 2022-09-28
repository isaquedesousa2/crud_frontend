import React from 'react'
import TextField from '@mui/material/TextField'

function TextFieldInput({ placeholder, onChange, value }) {
  return (
    <TextField 
        className='textFieldInput'
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        fullWidth
        margin='dense'
        variant="outlined" />
  )
}

export default TextFieldInput