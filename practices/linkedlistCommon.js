function createLinkedList() {
    let head = null;

    function getHead() {
        return head;
    }
    function getTail() {
        if(head == null) return null;
        let tail = head;
        while(tail.next != null) {
            tail = tail.next;
        }
        return tail;
    }
    function getSize() {
        if(head == null) return null;
        let tail = head;
        let count = 0;
        while(tail != null) {
            count++;
            tail = tail.next;
        }
        return count;
    }

    function findIndexByData(data) {
        if(head == null) return -1;
        let node = head;
        let i = 0;
        while(node != null) {
            if(node.data === data) return i;
            node = node.next;
            i++;
        }
        return -1;
    }

    function findDataByCallBack(callback) {
        if(head == null) return undefined;
        let node = head;
        let i = 0;
        while(node != null) {
            if(callback(node.data,i)) return node.data;
            node = node.next;
            i++;
        };
        return undefined;
    }
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
        getHead,
        getTail,
        getSize,
        findIndexByData,
        findDataByCallBack,
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
console.log('Head: ',newLinkedList.getHead()); // --> 1
console.log('Tail: ',newLinkedList.getTail()); // --> 5
console.log('Size: ',newLinkedList.getSize()); // --> 5
console.log(newLinkedList.findIndexByData(5)); // --> 1
console.log(newLinkedList.findDataByCallBack((x, idx) => x % 2 === 0)); // --> 2
console.log(newLinkedList.findDataByCallBack((x, idx) => idx === 1)); // --> 2
newLinkedList.printList()