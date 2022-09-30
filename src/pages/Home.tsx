import * as React from 'react';
import {useContext, useState} from 'react'
import { Box, CardMedia, FormControl, InputBase, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material"
import banner from '../assets/banner.png'
import theme, { Colors } from "../styles/theme"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import TableList from '../components/TableList';
import { DataContext } from '../context/DataContext';
import dataRespon from '../api/dataRespon';
import SelectOption from '../components/SelectOption';
export default function Home() {

  const [search,setSearch] = useState('')
  const [dataSearch, setDataSearch] = useState([])
  const data = useContext(DataContext)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    // const fetch = async () =>{
    //   const result = await dataRespon.getSearch(search)
    //   console.log(result)
    // }
    // fetch()
    console.log(search)
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  return (
    <Box margin={'20px 10px'}>
      <Box sx={{ borderRadius: '8px', padding: '10px 30px', background: Colors.gradientColor, height: '200px', display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4" component={'h4'}>
          Welcome to the Mini App
        </Typography>
        <CardMedia component={'img'} height="100%" sx={{
          objectFit: 'contain'
        }} src={banner} alt="banner" />
      </Box>
      <Stack mt={2} direction={'row'} justifyContent='space-between' alignItems={'center'}>
        <Box component='form' onSubmit={handleSubmit}>
          <Search sx={{ background: theme.palette.primary.main,
            '&:hover':{
              background: theme.palette.primary.main
            }
          }}>
          <SearchIconWrapper>
              <SearchIcon sx={{color:'#fff'}}/>
            </SearchIconWrapper>
            <StyledInputBase
            onChange={handleSearchChange}
              sx={{
                color:theme.palette.secondary.main
              }}
              placeholder="Search pools or token"
              inputProps={{ 'aria-label': 'search' }}
            />
          
          </Search>

        </Box>
        <Box sx={{display:'flex'}}>
        <SelectOption/>
        <SelectOption/>
        <SelectOption/>
        </Box>
      </Stack>
      <Box sx={{
        background: theme.palette.primary.main,
        borderRadius: '8px',
        padding: theme.spacing(2)
      }}>
        <TableList data={data}/>
      </Box>
    </Box>
  )
}
