import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  /* margin: 5px; */
  font-size: 16px;
  font-weight: 500;
  border-collapse: collapse;
  max-height: 80vh;

  tbody > tr:nth-child(odd) {
    background-color: #f8f8f8;
  }

  tbody > tr:nth-child(even) {
    background-color: #fff;
  }

  tbody > tr {
    &:hover {
      filter: brightness(95%);
    }
  }
`;

export const TableRow = styled.tr``;

export const TableHead = styled.thead`
  top: 0;
  position: sticky;
  z-index: 2;
  background-color: white;
  outline: 1px solid black;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 15px;
  color: var(--gray);
  font-weight: 600;
  font-size: 16px;

  img {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const TableData = styled.td`
  color: var(--darkGray);
  padding: 0 10px;
  margin: 0px;
`;

export const TableButtons = styled.td`
  color: var(--darkGray);
  padding: 10px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const EmptyTableMessage = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  background-color: #f8f8f8;
  padding: 10px;
`;
