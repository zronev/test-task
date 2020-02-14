const { addBonuses } = require("./addBonuses");

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
  expect(addBonuses(0, testTragedyWithBigAudience)).toBe(25);
  expect(addBonuses(0, testTragedyWithSmallAudience)).toBe(0);
});

const testComedyWithBigAudience = {
  playId: "Отелло",
  audience: 48,
  type: "comedy"
}

const testComedyWithSmallAudience = {
  playId: "Отелло",
  audience: 20,
  type: "comedy"
}

test("should return the correct number if a comedy is received for input", () => {
  expect(addBonuses(0, testComedyWithBigAudience)).toBe(18);
  expect(addBonuses(0, testComedyWithSmallAudience)).toBe(0);
  expect(addBonuses(10, testComedyWithBigAudience)).toBe(27);
  expect(addBonuses(10, testComedyWithSmallAudience)).toBe(4);
});
