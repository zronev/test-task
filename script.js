function statement(invoices) {
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
    let thisAmount = 0;
    switch (perf.type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        comediesNumber++;
        break;
      default:
        throw new Error(`неизвестный тип: ${play.type}`);
    }

    // Добавление бонусов
    volumeCredits += Math.max(perf.audience - 30, 0);
    // Дополнительный бонус за каждые 10 комедий
    if (comediesNumber && comediesNumber % 10 === 0) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // Внесение в счёт отдельно информации по каждой заказанной пьесе
    result += ` ${perf.playId}: ${format(thisAmount)}`;
    result += ` (${perf.audience} мест)\n`;

    totalAmount += thisAmount;
  }

  // Вывод строки счета
  result += `Итого с вас ${format(totalAmount)}\n`;
  result += `Вы заработали ${volumeCredits} бонусов\n`;
  return result;
}
