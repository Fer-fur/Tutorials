function calTotalPrice(
    product : {name: string; unitPrice: number;}, 
    quantity : number,
    discount : number
){
    const priceWithoutDiscount = product.unitPrice * quantity;
    const discountAmt = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmt;
}