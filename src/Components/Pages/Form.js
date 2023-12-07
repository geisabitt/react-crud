import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";

import styles from "./Form.module.css";

function Form() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [cliente, setCliente] = useState({
    name: "",
    numbers: "",
    email: "",
    cpf: "",
    date_born: "",
  });

  useEffect(() => {
    if (id) {
      const clienteJSON = localStorage.getItem(id);
      if (clienteJSON) {
        const clienteData = JSON.parse(clienteJSON);
        setCliente(clienteData);
      }
    }
  }, [id]);

  const valorInput = (e) => setCliente({...cliente, [e.target.name]: e.target.value});

  function Cadastro() {
    const clienteData = {
      name: cliente.name,
      numbers: cliente.numbers,
      email: cliente.email,
      cpf: cliente.cpf,
      date_born: cliente.date_born,
    };

    const clienteJSON = JSON.stringify(clienteData);

    if (id) {
      localStorage.setItem(id, clienteJSON);
    } else {
      const newId = uuidv4();
      localStorage.setItem(newId, clienteJSON);
    }

    navigate("/consulta");
  }

  return (
    <div className={styles.container}>
      <h2>Editar de cliente</h2>
      <form>
        <div className={styles.form_control}>
          <label>Nome</label>
          <input onChange={valorInput} type="text" name="name" id="name" placeholder="Digite um nome" value={cliente.name} />
        </div>
        <div className={styles.form_control}>
          <label>Telefone</label>
          <input onChange={valorInput} type="text" name="numbers" id="numbers" placeholder="Digite um telefone" value={cliente.numbers} />
        </div>
        <div className={styles.form_control}>
          <label>cpf</label>
          <input onChange={valorInput} type="number" name="cpf" id="cpf" value={cliente.cpf} placeholder="Digite um cpf" />
        </div>
        <div className={styles.form_control}>
          <label>Data de nascimento</label>
          <input onChange={valorInput} type="date" name="data_born" id="data_born" value={cliente.data_born} placeholder="Digite um data de nascimento" />
        </div>
        <div className={styles.form_control}>
          <label>E-mail</label>
          <input onChange={valorInput} type="email" name="email" id="email" value={cliente.email} placeholder="Digite um email" />
        </div>
        <Link className="btn btn-outline-primary" to={"/consulta"}>
          Voltar
        </Link>{" "}
        <button id="btn-cadastrar" className="btn btn-success" type="button" onClick={Cadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
export default Form;
