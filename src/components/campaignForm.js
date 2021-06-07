class CampaignForm {

    constructor() {
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEditDelete = this.handleEditDelete.bind(this)
        this.donateFormExists = false
    }

    addCreateForm(){
        const formContainer = document.getElementById("form-container")
        const form = document.createElement('form')
        form.innerHTML = `<h3> Campaign Name: <input id="name-input" placeholder='Campaign Name...' type='text' class="text-input"/></h3>
            <h3> Description: <input id="description-input" placeholder='What is your purpose?' type='text' class="text-input"/></h3>
            <h3> Goal: <input id="goal-input" placeholder='Goal...' type='text' class="text-input"/><br><input id="campaign-submit" value='Create Campaign' onClick="window.location.reload()" type='submit' class="btn modal-btn"/></h3>`
        formContainer.append(form)
    
        form.addEventListener("submit", this.handleSubmit)
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const nameInput = event.target[0]
        const descInput = event.target[1]
        const goalInput = event.target[2]
        if(editMode) {
            growFundGreenAdapter.editCampaign(editMode, nameInput, descInput, goalInput)
        }
        else {
            growFundGreenAdapter.createCampaign(nameInput, descInput, goalInput)
        }
    }

    listenEditDelete(){
        const campaignsContainer = document.getElementById("campaigns-container")
        campaignsContainer.addEventListener("click", this.handleEditDelete)
    }

    handleEditDelete(e){
        const li = e.target.parentElement
        const action = e.target.dataset.action
        if (action === "delete"){
            // delete this campaign from backend
            growFundGreenAdapter.deleteCampaign(li)
        } else if (action === "edit") {
            const modal = document.querySelector(".modal-overlay")  
            // editmode -> li
            editMode = li
            modal.classList.add("open-modal")
            // button -> updatecampaign
            document.getElementById('campaign-submit').value = "Update"
            // populate input with campaign info
            document.getElementById('name-input').value = li.children[1].innerHTML
            document.getElementById('description-input').value = li.children[2].innerHTML           
            document.getElementById('goal-input').value = li.children[3].innerHTML
            // submit edit button, update campaign 
        }
        else if(action === "display") {
            /* This is if/else statement is saying, "Hey, 
            if I'm displaying donations already close out those 
            donations hence the '.dispaly = none'. But If I'm not 
            displaying any donations for ANY campaign yet 
            then render donations for the campaign selected." */
            if(currentDonations) {
                currentDonations.style.display=`none`
                currentDonations = false
            }
            else {
            console.log(!!currentDonations)
            const c = Campaign.all.find(c => c.id == li.dataset.id )
            c.renderDonations()
            }
        }
        else if(action === "donate") {
            const form = document.querySelector("donation-form")
            const donationF = document.getElementById(`f-${li.dataset.id}`)
            const modal2 = document.querySelectorAll(".modal-overlay")[1]
            if (!form) {
                // !donationF checks that a form for that specific campaign does not already exist.
                if (!donationF) {
                    modal2.classList.add("open-modal")
                    new DonationForm(li).addDonationForm()
                }
            }
        }
    }
}