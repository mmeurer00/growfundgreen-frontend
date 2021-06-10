class DonationForm  {

    constructor(li) {
        /* bind  lets you establish a fixed this context 
        for all subsequent calls — bypassing problems where 
        it's unclear what this will be, depending on the context 
        from which your function was called */
        this.handleSubmit = this.handleSubmit.bind(this)
        this.li = li
        //console.log(this.li)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const commentInput = event.target[0].value
        const priceInput = event.target[1].value
        const cId = this.li.dataset.id
        console.log(cId)
        growFundGreenAdapter.createDonation(commentInput, priceInput, cId)
    }
    addDonationForm() {
        const donationContainer = document.getElementById("donation-container")
        const cId = this.li.dataset.id
        console.log(cId)
        const dForm = document.createElement('form')
        dForm.id = `f-${cId}`
        dForm.innerHTML = `<h2> Submit your Donation for "${this.li.children[1].innerHTML}":</h2> 
        <h3>Comment: <input id="comment-input-${cId}" placeholder='comment' type='text' class="text-input"/></h3>
        <h3>Price: <input id="price-input-${cId}" placeholder='price' type='text' class="text-input"/></h3>
        <input id="donation-submit-${cId}" value='Donate' type='submit' class="btn btn-modal"/>`
        console.log(dForm)
        donationContainer.append(dForm)
        dForm.addEventListener("submit", this.handleSubmit)
    }
}



