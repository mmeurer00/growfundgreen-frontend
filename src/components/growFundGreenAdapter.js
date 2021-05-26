class GrowFundGreenAdapter {
    
    constructor(baseURL="http://127.0.0.1:3000"){
        this.baseCampaignURL = `${baseURL}/api/v1/campaigns`
        /* when creating a new campaign adpater object, 
        this is setting up the URL for the user */
    }

    getCampaigns() {
        fetch(this.baseCampaignURL)
        .then(r => r.json())
        .then(campaigns => {
            campaigns.forEach(campaign => {
                const c = new Campaign(campaign)
                c.addToDom()
            })
            
        })
        //.catch(error => console.error(erorr))
        // function fetchCampaigns(){
        //     fetch("http://127.0.0.1:3000/api/v1/campaigns")
        //     .then(r => r.json())
        //     .then(data => {
        //         data.forEach(addCampaign)
        //     })
        //     .catch(err => console.warn(err))
        }

    editCampaign(nameInput, editMode) {
        fetch(`${this.baseCampaignURL}/${editMode.dataset.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 204) {
                editMode.children[0].innerText = data.campaign.name
                editMode = false
                document.getElementById('campaign-submit').value = "Create Campaign"
                nameInput.value = ""
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error(err))
    }

    createCampaign(nameInput){
        fetch(this.baseCampaignURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("I'm in the second then!", data)
            if (data.status === 201){
                const c = new Campaign(data.campaign)
                c.addToDom()
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
        })
       .catch(err => console.error("I'm in the catch!", err))
    }

    deleteCampaign(li) {
        fetch(`${this.baseCampaignURL}/${li.dataset.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            if (data.message === "Successfully deleted"){
                // delete li for DOM
                li.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }
}

