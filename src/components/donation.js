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
        const campaign = Campaign.all.find((campaign) => this.campaign_id === campaign.id)
        
        campaign.donations.push(this)
        // const cId = document.getElementById(`campaign-${this.campaign_id}`)
        // const ul = li.querySelector('ul')
        // debugger
        // ul.innerHTML += this.render()
    }
    
    render(){
        return(
            `<hr><li>$${this.price} - ${this.comment}</li>`
        )
    }
}