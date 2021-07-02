import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import {
  Table,
  TableRow,
  TableHead,
  TableData,
  TableHeader,
  TableButtons,
  TableContainer,
  EmptyTableMessage,
} from "./styles";

// eslint-disable-next-line no-unused-vars
const TableComponent = ({ columns, data, onRowClick }) => {
  const [dataComponent, setDataComponent] = useState([]);
  const [headerComponent, setHeaderComponent] = useState([]);

  // Generating rows
  useEffect(() => {
    const component = data?.map((row) => (
      <TableRow key={row.guid}>
        {columns?.map(({ value, isComponent }) => {
          if (typeof value === "string") {
            return (
              <TableData
                onClick={() => onRowClick(row)}
                key={`${row[value]}_${Math.random()}}`}
              >
                {row[value]}
              </TableData>
            );
          }

          if (typeof value === "function" && isComponent) {
            return (
              <TableButtons key={`${value(row)}_${Math.random()}}`}>
                {value(row)}
              </TableButtons>
            );
          }

          if (typeof value === "function") {
            return (
              <TableData
                onClick={() => onRowClick(row)}
                key={`${value(row)}_${Math.random()}}`}
              >
                {value(row)}
              </TableData>
            );
          }

          return undefined;
        })}
      </TableRow>
    ));
    setDataComponent(component);
  }, [data, columns, onRowClick]);

  useEffect(() => {
    const headers = (
      <TableRow>
        {columns?.map((column) => (
          <TableHeader key={column.value}>{column.header}</TableHeader>
        ))}
      </TableRow>
    );

    setHeaderComponent(headers);
  }, [columns]);

  return (
    <TableContainer>
      <Table>
        <TableHead>{headerComponent}</TableHead>
        <tbody style={{ position: "relative" }}>{dataComponent}</tbody>
      </Table>
      {dataComponent.length < 1 && (
        <EmptyTableMessage>Nenhum dado encontrado</EmptyTableMessage>
      )}
    </TableContainer>
  );
};

TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
};

TableComponent.defaultProps = {
  onRowClick: () => {},
};

export default TableComponent;
