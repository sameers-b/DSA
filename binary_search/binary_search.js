var binarySearch = function (arr, find) {
  var start = 0,
    last = arr.length - 1;
  while (start <= last) {
    var mid = Math.floor((start + last) / 2);
    if (arr[mid] === find) {
      return mid;
    } else if (arr[mid] > find) {
      last = mid - 1;
    } else if (arr[mid] < find) start = mid + 1;
  }
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
