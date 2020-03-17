$(function () {

    const allData = [{
            id: 11,
            name: "nawal",
            age: 22,
            subject: [{
                id: 33,
                name: 'abc',
                marks: 89
            }]
        },
        {
            id: 12,
            name: "Aman",
            age: 22,
            subject: [{
                id: 33,
                a: 'a',
                b: 'b'
            }]
        },
        {
            id: 13,
            name: "Meet",
            age: 22,
            subject: [{
                id: 33,
                a: 'a',
                b: 'b'
            },{
                id: 34,
                a: 'a',
                b: 'b'
            }]
        },
        {
            id: 14,
            name: "Jatin",
            age: 22,
        }
    ]

    let str = ''

    let buttons = `
        <span class="buttons">
        <button onclick="add()">Add</button>
        <button onclick=delete()>Delete</button>
        <button onclick=update()>update</button>
        </span>
    `

    let inputFields = `
        <span class="addData">
            
            <input type=text placeholder="">
            <input type=text placeholder="">
            <button onclick="addObj()">Add</button>
        </span>
    `

    function traverse(data) {
        for (let item of data) {
            for (let i in item) {
                if (i === 'id') {
                    str += `<li>|---${item.id} ${buttons} ${inputFields} <ul>`
                } else {
                    if (typeof (item[i]) === 'object') {
                        // console.log(i, item[i])
                        str += `<li>|---${i}</li>`
                        traverse(item[i])
                    } else {
                        // console.log(i, item[i])
                        str += `<li>|---${i}:${item[i]}</li>`
                    }
                }
            }
            str += `</ul></li>`

        }
    }

    traverse(allData)

    document.getElementById('parent').innerHTML = str
});

function add() {
    console.log("add")
    $(".addData").css("display", "initial")
    $(".buttons").css("display", "none")
}