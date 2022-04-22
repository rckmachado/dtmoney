import { Header } from "./components/Header";
import Modal from 'react-modal';
import { Dashboard } from "./Dashboard";
import { GlobalStyle } from "./styles/global";
import ReactModal from "react-modal";
import { useState } from "react";

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />

        <Modal isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
                >

                    <h2>Cadastrar Transação</h2>
                </Modal>

        <GlobalStyle />
    </>
  );
}