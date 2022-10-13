const app = Vue.createApp({
    data() {
        return {
            header: "Shopping List App",
            editing: false,
            newItem: "",
            newItemHighPriority: false,
            items: [
                        {
                            id: 1, 
                            label: "10 bananas", 
                            purchased: true, 
                            highPriority: false
                        },
                        {
                            id: 2, 
                            label: "5 apples", 
                            purchased: true, 
                            highPriority: false
                        },
                        {
                            id: 3, 
                            label: "8 oranges", 
                            purchased: false, 
                            highPriority: true
                        }
                    ]
        }
    },
    computed: {
        reversedItems() {
            return [...this.items].reverse()
        }
    },
    methods: {
        saveItem() {
            this.items.push({
                id:this.items.length +1, 
                label: this.newItem,
                highPriority: this.newItemHighPriority
            })
            this.newItem = ""
            this.newItemHighPriority = ""
        },
        doEdit(editing) {
            this.editing = editing
            this.newItem = ""
            this.newItemHighPriority = ""
        },
        togglePurchased(item) {
            item.purchased = !item.purchased
        }
    }
})