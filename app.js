const app = Vue.createApp({
    data() {
        return {
            header: "Shopping List App",
            newItem: "",
            newItemHighPriority: false,
            items: [
                    {id: 1, label: "10 bananas"},
                    {id: 2, label: "5 apples"},
                    {id: 3, label: "8 oranges"}
                    ]
        }
    }
})