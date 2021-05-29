let editMode = false
let currentDonations = false
const growFundGreenAdapter = new GrowFundGreenAdapter("http://127.0.0.1:3000")
const campaignForm = new CampaignForm


document.addEventListener("DOMContentLoaded", () => {
    campaignForm.addCreateForm()
    growFundGreenAdapter.getCampaigns()
    campaignForm.listenEditDelete()
})