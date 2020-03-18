// const allData = [{
//         id: 11,
//         name: "nawal",
//         age: 22,
//         subject: [{
//             id: 41,
//             name: 'abc',
//             marks: 89,
//             semester: [{
//                 id: 101,
//                 sem: 1,
//                 sem: 2,
//                 sem:3
//             }]
//         }, {
//             id: 44,
//             name: 'abc',
//             marks: 89,
//             semester: [{
//                 id: 101,
//                 sem: 1,
//                 sem: 2
//             }]
//         }]
//     },
//     {
//         id: 12,
//         name: "Aman",
//         age: 22,
//         subject: [{
//             id: 23,
//             a: 'a',
//             b: 'b'
//         }]
//     },
//     {
//         id: 13,
//         name: "Meet",
//         age: 22,
//         subject: [{
//             id: 37,
//             a: 'a',
//             b: 'b'
//         }, {
//             id: 34,
//             a: 'a',
//             b: 'b'
//         }]
//     },
//     {
//         id: 14,
//         name: "Jatin",
//         age: 22,
//     }
// ]


const allData = [{
        id: 1,
        file1: 'file.txt',
        file2: 'file2.txt',
        file3: 'file3.txt',
        folder: [{
            id: 123,
            "file1.1": "File-1.1.txt",
            "file1.2": 'file1.2.txt',
            folder: [{
                id: '112',
                "file1.1.1": "file1.1.1"
            }],
            'file1.3': 'file1.3'
        }],
        file4: 'file4.txt',
        file5: 'file5.txt'
    },
    {
        id: 2,
        file1: 'file.txt',
        file2: 'file2.txt',
        file3: 'file3.txt',
        folder: [{
            id: 2.1,
            "file2.1": "File2.1.txt",
            "file2.2": 'file2.2.txt',
            folder: [{
                id: '2.1.1',
                "file1.1.1": "file1.1.1"
            }]
        }],
        file4: 'file4.txt'
    }

]

let str = ''
let buttons = (id) => {
    return `
        <span class="buttons">
        <button class="btn btn-sm btn-outline-primary" id="addObj" onclick="add(${id})">Add</button>
        <button class="btn btn-sm btn-outline-danger" id="deleteObj" onclick=delete("${id}")>Delete</button>
        <button class="btn btn-sm btn-outline-info" id="update" onclick=update("${id}")>update</button>
        </span>
    `
}
let inputFields = (id) => {
    return `
        <span id="${id}" style="display:none">
            
            <input type="text" id='key${id}' placeholder="">
            <input type="text" id="d${id}" placeholder="">
            <button onclick="addObj(${id})">Add</button>
        </span>
    `
}

function traverse(data) {
    for (let item of data) {
        for (let i in item) {
            if (i === 'id') {
                str += `<li><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|------${item.id} ${buttons(item.id)}  </span>${inputFields(item.id)}<ul>`
            } else {
                if (typeof (item[i]) === 'object') {
                    // console.log(i, item[i])
                    str += `<li>|------${i}</li>`
                    traverse(item[i])
                } else {
                    // console.log(i, item[i])
                    str += `<li>|------${i}:${item[i]}</li>`
                }
            }
        }
        str += `</ul></li>`
    }
}
traverse(allData)
document.getElementById('parent').innerHTML = str

function add(id) {
    console.log(id)
    $(`#${id}`).css("display", "initial")
}


function addObj(id) {
    console.log(id)
    const key = document.getElementById(`key${id}`).value;
    const d = document.getElementById(`d${id}`).value;
    console.log(key, d)
    allData.map((element) => {
        if (element.id === id) {
            console.log("Yes")
            element[key] = d
        }

    })
    console.log(allData)
    traverse(allData)

}