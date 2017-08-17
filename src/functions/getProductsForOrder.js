const getProductsForOrder = (data, orderId) => {
  if (data == null || data.orders == null || data.id == null)
    throw new Error('Missing data or ID')
}

let productsArr = []
 const foundProduct = {
   orderId: orderId,
   userName: userName,
   price: price
 }
 for (let i = 0; i < data.orders.length; i++) {
   const currentProduct = data.orders[i]
   let orderId = orders.id
   let userName = users.id

   if (currentProduct.id === id) {
     foundProduct = currentProduct
   }
 }
 productsArr.push(foundProduct)
}
export default getProductsForOrder
