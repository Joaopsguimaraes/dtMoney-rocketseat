import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/header";
import { GlobalStyle } from "./style/global";
import Modal from "react-modal";
import { useState } from "react";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const handleOpenNewTransactionModal = () =>
    setIsNewTransactionModalOpen(true);
  const handleCloseNewTransactionModal = () =>
    setIsNewTransactionModalOpen(false);

  Modal.setAppElement("#root");

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
