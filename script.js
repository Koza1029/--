// Smooth scrolling for navigation links
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

const translations = {
    zh: {
        title: '陳禹翰 Koza - 個人網站',
        nav: {
            home: '首頁',
            about: '關於我',
            projects: '策展與研究計畫',
            experience: '實務經歷',
            skills: '專業技能',
            contact: '聯絡我'
        },
        hero: {
            title: '陳禹翰 Koza',
            subtitle: '策展人 / 博物館學與區域發展研究者 / 物質文化轉譯者',
            quote: '「穿梭於田野與展間，致力於透過物質文化研究與敘事轉譯，連結傳統技藝與當代社會的實踐者。」',
            bio: '目前就讀於國立臺北科技大學文化事業發展學系。研究領域聚焦於傳統纖維工藝（如蕉麻、苧麻）的復振、半符號學分析，以及如何透過博物館學與策展手法，將繁複的田野資料轉化為大眾能共鳴的故事。我擅長運用數位工具與質性研究方法，並具備第一線的部落溝通與地方創生經驗。',
            cta: '觀看我的策展作品'
        },
        about: {
            title: '轉譯田野的溫度',
            description: '我相信「物件」不僅是歷史的載體，更是當代社會與過去對話的橋樑。在過去的學術訓練中，我走入蘭嶼、大鳥部落與偏鄉地區，透過紮實的質性訪談與植物學紀錄，探尋逐漸消逝的傳統知識。我不僅追求學術上的嚴謹，更熱衷於探索如何將這些研究成果，透過展覽、影像，甚至是桌上遊戲的形式，重新帶回當代大眾的視野中。',
            feature1: {
                title: '跨文化的田野洞察',
                text: '具備高度的人文敏銳度，能與不同族群（如部落耆老、移工社群）建立深厚信任，從植物採集到口述歷史，精準捕捉文化的物質與非物質細節。'
            },
            feature2: {
                title: '學術與轉譯的整合',
                text: '熟稔質性研究與半符號學（Signifier and Signified）分析，能將深奧的學術框架轉化為平易近人的展覽文本與視覺語彙。'
            },
            feature3: {
                title: '系統化的知識管理',
                text: '善用現代數位工具整合龐大的田野數據，從逐字稿編碼到視覺化呈現，確保專案執行的邏輯嚴密與高效產出。'
            }
        },
        projects: {
            title: '策展與研究計畫'
        },
        project1: {
            title: '島嶼的維度——蘭嶼 Avaka 研究計畫',
            year: '2026',
            tag1: '#民族植物學',
            tag2: '#田野調查',
            tag3: '#物質文化',
            tag4: '#傳統纖維',
            description: '深入蘭嶼進行蕉麻（Manila Hemp / Avaka）品種辨識與傳統纖維處理工藝調查。',
            detail1: '實地追蹤並記錄 Avaka 與 Nyaga 等植物品種，與部落耆老 Maran、Kaminan 進行深度訪談，完整記錄從纖維抽取到編織的傳統工藝流程。',
            detail2: '將植物學紀錄與民族誌研究交疊，產出具備高度學術價值與展示潛力的文化紀錄報告。'
        },
        project2: {
            title: '循．幬輯——大鳥部落展',
            year: '2024',
            tag1: '#展覽策劃',
            tag2: '#空間敘事',
            tag3: '#排灣族文化',
            tag4: '#物件轉譯',
            description: '於國立臺北科技大學舉辦之實體策展專案，以排灣族大鳥部落為核心場域。',
            detail1: '負責展覽架構設計。運用質性研究編碼系統化整理部落物質文化，並撰寫展場文本。',
            detail2: '成功將原鄉部落的遷徙脈絡與情感記憶透過空間與視覺設計傳遞給民眾。'
        },
        project3: {
            title: '印尼街聲音地圖計畫',
            year: '2025',
            tag1: '#感官民族誌',
            tag2: '#數位策展',
            tag3: '#移民族群',
            tag4: '#聲音紀錄',
            description: '透過採集環境聲音與口述歷史，建構跨文化的數位聽覺地圖。探討東南亞移民族群在城市空間中的記憶留存與感知。'
        },
        project4: {
            title: 'Minokay to! 洄家 紀錄片計畫',
            year: '2025',
            tag1: '#紀錄片',
            tag2: '#文化尋根',
            tag3: '#影像敘事',
            description: '以台北科大策展專案為基礎，記錄文化歸屬與家園重構的歷程。透過影像實踐視覺轉譯。'
        },
        experience: {
            title: '經歷與教育',
            university: {
                title: '國立臺北科技大學',
                period: '2022.09 - 2026.06 預計畢業',
                degree: '文化事業發展學系｜學士',
                detail: '專攻：博物館學、策展實務、區域發展、文化資源調查。'
            },
            internship: {
                title: '林業及自然保育署 臺東分署——自然保育科 暑期實習',
                period: '2025.07 - 2025.08',
                detail1: '參與社區林業與里山文化研究。',
                detail2: '協助自然保育政策地方推廣，執行社區溝通與生態觀光評估。'
            },
            volunteer: {
                title: '花蓮光復地區災後復原志工',
                period: '2025.10',
                detail: '參與為期五天的第一線災後復原工作，展現面對複雜環境的應變能力。'
            },
            fieldwork: {
                title: '蘭嶼 DoVanWa 打工換宿與田野實踐',
                period: '2026.07 - 2026.08',
                detail: '以在地生活者的視角深入蘭嶼社群，並持續進行跨文化的在地觀察與交流。'
            }
        },
        skills: {
            title: '專業技能樹',
            research: {
                title: '研究與分析',
                item1: '質性研究編碼 (Open, Axial, Selective Coding)',
                item2: '田野調查與深度訪談 (Fieldwork & In-depth Interview)',
                item3: '半符號學文本分析 (Semiotics Analysis)'
            },
            curatorial: {
                title: '策展與企劃',
                item1: '展覽文本撰寫、空間敘事與動線規劃',
                item2: '文化資源轉譯與遊戲化設計 (Gamification Design)'
            },
            digital: {
                title: '數位與視覺工具',
                item1: '知識管理：Heptabase, Notion',
                item2: '影像與攝影：Ricoh GR 系列紀實攝影、Wondershare Filmora 影像剪輯',
                item3: 'AI 協作：熟練運用 AI 工具輔助研究與文本優化'
            }
        },
        contact: {
            title: 'Let\'s Connect / 期待與您合作',
            emailLabel: 'Email:',
            socialLabel: '社群連結:'
        },
        footer: {
            copy: '© 2026 Koza Chen. All Rights Reserved.'
        }
    },
    en: {
        title: 'Koza Chen - Portfolio',
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            experience: 'Experience',
            skills: 'Skills',
            contact: 'Contact'
        },
        hero: {
            title: 'Koza Chen',
            subtitle: 'Curator / Museum Studies & Regional Development Researcher / Material Culture Translator',
            quote: '“Moving between field and exhibition, I translate material culture research into narratives that connect traditional craft with contemporary society.”',
            bio: 'I am currently studying Cultural Enterprise Development at National Taipei University of Technology. My research focuses on revitalizing traditional fiber crafts such as Manila hemp and ramie, applying semiotic analysis, and translating complex field research into stories that resonate with broader audiences. I also combine digital tools with qualitative methods and have hands-on experience in community communication and local development.',
            cta: 'Explore my curatorial work'
        },
        about: {
            title: 'Translating the Field’s Temperature',
            description: 'I believe objects are not only vessels of history but also bridges for dialogue between the present and the past. Through academic training, I have entered Lanyu, the Daniu community, and rural areas to conduct qualitative interviews and botanical fieldwork, seeking traditional knowledge that is gradually fading. I pursue academic rigor while also exploring how to bring these findings back to contemporary audiences through exhibitions, visuals, and even tabletop game formats.',
            feature1: {
                title: 'Cross-Cultural Field Insight',
                text: 'I bring strong humanistic sensitivity and can build deep trust with different communities (including elders and migrant groups), capturing both material and intangible aspects from plant collection to oral history.'
            },
            feature2: {
                title: 'Academic & Translation Integration',
                text: 'I am fluent in qualitative research and semiotic analysis, able to turn complex academic frameworks into approachable exhibition text and visual language.'
            },
            feature3: {
                title: 'Systematic Knowledge Management',
                text: 'I use modern digital tools to organize large field datasets, from transcript coding to visualization, ensuring project execution is both rigorous and efficient.'
            }
        },
        projects: {
            title: 'Curatorial & Research Projects'
        },
        project1: {
            title: 'Dimensions of the Island — Lanyu Avaka Research Project',
            year: '2026',
            tag1: '#Ethnobotany',
            tag2: '#Fieldwork',
            tag3: '#MaterialCulture',
            tag4: '#TraditionalFiber',
            description: 'In-depth study of the Manila hemp (Avaka) varietals and traditional fiber processing techniques in Lanyu.',
            detail1: 'Tracked and documented Avaka and Nyaga plant varieties in the field, conducting in-depth interviews with community elders Maran and Kaminan to record the full traditional craft process from fiber extraction to weaving.',
            detail2: 'Combined botanical documentation with ethnographic research to produce culturally rich reports with strong exhibition potential.'
        },
        project2: {
            title: 'Turning Threads — Daniu Community Exhibition',
            year: '2024',
            tag1: '#CuratorialDesign',
            tag2: '#SpatialNarrative',
            tag3: '#PaiwanCulture',
            tag4: '#ObjectTranslation',
            description: 'A physical exhibition project at National Taipei University of Technology centered on the Daniu Paiwan community.',
            detail1: 'Led exhibition structure design, systematically organizing community material culture through qualitative research coding and crafting exhibition text.',
            detail2: 'Successfully transmitted the community’s migration context and emotional memory through spatial and visual design.'
        },
        project3: {
            title: 'Indonesian Street Soundscape Project',
            year: '2025',
            tag1: '#SensoryEthnography',
            tag2: '#DigitalCurating',
            tag3: '#MigrantCommunities',
            tag4: '#SoundMapping',
            description: 'Collected environmental sounds and oral histories to build a cross-cultural digital listening map exploring how Southeast Asian migrant communities preserve memory and perception in urban spaces.'
        },
        project4: {
            title: 'Minokay to! Returning Home Documentary Project',
            year: '2025',
            tag1: '#Documentary',
            tag2: '#CulturalRediscovery',
            tag3: '#VisualStorytelling',
            description: 'A documentary project based on the Taipei Tech curatorial initiative, recording the journey of cultural belonging and home reconstruction through visual translation.'
        },
        experience: {
            title: 'Experience & Education',
            university: {
                title: 'National Taipei University of Technology',
                period: 'Sep 2022 - Jun 2026 (expected)',
                degree: 'Department of Cultural Enterprise Development | Bachelor',
                detail: 'Major: Museum Studies, Curatorial Practice, Regional Development, and Cultural Resource Survey.'
            },
            internship: {
                title: 'Forestry and Nature Conservation Agency, Taitung Branch — Conservation Internship',
                period: 'Jul 2025 - Aug 2025',
                detail1: 'Participated in community forestry and satoyama culture research.',
                detail2: 'Supported local conservation policy promotion, community engagement, and eco-tourism evaluation.'
            },
            volunteer: {
                title: 'Post-Disaster Recovery Volunteer in Guangfu, Hualien',
                period: 'Oct 2025',
                detail: 'Joined a five-day frontline recovery effort, demonstrating adaptability in complex environments.'
            },
            fieldwork: {
                title: 'Lanyu DoVanWa Fieldwork & Work-Exchange',
                period: 'Jul 2026 - Aug 2026',
                detail: 'Entered the community as a local participant, continuing intercultural observation and exchange in Lanyu.'
            }
        },
        skills: {
            title: 'Professional Skillset',
            research: {
                title: 'Research & Analysis',
                item1: 'Qualitative coding (Open, Axial, Selective Coding)',
                item2: 'Fieldwork & in-depth interviews',
                item3: 'Semiotic text analysis'
            },
            curatorial: {
                title: 'Curatorial Planning',
                item1: 'Exhibition text writing, spatial narrative, and circulation planning',
                item2: 'Cultural resource translation and gamification design'
            },
            digital: {
                title: 'Digital & Visual Tools',
                item1: 'Knowledge management: Heptabase, Notion',
                item2: 'Photography & video: Ricoh GR documentary photography, Wondershare Filmora editing',
                item3: 'AI collaboration: Skilled at using AI tools for research and text refinement'
            }
        },
        contact: {
            title: 'Let\'s Connect / Looking Forward to Collaborating',
            emailLabel: 'Email:',
            socialLabel: 'Social Links:'
        },
        footer: {
            copy: '© 2026 Koza Chen. All Rights Reserved.'
        }
    }
};

const langButtons = document.querySelectorAll('.lang-switch');
const i18nElements = document.querySelectorAll('[data-i18n]');

function translate(path, lang) {
    return path.split('.').reduce((value, key) => value?.[key], translations[lang]);
}

function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
    if (translations[lang]?.title) {
        document.title = translations[lang].title;
    }
    i18nElements.forEach(element => {
        const translation = translate(element.dataset.i18n, lang);
        if (translation !== undefined) {
            element.textContent = translation;
        }
    });
    langButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.dataset.lang;
        setLanguage(selectedLang);
        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

setLanguage('zh');

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 64; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Update active link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Update active navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add subtle animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});