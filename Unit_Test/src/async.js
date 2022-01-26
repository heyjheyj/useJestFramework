function fetchItems(error) {
  if (error === "error") {
    return Promise.reject("network error");
  }
  return Promise.resolve({ item: "Milk", Price: 2000 });
}

module.exports = fetchItems;
