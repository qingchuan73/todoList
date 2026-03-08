
class Model {
  constructor() {
    this.todos = []
    this.state = 'all'
    this.value = ''
  }

  addTodo(text) {
    this.todos.push({
      text,
      completed: false
    })
  }

  removeTodo(index) {
    this.todos.splice(index, 1)
  }

  toggleTodo(index) {

    this.todos[index].completed = !this.todos[index].completed

  }

  toggleAll(completed) {
    this.todos.forEach(t => {
      t.completed = completed
    })
  }

  changeState(state) {
    this.state = state
  }


  changeValue(index) {
    this.todos[index].text = this.value
  }
}


class View {
  constructor() {
    this.inputM = document.getElementById("input_m");
    this.newItem = document.getElementById("new_item");
    this.allCheck = this.createToggleAllCheckbox();
    this.stateBar = this.createTodoState()

  }

  createToggleAllCheckbox() {
    const allCheck = document.createElement("label");
    const allInput = document.createElement("input");
    const allText = document.createElement("span");

    allInput.type = "checkbox";
    allCheck.className = "allCheck";
    allText.textContent = "∨";
    allText.id = "allText";
    allCheck.appendChild(allText);
    allCheck.appendChild(allInput);
    this.newItem.appendChild(allCheck);
    allCheck.style.cursor = "pointer"
    allInput.style.opacity = '0'
    allInput.style.position = 'absolute'
    allCheck.style.display = "none";

    return {
      element: allCheck,
      checkBox: allInput

    }
  }

  createTodoState() {
    const stateBar = document.createElement('div')
    const footer = document.querySelector('#r_footer')
    stateBar.id = 'state_bar'
    stateBar.className = 'state_bar'
    stateBar.style.display = "none"
    stateBar.innerHTML = `
    <span id="items_left">0 件待办项</span>
    <button class="changeurl active" id='all'>All</button>
    <button class="changeurl" id='active'>Active</button>
    <button class="changeurl" id='completed'>Completed</button>
    <button  id='clear_completed'>清除所有完成项</button>
    `

    footer.appendChild(stateBar)
    return stateBar
  }

  renderTodo(todo, iscompleted) {
    const todoItem = document.createElement("li");
    console.log(todo.completed)
    todoItem.innerHTML = `
            <div class="todo-item" >
        <input type="checkbox" class="li_checkbox" ${iscompleted}>
        <label class="check">${todo.text}</label>
        <button class="destroy">✕</button>
      </div>
        `
    this.newItem.appendChild(todoItem)
    return todoItem;
  }

 
  update(index, iscompleted) {
    console.log(this.newItem)
    const nowItem = this.newItem.querySelectorAll(`li`)[index].querySelector('.li_checkbox')
    const text = this.newItem.querySelectorAll(`li`)[index].querySelector('label')


    if (iscompleted) {
      console.log(iscompleted)
      text.classList.add('completed')
    } else {
      text.classList.remove('completed')
    }
    nowItem.checked = iscompleted

  }

  toggleAllButton() {
    this.newItem.appendChild(this.allCheck.element);
  }

  changeAllButtonState(checked) {

    const row = document.getElementById('allText')


    if (checked) {
      row.style.opacity = '0.5'
    }
    else {
      row.style.opacity = '1'
    }
  }

  edit() {
    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'test_input'
    return input
  }

}



class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.bindEvents()
  }

  bindEvents() {

    // 输入框回车添加待办项
    this.view.inputM.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.addTodo(this.view.inputM.value.trim());
      }
    });

    //事件委托
    this.view.newItem.addEventListener('click', (e) => {
      if (e.target.classList.contains('li_checkbox')) {
        const index = Array.from(this.view.newItem.querySelectorAll('li')).indexOf(e.target.closest('li'));
        this.model.toggleTodo(index)
        this.updateView()
      }

      if (e.target.classList.contains('destroy')) {
        const index = Array.from(this.view.newItem.querySelectorAll('li')).indexOf(e.target.closest('li'));
        this.model.removeTodo(index);
        this.updateView()
      }
    })




    // 全选按钮事件
    this.view.allCheck.checkBox.addEventListener("change", (e) => {
      const allChecked = this.model.todos.every(t => t.completed)
      if (!allChecked) {
        this.model.toggleAll(true)

      }
      else {
        this.model.toggleAll(false)

      }

      this.updateView()

    });

    this.view.stateBar.addEventListener('click', (e) => {
      const btns = this.view.stateBar.querySelectorAll('.changeurl')

      if (e.target.classList.contains('changeurl')) {
        btns.forEach(b => b.classList.remove('active'))
        this.model.changeState(e.target.id)
        e.target.classList.add('active')
        this.updateView()

      }

      if (e.target.id === 'clear_completed') {
        this.model.todos = this.model.todos.filter(t => !t.completed)
        this.updateView()
      }
    })


    this.view.newItem.addEventListener('dblclick', (p_e) => {
      if (p_e.target.classList.contains('todo-item')) {
        console.log(p_e.target)
        p_e.target.innerHTML = ''
        const index = Array.from(this.view.newItem.querySelectorAll('li')).indexOf(p_e.target.closest('li'));
        console.log(index)
        const input = this.view.edit()
        p_e.target.appendChild(input)
        input.focus()
        input.addEventListener('blur', () => {
          this.handle(input, index, p_e.target)
        })

        input.addEventListener('keydown', (c_e) => {

          if (c_e.key == 'Enter') {

            this.handle(input, index, p_e.target)
          }
        })

        console.log(this.model.todos)

      }




    })

  }

  handle(input, index, current) {
    input.value == '' ? this.model.value = this.model.todos[index].text : this.model.value = input.value
    this.model.changeValue(index)

    this.model.value = ''
    this.updateView()
  }


  addTodo(text) {
    if (!text) return;
    this.model.addTodo(text);
    this.view.inputM.value = "";
    this.updateView()
  }

  toggleAll(completed) {
    this.model.toggleAll(completed)
    this.updateView()

  }

  updateView() {
    const state = this.model.state
    const numText = this.view.stateBar.querySelector('#items_left')
    console.log(this.model.todos)

    let filteredTodos = []
    if (state === 'all') {
      filteredTodos = this.model.todos
    } else if (state === 'active') {
      filteredTodos = this.model.todos.filter(t => !t.completed)
    } else if (state === 'completed') {
      filteredTodos = this.model.todos.filter(t => t.completed)
    }

    this.view.newItem.innerHTML = "";

    this.view.toggleAllButton();
    let allChecked = 0
    filteredTodos.forEach((todo, index) => {
      if (todo.completed) {
        allChecked++
      }

      this.view.renderTodo(todo, todo.completed ? 'checked' : '');
      this.view.update(index, todo.completed)
    });
    if (this.model.todos.length === 0) {
      this.view.stateBar.style.display = "none"
      this.view.allCheck.element.style.display = "none";
    } else {
      numText.textContent = `${this.model.todos.filter(t => !t.completed).length} 件待办项`
      this.view.stateBar.style.display = "flex"
      this.view.allCheck.element.style.display = "block";
    }

    if (allChecked == this.model.todos.length) {
      this.view.changeAllButtonState(true)
    } else {
      this.view.changeAllButtonState(false)
    }



  }
}

const model = new Model()
const view = new View()
const controller = new Controller(model, view)

fetch('./sidebar/sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('#left').innerHTML = data
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = './sidebar/sidebar.css'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = './sidebar/sidebar.js'
    document.body.appendChild(script)
  }).catch(err => {
    console.log(err);
  })