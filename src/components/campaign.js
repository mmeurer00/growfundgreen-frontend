class Campaign {

    static all = []
     
    constructor({id, name, description, goal, donations} ){
        this.id = id
        this.name = name
        this.description = description
        this.goal = goal
        this.donations = donations.map(d => new Donation(d))

        Campaign.all.push(this)
    }
    

    render() {
        // getting html
        return(`<li class="campaign-container" id="campaign-${this.id}" data-id=${this.id}></l1>
            <span>${this.name}</span>
            <span>${this.description}</span> 
            <span>${this.goal}</span> 
            <br>
            <button data-action='display' class="btn modal-btn">Display Donations</button>
            <button data-action='donate' class="btn modal-btn2">Donate</button>
            <button data-action='edit' class="btn modal-btn">Edit</button> 
            <button data-action='delete' class="btn modal-btn">X</button>
        </li>`
        )
    }


    addToDom(){
        const campaignsContainer = document.getElementById("campaigns-container")
        campaignsContainer.innerHTML += this.render()
    }

    renderDonations(){
        const li = document.getElementById(`campaign-${this.id}`)
        const ul = document.createElement('ul')

        if (this.donations != []) { 
                let total = 0
                this.donations.forEach(function(donation) {
                    total = total + donation.price;
                  })
                // for(let i=0;i<this.donations.length;i++){
                //     i
                //     if(isNaN(this.donations.[i])){
                //         continue;
                //          }
                //     total += (this.donations.price[i])
                //    }
                 console.log(total)
                 total.toString
                 ul.innerHTML = `Total Raised: $${total}`
                 li.append(ul)
            }
            li.append(ul)
            this.donations.forEach(d => ul.innerHTML += d.render())
            li.append(ul)
            currentDonations = ul 
        } 
    }

