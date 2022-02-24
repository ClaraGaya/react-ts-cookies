import { useEffect, useState } from 'react'
import { FormGroup, FormControlLabel, Switch } from '@mui/material'
import { useCookies } from "react-cookie";


export const ToogleTheme = () => {
  
  const [checked, setChecked] = useState(false);
  const [ ,setCookie ] = useCookies();

  useEffect(() => {
    setCookie("themeMode", checked ? "dark" : "light", {path:"/"})
  }, [checked, setCookie])
  
  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <FormGroup>
      <FormControlLabel control={<Switch onChange={handleChange} checked={checked}/>} label="DarkTheme" labelPlacement="start" />
    </FormGroup>
  )
}
