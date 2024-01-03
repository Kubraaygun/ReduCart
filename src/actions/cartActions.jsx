// Sepete urun eklemek icin aksiyon olusturma
export const addToCart = (product) => {
    return { type: "ADD_TO_CART", payload: product };
  };
  
  //Sepetten urun cikarmak icin aksiyon olusturma
  export const removeFromCart = (productId) => {
    return { type: "REMOVE_FROM_CART", payload: productId };
  };
  