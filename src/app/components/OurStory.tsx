import React from 'react';

export default function OurStory() {
  return (
    <section className="py-20 bg-[var(--brand-background)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
            <span className="text-[var(--brand-primary)]">Nossa</span> História
          </h2>
          <div className="space-y-6 text-[var(--text-muted)] text-lg leading-relaxed">
            <p>
              Começamos como desenvolvedores freelancers em 2019, trabalhando em projetos independentes e ajudando startups a transformar suas ideias em realidade. Com o tempo, percebemos que o mercado precisava de mais do que apenas código: precisava de um parceiro estratégico que entendesse tanto de tecnologia quanto de negócios.
            </p>
            <p>
              Hoje, a <span className="text-[var(--brand-primary)] font-semibold">Devlup</span> é uma software house reconhecida no Canadá, especializada em produtos digitais escaláveis. Já entregamos mais de 50 projetos, desde MVPs para startups até plataformas complexas para empresas estabelecidas.
            </p>
            <p>
              Nossa missão continua a mesma: construir não apenas produtos, mas <span className="text-white font-semibold">parcerias duradouras</span> com nossos clientes. Acreditamos que o sucesso de um projeto vai além do código — está na comunicação clara, no entendimento profundo do negócio e no compromisso com resultados mensuráveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 