async function signup(event) {
    try{
        event.preventDefault();
        console.log(event.target.email.value);

        const signupDetails = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password
        }

        console.log(signupDetails)
        const response = await axios.post('http://localhost:3000/user/signup', signupDetails)
            if(response.status === 201){
                window.location.href = "../Login/login.html" 
            }
            else{
                throw new Error('Failed to login')
            }
    }
    catch(err){
        document.body.innerHTML += `<div style="color: red;">${err}</div>`;
    }
}