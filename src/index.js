let editMode = false
const growFundGreenAdapter = new GrowFundGreenAdapter("http://127.0.0.1:3000")
const campaignForm = new CampaignForm

document.addEventListener("DOMContentLoaded", () => {
    campaignForm.addCreateForm()
    growFundGreenAdapter.getCampaigns()
    campaignForm.listenEditDelete()
})

// function addCreateForm(){
//     const formContainer = document.getElementById("form-container")
//     const form = document.createElement('form')
//     form.innerHTML = `<input id="name-input" placeholder='name' type='text'/><br><input id="campaign-submit" value='Create Campaign' type='submit'/>`
//         // <input id="description-input" placeholder='description' type='text'/><br>
//        // <input id="goal-input" placeholder='goal' type='text'/><br><input id="campaign-submit" value='Create Campaign' type='submit'/>`
//     // const input = document.createElement('input');
//     // input.setAttribute('type', 'text')
//     // input.type = "text"
//     formContainer.append(form)

//     form.addEventListener("submit", handleSubmit)
// }

// function handleSubmit(event) {
//     event.preventDefault()
//     const nameInput = event.target[0]
//     if(editMode) {
//         growFundGreenAdapter.editCampaign(editMode, nameInput)
//     }
//     else {
//         growFundGreenAdapter.createCampaign(nameInput)
//     }
// }

// could put in campaign class 
//  