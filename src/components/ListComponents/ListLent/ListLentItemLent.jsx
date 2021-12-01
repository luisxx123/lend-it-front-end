import { useEffect } from "react";

import * as Api from "../../../api/list";
import LentItem from "../../LentItem/LentItem.jsx";
import EmptyState from "../../../pages/EmptyState/EmptyState.jsx";
import { useLend } from "../../../contexts/lendContext";

export default function ListLentItemLent() {
  const { lends, setLends, setLate } = useLend();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Api.listLent();
        setLends(response);
        setLate(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (lends.length === 0) {
    return <EmptyState />;
  }
  return (
    <>
      {lends.map((lean) => (
        <LentItem
          key={lean.id}
          id={lean.id}
          name_obj={lean.item_emprestado}
          name_resp={lean.nome_responsavel_atual}
          cellphone={lean.contato_celular_devolucao}
          email={lean.contato_email_devolucao}
          date_lent={lean.data_emprestimo}
          date_devolution={lean.data_devolucao}
          result_devolution={lean.resultado_devolucao}
        />
      ))}
    </>
  );
}
