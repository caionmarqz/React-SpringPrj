import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import { SalePage } from "types/sale";

export const DataTable = () => {

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


  return (
    <>
      <Pagination page={page} onPageChange={changePage}/>
      <table className="table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(item => (
            <tr key={item.id}>
              <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
              <td>{item.name}</td>
              <td>{item.seller.name}</td>
              <td>{item.visited}</td>
              <td>{item.deals}</td>
              <td>{item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
