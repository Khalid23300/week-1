let todolist = []
rendertodolist();
function addtodo() {
    let name_element = document.querySelector('.js-name-input');
    let name = name_element.value;
    let duedate_element = document.querySelector('.js-date-input');
    let duedate = duedate_element.value;
    todolist.push({name,duedate});
    name_element.value = '';
    rendertodolist()

};
function rendertodolist(){
    let htmls = []
    for(i = 0;i < todolist.length;i++){
        let task_object = todolist[i];
        let {name , duedate} = task_object
        html = `<div>${name} ${duedate} <button onclick="
        todolist.splice(${i},1);
        rendertodolist();
        ">Delete</button></div>`;
        htmls += html;
    }
    console.log(htmls);
    document.querySelector(".js-todo-list").innerHTML = htmls;
}