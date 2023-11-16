function findDifference(nums1: number[], nums2: number[]): number[][] {
    let result: number[][] = []
    let tempArr: number[] = []

    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]) && !tempArr.includes(nums1[i])) {
            tempArr.push(nums1[i])
        }
    }
    result.push(tempArr)
    tempArr = []

    for (let j = 0; j < nums2.length; j++) {
        if (!nums1.includes(nums2[j]) && !tempArr.includes(nums2[j])) {
            tempArr.push(nums2[j])
        }
    }
    result.push(tempArr)

    return result
};