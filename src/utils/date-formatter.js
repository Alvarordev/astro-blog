const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC", // Establecer la zona horaria, puedes cambiarla según sea necesario
    locale: "en-US",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export default formatDate;
