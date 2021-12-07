import Title from "../../components/Title/Title.jsx";
import SubTitle from "../../components/SubTitle/SubTitle.jsx";
import ListLentItemLent from "../../components/ListComponents/ListLent/ListLentItemLent.jsx";
import ListLateItemLent from "../../components/ListComponents/ListLent/ListLateItemLent.jsx";
import LendModal from "../../components/Modals/LendPageModal.jsx";
import { Container } from "./Lent.js";
import SortDropDown from "../../components/SortDropDown/SortDropDown.jsx";
export default function Lent() {
  return (
    <Container>
      <div className="title">
        <Title>EMPRESTEI</Title>
      </div>

      <div className="container">
        <div className="left-content">
          <div className="left-content-header">
            <SubTitle>DEVOLUÇÕES ATRASADAS</SubTitle>
            <SortDropDown/>
          </div>
          <ListLateItemLent />
        </div>
        <div className="right-content">
          <div className="right-content-header">
            <SubTitle>LISTA DE EMPRÉSTIMOS</SubTitle>
            <SortDropDown/>
          </div>
          <ListLentItemLent />
        </div>
      </div>
      <LendModal />
    </Container>
  );
}
