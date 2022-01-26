const fetchItems = require("../async");

describe("Async", () => {
  it("async-done", (done) => {
    fetchItems().then((data) => {
      expect(data).toEqual({ item: "Milk", Price: 2000 });
      done();
    });
  });
  // done을 사용하면 6초 정도 테스트 시간이 소요됨

  it("async-return", () => {
    return fetchItems().then((data) => {
      expect(data).toEqual({ item: "Milk", Price: 2000 });
    });
  });

  it("async-await", async () => {
    const product = await fetchItems();
    expect(product).toEqual({ item: "Milk", Price: 2000 });
  });

  it("async-resolves", () => {
    return expect(fetchItems()).resolves.toEqual({ item: "Milk", Price: 2000 });
  });

  it("async-reject", () => {
    return expect(fetchItems("error")).rejects.toBe("network error");
  });
});
