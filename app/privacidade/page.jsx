import { COMPANY, CNPJ, EMAIL, PHONE_DISPLAY } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Política de Privacidade",
  description: "Como a EM Elétrica trata os dados enviados pelo formulário de orçamento, conforme a LGPD (Lei 13.709/2018).",
  path: "/privacidade",
});

const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

export default function PrivacidadePage() {
  return (
    <section className="privacy-page">
      <div className="container">
        <div className="eyebrow">Legal</div>
        <h1 className="page-hero-title">Política de <span className="accent">Privacidade</span></h1>
        <div className="privacy-body">
          <p className="privacy-updated">Vigente desde 16 de maio de 2026 · Atualizada em 11 de outubro de 2026 · LGPD (Lei 13.709/2018)</p>

          <h2>1. Quem somos</h2>
          <p><strong>{COMPANY}</strong><br />
            CNPJ: {CNPJ}<br />
            E-mail: <Mail /><br />
            Telefone: {PHONE_DISPLAY}</p>

          <h2>2. Quais dados coletamos</h2>
          <p>Coletamos apenas os dados que você preenche voluntariamente no formulário de orçamento: <strong>nome, telefone/WhatsApp, e-mail (opcional), tipo de serviço e descrição da necessidade.</strong></p>

          <h2>3. Para que usamos</h2>
          <p>Os dados são usados exclusivamente para responder ao seu pedido de orçamento e entrar em contato sobre o serviço solicitado. Seus dados não serão utilizados para envio de publicidade não solicitada.</p>

          <h2>4. Base legal (LGPD)</h2>
          <p>O tratamento é fundamentado no seu <strong>consentimento</strong> (Art. 7°, inciso I da Lei 13.709/2018), dado no momento do envio do formulário.</p>

          <h2>5. Como os dados chegam até nós</h2>
          <p>O formulário do site não grava seus dados em nenhum servidor. Ao tocar em enviar, ele abre o WhatsApp com a mensagem já escrita, e o envio só acontece se você confirmar no próprio WhatsApp. A conversa fica registrada no WhatsApp da empresa. Não utilizamos CRM, plataformas de automação de marketing ou ferramentas de rastreamento.</p>

          <h2>6. Compartilhamento</h2>
          <p>Seus dados <strong>não são vendidos, alugados ou repassados a terceiros</strong> sob nenhuma circunstância.</p>

          <h2>7. Cookies e armazenamento no navegador</h2>
          <p>Este site <strong>não utiliza cookies de rastreamento ou publicidade</strong>. Não há integração com Google Analytics, Meta Pixel ou ferramentas similares. O site guarda no seu navegador apenas uma marcação de que você já viu o aviso de privacidade, para não mostrá-lo de novo.</p>

          <h2>8. Seus direitos</h2>
          <p>Conforme a LGPD (Art. 18), você tem direito a:</p>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados</li>
            <li>Acessar os dados que nos forneceu</li>
            <li>Corrigir dados incompletos ou desatualizados</li>
            <li>Solicitar a eliminação dos seus dados</li>
            <li>Revogar o consentimento a qualquer momento</li>
          </ul>
          <p>Para exercer qualquer direito, envie um e-mail para <Mail />.</p>

          <h2>9. Encarregado de dados (DPO)</h2>
          <p>Para dúvidas sobre privacidade e proteção de dados: <Mail /></p>

          <h2>10. Alterações nesta política</h2>
          <p>Eventuais atualizações serão publicadas nesta página. Recomendamos consulta periódica.</p>
        </div>
      </div>
    </section>
  );
}
