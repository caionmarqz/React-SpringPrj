import axios from "axios";
import Pagination from "components/Pagination";
import React, { useDebugValue, useEffect, useState } from "react";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import { SalePage } from "types/sale";
import { stringify } from "querystring";

export const TableCRUD = () => {

  const state = {
    data: []
  }

  const[activePage, setActivePage] = useState(0);

  const changePage  = (index:number) => {
    setActivePage(index);
  }

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=date,desc`)
      .then(response => {
        setPage(response.data);
      })
  }, [activePage])

  const deleteRecord = (id: number): void => {
    page.content?.splice(id, 1);
    setPage(page);
 //   axios.delete(`${BASE_URL}/sales/${id}`);
  }

  const updateRecord = (id: number): void => {

  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(item => (
            <tr key={item.id}>
              <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
              <td>{item.seller.name}</td>
              <td>{item.visited}</td>
              <td>{item.deals}</td>
              <td>{item.amount.toFixed(2)}</td>
              <td><a href="#" onClick={() => updateRecord(item.id)}><img src='edit.png' height="28" width="28"></img></a></td>
              <td><a href="#" onClick={() => deleteRecord(item.id)}><img src='delete.png' height="28" width="28"></img></a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={page} onPageChange={changePage}/>
    </>
  );
}
