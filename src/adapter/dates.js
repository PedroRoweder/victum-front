import { format } from "date-fns";

export const formatDate = (timestamp) => {
  if (timestamp) {
    const formattedDate = format(new Date(timestamp), "dd/MM/yyyy 'às' HH:mm");
    return formattedDate;
  }

  return timestamp;
};
