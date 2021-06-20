"Задание 1"

let arr = [1, 3, 5, 4, 5, 7]

let func = (arr) => {
    let result = []
    let a = []
    for (let i = 0; i < arr.length; i++) {
        a = arr.slice(i, i + 3)
        if (a.length !== 3) {
            break
        }
        else if (a[0] > a[1] && a[1] < a[2] || a[0] < a[1] && a[1] > a[2]) {
            result.push(1)
            a = []
        } else {
            result.push(0)
            a = []
        }
    }
    return console.log(result)
}

func(arr)


"Задание 2"

let arr2 = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5],
]

let func2 = (arr) => {
    let result = []
    let a = []
    let b = []
    let c = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j < 3) {
                a.push(arr[i][j])
            }
            if (j > 0 && j < 4) {
                b.push(arr[i][j])
            }
            if (j > 1) {
                c.push(arr[i][j])
            }
        }
        if (a.length == 9 && b.length == 9 && c.length == 9) {
            for (let k = 1; k <= 9; k++) {
                if (a.indexOf(k) === -1) {
                    result.push(false)
                    break
                } else {
                    result[0] = true
                }
            }

            for (let k = 1; k <= 9; k++) {
                if (b.indexOf(k) === -1) {
                    result.push(false)
                    break
                } else {
                    result[1] = true
                }
            }
            for (let k = 1; k <= 9; k++) {
                if (c.indexOf(k) === -1) {
                    result.push(false)
                    break
                } else {
                    result[2] = true
                }
            }
        }
    }
    return console.log(result)
}
func2(arr2)

// "Задания 3"

// let arr = [
//     ['Hello', 'world'],
//     ['Brad', 'came', 'to', 'dinner', 'with', 'us'],
//     ['He', 'love', 'tacos']
// ]
// let conditions = ['LEFT', 'RIGHT', 'LEFT']

// let func = (arr) => {
//     // let a = arr[0].join(" ")
//     // let b = arr[1].join(" ")
//     // let c = arr[2].join(" ")
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i].join(" ").length > 16) {
//                 let a = arr[i].join(" ").length / 16
//                 arr[i].length / a

//             }

//         }
//     }
// }


// func(arr)