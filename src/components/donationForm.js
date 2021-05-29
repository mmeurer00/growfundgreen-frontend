class DonationForm  {

    constructor(li) {
        /* bind  lets you establish a fixed this context 
        for all subsequent calls — bypassing problems where 
        it's unclear what this will be, depending on the context 
        from which your function was called */
        this.handleSubmit = this.handleSubmit.bind(this)
        this.li = li
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
        const dForm = document.createElement("form")

        dForm.innerHTML = `<input id="comment-input" placeholder='comment' type='text'/>
        <input id="price-input" placeholder='price' type='text'/><br>
        <input id="donation-submit" value='Donate' type='submit'/>`

        this.li.append(dForm)
        dForm.addEventListener("submit", this.handleSubmit)
    }
}