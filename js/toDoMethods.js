
const initData = [{
    content: "Element 1",
    isDone: false
},
{
    content: "Element 2",
    isDone: false
},
{
    content: "Element 3",
    isDone: true
},
{
    content: "Element 4",
    isDone: true
}
]

const LIST_NAME = 'ToDoList'

function getToDoList() {

    if (localStorage.getItem(LIST_NAME)) {
        const data = JSON.parse(localStorage.getItem(LIST_NAME))
        return data;


    } else {

        localStorage.setItem(LIST_NAME, JSON.stringify(initData))
        return initData;
    }
}

function delateField(index) {
    let list = getToDoList()
    list.splice(index, 1)
    localStorage.setItem(LIST_NAME, JSON.stringify(list))
}

function delateFirstField() {
    let list = getToDoList()
    list.splice(0, 1)
    localStorage.setItem(LIST_NAME, JSON.stringify(list))
}

function delateLastField() {
    let list = getToDoList()
    list.splice(list.length - 1, 1)
    localStorage.setItem(LIST_NAME, JSON.stringify(list))
}

function addField(str) {
    let list = getToDoList()
    list.push({
        content: str,
        isDone: false
    })
    localStorage.setItem(LIST_NAME, JSON.stringify(list))
}

function toggleState(index) {

    let list = getToDoList()
    list[index].isDone = !list[index].isDone

    const state = list[index].isDone

    if (state) {
        let element = list.splice(index, 1)
        list.push(element[0])
    }
    else {
        let element = list.splice(index, 1)
        list.unshift(element[0])
    }
    localStorage.setItem(LIST_NAME, JSON.stringify(list))

}

