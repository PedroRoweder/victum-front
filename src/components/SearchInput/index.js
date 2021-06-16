import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Assets
import search_icon from "~/assets/icons/search.svg";

// Styles
import { Container, Input } from "./styles";

const SearchInput = ({ data, setFilteredData }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      const filtered = data.filter(
        (row) => row.SKU.includes(search) || row.desc.includes(search)
      );

      setFilteredData(filtered);
      return;
    }

    setFilteredData(undefined);
  }, [search]);

  return (
    <Container>
      <Input
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
        maxLength={15}
      />
      <img src={search_icon} alt="" />
    </Container>
  );
};

SearchInput.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default SearchInput;
