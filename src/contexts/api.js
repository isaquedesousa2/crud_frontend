import { useState, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const [data, setData] = useState([]);

  const apiGet = ({ url }) => {
    axios({
      method: "GET",
      headers: { "content-type": "multipart/form-data" },
      url: url,
    })
      .then(response => {
        if ( response.data.length === 0){
          setError('Nenhuma imagem encontrada!')
        }else{
          setData(response.data)
          setError('')
        }
      })
      .catch((e) => setError(e.response.data["error"]));
  };

  const apiPost = ({ url, data }) => {
    axios({
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      url: url,
      data: data,
    })
      .then((response) => {
        if (response.status === 201) {
          setSuccess("Imagem salva com sucesso!");
          setError("");
          setTimeout(() => {
            setSuccess('');
          }, 2000)
        }
      })
      .catch((e) => {
        setError(e.response.data["error"]);
        setSuccess("");
      });
  };

  const apiDelete = ({ url }) => {
    axios({
      method: "DELETE",
      headers: { "content-type": "multipart/form-data" },
      url: url,
    })
      .then((response) => {
        if (response.status === 201) {
          setSuccess("Imagem deletada com sucesso!");
          setError("");
          setTimeout(() => {
            setSuccess('');
          }, 3000)
        }
      })
      .catch((e) => {
        setError(e.response.data["error"]);
        setSuccess("");
      });
  };

  return (
    <ApiContext.Provider value={{ error, setError, success, data, apiGet, apiPost, apiDelete }}>
      {children}
    </ApiContext.Provider>
  );
};
