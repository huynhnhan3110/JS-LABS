function createLinkedList() {
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
  //   function insertTail(data) {
  //     const newNode = {
  //       data: data,
  //       next: null,
  //     };
  //     if (head == null) {
  //       head = newNode;
  //       return;
  //     }

  //     let tail = head;
  //     while (tail.next != null) {
  //       tail = tail.next;
  //     }

  //     tail.next = newNode;
  //     newNode.next = null;
  //   }

  function insertBeforePosition(data, position) {
    const newNode = {
      data: data,
      next: null,
    };
    if (head == null) {
      head = newNode;
    }
    if (position <= 0) {
      head = newNode;
      return head;
    }
    if (position >= getSize()) {
      let tail = head;
      while (tail.next != null) {
        tail = tail.next;
      }

      tail.next = newNode;
      newNode.next = null;
      return head;
    }

    if (position > 0 && position < getSize()) {
      let current = head;
      let indx = 1;
      while (current.next != null) {
        let pre = current.next;

        if (indx === position) {
          newNode.next = pre;
          current.next = newNode;
        }
        current = current.next;
        indx++;
      }
      return head;
    }

    return head;
  }

  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      console.log(current.data);

      current = current.next;
    }
  }

  return { getSize, insertBeforePosition, printList };
}
const newList = createLinkedList();
newList.insertBeforePosition(110, 1);
newList.printList();
