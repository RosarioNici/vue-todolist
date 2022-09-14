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
            index: 0
        },
        methods: {



        }

    }
)