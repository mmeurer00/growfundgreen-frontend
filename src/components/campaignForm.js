class CampaignForm {

    constructor() {
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEditDelete = this.handleEditDelete.bind(this)
    }

    addCreateForm(){
        const formContainer = document.getElementById("form-container")
        const form = document.createElement('form')
        form.innerHTML = `<input id="name-input" placeholder='name' type='text'/>
            <input id="description-input" placeholder='description' type='text'/><br>
            <input id="goal-input" placeholder='goal' type='text'/><br><input id="campaign-submit" value='Create Campaign' type='submit'/>`
        // const input = document.createElement('input');
        // input.setAttribute('type', 'text')
        // input.type = "text"
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
        const campaignsContainer = document.getElementById("campaigns-container");
        campaignsContainer.addEventListener("click", this.handleEditDelete)
    }
    
    handleEditDelete(e){
        const li = e.target.parentElement
        const action = e.target.dataset.action
        if (action === "delete"){
            // delete this campaign from backend
            growFundGreenAdapter.deleteCampaign(li)
        } else if (action === "edit") {
            // editmode -> li
            editMode = li
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
    }
}