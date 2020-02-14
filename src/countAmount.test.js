const { countAmount } = require("./countAmount");

const testTragedyWithBigAudience = {
  playId: "Гамлет",
  audience: 55,
  type: "tragedy"
};

const testTragedyWithSmallAudience = {
  playId: "Гамлет",
  audience: 20,
  type: "tragedy"
};

test("should return the correct number if a tragedy is received for input", () => {
  expect(countAmount(testTragedyWithBigAudience)).toBe(65000);
  expect(countAmount(testTragedyWithSmallAudience)).toBe(40000);
});

const testComedyWithBigAudience = {
  playId: "Отелло",
  audience: 40,
  type: "comedy"
};

const testComedyWithSmallAudience = {
  playId: "Отелло",
  audience: 15,
  type: "comedy"
};

test("should return the correct number if a comedy is received for input", () => {
  expect(countAmount(testComedyWithBigAudience)).toBe(62000);
  expect(countAmount(testComedyWithSmallAudience)).toBe(34500);
});

const testWrongTragedy = {
  playId: "Дядя Ваня",
  audience: 60,
  type: "drama"
};
const testAnswerWithWrongPlay = new Error("неизвестный тип: drama");

test("should return the Error when a play has a wrong type", () => {
  expect(() => {
    countAmount(testWrongTragedy);
  }).toThrow(testAnswerWithWrongPlay);
});
