function createBTS(numberList) {
  let root = null;

  if (Array.isArray(numberList) || numberList.length > 0) {
    numberList.forEach((num) => {
      root = insert(root, num);
    });
  }
  function insert(root, key) {
    const newNode = {
      key: key,
      left: null,
      right: null,
    };
    // base  case
    if (root == null) return newNode;
    if (root.key == key) return root;
    if (key > root.key) {
      root.right = insert(root.right, key);
    } else {
      root.left = insert(root.left, key);
    }

    return root;
  }

  return {
    root,
    insert,
  };
}
const bts = createBTS([5, 2, 6, 1, 7, 1]);
console.log(bts.root);
