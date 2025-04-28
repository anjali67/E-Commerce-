export const getTotalPrice = (item, quantities) => {
    const quantityData = quantities[item.id];
    return quantityData ? quantityData.totalPrice : item.price;
  };

  export const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };