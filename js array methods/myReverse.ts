function myReverse<T>(arr: T[]): T[] {
  const tmpArr: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    tmpArr.push(arr[i]);
  }

  return tmpArr;
}

const aaa = myReverse([1, 2, 6, 9, 53, 3]);
console.log(aaa);
