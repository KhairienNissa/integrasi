import React from "react";
import Navbar from "../component/Navbar";
import NavbarUser from "./NavbarUser";

const isAdmin = (props) => {

    const isAdmin =false
    return (
        isAdmin ? <Navbar/> : <NavbarUser {...props}/>
    )
}

export default isAdmin;