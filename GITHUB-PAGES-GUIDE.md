# 🚀 Guia Completo: Publicar no GitHub Pages

Este guia te ensina como publicar sua Landing Page **Aporte Capital** no GitHub Pages de forma gratuita e profissional.

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Método 1: Configuração Automática](#método-1-configuração-automática)
3. [Método 2: Configuração Manual](#método-2-configuração-manual)
4. [Configurações Avançadas](#configurações-avançadas)
5. [Domínio Personalizado](#domínio-personalizado)
6. [Troubleshooting](#troubleshooting)
7. [Otimizações](#otimizações)

---

## ✅ Pré-requisitos

- [x] Repositório criado no GitHub ✅
- [x] Arquivos enviados para o repositório ✅
- [x] Conta GitHub ativa ✅

**Seu repositório:** https://github.com/FSantanaDev/AporteCapital

---

## 🎯 Método 1: Configuração Automática (Recomendado)

### Passo 1: Acessar Configurações do Repositório

1. **Acesse seu repositório:** https://github.com/FSantanaDev/AporteCapital
2. **Clique na aba "Settings"** (no menu superior do repositório)
3. **Role para baixo** até encontrar a seção "Pages" no menu lateral esquerdo

### Passo 2: Configurar GitHub Pages

1. **Clique em "Pages"** no menu lateral
2. **Em "Source"**, selecione: **"Deploy from a branch"**
3. **Em "Branch"**, selecione: **"master"** (ou "main" se for o caso)
4. **Em "Folder"**, deixe: **"/ (root)"**
5. **Clique em "Save"**

### Passo 3: Aguardar Deploy

- ⏱️ **Tempo:** 2-5 minutos
- 🔄 **Status:** Aparecerá uma mensagem "Your site is ready to be published"
- ✅ **URL:** Será gerada automaticamente: `https://fsantanadev.github.io/AporteCapital/`

---

## 🔧 Método 2: Configuração Manual

### Passo 1: Preparar Arquivos

Primeiro, vamos fazer upload dos novos arquivos criados:

```bash
# No terminal, dentro da pasta new_page
git add .
git commit -m "📄 Add GitHub Pages configuration and static version"
git push origin master
```

### Passo 2: Configurar Actions (Opcional)

1. **Vá para a aba "Actions"** no seu repositório
2. **Clique em "New workflow"**
3. **Procure por "Static HTML"** ou "Jekyll"
4. **Configure o workflow** (opcional para sites estáticos)

---

## ⚙️ Configurações Avançadas

### Arquivo `_config.yml` Criado

Já criamos um arquivo de configuração Jekyll para você:

```yaml
title: "Aporte Capital - Investimentos Estratégicos"
description: "Plataforma especializada em aportes financeiros"
url: "https://fsantanadev.github.io"
baseurl: "/AporteCapital"
```

### Versão Estática Criada

Criamos uma versão `github-pages.html` que funciona sem servidor Node.js:

- ✅ **Formulário funcional** (redireciona para WhatsApp)
- ✅ **Design responsivo** mantido
- ✅ **Todas as funcionalidades** preservadas
- ✅ **SEO otimizado** para GitHub Pages

---

## 🌐 Domínio Personalizado (Opcional)

### Passo 1: Configurar CNAME

1. **Na pasta raiz** do repositório, crie um arquivo `CNAME`
2. **Adicione seu domínio:**
   ```
   www.aportecapital.com
   ```

### Passo 2: Configurar DNS

No seu provedor de domínio, configure:

```
Tipo: CNAME
Nome: www
Valor: fsantanadev.github.io
```

### Passo 3: Ativar HTTPS

1. **Vá em Settings > Pages**
2. **Marque "Enforce HTTPS"**
3. **Aguarde certificado SSL** (automático)

---

## 🔍 Verificação e Teste

### URLs de Acesso

Após a configuração, sua landing page estará disponível em:

- **URL Principal:** https://fsantanadev.github.io/AporteCapital/
- **Versão Estática:** https://fsantanadev.github.io/AporteCapital/github-pages.html
- **Com domínio próprio:** https://www.seudominio.com (se configurado)

### Checklist de Verificação

- [ ] Site carrega corretamente
- [ ] Design responsivo funciona
- [ ] Formulário redireciona para WhatsApp
- [ ] Imagens carregam
- [ ] Links internos funcionam
- [ ] SEO tags estão presentes

---

## 🚨 Troubleshooting

### Problema: Site não carrega

**Solução:**
1. Verifique se o branch está correto (master/main)
2. Aguarde 5-10 minutos após configuração
3. Limpe cache do navegador (Ctrl+F5)

### Problema: CSS não carrega

**Solução:**
1. Verifique caminhos relativos nos arquivos
2. Use `github-pages.html` como página principal
3. Confirme se `styles.css` está no repositório

### Problema: Imagens não aparecem

**Solução:**
1. Verifique se pasta `images/` foi enviada
2. Use caminhos relativos: `images/logo.svg`
3. Confirme extensões dos arquivos

### Problema: Formulário não funciona

**Solução:**
1. Use a versão `github-pages.html`
2. Formulário redireciona para WhatsApp (funcional)
3. Para email, considere serviços como Formspree

---

## 🚀 Otimizações

### Performance

1. **Comprimir imagens:**
   ```bash
   # Use ferramentas como TinyPNG
   # Converta para WebP quando possível
   ```

2. **Minificar CSS/JS:**
   ```bash
   # Use ferramentas online ou build tools
   ```

### SEO

1. **Sitemap automático** (Jekyll gera automaticamente)
2. **Meta tags** já configuradas
3. **Schema.org** pode ser adicionado

### Analytics

Adicione Google Analytics no `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 📊 Monitoramento

### GitHub Pages Status

- **Status:** https://www.githubstatus.com/
- **Builds:** Aba "Actions" do seu repositório
- **Logs:** Detalhes de cada deploy

### Ferramentas Úteis

- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **Google Search Console:** Para SEO

---

## 🎉 Próximos Passos

1. **Configure Google Analytics**
2. **Adicione Google Search Console**
3. **Configure domínio personalizado**
4. **Otimize imagens para WebP**
5. **Adicione mais páginas** (blog, portfólio, etc.)

---

## 📞 Suporte

Se encontrar problemas:

1. **Documentação oficial:** https://docs.github.com/pages
2. **Community:** https://github.community/
3. **Issues:** Crie uma issue no seu repositório

---

## ✅ Resumo Rápido

```bash
# 1. Fazer upload dos novos arquivos
git add .
git commit -m "📄 Add GitHub Pages files"
git push origin master

# 2. Ir para Settings > Pages
# 3. Selecionar branch "master"
# 4. Aguardar deploy (2-5 min)
# 5. Acessar: https://fsantanadev.github.io/AporteCapital/
```

**🎯 Sua landing page estará online em menos de 10 minutos!**

---

*Criado por Francisco Santana - [GitHub](https://github.com/FSantanaDev) | [LinkedIn](https://linkedin.com/in/francisco-santana)*