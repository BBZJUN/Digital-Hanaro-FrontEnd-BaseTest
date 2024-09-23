import { ArrayList } from './ex10';
import assert from 'assert';

console.log('🚀  ArrayList:', ArrayList);

async function testArrayList() {
  const alist = new ArrayList<number>(1, 2);

  // toString() 테스트
  assert.strictEqual(alist.toString(), 'ArrayList(2) { value: 1, rest: { value: 2, rest: undefined } }');

  // add() 테스트
  alist.add(3);
  assert.strictEqual(alist.toString(), 'ArrayList(3) { value: 1, rest: { value: 2, rest: { value: 3, rest: undefined } } }');

  alist.add(5, 1);
  assert.strictEqual(alist.toString(), 'ArrayList(4) { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3, rest: undefined } } } }');

  // remove() 테스트
  alist.remove(2);
  assert.strictEqual(alist.toString(), 'ArrayList(3) { value: 1, rest: { value: 5, rest: { value: 3, rest: undefined } } }');

  // add() 테스트
  alist.add(22, 1);
  assert.strictEqual(alist.toString(), 'ArrayList(4) { value: 1, rest: { value: 22, rest: { value: 5, rest: { value: 3, rest: undefined } } } }');

  alist.add(33, 1);
  assert.strictEqual(alist.toString(), 'ArrayList(5) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 5, rest: { value: 3, rest: undefined } } } } }');

  // toString() 테스트
  assert.strictEqual(alist.toString(), 'ArrayList(5) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 5, rest: { value: 3, rest: undefined } } } } }');

  // set() 테스트
  alist.set(1, 300);
  assert.strictEqual(alist.toString(), 'ArrayList(5) { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 5, rest: { value: 3, rest: undefined } } } } }');

  // get() 및 size 테스트
  assert.strictEqual(alist.get(2), 22);
  assert.strictEqual(alist.size, 5);

  // indexOf() 테스트
  assert.strictEqual(alist.indexOf(300), 1);

  // contains() 테스트
  assert.strictEqual(alist.contains(300), true);
  assert.strictEqual(alist.contains(301), false);

  // isEmpty 및 peek 테스트
  assert.strictEqual(alist.isEmpty, false);
  assert.strictEqual(alist.peek, 3);

  // toArray() 테스트
  assert.deepStrictEqual(alist.toArray(), [1, 300, 22, 5, 3]);

  // iterator() 테스트
  assert.deepStrictEqual(alist.iterator().next(), { value: 1, done: false});

  // clear() 테스트
  alist.clear();
  assert.strictEqual(alist.toString(), 'all clear');
}

testArrayList();
