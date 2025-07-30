document.getElementById('generateId').addEventListener('click', () => {
    const accessId = generateId();
    document.getElementById('accessId').value = accessId;
});

document.getElementById('generatePassword').addEventListener('click', () => {
    const password = generatePassword();
    document.getElementById('password').value = password;
});

document.getElementById('connectRemote').addEventListener('click', () => {
    const remoteId = document.getElementById('remoteId').value;
    const remotePassword = document.getElementById('remotePassword').value;

    // Validação dos campos
    if (!remoteId || !remotePassword) {
        alert('Por favor, preencha o ID Remoto e a Senha.');
        return;
    }

    // Lógica para conectar ao remoto
    console.log(`Conectando ao ID: ${remoteId} com senha: ${remotePassword}`);

    // Simular a captura de informações do usuário
    const userName = 'Usuário Exemplo'; // Aqui você pode pegar o nome do usuário de um input ou outra fonte
    const userIp = '192.168.1.1'; // Aqui você pode usar uma API para obter o IP real
    const userMac = '00:1A:2B:3C:4D:5E'; // Endereço MAC fictício ou obtido de outra forma

    // Exibir as informações
    document.getElementById('userName').innerText = userName;
    document.getElementById('userIp').innerText = userIp;
    document.getElementById('userMac').innerText = userMac;

    // Mostrar a seção de informações
    document.getElementById('userInfo').style.display = 'block';
});

// Função para gerar um ID aleatório
function generateId() {
    return 'ID-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Função para gerar uma senha aleatória
function generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    return Array.from({ length: 12 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

// Lógica para o botão de cadastro
document.getElementById('registerButton').addEventListener('click', () => {
    window.location.href = 'register.html'; // Redireciona para a página de cadastro
});