email_admin = 'admin@dominio.com';
senha_admin = 'admin12345';

function login() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    // Validação de formato do email
    if (!email.match(/(?:[a-z0-9]|\.)+@[a-z0-9]+\.com/gi)) {
        window.alert('Email fora do padrão!');
        throw 'Email fora do padrão!';
    }

    // Validação de formato de senha
    if (!senha.match(/[^\W_]*[^\W_0-9]\d[^\W_]*|[^\W_]*\d[^\W_0-9][^\W_]*/g)) {
        window.alert('Senha fora do padrão!');
        throw 'Senha fora do padrão!';
    }

    if (email !== email_admin || senha_admin !== senha) {
        window.alert('Email ou senha incorretas!');
    } else {
        window.location.href = 'home.html';
    }
}

let bt_login = document.getElementById('bt_login');
bt_login.addEventListener('click', login);