# 🚀 Deploy no Railway - Guia Completo

## 🎯 **Por que Railway?**

✅ **TODAS as funcionalidades funcionam perfeitamente:**
- 📧 Sistema de e-mail completo
- 📁 Upload de arquivos PDF
- 🔍 Consulta automática de CNPJ
- 📱 Mensagens WhatsApp personalizadas
- 🔗 Links temporários para download

## 📋 **Passo a Passo**

### **1. Criar Conta no Railway**
1. Acesse: https://railway.app
2. Clique em "Start a New Project"
3. Conecte com GitHub
4. Autorize o Railway

### **2. Deploy do Projeto**
1. **Selecione "Deploy from GitHub repo"**
2. **Escolha o repositório:** `FSantanaDev/AporteCapital`
3. **Railway detecta automaticamente:** Node.js
4. **Deploy inicia automaticamente**

### **3. Configurar Variáveis de Ambiente**
No painel do Railway:

```env
# E-mail
EMAIL_USER=bragasan34@gmail.com
EMAIL_PASS=uhpk dytc dibh ecwr
RECIPIENT_EMAIL=bragasan1@yahoo.com.br

# Servidor
NODE_ENV=production
PORT=3001

# Upload
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=application/pdf,image/jpeg,image/png

# WhatsApp
WHATSAPP_NUMBER=5592999889392

# SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

### **4. Domínio Personalizado**
1. **Railway gera automaticamente:** `https://seu-projeto.up.railway.app`
2. **Opcional:** Conectar domínio próprio

## 🎉 **Resultado Final**

### **🌐 URL de Demonstração:**
`https://aportecapital.up.railway.app`

### **✅ Funcionalidades Ativas:**
- ✅ Formulário completo funcionando
- ✅ E-mails enviados automaticamente
- ✅ Upload de documentos PDF
- ✅ Consulta de CNPJ em tempo real
- ✅ Links temporários seguros
- ✅ Mensagens WhatsApp personalizadas
- ✅ Design responsivo

## 🔧 **Comandos Úteis**

```bash
# Fazer deploy de atualizações
git add .
git commit -m "🚀 Atualização para demonstração"
git push origin master

# Railway faz deploy automaticamente!
```

## 💰 **Custos**

- **🆓 Gratuito:** 500 horas/mês + $5 crédito
- **📊 Monitoramento:** Uso em tempo real
- **⚡ Performance:** Excelente para demos

## 🎯 **Para o Cliente**

**"Demonstração completa funcionando em:"**
`https://aportecapital.up.railway.app`

**Todas as funcionalidades ativas:**
- Envio de e-mails reais
- Upload de documentos
- Consulta de CNPJ automática
- Sistema profissional completo

---

## 🚀 **Alternativas Gratuitas**

### **Render.com**
- ✅ Gratuito permanente
- ⚠️ Dorme após 15min (acorda em 30s)
- ✅ Todas funcionalidades

### **Vercel + Serverless**
- ✅ Muito rápido
- ⚠️ Requer adaptações no código
- ✅ Boa para demos

**Railway é a melhor opção para demonstração completa!** 🎉