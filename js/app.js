const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");

function darkMode() {
  nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  let image = document.querySelector(".introPic");
  image.src = "img/introDark.png";
  image.style.boxShadow =
    "rgba(255, 255, 255, 0.1) 0px 10px 15px -3px, rgba(255, 255, 255, 0.05) 0px 4px 6px -2px";
  toggleIcon.children[0].classList.remove("fa-sun");
  toggleIcon.children[0].classList.add("fa-moon");

  //
  // Check if the style tag already exists
  let styleTag = document.getElementById("dynamicStyles");
  if (!styleTag) {
    // Create a new style tag
    styleTag = document.createElement("style");
    styleTag.id = "dynamicStyles";
    document.head.appendChild(styleTag);
  }

  // Set the new styles for the pseudo-elements
  styleTag.innerHTML = `
      .roundedPhoto::before,
      .roundedPhoto::after {
        background-color: rgb(15,65,255);
      }
    `;
}

function lightMode() {
  nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  let image = document.querySelector(".introPic");
  image.src = "img/introLight.png";
  image.style.boxShadow =
    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";
  toggleIcon.children[0].classList.remove("fa-moon");
  toggleIcon.children[0].classList.add("fa-sun");

  //
  // Check if the style tag already exists
  let styleTag = document.getElementById("dynamicStyles");
  if (!styleTag) {
    // Create a new style tag
    styleTag = document.createElement("style");
    styleTag.id = "dynamicStyles";
    document.head.appendChild(styleTag);
  }

  // Set the new styles for the pseudo-elements
  styleTag.innerHTML = `
      .roundedPhoto::before,
      .roundedPhoto::after {
        background-color: #e44848 }
    `;
}
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

toggleSwitch.addEventListener("change", switchTheme);

//Check LocalStorage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}

//Mobile menu
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
}

