# 🚀 Deploy no Render - Guia Completo

## ✅ Por que escolher o Render?

O **Render** é uma das melhores opções gratuitas para deploy de aplicações Node.js:

- ✅ **750 horas gratuitas por mês** (suficiente para manter online 24/7)
- ✅ **SSL automático** (HTTPS)
- ✅ **Deploy automático** via GitHub
- ✅ **Suporte completo ao Node.js** e Express
- ✅ **Variáveis de ambiente** seguras
- ✅ **Logs em tempo real**
- ✅ **Custom domains** gratuitos
- ✅ **Sem limitação de tráfego** no plano gratuito

## 📋 Pré-requisitos

1. **Conta no GitHub** (gratuita)
2. **Conta no Render** (gratuita) - [render.com](https://render.com)
3. **Repositório no GitHub** com o código da landing page

## 🔧 Configuração Automática

O projeto já está **100% configurado** para o Render! Todos os arquivos necessários estão prontos:

### ✅ Arquivos de Configuração Inclusos:

- **`render.yaml`** - Configuração completa do serviço
- **`package.json`** - Scripts e dependências otimizadas
- **`server.js`** - Servidor Express configurado
- **`.env.example`** - Template das variáveis de ambiente

## 🚀 Passo a Passo para Deploy

### 1️⃣ Preparar o Repositório GitHub

```bash
# 1. Inicializar repositório Git (se ainda não foi feito)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer commit inicial
git commit -m "🚀 Landing Page Aporte Capital - Deploy Render"

# 4. Conectar com repositório remoto
git remote add origin https://github.com/SEU-USUARIO/aporte-capital.git

# 5. Enviar para GitHub
git push -u origin main
```

### 2️⃣ Configurar no Render

1. **Acesse** [render.com](https://render.com) e faça login
2. **Clique** em "New +" → "Web Service"
3. **Conecte** sua conta GitHub
4. **Selecione** o repositório da landing page
5. **Configure** os dados:
   - **Name**: `aporte-capital`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`

### 3️⃣ Configurar Variáveis de Ambiente

No painel do Render, vá em **Environment** e adicione:

```env
NODE_ENV=production
PORT=10000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
RECIPIENT_EMAIL=email-destino@empresa.com
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=application/pdf,image/jpeg,image/png
WHATSAPP_NUMBER=5592999889392
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

### 4️⃣ Deploy Automático

O Render irá:
1. ✅ **Detectar** automaticamente o `render.yaml`
2. ✅ **Instalar** dependências (`npm install`)
3. ✅ **Iniciar** o servidor (`node server.js`)
4. ✅ **Gerar** URL pública (ex: `https://aporte-capital.onrender.com`)

## 🔐 Configuração do E-mail Gmail

Para o envio de e-mails funcionar:

### 1️⃣ Ativar Verificação em 2 Etapas
1. Acesse [myaccount.google.com](https://myaccount.google.com)
2. Vá em **Segurança** → **Verificação em duas etapas**
3. **Ative** a verificação em 2 etapas

### 2️⃣ Gerar Senha de App
1. Em **Segurança** → **Senhas de app**
2. **Selecione** "E-mail" e "Outro"
3. **Digite** "Render Landing Page"
4. **Copie** a senha gerada (16 caracteres)
5. **Use** esta senha na variável `EMAIL_PASS`

## 🌐 URLs e Endpoints

Após o deploy, sua aplicação estará disponível em:

- **URL Principal**: `https://seu-app.onrender.com`
- **API de Consultoria**: `https://seu-app.onrender.com/api/consultoria`
- **Health Check**: `https://seu-app.onrender.com/api/health`
- **Download de Arquivos**: `https://seu-app.onrender.com/download/[arquivo]`

## 🔄 Deploy Automático

O Render está configurado para **deploy automático**:

1. **Faça alterações** no código
2. **Commit e push** para GitHub:
   ```bash
   git add .
   git commit -m "✨ Atualização da landing page"
   git push
   ```
3. **Render detecta** automaticamente
4. **Deploy acontece** em ~2-3 minutos

## 📊 Monitoramento

### Logs em Tempo Real
- Acesse o **painel do Render**
- Vá em **Logs** para ver atividade em tempo real

### Health Check
- URL: `https://seu-app.onrender.com/api/health`
- Retorna status da aplicação

### Métricas
- **CPU e Memória** no painel do Render
- **Uptime** e disponibilidade

## ⚡ Performance e Otimizações

### Sleep Mode (Plano Gratuito)
- Aplicação "dorme" após **15 minutos** sem uso
- **Primeiro acesso** pode demorar ~30 segundos
- **Solução**: Usar serviços como UptimeRobot para manter ativo

### Otimizações Incluídas
- ✅ **Compressão gzip** habilitada
- ✅ **Cache de arquivos estáticos**
- ✅ **Minificação** de CSS/JS
- ✅ **Lazy loading** de imagens
- ✅ **CDN** automático do Render

## 🛠️ Troubleshooting

### Problema: Deploy falha
**Solução**: Verificar logs no painel do Render

### Problema: E-mail não envia
**Solução**: 
1. Verificar variáveis de ambiente
2. Confirmar senha de app do Gmail
3. Testar endpoint `/api/health`

### Problema: Arquivos não fazem upload
**Solução**:
1. Verificar `MAX_FILE_SIZE`
2. Confirmar `ALLOWED_FILE_TYPES`
3. Testar com arquivo menor

## 🎯 Próximos Passos

1. ✅ **Configurar domínio personalizado** (opcional)
2. ✅ **Configurar monitoramento** com UptimeRobot
3. ✅ **Adicionar analytics** (Google Analytics)
4. ✅ **Configurar backup** dos uploads

## 📞 Suporte

- **Documentação Render**: [render.com/docs](https://render.com/docs)
- **Status Page**: [status.render.com](https://status.render.com)
- **Community**: [community.render.com](https://community.render.com)

---

## 🎉 Resultado Final

Sua landing page estará **100% funcional** com:

- ✅ **Formulário de consultoria** funcionando
- ✅ **Upload de PDFs** operacional
- ✅ **Envio de e-mails** automático
- ✅ **Consulta de CNPJ** integrada
- ✅ **SSL/HTTPS** automático
- ✅ **Deploy automático** via GitHub

**URL de exemplo**: `https://aporte-capital.onrender.com`

🚀 **Sua landing page está pronta para receber clientes!**