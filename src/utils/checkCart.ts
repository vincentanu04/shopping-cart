export const numberCartItems = (cart) => {
    let numberOfItems = 0;
    for (const key in cart) {
        numberOfItems += cart[key].quantity;
    }
    return numberOfItems;
}

export const isCartEmpty = (cart) => {
    return numberCartItems(cart) === 0;
}