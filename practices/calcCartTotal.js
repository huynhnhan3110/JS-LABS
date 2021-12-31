export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
  return cartItemList.reduce((sum, item) => {
    sum += item.quantity * item.product.price;
    return sum;
  }, 0);
}
