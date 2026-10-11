import Link from "next/link";
import { Icon } from "@/components/site";

export const metadata = { title: "Página não encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">Erro 404</div>
        <h1 className="page-hero-title">Página <span className="accent">não encontrada.</span></h1>
        <p className="page-hero-sub">O endereço pode ter mudado. Veja nossos serviços ou fale direto com a gente.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
          <Link className="btn" href="/servicos">Ver serviços <Icon name="arrow" size={16} /></Link>
          <Link className="btn ghost" href="/contato">Pedir orçamento</Link>
        </div>
      </div>
    </section>
  );
}
