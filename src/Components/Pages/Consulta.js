import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Consulta() {
  const [cliente, setCliente] = useState([]);
  useEffect(() => {
    fetch("/cliente", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((cliente) => {
        console.log(cliente);
        setCliente(cliente);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function apagarPessoa(id) {
    let requestOptions = {
      method: "DELETE",
      body: JSON.stringify(),
    };

    console.log(id);
    fetch("/cliente/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="conteudo">
      <div className="mensagem"></div>
      <table className="listarPessoas">
        <thead>
          <tr className="headerColuna">
            <td className="invisivel">_id</td>
            <td>nome</td>
            <td>data_nascimento</td>
            <td>cpf</td>
            <td>endereco</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {Object.values(cliente).map((cliente) => {
            return (
              <tr key={cliente._id}>
                <td className="invisivel">{cliente._id}</td>
                <td>
                  {cliente.nome} {cliente.sobrenome}
                </td>
                <td>{cliente.data_nascimento}</td>
                <td>{cliente.cpf}</td>
                <td>
                  {cliente.endereco}, {cliente.numero}, {cliente.complemento} -{" "}
                  {cliente.cidade}/{cliente.estado} - {cliente.cep}{" "}
                </td>
                <td>
                  <Link to={"/visualizar/" + cliente._id}>Ver</Link>{" "}
                  <Link to={"/editar/" + cliente._id}>Editar</Link>
                  <button onClick={apagarPessoa(cliente._id)}>Deletar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pessoa"></div>
    </div>
  );
}
export default Consulta;
