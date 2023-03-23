import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Cadastro.module.css";

function Cadastro() {
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    nome: "",
    sobrenome: "",
    data_nascimento: "",
    cpf: 0,
    cep: 0,
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });

  const valorInput = (e) =>
    setCliente({ ...cliente, [e.target.name]: e.target.value });

  function Cadastro2() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      name: cliente.name,
      numbers: cliente.numbers,
      email: cliente.email,
      cpf: cliente.cpf,
      data_born: cliente.data_born,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/cliente", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        navigate("/consulta");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className={styles.container}>
      <h2>Cadastro de clientes</h2>
      <form>
        <div className={styles.form_control}>
          <label>Nome</label>
          <input
            onChange={valorInput}
            type="text"
            name="name"
            id="name"
            placeholder="Digite um nome"
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
          />
        </div>
        <div className={styles.form_control}>
          <label>CPF</label>
          <input
            onChange={valorInput}
            type="string"
            name="cpf"
            id="cpf"
            placeholder="Digite um cpf"
          />
        </div>
        <div className={styles.form_control}>
          <label>Data Nascimento</label>
          <input
            onChange={valorInput}
            type="date"
            name="date_born"
            id="date_born"
            placeholder="Digite um Data Nascimento"
          />
        </div>
        <div className={styles.form_control}>
          <label>E-mail</label>
          <input
            onChange={valorInput}
            type="email"
            name="email"
            id="email"
            placeholder="Digite um e-mail"
          />
        </div>
        <button
          id="btn-cadastrar"
          className="btn btn-success"
          type="button"
          onClick={Cadastro2}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
export default Cadastro;
