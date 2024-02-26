import "./style.css";

const form = document.getElementById('form')
const pw1 = document.getElementById('password')
const pw2 = document.getElementById('passwordConfirm')
const hiddenform = document.getElementById('hiddenerror')
const email = document.getElementById('email')
const postCode = document.getElementById('postcode')
const countrySelect = document.getElementById('country')
const nodeList = form.querySelectorAll('input, select')

function postcodeCheck(country, postcode) {
	if (country.value == "United Kingdom") {
		const validRegex = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
			const ukPostcode = postcode.value
			if (validRegex.test(ukPostcode)) {
				return true
			}
			return false
	}
	if (country.value == "United States") {
		const validRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
		if (validRegex.test(postcode.value)) {
		   return true

		}
		return false
	}
	if (postcode.value !== "")  {
		return true
	}
	return false

		
}



function emailCheck(str) {
	const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return validRegex.test(str)
}

function checkPass(p1, p2) {
	return p1.value === p2.value
}

function validate() {
	if (emailCheck(email.value)) {
		if (postcodeCheck(countrySelect, postCode)) {
			if (checkPass(pw1, pw2)) {
				hiddenform.innerHTML = ``
				hiddenform.classList.add('hidden')
				return true
			}
			if (pw1 !== "" && pw2 !== "") {
			const err = new Error('Passwords must match')
			hiddenform.classList.remove('hidden');
			hiddenform.innerHTML = `<p>${err}</p>`;
			return false
			}
		}
		else if (postCode.value !== ""){
			const err = new Error('invalid postcode/ZIP code')
			hiddenform.classList.remove('hidden');
			hiddenform.innerHTML = `<p>${err}</p>`	
			return false
		}
	}
	else if (email.value !== "") {
		const err = new Error('invalid email')
		hiddenform.classList.remove('hidden');
		hiddenform.innerHTML = `<p>${err}</p>`;
		return false
	}
	return false
}


function listeners(list) {
	list.forEach(element => {
		element.addEventListener('blur', () => {
			validate()			
		})
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (validate()) {
		hiddenform.classList.remove('hidden');
		hiddenform.innerHTML = `<p>Great success! Give yourself a high five!</p>`;
		form.reset()
		return true
	}
	return false
})

listeners(nodeList)

