import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@mui/material/styles/styled';
import { CardMedia, TableContainer, Typography } from '@mui/material';
import { CheckNumberInteger, FormatCurrency } from '../utils';
import theme from '../styles/theme';
import { useNavigate } from 'react-router-dom'

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}
const Cell = styled(TableCell)(({ theme }) => ({
  borderBottom: `0.5px solid #f3f3f32b`,
  color: theme.palette.primary.light,
  fontSize: 16,
  fontWeight: 500,
  padding: '20px 6px'
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
export default function TableList(props: any) {
   const navigation = useNavigate()
  const { data } = props
  console.log(data)
  return (
    <React.Fragment>
      <TableContainer>
        <Table size="small" >
          <TableHead sx={{ paddingY: '20px' }} >
            <TableRow >
              <Cell sx={(theme) => ({ color: theme.palette.secondary.main })}>#</Cell>
              <Cell sx={(theme) => ({ color: theme.palette.secondary.main })}>Name</Cell>
              <Cell sx={(theme) => ({ color: theme.palette.secondary.main })}>Price</Cell>

              <Cell sx={(theme) => ({ color: theme.palette.secondary.main })}>Change</Cell>

              <Cell sx={(theme) => ({ color: theme.palette.secondary.main })} align="right">Market cap</Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.coins?.map((row: any, index: any) => (
              <TableRow key={row.uuid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <Cell>{index + 1}</Cell>
                <Cell sx={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}><Typography sx={{ maxWidth: '150px' }} onClick={()=> {
                  navigation(`/coin/${row.uuid}`)
                }
                }>
                  {row.name}
                </Typography>
                  <CardMedia src={row.iconUrl} sx={{ height: '25px', width: '25px', objectFit: 'contain' }} alt='icon' component='img' />
                  <Typography sx={(theme) => ({ color: theme.palette.secondary.main, fontSize: 14, fontWeight: 400 })}>
                    {row.symbol}
                  </Typography>
                </Cell>
                <Cell >{FormatCurrency(row.price)}</Cell>
                <Cell><Typography sx={{
                  color: CheckNumberInteger(parseFloat(row.change) / 100) ? theme.palette.success.main : theme.palette.error.main
                }}>
                  {row.change}%
                </Typography></Cell>

                <Cell align="right">{FormatCurrency(row.marketCap).slice(0, -3)}</Cell>
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