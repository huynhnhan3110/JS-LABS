// export function sumCart(cartItemList) {
//     if(!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

//     return cartItemList.reduce((sumOfCart, item) => {
//         return sumOfCart + (item.price * item.quanlity);
//     },0);
// }
export function sumCart(cartItemList) {
    if(!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

    let sumOfCart = 0;
    for (let i = 0; i < cartItemList.length; i++) {
        const item = cartItemList[i];
        const itemTotal = item.price * item.quanlity;
        sumOfCart += itemTotal;
    }
    return sumOfCart;
}
