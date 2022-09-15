const app = new Vue(
    {
        el: '#list',
        data: {
            addTodo: '',
            todoList: [{
                text: 'Fare Colazione',
                done: true
            },
            {
                text: 'Lavarsi i dentti',
                done: true
            },
            {
                text: 'Seguire la lazione Boolean',
                done: false
            },
            {
                text: 'Preparare il pranzo',
                done: false
            },
            {
                text: 'Fare la consegna per il pomeriggio',
                done: false
            }
            ],
            index: 0,

        },
        methods: {
            newTodo() {
                const newObject = { text: this.addTodo, done: false }
                this.todoList.push(newObject)

            },
            doneTodo(item) {
                item.done = !item.done
            },
            cancelItem(i) {
                const newtodoList = this.todoList.slice(i, 1)
            }


        }

    }
)