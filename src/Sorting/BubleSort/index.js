const bubbleSort = (arr, n) => {
    for(let i = n; i >= 1; i--){
        let didSwap = 0
        for(let j = 0; j <= n-1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                didSwap = 1
            }
        }
        if(didSwap == 0) break
    }
    return arr
}
console.log(bubbleSort([234,12,56,22,45,12], 6))