import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = ({ cores }) => {
  const depoimentos = [
    { nome: "Ricardo S.", cargo: "Diretor Executivo", texto: "O Dr. Ângelo demonstrou um domínio técnico impecável e uma visão estratégica decisiva." },
    { nome: "Mariana T.", cargo: "Gestora de RH", texto: "Atendimento humanizado e focado em resultados. Segurança jurídica fundamental." },
    { nome: "Beatriz M.", cargo: "Aposentada", texto: "A condução do meu processo de inventário foi feita com extrema sensibilidade e agilidade, trazendo paz para minha família." },
    { nome: "Carla F.", cargo: "Proprietária", texto: "A precisão nos detalhes e a agilidade no retorno superaram nossas expectativas." },
    { nome: "André G.", cargo: "Servidor Público", texto: "Excelente atuação em uma causa de direito do consumidor. Profissional ético que explica cada etapa do processo." },
    { nome: "Fernanda A.", cargo: "CEO", texto: "Comprometimento e ética definem o trabalho. Conhecimento técnico notável." }
  ];

  return (
    <section 
      id="depoimentos" 
      className="py-16 md:py-24 relative overflow-hidden group" 
      style={{ backgroundColor: cores.azulNoite }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-20">
          <h4 style={{ color: cores.cinzaExecutivo }} className="font-serif-lux uppercase tracking-[0.3em] text-[10px] mb-2">
            Reconhecimento
          </h4>
          <h2 className="text-white font-serif-lux text-3xl md:text-4xl mb-6 leading-tight">
            Depoimentos de Clientes
          </h2>
          
          {/* MUDANÇA AQUI: ESTRELAS COM TEXTURA DE AÇO/GELO (DA IMAGEM) */}
          <div className="flex justify-center gap-2 text-xl md:text-2xl pt-2">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className="ri-star-fill bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" 
                style={{ 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(135deg, #2d3a4d 0%, #7a8c9f 30%, #ffffff 50%, #7a8c9f 70%, #2d3a4d 100%)',
                  filter: 'contrast(1.2) brightness(1.1)'
                }} 
              ></i>
            ))}
          </div>
        </div>

        <div className="relative px-8 md:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true, 
              el: '.swiper-pagination-custom' 
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="sobre-swiper"
          >
            {depoimentos.map((depo, index) => (
              <SwiperSlide key={index} className="!h-auto flex py-4">
                <div className="bg-white/[0.08] backdrop-blur-lg border border-white/10 p-8 rounded-2xl w-full flex flex-col group/card hover:bg-white/[0.12] transition-all duration-500 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 bg-white/5">
                      <i className="ri-user-line text-2xl"></i>
                    </div>
                    <div className="text-left">
                      <span className="block text-white font-bold text-xs tracking-widest uppercase font-serif-lux">{depo.nome}</span>
                      <span style={{ color: cores.cinzaExecutivo }} className="block text-[10px] uppercase font-sans-lux">{depo.cargo}</span>
                    </div>
                  </div>
                  <p className="text-gray-100 font-sans-lux leading-relaxed text-[15px] italic text-left flex-grow opacity-90">
                    "{depo.texto}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-azulNoite transition-all duration-300 md:-left-4 opacity-0 group-hover:opacity-100">
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-azulNoite transition-all duration-300 md:-right-4 opacity-0 group-hover:opacity-100">
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>

        <div className="swiper-pagination-custom flex justify-center gap-3 mt-10"></div>
      </div>

      <style jsx="true">{`
        .swiper-pagination-custom :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .swiper-pagination-custom :global(.swiper-pagination-bullet-active) {
          background: #FFFFFF;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;