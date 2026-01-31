'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: 'Quanto custa desenvolver um produto?',
    answer: 'O investimento varia conforme a complexidade, escopo e tecnologias. Oferecemos orçamentos transparentes após entender seu projeto. Trabalhamos com projetos a partir de CAD $5.000, e nossos preços por hora estão na seção de Pricing.',
  },
  {
    question: 'Quanto tempo leva para desenvolver?',
    answer: 'Depende do escopo. Um MVP pode levar de 4 a 8 semanas, enquanto produtos mais complexos podem levar de 3 a 6 meses. Sempre definimos prazos realistas e comunicamos qualquer mudança com antecedência.',
  },
  {
    question: 'Vocês fazem manutenção após o lançamento?',
    answer: 'Sim! Oferecemos suporte pós-lançamento, correções de bugs, atualizações e melhorias contínuas. Trabalhamos com planos de manutenção mensal ou suporte sob demanda.',
  },
  {
    question: 'Como funciona o processo de pagamento?',
    answer: 'Trabalhamos com pagamentos parcelados conforme marcos do projeto. Geralmente: 30% no início, 40% em marcos intermediários e 30% na entrega final. Para projetos menores, podemos ajustar conforme necessário.',
  },
  {
    question: 'Vocês trabalham com startups?',
    answer: 'Sim! Adoramos trabalhar com startups. Entendemos a necessidade de MVPs rápidos, orçamentos enxutos e iterações ágeis. Já ajudamos várias startups a validar ideias e escalar produtos.',
  },
  {
    question: 'Qual a diferença entre vocês e freelancers?',
    answer: 'Somos uma software house com processos estabelecidos, metodologia ágil e suporte contínuo. Você tem um time dedicado, não uma pessoa sozinha. Garantimos qualidade, prazos e comunicação constante.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[var(--brand-background)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          <span className="text-[var(--brand-primary)]">Perguntas</span> Frequentes
        </h2>
        <p className="text-center text-[var(--text-muted)] max-w-2xl mx-auto mb-12">
          Tire suas dúvidas sobre como trabalhamos, prazos, investimentos e processos.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--surface-2)] border border-[var(--border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[var(--brand-muted)] transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-[var(--text-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[var(--text-muted)] mb-4">Ainda tem dúvidas?</p>
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--brand-primary-strong)] hover:bg-[var(--brand-primary)] text-white rounded-md font-semibold transition-colors shadow-md"
          >
            Fale conosco
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

