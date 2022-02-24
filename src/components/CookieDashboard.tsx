import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { DataGrid } from '@mui/x-data-grid';

export const CookieDashboard = () => {
  const [cookies, setCookie, removeCookie ] = useCookies();
  const [rows, setRows ] = useState([{id: 2, name: 'themeMode', value: 'dark'}]);

  const createData = (id: number, name: string, value: string) => {
    return { id: id+1, name: name, value: value };
  }
 
  Object.entries(cookies).map((cookie, i) => createData(i, cookie[0], cookie[0]) );



  useEffect(() => {
    const convertedObj =  Object.entries(cookies).map((cookie, i) => createData(i, cookie[0], cookie[0]) );
    setRows(convertedObj)
    console.log('rows', convertedObj)
  }, [cookies]);

  const handleDeleteRow = (rowId: any) => {
    
  };

  const handleUpdateRow = (rowId: any, value: string) => {
    
  };


  const columns = [
    { field: 'id', headerName: 'Id', width: 90 },
    { field: 'name', headerName: 'Name', width: 160 },
    { field: 'value', headerName: 'Value', width: 160 }
  ]

  return (
    <>
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
            checkboxSelection
          />
          </div>
        )} 
        </main>
    </>
  )
}
