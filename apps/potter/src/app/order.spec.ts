import { basic_price, Order } from './order';

describe('Order', () => {
  let order: Order;

  beforeEach(() => {
    order = new Order();
  });

  it('should create an instance', () => {
    expect(order).toBeTruthy();
  });

  it('order basic', () => {
    expect(order.price).toBe(0);
  })

  it('order basic - b0 * 1', () => {
    buyBooks([0]);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - b1 * 1', () => {
    buyBooks([1]);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - b2 * 1', () => {
    buyBooks([2]);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - b3 * 1', () => {
    buyBooks([3]);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - b4 * 1', () => {
    buyBooks([4]);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - multiple same books - b1 * 3', () => {
    buyBooks([1, 1, 1]);
    expect(order.price).toBe(basic_price * 3);
  })

  test('simple discounts - b0 * 1, b1 * 1', () => {
    buyBooks([0, 1]);
    expect(order.price).toBe(basic_price * 2 * 0.95);
  })

  test('simple discounts - b0 * 1, b2 * 1, b4 * 1', () => {
    buyBooks([0, 2, 4]);
    expect(order.price).toBe(basic_price * 3 * 0.9);
  })

  test('simple discounts - b0 * 1, b1 * 1, b2 * 1, b4 * 1', () => {
    buyBooks([0, 1, 2, 4]);
    expect(order.price).toBe(basic_price * 4 * 0.8);
  })

  test('simple discounts - b0 * 1, b1 * 1, b2 * 1, b3 * 1, b4 * 1', () => {
    buyBooks([0, 1, 2, 3, 4]);
    expect(order.price).toBe(basic_price * 5 * 0.75);
  })

  function buyBooks(books: Array<number>) {
    books.forEach((book: number) => {
      order.buy(book);
    })
  }

});
