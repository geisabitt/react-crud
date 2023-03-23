import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Visualizar() {
  const [cliente, setCliente] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`/api/cliente/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((cliente) => {
        console.log(cliente);
        setCliente(cliente);
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  return (
    <div className="ajust">
      <table className="table visualizar">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr className="invisivel">
            <th key={cliente._id} scope="row">
              Nome:{" "}
            </th>
            <td>{cliente._id}</td>
          </tr>
          <tr>
            <th scope="row">Nome: </th>
            <td>{cliente.name}</td>
          </tr>
          <tr>
            <th scope="row">Telefone: </th>
            <td>{cliente.numbers}</td>
          </tr>
          <tr>
            <th scope="row">CPF: </th>
            <td>{cliente.cpf}</td>
          </tr>
          <tr>
            <th scope="row">Data Nascimento: </th>
            <td>{cliente.data_born}</td>
          </tr>
          <tr>
            <th scope="row">E-mail: </th>
            <td>{cliente.email}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>
              <Link to={"/consulta"}>Voltar</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Visualizar;
