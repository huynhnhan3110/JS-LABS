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
  function findMin(node) {
    if (node == null) return null;
    let minNode = node;
    while (minNode.left != null) {
      minNode = minNode.left;
    }
    return minNode;
  }
  function search(node, key) {
    if (node == null) return null;
    if (key > node.key) return search(node.right, key);
    if (key < node.key) return search(node.left, key);

    return node;
  }

  function getMaxNodesCount(node) {
    if (node == null) return 0;
    const leftHeight = getMaxNodesCount(node.left);
    const rightHeight = getMaxNodesCount(node.right);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }
  function getHeight(node) {
    const height = getMaxNodesCount(node);
    return height > 0 ? height - 1 : 0;
  }
  return {
    root,
    insert,
    findMin,
    search,
    getMaxNodesCount,
    getHeight,
  };
}
const bts = createBTS([5, 2]);
console.log(bts.root);
console.log(bts.findMin(bts.root));
console.log(bts.search(bts.root, 5));
console.log(bts.getMaxNodesCount(bts.root));
console.log(bts.getHeight(bts.root));
