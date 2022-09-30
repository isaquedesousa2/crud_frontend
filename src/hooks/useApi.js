import { useContext } from "react";
import { ApiContext } from "../contexts/api";

const useApi = () => {
  const context = useContext(ApiContext);

  return context;
};

export default useApi;
