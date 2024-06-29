function calTotalPriceJS(product, quantity, discount){
    const priceWithoutDiscount = product.price * quantity;
    const discountAmt = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmt;
}