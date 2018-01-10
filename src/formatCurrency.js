const formatCurrency = (number) => (
  number.toLocaleString('en-US', {style: "currency", currency: "USD"})
);

export default formatCurrency;
