const countAmount = ({type, audience}) => {
  switch (type) {
    case "tragedy":
      thisAmount = 40000;
      if (audience > 30) {
        thisAmount += 1000 * (audience - 30);
      }
      return thisAmount;
    case "comedy":
      thisAmount = 30000;
      if (audience > 20) {
        thisAmount += 10000 + 500 * (audience - 20);
      }
      thisAmount += 300 * audience;
      return thisAmount;
    default:
      throw new Error(`неизвестный тип: ${type}`);
  }
};

module.exports = { countAmount };
