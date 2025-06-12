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