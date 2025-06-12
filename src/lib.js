export function capitalize(inputStr) {
  const splitStr = inputStr.split("-");
  const capitalizeStr = splitStr.map(str => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase();
  });
  const joinStr = capitalizeStr.join("-");
  return joinStr;
}

export function filterByCategory(menu, category) {
  return menu.filter(item => item.category === category);
}

export function filterBySearch(menu, searchTerm) {
  return menu.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
}

export function updateOrderData(prev, item) {
  const orderItems = prev.orderItems;
  const itemId = item.id;
  // Check if same item has been ordered before
  const ordersWithId = orderItems.filter(item => item.id === itemId);
  if (ordersWithId.length > 0) {
    // Find the order item to update and add the count
    const updatedOrderItems = orderItems.map(curItem => {
      if (curItem.id === itemId) { // Check if item is the one we need to update
        const updatedItem = {
          ...curItem,
          count: curItem.count + 1,
        }
        return updatedItem
      } else return curItem;
    });
    // Return updated order items
    return {
      ...prev,
      orderItems: updatedOrderItems,
    }
  } else { // Item has not been ordered before
    // Add count to item and add it to order items
    const expandedItem = {
      ...item,
      count: 1,
    }
    return {
      ...prev,
      orderItems: [...orderItems, expandedItem],
    }
  }
}

export function updateCountOrder(orderItems, itemId, newCount) {
  return orderItems?.map(i => i.id === itemId ? ({...i, count: newCount}) : i)
}

export function countOrders(orderItems) {
  let count = 0;
  orderItems.forEach(item => {
    count = count + item.count;
  });
  const rounded = Math.round(count * 100) / 100;
  return rounded;
}

export function sumPrice(orderItems) {
  let price = 0;
  orderItems.forEach(item => price = price + (item.price * item.count));
  return price;
}