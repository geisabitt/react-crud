import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Visualizar() {
  const [cliente, setCliente] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`/cliente/${id}`, {
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
    <div>
      <table className="listarPessoas">
        <thead>
          <tr>
            <td className="headerColuna">Cliente:</td>
          </tr>
        </thead>
        <tbody>
          <tr key={cliente._id}>
            <tr className="invisivel"> {cliente._id}</tr>
            <tr>{cliente.nome}</tr>
            <tr>{cliente.sobrenome}</tr>
            <tr>{cliente.data_nascimento}</tr>
            <tr>{cliente.cpf}</tr>
            <tr>{cliente.endereco}</tr>
            <tr>{cliente.numero}</tr>
            <tr>{cliente.complemento}</tr>
            <tr>{cliente.cep}</tr>
            <tr>{cliente.cidade}</tr>
            <tr>{cliente.estado}</tr>
            <tr>
              <Link to={"/consulta"}>Voltar</Link>
            </tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Visualizar;
