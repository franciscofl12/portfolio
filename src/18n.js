import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
        },
        hero: {
          title: 'Web Developer creating modern websites and e-commerce solutions',
          introduction: 'I am <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Francisco Flores</span>, a Full Stack Developer with extensive experience in backend technologies like Laravel and Nest, and frontend development with React, Next.js, and TypeScript. Passionate about creating engaging online experiences, I have expertise in developing Shopify stores for e-commerce projects and crafting custom solutions.',
          currentWork: 'I am the founder of <a href="https://florier.com/" class="link-style">Florier</a>, a watch brand, and I lead projects through <a href="https://colossion.com/" class="link-style">Colossion Team</a>, my development team. We focus on delivering high-quality web and e-commerce solutions tailored to the unique needs of businesses.',
          cta: '<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Looking for a dedicated team to bring your project to life?</span> Whether it\'s a solo endeavor or requires the combined efforts of my skilled team, <a href="https://colossion.com/" class="link-style">let\'s talk</a> about how we can turn your vision into reality. As a bridge between business logic and technological execution, I ensure seamless project development from start to finish.',
          contact: 'You can reach me on any of my social media or via mail:'
        },
        projectsPage: {
            title: 'Latest Projects',
            subtitle: 'The latest projects I worked on.',
        },
    },
    es: {
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
        },
        hero: {
            title: 'Desarrollador Web creando sitios web modernos y soluciones para ecommerces',
            introduction: 'Soy <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Francisco Flores</span>, un Desarrollador Full Stack con una amplia experiencia en tecnologías de backend como Laravel y Nest, y desarrollo frontend con React, Next.js y TypeScript. Apasionado por crear experiencias online atractivas, tengo experienciaen el desarrollo de tiendas Shopify para proyectos de e-commerce y soluciones personalizadas.',
            currentWork: 'Soy el fundador de <a href="https://florier.com/" class="link-style">Florier</a>, una marca de relojes, y lidero proyectos a través de <a href="https://colossion.com/" class="link-style">Colossion Team</a>, mi equipo de desarrollo. Nos centramos en ofrecer soluciones web y de e-commerce de alta calidad, adaptadas a las necesidades únicas de los negocios.',
            cta: '<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">¿Buscas un equipo dedicado para llevar tu proyecto a la vida?</span> Ya sea un esfuerzo individual o que requiera el esfuerzo combinado de mi equipo calificado, <a href="https://colossion.com/" class="link-style">hablemos</a> de cómo podemos convertir tu visión en realidad. Como un puente entre la lógica del negocio y la ejecución tecnológica, aseguro un desarrollo de proyecto sin fisuras de principio a fin.',
            contact: 'Puedes contactarme a través de cualquier red social o vía mail:'
        },
        projectsPage: {
            title: 'Últimos Proyectos',
            subtitle: 'Los últimos proyectos en los que he trabajado.',
        },
    },
  };
  
  

const browserLanguage = navigator.language.substring(0, 2) || 'en';

const i18n = createI18n({
  legacy: false, // Usa la API Composition
  locale: browserLanguage, // Idioma inicial
  fallbackLocale: 'en', // Idioma de reserva
  messages, // Los mensajes de localización
});

export default i18n;
