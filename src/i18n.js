import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    // lng: getCurrentLang(),
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          title: "Bahah Mbeirik",
          label: "Select another language!",
          projer: "the projects",
          home: "Home",
          contact:"contact us",
          //home page
          sn:"Who are we",
          about:"About",
          s_about:"Have enough energy to make the world a better place before you die",
          dw:"Web developer",
          //projet page
          np:"End of studies project",
          dt_np:"This project carried out within",
          exp:"This is my university graduation project, with which I obtained a professional license certificate",
          np1:"End Of Semester Project",
          dt_np1:"A website for reporting lost items and finding",
          exp1:"I did this project in my second year of university, and passed the fourth semester with it",
          np2:"Car rental",
          dt_np2:"A website to manage car rental management",
          exp2:"This project is the first important project I did and it was the first project I presented",
          //contact page
          nc:"contact us !!",
          ci:"Contact Information",
          s_ci:"fill up the form and then click send",
          loc:"Nouakchoutt-Mauritania",
          nom:"Your Name (required)",
          mail:"Your Email (required)",
          Objet:"Object",
          ms:"Your message",
          wn:" What type of website Do You Need?",
          pr:"Personal",
          ec:"E-commerce",
          lp:"Landing Page",
          em:"Send Message"
        },
      },
      fr: {
        translation: {
          title: "Bahah M'beirik",
          label: "Sélectionnez une autre langue !",
          projer: "Les projets",
          home: "Accueil",
          contact:"Contactez-nous",
          //home page
          sn:"Qui Sommes-nous",
          about:"à propos",
          s_about:"Avoir assez d'énergie pour rendre le monde meilleur avant de mourir",
          dw:"Développeur Web",
          //projet page
          np:" Projet Fin D'Etude",
          dt_np:"Cette projet réalisé au sein de",
          exp:"ceci est mon projet de fin d'études de l'université, avec lequel j'ai obtenu mon certificat de licence professionnelle",
          np1:"Projet Fin De Semestre",
          dt_np1:"Un site web pour déclarer les objets perdus et trouver",
          exp1:"J'ai réalisé ce projet lors de ma deuxième année d'université et j'ai réussi le quatrième semestre avec",
          np2:"Location  de voiture",
          dt_np2:"Un site web pour gérer la gestion de location de voiture",
          exp2:"Ce projet est le premier projet important que j'ai fait et c'était le premier projet que j'ai présenté",
          //contact page
          nc:"Nous contactez !!",
          ci:"Coordonnées",
          s_ci:"remplissez le formulaire puis cliquez sur envoyer",
          loc:"Nouakchoutt-Mauritania",
          nom:"Votre Nom (obligatoire)",
          mail:"Votre Email (obligatoire",
          Objet:"Objet",
          ms:"Votre Message",
          wn:"De quel type de site Web avez-vous besoin ?",
          pr:"Personnel",
          ec:"Commerce électronique",
          lp:"Page de destination",
          em:"Envoyer Message"
        },
      },
      ar: {
        translation: {
          title: "ابهاه أمبيريك",
          label: "اختر لغة أخرى! ",
          projer: "المشاريع",
          home: "الصفحة الرئيسية",
          contact: "اتصل بنا",
          //home page
          sn:"من نحن",
          about:"عن",
          s_about:"امتلك ما يكفي من الطاقة لجعل العالم مكانًا أفضل قبل أن أموت",
          dw:"مطور ويب",
           //projet page
          np:"مشروع نهاية الدراسة",
          dt_np:"تم تنفيذ هذا المشروع في الداخل",
          exp:"هذا هو مشروع تخرجي من الجامعة الذي حصلت به على شهادة لصانص المهني",
          np1:"مشروع نهاية الفصل الدراسي",
          dt_np1:"موقع للإبلاغ عن العناصر المفقودة والعثور عليها",
          exp1:"قمت بهذا المشروع في سنتي الجامعية الثانية ، وتجاوزت به السداسي الرابع",
          np2:"تأجير السيارات",
          dt_np2:"موقع إلكتروني لإدارة إدارة تأجير السيارات",
          exp2:"هذا المشروع هو أول مشروع ذا أهمية أفعله و كان أول مشروع أقدمه",
          //contact page
          nc:"!! اتصل بنا",
          ci:"معلومات للتواصل",
          s_ci:"املأ النموذج ثم انقر فوق إرسال",
          loc:"نواكشوط - موريتانيا",
          nom:"أسمك (مطلوب كتابته)",
          mail:"بريدك الالكتروني (مطلوب)",
          Objet:"الموضوع",
          ms:"رسالتك",
          wn:"ما نوع موقع الويب الذي تحتاجه؟",
          pr:"شخصي",
          ec:"التجارة الإلكترونية",
          lp:"الصفحة الوصول",
          em:"أرسل رسالة"
        },
      },
    },
  });

export default i18n;
