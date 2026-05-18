// --- DICCIONARIO DE TRADUCCIONES ---

const dict = {
    "nav-home": { es: "Home", en: "Home", it: "Home", de: "Home", ja: "ホーム" },
    "nav-about": { es: "AboutMe", en: "AboutMe", it: "Su Di Me", de: "Über Mich", ja: "自己紹介" },
    "nav-skills": { es: "Skills", en: "Skills", it: "Competenze", de: "Skills", ja: "スキル" },
    "nav-projects": { es: "Projects", en: "Projects", it: "Progetti", de: "Projekte", ja: "プロジェクト" },
    "nav-contact": { es: "Contact", en: "Contact", it: "Contatti", de: "Kontakt", ja: "お問い合わせ" },

    "home-hi": {
        es: "&gt; hola_mundo.exe",
        en: "&gt; hello_world.exe",
        it: "&gt; ciao_mondo.exe",
        de: "&gt; hallo_welt.exe",
        ja: "&gt; ハローワールド.exe"
    },
    "home-role": {
        es: '<span class="neon-pink">[full-stack dev]</span> <span class="muted">×</span> <span class="neon-cyan">ui enthusiast</span>',
        en: '<span class="neon-pink">[full-stack dev]</span> <span class="muted">×</span> <span class="neon-cyan">ui enthusiast</span>',
        it: '<span class="neon-pink">[dev full-stack]</span> <span class="muted">×</span> <span class="neon-cyan">entusiasta ui</span>',
        de: '<span class="neon-pink">[Full-Stack-Entwickler]</span> <span class="muted">×</span> <span class="neon-cyan">UI-Enthusiast</span>',
        ja: '<span class="neon-pink">[フルスタック開発者]</span> <span class="muted">×</span> <span class="neon-cyan">UI愛好家</span>'
    },
    "home-desc": {
        es: "Construyo interfaces con alma, mezclando la calidez del lofi con la precisión del código. Me gustan las animaciones sutiles, las tipografías monospace y los atajos de teclado.",
        en: "I build interfaces with soul, blending lofi warmth with code precision. I like subtle animations, monospace typography, and keyboard shortcuts.",
        it: "Costruisco interfacce con un'anima, fondendo il calore del lofi con la precisione del codice. Mi piacciono le animazioni sottili, la tipografia monospace e le scorciatoie da tastiera.",
        de: "Ich baue Interfaces mit Seele und verbinde Lofi-Wärme mit Code-Präzision. Ich mag subtile Animationen, Monospace-Typografie und Tastaturkürzel.",
        ja: "ローファイの温かみとコードの正確さを融合させ、魂のこもったインターフェースを構築しています。繊細なアニメーション、等幅フォント、キーボードショートカットが好みです。"
    },
    "home-btn-projects": {
        es: "<span>&gt;</span> ver proyectos",
        en: "<span>&gt;</span> view projects",
        it: "<span>&gt;</span> vedi progetti",
        de: "<span>&gt;</span> projekte ansehen",
        ja: "<span>&gt;</span> プロジェクトを見る"
    },
    "home-btn-contact": {
        es: "contactame_",
        en: "contact me_",
        it: "contattami_",
        de: "kontaktiere mich_",
        ja: "お問い合わせ_"
    },
    "home-stats-title": {
        es: "~/about/status.log",
        en: "~/about/status.log",
        it: "~/about/status.log",
        de: "~/about/status.log",
        ja: "~/about/status.log"
    },
    "home-stat-status-k": { es: "status", en: "status", it: "stato", de: "status", ja: "ステータス" },
    "home-stat-location-k": { es: "location", en: "location", it: "posizione", de: "standort", ja: "場所" },
    "home-stat-stack-k": { es: "stack", en: "stack", it: "stack", de: "stack", ja: "技術スタック" },
    "home-stat-coffee-k": { es: "coffee", en: "coffee", it: "caffè", de: "kaffee", ja: "コーヒー" },
    "home-stat-mood-k": { es: "mood", en: "mood", it: "umore", de: "stimmung", ja: "気分" },
    "home-stat-mood-v": { es: "lofi ♪", en: "lofi ♪", it: "lofi ♪", de: "lofi ♪", ja: "ローファイ ♪" },
    "home-stat-uptime-k": { es: "uptime", en: "uptime", it: "uptime", de: "betriebszeit", ja: "稼働時間" },

    "about-title": { es: "about_me", en: "about_me", it: "su_di_me", de: "über_mich", ja: "自己紹介" },
    "about-sub": {
        es: "// un poco de contexto sobre mí",
        en: "// a bit of context about me",
        it: "// un po' di contesto su di me",
        de: "// ein wenig Kontext über mich",
        ja: "// 私についての簡単な紹介"
    },
    "about-bio-title": {
        es: '<span class="neon-cyan">&gt;</span> bio.txt',
        en: '<span class="neon-cyan">&gt;</span> bio.txt',
        it: '<span class="neon-cyan">&gt;</span> bio.txt',
        de: '<span class="neon-cyan">&gt;</span> bio.txt',
        ja: '<span class="neon-cyan">&gt;</span> bio.txt'
    },
    "about-bio-p1": {
        es: "Soy desarrollador full-stack con debilidad por las interfaces con personalidad. Empecé trasteando con HTML en bloc de notas y hoy sigo con la misma curiosidad, solo que con mejores herramientas.",
        en: "I am a full-stack developer with a weak spot for interfaces with personality. I started tinkering with HTML in notepad and today I continue with the same curiosity, just with better tools.",
        it: "Sono uno sviluppatore full-stack con un debole per le interfacce con personalità. Ho iniziato a smanettare con l'HTML nel blocco note e oggi continuo con la stessa curiosità, solo con strumenti migliori.",
        de: "Ich bin ein Full-Stack-Entwickler mit einer Schwäche für Interfaces mit Persönlichkeit. Ich habe angefangen, mit HTML im Editor zu experimentieren, und habe heute noch dieselbe Neugier, nur mit besseren Tools.",
        ja: "個性豊かなインターフェース作りに情熱を注ぐフルスタック開発者です。最初はメモ帳でHTMLをいじることから始め、今でも新しいツールを使いながらその頃と変わらない好奇心を持ち続けています。"
    },
    "about-bio-p2": {
        es: "Fuera del teclado: vinilos, fotografía analógica, synths modulares y largas sesiones de lofi hip-hop radio.",
        en: "Away from the keyboard: vinyl, analog photography, modular synths, and long sessions of lofi hip-hop radio.",
        it: "Lontano dalla tastiera: vinili, fotografia analogica, sintetizzatori modulari e lunghe sessioni di lofi hip-hop radio.",
        de: "Abseits der Tastatur: Vinyls, analoge Fotografie, modulare Synthesizer und lange Lofi-Hip-Hop-Radio-Sessions.",
        ja: "キーボードから離れたときは、レコード、アナログ写真、モジュラーシンセ、ローファイ・ヒップホップ・ラジオを聴く時間を楽しんでいます。"
    },
    "about-facts-title": {
        es: '<span class="neon-cyan">&gt;</span> facts.json',
        en: '<span class="neon-cyan">&gt;</span> facts.json',
        it: '<span class="neon-cyan">&gt;</span> facts.json',
        de: '<span class="neon-cyan">&gt;</span> facts.json',
        ja: '<span class="neon-cyan">&gt;</span> facts.json'
    },
    "about-fact-name-k": { es: "nombre", en: "name", it: "nome", de: "name", ja: "名前" },
    "about-fact-role-k": { es: "rol", en: "role", it: "ruolo", de: "rolle", ja: "役割" },
    "about-fact-exp-k": { es: "años exp", en: "exp years", it: "anni esp", de: "exp jahre", ja: "経験年数" },
    "about-fact-exp-v": { es: "+3", en: "+3", it: "+3", de: "+3", ja: "3年以上" },
    "about-fact-base-k": { es: "base", en: "base", it: "sede", de: "basis", ja: "拠点" },
    "about-fact-base-v": { es: "remoto · LATAM", en: "remote · LATAM", it: "remoto · LATAM", de: "remote · LATAM", ja: "リモート · LATAM" },
    "about-fact-stack-k": { es: "stack fav", en: "fav stack", it: "stack pref", de: "lieblings-stack", ja: "お気に入り" },
    "about-fact-playing-k": { es: "now playing", en: "now playing", it: "in riproduzione", de: "läuft gerade", ja: "再生中" },

    // Lovely card translations
    "about-lovely-desc": {
        es: "Hay lenguajes que se usan por trabajo, y otros por puro amor al arte y a la historia de la informática.",
        en: "There are languages you use for work, and others for the pure love of art and the history of computer science.",
        it: "Ci sono linguaggi che si usano per lavoro, e altri per il puro amore per l'arte e la storia dell'informatica.",
        de: "Es gibt Sprachen, die man für die Arbeit nutzt, und andere aus reiner Liebe zur Kunst und zur Geschichte der Informatik.",
        ja: "実務で使うプログラミング言語もあれば、コンピューターサイエンスの歴史や芸術性への愛だけで愛好する言語もあります。"
    },
    "about-lovely-haskell": {
        es: "El arte de la programación funcional pura. La elegancia matemática hecha código, recursividad y tipos monádicos.",
        en: "The art of pure functional programming. Mathematical elegance turned into code, recursion, and monadic types.",
        it: "L'arte della programmazione funzionale pura. L'eleganza matematica tradotta in codice, ricorsione e tipi monadici.",
        de: "Die Kunst der rein funktionalen Programmierung. Mathematische Eleganz verwandelt in Code, Rekursion und monadische Typen.",
        ja: "純粋関数型プログラミングの極致。数学的な美しさがコードに昇華され、高度な再帰やモナドの概念が魅力です。"
    },
    "about-lovely-cobol": {
        es: "Vibras vintage y sistemas bancarios. Un shrine a los pioneros de la computación y la belleza del código estructurado clásico.",
        en: "Vintage vibes and banking systems. A shrine to the pioneers of computing and the beauty of classic structured code.",
        it: "Vibrazioni vintage e sistemi bancari. Un tributo ai pionieri dell'informatica e alla bellezza del codice strutturato classico.",
        de: "Vintage-Vibes und Banksysteme. Ein Schrein für die Pioniere der Informatik und die Schönheit des klassischen strukturierten Codes.",
        ja: "古き良きヴィンテージの風情と銀行システム。コンピューティングの先駆者たちと、クラシックで構造化されたコードの美学。"
    },

    "skills-title": { es: "skills.sh", en: "skills.sh", it: "competenze.sh", de: "skills.sh", ja: "スキル.sh" },
    "skills-sub": {
        es: "// tecnologías con las que trabajo",
        en: "// technologies I work with",
        it: "// tecnologie con cui lavoro",
        de: "// Technologien, mit denen ich arbeite",
        ja: "// 私が使用する技術"
    },
    "skill-tab-web": { es: "Web", en: "Web", it: "Web", de: "Web", ja: "ウェブ" },
    "skill-tab-devops": { es: "DevOps", en: "DevOps", it: "DevOps", de: "DevOps", ja: "デブオプス" },
    "skill-tab-others": { es: "Others", en: "Others", it: "Altro", de: "Andere", ja: "その他" },

    "projects-title": { es: "projects", en: "projects", it: "progetti", de: "projekte", ja: "プロジェクト" },
    "projects-sub": {
        es: "// cosas en las que he estado trabajando",
        en: "// things I've been working on",
        it: "// cose su cui ho lavorato",
        de: "// Dinge, an denen ich gearbeitet habe",
        ja: "// これまでに制作したプロジェクト"
    },
    "proj-tab-fe": { es: "FrontEnd", en: "FrontEnd", it: "FrontEnd", de: "FrontEnd", ja: "フロントエンド" },
    "proj-tab-fs": { es: "FullStack", en: "FullStack", it: "FullStack", de: "FullStack", ja: "フルスタック" },
    "proj-tab-ot": { es: "Others", en: "Others", it: "Altro", de: "Andere", ja: "その他" },
    "proj-desc-chat": {
        es: "Chat encriptado end-to-end con tema Neon y soporte para markdown en los mensajes.",
        en: "End-to-end encrypted chat with Neon theme and markdown support for messages.",
        it: "Chat crittografata end-to-end con temi Neon e supporto markdown per i messaggi.",
        de: "Ende-zu-Ende verschlüsselter Chat mit Neon Theme und Markdown-Unterstützung für Nachrichten.",
        ja: "カスタマイズ可能なテーマとメッセージ内のマークダウンに対応したエンドツーエンド暗号化チャット。"
    },
    

    "contact-title": { es: "contact", en: "contact", it: "contatti", de: "kontakt", ja: "コンタクト" },
    "contact-sub": {
        es: "// hablemos · estoy abierto a proyectos",
        en: "// let's talk · I'm open to projects",
        it: "// parliamone · sono aperto a progetti",
        de: "// lass uns reden · ich bin offen für projekte",
        ja: "// お気軽にご相談ください"
    },
    "contact-label-name": { es: "nombre_", en: "name_", it: "nome_", de: "name_", ja: "お名前_" },
    "contact-label-email": { es: "email_", en: "email_", it: "email_", de: "email_", ja: "メールアドレス_" },
    "contact-label-msg": { es: "mensaje_", en: "message_", it: "messaggio_", de: "nachricht_", ja: "メッセージ_" },
    "contact-btn-submit": { es: "&gt; enviar", en: "&gt; send", it: "&gt; invia", de: "&gt; senden", ja: "&gt; 送信" },

    "contact-input-name": { es: "tu nombre", en: "your name", it: "il tuo nome", de: "dein name", ja: "お名前" },
    "contact-input-email": { es: "tu@email.com", en: "you@email.com", it: "tu@email.com", de: "dein@email.com", ja: "メールアドレス" },
    "contact-input-msg": {
        es: "hola, vi tu portfolio y...",
        en: "hi, I saw your portfolio and...",
        it: "ciao, ho visto il tuo portfolio e...",
        de: "hallo, ich habe dein Portfolio gesehen und...",
        ja: "こんにちは、ポートフォリオを拝見しました..."
    }
};

