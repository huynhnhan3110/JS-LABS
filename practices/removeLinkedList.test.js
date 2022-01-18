import { createLinkedList } from './removeLinkedList';
describe('removeHead', () => {
  it('should return null if list is empty', () => {
    const numberLinkedList = createLinkedList();
    const head = numberLinkedList.removeHead();
    expect(head).toBeNull();
  });
  it('should retun null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertTail(1);
    const head = numberLinkedList.removeHead();
    expect(head).toBeNull();
  });
  it('should return one item if list has two items', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertTail(1);
    numberLinkedList.insertTail(2);
    const head = numberLinkedList.removeHead();
    expect(head).toEqual({ data: 2, next: null });
  });
});
describe('removeTail()', () => {
  it('should return null if list is empty', () => {
    const numberLinkedList = createLinkedList();
    const head = numberLinkedList.removeTail();
    expect(head).toBeNull();
  });

  it('should return null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertTail(1);
    const head = numberLinkedList.removeTail();
    expect(head).toBeNull();
  });

  it('should return one item if list has two items', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertTail(1);
    numberLinkedList.insertTail(2);
    const head = numberLinkedList.removeTail();
    expect(head).toEqual({ data: 1, next: null });
  });
});

describe('removeByPosition()', () => {
  it('should return null if list is empty', () => {
    const numberLinkedList = createLinkedList();
    const head = numberLinkedList.removeByPosition(12);
    expect(head).toBeNull();
  });
  it('should return null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    const head = numberLinkedList.removeByPosition(2);
    expect(head).toBeNull();
  });

  it('should return one number if list has two numbers', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertTail(1);
    numberLinkedList.insertTail(2);
    const head = numberLinkedList.removeByPosition(-1);
    expect(head).toEqual({ data: 2, next: null });
  });
  it('should return one number if list has two numbers', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertTail(1);
    numberLinkedList.insertTail(2);
    const head = numberLinkedList.removeByPosition(2);
    expect(head).toEqual({ data: 1, next: null });
  });

  it('should return expect numbers if list has multiple numbers', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertTail(1);
    numberLinkedList.insertTail(2);
    numberLinkedList.insertTail(3);
    numberLinkedList.insertTail(4);
    const head = numberLinkedList.removeByPosition(1);
    expect(head).toEqual({ data: 1, next: { data: 3, next: { data: 4, next: null } } });
  });
});
