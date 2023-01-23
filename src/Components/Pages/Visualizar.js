import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
            <td>{cliente.nome}</td>
          </tr>
          <tr>
            <th scope="row">Sobrenome: </th>
            <td>{cliente.sobrenome}</td>
          </tr>
          <tr>
            <th scope="row">CPF: </th>
            <td>{cliente.cpf}</td>
          </tr>
          <tr>
            <th scope="row">Data Nascimento: </th>
            <td>{cliente.data_nascimento}</td>
          </tr>
          <tr>
            <th scope="row">Cep: </th>
            <td>{cliente.cep}</td>
          </tr>
          <tr>
            <th scope="row">Endereco: </th>
            <td>{cliente.endereco}</td>
          </tr>
          <tr>
            <th scope="row">Complemento: </th>
            <td>{cliente.complemento}</td>
          </tr>
          <tr>
            <th scope="row">Cidade: </th>
            <td>{cliente.cidade}</td>
          </tr>
          <tr>
            <th scope="row">Estado: </th>
            <td>{cliente.estado}</td>
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
