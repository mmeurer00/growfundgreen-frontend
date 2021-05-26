let editMode = false
const growFundGreenAdapter = new GrowFundGreenAdapter("http://127.0.0.1:3000")


document.addEventListener("DOMContentLoaded", () => {
    addCreateForm()
    growFundGreenAdapter.getCampaigns()
    listenEditDelete()
})

function addCreateForm(){
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

function handleSubmit(event) {
    event.preventDefault()
    const nameInput = event.target[0]
    if(editMode) {
        growFundGreenAdapter.editCampaign(editMode, nameInput)
    }
    else {
        growFundGreenAdapter.createCampaign(nameInput)
    }
}

// could put in campaign class 
function listenEditDelete() {
    const campaignsContainer = document.getElementById("campaigns-container")
    campaignsContainer.addEventListener("click", handleEditDelete)
}

function handleEditDelete(e){
    const li = e.target.parentElement
    if (e.target.dataset.action === "delete"){
        growFundGreenAdapter.deleteCampaign(li)
    }
    else if (e.target.dataset.action === "edit") {

    editMode = li

    document.getElementById("campaign-submit")
    document.getElementById("name-input")
    }
}