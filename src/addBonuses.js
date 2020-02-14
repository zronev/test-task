const addBonuses = (comediesNumber, { audience }) => {
  let bonus = Math.max(audience - 30, 0);
  if (comediesNumber && comediesNumber % 10 === 0) 
    bonus += Math.floor(audience / 5);

  return bonus;
};

module.exports = { addBonuses };
