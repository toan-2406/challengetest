import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@mui/material/styles/styled';
import { CardMedia, TableContainer, Typography } from '@mui/material';
import { FormatCurrency } from '../utils';

// Generate Order Data
function createData(
  id: number,
  name: string,
  price: number,
  hour: number,
  day: number,
  week: number,
  totalmaket: number
) {
  return { id, name, price, hour, day,week,totalmaket };
}

const rows = [
  createData(
    1,
    'BITCOIN BTC',
    18000,
    100,
    200,
    400,
    312.44,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}
const Cell = styled(TableCell)(({ theme }) => ({
  borderBottom:`0.5px solid #f3f3f32b`,
  color:theme.palette.primary.light,
  fontSize:16,
  fontWeight: 500,
  padding:'20px 6px'
}))
interface DataProps {
  id: number;
  name: string;
  price: number;
  hour: number;
  day: number;
  week: number;
  totalmaket: number;
}
export default function TableList(props:any) {
  const {data} = props

  return (
    <React.Fragment>
      <TableContainer>
      <Table size="small" >
        <TableHead sx={{paddingY:'20px'}} >
          <TableRow >
            <Cell sx={(theme)=> ({  color:theme.palette.secondary.main})}>#</Cell>
            <Cell sx={(theme)=> ({  color:theme.palette.secondary.main})}>Name</Cell>
            <Cell sx={(theme)=> ({  color:theme.palette.secondary.main})}>Price</Cell>
            <Cell sx={(theme)=> ({  color:theme.palette.secondary.main})}>1h %</Cell>
            <Cell sx={(theme)=> ({  color:theme.palette.secondary.main})}>24h %</Cell>
            <Cell sx={(theme)=> ({  color:theme.palette.secondary.main})}>7d %</Cell>
            <Cell sx={(theme)=> ({  color:theme.palette.secondary.main})} align="right">Market cap</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.coins?.map((row:any,index:any) => (
            <TableRow key={row.uuid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <Cell>{index + 1}</Cell>
              <Cell sx={{display:'flex',alignItems:'center',columnGap:'10px'}}><Typography>
              {row.name}
              </Typography>
                <CardMedia src={row.iconUrl} sx={{height:'30px',width:'30px',objectFit:'contain'}} alt='icon' component='img'/>
                <Typography>
              {row.symbol}
              </Typography>
              </Cell>
              <Cell>{FormatCurrency(row.price)}</Cell>
              <Cell>{row.hour}</Cell>
              <Cell>{row.day}</Cell>
              <Cell>{row.week}</Cell>
              <Cell align="right">{FormatCurrency(Math.ceil(row.marketCap))}</Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
     
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}