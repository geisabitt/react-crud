import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Consulta() {
  // const navigate = useNavigate();

  let [cliente, setCliente] = useState([]);
  useEffect(() => {
    fetch("/api/cliente", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((cliente) => {
        console.log(cliente);
        setCliente(cliente);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function removePessoa(id) {
    fetch(`/api/cliente/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
        document.location.reload(true);
      })
      .then(console.log("delete Acionado"))

      //  .then((data) => {
      //  setDeletePessoa(deletePessoa.filter((cliente) => cliente.id !== id));
      // });
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="ajust">
      <div className="mensagem"></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <td scope="col">Nome</td>
            <td scope="col">Data de Nascimento</td>
            <td scope="col">CPF</td>
            <td scope="col">Endereco</td>
            <td scope="col">Ações</td>
          </tr>
        </thead>
        <tbody>
          {Object.values(cliente).map((cliente) => {
            return (
              <tr scope="row" key={cliente._id}>
                <td>
                  {cliente.nome} {cliente.sobrenome}
                </td>
                <td>{cliente.data_nascimento}</td>
                <td>{cliente.cpf}</td>
                <td>
                  {cliente.endereco},{cliente.numero},{cliente.complemento} -{" "}
                  {cliente.cidade}/{cliente.estado} -{cliente.cep}{" "}
                </td>
                <td>
                  <Link
                    class="ver btn btn-outline-primary"
                    to={"/visualizar/" + cliente._id}>
                    Ver
                  </Link>{" "}
                  <Link
                    class="editar btn btn-outline-primary"
                    to={"/editar/" + cliente._id}>
                    Editar
                  </Link>{" "}
                  <button
                    class="deletar btn btn-outline-danger"
                    onClick={() => {
                      removePessoa(cliente._id);
                    }}>
                    Deletar
                  </button>
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
