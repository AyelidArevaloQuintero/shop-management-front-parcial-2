document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById("@").value;
    const password = document.getElementById("password").value;
    
    login(username, password)
})

function login(username, password){
   
    const credentials = { username: 'john_doe', password: 'pass123' };
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })


module.exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        User.findOne({
            username: username,
            password: password,
        })
            .then((user) => {
                if (user) {
                    res.json({
                        token: jwt.sign({ user: username }, 'secret_key'),
                    });
                } else {
                    res.status(401);
                    res.send('username or password is incorrect');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
};
}
tokenValidate()

function logout(){
    localStorage.removeItem('token')
    location.href = '../index.html'
}

function tokenValidate(){
    const TOKEN = localStorage.getItem('token')
    if(TOKEN !== 'QpwL5tke4Pnpja7X4'){
        location.href = '../index.html'
    }
    console.log('Autenticado ', TOKEN)
}
