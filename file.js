const app = new Vue(
    {
        el: '#list',
        data: {
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
                done: true
            }, {
                text: 'Preparare il pranzo',
                done: true
            }
            ],
            index: 0
        }

    }
)