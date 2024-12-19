// Transição suave ao rolar para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Animação para destacar seções ao rolar
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  // Adicionar animações a todas as seções
  document.querySelectorAll('section, .container').forEach((section) => {
    observer.observe(section);
  });
  
  // Animação para os botões (hover)
  const buttons = document.querySelectorAll('.btn-default');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.3s ease';
    });
  
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });



// Abrir modal de sucesso
function showSuccessModal() {
  document.getElementById("successModal").style.display = "block";
}

// Fechar modal de sucesso
function closeSuccessModal() {
  document.getElementById("successModal").style.display = "none";
}

// Abrir modal de login
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Fechar modal de login
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Fechar modal ao clicar fora dele
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Salvar dados do usuário no localStorage
function saveUserData(name, email, password) {
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
}

// Carregar dados do usuário ao iniciar a página
function loadUserData() {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");

  if (name && email) {
    // Exibir mensagem de boas-vindas se os dados existirem
    document.getElementById("form-container").style.display = "none";
    document.getElementById("welcome-message").textContent = `Bem-vindo de volta, ${name}!`;
    document.getElementById("welcome-message").style.display = "block";
    updateLoginButton(); // Atualizar botão de login
  }
}

// Atualizar o botão de login
function updateLoginButton() {
  const loginButton = document.getElementById("loginButton");
  const logoutContainer = document.getElementById("logout-container");
  const name = localStorage.getItem("userName");

  if (name) {
    // Usuário conectado
    loginButton.innerHTML = `<i class="fa-solid fa-user"></i> Olá, ${name}`;
    loginButton.classList.add("connected");
    loginButton.onclick = null; // Remove função de abrir modal
    logoutContainer.style.display = "block"; // Exibe botão de logout
  } else {
    // Usuário desconectado
    loginButton.innerHTML = `<i class="fa-solid fa-user"></i> Login`;
    loginButton.classList.remove("connected");
    loginButton.onclick = openModal; // Restaura função de abrir modal
    logoutContainer.style.display = "none"; // Oculta botão de logout
  }
}

// Função de logout
function logoutUser() {
  if (confirm("Tem certeza de que deseja sair da conta?")) {
    localStorage.clear(); // Remove dados do usuário
    updateLoginButton(); // Atualiza botão para estado padrão
    document.getElementById("form-container").style.display = "block";
    document.getElementById("welcome-message").style.display = "none";
    alert("Você saiu da conta com sucesso!");
  }
}

// Evento de clique no botão "Criar conta"
document.getElementById("createAccountButton").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  saveUserData(name, email, password);
  updateLoginButton(); // Atualiza botão de login
  closeModal(); // Fecha o modal de registro
  showSuccessModal(); // Mostra o modal de sucesso
});

// Modificar o submit do formulário
document.querySelector('form').onsubmit = function (e) {
  e.preventDefault();
  closeModal(); // Fecha o modal de registro
  showSuccessModal(); // Mostra o modal de sucesso
};

// Carregar os dados ao iniciar a página
document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  updateLoginButton();
});

// Evento de clique no botão "Sair"
document.getElementById("logoutButton").addEventListener("click", logoutUser);









//ChatBot
// Seleção dos elementos //
const chatbotButton = document.getElementById('chatbotButton');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const sendChatbot = document.getElementById('sendChatbot');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

// Função para abrir o chatbot
chatbotButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
    chatbotButton.style.display = 'block';
});

// Função para fechar o chatbot //
closeChatbot.addEventListener('click', () => {
  if (chatbotWindow && chatbotButton) { 
      chatbotWindow.style.display = 'none'; 
      chatbotButton.style.display = 'block'; 
  } else {
      console.error('Elementos não encontrados: chatbotWindow ou chatbotButton.');
  }
});

// Função para adicionar mensagem na área de mensagens
function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    const messageContent = document.createElement('span');
    messageContent.classList.add('message-content');
    messageContent.textContent = text;
    messageDiv.appendChild(messageContent);
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Função para responder as mensagens // alterar e adicionar na pag Sobre
function getBotResponse(message) {
    
    const msg = message.toLowerCase();
    if (msg.includes('olá') || msg.includes('ola') || msg.includes('Ola') || msg.includes('Olá') || msg.includes('oi')) {
        return 'Olá! Como posso ajudar você hoje?';
    } else if (msg.includes('preço')) {
        return 'Nossos preços variam de acordo com o plano. Você gostaria de saber mais sobre os planos?';
    } else if (msg.includes('planos')) {
        return 'Temos Plano Básico, Intermediário e Avançado. Qual deles você gostaria de saber mais?';
    } else if (msg.includes('plano básico')) {
        return 'O Plano Básico custa R$ 499,00 e inclui 1 página personalizada, design responsivo, suporte básico e 1 formulário de contato.';
    } else if (msg.includes('plano intermediário')) {
        return 'O Plano Intermediário custa R$ 999,00 e inclui até 5 páginas personalizadas, design responsivo, integração com redes sociais, otimização para SEO e suporte prioritário.';
    } else if (msg.includes('plano avançado')) {
        return 'O Plano Avançado custa R$ 1.999,00 e inclui páginas ilimitadas, design exclusivo e responsivo, integração com e-commerce, manutenção mensal, otimização SEO avançada e suporte premium.';
    } else {
        return 'Desculpe, não entendi. Você poderia reformular a pergunta?';
        /*COLOCAR AS MENSAGENS DE APOIO PARA USAR O CHAT*/
    }
}

// Evento de envio de mensagem
sendChatbot.addEventListener('click', () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage !== '') {
        addMessage('user', userMessage);
        chatbotInput.value = '';
        
        // Simular tempo de resposta
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            addMessage('bot', botResponse);
        }, 1000);
    }
});

// Permitir envio de mensagem pressionando Enter
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatbot.click();
    }
});
setTimeout(() => {
    addMessage('bot', 'Olá! Bem-vindo ao NovoWeb Chatbot. Como posso te ajudar hoje?');
}, 400); 
setTimeout(() => {
    addMessage('bot', 'Descubra os planos que temos para você! 1-Plano Básico 2-Plano Intermediário 3-Plano Avançado');
}, 1000); 


//Login com Google

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Configurar o Google OAuth
passport.use(new GoogleStrategy({
    clientID: "SUA_GOOGLE_CLIENT_ID",
    clientSecret: "SUA_GOOGLE_CLIENT_SECRET",
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    // Salvar informações do usuário no banco de dados
    return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Rotas de autenticação
app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/dashboard");
    }
);

// Inicializar o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
