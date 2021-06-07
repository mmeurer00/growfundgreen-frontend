class Donation {

    static all = [] 
    
    constructor({id, comment, price, campaign_id}) {
        this.id = id
        this.comment = comment
        this.price = price
        this.campaign_id = campaign_id

        Donation.all.push(this)
    }

    addToDom(){
        const campaignsContainer = document.getElementById("campaigns-container")
        campaignsContainer.innerHTML += this.render()
    }
    
    render(){
        return(
            `<hr><li>$${this.price} - ${this.comment}</li>`
        )
    }
}