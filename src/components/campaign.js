class Campaign {

    static all = []
     
    constructor({id, name, description, goal, created_at} ){
        this.id = id
        this.name = name
        this.description = description
        this.goal = goal
        this.created_at = created_at

        Campaign.all.push(this)
    }
    

    render() {
        // getting html
        return(`<li id="campaign-${this.id}" data-id=${this.id}></l1>
            <span>${this.name}</span> 
            <button data-action='edit'>Edit</button> 
            <button data-action='delete'>X</button>
        </li>`
        )
    }


    addToDom(){
        const campaignsContainer = document.getElementById("campaigns-container")
        campaignsContainer.innerHTML += this.render()
    }
}
