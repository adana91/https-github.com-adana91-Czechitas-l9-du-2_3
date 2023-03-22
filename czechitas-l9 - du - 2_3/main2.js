// tady je místo pro náš program

const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}


const frm = document.getElementById('login');
frm.addEventListener('submit', (event) => {
    // event.preventDefault();
    const email = document.getElementById('email');
    console.log(email.value) 
    const password = document.getElementById('password');
    console.log(password.value)

    if (email.value == 'bartolomej.rozumbrada@gmail.com' & password.value == 'vimzenicnevim') {
        alert("Přihlášený uživatel: Bartoloměj")
    } else {
        alert("Email nebo heslo nejsou v poradku")
    }
}) 

// funguje


