import axios from "axios";
import { useEffect, useState } from "react";
import { formatLocalDate } from "services/format";
import { BASE_URL } from "services/requests";
import { SalePage } from "types/sale";

export const DataTable = () => {

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
      .then(response => {
        setPage(response.data);
      })
  })


  return (
    <div>
      <table className="table table-striped">
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
    </div>
  );
}