// Translations
const translations = {
  bg: {
    mainTitle: "Мирослав Костадинов (Марсислав) - Портфолио",
    homeMenu: "Начало",
    aboutMenu: "За мен",
    projectsMenu: "Проекти",
    contactsMenu: "За контакти",
    name: "(Мирослав Костадинов)",
    job: "WEB разработчик",
    aboutTitle: "За мен",
    whoIam: "Казвам се Мирослав Костадинов",
    educationBasic:
      "Завърших бакалавърската си програма в Бургаски Свободен Университет през 2013 година, специалност 'Информатика и компютърни науки', след което изкарах  магистърска си  програма в същия университет, специалност 'Информационна сигурност'.",
    bachelorDegree:
      "През бакалаварската си програма съм изучавал дисципини като компютърни мрежи, изкуствен интелект, операционни системи, компютърни архитектури, компютърна периферия и WEB приложения. В процеса на обучение наблегнах на езици за front-end и back-end WEB разработки - JavaScript и PHP ",
    masterDegree:
      "През магистърската си програма съм изучавал дисциплини като Мрежова сигурност, маршрутизация в компютърните мрежи, сигурност в интернет приложенията.",
    aboutDesc0:
      "Занимавам се с изграждането и поддържането на различни WEB платформи и приложения от 2014-та година. През годините съм работил с множество технологии и рамки, включително:",
    aboutDesc1:
      "WordPress и Joomla разработчик: писал съм теми и плъгини, използвайки PHP, Vanilla JavaScript, jQuery, HTML5 и CSS3.",
    aboutDesc2:
      "Разработчик на онлайн казино игри: Front-end разработчик, като съм ползвал следните технологии jQuery, HTML5 и CSS3.",
    aboutDesc3:
      "Full-stack: разработка: Имам професионален опит в работата с ASP.NET, както и с Laravel, където съм изграждал цялостни уеб приложения, комбинирайки сървърна и клиентска логика.",
    aboutDesc4:
      "Фрийланс: В свободното си време работя като фрийланс разработчик, като създавам и поддържам уеб сайтове и приложения. Всички проекти в портфолиото ми са изработени самостоятелно, съобразени с изискванията и нуждите на клиентите. Моята работа е израз на страстта ми към уеб разработката и гордостта от това, че съм успял да превърна хобито си в професия. Вярвам в качеството и ефективността и се стремя да предлагам решения, които да отговарят на високите стандарти на индустрията и нуждите на клиентите.",
    projectsTitle: "Проекти",
    greenLandDesignDesc:
      "Онлайн магазин и информация за дейността на фирма 'Грийн Ланд Дизайн',София. Разработен е върху CMS Joomla, като темата е разработена от нулата, според изискванията на клиента. Завършен: март, 2016 г. Технологии: HTML5/CSS3/JS/PHP",
    TechTronixDesc:
      "Онлайн магазин за системи за сигурност на фирма 'TechTronix', град София. Разработен е чрез Wordpress CMS, като темата е модифицирана според желанието на клиента. Завършен: юни, 2015 г. Технологии: HTML5/CSS3/JS/PHP",
    capoTitle: "Ресторант 'Capo'",
    capoDesc:
      "WEB сайтът предоставя информация, виртуална разходка, галерия и форма за резервация на маса в средиземноморски ресторант 'Capo', град София. Сайтът е двуезичен. Разработен е върху Wordpress CMS, като темата е разработена по дизайн на клиента. Завършен: септември, 2023 г. Технологии: HTML5/CSS3/JS/PHP",
    anelTitle: "Хотел 'Анел', София",
    anelDesc:
      "Многоезичен сайт предоставящ информация за верига хотели 'Анел'. Сайтът разполага с виртуална разходка и система за онлайн резервация на стая. Изграден е чрез Wordpress CMS, като темата е модифицирана според желанието на клиента. Завършен e през март, 2022 г. Технологии: HTML5/CSS3/JS/PHP/MySQL.",
    yanaTitle: "Туристическа агенция 'Яна Травел'",
    yanaDesc:
      "Сайтът предоставя информация за фирмата, актуални промоции както и най-посещаваните дестинации. Разработен е върху CMS Wordpress, като темата е разработена по дизайн на клиента. Завършен е през юни, 2019. Технологии: HTML5/CSS3/JS/PHP",
    panclimaTitle: "Климатични системи 'PanClima'",
    panclimaDesc:
      "Онлайн магазин за клшматични системи на фирма 'PanClima', град Пловдив. Разработен е чрез Wordpress CMS, като темата е модифицирана според желанието на клиента. Завършен: февруари, 2024 г. Технологии: HTML5/CSS3/JS/PHP",
    github:
      "В моят GitHub профил съм публикувал още много проекти с различни технологии! Разгледайте ги тук:",
    critic: "(приемам креативна критика)",
    contactsTitle: "За контакти",
    contactsDesc: "Мирослав Костадинов, +359879445023",
  },
  en: {
    mainTitle: "Miroslav Kostadinov (Marsislav) - Portfolio",
    homeMenu: "Home",
    aboutMenu: "About me",
    projectsMenu: "Projects",
    contactsMenu: "Contacts",
    name: "(Miroslav Kostadinov)",
    job: "WEB developer",
    aboutTitle: "About me",
    whoIam: "My name is Miroslav Kostadinov",
    educationBasic:
      "I completed my Bachelor's degree in 'Informatics and Computer Science' at Burgas Free University in 2013, after which I pursued a Master's degree in 'Information Security' at the same university.",
    bachelorDegree:
      "During my Bachelor's program, I studied subjects such as computer networks, artificial intelligence, operating systems, computer architectures, computer peripherals, and web applications. Throughout my studies, I focused on languages for front-end and back-end web development, specifically JavaScript and PHP.",
    masterDegree:
      "During my Master's program, I studied courses such as Network Security, Routing in Computer Networks, and Security in Internet Applications.",
    aboutDesc0:
      "I have been involved in building and maintaining various web platforms and applications since 2014. Over the years, I have worked with numerous technologies and frameworks, including:",
    aboutDesc1:
      "WordPress and Joomla developer: I have written themes and plugins using PHP, Vanilla JavaScript, jQuery, HTML5, and CSS3",
    aboutDesc2:
      "Online casino game developer: Front-end developer, using technologies such as jQuery, HTML5, and CSS3",
    aboutDesc3:
      "Full-stack Development: I have professional experience working with ASP.NET as well as Laravel, where I have built complete web applications, combining both server-side and client-side logic.",
    aboutDesc4:
      "Freelancing: In my free time, I work as a freelance developer, creating and maintaining websites and applications. All the projects in my portfolio are developed independently, tailored to the clients' requirements and needs. My work is an expression of my passion for web development and the pride I take in having turned my hobby into a profession. I believe in quality and efficiency and strive to provide solutions that meet the high standards of the industry and the needs of the clients.",
    projectsTitle: "Projects",
    TechTronixDesc:
      "Online store for security systems of the company 'TechTronix', Sofia. Developed using WordPress CMS, with the theme customized according to the client's requirements. Completed: June 2015. Technologies: HTML5/CSS3/JS/PHP",
    greenLandDesignDesc:
      "Online store and information about the activities of the company 'Green Land Design', Sofia. It is developed on the Joomla CMS, with the theme built from scratch according to the client's requirements. Completed: March 2016. Technologies: HTML5/CSS3/JS/PHP",
    capoTitle: "Restaurant 'Capo'",
    capoDesc:
      "The website provides information, a virtual tour, a gallery, and a table reservation form for the Mediterranean restaurant 'Capo' in Sofia. The site is bilingual. It was developed using WordPress CMS, with the theme designed according to the client's specifications. Completed: September 2023. Technologies: HTML5/CSS3/JS/PHP.",
    anelTitle: "Hotel 'Anel', Sofia",
    anelDesc:
      "A multilingual website providing information about the 'Anel' hotel chain. The site features a virtual tour and an online room reservation system. It was built using WordPress CMS, with the theme customized according to the client's requirements. Completed in March 2022. Technologies: HTML5/CSS3/JS/PHP/MySQL.",
    yanaTitle: "Touristic agency 'Yana Travel'",
    yanaDesc:
      "The website provides information about the company, current promotions, and the most popular destinations. It was developed using WordPress CMS, with the theme designed according to the client's specifications. Completed in June 2019. Technologies: HTML5/CSS3/JS/PHP.",
    panclimaTitle: "Air conditioning systems 'PanClima'",
    panclimaDesc:
      "Online store for climate systems of the company 'PanClima', Plovdiv. Developed using WordPress CMS, with the theme customized according to the client's requirements. Completed: February 2024. Technologies: HTML5/CSS3/JS/PHP.",
    github:
      "I have published many more projects with various technologies on my GitHub profile! Check them out here:",
    critic: "(I accecpt creative criticism)",
    contactsTitle: "Contacts",
    contactsDesc: "Miroslav Kostadinov, +359879445023",
  },
};

// Function to switch language
function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });
  localStorage.setItem("preferredLanguage", lang);
  document.documentElement.lang = lang; // Set HTML lang attribute
}

// Load the preferred language from local storage or default to Bulgarian
document.addEventListener("DOMContentLoaded", () => {
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "bg";
  switchLanguage(preferredLanguage);
});
