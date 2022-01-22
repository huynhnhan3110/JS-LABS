function createQueue() {
  const queue = [];
  function getSize() {
    return queue.length;
  }
  function enQueue(num) {
    queue.push(num);
  }
  function deQueue() {
    return queue.shift();
  }
  function getFront() {
    return queue.length > 0 ? queue[0] : undefined;
    // return queue[0];
  }
  function getBack() {
    return queue.length > 0 ? queue[queue.length - 1] : undefined;
    // return queue[queue.length - 1];
  }

  return { getSize, enQueue, deQueue, getBack, getFront };
}

describe('createQueue', () => {
  it('all in one', () => {
    const numberLists = createQueue();
    expect(numberLists.getSize()).toBe(0);
    expect(numberLists.getFront()).toBeUndefined();
    expect(numberLists.getBack()).toBeUndefined();

    numberLists.enQueue(5);
    expect(numberLists.getSize()).toBe(1);
    expect(numberLists.getFront()).toBe(5);
    expect(numberLists.getBack()).toBe(5);

    numberLists.enQueue(15);
    expect(numberLists.getSize()).toBe(2);
    expect(numberLists.getFront()).toBe(5);
    expect(numberLists.getBack()).toBe(15);

    const five = numberLists.deQueue();
    expect(five).toBe(5);
    expect(numberLists.getSize()).toBe(1);
    expect(numberLists.getFront()).toBe(15);
    expect(numberLists.getBack()).toBe(15);

    const fifteen = numberLists.deQueue();
    expect(fifteen).toBe(15);
    expect(numberLists.getSize()).toBe(0);
    expect(numberLists.getFront()).toBeUndefined();
    expect(numberLists.getBack()).toBeUndefined();
  });
});
