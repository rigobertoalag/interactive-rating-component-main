let error = document.getElementById('error')
let userResponse = document.getElementById('user-response')

let userValue = null

const userRate = (rate) => {
    return userValue = rate
}

const displayThanks = () => {
    if (userValue) {
        document.getElementById('rate').style.display = 'none'
        document.getElementById('state').style.display = 'block'

        userResponse.innerHTML = `You selected ${userValue} out of 5`
    }
    error.innerHTML = '<p>Please select an option</p>'
}