// Textos estáticos e interactivos que se arman por JS
const i18nDynamic = {
    "home-status-waiting": {
        es: "esperando input del usuario",
        en: "waiting for user input",
        it: "in attesa di input utente",
        de: "warte auf Benutzereingabe",
        ja: "ユーザー入力を待機中"
    },
    "about-status-anytab": {
        es: "exit code 0 · press any tab to continue",
        en: "exit code 0 · press any tab to continue",
        it: "exit code 0 · premi qualsiasi tab per continuare",
        de: "exit code 0 · Drücke eine beliebige Taste, um fortzufahren",
        ja: "終了コード 0 · 続けるにはいずれかのタブを押してください"
    },
    "skills-footer-fmt": {
        es: "{count} items en ./{cat}/ · total 18",
        en: "{count} items in ./${cat}/ · total 18",
        it: "{count} elementi in ./{cat}/ · totale 18",
        de: "{count} Elemente in ./{cat}/ · insgesamt 18",
        ja: "./{cat}/ 内の {count} 件のアイテム · 合計 18"
    },
    "projects-footer-fmt": {
        es: "{count} proyectos en ./{cat}/ · total 5",
        en: "{count} projects in ./{cat}/ · total 5",
        it: "{count} progetti in ./{cat}/ · totale 5",
        de: "{count} Projekte in ./{cat}/ · insgesamt 5",
        ja: "./{cat}/ 内の {count} 件のプロジェクト · 合計 5"
    },
    "contact-status-waiting": {
        es: "esperando conexión...",
        en: "waiting for connection...",
        it: "in attesa di connessione...",
        de: "warte auf Verbindung...",
        ja: "接続を待機中..."
    },
    "contact-status-success": {
        es: "mensaje enviado con éxito · respondiendo pronto...",
        en: "message sent successfully · responding soon...",
        it: "messaggio inviato con successo · risposta a breve...",
        de: "Nachricht erfolgreich gesendet · Antwort folgt in Kürze...",
        ja: "メッセージ送信に成功しました · 間もなく返信します..."
    },
    "contact-btn-success": {
        es: "✓ enviado",
        en: "✓ sent",
        it: "✓ inviato",
        de: "✓ gesendet",
        ja: "✓ 送信完了"
    }
};

