function buildCategoryMapV1(categoryList) {
  if (!Array.isArray(categoryList) || categoryList.length === 0) return Map();

  return categoryList.reduce((map, category) => {
    map[category.id] = category;
    return map;
  }, {});
}
function buildCategoryMapV2(categoryList) {
  if (!Array.isArray(categoryList) || categoryList.length === 0) return new Map();

  const map = new Map();
  categoryList.forEach((category) => {
    map.set(category.id, category);
  });
  return map;
}

describe('buildCategoryMapV1', () => {
  const categoryList = [
    { id: 1, name: 'iphone' },
    { id: 2, name: 'macbook' },
  ];
  expect(buildCategoryMapV1(categoryList)).toEqual({
    1: { id: 1, name: 'iphone' },
    2: { id: 2, name: 'macbook' },
  });
});
describe('buildCategoryMapV2', () => {
  const categoryList = [
    { id: 1, name: 'iphone' },
    { id: 2, name: 'macbook' },
  ];
  expect(buildCategoryMapV2(categoryList)).toEqual({
    1: { id: 1, name: 'iphone' },
    2: { id: 2, name: 'macbook' },
  });
});
