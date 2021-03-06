import React, { createContext, useState, useContext } from "react";
import { destroyBorrow, destroyLent } from "../api/delete-item.js";
import { createBorrow, createLent } from "../api/create-item.js";
import { editBorrow, editLent } from "../api/edit-item.js";
import {
  giveBackItemBorrow,
  giveBackItemLent,
} from "../api/devolution-item.js";

import sorts from "../utils/sortFunctions.js";

const lendContext = createContext({});

export default function LendContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const [lends, setLends] = useState([]);
  const [late, setLate] = useState([]);

  const [object, setObject] = useState("");
  const [lentDate, setLentDate] = useState(new Date());
  const [objectReturnDate, setObjectReturnDate] = useState(null);
  const [whoLent, setWhoLent] = useState("");
  const [emailWhoLent, setEmailWhoLent] = useState("");
  const [cellphoneWhoLent, setCellphoneWhoLent] = useState("");

  const openModal = () => {
    setShowModal(true);
    //Setando campos para vazios no modal
    setObject("");
    setWhoLent("");
    setLentDate(new Date());
    setObjectReturnDate(null);
    setEmailWhoLent("");
    setCellphoneWhoLent("");
  };

  const createLend = async (e) => {
    e.preventDefault();
    if (!handleInputs()) return;
    try {
      const response = await createLent(
        object,
        whoLent,
        cellphoneWhoLent,
        emailWhoLent,
        lentDate,
        objectReturnDate
      );
      if (response.id) {
        const newList = [...lends, response];

        setLends(newList);
        setLate(newList);
        alert(
          "Novo Item '" + response.item_emprestado + "' criado com sucesso!!!"
        );

        //Fechando Modal depois do alerta
        setShowModal(false);
      }
    } catch (error) {
      alert("Item não criado. Por favor, verifique os campos obrigatórios");
    }
  };

  const createBorrowLend = async (e) => {
    e.preventDefault();
    if (!handleInputs()) return;
    try {
      const response = await createBorrow(
        object,
        whoLent,
        cellphoneWhoLent,
        emailWhoLent,
        lentDate,
        objectReturnDate
      );
      if (response.id) {
        const newList = [...lends, response];

        setLends(newList);
        setLate(newList);
        alert(
          "Novo Item '" + response.item_emprestado + "' criado com sucesso!!!"
        );

        //Fechando Modal depois do alerta
        setShowModal(false);
      }
    } catch (error) {
      alert("Item não criado. Por favor, verifique os campos obrigatórios");
    }
  };

  const handleInputs = () => {
    if (object.trim().length === 0) {
      alert("Digite o nome do objeto para prosseguir!");
      return false;
    }

    if (
      lentDate.toString().trim().length > 0 &&
      objectReturnDate !== null &&
      objectReturnDate < lentDate
    ) {
      alert("A data de devolução não pode ser antes da data do empréstimo!");
      return false;
    }

    if (whoLent.trim().length === 0) {
      alert("Digite o nome de quem pegou o objeto!");
      return false;
    }

    if (whoLent.trim().length === 0) {
      alert("Digite o nome de quem pegou o objeto!");
      return false;
    }

    if (cellphoneWhoLent.length !== 11) {
      alert("Certifique-se de ter digitado o DDD e o número corretamente!");
      return false;
    }

    return true;
  };

  async function removeLend(id, pathname) {
    try {
      setLends(lends.filter((e) => e.id !== id));
      setLate(late.filter((e) => e.id !== id));

      if (pathname === "/emprestado") {
        await destroyBorrow({ id });
      } else {
        await destroyLent({ id });
      }

      alert("Removido com sucesso!");
    } catch (err) {
      alert(err.message);
    }
  }

  const findOneObject = async (id) => {
    try {
      const [response] = lends.filter((lent) => {
        return lent.id === id;
      });
      if (response) {
        setObject(response.item_emprestado);

        if (response.nome_donoObj) {
          setWhoLent(response.nome_donoObj);
        } else {
          setWhoLent(response.nome_responsavel_atual);
        }

        setEmailWhoLent(response.contato_email_devolucao);
        setCellphoneWhoLent(response.contato_celular_devolucao);
        setLentDate(new Date(response.data_emprestimo));
        if (response.data_devolucao) {
          setObjectReturnDate(new Date(response.data_devolucao));
        }
      }
    } catch (err) {
      alert(
        "Objeto não encontrado na base de dados, por favor, entre em contato com os administradores"
      );
    }
  };

  const updateItem = async (id, pathname) => {
    try {
      if (pathname === "/emprestado") {
        await editBorrow(
          id,
          object,
          whoLent,
          cellphoneWhoLent,
          emailWhoLent,
          lentDate,
          objectReturnDate
        );
        alert(object + " atualizado com sucesso!!!");
        window.location.reload();
      } else if (pathname === "/emprestei") {
        await editLent(
          id,
          object,
          whoLent,
          cellphoneWhoLent,
          emailWhoLent,
          lentDate,
          objectReturnDate
        );

        alert(object + " atualizado com sucesso!!!");
        window.location.reload();
      }
    } catch (err) {
      alert(object + " não pode ser atualizado");
    }
  };

  async function giveBack(id, pathname) {
    try {
      setLends(lends.filter((e) => e.id !== id));
      setLate(late.filter((e) => e.id !== id));
      if (pathname === "/emprestado") {
        await giveBackItemBorrow({ id });
      } else if (pathname === "/emprestei") {
        await giveBackItemLent({ id });
      }

      alert("Item devolvido com sucesso!!!");
    } catch (err) {
      alert(err);
    }
  }

  async function sortLends(value) {
    if (value === "novo ao antigo") {
      const sortOld = sorts.oldest(lends);
      console.log(sortOld);
      setLends(sortOld);
    } else if (value === "antigo ao novo") {
      const sortNew = sorts.newst(lends);
      console.log(sortNew);
      setLends(sortNew);
    }
  }

  return (
    <lendContext.Provider
      value={{
        lends,
        setLends,
        late,
        setLate,
        removeLend,
        object,
        setObject,
        lentDate,
        setLentDate,
        objectReturnDate,
        setObjectReturnDate,
        whoLent,
        setWhoLent,
        emailWhoLent,
        setEmailWhoLent,
        cellphoneWhoLent,
        setCellphoneWhoLent,
        showModal,
        setShowModal,
        openModal,
        createLend,
        createBorrowLend,
        updateItem,
        findOneObject,
        giveBack,
        sortLends,
      }}
    >
      {children}
    </lendContext.Provider>
  );
}

export const useLend = () => useContext(lendContext);
