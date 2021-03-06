class Campaign {

    static all = []
     
    constructor({id, name, description, goal, donations} ){
        this.id = id
        this.name = name
        this.description = description
        this.goal = goal
        if (donations) {
        this.donations = donations.map(d => new Donation(d)) 
        } else {
            this.donations = []
        }

        Campaign.all.push(this)
    }
    

    render() {
        // getting html
        return(`<li class="campaign-container" id="campaign-${this.id}" data-id=${this.id}>
            <br>
            <h3>${this.name}</h3>
            <h4>${this.description} </h4> 
            Goal: $<span>${this.goal}</span>
            <br>
            <button data-action='display' class="btn my-btn">Display Donations</button>
            <button data-action='donate' class="btn modal-btn">Donate</button><br>
            <button data-action='edit' class="btn my-btn">Edit</button> 
            <button data-action='delete' class="btn my-btn"> X </button>
            <ul></ul>
            <br><br>
        </li>`
        )
    }


    addToDom(){
        const campaignsContainer = document.getElementById("campaigns-container")
        campaignsContainer.innerHTML += this.render()
    }

    renderDonations(){
        const li = document.getElementById(`campaign-${this.id}`)
        const ul = li.querySelector('ul')
        if (this.donations.length > 0) { 
                let total = 0
                this.donations.forEach(function(donation) {
                    total = total + donation.price;
                  })
                console.log(total)
                total.toString
                ul.innerHTML = `<br><h4>TOTAL RAISED: $${total}</h4><br>`
                li.append(ul)
                if (this.goal <= total) {
                    ul.innerHTML = `<br><h4>GOAL REACHED! - TOTAL RAISED: $${total}</h4><br>`
                    li.append(ul)
                }
                this.donations.forEach(d => ul.innerHTML += d.render())
                li.append(ul)
                currentDonations = ul 
            }
        else {
            ul.innerHTML = `<br><h4>There are currently no donations...</h4><br>`
            li.append(ul)
            currentDonations = ul
        }
        } 
    }

