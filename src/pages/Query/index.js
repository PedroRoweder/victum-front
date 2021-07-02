import React, { useEffect, useState } from "react";

// Components
import Table from "~/components/Table";
import MessageModal from "~/components/Modal/Message";

// Adapters
import { showToast } from "~/adapter/toast";
import { formatDate } from "~/adapter/dates";
import ActionButton from "../../components/ActionButton";

// Assets
import bin from "~/assets/icons/bin.svg";
import pencil from "~/assets/icons/pencil.svg";

// Styles
import { Container } from "./styles";
import Parts from "~/API/Parts";
import SearchInput from "~/components/SearchInput";

const Query = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(undefined);
  const [reload, setReload] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const fetchData = async () => {
    const response = await Parts.list();
    setData(response?.data?.parts);
  };

  const reloadData = () => setReload(!reload);

  useEffect(() => {
    fetchData();
  }, [reload]);

  const handleCloseDeleteModal = () => {
    setSelectedRow();
    setOpenDeleteModal(false);
  };

  const handleDeletePart = async () => {
    const response = await Parts.delete(selectedRow.SKU);
    reloadData();
    handleCloseDeleteModal();
    if (response?.status === 200) {
      showToast("Peça deletada com sucesso!", "success");
    } else {
      showToast("Algo deu errado.", "error");
    }
  };

  // Table headers and data identifiers
  const COLUMNS = [
    { header: "SKU", value: "SKU" },
    { header: "Name", value: "desc" },
    {
      header: "Data de Criação",
      value: ({ created_at }) => formatDate(created_at),
    },
    {
      header: "",
      isComponent: true,
      value: (row) => [
        <ActionButton
          color="var(--primary)"
          icon={pencil}
          onClick={() => setOpenDeleteModal(true)}
        />,
        <ActionButton
          color="var(--red)"
          icon={bin}
          onClick={() => {
            setSelectedRow(row);
            setOpenDeleteModal(true);
          }}
        />,
      ],
    },
  ];

  return (
    <Container>
      <SearchInput data={data} setFilteredData={setFilteredData} />
      <Table columns={COLUMNS} data={filteredData || data} />
      {/* Delete Confirmation Modal */}
      <MessageModal
        isOpen={openDeleteModal}
        handleClose={() => handleCloseDeleteModal()}
        handleCancel={() => handleCloseDeleteModal()}
        handleConfirm={() => handleDeletePart()}
      >
        <p>Deseja realmente deletar a peça:</p>
        <p>
          {selectedRow?.SKU} - {selectedRow?.desc}
        </p>
      </MessageModal>
    </Container>
  );
};

export default Query;
