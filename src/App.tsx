import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./style/global";
import { Header } from "./components/Header/header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from "react-modal";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const handleOpenNewTransactionModal = () =>
    setIsNewTransactionModalOpen(true);
  const handleCloseNewTransactionModal = () =>
    setIsNewTransactionModalOpen(false);

  Modal.setAppElement("#root");

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
