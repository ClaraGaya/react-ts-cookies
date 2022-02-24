
import { Routes, Route } from "react-router-dom";
import { Cookies } from '../pages/Cookies';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { AppWrapper } from "../wrappers/AppWrapper";

export const Router = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="cookies" element={<Cookies />} />
      </Routes>
    </AppWrapper>
  )
}
