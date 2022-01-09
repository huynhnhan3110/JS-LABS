function createLinkedList() {
    let head = null;

    function insertItem(newItem) {
        const newNode = {
            data: newItem,
            next: null,
        }
        if(head == null) {
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
    }

    function printList() {
        if(head == null) return;
        let currentItem = head;
        while(currentItem != null) {
            console.log(currentItem.data);
            currentItem = currentItem.next;
        }
    }
    return {
        insertItem,
        printList,
    }
}
const newLinkedList = createLinkedList();
newLinkedList.insertItem(5);
newLinkedList.insertItem(4);
newLinkedList.insertItem(3);
newLinkedList.insertItem(2);
newLinkedList.insertItem(1);
newLinkedList.printList()