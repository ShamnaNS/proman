import { colors, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Home = () => {
    
    const[rows,setRows]=useState([])
    useEffect(()=>{
      axios.get(' https://fakestoreapi.com/products').then((res)=>{
     
      setRows(res.data)
    })
    },[])
  return (
    <div>
        <TableContainer style={{marginTop: '3%'}}  component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>TITLE</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
            <TableCell align="center"><b>Category</b></TableCell>
            <TableCell align="right"><b>Image Link</b></TableCell>
          </TableRow>
        <br></br>
        </TableHead>
        
        <TableBody>
        
          
          { rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 80 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell  align="center">{row.price}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}




export default Home