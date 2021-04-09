let contactState = {
    contacts: []
}

const addContact = (person) => {
    return {
        type: "ADD_CONTACT",
        payload: person
    }
}
const deleteContact = (person) => {
    return {
        type: "DELETE_CONTACT",
        payload: person
    }
}

function reducer(state = contactState, action) {
    switch (action.type) {
        case "ADD_CONTACT":
            let arr = state.state.contacts
            arr.push(action.payload)
            return {
                state: {
                    contacts: arr,
                    newContact: action.payload
                }
            }
        case "DELETE_CONTACT":
            let oldArr = state.state.contacts
            let x = parseInt(action.payload)
            let newArr = oldArr.filter(person => person.id !== x)
            return {
                state: {
                    contacts: newArr
                }
            }
        default:
            return {
                state
            }
    }
}

const store = Redux.createStore(reducer)

function renderWebPage() {
    let state = store.getState()
    const contactDiv = document.getElementById("contact-parent")
    let x = state.state.newContact
    console.log("in the render", state.state.contacts)
    let div = document.createElement("div")
    div.classList.add("contact")
    let h3 = document.createElement("h3")
    let h4email = document.createElement("h4")
    let h4phone = document.createElement("h4")
    let btn = document.createElement("button")
    btn.textContent = "Delete"
    btn.classList.add("del")
    h4phone.innerHTML = `Phone: ${x.phone}`
    h4email.innerHTML = `Email: ${x.email}`
    h3.innerHTML = `Name: ${x.firstName} ${x.lastName}`
    div.id = state.state.contacts.length - 1
    btn.id = state.state.contacts.length - 1
    btn.addEventListener("click", (e) => {
        let x = btn.parentNode
        console.log(x)
        if (e.target.id == btn.id) {
            contacts.removeChild(x)
            store.dispatch(deleteContact(x.id))
        }
    })
    div.appendChild(h3)
    div.appendChild(h4email)
    div.appendChild(h4phone)
    div.appendChild(btn)
    contactDiv.appendChild(div)
}

store.subscribe(() => console.log(store.getState()))

const addContactForm = document.getElementById("add-contact")
addContactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    store.dispatch(addContact({
        firstName: addContactForm.firstName.value,
        lastName: addContactForm.lastName.value,
        email: addContactForm.email.value,
        phone: addContactForm.phone.value,
        id: store.getState().state.contacts.length
    }))
    renderWebPage()
})
