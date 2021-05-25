class GrowFundGreenAdapter {
    
    constructor(baseURL="http://127.0.0.1:3000"){
        this.baseURL = `${baseURL}/api/v1/campaigns`
        /* when creating a new campaign adpater object, 
        this is setting up the URL for the user */
    }
    getCampaigns() {
        fetch(this.baseURL)
        .then(r => r.json())
        .then(campaigns => console.log(campaigns))
        .catch(error => console.log(erorr))
        // function fetchCampaigns(){
        //     fetch("http://127.0.0.1:3000/api/v1/campaigns")
        //     .then(r => r.json())
        //     .then(data => {
        //         data.forEach(addCampaign)
        //     })
        //     .catch(err => console.warn(err))
        }
    editCampaign(editMode) {
        fetch(`http://127.0.0.1:3000/api/v1/campaigns/${editMode.dataset.id}`, {
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
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error(err))
    }

    createCampaign(nameInput){
        fetch("http://127.0.0.1:3000/api/v1/campaigns", {
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
        fetch(`http://127.0.0.1:3000/api/v1/campaigns/${li.dataset.id}`, {
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

