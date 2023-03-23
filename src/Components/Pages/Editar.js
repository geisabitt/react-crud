import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./Cadastro.module.css";

function Editar() {
  const [cliente, setCliente] = useState([]);
  const navigate = useNavigate();

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

  const valorInput = (e) =>
    setCliente({ ...cliente, [e.target.name]: e.target.value });

  function Editar2() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      name: cliente.name,
      numbers: cliente.numbers,
      data_born: cliente.data_born,
      cpf: cliente.cpf,
      email: cliente.email,
    });

    let requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`/api/cliente/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        navigate("/consulta");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className={styles.container}>
      <h2>Editar de cliente</h2>
      <form>
        <div className={styles.form_control}>
          <label>Nome</label>
          <input
            onChange={valorInput}
            type="text"
            name="name"
            id="name"
            placeholder="Digite um nome"
            value={cliente.name}
          />
        </div>
        <div className={styles.form_control}>
          <label>Telefone</label>
          <input
            onChange={valorInput}
            type="text"
            name="numbers"
            id="numbers"
            placeholder="Digite um telefone"
            value={cliente.numbers}
          />
        </div>
        <div className={styles.form_control}>
          <label>cpf</label>
          <input
            onChange={valorInput}
            type="number"
            name="cpf"
            id="cpf"
            value={cliente.cpf}
            placeholder="Digite um cpf"
          />
        </div>
        <div className={styles.form_control}>
          <label>Data de nascimento</label>
          <input
            onChange={valorInput}
            type="date"
            name="data_born"
            id="data_born"
            value={cliente.data_born}
            placeholder="Digite um data de nascimento"
          />
        </div>
        <div className={styles.form_control}>
          <label>E-mail</label>
          <input
            onChange={valorInput}
            type="email"
            name="email"
            id="email"
            value={cliente.email}
            placeholder="Digite um email"
          />
        </div>
        <Link className="btn btn-outline-primary" to={"/consulta"}>
          Voltar
        </Link>{" "}
        <button
          id="btn-att-cadastro"
          className="btn btn-success"
          type="button"
          onClick={Editar2}>
          Salvar
        </button>
      </form>
    </div>
  );
}
export default Editar;
