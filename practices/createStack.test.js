function createStack() {
  let stack = [];
  function getSize() {
    return stack.length;
  }
  function isEmpty() {
    return stack.length === 0;
  }

  function pop() {
    return stack.pop();
  }

  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }
  function push(num) {
    stack.push(num);
  }

  return { getSize, isEmpty, pop, getTop, push };
}

describe('createStack', () => {
  it('all in one', () => {
    const numberLists = createStack();
    expect(numberLists.getSize()).toBe(0);
    expect(numberLists.isEmpty()).toBe(true);
    expect(numberLists.getTop()).toBeUndefined();

    numberLists.push(5);
    expect(numberLists.getSize()).toBe(1);
    expect(numberLists.isEmpty()).toBe(false);
    expect(numberLists.getTop()).toBe(5);

    numberLists.push(15);
    expect(numberLists.getSize()).toBe(2);
    expect(numberLists.isEmpty()).toBe(false);
    expect(numberLists.getTop()).toBe(15);

    const fifteen = numberLists.pop();
    expect(fifteen).toBe(15);
    expect(numberLists.getSize()).toBe(1);
    expect(numberLists.isEmpty()).toBe(false);
    expect(numberLists.getTop()).toBe(5);

    const five = numberLists.pop();
    expect(five).toBe(5);
    expect(numberLists.getSize()).toBe(0);
    expect(numberLists.isEmpty()).toBe(true);
    expect(numberLists.getTop()).toBeUndefined();
  });
});
