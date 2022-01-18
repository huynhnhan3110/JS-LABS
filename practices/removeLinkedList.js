export function createLinkedList() {
  let head = null;
  function getSize() {
    if (head == null) return -1;
    let current = head;
    let count = 0;
    while (current != null) {
      current = current.next;
      count++;
    }
    return count;
  }
  function insertHead(data) {
    const newNode = {
      data: data,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return;
    }
    newNode.next = head;
    head = newNode;
  }
  function removeHead() {
    if (head != null) {
      head = head.next;
    }
    return head;
  }
  function insertTail(data) {
    const newNode = {
      data: data,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return;
    }

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }

    tail.next = newNode;
  }
  function removeTail() {
    if (head == null) return null;
    if (head.next == null) return null;
    let prev = head;
    while (prev.next.next != null) {
      prev = prev.next;
    }
    prev.next = null;

    return head;
  }
  function insertBeforePosition(data, position) {
    const newNode = {
      data: data,
      next: null,
    };
    if (position <= 0 || head == null) {
      insertHead(data);
      return head;
    }

    let prev = head;
    let curr = head;
    let i = 0;

    while (curr != null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    newNode.next = curr;
    prev.next = newNode;
    return head;
  }
  function removeByPosition(position) {
    if (head == null) return null;
    if (head.next == null) return null;

    if (position >= getSize()) {
      removeTail();
    }
    if (position < 0) {
      removeHead();
    }
    let prev = head;
    let current = head;
    let i = 0;
    while (current.next != null && i < position) {
      prev = current;
      current = current.next;
      i++;
    }
    prev.next = current.next;

    return head;
  }
  function some(isValidFn) {
    if (head == null) return false;
    let current = head;
    while (current != null) {
      if (isValidFn(current.data)) return true;
      current = current.next;
    }
    return false;
  }
  function every(isValidFn) {
    if (head == null) return false;
    let current = head;
    while (current != null) {
      if (!isValidFn(current.data)) {
        return false;
      }
      current = current.next;
    }
    return true;
  }
  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      console.log(current.data);

      current = current.next;
    }
  }

  return {
    getSize,
    insertBeforePosition,
    printList,
    insertTail,
    removeHead,
    removeTail,
    removeByPosition,
    some,
    every,
  };
}
