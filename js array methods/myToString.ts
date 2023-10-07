function myToString<T>(arr: T[]): string {
  let currString: string = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === undefined) {
      currString += arr[i];
      return currString;
    }

    currString += arr[i] + ",";
  }

  return currString;
}
