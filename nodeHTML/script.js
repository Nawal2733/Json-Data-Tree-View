$(function () {
    const allData = [{
            id: 11,
            name: "nawal",
            age: 22,
            subject: [{
                id: 41,
                name: 'abc',
                marks: 89
            }]
        },
        {
            id: 12,
            name: "Aman",
            age: 22,
            subject: [{
                id: 23,
                a: 'a',
                b: 'b'
            }]
        },
        {
            id: 13,
            name: "Meet",
            age: 22,
            subject: [{
                id: 37,
                a: 'a',
                b: 'b'
            }, {
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
    let buttons = (id) => {
        return `
        <span class="buttons">
        <button class="btn btn-sm btn-outline-primary" id="addObj" onclick="add(${id})">Add</button>
        <button class="btn btn-sm btn-outline-danger" id="deleteObj" onclick=delete(${id})>Delete</button>
        <button class="btn btn-sm btn-outline-info" id="update" onclick=update(${id})>update</button>
        </span>
    `
    }
    let inputFields = (id) => {
        return `
        <span id="${id}" style="display:none">
            
            <input type="text" placeholder="">
            <input type="text" placeholder="">
            <button onclick="addObj(${id})">Add</button>
        </span>
    `
    }

    function traverse(data) {
        for (let item of data) {
            for (let i in item) {
                if (i === 'id') {
                    str += `<li><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|------${item.id} ${buttons(item.id)} ${inputFields(item.id)} </span><ul>`
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
});

function add(id) {
    console.log(id)
    // $(".buttons").css("di", "none")
    $(`#${id}`).css("display", "initial")
    // $(".buttons").css("visibility", "none")
}


function addObj(id) {
    console.log(id)
}