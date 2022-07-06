// This is a component which renders an abstract list

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Filter from './filter/filter.js';
import { useEffect } from 'react';
import { setFilteredData } from '../redux/slices/dataSlice';

const List = () => {

  const data = useSelector((state) => state.dataReducer.data);
  const filteredData = useSelector((state) => state.dataReducer.filteredData);
  const keys = useSelector((state) => state.keysReducer.filteredKeys);
  const filters = useSelector((state) => state.filterReducer.filters);
  const connector = useSelector((state) => state.filterReducer.connector);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFilteredData(data.filter((row) => { return filters.length > 0 ? checkFilters(row) : true })))
  }, [filters])

  let checkFilters = (row) => {
    if (connector === "And") {
      for (let i = 0; i < filters.length; i++) {
        if (Filter({ row: row, filter: filters[i] }) === false) {
          return false;
        }
      }
      return true;
    }
    for (let i = 0; i < filters.length; i++) {
      if (Filter({ row: row, filter: filters[i] }) === true) {
        return true;
      }
    }
    return false;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          {keys.map((value, id) => <TableCell key={id}>{value}</TableCell>)}
        </TableRow>
      </TableHead>

      <TableBody>
        {filteredData.map((row, idRow) =>
          // map table rows here
          <TableRow key={idRow}>
            {/* map row table cells here */}
            {keys.map((key, idKey) =>
              <TableCell key={idKey}>{String(row[key])}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default List;