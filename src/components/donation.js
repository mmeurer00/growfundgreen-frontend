class Donation {

    static all = [] 
    
    constructor({id, comment, price, campaign_id}) {
        this.id = id
        this.comment = comment
        this.price = price
        this.campaign_id = campaign_id

        Donation.all.push(this)
    }
    render(){
        return(
            `<li>${this.price} - ${this.comment}</li>`
        )
    }

    totalDonated(){
        var total = []
        total += this.price
        return total
    }
}