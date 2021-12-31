export function filterProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.reduce((arrRS, item) => {
    if (item.price > 100000) arrRS.push(item);
    return arrRS;
  }, []);
}
