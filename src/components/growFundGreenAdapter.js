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
    }

    editCampaign(editMode) {
        let nameInput = document.getElementById("name-input")
        let descInput = document.getElementById("description-input")
        let goalInput = document.getElementById("goal-input")

        fetch(`${this.baseCampaignURL}/${editMode.dataset.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value,
                description: descInput.value,
                goal: goalInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 201) {
                editMode.children[0].innerText = 
                    data.campaign.name, 
                    data.campaign.description,
                    data.campaign.goal
                editMode = false
                document.getElementById('campaign-submit').value = "Create Campaign"
                nameInput.value = ""
                descInput.value = ""
                goalInput.value = ""
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error(err))
    }

    createCampaign(nameInput, descInput, goalInput){
        fetch(this.baseCampaignURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value, 
                description: descInput.value,
                goal: goalInput.value
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            console.log('data:', data)
            if (data.status === 201){
                const c = new Campaign(data.campaign)
                c.addToDom()
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
            descInput.value = ""
            goalInput.value = ""
        })
       .catch(err => console.error("Error!", err))
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
                // delete li from DOM
                li.remove()
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error(err))
    }

    createDonation(commentInput, priceInput, cId){
        fetch(`${this.baseCampaignURL}/${cId}/donations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: commentInput, 
                price: priceInput,
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("Donation Data:", data)
            debugger
            if (data.status === 201){
                const d = new Donation(data.donation)
                d.addToDom()
            } else {
                alert(data.errors)
            }
            commentInput = ""
            priceInput = ""
        })
       .catch(err => console.error("Donation Error:", err))
    }

}

