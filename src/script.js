const { countAmount } = require("./countAmount");
const { addBonuses } = require("./addBonuses");

const statement = invoices => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Счет для ${invoices.customer}\n`;
  const format = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 2
  }).format;

  let comediesNumber = 0;
  for (let perf of invoices.performance) {
    const { playId, audience, type } = perf;

    let thisAmount = countAmount(perf);
    totalAmount += thisAmount;

    // Добавление бонусов
    // Дополнительный бонус за каждые 10 комедий
    if (type === "comedy") comediesNumber++;
    volumeCredits += addBonuses(comediesNumber, perf);

    // Внесение в счёт отдельно информации по каждой заказанной пьесе
    result += ` ${playId}: ${format(thisAmount)}`;
    result += ` (${audience} мест)\n`;
  }

  // Вывод строки счета
  result += `Итого с вас ${format(totalAmount)}\n`;
  result += `Вы заработали ${volumeCredits} бонусов\n`;
  return result;
};

module.exports = { statement };
