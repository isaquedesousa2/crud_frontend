import React from 'react'
import TextField from '@mui/material/TextField'

function TextFieldInput({ placeholder }) {
  return (
    <TextField 
        className='textFieldInput'
        placeholder={placeholder}
        fullWidth
        margin='dense'
        variant="outlined" />
  )
}

export default TextFieldInput