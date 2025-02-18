const chatbotButton = document.getElementById("chatbotButton"),
    chatbotWindow = document.getElementById("chatbotWindow"),
    closeChatbot = document.getElementById("closeChatbot"),
    sendChatbot = document.getElementById("sendChatbot"),
    chatbotInput = document.getElementById("chatbotInput"),
    chatbotMessages = document.getElementById("chatbotMessages");
chatbotButton.addEventListener("click", () => {
    chatbotWindow.style.display = "flex", chatbotButton.style.display = "block"
}), closeChatbot.addEventListener("click", () => {
    chatbotWindow.style.display = "none", chatbotButton.style.display = "block"
});

function addMessage(a, b) {
    const c = document.createElement("div");
    c.classList.add("chat-message", a);
    const d = document.createElement("span");
    d.classList.add("message-content"), d.textContent = b, c.appendChild(d), chatbotMessages.appendChild(c), chatbotMessages.scrollTop = chatbotMessages.scrollHeight
}

function getBotResponse(a) {
    const b = a.toLowerCase();
    return b.includes("ol\xE1") || b.includes("oi") ? "Ol\xE1! Como posso ajudar voc\xEA hoje?" : b.includes("pre\xE7o") ? "Nossos pre\xE7os variam de acordo com o plano. Voc\xEA gostaria de saber mais sobre os planos?" : b.includes("planos") ? "Temos Plano B\xE1sico, Intermedi\xE1rio e Avan\xE7ado. Qual deles voc\xEA gostaria de saber mais?" : b.includes("plano b\xE1sico") ? "O Plano B\xE1sico custa R$ 499,00 e inclui 1 p\xE1gina personalizada, design responsivo, suporte b\xE1sico e 1 formul\xE1rio de contato." : b.includes("plano intermedi\xE1rio") ? "O Plano Intermedi\xE1rio custa R$ 999,00 e inclui at\xE9 5 p\xE1ginas personalizadas, design responsivo, integra\xE7\xE3o com redes sociais, otimiza\xE7\xE3o para SEO e suporte priorit\xE1rio." : b.includes("plano avan\xE7ado") ? "O Plano Avan\xE7ado custa R$ 1.999,00 e inclui p\xE1ginas ilimitadas, design exclusivo e responsivo, integra\xE7\xE3o com e-commerce, manuten\xE7\xE3o mensal, otimiza\xE7\xE3o SEO avan\xE7ada e suporte premium." : "Desculpe, n\xE3o entendi. Voc\xEA poderia reformular a pergunta?"
}
sendChatbot.addEventListener("click", () => {
    const a = chatbotInput.value.trim();
    "" !== a && (addMessage("user", a), chatbotInput.value = "", setTimeout(() => {
        const b = getBotResponse(a);
        addMessage("bot", b)
    }, 1e3))
}), chatbotInput.addEventListener("keypress", a => {
    "Enter" === a.key && sendChatbot.click()
}), setTimeout(() => {
    addMessage("bot", "Caso queira retornar ao site NovoWeb. Digite \"voltar\"")
}, 400), setTimeout(() => {
    addMessage("bot", "Esse \xE9 um site pr\xE1tico e eficiente para gerenciar contatos e vender com facilidade. Alcance sua regi\xE3o e ofere\xE7a uma experi\xEAncia personalizada aos seus clientes. Simplicidade e sucesso ao seu alcance!")
}, 1500);