// --- ESTADO GLOBAL ---
let currLang = localStorage.getItem("portfolio_lang") || "es";
let activeSkillCat = "web";
let activeProjectCat = "frontend";

// --- FUNCIONES DE TRADUCCIÓN ---
function translateAll() {
    // 1. Traducir elementos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (key && dict[key]) {
            el.innerHTML = dict[key][currLang];
        }
    });

    // 2. Traducir placeholders con data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        if (key && dict[key]) {
            el.placeholder = dict[key][currLang];
        }
    });

    // 3. Actualizar footers e interactivos
    updateFooters();
}

function updateFooters() {
    // Footers estáticos de home y about
    const homeStatus = document.getElementById("homeStatus");
    if (homeStatus) {
        homeStatus.innerHTML = `${i18nDynamic["home-status-waiting"][currLang]}<span class="blink-cursor"></span>`;
    }
    const aboutStatus = document.getElementById("aboutStatus");
    if (aboutStatus) {
        aboutStatus.innerHTML = i18nDynamic["about-status-anytab"][currLang];
    }

    // Footer de Skills
    const skillsFooter = document.getElementById("skillsFooter");
    if (skillsFooter) {
        const count = document.querySelectorAll(`[data-skill-cat="${activeSkillCat}"]:not(.hidden)`).length;
        const rawFmt = i18nDynamic["skills-footer-fmt"][currLang];
        const formatted = rawFmt
            .replace("{count}", String(count))
            .replace("{cat}", activeSkillCat);
        skillsFooter.innerHTML = `${formatted}<span class="blink-cursor"></span>`;
    }

    // Footer de Proyectos
    const projectsFooter = document.getElementById("projectsFooter");
    if (projectsFooter) {
        const count = document.querySelectorAll(`[data-project-cat="${activeProjectCat}"]:not(.hidden)`).length;
        const rawFmt = i18nDynamic["projects-footer-fmt"][currLang];
        const formatted = rawFmt
            .replace("{count}", String(count))
            .replace("{cat}", activeProjectCat);
        projectsFooter.innerHTML = formatted;
    }

    // Status del Contacto
    const contactStatus = document.getElementById("contactStatus");
    const submitBtn = document.getElementById("submitBtn");
    if (contactStatus && submitBtn && !submitBtn.disabled) {
        contactStatus.innerHTML = `${i18nDynamic["contact-status-waiting"][currLang]}<span class="blink-cursor"></span>`;
    }
}

