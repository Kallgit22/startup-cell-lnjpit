import { useEffect, useState } from "react";
import { getInitiatives } from "../apis/AppContentAPI";
import { useSnackbar } from "../context/SnackbarProvider";

export default function InitiativeContainer() {
  const [initiatives, setInitiatives] = useState(null);
  const { showSnackbar } = useSnackbar();
  useEffect(() => {
    try {
      Promise.all([getInitiatives()]).then(function (results) {
        const Initiatives = results[0].data;
        setInitiatives(Initiatives);
      }).catch((error)=>{
        showSnackbar("Network Error", "error");
      });
    } catch (error) {
      showSnackbar("Network Error", "error");
    }
  }, []);
  return { initiatives };
}
