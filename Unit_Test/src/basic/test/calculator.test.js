const calculator = require("../calculator.js");

// describe로 비슷한 테스트 코드를 그룹화할 수 있음

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new calculator();
  });

  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    cal.add(3);
    expect(cal.value).toBe(12);
  });

  it("add should throw an error if when cal.value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtrack", () => {
    cal.set(6);
    cal.subtract(3);
    expect(cal.value).toBe(3);
  });

  it("multiple", () => {
    cal.set(2);
    cal.multiply(3);
    expect(cal.value).toBe(6);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("divide", () => {
      cal.set(12);
      cal.divide(3);
      expect(cal.value).toBe(4);
    });
  });
});
