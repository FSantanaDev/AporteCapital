# 🚀 Deploy no Vercel - Aporte Capital Landing Page

## 📋 Visão Geral

Este guia detalha como fazer o deploy da Landing Page no **Vercel**, utilizando Serverless Functions para o backend e hospedagem estática para o frontend.

## 🎯 Por que Vercel?

- ✅ **Deploy automático** via GitHub
- ✅ **Serverless Functions** integradas
- ✅ **CDN global** para performance
- ✅ **HTTPS automático**
- ✅ **Preview deployments** para cada commit
- ✅ **Zero configuração** para projetos simples

## 📦 Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Repositório no GitHub
- Node.js 18+ (para desenvolvimento local)

## 🏗️ Estrutura do Projeto

```
new_page/
├── api/                    # Serverless Functions
│   └── send-email.js      # Função de envio de e-mail
├── public/                # Arquivos estáticos
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/
├── vercel.json            # Configuração do Vercel
├── package.json           # Dependências
├── render.yaml           # Configuração do Render (mantida)
└── server.js             # Servidor local (desenvolvimento)
```

## 🚀 Passo a Passo para Deploy

### 1. Preparar o Repositório

```bash
# Adicionar arquivos ao Git
git add .
git commit -m "feat: configuração para deploy no Vercel"
git push origin main
```

### 2. Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"New Project"**
4. Selecione o repositório da landing page
5. Configure as variáveis de ambiente (próximo passo)

### 3. Configurar Variáveis de Ambiente

No painel do Vercel, adicione estas variáveis:

```env
# Configurações de E-mail (Gmail)
EMAIL_USER=@gmail.com
EMAIL_PASS=sua-senha-de-app
RECIPIENT_EMAIL=contato@suaempresa.com

# Configurações SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# Ambiente
NODE_ENV=production
```

### 4. Deploy Automático

O Vercel fará o deploy automaticamente após a conexão!

## 📧 Configuração do E-mail Gmail

### Passo 1: Ativar Verificação em 2 Etapas
1. Acesse [myaccount.google.com](https://myaccount.google.com)
2. Vá em **Segurança** → **Verificação em duas etapas**
3. Ative a verificação em 2 etapas

### Passo 2: Gerar Senha de App
1. Em **Segurança** → **Senhas de app**
2. Selecione **E-mail** e **Outro (nome personalizado)**
3. Digite "Vercel Landing Page"
4. Use a senha gerada na variável `EMAIL_PASS`

## 🌐 URLs e Endpoints

### Produção
- **Site**: `https://seu-projeto.vercel.app`
- **API**: `https://seu-projeto.vercel.app/api/send-email`

### Desenvolvimento Local
- **Site**: `http://localhost:3001`
- **API**: `http://localhost:3001/api/consultoria`

## 🔄 Deploy Automático

- ✅ **Push na branch main** → Deploy automático
- ✅ **Pull Requests** → Preview deployment
- ✅ **Rollback** → Versões anteriores disponíveis

## 📊 Monitoramento

### Logs das Functions
```bash
# Via CLI do Vercel
npx vercel logs
```

### Analytics
- Acesse o painel do Vercel
- Vá em **Analytics** para métricas de performance

## ⚡ Performance

### Otimizações Automáticas
- ✅ Compressão Gzip/Brotli
- ✅ Cache de assets estáticos
- ✅ CDN global
- ✅ Minificação automática

### Limites do Plano Gratuito
- **Execução**: 100GB-hours/mês
- **Invocações**: 1M/mês
- **Bandwidth**: 100GB/mês

## 🔧 Troubleshooting

### Erro 500 na API
```bash
# Verificar logs
npx vercel logs --follow

# Verificar variáveis de ambiente
npx vercel env ls
```

### E-mail não enviado
1. Verificar variáveis `EMAIL_USER` e `EMAIL_PASS`
2. Confirmar senha de app do Gmail
3. Verificar logs da function

### CORS Issues
O arquivo `vercel.json` já inclui configurações de CORS.

## 📝 Comandos Úteis

```bash
# Instalar CLI do Vercel
npm i -g vercel

# Login
vercel login

# Deploy manual
vercel --prod

# Logs em tempo real
vercel logs --follow

# Listar deployments
vercel ls

# Remover projeto
vercel remove
```

## 🔄 Próximos Passos

1. **Domínio Personalizado**
   - Adicionar domínio no painel Vercel
   - Configurar DNS

2. **Monitoramento Avançado**
   - Integrar com Sentry
   - Configurar alertas

3. **Analytics**
   - Google Analytics
   - Vercel Analytics Pro

## 📞 Suporte

- **Documentação**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Status**: [vercel-status.com](https://vercel-status.com)

## 🎉 Resultado Final

Após o deploy, você terá:

- ✅ Landing page responsiva e moderna
- ✅ Formulário funcional com envio de e-mail
- ✅ Deploy automático via GitHub
- ✅ HTTPS e CDN global
- ✅ Serverless Functions escaláveis

---

**🚀 Sua landing page estará online em minutos!**