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

  const criarCLiente = async (e) => {
    e.preventDefault();
    console.log(cliente);
    fetch("http://localhost:3500/cliente", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ cliente }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <h2>Cadastro de clientes</h2>
      <form onSubmit={criarCLiente}>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
export default Cadastro;
