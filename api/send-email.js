// ===== SERVERLESS FUNCTION - ENVIO DE E-MAIL =====
// Função para envio de e-mails via Vercel Serverless Functions

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Responder OPTIONS para CORS
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Apenas aceitar POST
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false, 
            message: 'Método não permitido' 
        });
    }

    try {
        const { 
            nome, 
            email, 
            telefone, 
            empresa, 
            cnpj, 
            valorAporte, 
            descricao 
        } = req.body;

        // Validar dados obrigatórios
        if (!nome || !email || !telefone) {
            return res.status(400).json({
                success: false,
                message: 'Nome, email e telefone são obrigatórios'
            });
        }

        // Configurar transporter do nodemailer
        const transporter = nodemailer.createTransporter({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Template do e-mail
        const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Nova Solicitação de Aporte - ${empresa || 'Empresa'}</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1e3c72, #2a5298); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #2a5298; }
                .label { font-weight: bold; color: #1e3c72; }
                .value { margin-left: 10px; }
                .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🚀 Nova Solicitação de Aporte</h1>
                    <p>Recebemos uma nova solicitação através da landing page</p>
                </div>
                
                <div class="content">
                    <div class="info-box">
                        <h3>📋 Dados do Solicitante</h3>
                        <p><span class="label">Nome:</span><span class="value">${nome}</span></p>
                        <p><span class="label">E-mail:</span><span class="value">${email}</span></p>
                        <p><span class="label">Telefone:</span><span class="value">${telefone}</span></p>
                    </div>

                    ${empresa ? `
                    <div class="info-box">
                        <h3>🏢 Dados da Empresa</h3>
                        <p><span class="label">Empresa:</span><span class="value">${empresa}</span></p>
                        ${cnpj ? `<p><span class="label">CNPJ:</span><span class="value">${cnpj}</span></p>` : ''}
                    </div>
                    ` : ''}

                    <div class="info-box">
                        <h3>💰 Informações do Aporte</h3>
                        <p><span class="label">Valor Solicitado:</span><span class="value">R$ ${valorAporte || 'Não informado'}</span></p>
                        ${descricao ? `<p><span class="label">Descrição:</span><span class="value">${descricao}</span></p>` : ''}
                    </div>

                    <div class="footer">
                        <p>📧 E-mail enviado automaticamente pela Landing Page</p>
                        <p>🕒 ${new Date().toLocaleString('pt-BR')}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;

        // Configurar e-mail
        const mailOptions = {
            from: `"Aporte Capital" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: `🚀 Nova Solicitação de Aporte - ${empresa || nome}`,
            html: emailHtml
        };

        // Enviar e-mail
        await transporter.sendMail(mailOptions);

        // Resposta de sucesso
        return res.status(200).json({
            success: true,
            message: 'E-mail enviado com sucesso!'
        });

    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        
        return res.status(500).json({
            success: false,
            message: 'Erro interno do servidor',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}