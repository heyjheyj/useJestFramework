const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client");

// mock을 남용하는 사례에 대해 알아보기
// unit test를 위해 네트워크 의존성 등은 제외시켜야 -> mock을 이용

describe("ProductService", () => {
  // ProductService에서 ProductClient를 통해 어떻게 데이터를 받아오는지
  // mock을 이용한 테스트 코드를 작성해 의존성을 없앰
  // ProductClient가 네트워크 통신이 되지 않아 문제가 생겨도
  // 현재 ProductService에 있는 테스트하고자 하는 로직만 분리해서 테스트 할 수 있음(unit test)

  const fetchItems = jest.fn(async () => [
    {
      item: "milk",
      available: true
    },
    {
      item: "banana",
      available: false
    }
  ]);
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    // config file에서 clearmock: false로 해뒀다면
    // fetchItems.mockClear();
    // ProductClient.mockClear(); 를 해줘야..
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([
      {
        item: "milk",
        available: true
      }
    ]);
    expect(items.length).toBe(1);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
