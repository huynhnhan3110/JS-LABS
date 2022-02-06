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
  function getHeight() {
    const height = getMaxNodesCount(root);
    return height > 0 ? height - 1 : 0;
  }
  function printNodesAtLevel(node, level) {
    if (node == null) return;
    if (level === 0) {
      console.log(node.key);
    }
    printNodesAtLevel(node.left, level - 1);
    printNodesAtLevel(node.right, level - 1);
  }
  function bfs() {
    const height = getHeight();
    for (let i = 0; i <= height; i++) {
      printNodesAtLevel(root, i);
    }
  }
  function inOrder(node) {
    if (node == null) return;

    inOrder(node.left);
    console.log(node.key);
    inOrder(node.right);
  }
  function preOrder(node) {
    if (node == null) return;

    console.log(node.key);
    preOrder(node.left);
    preOrder(node.right);
  }
  function postOrder(node) {
    if (node == null) return;

    postOrder(node.left);
    postOrder(node.right);
    console.log(node.key);
  }
  function remove(node, key) {
    if (node == null) return null;
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }
    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }

    // key === node.key
    if (node.left == null && node.right == null) return null;

    // one child
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }
    // two child

    const minNode = findMin(node.right);
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);
    return node;
  }
  return {
    root,
    insert,
    findMin,
    search,
    getMaxNodesCount,
    getHeight,
    bfs,
    inOrder,
    preOrder,
    postOrder,
    remove,
  };
}
const bts = createBTS([20, 10, 32, 5, 30, 39, 8, 40]);
console.log(bts.root);
// console.log(bts.findMin(bts.root));
// console.log(bts.search(bts.root, 5));
// console.log(bts.getMaxNodesCount(bts.root));
// console.log(bts.getHeight(bts.root));
// bts.bfs();
bts.remove(bts.root, 32);
bts.bfs();
