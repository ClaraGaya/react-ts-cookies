import React, { useEffect, useState, MouseEvent } from 'react'
import { useCookies } from 'react-cookie';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { DeleteRounded } from '@mui/icons-material';


export const CookieDashboard = () => {
  const [cookies, setCookie, removeCookie ] = useCookies();
  const [rows, setRows ] = useState([{id: 2, name: 'themeMode', value: 'dark'}]);

  const createData = (id: number, name: string, value: string) => {
    return { id: id+1, name: name, value: value };
  }
 
  Object.entries(cookies).map((cookie, i) => createData(i, cookie[0], cookie[0]) );

  useEffect(() => {
    const convertedObj =  Object.entries(cookies).map((cookie, i) => createData(i, cookie[0], cookie[1]) );
    setRows(convertedObj)
  }, [cookies]);

  const deleteCookie = (e: MouseEvent, params: any) => {
    e.stopPropagation(); // don't select this row after clicking
    const name = params.row.name
    removeCookie(name);
  };

  const columns = [
    { field: 'id', headerName: 'Id', width: 90 },
    { field: 'name', headerName: 'Name', width: 160 },
    { field: 'value', headerName: 'Value', width: 160 },
    {
      field: 'delete',
      headerName: '',
      sortable: false,
      renderCell: (params: any) => {
        return <IconButton onClick={(e: MouseEvent<HTMLButtonElement>) => deleteCookie(e, params)} color="primary" component="span"><DeleteRounded/></IconButton>
      },
    }
  ]

  return (
    <main>
      <h2>Cookie Dashboard</h2>
      <p>You can set and access cookies both via the server and the client.</p>
      {rows.length > 0 && (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
        </div>
      )} 
    </main>
  )
}
