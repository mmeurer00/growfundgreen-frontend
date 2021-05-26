class CampaignForm {
    addCreateForm(){
        const formContainer = document.getElementById("form-container")
        const form = document.createElement('form')
        form.innerHTML = `<input id="name-input" placeholder='name' type='text'/><br><input id="campaign-submit" value='Create Campaign' type='submit'/>`
            // <input id="description-input" placeholder='description' type='text'/><br>
           // <input id="goal-input" placeholder='goal' type='text'/><br><input id="campaign-submit" value='Create Campaign' type='submit'/>`
        // const input = document.createElement('input');
        // input.setAttribute('type', 'text')
        // input.type = "text"
        formContainer.append(form)
    
        form.addEventListener("submit", handleSubmit)
    }
    //if passing an even listener, make an arrow function
    handleSubmit = (event) => {
        event.preventDefault()
        const nameInput = event.target[0]
        if(editMode) {
            growFundGreenAdapter.editCampaign(editMode, nameInput)
        }
        else {
            growFundGreenAdapter.createCampaign(nameInput)
        }
    }
}