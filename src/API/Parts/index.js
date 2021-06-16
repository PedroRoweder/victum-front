import api from "~/services/api";

const Parts = {
  list: async () => {
    const response = await api.get("/parts");
    return response;
  },
  delete: async (SKU) => {
    const response = await api.delete(`/parts/${SKU}`);
    return response;
  },
};

export default Parts;
