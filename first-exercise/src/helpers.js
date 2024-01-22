const choice = (items) => {
  let itemIdx = Math.floor(Math.random() * items.length)
  return items[itemIdx];
}

const remove = (items, item) => {
  const idx = items.indexOf(item);

  if(idx !== -1) {
    return items.splice(idx, 1)[0]
  } else {
    return undefined;
  }
}

export { choice, remove }