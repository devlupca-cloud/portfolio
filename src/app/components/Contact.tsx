'use client';

import Image from "next/image";
import { useState } from "react";
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

export default function Contact({ locale }: { locale: Locale }) {
  const t = getContent(locale).contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});

  const testimonials = [
    {
      text: "A Devlup transformou nossa ideia em um produto real em tempo recorde. A comunicação foi excelente e o resultado superou nossas expectativas. Recomendo sem hesitação!",
      name: "João Silva",
      role: "CTO na TechX",
      img: "/samantha.png"
    },
    {
      text: "Profissionais extremamente dedicados e técnicos. Entregaram um app mobile que hoje tem mais de 10k downloads. O processo foi transparente e ágil.",
      name: "Maria Oliveira",
      role: "Product Manager na Inova",
      img: "/renan.png"
    },
    {
      text: "Como empreendedor, precisava de um time que entendesse meu negócio. A Devlup não só desenvolveu, mas também sugeriu melhorias que aumentaram nossa conversão em 40%.",
      name: "Carlos Souza",
      role: "Empreendedor",
      img: "/samantha.png"
    }
  ];

  return (
    <section id="contact" className="w-full px-0 bg-[var(--brand-background)] h-[1000px] mb-10">
      <div className="grid md:grid-cols-2 gap-0 items-stretch h-full min-h-0">
        {/* Lado esquerdo: Formulário */}
        <div className="max-w-2xl w-full py-[120px] px-12 ml-24 mt-24 mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-left">
            <span className="text-[var(--brand-primary)]">{t.title.split(' ')[0]}</span> {t.title.split(' ').slice(1).join(' ')}
          </h2>
          <div className="flex justify-start mb-6">
            <div className="w-24 h-1 bg-[var(--brand-primary)] rounded" />
          </div>
          <p className="text-left text-[var(--brand-primary)] mb-10 font-medium">{t.subtitle}</p>
          <form
            className="p-0 rounded-none shadow-none flex flex-col gap-4 bg-transparent"
            onSubmit={async (e) => {
              e.preventDefault();
              setSubmitting(true);
              setErrors({});
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
              });
              setSubmitting(false);
              if (res.ok) {
                alert(t.success);
                setName(''); setEmail(''); setMessage('');
                return;
              }
              const data = await res.json();
              if (data?.errors) setErrors(data.errors);
            }}
          >
            <input
              type="text"
              placeholder={t.name}
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ outline: 'none' }}
              className="w-full bg-[var(--brand-muted)] border border-[var(--border)] text-white placeholder-[var(--text-subtle)] py-4 px-4 rounded-md outline-none focus:outline-none ring-0 focus:ring-2 focus:ring-[var(--brand-primary)] transition"
            />
            {errors.name && <span className="text-red-400 text-sm">{errors.name}</span>}
            <input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ outline: 'none' }}
              className="w-full bg-[var(--brand-muted)] border border-[var(--border)] text-white placeholder-[var(--text-subtle)] py-4 px-4 rounded-md outline-none focus:outline-none ring-0 focus:ring-2 focus:ring-[var(--brand-primary)] transition"
            />
            {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
            <textarea
              placeholder={t.message}
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              style={{ outline: 'none' }}
              className="w-full bg-[var(--brand-muted)] border border-[var(--border)] text-white placeholder-[var(--text-subtle)] py-4 px-4 rounded-md resize-none outline-none focus:outline-none ring-0 focus:ring-2 focus:ring-[var(--brand-primary)] transition"
            />
            {errors.message && <span className="text-red-400 text-sm">{errors.message}</span>}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="border-2 border-white text-white px-8 py-2 rounded-none font-medium transition hover:bg-white hover:text-[#232428] disabled:opacity-50 flex items-center gap-2"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.sending}
                  </>
                ) : (
                  t.send
                )}
              </button>
            </div>
          </form>
        </div>
        
        {/* Lado direito: Depoimentos */}
        <div className="grid grid-cols-2 grid-rows-2 gap-0 h-full w-full min-h-0">
          {/* Depoimento grande à esquerda (row-span-2) */}
          <div className="bg-[var(--surface-2)] border border-[var(--border)] h-full w-full flex flex-col justify-start col-span-1 row-span-2 p-8">
            {/* Primeira linha: apóstrofo e imagem */}
            <div className="flex items-start justify-between mb-4">
              <span className="text-5xl text-[var(--brand-primary)] font-bold leading-none">“</span>
              <Image src={testimonials[0].img} alt={testimonials[0].name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-[var(--brand-primary)] object-cover" />
            </div>
            {/* Segunda linha: texto */}
            <div className="text-white mb-2 pb-0">{testimonials[0].text}</div>
            {/* Terceira linha: nome e cargo */}
            <div className="pt-10">
              <div className="font-bold text-white">{testimonials[0].name}</div>
              <div className="text-xs text-[var(--text-muted)]">{testimonials[0].role}</div>
            </div>
          </div>
          {/* Depoimentos menores à direita */}
          <div className="bg-[var(--surface-2)] border border-[var(--border)] h-full w-full flex flex-col justify-start col-span-1 row-span-1 p-8">
            <div className="flex items-start justify-between mb-4">
              <span className="text-5xl text-[var(--brand-primary)] font-bold leading-none">“</span>
              <Image src={testimonials[1].img} alt={testimonials[1].name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-[var(--brand-primary)] object-cover" />
            </div>
            <div className="text-white mb-2 pb-0">{testimonials[1].text}</div>
            <div className="pt-10">
              <div className="font-bold text-white">{testimonials[1].name}</div>
              <div className="text-xs text-[var(--text-muted)]">{testimonials[1].role}</div>
            </div>
          </div>
          <div className="bg-[var(--surface-2)] border border-[var(--border)] h-full w-full flex flex-col justify-start col-span-1 row-span-1 p-8">
            <div className="flex items-start justify-between mb-4">
              <span className="text-5xl text-[var(--brand-primary)] font-bold leading-none">“</span>
              <Image src={testimonials[2].img} alt={testimonials[2].name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-[var(--brand-primary)] object-cover" />
            </div>
            <div className="text-white mb-2 pb-0">{testimonials[2].text}</div>
            <div className="pt-10">
              <div className="font-bold text-white">{testimonials[2].name}</div>
              <div className="text-xs text-[var(--text-muted)]">{testimonials[2].role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 