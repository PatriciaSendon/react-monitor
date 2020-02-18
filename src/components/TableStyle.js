import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pulse from '../useful/animations/Pulse';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#3b424c',
    color: 'white',
    fontSize: 15
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#ddd'
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    width: 1000
  },
  container: {
    width: 1000
  }
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  const [dataTable, setDataTable] = useState(props);

  useEffect(() => {
    setDataTable(props);
  }, [props]);

  return (
    <Pulse key={Date.now()}>
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>APP</StyledTableCell>
              <StyledTableCell align="right">Total</StyledTableCell>
              <StyledTableCell align="right">Aguardando Envio</StyledTableCell>
              <StyledTableCell align="right">
                Aguardando Entrega
              </StyledTableCell>
              <StyledTableCell align="right">Entregues</StyledTableCell>
              <StyledTableCell align="right">Bounce Sofridos</StyledTableCell>
              <StyledTableCell align="right">Bounce Evitados</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.dataValue.map(row => (
              <StyledTableRow key={row.ap_id}>
                <StyledTableCell component="th" scope="row">
                  <b>{row.ap_name}</b>
                </StyledTableCell>
                <StyledTableCell align="right">{row.total}</StyledTableCell>
                <StyledTableCell align="right">{row.waitSend}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.waitDelivery}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Delivered}</StyledTableCell>
                <StyledTableCell align="right">{row.bounce}</StyledTableCell>
                <StyledTableCell align="right">{row.Suprimido}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Pulse>
  );
}
