import { useState } from 'react';

import styles from './Cadastro.module.css';

function Cadastro() {
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
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      data_nascimento: cliente.data_nascimento,
      cpf: cliente.cpf,
      cep: cliente.cep,
      endereco: cliente.endereco,
      numero: cliente.numero,
      complemento: cliente.complemento,
      cidade: cliente.cidade,
      estado: cliente.estado,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/cliente", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className={styles.container}>
      <h2>Cadastro de clientes</h2>
      <form>
        <div className={styles.form_control}>
          <label>nome</label>
          <input
            onChange={valorInput}
            type="text"
            name="nome"
            placeholder="Digite um nome"
          />
        </div>
        <div className={styles.form_control}>
          <label>sobrenome</label>
          <input
            onChange={valorInput}
            type="text"
            name="sobrenome"
            placeholder="Digite um sobrenome"
          />
        </div>
        <div className={styles.form_control}>
          <label>cpf</label>
          <input
            onChange={valorInput}
            type="number"
            name="cpf"
            placeholder="Digite um cpf"
          />
        </div>
        <div className={styles.form_control}>
          <label>data_nascimento</label>
          <input
            onChange={valorInput}
            type="date"
            name="data_nascimento"
            placeholder="Digite um data_nascimento"
          />
        </div>
        <div className={styles.form_control}>
          <label>cep</label>
          <input
            onChange={valorInput}
            type="number"
            name="cep"
            placeholder="Digite um cep"
          />
        </div>
        <div className={styles.form_control}>
          <label>endereco</label>
          <input
            onChange={valorInput}
            type="text"
            name="endereco"
            placeholder="Digite um endereco"
          />
        </div>
        <div className={styles.form_control}>
          <label>numero</label>
          <input
            onChange={valorInput}
            type="text"
            name="numero"
            placeholder="Digite um numero"
          />
        </div>
        <div className={styles.form_control}>
          <label>complemento</label>
          <input
            onChange={valorInput}
            type="text"
            name="complemento"
            placeholder="Digite um complemento"
          />
        </div>
        <div className={styles.form_control}>
          <label>cidade</label>
          <input
            onChange={valorInput}
            type="text"
            name="cidade"
            placeholder="Digite um cidade"
          />
        </div>
        <div className={styles.form_control}>
          <label>estado</label>
          <input
            onChange={valorInput}
            type="text"
            name="estado"
            placeholder="Digite um estado"
          />
        </div>
        <button className="btn btn-success" type="button" onClick={Cadastro2}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
export default Cadastro;
