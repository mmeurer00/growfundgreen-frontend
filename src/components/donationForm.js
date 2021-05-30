class DonationForm  {

    constructor(li) {
        /* bind  lets you establish a fixed this context 
        for all subsequent calls — bypassing problems where 
        it's unclear what this will be, depending on the context 
        from which your function was called */
        this.handleSubmit = this.handleSubmit.bind(this)
        this.li = li
        console.log(this.li)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const commentInput = event.target[0]
        const priceInput = event.target[1]
        let cId = priceInput.parentElement.parentElement.dataset.id

        growFundGreenAdapter.createDonation(commentInput, priceInput, cId)
    }
    renderForm() {
        const cId = this.li.dataset.id
        console.log(cId)
        const dForm = document.createElement("form")
        dForm.id = `f-${cId}`
        dForm.innerHTML = `<input id="comment-input-${cId}" placeholder='comment' type='text'/>
        <input id="price-input-${cId}" placeholder='price' type='text'/><br>
        <input id="donation-submit-${cId}" value='Donate' type='submit'/>`
        console.log(dForm)
        this.li.append(dForm)
        dForm.addEventListener("submit", this.handleSubmit)
    }
}