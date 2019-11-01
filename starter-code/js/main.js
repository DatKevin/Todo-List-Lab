let input = document.querySelector(".new-item-description")
let list = document.querySelector(".task-list")

let parenttoggle = function(event) {
	let item = event.currentTarget
	let parent = item.closest("li")
	parent.classList.toggle("completed")
}

let removeitem = function(event) {
	let item = event.currentTarget
	let parent = item.closest("li")
	list.removeChild(parent)
}

let edititem = function(event) {
	let item = event.currentTarget
	let parent = item.closest("li")
	let form = document.createElement("form")
	let itemValue = item.previousSibling
	let saveedit = function() {
		itemValue.innerText = newinput.value
		parent.removeChild(form)
	}

	let newinput = document.createElement("input")
	newinput.setAttribute("type", "text")
	newinput.setAttribute("value", itemValue.textContent)
	form.append(newinput)

	let newbutton = document.createElement("button")
	newbutton.setAttribute("type", "submit")
	newbutton.classList.add("button")
	newbutton.innerText = "Save"
	newbutton.addEventListener("click", saveedit)
	form.append(newbutton)

	parent.append(form)
}

let createNewItem = function(event) {
	event.preventDefault()
	let newListItem = document.createElement("li")
	
	let checkbox = document.createElement("input")
	checkbox.setAttribute("type", "checkbox")
	checkbox.addEventListener("change", parenttoggle)
	newListItem.append(checkbox)

	let itemValue = document.createElement("span")
	itemValue.classList.add("item")
	itemValue.innerText = input.value
	newListItem.append(itemValue)

	//edit element must come after the span element in order for edititem function to work
	let edit = document.createElement("a")
	edit.setAttribute("href", "#")
	edit.classList.add("edit")
	edit.innerText = "Edit"
	edit.addEventListener("click", edititem)
	newListItem.append(edit)

	let remove = document.createElement("a")
	remove.setAttribute("href", "#")
	remove.classList.add("remove")
	remove.innerText = "Remove"
	remove.addEventListener("click", removeitem)
	newListItem.append(remove)
	list.append(newListItem)
}

let submitbutton = document.querySelector(".add-task")
submitbutton.addEventListener("click", createNewItem)

let first = document.querySelectorAll("li")[0]
let second = document.querySelectorAll("li")[1]
first.addEventListener("change", parenttoggle)
second.addEventListener("change", parenttoggle)
