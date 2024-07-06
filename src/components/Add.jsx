import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({item}) => {
    const [page,setPage]=useState('ADD')
    const [count,setCount]=useState(0)
    const [form,setForm]=useState({
      title:item.title,
      description:item.description,
      price:item.price,
      cateroy:item.category,
    })
    function valueAdd()
    {
       console.log(form) 
    }
    function valueCap(e)
    {
      
       setForm({...form,[e.target.title]:e.target.value})
    }
  return (
    
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >   
        
      <div>
    
        <TextField
          required
          id="outlined-required"
          label="TITLE"
          title='title'
          value={form.title}
          onChange={valueCap}
        
        />
        <TextField
        
          id="outlined-disabled"
          label="DESCRIPTION"
        
          title='description'
          value={form.description}
          onChange={valueCap}
        
        />
        <TextField
          id="outlined-read-only-input"
          label="PRICE"
          title='price'
          value={form.price}
          onChange={valueCap}
          />
         <TextField
          id="outlined-read-only-input"
          label="CATEGORY"
          title='category'
          value={form.category}
          onChange={valueCap}
          
        />
    </div>
    <div>
        <Button variant='contained'onClick={(valueAdd)}>ADD PRODUCT</Button>
        <br />
        {/* <small>Button is clicked {count} times</small> */}
    </div>
    </Box>
  )
}

export default Add