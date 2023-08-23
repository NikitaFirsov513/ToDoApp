let isEven = false
let isOdd = false



function deleteAndDraw(index) {
    delateField(index)
    draw()

    if (isOdd)
        setOddSelection()
    if (isEven)
        setEvenSelection()
}

function deleteFirstAndDraw(index) {
    delateFirstField(index)
    draw()

    if (isOdd)
        setOddSelection()
    if (isEven)
        setEvenSelection()
}

function deleteLastAndDraw(index) {
    delateLastField(index)
    draw()

    if (isOdd)
        setOddSelection()
    if (isEven)
        setEvenSelection()
}

function addAndDraw(e) {
    alert("addAndDraw")
    e.preventDefault();
    return false
}

function toggleAndDraw(index) {

    toggleState(index)
    draw()

    if (isOdd)
        setOddSelection()
    if (isEven)
        setEvenSelection()

}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault()
    let inputValue = document.getElementById("myInput").value

    if (inputValue == '')
        return
    addField(inputValue)
    draw()
    document.getElementById("myInput").value = ""
});

function oddClick() {

    if (isOdd) {
        deleteAllSelection()
    }
    else {
        deleteAllSelection()
        setOddSelection()
    }
    isEven = false
    isOdd = !isOdd


}

function evenClick() {

    if (isEven) {
        deleteAllSelection()
    }
    else {
        deleteAllSelection()
        setEvenSelection()
    }
    isOdd = false
    isEven = !isEven;
}