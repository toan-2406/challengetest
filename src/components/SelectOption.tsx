import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import theme from '../styles/theme'

export default function SelectOption() {
    const [age, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
      };
  return (
    <Box>
  <FormControl sx={{ m: 1, minWidth: 120, background: theme.palette.primary.main, borderRadius: '8px' }} size='small'>
            <Select
              sx={{
                border: 'none',
                color: theme.palette.primary.light,
                '& .MuiSelect-outlined': {
                  border: 'none', outline: 'none'
                },
                '& .MuiSelect-icon': {
                  color: theme.palette.primary.light
                }
              }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>All pools</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
    </Box>
  
  )
}
