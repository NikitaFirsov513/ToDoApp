function draw() {
    let toDoList = getToDoList()

    const elementToDoList = document.querySelector('.todo__list')
    let str = ""

    toDoList.forEach((elem, index) => {

        str +=
            `<label class="todo__list-elem">
        <input onchange="toggleAndDraw(${index})" ${elem.isDone ? "checked" : ""} type="checkbox" />
        <span class="todo__list-checkmark">
            <div></div>
        </span>
        <p> ${elem.content}</p>
        <button  onclick ="deleteAndDraw(${index})" class="todo__list-delate">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame">
                    <path id="Vector"
                        d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
                        fill="#FF0000" fill-opacity="0.5" />
                </g>
            </svg>
        </button>
    </label>`
    })
    elementToDoList.innerHTML = str;
}



function setEvenSelection() {


    const elementToDoList = document.querySelector('.todo__list')


    const children = elementToDoList.children;

    for (let i = 0; i < children.length; i++) {
        if (i % 2 === 0)
            children[i].classList.add('todo__list-elem--dis');
    }


}

function setOddSelection() {


    const elementToDoList = document.querySelector('.todo__list')


    const children = elementToDoList.children;

    for (let i = 0; i < children.length; i++) {
        if (i % 2 !== 0)
            children[i].classList.add('todo__list-elem--dis');
    }


}

function deleteAllSelection() {


    const elementToDoList = document.querySelector('.todo__list')


    const children = elementToDoList.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove('todo__list-elem--dis');
    }

}

