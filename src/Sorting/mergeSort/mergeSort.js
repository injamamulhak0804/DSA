function Merge(arr, low, mid, high){
    let temp = []
    let left = low;
    let right = mid + 1;
    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left])
            left++
        }else{
            temp.push(arr[right])
            right++
        }
    }
    while(left <= mid){
        temp.push(arr[left])
        left++
    }
    while(right <= high){
        temp.push(arr[right])
        right++
    }
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
}
const MergeSort = (arr, low, high) =>{
    if(low >= high) return
    let mid = Math.floor((low + high ) / 2)
    MergeSort(arr, low, mid)
    MergeSort(arr, mid + 1, high)
    Merge(arr, low, mid, high)
    return arr
}
console.log(MergeSort([1,3,2,1,2], 0, 4));
