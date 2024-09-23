export const randTime = <T>(val: T): Promise<T> =>
  new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));


export function promiseAll<T>(promises: (Promise<T> | T)[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    if (!promises?.length) reject(new Error('Promise를 전달하세요!'));

    const results: T[] = [];
    let cntToRun = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
          if ((cntToRun -= 1) === 0) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

export function promiseAllSettled<T>(
  promises: (Promise<T> | T)[]
): Promise<Array<{ status: 'fulfilled' | 'rejected'; value?: T; reason?: any }>> {
  const results: Array<{ status: 'fulfilled' | 'rejected'; value?: T; reason?: any }> = [];
  
  return new Promise((resolve) => {
    let endPromise = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = { status: 'fulfilled', value };
        })
        .catch(reason => {
          results[index] = { status: 'rejected', reason };
        })
        .finally(() => {
          endPromise += 1;
          if (endPromise === promises.length) {
            resolve(results);
          }
        });
    });
  });
}