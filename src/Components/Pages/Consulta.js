import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Consulta() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const clientesLocalStorage = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const clienteJSON = localStorage.getItem(key);
      if (clienteJSON) {
        const cliente = JSON.parse(clienteJSON);
        cliente.id = key; // Adiciona o ID do cliente
        clientesLocalStorage.push(cliente);
      }
    }
    setClientes(clientesLocalStorage);
  }, []);

  function removePessoa(id) {
    localStorage.removeItem(id);
    const updatedClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(updatedClientes);
  }

  return (
    <div className="ajust">
      <div className="mensagem"></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Data de Nascimento</th>
            <th scope="col">CPF</th>
            <th scope="col">Email</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.name}</td>
              <td>{cliente.numbers}</td>
              <td>{cliente.date_born}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.email}</td>
              <td>
                <Link className="editar btn btn-outline-primary" to={`/form/${cliente.id}`}>
                  Editar
                </Link>{" "}
                <button
                  className="deletar btn btn-outline-danger"
                  onClick={() => {
                    removePessoa(cliente.id);
                  }}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pessoa"></div>
    </div>
  );
}

export default Consulta;
