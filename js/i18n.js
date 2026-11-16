/* Lightweight client-side i18n with data-i18n attributes */
(function() {
    const DICT = {
        en: {
            'nav.home': 'Home',
            'nav.products': 'Products',
            'nav.about': 'About',
            'nav.novelties': 'New arrivals',
            'nav.contact': 'Contact',
            'nav.choose': 'Navigate',
            'nav.bank': 'Vitamins Bank',
            'skip.to_content': 'Skip to content',
            'header.shop': 'Shop formulas',
            'hero.h1': 'IMAGINE. CREATE. EVOLVE.',
            'hero.p1': 'Imagine. What would the world be like if everyone fought for humanity — and for every single person? How would we live, how would we communicate?',
            'hero.p2': 'Friendship, sustainability, honesty, and the value of each of us — for the future, for progress in science, nature, and culture.',
            'hero.p3': 'The new world of the VITLZ line was born from this vision. It\'s more than just supplements — it\'s a living embodiment of our hopes.',
            'hero.p4': 'Taste it, try it for yourself, let this world enter your life — become part of it, and truly experience it.',
            'hero.p5': '✨ <span class="neon-gradient">Let\'s make the world better together.</span>',
            'hero.btn.explore': 'Explore products',
            'hero.btn.bank': 'Learn more?',
            'products.title': 'Formulas',
            'products.subtitle': 'Seven targeted supplements for daily support.',
            'products.cta': 'Shop formulas',
            'product.probiotic.title': 'PROBIOTIC COMPLEX',
            'product.probiotic.tagline': 'The Power of Microbiome.',
            'product.probiotic.desc': 'Advanced probiotic blend with Lactobacillus, Bifidobacterium, and Streptococcus thermophilus to strengthen gut health and immunity. Balance from within — for a stronger you.',
            'product.multi.title': 'MULTIVITAMINS & MINERALS COMPLEX',
            'product.multi.tagline': 'Science in Every Tablet.',
            'product.multi.desc': 'A precise formula of 13 vitamins and 10 minerals to maintain daily wellbeing. Includes Lutein, Biotin, and Chromium for metabolism, beauty, and mental clarity. Balanced nutrition — every single day.',
            'product.women.title': 'WOMEN\'S ULTRA TABLET',
            'product.women.tagline': 'Beauty. Balance. Inner Strength.',
            'product.women.desc': 'For women who lead with brilliance and grace. Contains Vitamins A, C, D3, E, Iron, Calcium, Selenium, and Bioflavonoids to support vitality, hormone balance, and glowing skin. Your daily ritual for harmony of body and mind.',
            'product.men.title': 'MEN\'S PREMIUM COMPLEX TABLET',
            'product.men.tagline': 'Power. Focus. Vitality.',
            'product.men.desc': 'Designed for modern men who never stop evolving. This complex blends Vitamins A, D, E, K, full B-group, Zinc, Selenium, and Ginseng for energy, immunity, and focus. With Saw Palmetto and Ginkgo Biloba, it boosts strength and concentration for ultimate performance.',
            'product.collagen.title': 'MARINE COLLAGEN',
            'product.collagen.tagline': 'Skin. Hair. Nails.',
            'product.collagen.desc': 'Hydrolyzed marine collagen with vitamin C and B3. 30 capsules, 21.6 g — for skin, hair and nails.',
            'product.electrolytes.title': 'ELECTROLYTES COMPLEX',
            'product.electrolytes.tagline': 'Minerals. Balance. Hydration.',
            'product.electrolytes.desc': 'Magnesium, potassium, sodium and chloride for electrolyte balance. 30 tablets, 48 g.',
            'product.urinary.title': 'URINARY COMPLEX',
            'product.urinary.tagline': 'Daily urinary tract support.',
            'product.urinary.desc': 'D-mannose 400 mg and cranberry 100 mg. 30 capsules, 24 g — for urinary tract health.',
            'universe.title': 'VITLZ Universe',
            'universe.subtitle': 'Our retro‑futurist story, ethos, and community.',
            'universe.story.title': 'Our Story',
            'universe.story.text': 'Born at the intersection of science and imagination, VITLZ channels a retro‑futurist spirit: bold design, rigorous EU‑made quality, and everyday wellness engineered for the world ahead. From probiotic synergy to complete daily complexes, we craft reliable formulas with a forward‑looking lens—so your routine feels as good as it looks.',
            'universe.ethos.title': 'Ethos',
            'universe.ethos.text': 'Clarity over clutter. Potent, essential ingredients. Transparent guidance. Designed to elevate modern life without noise.',
            'universe.community.title': 'Community',
            'universe.community.text': 'Join our universe for tips, routines, and behind‑the‑scenes drops.',
            'novelties.title': 'New arrivals',
            'novelties.collagen.src': 'images/novelties/collagen-en.jpg',
            'novelties.collagen.alt': 'Marine Collagen — why marine collagen is better',
            'novelties.electrolytes.src': 'images/novelties/electrolytes-en.jpg',
            'novelties.electrolytes.alt': 'Electrolytes Complex — four essential electrolytes',
            'novelties.urinary.src': 'images/novelties/urinary-en.jpg',
            'novelties.urinary.alt': 'Urinary Complex — when it can be a good choice',
            'contact.title': 'Contact',
            'contact.text.html': 'Questions? Email us at <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>. Join our universe at <a href="https://www.vitlz.eu" target="_blank" rel="noreferrer">www.vitlz.eu</a>.',
            'footer.rights': '&copy; 2024 VITLZ. All rights reserved.',
            'buy': 'Buy',
            'badge.eu': 'EU‑Made',
            'badge.nongmo': 'Non‑GMO',
            'badge.gmp': 'GMP Certified',
            'badge.vegan': 'Vegan‑Friendly',
            'stock.coming_soon': 'Coming soon',
            'stock.out_of_stock': 'Out of stock',
            'stock.notify': 'Notify me',
            'products.prev': 'Previous formulas',
            'products.next': 'Next formulas',
            'bank.title': 'Vitamins Bank',
            'bank.subtitle': 'Our articles are co‑authored with nutritionists, based on clinical data, and verified by our specialists.',
            'bank.show_more': 'Show more',
            'bank.summary': 'Summary:',
            'order.title': 'Place an order',
            'order.name': 'Name *',
            'order.email': 'Email *',
            'order.phone': 'Phone *',
            'order.comment': 'Comment (optional)',
            'order.comment.placeholder': 'Your notes or questions...',
            'order.submit': 'Submit request',
            'order.required': 'Please fill in the required fields',
            'order.success': 'Request sent. We will contact you soon!',
            'order.mailto': 'Email client opened to send your request',
            'order.failed': 'Failed to submit. Please try again later.',
            'post.back': '← Back to Vitamins Bank',
            'post.back.link': 'Back to Vitamins Bank',
            'post.page.title': 'VITLZ — Article',
            'post.not_found.title': 'Article not found',
            'post.not_found.text': 'The requested article could not be found.'
        },
        de: {
            'nav.home': 'Start',
            'nav.products': 'Produkte',
            'nav.about': 'Über uns',
            'nav.novelties': 'Neuheiten',
            'nav.contact': 'Kontakt',
            'nav.choose': 'Navigieren',
            'nav.bank': 'Vitamins Bank',
            'skip.to_content': 'Direkt zum Inhalt',
            'header.shop': 'Formeln kaufen',
            'hero.h1': 'IMAGINE. CREATE. EVOLVE.',
            'hero.p1': 'Stell dir vor, wie die Welt wäre, wenn jeder für die Menschlichkeit — und für jeden einzelnen Menschen — einsteht. Wie würden wir leben und kommunizieren?',
            'hero.p2': 'Freundschaft, Nachhaltigkeit, Ehrlichkeit und der Wert jedes Einzelnen — für die Zukunft und den Fortschritt in Wissenschaft, Natur und Kultur.',
            'hero.p3': 'Aus dieser Vision entstand die Welt von VITLZ. Mehr als Supplements — eine lebendige Verkörperung unserer Hoffnungen.',
            'hero.p4': 'Probiere es selbst, lass diese Welt in dein Leben — werde Teil davon und erlebe es wirklich.',
            'hero.p5': '✨ <span class="neon-gradient">Lass uns die Welt gemeinsam besser machen.</span>',
            'hero.btn.explore': 'Produkte entdecken',
            'hero.btn.bank': 'Mehr erfahren?',
            'products.title': 'Formeln',
            'products.subtitle': 'Sieben zielgerichtete Nahrungsergänzungen für den Alltag.',
            'products.cta': 'Formeln kaufen',
            'product.probiotic.title': 'PROBIOTIC COMPLEX',
            'product.probiotic.tagline': 'Die Kraft des Mikrobioms.',
            'product.probiotic.desc': 'Fortschrittliche probiotische Mischung mit Lactobacillus, Bifidobacterium und Streptococcus thermophilus zur Unterstützung von Darmgesundheit und Immunsystem.',
            'product.multi.title': 'MULTIVITAMINS & MINERALS COMPLEX',
            'product.multi.tagline': 'Wissenschaft in jeder Tablette.',
            'product.multi.desc': 'Präzise Formel aus 13 Vitaminen und 10 Mineralstoffen für das tägliche Wohlbefinden. Mit Lutein, Biotin und Chrom für Stoffwechsel, Schönheit und Klarheit.',
            'product.women.title': 'WOMEN\'S ULTRA TABLET',
            'product.women.tagline': 'Schönheit. Balance. Innere Stärke.',
            'product.women.desc': 'Für Frauen mit Brillanz und Anmut. Mit Vitaminen A, C, D3, E, Eisen, Calcium, Selen und Bioflavonoiden für Vitalität und strahlende Haut.',
            'product.men.title': 'MEN\'S PREMIUM COMPLEX TABLET',
            'product.men.tagline': 'Kraft. Fokus. Vitalität.',
            'product.men.desc': 'Für moderne Männer, die sich stetig weiterentwickeln. Mit Vitaminen A, D, E, K, B‑Komplex, Zink, Selen und Ginseng für Energie, Immunität und Fokus.',
            'product.collagen.title': 'MARINE COLLAGEN',
            'product.collagen.tagline': 'Haut. Haare. Nägel.',
            'product.collagen.desc': 'Hydrolysiertes Meereskollagen mit Vitamin C und B3. 30 Kapseln, 21,6 g — für Haut, Haare und Nägel.',
            'product.electrolytes.title': 'ELECTROLYTES COMPLEX',
            'product.electrolytes.tagline': 'Mineralien. Balance. Flüssigkeit.',
            'product.electrolytes.desc': 'Magnesium, Kalium, Natrium und Chlorid für den Elektrolythaushalt. 30 Tabletten, 48 g.',
            'product.urinary.title': 'URINARY COMPLEX',
            'product.urinary.tagline': 'Tägliche Unterstützung der Harnwege.',
            'product.urinary.desc': 'D-Mannose 400 mg und Cranberry 100 mg. 30 Kapseln, 24 g — für die Gesundheit der Harnwege.',
            'universe.title': 'VITLZ‑Universum',
            'universe.subtitle': 'Unsere retro‑futuristische Geschichte, Ethos und Community.',
            'universe.story.title': 'Unsere Geschichte',
            'universe.story.text': 'Geboren an der Schnittstelle von Wissenschaft und Vorstellungskraft: mutiges Design, EU‑Qualität und Alltags‑Wellness für die Zukunft.',
            'universe.ethos.title': 'Ethos',
            'universe.ethos.text': 'Klarheit statt Lärm. Essentielle, wirksame Zutaten. Transparente Guidance.',
            'universe.community.title': 'Community',
            'universe.community.text': 'Tritt unserer Welt bei: Tipps, Routinen und Einblicke hinter die Kulissen.',
            'novelties.title': 'Neuheiten',
            'novelties.collagen.src': 'images/novelties/collagen-de.jpg',
            'novelties.collagen.alt': 'Marines Kollagen — warum marines Kollagen besser ist',
            'novelties.electrolytes.src': 'images/novelties/electrolytes-de.jpg',
            'novelties.electrolytes.alt': 'Elektrolyte-Komplex — vier essenzielle Elektrolyte',
            'novelties.urinary.src': 'images/novelties/urinary-de.jpg',
            'novelties.urinary.alt': 'Harnweg-Komplex — wann es eine gute Wahl sein kann',
            'contact.title': 'Kontakt',
            'contact.text.html': 'Fragen? Schreibe uns an <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>. Besuche: <a href="https://www.vitlz.eu" target="_blank" rel="noreferrer">www.vitlz.eu</a>.',
            'footer.rights': '&copy; 2024 VITLZ. Alle Rechte vorbehalten.',
            'buy': 'Kaufen',
            'badge.eu': 'EU‑hergestellt',
            'badge.nongmo': 'Ohne GVO',
            'badge.gmp': 'GMP‑zertifiziert',
            'badge.vegan': 'Veganfreundlich',
            'stock.coming_soon': 'Demnächst',
            'stock.out_of_stock': 'Nicht vorrätig',
            'stock.notify': 'Benachrichtigen',
            'products.prev': 'Vorherige Formeln',
            'products.next': 'Nächste Formeln',
            'bank.title': 'Vitaminen‑Bank',
            'bank.subtitle': 'Unsere Artikel entstehen gemeinsam mit Ernährungsberatern, basieren auf klinischen Daten und werden von unseren Spezialisten geprüft.',
            'bank.show_more': 'Mehr anzeigen',
            'bank.summary': 'Zusammenfassung:',
            'order.title': 'Bestellung aufgeben',
            'order.name': 'Name *',
            'order.email': 'E‑Mail *',
            'order.phone': 'Telefon *',
            'order.comment': 'Kommentar (optional)',
            'order.comment.placeholder': 'Ihre Anmerkungen oder Fragen...',
            'order.submit': 'Anfrage senden',
            'order.required': 'Bitte füllen Sie die Pflichtfelder aus',
            'order.success': 'Anfrage gesendet. Wir melden uns bald!',
            'order.mailto': 'E‑Mail‑Programm zum Senden geöffnet',
            'order.failed': 'Senden fehlgeschlagen. Bitte später erneut versuchen.',
            'post.back': '← Zurück zur Vitamins Bank',
            'post.back.link': 'Zurück zur Vitamins Bank',
            'post.page.title': 'VITLZ — Artikel',
            'post.not_found.title': 'Artikel nicht gefunden',
            'post.not_found.text': 'Der angeforderte Artikel wurde nicht gefunden.'
        },
        bg: {
            'nav.home': 'Начало',
            'nav.products': 'Продукти',
            'nav.about': 'За нас',
            'nav.novelties': 'Новинки',
            'nav.contact': 'Контакт',
            'nav.choose': 'Навигация',
            'nav.bank': 'Банка с витамини',
            'skip.to_content': 'Към съдържанието',
            'header.shop': 'Купи формули',
            'hero.h1': 'IMAGINE. CREATE. EVOLVE.',
            'hero.p1': 'Представете си свят, в който всеки отстоява човечността — и всеки човек. Как бихме живели и общували?',
            'hero.p2': 'Приятелство, устойчивост, честност и ценността на всеки от нас — за бъдещето и напредъка в науката, природата и културата.',
            'hero.p3': 'От тази визия се роди светът на VITLZ. Повече от добавки — живо въплъщение на нашите надежди.',
            'hero.p4': 'Опитайте сами, пуснете този свят в живота си — станете част от него и го изживейте истински.',
            'hero.p5': '✨ <span class="neon-gradient">Нека заедно направим света по‑добър.</span>',
            'hero.btn.explore': 'Разгледай продуктите',
            'hero.btn.bank': 'Научи повече?',
            'products.title': 'Формули',
            'products.subtitle': 'Седем насочени формули за всеки ден.',
            'products.cta': 'Купи формули',
            'product.probiotic.title': 'PROBIOTIC COMPLEX',
            'product.probiotic.tagline': 'Силата на микробиома.',
            'product.probiotic.desc': 'Разширена комбинация от пробиотици — Lactobacillus, Bifidobacterium и Streptococcus thermophilus — за червата и имунитета.',
            'product.multi.title': 'MULTIVITAMINS & MINERALS COMPLEX',
            'product.multi.tagline': 'Наука във всяка таблетка.',
            'product.multi.desc': 'Точна формула от 13 витамина и 10 минерала за дневно благополучие. С лутеин, биотин и хром за метаболизъм, красота и яснота.',
            'product.women.title': 'WOMEN\'S ULTRA TABLET',
            'product.women.tagline': 'Красота. Баланс. Вътрешна сила.',
            'product.women.desc': 'За жени с блясък и грация. Витамини A, C, D3, E, желязо, калций, селен и биофлавоноиди — за жизненост и сияеща кожа.',
            'product.men.title': 'MEN\'S PREMIUM COMPLEX TABLET',
            'product.men.tagline': 'Сила. Фокус. Енергия.',
            'product.men.desc': 'За модерни мъже, които се развиват постоянно. Витамини A, D, E, K, група B, цинк, селен и женшен — за енергия и фокус.',
            'product.collagen.title': 'MARINE COLLAGEN',
            'product.collagen.tagline': 'Кожа. Коса. Нокти.',
            'product.collagen.desc': 'Хидролизиран морски колаген с витамин C и B3. 30 капсули, 21,6 g — за кожа, коса и нокти.',
            'product.electrolytes.title': 'ELECTROLYTES COMPLEX',
            'product.electrolytes.tagline': 'Минерали. Баланс. Хидратация.',
            'product.electrolytes.desc': 'Магнезий, калий, натрий и хлорид за електролитен баланс. 30 таблетки, 48 g.',
            'product.urinary.title': 'URINARY COMPLEX',
            'product.urinary.tagline': 'Ежедневна подкрепа за пикочните пътища.',
            'product.urinary.desc': 'D-маноза 400 mg и червена боровинка 100 mg. 30 капсули, 24 g — за здравето на пикочните пътища.',
            'universe.title': 'Вселената VITLZ',
            'universe.subtitle': 'Нашата ретро‑футуристична история, ценности и общност.',
            'universe.story.title': 'Нашата история',
            'universe.story.text': 'Роден на границата между науката и въображението: смел дизайн, EU качество, ежедневен уелнес за бъдещето.',
            'universe.ethos.title': 'Ценности',
            'universe.ethos.text': 'Яснота вместо шум. Необходими и мощни съставки. Прозрачни насоки.',
            'universe.community.title': 'Общност',
            'universe.community.text': 'Присъединете се: съвети, рутини и задкулисни моменти.',
            'novelties.title': 'Новинки',
            'novelties.collagen.src': 'images/novelties/collagen-bg.jpg',
            'novelties.collagen.alt': 'Морски колаген — защо морският колаген е по-добър',
            'novelties.electrolytes.src': 'images/novelties/electrolytes-bg.jpg',
            'novelties.electrolytes.alt': 'Електролит комплекс — четири основни електролита',
            'novelties.urinary.src': 'images/novelties/urinary-bg.jpg',
            'novelties.urinary.alt': 'Уринарен комплекс — кога може да е добър избор',
            'contact.title': 'Контакт',
            'contact.text.html': 'Въпроси? Пишете ни на <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>. Още: <a href="https://www.vitlz.eu" target="_blank" rel="noreferrer">www.vitlz.eu</a>.',
            'footer.rights': '&copy; 2024 VITLZ. Всички права запазени.',
            'buy': 'Купи',
            'badge.eu': 'Произведено в ЕС',
            'badge.nongmo': 'Без ГМО',
            'badge.gmp': 'GMP сертификат',
            'badge.vegan': 'Подходящо за вегани',
            'stock.coming_soon': 'Очаквайте скоро',
            'stock.out_of_stock': 'Изчерпано',
            'stock.notify': 'Уведоми ме',
            'products.prev': 'Предишни формули',
            'products.next': 'Следващи формули',
            'bank.title': 'Банка с витамини',
            'bank.subtitle': 'Статиите са подготвени с диетолози, базирани на клинични данни и проверени от нашите специалисти.',
            'bank.show_more': 'Покажи още',
            'bank.summary': 'Резюме:',
            'order.title': 'Заяви поръчка',
            'order.name': 'Име *',
            'order.email': 'Email *',
            'order.phone': 'Телефон *',
            'order.comment': 'Коментар (по избор)',
            'order.comment.placeholder': 'Вашите бележки или въпроси...',
            'order.submit': 'Изпрати заявка',
            'order.required': 'Моля, попълнете задължителните полета',
            'order.success': 'Заявката е изпратена. Ще се свържем скоро!',
            'order.mailto': 'Отворен е пощенският клиент за изпращане',
            'order.failed': 'Неуспешно изпращане. Опитайте по‑късно.',
            'post.back': '← Обратно към Банката с витамини',
            'post.back.link': 'Обратно към Банката с витамини',
            'post.page.title': 'VITLZ — Статия',
            'post.not_found.title': 'Статията не е намерена',
            'post.not_found.text': 'Заявената статия не е налична.'
        },
        ro: {
            'nav.home': 'Acasă',
            'nav.products': 'Produse',
            'nav.about': 'Despre noi',
            'nav.novelties': 'Noutăți',
            'nav.contact': 'Contact',
            'nav.choose': 'Navighează',
            'nav.bank': 'Banca de vitamine',
            'skip.to_content': 'Sari la conținut',
            'header.shop': 'Cumpără formule',
            'hero.h1': 'IMAGINE. CREATE. EVOLVE.',
            'hero.p1': 'Imaginează‑ți o lume în care fiecare luptă pentru umanitate — și pentru fiecare om. Cum am trăi și comunica?',
            'hero.p2': 'Prietenie, sustenabilitate, onestitate și valoarea fiecăruia dintre noi — pentru viitor și progres în știință, natură și cultură.',
            'hero.p3': 'Din această viziune s‑a născut lumea VITLZ. Mai mult decât suplimente — o întruchipare vie a speranțelor noastre.',
            'hero.p4': 'Încearcă, lasă această lume în viața ta — devino parte din ea și trăiește‑o cu adevărat.',
            'hero.p5': '✨ <span class="neon-gradient">Să facem lumea mai bună, împreună.</span>',
            'hero.btn.explore': 'Descoperă produsele',
            'hero.btn.bank': 'Află mai mult?',
            'products.title': 'Formule',
            'products.subtitle': 'Șapte suplimente țintite pentru sprijin zilnic.',
            'products.cta': 'Cumpără formule',
            'product.probiotic.title': 'PROBIOTIC COMPLEX',
            'product.probiotic.tagline': 'Puterea microbiomului.',
            'product.probiotic.desc': 'Amestec avansat de probiotice cu Lactobacillus, Bifidobacterium și Streptococcus thermophilus pentru intestin și imunitate.',
            'product.multi.title': 'MULTIVITAMINS & MINERALS COMPLEX',
            'product.multi.tagline': 'Știință în fiecare tabletă.',
            'product.multi.desc': 'Formulă precisă cu 13 vitamine și 10 minerale pentru bunăstare zilnică. Cu Luteină, Biotină și Crom pentru metabolism, frumusețe și claritate.',
            'product.women.title': 'WOMEN\'S ULTRA TABLET',
            'product.women.tagline': 'Frumusețe. Echilibru. Putere interioară.',
            'product.women.desc': 'Pentru femei care conduc cu eleganță. Vitamine A, C, D3, E, Fier, Calciu, Seleniu și bioflavonoide pentru vitalitate și piele strălucitoare.',
            'product.men.title': 'MEN\'S PREMIUM COMPLEX TABLET',
            'product.men.tagline': 'Putere. Focus. Vitalitate.',
            'product.men.desc': 'Pentru bărbați moderni în continuă evoluție. Vitamine A, D, E, K, complex B, Zinc, Seleniu și Ginseng pentru energie și imunitate.',
            'product.collagen.title': 'MARINE COLLAGEN',
            'product.collagen.tagline': 'Piele. Păr. Unghii.',
            'product.collagen.desc': 'Colagen marin hidrolizat cu vitamina C și B3. 30 de capsule, 21,6 g — pentru piele, păr și unghii.',
            'product.electrolytes.title': 'ELECTROLYTES COMPLEX',
            'product.electrolytes.tagline': 'Minerale. Echilibru. Hidratare.',
            'product.electrolytes.desc': 'Magneziu, potasiu, sodiu și clorură pentru echilibrul electroliților. 30 de tablete, 48 g.',
            'product.urinary.title': 'URINARY COMPLEX',
            'product.urinary.tagline': 'Sprijin zilnic pentru tractul urinar.',
            'product.urinary.desc': 'D-manoză 400 mg și merișor 100 mg. 30 de capsule, 24 g — pentru sănătatea tractului urinar.',
            'universe.title': 'Universul VITLZ',
            'universe.subtitle': 'Povestea, valorile și comunitatea noastră retro‑futuristă.',
            'universe.story.title': 'Povestea noastră',
            'universe.story.text': 'Născut la intersecția dintre știință și imaginație: design îndrăzneț, calitate fabricată în UE și wellness pentru viitor.',
            'universe.ethos.title': 'Etos',
            'universe.ethos.text': 'Claritate, ingrediente esențiale, ghidaj transparent.',
            'universe.community.title': 'Comunitate',
            'universe.community.text': 'Alătură‑te universului: tips, rutine și culise.',
            'novelties.title': 'Noutăți',
            'novelties.collagen.src': 'images/novelties/collagen-ro.jpg',
            'novelties.collagen.alt': 'Colagen marin — de ce colagenul marin este mai bun',
            'novelties.electrolytes.src': 'images/novelties/electrolytes-ro.jpg',
            'novelties.electrolytes.alt': 'Complex de electroliți — patru electroliți esențiali',
            'novelties.urinary.src': 'images/novelties/urinary-ro.jpg',
            'novelties.urinary.alt': 'Complex urinar — când poate fi o alegere potrivită',
            'contact.title': 'Contact',
            'contact.text.html': 'Întrebări? Scrie‑ne la <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>. Vizitează: <a href="https://www.vitlz.eu" target="_blank" rel="noreferrer">www.vitlz.eu</a>.',
            'footer.rights': '&copy; 2024 VITLZ. Toate drepturile rezervate.',
            'buy': 'Cumpără',
            'badge.eu': 'Produs în UE',
            'badge.nongmo': 'Fără OMG',
            'badge.gmp': 'Certificat GMP',
            'badge.vegan': 'Potrivit pentru vegani',
            'stock.coming_soon': 'În curând',
            'stock.out_of_stock': 'Stoc epuizat',
            'stock.notify': 'Anunță-mă',
            'products.prev': 'Formule anterioare',
            'products.next': 'Formule următoare',
            'bank.title': 'Banca de vitamine',
            'bank.subtitle': 'Articolele noastre sunt co‑autorizate cu nutriționiști, bazate pe date clinice și verificate de specialiștii noștri.',
            'bank.show_more': 'Afișează mai multe',
            'bank.summary': 'Rezumat:',
            'order.title': 'Plasează o comandă',
            'order.name': 'Nume *',
            'order.email': 'Email *',
            'order.phone': 'Telefon *',
            'order.comment': 'Comentariu (opțional)',
            'order.comment.placeholder': 'Observațiile sau întrebările tale...',
            'order.submit': 'Trimite cererea',
            'order.required': 'Completează câmpurile obligatorii',
            'order.success': 'Cererea a fost trimisă. Te contactăm în curând!',
            'order.mailto': 'S‑a deschis clientul de e‑mail pentru trimitere',
            'order.failed': 'Nu am putut trimite. Încercă mai târziu.',
            'post.back': '← Înapoi la Banca de vitamine',
            'post.back.link': 'Înapoi la Banca de vitamine',
            'post.page.title': 'VITLZ — Articol',
            'post.not_found.title': 'Articolul nu a fost găsit',
            'post.not_found.text': 'Articolul solicitat nu este disponibil.'
        },
        hu: {
            'nav.home': 'Kezdőlap',
            'nav.products': 'Termékek',
            'nav.about': 'Rólunk',
            'nav.novelties': 'Újdonságok',
            'nav.contact': 'Kapcsolat',
            'nav.choose': 'Navigáció',
            'nav.bank': 'Vitaminbank',
            'skip.to_content': 'Ugrás a tartalomhoz',
            'header.shop': 'Formulák vásárlása',
            'hero.h1': 'IMAGINE. CREATE. EVOLVE.',
            'hero.p1': 'Képzeld el, milyen lenne a világ, ha mindenki az emberségért — és minden egyes emberért — kiállna. Hogyan élnénk és kommunikálnánk?',
            'hero.p2': 'Barátság, fenntarthatóság, őszinteség és mindannyiunk értéke — a jövőért, a tudomány, a természet és a kultúra fejlődéséért.',
            'hero.p3': 'Ebből a vízióból született a VITLZ világa. Több, mint étrend-kiegészítő — reményeink élő megtestesülése.',
            'hero.p4': 'Próbáld ki, engedd be ezt a világot az életedbe — légy a része, és éld át igazán.',
            'hero.p5': '✨ <span class="neon-gradient">Tegyük együtt jobbá a világot.</span>',
            'hero.btn.explore': 'Termékek felfedezése',
            'hero.btn.bank': 'Tudj meg többet?',
            'products.title': 'Formulák',
            'products.subtitle': 'Hét célzott kiegészítő a mindennapi támogatáshoz.',
            'products.cta': 'Formulák vásárlása',
            'product.probiotic.title': 'PROBIOTIC COMPLEX',
            'product.probiotic.tagline': 'A mikrobiom ereje.',
            'product.probiotic.desc': 'Fejlett probiotikus keverék Lactobacillus, Bifidobacterium és Streptococcus thermophilus törzsekkel a bélflóra és az immunrendszer támogatására.',
            'product.multi.title': 'MULTIVITAMINS & MINERALS COMPLEX',
            'product.multi.tagline': 'Tudomány minden tablettában.',
            'product.multi.desc': 'Pontos formula 13 vitaminnal és 10 ásványi anyaggal a napi jóllétért. Luteinnel, biotinnal és krómmal az anyagcsere, a szépség és a tisztánlátás támogatására.',
            'product.women.title': 'WOMEN\'S ULTRA TABLET',
            'product.women.tagline': 'Szépség. Egyensúly. Belső erő.',
            'product.women.desc': 'Nőknek, akik ragyogással és eleganciával vezetnek. A, C, D3, E vitaminok, vas, kalcium, szelén és bioflavonoidok az életerőért és a ragyogó bőrért.',
            'product.men.title': 'MEN\'S PREMIUM COMPLEX TABLET',
            'product.men.tagline': 'Erő. Fókusz. Vitalitás.',
            'product.men.desc': 'Modern férfiaknak, akik folyamatosan fejlődnek. A, D, E, K vitaminok, B-komplex, cink, szelén és ginzeng az energiáért, immunitásért és fókuszért.',
            'product.collagen.title': 'MARINE COLLAGEN',
            'product.collagen.tagline': 'Bőr. Haj. Körmök.',
            'product.collagen.desc': 'Hidrolizált tengeri kollagén C-vitaminnal és B3-vitaminnal. 30 kapszula, 21,6 g — bőrre, hajra és körmökre.',
            'product.electrolytes.title': 'ELECTROLYTES COMPLEX',
            'product.electrolytes.tagline': 'Ásványi anyagok. Egyensúly. Hidratáció.',
            'product.electrolytes.desc': 'Magnézium, kálium, nátrium és klorid az elektrolit-egyensúlyért. 30 tabletta, 48 g.',
            'product.urinary.title': 'URINARY COMPLEX',
            'product.urinary.tagline': 'Napi támogatás a húgyutaknak.',
            'product.urinary.desc': 'D-mannóz 400 mg és tőzegáfonya 100 mg. 30 kapszula, 24 g — a húgyutak egészségéért.',
            'universe.title': 'A VITLZ univerzum',
            'universe.subtitle': 'Retro-futurisztikus történetünk, értékeink és közösségünk.',
            'universe.story.title': 'Történetünk',
            'universe.story.text': 'A tudomány és a képzelet határán született: merész dizájn, EU-minőség és mindennapi wellness a jövőre tervezve.',
            'universe.ethos.title': 'Értékeink',
            'universe.ethos.text': 'Tisztaság a zaj helyett. Hatékony, lényeges összetevők. Átlátható iránymutatás.',
            'universe.community.title': 'Közösség',
            'universe.community.text': 'Csatlakozz: tippek, rutinok és kulisszatitkok.',
            'novelties.title': 'Újdonságok',
            'novelties.collagen.src': 'images/novelties/collagen-en.jpg',
            'novelties.collagen.alt': 'Tengeri kollagén — miért jobb a tengeri kollagén',
            'novelties.electrolytes.src': 'images/novelties/electrolytes-en.jpg',
            'novelties.electrolytes.alt': 'Elektrolit komplex — négy esszenciális elektrolit',
            'novelties.urinary.src': 'images/novelties/urinary-en.jpg',
            'novelties.urinary.alt': 'Húgyúti komplex — mikor lehet jó választás',
            'contact.title': 'Kapcsolat',
            'contact.text.html': 'Kérdésed van? Írj nekünk: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>. Látogass el: <a href="https://www.vitlz.eu" target="_blank" rel="noreferrer">www.vitlz.eu</a>.',
            'footer.rights': '&copy; 2024 VITLZ. Minden jog fenntartva.',
            'buy': 'Vásárlás',
            'badge.eu': 'EU-ban készült',
            'badge.nongmo': 'GMO-mentes',
            'badge.gmp': 'GMP tanúsított',
            'badge.vegan': 'Vegánbarát',
            'stock.coming_soon': 'Hamarosan',
            'stock.out_of_stock': 'Nincs készleten',
            'stock.notify': 'Értesíts',
            'products.prev': 'Előző formulák',
            'products.next': 'Következő formulák',
            'bank.title': 'Vitaminbank',
            'bank.subtitle': 'Cikkeinket táplálkozási szakértőkkel készítjük, klinikai adatokra támaszkodunk, és szakembereink ellenőrzik őket.',
            'bank.show_more': 'Több megjelenítése',
            'bank.summary': 'Összefoglaló:',
            'order.title': 'Rendelés leadása',
            'order.name': 'Név *',
            'order.email': 'E-mail *',
            'order.phone': 'Telefon *',
            'order.comment': 'Megjegyzés (opcionális)',
            'order.comment.placeholder': 'Jegyzeteid vagy kérdéseid...',
            'order.submit': 'Kérés küldése',
            'order.required': 'Kérjük, töltsd ki a kötelező mezőket',
            'order.success': 'Kérés elküldve. Hamarosan jelentkezünk!',
            'order.mailto': 'Megnyílt az e-mail program a küldéshez',
            'order.failed': 'Nem sikerült elküldeni. Próbáld meg később.',
            'post.back': '← Vissza a Vitaminbankhoz',
            'post.back.link': 'Vissza a Vitaminbankhoz',
            'post.page.title': 'VITLZ — Cikk',
            'post.not_found.title': 'A cikk nem található',
            'post.not_found.text': 'A kért cikk nem elérhető.'
        },
        pl: {
            'nav.home': 'Start',
            'nav.products': 'Produkty',
            'nav.about': 'O nas',
            'nav.novelties': 'Nowości',
            'nav.contact': 'Kontakt',
            'nav.choose': 'Nawigacja',
            'nav.bank': 'Bank witamin',
            'skip.to_content': 'Przejdź do treści',
            'header.shop': 'Kup formuły',
            'hero.h1': 'IMAGINE. CREATE. EVOLVE.',
            'hero.p1': 'Wyobraź sobie świat, w którym każdy staje w obronie człowieczeństwa — i każdego człowieka. Jak byśmy żyli i się komunikowali?',
            'hero.p2': 'Przyjaźń, zrównoważony rozwój, uczciwość i wartość każdego z nas — dla przyszłości oraz postępu w nauce, naturze i kulturze.',
            'hero.p3': 'Z tej wizji narodził się świat VITLZ. To więcej niż suplementy — żywe ucieleśnienie naszych nadziei.',
            'hero.p4': 'Spróbuj, wpuść ten świat do swojego życia — zostań jego częścią i przeżyj go naprawdę.',
            'hero.p5': '✨ <span class="neon-gradient">Razem uczyńmy świat lepszym.</span>',
            'hero.btn.explore': 'Odkryj produkty',
            'hero.btn.bank': 'Dowiedz się więcej?',
            'products.title': 'Formuły',
            'products.subtitle': 'Siedem ukierunkowanych suplementów do codziennego wsparcia.',
            'products.cta': 'Kup formuły',
            'product.probiotic.title': 'PROBIOTIC COMPLEX',
            'product.probiotic.tagline': 'Siła mikrobiomu.',
            'product.probiotic.desc': 'Zaawansowana mieszanka probiotyków z Lactobacillus, Bifidobacterium i Streptococcus thermophilus dla jelit i odporności.',
            'product.multi.title': 'MULTIVITAMINS & MINERALS COMPLEX',
            'product.multi.tagline': 'Nauka w każdej tabletce.',
            'product.multi.desc': 'Precyzyjna formuła 13 witamin i 10 minerałów dla codziennego dobrostanu. Z luteiną, biotyną i chromem dla metabolizmu, urody i jasności umysłu.',
            'product.women.title': 'WOMEN\'S ULTRA TABLET',
            'product.women.tagline': 'Piękno. Równowaga. Wewnętrzna siła.',
            'product.women.desc': 'Dla kobiet, które działają z blaskiem i gracją. Witaminy A, C, D3, E, żelazo, wapń, selen i bioflawonoidy — dla witalności i promiennej skóry.',
            'product.men.title': 'MEN\'S PREMIUM COMPLEX TABLET',
            'product.men.tagline': 'Siła. Skupienie. Witalność.',
            'product.men.desc': 'Dla nowoczesnych mężczyzn, którzy stale się rozwijają. Witaminy A, D, E, K, kompleks B, cynk, selen i żeń-szeń — dla energii, odporności i koncentracji.',
            'product.collagen.title': 'MARINE COLLAGEN',
            'product.collagen.tagline': 'Skóra. Włosy. Paznokcie.',
            'product.collagen.desc': 'Hydrolizowany kolagen morski z witaminą C i B3. 30 kapsułek, 21,6 g — dla skóry, włosów i paznokci.',
            'product.electrolytes.title': 'ELECTROLYTES COMPLEX',
            'product.electrolytes.tagline': 'Minerały. Równowaga. Nawodnienie.',
            'product.electrolytes.desc': 'Magnez, potas, sód i chlorek dla równowagi elektrolitowej. 30 tabletek, 48 g.',
            'product.urinary.title': 'URINARY COMPLEX',
            'product.urinary.tagline': 'Codzienne wsparcie dróg moczowych.',
            'product.urinary.desc': 'D-mannoza 400 mg i żurawina 100 mg. 30 kapsułek, 24 g — dla zdrowia dróg moczowych.',
            'universe.title': 'Uniwersum VITLZ',
            'universe.subtitle': 'Nasza retrofuturystyczna historia, wartości i społeczność.',
            'universe.story.title': 'Nasza historia',
            'universe.story.text': 'Powstało na styku nauki i wyobraźni: odważny design, jakość z UE i codzienny wellness zaprojektowany na przyszłość.',
            'universe.ethos.title': 'Wartości',
            'universe.ethos.text': 'Jasność zamiast szumu. Skuteczne, niezbędne składniki. Przejrzyste wskazówki.',
            'universe.community.title': 'Społeczność',
            'universe.community.text': 'Dołącz: wskazówki, rytuały i kulisy.',
            'novelties.title': 'Nowości',
            'novelties.collagen.src': 'images/novelties/collagen-en.jpg',
            'novelties.collagen.alt': 'Kolagen morski — dlaczego kolagen morski jest lepszy',
            'novelties.electrolytes.src': 'images/novelties/electrolytes-en.jpg',
            'novelties.electrolytes.alt': 'Kompleks elektrolitów — cztery kluczowe elektrolity',
            'novelties.urinary.src': 'images/novelties/urinary-en.jpg',
            'novelties.urinary.alt': 'Kompleks na drogi moczowe — kiedy może być dobrym wyborem',
            'contact.title': 'Kontakt',
            'contact.text.html': 'Pytania? Napisz na <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>. Odwiedź: <a href="https://www.vitlz.eu" target="_blank" rel="noreferrer">www.vitlz.eu</a>.',
            'footer.rights': '&copy; 2024 VITLZ. Wszelkie prawa zastrzeżone.',
            'buy': 'Kup',
            'badge.eu': 'Wyprodukowano w UE',
            'badge.nongmo': 'Bez GMO',
            'badge.gmp': 'Certyfikat GMP',
            'badge.vegan': 'Przyjazne weganom',
            'stock.coming_soon': 'Wkrótce',
            'stock.out_of_stock': 'Brak w magazynie',
            'stock.notify': 'Powiadom mnie',
            'products.prev': 'Poprzednie formuły',
            'products.next': 'Następne formuły',
            'bank.title': 'Bank witamin',
            'bank.subtitle': 'Nasze artykuły powstają z dietetykami, opierają się na danych klinicznych i są weryfikowane przez specjalistów.',
            'bank.show_more': 'Pokaż więcej',
            'bank.summary': 'Podsumowanie:',
            'order.title': 'Złóż zamówienie',
            'order.name': 'Imię *',
            'order.email': 'E-mail *',
            'order.phone': 'Telefon *',
            'order.comment': 'Komentarz (opcjonalnie)',
            'order.comment.placeholder': 'Twoje uwagi lub pytania...',
            'order.submit': 'Wyślij zapytanie',
            'order.required': 'Uzupełnij wymagane pola',
            'order.success': 'Zapytanie wysłane. Wkrótce się odezwiemy!',
            'order.mailto': 'Otwarto klienta e-mail do wysyłki',
            'order.failed': 'Nie udało się wysłać. Spróbuj później.',
            'post.back': '← Wróć do Banku witamin',
            'post.back.link': 'Wróć do Banku witamin',
            'post.page.title': 'VITLZ — Artykuł',
            'post.not_found.title': 'Nie znaleziono artykułu',
            'post.not_found.text': 'Żądany artykuł jest niedostępny.'
        }
    };

    function getStoredLang() {
        try { return localStorage.getItem('lang') || null; } catch (e) { return null; }
    }
    function storeLang(lang) {
        try { localStorage.setItem('lang', lang); } catch (e) {}
    }
    function setHtmlLang(lang) {
        try { document.documentElement.setAttribute('lang', lang); } catch (e) {}
    }

    function translateElement(el, lang) {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        const dict = (DICT[lang] && DICT[lang][key]) || (DICT.en && DICT.en[key]) || '';
        const isHtml = el.hasAttribute('data-i18n-html');
        if (isHtml) {
            el.innerHTML = String(dict);
        } else {
            el.textContent = String(dict);
        }
        const attrs = el.getAttribute('data-i18n-attr');
        if (attrs) {
            attrs.split(',').map(s => s.trim()).forEach((attr) => {
                const attrKey = `${key}.${attr}`;
                const val = (DICT[lang] && DICT[lang][attrKey]) || (DICT.en && DICT.en[attrKey]);
                if (typeof val === 'string') el.setAttribute(attr, val);
            });
        }
    }

    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach((el) => translateElement(el, lang));
        document.querySelectorAll('[data-i18n-src]').forEach((el) => {
            const key = el.getAttribute('data-i18n-src');
            const val = (DICT[lang] && DICT[lang][key]) || (DICT.en && DICT.en[key]);
            if (typeof val === 'string') el.setAttribute('src', val);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            const key = el.getAttribute('data-i18n-alt');
            const val = (DICT[lang] && DICT[lang][key]) || (DICT.en && DICT.en[key]);
            if (typeof val === 'string') el.setAttribute('alt', val);
        });
        setHtmlLang(lang);
        window.I18N = window.I18N || {};
        window.I18N.current = lang;
        window.I18N.dict = DICT;
        window.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
        try { syncInternalLinks(lang); } catch (e) {}
    }
    // public API for other scripts
    window.setLanguage = function(lang) {
        storeLang(lang);
        applyTranslations(lang);
    };

    function initLanguageSwitcher() {
        const switcher = document.getElementById('lang-switcher');
        if (!switcher) return;
        const current = window.I18N && window.I18N.current || 'en';
        switcher.value = current;
        switcher.addEventListener('change', () => {
            const lang = switcher.value || 'en';
            storeLang(lang);
            applyTranslations(lang);
        });
    }
    function getLangFromUrl() {
        try {
            const params = new URLSearchParams(window.location.search);
            const l = params.get('lang');
            if (l && DICT[l]) return l;
        } catch (e) {}
        return null;
    }
    function setLangParam(url, lang) {
        try {
            const u = new URL(url, window.location.href);
            if (u.origin !== window.location.origin) return url; // external
            u.searchParams.set('lang', lang);
            return u.pathname + '?' + u.searchParams.toString() + (u.hash || '');
        } catch (e) {
            return url;
        }
    }
    function syncInternalLinks(lang) {
        const anchors = Array.from(document.querySelectorAll('a[href]'));
        anchors.forEach(a => {
            const href = a.getAttribute('href');
            if (!href || href.startsWith('http')) return;
            if (!/\.html(?:$|[?#])/.test(href)) return;
            a.setAttribute('href', setLangParam(href, lang));
        });
    }

    // global t() helper
    window.__t = function(key) {
        const lang = (window.I18N && window.I18N.current) || 'en';
        return (DICT[lang] && DICT[lang][key]) || (DICT.en && DICT.en[key]) || '';
    };

    function bootI18n() {
        let lang = getLangFromUrl() || getStoredLang();
        if (!lang) {
            lang = 'bg';
        }
        window.I18N = { current: lang, dict: DICT };
        applyTranslations(lang);
        initLanguageSwitcher();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootI18n);
    } else {
        bootI18n();
    }
})();


