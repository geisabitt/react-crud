import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styles from './Cadastro.module.css';

function Editar() {
  const [cliente, setCliente] = useState([]);
  const navigate = useNavigate();

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

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
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`/api/cliente/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.error) {
          setStatus({
            type: "erro",
            mensagem: "Erro ao editar o cliente",
          });
          setTimeout(() => {
            setStatus({
              type: "",
              mensagem: "",
            });
          }, 3000);
        } else if (result.message) {
          setStatus({
            type: "success",
            mensagem: "Cliente editado con sucesso",
          });
          setTimeout(() => {
            navigate("/consulta");
          }, 3000);
        }
      })
      .catch(() => {
        setStatus({
          type: "erro",
          mensagem: "Falha no sistema tente mais tarde",
        });
        setTimeout(() => {
          setStatus({
            type: "",
            mensagem: "",
          });
        }, 3000);
      });
  }

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
        if (result.error) {
          setStatus({
            type: "erro",
            mensagem: "Erro ao deletar cliente",
          });
          setTimeout(() => {
            setStatus({
              type: "",
              mensagem: "",
            });
          }, 3000);
        } else if (result.message) {
          setStatus({
            type: "erro",
            mensagem: "Cliente deletado!",
          });

          setTimeout(() => {
            navigate("/consulta");
          }, 3000);
        }
      })
      .catch(() => {
        setStatus({
          type: "erro",
          mensagem: "Falha no sistema tente mais tarde",
        });
        setTimeout(() => {
          setStatus({
            type: "",
            mensagem: "",
          });
        }, 3000);
      });
  }

  return (
    <div className={styles.container}>
      <h2>Editar de cliente</h2>
      <form>
        <div className={styles.form_control}>
          <label>nome</label>
          <input
            onChange={valorInput}
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite um nome"
            value={cliente.nome}
          />
        </div>
        <div className={styles.form_control}>
          <label>sobrenome</label>
          <input
            onChange={valorInput}
            type="text"
            name="sobrenome"
            id="sobrenome"
            placeholder="Digite um sobrenome"
            value={cliente.sobrenome}
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
          <label>data_nascimento</label>
          <input
            onChange={valorInput}
            type="date"
            name="data_nascimento"
            id="data_nascimento"
            value={cliente.data_nascimento}
            placeholder="Digite um data_nascimento"
          />
        </div>
        <div className={styles.form_control}>
          <label>cep</label>
          <input
            onChange={valorInput}
            type="number"
            name="cep"
            id="cep"
            value={cliente.cep}
            placeholder="Digite um cep"
          />
        </div>
        <div className={styles.form_control}>
          <label>endereco</label>
          <input
            onChange={valorInput}
            type="text"
            name="endereco"
            id="endereco"
            value={cliente.endereco}
            placeholder="Digite um endereco"
          />
        </div>
        <div className={styles.form_control}>
          <label>numero</label>
          <input
            onChange={valorInput}
            type="text"
            name="numero"
            id="numero"
            value={cliente.numero}
            placeholder="Digite um numero"
          />
        </div>
        <div className={styles.form_control}>
          <label>complemento</label>
          <input
            onChange={valorInput}
            type="text"
            name="complemento"
            id="complemento"
            value={cliente.complemento}
            placeholder="Digite um complemento"
          />
        </div>
        <div className={styles.form_control}>
          <label>cidade</label>
          <input
            onChange={valorInput}
            type="text"
            name="cidade"
            id="cidade"
            value={cliente.cidade}
            placeholder="Digite um cidade"
          />
        </div>
        <div className={styles.form_control}>
          <label>estado</label>
          <input
            onChange={valorInput}
            type="text"
            name="estado"
            id="estado"
            value={cliente.estado}
            placeholder="Digite um estado"
          />
        </div>
        {status.type === "erro" ? (
          <p className="alert alert-danger">{status.mensagem}</p>
        ) : (
          ""
        )}
        {status.type === "success" ? (
          <p className="alert alert-success">{status.mensagem}</p>
        ) : (
          ""
        )}

        <div className={styles.btn_container}>
          <Link className="btn btn-outline-primary" to={"/consulta"}>
            Voltar
          </Link>
          <button
            id="btn-att-cadastro"
            className="btn btn-success"
            type="button"
            onClick={Editar2}>
            Salvar
          </button>
          <button
            type="button"
            class="deletar btn btn-outline-danger"
            onClick={() => {
              removePessoa(id);
            }}>
            Deletar
          </button>
        </div>
      </form>
    </div>
  );
}
export default Editar;
