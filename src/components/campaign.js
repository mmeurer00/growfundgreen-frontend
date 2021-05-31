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
        return(`<li class="campaign-container" id="campaign-${this.id}" data-id=${this.id}>
            <h3>${this.name}</h3>
            <h4 Purpose:> ${this.description} </h4> 
            <h4 Goal: $> ${this.goal} </h4> 
            <br>
            <button data-action='display' class="btn my-btn">Display Donations</button>
            <button data-action='donate' class="btn modal-btn2">Donate</button><br>
            <button data-action='edit' class="btn my-btn">Edit</button> 
            <button data-action='delete' class="btn my-btn"> X </button>
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

