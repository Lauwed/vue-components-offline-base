/**
 * Main Vue component
 */

const App = {
    template: `<div class="app">
        <ChartBars :class="{ clickable: true }" :groups="randomNumbers" />
    </div>`,

    data: () => ({
        randomNumbers: [
            {
                id: 1,
                title: 'test',
                rows: [
                    {
                        id: 1,
                        name: 'banana',
                        value: 50
                    },
                    {
                        id: 2,
                        name: 'orage',
                        value: 20
                    },
                    {
                        id: 3,
                        name: 'strawberry',
                        value: 80
                    }
                ]
            }
        ]
    }),
    computed: {
    },
    created() {
    },
    methods: {}
}