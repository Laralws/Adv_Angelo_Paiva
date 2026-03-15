import React from 'react';

// Todos os nossos componentes importados
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  const cores = {
    azulProfundo: "#1C3957",    // Cor principal (Títulos e Identidade)
    azulNoite: "#102336",       // Azul ultra escuro (Rodapés e seções profundas)
    brancoPuro: "#FFFFFF",      // Fundo principal (Sobre/Cards)
    cinzaClaro: "#F4F4F4",      // Fundo de contraste (FAQ/Seções secundárias)
    cinzaExecutivo: "#8D9095",  // Detalhes, ícones e divisores
  };

  return (
    <div className="font-sans antialiased overflow-x-hidden" style={{ backgroundColor: cores.cinzaClaro }}>
      
      {/* DICA: Já que movemos as animações e classes para o index.css, 
          não precisamos mais da tag <style> aqui dentro. 
          Isso deixa seu código muito mais rápido!
      */}

      {/* A ESTRUTURA DA PÁGINA (Passando as cores para todos os componentes que precisam) */}
      <FloatingWhatsApp />
      <Navbar />
      
      <Hero cores={cores} />      
      <About cores={cores} /> {/* CORREÇÃO: Adicionado cores={cores} aqui */}
      <Services cores={cores} />
      
      <Testimonials cores={cores} />    
      <Contact />
      <FAQ cores={cores} />
      <Footer cores={cores} />
      
    </div>
  );
};

export default App;