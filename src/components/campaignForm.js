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
    //if passing an even listener, make an arrow function
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
            // populate input with name of campaign
            document.getElementById('name-input').value = li.children[0].innerText
            document.getElementById('description-input').value = li.children[1].innerText            
            document.getElementById('goal-input').value = li.children[2].innerText
            // submit edit button, update campaign (in different function)
        }
        else if(action === "display") {
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
            const modal2 = document.querySelector(".modal-overlay2")
            if (!form) {
                if (!donationF) {
                    modal2.classList.add("open-modal")
                    new DonationForm(li).addDonationForm()
                }
            }
        }
    }
}