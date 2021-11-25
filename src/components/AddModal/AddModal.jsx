import { useState } from "react";
import { MdClose } from "react-icons/md";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.jsx";
import { Container } from "./AddModal.js";
import { ImPlus } from "react-icons/im";
import { AddButtonContainer } from "../AddButton/AddButton.js";

export default function AddModal() {
  const data = new Date();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  if (showModal) {
    return (
      <Container>
        <div className="modal-bg">
          <div className="modal">
            <div className="modal-content">
              <button
                type="button"
                className="button-cancel"
                data-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                <MdClose />
              </button>
              <div className="modal-header">
                <h1>NOVO EMPRÉSTIMO</h1>
              </div>
              <form className="send-object">
                <div className="modal-body">
                  <div className="modal-body-part">
                    <h3>INFORMAÇÕES DO OBJETO</h3>
                    <label htmlFor="nome-objeto">
                      Nome do objeto emprestado <span>*</span>
                    </label>
                    <input
                      name="nome-objeto"
                      type="text"
                      placeholder="Digite nome do novo objeto..."
                      required
                    />
                    <label htmlFor="data-emprestimo-objeto">
                      Quando foi emprestado?
                    </label>
                    <input
                      name="nome-emprestimo-objeto"
                      type="text"
                      placeholder={data}
                      required
                    />
                    <label htmlFor="data-devolucao-objeto">
                      Quando será devolvido?
                    </label>
                    <input
                      name="data-devolucao-objeto"
                      type="text"
                      placeholder="Data de Devolução..."
                    />
                  </div>

                  <div className="modal-body-part">
                    <h3>INFORMAÇÕES DE QUEM PEGOU</h3>
                    <label htmlFor="nome-quem-pegou">
                      Quem pegou? <span>*</span>
                    </label>
                    <input
                      name="nome-quem-pegou"
                      type="text"
                      placeholder="Digite o nome de quem pegou o novo objeto emprestado..."
                      required
                    />
                    <label htmlFor="email-quem-pegou">
                      Qual o e-mail de quem pegou?
                    </label>
                    <input
                      name="email-quem-pegou"
                      type="email"
                      placeholder="Digite e-mail de quem pegou o novo objeto emprestado..."
                    />
                    <label htmlFor="celular-quem-pegou">
                      Qual o número de celular de quem pegou? <span>*</span>
                    </label>
                    <input
                      name="celular-quem-pegou"
                      type="text"
                      placeholder="Digite celular de quem pegou o novo objeto emprestado..."
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <ButtonSubmit>EMPRESTAR</ButtonSubmit>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    return (
      <AddButtonContainer>
        <button className="add-button" onClick={openModal}>
          <ImPlus />
        </button>
      </AddButtonContainer>
    );
  }
}
