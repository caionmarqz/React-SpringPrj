import React, { Component } from "react";

export default class DataTable extends Component {
  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
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
              <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
              </tr>
              <tr>
                <td>22/04/2021</td>
                <td>José macedo</td>
                <td>15</td>
                <td>21</td>
                <td>3023.00</td>
              </tr>
              <tr>
                <td>22/04/2021</td>
                <td>Marcos nunes</td>
                <td>12</td>
                <td>4</td>
                <td>1025.00</td>
              </tr>
              <tr>
                <td>22/04/2021</td>
                <td>Valter pizzari</td>
                <td>52</td>
                <td>13</td>
                <td>9089.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
