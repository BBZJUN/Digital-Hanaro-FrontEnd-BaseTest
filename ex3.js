Array.prototype.sortBy = function (prop) {
  const props = prop.split(',').map(prop => {
    const [key, direction = 'asc'] = prop?.split(':');
    return { key, direction: direction.toLowerCase() === 'desc' ? -1 : 1 };
  });

  return this.sort((a, b) => {
    for (const { key, direction } of props) {
      if (a[key] === b[key]) continue;
      return (a[key] < b[key] ? -direction : direction);
    }
  });
};