// --- CONFIG & UTILS ---
// Helper para navegar suavemente entre páginas principales
function navigateTo(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll(".section").forEach((sec) => {
        sec.classList.add("hidden");
        sec.classList.remove("active");
    });

    // Mostrar sección activa
    const activeSec = document.getElementById(sectionId);
    if (activeSec) {
        activeSec.classList.remove("hidden");
        activeSec.classList.add("active");
    }

    // Actualizar navbar tabs
    document.querySelectorAll(".nav-tab").forEach((tab) => {
        const tabBtn = tab;
        if (tabBtn.dataset.section === sectionId) {
            tabBtn.classList.add("active");
        } else {
            tabBtn.classList.remove("active");
        }
    });

    // Subir scroll suavemente
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Hacer la navegación global para el botón en la UI
window.navigateTo = navigateTo;

document.addEventListener("DOMContentLoaded", () => {
    // Set año actual en el footer
    const yearEl = document.getElementById("currentYear");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Inicializar selector de idiomas y traducciones
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
        langSelect.value = currLang;
        langSelect.addEventListener("change", (e) => {
            const select = e.currentTarget;
            currLang = select.value;
            localStorage.setItem("portfolio_lang", currLang);
            translateAll();
        });
    }
    // Ejecutar traducción inicial
    translateAll();

    // --- TABS DE NAVBAR ---
    document.querySelectorAll(".nav-tab").forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const btn = e.currentTarget;
            const sec = btn.dataset.section;
            if (sec) navigateTo(sec);
        });
    });

    // --- SUB-TABS SKILLS ---
    const skillTabs = document.querySelectorAll("[data-skill-tab]");
    const skillCards = document.querySelectorAll("[data-skill-cat]");
    const skillsDir = document.getElementById("skills-dir");

    function filterSkills(cat) {
        activeSkillCat = cat;
        skillCards.forEach((card) => {
            if (card.dataset.skillCat === cat) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        // Actualizar textos de la terminal
        if (skillsDir) skillsDir.textContent = `${cat}/`;

        // Actualizar tabs activas
        skillTabs.forEach((t) => {
            if (t.dataset.skillTab === cat) {
                t.classList.add("active");
            } else {
                t.classList.remove("active");
            }
        });

        updateFooters();
    }

    skillTabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const btn = e.currentTarget;
            const cat = btn.dataset.skillTab;
            if (cat) filterSkills(cat);
        });
    });

    // Inicializar primer tab de Skills
    filterSkills("web");


    // --- SUB-TABS PROJECTS ---
    const projectTabs = document.querySelectorAll("[data-project-tab]");
    const projectCards = document.querySelectorAll("[data-project-cat]");
    const projectsDir = document.getElementById("projects-dir");

    function filterProjects(cat) {
        activeProjectCat = cat;
        projectCards.forEach((card) => {
            if (card.dataset.projectCat === cat) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        // Actualizar textos de la terminal
        if (projectsDir) projectsDir.textContent = `${cat}/`;

        // Actualizar tabs activas
        projectTabs.forEach((t) => {
            if (t.dataset.projectTab === cat) {
                t.classList.add("active");
            } else {
                t.classList.remove("active");
            }
        });

        updateFooters();
    }

    projectTabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const btn = e.currentTarget;
            const cat = btn.dataset.projectTab;
            if (cat) filterProjects(cat);
        });
    });

    // Inicializar primer tab de Proyectos
    filterProjects("frontend");


    // --- CONTACT FORM ---
    const form = document.getElementById("contactForm");
    const contactStatus = document.getElementById("contactStatus");
    const submitBtn = document.getElementById("submitBtn");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (submitBtn) {
                submitBtn.textContent = i18nDynamic["contact-btn-success"][currLang];
                submitBtn.disabled = true;
            }
            if (contactStatus) {
                contactStatus.innerHTML = `${i18nDynamic["contact-status-success"][currLang]}<span class="blink-cursor"></span>`;
            }

            setTimeout(() => {
                form.reset();
                if (submitBtn) {
                    submitBtn.textContent = dict["contact-btn-submit"][currLang];
                    submitBtn.disabled = false;
                }
                if (contactStatus) {
                    contactStatus.innerHTML = `${i18nDynamic["contact-status-waiting"][currLang]}<span class="blink-cursor"></span>`;
                }
            }, 3200);
        });
    }
});