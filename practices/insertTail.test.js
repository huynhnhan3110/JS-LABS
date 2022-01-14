import { createLinkedList } from './insertTail';
describe('insertBeforePosition(data, position)', () => {
  it('should insert head if position <= 0', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertBeforePosition(5, 1);
    numberLinkedList.insertBeforePosition(10, 2);
    numberLinkedList.insertBeforePosition(15, 3);
    const head = numberLinkedList.insertBeforePosition(0, -1);
    expect(createLinkedList().insertBeforePosition(5, -1)).toEqual({ data: 5, next: null });
    expect(createLinkedList().insertBeforePosition(5, 0)).toEqual({ data: 5, next: null });
    expect(head).toEqual({
      data: 0,
      next: {
        data: 5,
        next: {
          data: 10,
          next: {
            data: 15,
            next: null,
          },
        },
      },
    });
  });

  it('should insert tail if position >= list size', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertBeforePosition(5, -1);
    const head = numberLinkedList.insertBeforePosition(10, 5);

    expect(head).toEqual({ data: 5, next: { data: 10, next: null } });
  });

  it('should insert before position if  0 < position < size', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertBeforePosition(5, 1);
    numberLinkedList.insertBeforePosition(10, 2);
    numberLinkedList.insertBeforePosition(15, 3);
    const head = numberLinkedList.insertBeforePosition(0, 1);
    expect(head).toEqual({
      data: 5,
      next: {
        data: 0,
        next: {
          data: 10,
          next: {
            data: 15,
            next: null,
          },
        },
      },
    });
  });
});
