class Campaign {

    static all = []
     
    constructor({id, name, description, goal} ){
        this.id = id
        this.name = name
        this.description = description
        this.goal = goal
        this.created_at = this.created_at

        Campaign.all.push(this)
    }
    

    render() {
        // getting html
        return(`<li id="campaign-${this.id}" data-id=${this.id}>
        <span>${this.name}</span> 
        <button data-action='edit'>Edit</button> 
        <button data-action='delete'>X</button>
    </li>`
        )
    }
}