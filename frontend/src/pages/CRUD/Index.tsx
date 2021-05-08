import Footer from "components/Footer"
import NavBar from "components/NavBar"
import React from "react"
import { TableCRUD } from "../../components/CRUDTable"

export const CRUD = () => {

    return (
        <div>
        <NavBar />
        <TableCRUD />
        <Footer />
        </div>
    )
}