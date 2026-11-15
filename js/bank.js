/* VITLZ Vitamins Bank - dynamic rendering with "Show more" (29 items) */
(function() {
    const PAGE_SIZE = 8;

    // Fallback static data (used only if JSON fetch fails)
    const FALLBACK_EN = [
        // 1
        {
            title: 'Magnesium: essential mineral explained simply',
            date: '31.10.2025',
            summary: 'Supports energy production, nerve and muscle function, stress management, and sleep quality. Forms: citrate, glycinate, oxide.',
            content: [
                'Magnesium is a cofactor in 300+ enzymatic reactions, including ATP synthesis, neuromuscular transmission, and regulation of the stress response.',
                'Forms differ by bioavailability and tolerance: citrate is well absorbed; glycinate is gentle; oxide is concentrated but less bioavailable.',
                'Dietary sources: nuts, seeds, legumes, whole grains, leafy greens. Consider evening intake for sleep support; consult a professional if you have kidney conditions.'
            ]
        },
        // 2
        {
            title: 'What is Omega‑3 and why is it needed?',
            date: '31.10.2025',
            summary: 'EPA/DHA support heart, brain, inflammation balance, and vision. Sources: fatty fish and algae oil.',
            content: [
                'EPA and DHA are long‑chain omega‑3 fatty acids integral to membrane fluidity, cardiovascular health, and cognitive/visual function.',
                'Aim for oily fish 2–3× weekly or use standardized supplements. Plant‑based option: algae oil.',
                'Balance the omega‑6:omega‑3 ratio by limiting refined seed oils; consider enteric or re‑esterified forms for better tolerance.'
            ]
        },
        // 3
        {
            title: 'What is Collagen and why is it important?',
            date: '31.10.2025',
            summary: 'Structural protein for skin, joints, bones. Hydrolyzed peptides (types I/II/III) absorb better; vitamin C supports synthesis.',
            content: [
                'Collagen composes connective tissues. Type I: skin and bone; Type II: cartilage; Type III often accompanies Type I.',
                'Hydrolyzed peptides improve digestibility. Consistent daily use for several weeks is typically needed for benefits.',
                'Ensure vitamin C sufficiency to support endogenous collagen formation.'
            ]
        },
        // 4
        {
            title: 'Vitamin D3: the sunshine vitamin for immunity and beyond',
            date: '31.10.2025',
            summary: 'Regulates calcium balance, bone strength, and immune function. Often paired with K2.',
            content: [
                'Cholecalciferol supports calcium/phosphorus homeostasis and normal immune function.',
                'Status depends on sun exposure, latitude, and season. Dietary sources are limited, so supplementation is common.',
                'Combining D3 with K2 (MK‑7) supports bone mineralization and proper calcium utilization.'
            ]
        },
        // 5
        {
            title: 'Vitamin C: role in immune support',
            date: '31.10.2025',
            summary: 'Antioxidant for immunity and collagen synthesis; enhances iron absorption.',
            content: [
                'Ascorbic acid participates in antioxidant defense and supports normal immune function.',
                'It is essential for collagen synthesis in skin, vessels, and ligaments, and enhances non‑heme iron absorption.',
                'Sources: citrus, berries, kiwifruit, peppers, broccoli. Split doses for steadier plasma levels.'
            ]
        },
        // 6
        {
            title: 'Multivitamins: why children should take them',
            date: '31.10.2025',
            summary: 'Bridge gaps during growth; support immunity and cognition. Doses vary by age.',
            content: [
                'Children’s diets can be inconsistent; multivitamins help cover occasional gaps in essential micronutrients.',
                'Common nutrients: vitamins A, C, D, E, B‑complex; minerals like iodine, zinc, sometimes iron.',
                'Formats include chewables, gummies, liquids. Follow age‑specific dosing and dental hygiene after sugary forms.'
            ]
        },
        // 7
        {
            title: 'Chlorophyll: benefits and how to take it',
            date: '31.10.2025',
            summary: 'Plant pigment with antioxidant properties; often used as liquid drops.',
            content: [
                'Chlorophyll and chlorophyllin are used in wellness routines for freshness and antioxidant support.',
                'Commonly diluted in water; begin with the lowest suggested amount to assess tolerance.',
                'Rinse containers after use to avoid staining.'
            ]
        },
        // 8
        {
            title: 'Zinc: sources and how to take it',
            date: '30.10.2025',
            summary: 'Key for immunity, skin, and enzymes. Forms: gluconate, citrate, picolinate.',
            content: [
                'Zinc participates in hundreds of enzymes supporting immune function, wound healing, and skin integrity.',
                'Sources: meat, shellfish, dairy, legumes. Phytates can reduce absorption; soaking/sprouting helps.',
                'Separate from high‑dose iron or calcium; excessive zinc may cause nausea.'
            ]
        },
        // 9
        {
            title: 'Iodine: what it’s for and how to take it',
            date: '29.10.2025',
            summary: 'Supports thyroid hormone production and normal cognitive and metabolic function.',
            content: [
                'Iodine is essential for thyroxine (T4) and triiodothyronine (T3) synthesis, affecting metabolism and development.',
                'Sources: iodized salt, sea fish, seaweed. Both deficiency and excess may affect thyroid.',
                'Pregnant and lactating individuals have increased needs; seek medical guidance.'
            ]
        },
        // 10
        {
            title: 'Folic acid (Vitamin B9): what for and how to take',
            date: '29.10.2025',
            summary: 'Critical for DNA synthesis and neural tube development; supports homocysteine metabolism.',
            content: [
                'B9 supports normal blood formation and cell division. Adequate intake is vital pre‑conception and in early pregnancy.',
                'Naturally present as folates in leafy greens, legumes, and liver; supplements often use folic acid or 5‑MTHF.',
                'Check medication interactions (e.g., certain anti‑folate drugs) with a healthcare professional.'
            ]
        },
        // 11
        {
            title: 'Alpha‑lipoic acid: where it’s found and how to take',
            date: '29.10.2025',
            summary: 'Universal antioxidant participating in mitochondrial energy metabolism.',
            content: [
                'ALA functions as a cofactor for mitochondrial enzymes and helps regenerate other antioxidants (vitamins C and E).',
                'Commonly used for metabolic health support and as part of nerve care protocols.',
                'Can be taken on an empty stomach for better absorption; may interact with glucose‑lowering therapy.'
            ]
        },
        // 12
        { title: 'Vitamin A: vision and immunity', date: '28.10.2025',
          summary: 'Supports vision, epithelial integrity, and immunity.',
          content: [
              'Retinol and provitamin A carotenoids (beta‑carotene) support low‑light vision and epithelial tissues.',
              'Excess retinol can be teratogenic; follow label guidance. Food sources include liver and dairy; carotenoids in carrots and sweet potatoes.'
          ] },
        // 13
        { title: 'Vitamin E: antioxidant protection', date: '28.10.2025',
          summary: 'Protects cells from oxidative stress; works with vitamin C.',
          content: [
              'Tocopherols and tocotrienols stabilize membranes against oxidative damage.',
              'Mixed tocopherol formulas more closely mirror dietary intake; consider balance with PUFA consumption.'
          ] },
        // 14
        { title: 'Vitamin K2: bone and vascular balance', date: '28.10.2025',
          summary: 'Activates proteins that direct calcium to bones and away from soft tissues.',
          content: [
              'MK‑7 has a longer half‑life than K1 and MK‑4, supporting osteocalcin and MGP activation.',
              'Often paired with vitamin D3 for complementary calcium metabolism roles.'
          ] },
        // 15
        { title: 'Calcium: structure and signaling', date: '27.10.2025',
          summary: 'Major mineral for bones/teeth and cellular signaling.',
          content: [
              'Calcium carbonate provides more elemental calcium; citrate is gentler and doesn’t require as much stomach acid.',
              'Split doses improve absorption; ensure adequate vitamin D status.'
          ] },
        // 16
        { title: 'Iron: where it’s found and how to take', date: '27.10.2025',
          summary: 'Supports hemoglobin and oxygen transport; monitor status before use.',
          content: [
              'Heme iron (meat) absorbs better than non‑heme (plants). Vitamin C enhances non‑heme absorption.',
              'Common forms: ferrous bisglycinate, gluconate, sulfate. Excess may cause GI discomfort; keep away from children.'
          ] },
        // 17
        { title: 'Selenium: antioxidant and thyroid support', date: '27.10.2025',
          summary: 'Component of antioxidant enzymes and thyroid hormone metabolism.',
          content: [
              'Glutathione peroxidases and deiodinases require selenium. Sources include Brazil nuts and seafood.',
              'High intakes can cause selenosis; follow recommended amounts.'
          ] },
        // 18
        { title: 'Biotin (Vitamin B7): hair, skin, nails', date: '26.10.2025',
          summary: 'Coenzyme in macronutrient metabolism; popular for cosmetic support.',
          content: [
              'Biotin participates in carboxylase reactions for fats and carbohydrates.',
              'High supplemental intakes can interfere with certain lab tests; inform your clinician.'
          ] },
        // 19
        { title: 'Vitamin B12 (Cobalamin): energy and nerves', date: '26.10.2025',
          summary: 'Supports red blood cell formation and nervous system function.',
          content: [
              'Methylcobalamin and cyanocobalamin are common forms; absorption depends on intrinsic factor.',
              'Vegetarians/vegans may require supplementation; monitor status in older adults.'
          ] },
        // 20
        { title: 'Vitamin B6 (Pyridoxine): metabolism and mood', date: '26.10.2025',
          summary: 'Coenzyme in amino acid metabolism and neurotransmitter synthesis.',
          content: [
              'Supports normal homocysteine metabolism and energy release.',
              'Very high doses over time can cause sensory neuropathy; stay within guidance.'
          ] },
        // 21
        { title: 'Vitamin B1 (Thiamine): energy metabolism', date: '25.10.2025',
          summary: 'Coenzyme for carbohydrate metabolism and nerve function.',
          content: [
              'Thiamine pyrophosphate is required for pyruvate dehydrogenase activity.',
              'Deficiency risk rises with chronic alcohol use or highly refined diets.'
          ] },
        // 22
        { title: 'Vitamin B2 (Riboflavin): cellular energy', date: '25.10.2025',
          summary: 'Precursor of FAD/FMNs in redox reactions.',
          content: [
              'Important for mitochondrial energy production and antioxidant enzyme function.',
              'May discolor urine bright yellow—this is expected and harmless.'
          ] },
        // 23
        { title: 'Vitamin B3 (Niacin): metabolism and skin', date: '25.10.2025',
          summary: 'Precursor to NAD/NADP; high doses can cause flushing.',
          content: [
              'Supports normal energy metabolism and skin health.',
              'Niacin flush is a benign vasodilatory effect; “flush‑free” inositol hexanicotinate behaves differently.'
          ] },
        // 24
        { title: 'Vitamin B5 (Pantothenic acid): CoA synthesis', date: '24.10.2025',
          summary: 'Required to synthesize coenzyme A; involved in energy and lipid metabolism.',
          content: [
              'Widely distributed in foods; deficiency is rare but may cause fatigue and irritability.',
              'Sometimes used in higher doses for skin support—evidence varies.'
          ] },
        // 25
        { title: 'Coenzyme Q10: mitochondria and heart', date: '24.10.2025',
          summary: 'Ubiquinone/ubiquinol support cellular energy and antioxidant protection.',
          content: [
              'Part of the electron transport chain; levels can decline with age and statin use.',
              'Ubiquinol is the reduced form with higher bioavailability in some studies.'
          ] },
        // 26
        { title: 'Probiotics: balance from within', date: '24.10.2025',
          summary: 'Live microorganisms that support microbiome balance and gut barrier.',
          content: [
              'Common genera: Lactobacillus, Bifidobacterium, Streptococcus thermophilus.',
              'Strain‑specific benefits and CFU counts matter; store according to label.'
          ] },
        // 27
        { title: 'Prebiotics (Inulin & FOS): feed your microbiome', date: '23.10.2025',
          summary: 'Non‑digestible fibers that selectively nourish beneficial bacteria.',
          content: [
              'Inulin and fructo‑oligosaccharides increase bifidobacteria and short‑chain fatty acids.',
              'Start low to minimize gas/bloating; pair with adequate fluids.'
          ] },
        // 28
        { title: 'Lutein & Zeaxanthin: macular pigments', date: '23.10.2025',
          summary: 'Concentrated in the retina; support visual performance and blue‑light filtering.',
          content: [
              'Carotenoids accumulate in the macula and may support contrast sensitivity and glare recovery.',
              'Sources: leafy greens, egg yolks; often paired with meso‑zeaxanthin in formulas.'
          ] },
        // 29
        { title: 'Chromium: glucose metabolism support', date: '23.10.2025',
          summary: 'Involved in normal macronutrient metabolism and blood glucose regulation.',
          content: [
              'Forms include chromium picolinate and chromium polynicotinate.',
              'Supports insulin signaling; those on glucose‑lowering therapy should consult a professional.'
          ] }
    ];

    const FALLBACK_TRANSLATIONS = {
        bg: {
            0: {
                title: 'Магнезий: есенциалният минерал, обяснен просто',
                summary: 'Подпомага производството на енергия, нервната и мускулната функция, управлението на стреса и качеството на съня. Форми: цитрат, глицинат, оксид.',
                content: [
                    'Магнезият е кофактор в над 300 ензимни реакции, включително синтеза на АТФ, невромускулната трансмисия и регулацията на реакцията към стрес.',
                    'Формите се различават по усвоимост и поносимост: цитратът се абсорбира добре; глицинатът е щадящ; оксидът е концентриран, но с по-ниска бионаличност.',
                    'Хранителни източници: ядки, семена, бобови, пълнозърнести и зелени листни зеленчуци. Приемайте вечер за подкрепа на съня; консултирайте се със специалист при бъбречни проблеми.'
                ]
            },
            1: {
                title: 'Какво представлява Омега‑3 и защо е нужна?',
                summary: 'EPA/DHA подпомагат сърцето, мозъка, баланса на възпалението и зрението. Източници: тлъста риба и масло от водорасли.',
                content: [
                    'EPA и DHA са дълговерижни омега‑3 мастни киселини, ключови за флуидността на мембраните, сърдечно‑съдовото здраве и когнитивната/визуалната функция.',
                    'Стремете се към мазна риба 2–3 пъти седмично или стандартизирани добавки. Растителна алтернатива: масло от водорасли.',
                    'Уравновесете съотношението омега‑6:омега‑3, като ограничите рафинираните растителни масла; за по-добра поносимост изберете ентерично покритие или реестерифицирани форми.'
                ]
            },
            2: {
                title: 'Какво е колаген и защо е важен?',
                summary: 'Структурен протеин за кожа, стави и кости. Хидролизираните пептиди (тип I/II/III) се усвояват по-добре; витамин C подпомага синтеза.',
                content: [
                    'Колагенът изгражда съединителните тъкани. Тип I: кожа и кости; тип II: хрущяли; тип III често съпровожда тип I.',
                    'Хидролизираните пептиди подобряват смилаемостта. За видими ползи обикновено е необходим ежедневен прием в продължение на няколко седмици.',
                    'Осигурете достатъчно витамин C, за да подкрепите собствения синтез на колаген.'
                ]
            },
            3: {
                title: 'Витамин D3: слънчевият витамин за имунитета и още',
                summary: 'Регулира калциевия баланс, здравината на костите и имунитета. Често се комбинира с K2.',
                content: [
                    'Холекалциферолът поддържа хомеостазата на калция и фосфора и нормалната имунна функция.',
                    'Нивата зависят от слънчевото излагане, географската ширина и сезона. Хранителните източници са ограничени, затова добавките са чести.',
                    'Комбинацията D3 с K2 (MK‑7) подпомага минерализацията на костите и правилното насочване на калция.'
                ]
            },
            4: {
                title: 'Витамин C: роля в имунната подкрепа',
                summary: 'Антиоксидант за имунитет и синтез на колаген; подобрява усвояването на желязо.',
                content: [
                    'Аскорбиновата киселина участва в антиоксидантната защита и поддържа нормалната имунна функция.',
                    'Необходима е за синтеза на колаген в кожата, съдовете и сухожилията и усилва усвояването на нехемово желязо.',
                    'Източници: цитруси, горски плодове, киви, чушки, броколи. Разделяйте дозите за по-стабилни нива в плазмата.'
                ]
            },
            5: {
                title: 'Мултивитамини: защо децата трябва да ги приемат',
                summary: 'Запълват дефицити по време на растежа; подпомагат имунитета и когницията. Дозите зависят от възрастта.',
                content: [
                    'Детското хранене често е непостоянно; мултивитамините помагат да се покрият пропуски в ключови микронутриенти.',
                    'Типични нутриенти: витамини A, C, D, E, комплекс B; минерали като йод, цинк и понякога желязо.',
                    'Форми: дъвчащи таблетки, желирани бонбони, течности. Спазвайте възрастовите дозировки и грижата за зъбите след сладки форми.'
                ]
            },
            6: {
                title: 'Хлорофил: ползи и как да го приемате',
                summary: 'Растителен пигмент с антиоксидантни свойства; често се използва като течни капки.',
                content: [
                    'Хлорофилът и хлорофилинът се включват в уелнес практики за свежест и антиоксидантна защита.',
                    'Обикновено се разрежда във вода; започнете с най-ниската препоръчана доза, за да оцените поносимостта.',
                    'Изплаквайте съдовете след употреба, за да избегнете оцветяване.'
                ]
            },
            7: {
                title: 'Цинк: източници и как да го приемате',
                summary: 'Ключов за имунитета, кожата и ензимите. Форми: глюконат, цитрат, пиколинат.',
                content: [
                    'Цинкът участва в стотици ензими, които подпомагат имунитета, зарастването и здравината на кожата.',
                    'Източници: месо, миди, млечни продукти, бобови. Фитатите понижават усвояването; накисването и покълването помагат.',
                    'Приемайте отделно от високи дози желязо или калций; прекомерният цинк може да предизвика гадене.'
                ]
            },
            8: {
                title: 'Йод: за какво служи и как да го приемате',
                summary: 'Подпомага синтеза на щитовидни хормони и нормалните когнитивни и метаболитни функции.',
                content: [
                    'Йодът е необходим за синтеза на тироксин (T4) и трийодтиронин (T3), влияещ върху метаболизма и развитието.',
                    'Източници: йодирана сол, морска риба, морски водорасли. И дефицитът, и излишъкът влияят на щитовидната жлеза.',
                    'По време на бременност и кърмене нуждите се увеличават; консултирайте се със специалист.'
                ]
            },
            9: {
                title: 'Фолиева киселина (витамин B9): за какво и как да се приема',
                summary: 'Критична за синтеза на ДНК и развитието на невралната тръба; подпомага метаболизма на хомоцистеин.',
                content: [
                    'B9 поддържа нормалното кръвообразуване и клетъчното делене. Достатъчният прием е ключов преди зачеване и в ранна бременност.',
                    'Среща се като фолати в зелени листни зеленчуци, бобови и черен дроб; добавките използват фолиева киселина или 5-MTHF.',
                    'Проверете лекарствените взаимодействия (например с антифолатни препарати) със здравен специалист.'
                ]
            },
            10: {
                title: 'Алфа-липоева киселина: къде се среща и как да се приема',
                summary: 'Универсален антиоксидант, участващ в митохондриалния енергиен метаболизъм.',
                content: [
                    'ALA действа като кофактор на митохондриални ензими и подпомага регенерацията на други антиоксиданти (витамини C и E).',
                    'Често се използва за подкрепа на метаболитното здраве и в протоколи за грижа за нервите.',
                    'Може да се приема на празен стомах за по-добро усвояване; възможни са взаимодействия с терапии за понижаване на глюкозата.'
                ]
            },
            11: {
                title: 'Витамин A: зрение и имунитет',
                summary: 'Подпомага зрението, епителната цялост и имунитета.',
                content: [
                    'Ретинолът и провитамин A каротеноидите (бета-каротин) поддържат зрението при ниска светлина и епителните тъкани.',
                    'Излишъкът от ретинол може да е тератогенен; следвайте указанията. Източници: черен дроб, млечни; каротеноиди има в моркови и сладки картофи.'
                ]
            },
            12: {
                title: 'Витамин E: антиоксидантна защита',
                summary: 'Предпазва клетките от оксидативен стрес; работи в синергия с витамин C.',
                content: [
                    'Токоферолите и токотриенолите стабилизират мембраните срещу оксидативни увреждания.',
                    'Формулите с микс токофероли по-добре наподобяват хранителния прием; съобразете баланса с полиненаситени мазнини.'
                ]
            },
            13: {
                title: 'Витамин K2: баланс за кости и съдове',
                summary: 'Активира протеини, които насочват калция към костите и далеч от меките тъкани.',
                content: [
                    'MK‑7 има по-дълъг полуразпад от K1 и MK‑4, подпомагайки активирането на остеокалцин и MGP.',
                    'Често се комбинира с витамин D3 за допълващи роли в калциевия метаболизъм.'
                ]
            },
            14: {
                title: 'Калций: структура и сигнализация',
                summary: 'Основен минерал за кости/зъби и клетъчна сигнализация.',
                content: [
                    'Калциевият карбонат осигурява повече елементарен калций; цитратът е по-щадящ и не изисква толкова стомашна киселина.',
                    'Разделянето на дозите подобрява усвояването; поддържайте адекватни нива на витамин D.'
                ]
            },
            15: {
                title: 'Желязо: къде се среща и как да се приема',
                summary: 'Поддържа хемоглобина и транспорта на кислород; проследявайте статуса преди прием.',
                content: [
                    'Хемовото желязо (месо) се усвоява по-добре от нехемовото (растения). Витамин C подобрява усвояването на нехемово желязо.',
                    'Чести форми: железен бисглицинат, глюконат, сулфат. Излишъкът може да причини стомашен дискомфорт; пазете далеч от деца.'
                ]
            },
            16: {
                title: 'Селен: антиоксидантна и щитовидна подкрепа',
                summary: 'Компонент на антиоксидантни ензими и метаболизма на щитовидни хормони.',
                content: [
                    'Глутатион пероксидазите и деийодиназите се нуждаят от селен. Източници: бразилски ядки и морски дарове.',
                    'Високите приеми могат да доведат до селеноза; следвайте препоръчителните количества.'
                ]
            },
            17: {
                title: 'Биотин (витамин B7): коса, кожа, нокти',
                summary: 'Кофермент в метаболизма на макронутриенти; популярен за козметична подкрепа.',
                content: [
                    'Биотинът участва в карбоксилазни реакции за мазнини и въглехидрати.',
                    'Високи добавени дози могат да повлияят някои лабораторни тестове; уведомете лекаря си.'
                ]
            },
            18: {
                title: 'Витамин B12 (кобаламин): енергия и нерви',
                summary: 'Подпомага образуването на червени кръвни клетки и функционирането на нервната система.',
                content: [
                    'Метилкобаламинът и цианкобаламинът са чести форми; усвояването зависи от вътрешния фактор.',
                    'Вегетарианци/вегани често имат нужда от добавки; следете нивата при по-възрастни хора.'
                ]
            },
            19: {
                title: 'Витамин B6 (пиридоксин): метаболизъм и настроение',
                summary: 'Кофактор в аминокиселинния метаболизъм и синтеза на невротрансмитери.',
                content: [
                    'Подпомага нормалния метаболизъм на хомоцистеин и освобождаването на енергия.',
                    'Много високи дози с времето могат да причинят сетивна невропатия; спазвайте указанията.'
                ]
            },
            20: {
                title: 'Витамин B1 (тиамин): енергиен метаболизъм',
                summary: 'Кофермент за метаболизма на въглехидратите и нервната функция.',
                content: [
                    'Тиаминпирофосфатът е необходим за активността на пируват дехидрогеназата.',
                    'Рискът от дефицит се увеличава при хронична употреба на алкохол или силно рафинирани диети.'
                ]
            },
            21: {
                title: 'Витамин B2 (рибофлавин): клетъчна енергия',
                summary: 'Прекурсор на FAD/FMNs в окислително-редукционни реакции.',
                content: [
                    'Важно е за митохондриалното производство на енергия и за функциите на антиоксидантните ензими.',
                    'Може да оцвети урината ярко жълто — очаквано и безвредно.'
                ]
            },
            22: {
                title: 'Витамин B3 (ниацин): метаболизъм и кожа',
                summary: 'Прекурсор на NAD/NADP; високите дози могат да причинят зачервяване.',
                content: [
                    'Подпомага нормалния енергиен метаболизъм и здравето на кожата.',
                    'Ниациновият флаш е безобиден вазодилататорен ефект; безфлаш формата инозитол хексаниацинат действа по-различно.'
                ]
            },
            23: {
                title: 'Витамин B5 (пантотенова киселина): синтез на CoA',
                summary: 'Необходим за синтеза на коензим A; участва в енергийния и липидния метаболизъм.',
                content: [
                    'Широко разпространен в храните; дефицитът е рядък, но може да причини умора и раздразнителност.',
                    'Понякога се използва във високи дози за подкрепа на кожата — доказателствата са смесени.'
                ]
            },
            24: {
                title: 'Коензим Q10: митохондрии и сърце',
                summary: 'Убихинон/убихинол подпомагат клетъчната енергия и антиоксидантната защита.',
                content: [
                    'Част от електронно-транспортната верига; нивата намаляват с възрастта и при употреба на статини.',
                    'Убихинолът е редуцираната форма с по-висока бионаличност в някои изследвания.'
                ]
            },
            25: {
                title: 'Пробиотици: баланс отвътре',
                summary: 'Живи микроорганизми, които подпомагат баланса на микробиома и чревната бариера.',
                content: [
                    'Чести родове: Lactobacillus, Bifidobacterium, Streptococcus thermophilus.',
                    'Щам-специфичните ползи и броят CFU имат значение; съхранявайте според етикета.'
                ]
            },
            26: {
                title: 'Пребиотици (инулин и FOS): храна за микробиома',
                summary: 'Неусвоими фибри, които селективно подхранват полезните бактерии.',
                content: [
                    'Инулинът и фруктолигозахаридите увеличават бифидобактериите и късоверижните мастни киселини.',
                    'Започнете с ниска доза, за да ограничите газовете/подуването; осигурете достатъчно течности.'
                ]
            },
            27: {
                title: 'Лутеин и Зеаксантин: макуларни пигменти',
                summary: 'Концентрирани в ретината; подпомагат зрителната работоспособност и филтрирането на синя светлина.',
                content: [
                    'Каротеноидите се натрупват в макулата и могат да подобрят контрастната чувствителност и възстановяването след заслепяване.',
                    'Източници: зелени листни зеленчуци, яйчни жълтъци; формулите често включват мезо-зеаксантин.'
                ]
            },
            28: {
                title: 'Хром: подкрепа за метаболизма на глюкозата',
                summary: 'Участва в нормалния метаболизъм на макронутриенти и регулацията на кръвната глюкоза.',
                content: [
                    'Форми: хром пиколинат и хром полиникотинат.',
                    'Подкрепя сигнализирането на инсулина; при терапия за понижаване на глюкозата се консултирайте със специалист.'
                ]
            }
        },
        de: {
            0: {
                title: 'Magnesium: der essenzielle Mineralstoff einfach erklärt',
                summary: 'Unterstützt die Energieproduktion, Nerven- und Muskelfunktion, Stressmanagement und Schlafqualität. Formen: Citrat, Glycinat, Oxid.',
                content: [
                    'Magnesium ist Kofaktor in über 300 enzymatischen Reaktionen, darunter ATP-Synthese, neuromuskuläre Übertragung und Stressregulation.',
                    'Die Formen unterscheiden sich in Bioverfügbarkeit und Verträglichkeit: Citrat wird gut aufgenommen; Glycinat ist sanft; Oxid ist konzentriert, aber weniger bioverfügbar.',
                    'Ernährungsquellen: Nüsse, Samen, Hülsenfrüchte, Vollkorn, Blattgemüse. Abends einnehmen für besseren Schlaf; bei Nierenerkrankungen ärztlich abklären.'
                ]
            },
            1: {
                title: 'Was ist Omega‑3 und warum brauchen wir es?',
                summary: 'EPA/DHA unterstützen Herz, Gehirn, Entzündungsbalance und Sehkraft. Quellen: fettreicher Fisch und Algenöl.',
                content: [
                    'EPA und DHA sind langkettige Omega‑3-Fettsäuren, entscheidend für Membranfluidität, Herz-Kreislauf-Gesundheit sowie kognitive und visuelle Funktionen.',
                    'Ziel: 2–3 Mal pro Woche fettreichen Fisch essen oder standardisierte Präparate nutzen. Pflanzliche Option: Algenöl.',
                    'Reduzieren Sie das Omega‑6:Omega‑3-Verhältnis, indem Sie raffinierte Saatöle einschränken; für bessere Verträglichkeit entero-beschichtete oder re-esterifizierte Formen wählen.'
                ]
            },
            2: {
                title: 'Was ist Kollagen und warum ist es wichtig?',
                summary: 'Strukturprotein für Haut, Gelenke und Knochen. Hydrolysierte Peptide (Typ I/II/III) werden besser aufgenommen; Vitamin C unterstützt die Synthese.',
                content: [
                    'Kollagen bildet Bindegewebe. Typ I: Haut und Knochen; Typ II: Knorpel; Typ III begleitet häufig Typ I.',
                    'Hydrolysierte Peptide verbessern die Verdaulichkeit. Für spürbare Effekte ist konsequente tägliche Einnahme über mehrere Wochen notwendig.',
                    'Achten Sie auf ausreichendes Vitamin C, um die körpereigene Kollagenbildung zu unterstützen.'
                ]
            },
            3: {
                title: 'Vitamin D3: der Sonnenvitamin-Booster für Immunität und mehr',
                summary: 'Reguliert Calciumhaushalt, Knochendichte und Immunfunktion. Oft in Kombination mit K2.',
                content: [
                    'Cholecalciferol unterstützt den Calcium- und Phosphorhaushalt und eine normale Immunantwort.',
                    'Der Status hängt von Sonneneinstrahlung, Breitengrad und Jahreszeit ab. Lebensmittelquellen sind begrenzt, daher sind Supplemente verbreitet.',
                    'Die Kombination D3 mit K2 (MK‑7) fördert die Knochenmineralisierung und eine zielgerichtete Calciumnutzung.'
                ]
            },
            4: {
                title: 'Vitamin C: Rolle für die Immununterstützung',
                summary: 'Antioxidans für Immunabwehr und Kollagensynthese; verbessert die Eisenaufnahme.',
                content: [
                    'Ascorbinsäure wirkt in der antioxidativen Abwehr und unterstützt die normale Immunfunktion.',
                    'Sie ist essenziell für die Kollagenbildung in Haut, Gefäßen und Bändern und verbessert die Aufnahme von Nicht-Häm-Eisen.',
                    'Quellen: Zitrusfrüchte, Beeren, Kiwi, Paprika, Brokkoli. Aufgeteilte Dosen halten den Plasmaspiegel stabiler.'
                ]
            },
            5: {
                title: 'Multivitamine: warum Kinder sie nutzen sollten',
                summary: 'Schließen Lücken im Wachstum, unterstützen Immunität und Kognition. Dosierungen variieren nach Alter.',
                content: [
                    'Kinder essen oft unausgewogen; Multivitamine gleichen gelegentliche Mikronährstofflücken aus.',
                    'Typische Nährstoffe: Vitamine A, C, D, E, B-Komplex; Mineralstoffe wie Jod, Zink, teils Eisen.',
                    'Darreichungsformen: Kautabletten, Gummies, Flüssigkeiten. Altersgerechte Dosierung beachten und nach zuckerhaltigen Formen die Zähne reinigen.'
                ]
            },
            6: {
                title: 'Chlorophyll: Vorteile und Anwendung',
                summary: 'Pflanzliches Pigment mit antioxidativen Eigenschaften; häufig als Tropfen.',
                content: [
                    'Chlorophyll und Chlorophyllin werden für Frische und antioxidative Unterstützung in Routinen eingesetzt.',
                    'Üblicherweise in Wasser verdünnt; mit der niedrigsten empfohlenen Menge starten, um die Verträglichkeit zu prüfen.',
                    'Behälter nach Gebrauch ausspülen, um Verfärbungen zu vermeiden.'
                ]
            },
            7: {
                title: 'Zink: Quellen und Einnahme',
                summary: 'Wichtig für Immunität, Haut und Enzyme. Formen: Gluconat, Citrat, Picolinat.',
                content: [
                    'Zink wirkt in hunderten Enzymen für Immunfunktion, Wundheilung und Hautintegrität.',
                    'Quellen: Fleisch, Schalentiere, Milchprodukte, Hülsenfrüchte. Phytate mindern die Aufnahme; Einweichen/Keimen hilft.',
                    'Nicht mit hohen Eisen- oder Calciumdosen kombinieren; zu viel Zink kann Übelkeit auslösen.'
                ]
            },
            8: {
                title: 'Jod: wofür es gebraucht wird und wie man es einnimmt',
                summary: 'Unterstützt die Bildung von Schilddrüsenhormonen sowie kognitive und metabolische Funktionen.',
                content: [
                    'Jod ist essenziell für die Synthese von Thyroxin (T4) und Trijodthyronin (T3) und beeinflusst Stoffwechsel und Entwicklung.',
                    'Quellen: jodiertes Salz, Seefisch, Algen. Sowohl Mangel als auch Überschuss belasten die Schilddrüse.',
                    'Schwangere und Stillende haben einen erhöhten Bedarf; medizinische Beratung einholen.'
                ]
            },
            9: {
                title: 'Folsäure (Vitamin B9): wozu und wie einnehmen',
                summary: 'Wichtig für DNA-Synthese und Neuralrohrentwicklung; unterstützt den Homocystein-Stoffwechsel.',
                content: [
                    'B9 fördert normale Blutbildung und Zellteilung. Ausreichende Versorgung ist vor der Empfängnis und in der Frühschwangerschaft entscheidend.',
                    'Natürliche Folate stecken in Blattgemüse, Hülsenfrüchten und Leber; Supplemente enthalten meist Folsäure oder 5-MTHF.',
                    'Arzneimittelinteraktionen (z. B. mit Antifolat-Therapien) ärztlich abklären.'
                ]
            },
            10: {
                title: 'Alpha-Liponsäure: wo sie vorkommt und wie man sie einnimmt',
                summary: 'Universelles Antioxidans, das am mitochondrialen Energiestoffwechsel beteiligt ist.',
                content: [
                    'ALA fungiert als Cofaktor mitochondrialer Enzyme und regeneriert andere Antioxidantien (Vitamine C und E).',
                    'Wird häufig zur Unterstützung des Stoffwechsels und in Nervenpflege-Protokollen eingesetzt.',
                    'Kann nüchtern für bessere Aufnahme eingenommen werden; mögliche Wechselwirkungen mit blutzuckersenkender Therapie beachten.'
                ]
            },
            11: {
                title: 'Vitamin A: Sehkraft und Immunität',
                summary: 'Unterstützt Sehen, Epithelgesundheit und Immunsystem.',
                content: [
                    'Retinol und Provitamin-A-Carotinoide (Beta-Carotin) unterstützen das Sehen bei wenig Licht und Epithelgewebe.',
                    'Überschüssiges Retinol kann teratogen wirken; Packungshinweise beachten. Lebensmittelquellen: Leber, Milchprodukte; Carotinoide in Karotten und Süßkartoffeln.'
                ]
            },
            12: {
                title: 'Vitamin E: antioxidativer Schutz',
                summary: 'Schützt Zellen vor oxidativem Stress; wirkt mit Vitamin C zusammen.',
                content: [
                    'Tocopherole und Tocotrienole stabilisieren Membranen gegenüber oxidativen Schäden.',
                    'Mischungen mit verschiedenen Tocopherolen ähneln der Ernährung; auf das Verhältnis zu mehrfach ungesättigten Fettsäuren achten.'
                ]
            },
            13: {
                title: 'Vitamin K2: Balance für Knochen und Gefäße',
                summary: 'Aktiviert Proteine, die Calcium in die Knochen leiten und von weichem Gewebe fernhalten.',
                content: [
                    'MK‑7 hat eine längere Halbwertszeit als K1 und MK‑4 und unterstützt die Aktivierung von Osteocalcin und MGP.',
                    'Wird häufig mit Vitamin D3 kombiniert, um den Calciumstoffwechsel ganzheitlich zu steuern.'
                ]
            },
            14: {
                title: 'Calcium: Struktur und Signalübertragung',
                summary: 'Schlüsselmineral für Knochen/Zähne und zelluläre Signalprozesse.',
                content: [
                    'Calciumcarbonat liefert mehr elementares Calcium; Citrat ist magenfreundlicher und benötigt weniger Säure.',
                    'Geteilte Dosen verbessern die Aufnahme; ausreichender Vitamin-D-Status ist wichtig.'
                ]
            },
            15: {
                title: 'Eisen: wo es vorkommt und wie man es einnimmt',
                summary: 'Unterstützt Hämoglobin und Sauerstofftransport; Status vor Einnahme prüfen.',
                content: [
                    'Hämeisen (aus Fleisch) wird besser aufgenommen als Nicht-Hämeisen (aus Pflanzen). Vitamin C erhöht die Nicht-Häm-Aufnahme.',
                    'Gängige Formen: Eisenbisglycinat, -gluconat, -sulfat. Überschuss kann Magen-Darm-Beschwerden auslösen; sicher aufbewahren.'
                ]
            },
            16: {
                title: 'Selen: Antioxidans und Schilddrüsenunterstützung',
                summary: 'Bestandteil antioxidativer Enzyme und des Schilddrüsenhormonstoffwechsels.',
                content: [
                    'Glutathionperoxidasen und Deiodinasen benötigen Selen. Quellen: Paranüsse und Meeresfrüchte.',
                    'Hohe Zufuhr kann Selenose verursachen; empfohlene Mengen beachten.'
                ]
            },
            17: {
                title: 'Biotin (Vitamin B7): Haare, Haut, Nägel',
                summary: 'Cofaktor im Makronährstoffstoffwechsel; beliebt für kosmetische Unterstützung.',
                content: [
                    'Biotin ist an Carboxylase-Reaktionen für Fette und Kohlenhydrate beteiligt.',
                    'Hohe Ergänzungsdosen können manche Labortests beeinflussen; informieren Sie Ihr medizinisches Team.'
                ]
            },
            18: {
                title: 'Vitamin B12 (Cobalamin): Energie und Nerven',
                summary: 'Fördert die Bildung roter Blutkörperchen und die Funktion des Nervensystems.',
                content: [
                    'Methylcobalamin und Cyanocobalamin sind gängige Formen; die Aufnahme hängt vom Intrinsic Factor ab.',
                    'Vegetarier/Veganer benötigen häufig Supplemente; bei älteren Menschen den Status überwachen.'
                ]
            },
            19: {
                title: 'Vitamin B6 (Pyridoxin): Stoffwechsel und Stimmung',
                summary: 'Cofaktor im Aminosäurenstoffwechsel und bei der Neurotransmittersynthese.',
                content: [
                    'Unterstützt den normalen Homocystein-Stoffwechsel und die Energiebereitstellung.',
                    'Sehr hohe Dosen über längere Zeit können sensorische Neuropathien verursachen; Richtlinien beachten.'
                ]
            },
            20: {
                title: 'Vitamin B1 (Thiamin): Energiestoffwechsel',
                summary: 'Cofaktor für Kohlenhydratstoffwechsel und Nervenfunktion.',
                content: [
                    'Thiaminpyrophosphat ist für die Pyruvat-Dehydrogenase unerlässlich.',
                    'Ein Mangelrisiko steigt bei chronischem Alkoholkonsum oder stark verarbeiteten Kostformen.'
                ]
            },
            21: {
                title: 'Vitamin B2 (Riboflavin): Zellenergie',
                summary: 'Vorläufer von FAD/FMNs in Redoxreaktionen.',
                content: [
                    'Wichtig für die mitochondriale Energieproduktion und antioxidative Enzymfunktionen.',
                    'Kann den Urin leuchtend gelb färben – erwartet und harmlos.'
                ]
            },
            22: {
                title: 'Vitamin B3 (Niacin): Stoffwechsel und Haut',
                summary: 'Vorstufe von NAD/NADP; hohe Dosen können Flushs auslösen.',
                content: [
                    'Unterstützt den normalen Energiestoffwechsel und die Hautgesundheit.',
                    'Der Niacin-Flush ist eine harmlose Gefäßerweiterung; „Flush-free“ Inositolhexaniacinat wirkt anders.'
                ]
            },
            23: {
                title: 'Vitamin B5 (Pantothensäure): CoA-Synthese',
                summary: 'Benötigt für die Bildung von Coenzym A; beteiligt am Energie- und Fettstoffwechsel.',
                content: [
                    'Kommt in vielen Lebensmitteln vor; Mangel ist selten, kann aber Müdigkeit und Reizbarkeit verursachen.',
                    'Wird teils hoch dosiert für Hautsupport genutzt – die Evidenz ist gemischt.'
                ]
            },
            24: {
                title: 'Coenzym Q10: Mitochondrien und Herz',
                summary: 'Ubichinon/Ubichinol unterstützen Zellenergie und antioxidativen Schutz.',
                content: [
                    'Teil der Elektronentransportkette; Spiegel sinken mit dem Alter und bei Statintherapie.',
                    'Ubiquinol ist die reduzierte Form mit teils höherer Bioverfügbarkeit.'
                ]
            },
            25: {
                title: 'Probiotika: Balance von innen',
                summary: 'Lebende Mikroorganismen, die das Mikrobiom und die Darmbarriere unterstützen.',
                content: [
                    'Häufige Gattungen: Lactobacillus, Bifidobacterium, Streptococcus thermophilus.',
                    'Stammspezifische Vorteile und CFU-Zahlen sind wichtig; gemäß Etikett lagern.'
                ]
            },
            26: {
                title: 'Präbiotika (Inulin & FOS): Futter für dein Mikrobiom',
                summary: 'Nicht verdauliche Fasern, die gezielt nützliche Bakterien nähren.',
                content: [
                    'Inulin und Fructo-Oligosaccharide erhöhen Bifidobakterien und kurzkettige Fettsäuren.',
                    'Langsam einschleichen, um Blähungen zu minimieren; genügend Flüssigkeit zuführen.'
                ]
            },
            27: {
                title: 'Lutein & Zeaxanthin: Makulapigmente',
                summary: 'Konzentrieren sich in der Netzhaut; unterstützen Sehleistung und Blaulichtfilterung.',
                content: [
                    'Carotinoide sammeln sich in der Makula und können Kontrastsehen und Blendungserholung fördern.',
                    'Quellen: Blattgemüse, Eigelb; Formeln enthalten oft Meso-Zeaxanthin.'
                ]
            },
            28: {
                title: 'Chrom: Unterstützung für den Glukosestoffwechsel',
                summary: 'Beteiligt am normalen Makronährstoffstoffwechsel und der Regulation des Blutzuckers.',
                content: [
                    'Formen umfassen Chrompicolinat und Chrompolynicotinat.',
                    'Unterstützt die Insulinsignalisierung; bei blutzuckersenkender Therapie ärztlich beraten lassen.'
                ]
            }
        },
        ro: {
            0: {
                title: 'Magneziu: mineral esențial explicat pe scurt',
                summary: 'Susține producția de energie, funcția nervoasă și musculară, gestionarea stresului și calitatea somnului. Forme: citrat, glicinat, oxid.',
                content: [
                    'Magneziul este cofactor în peste 300 de reacții enzimatice, inclusiv sinteza ATP, transmiterea neuromusculară și reglarea răspunsului la stres.',
                    'Formele diferă prin biodisponibilitate și toleranță: citratul se absoarbe bine; glicinatul este blând; oxidul este concentrat dar mai puțin biodisponibil.',
                    'Surse alimentare: nuci, semințe, leguminoase, cereale integrale, verdețuri. Luați seara pentru a susține somnul; cereți sfatul medicului în caz de afecțiuni renale.'
                ]
            },
            1: {
                title: 'Ce este Omega‑3 și de ce avem nevoie de ea?',
                summary: 'EPA/DHA susțin inima, creierul, echilibrul inflamației și vederea. Surse: pește gras și ulei de alge.',
                content: [
                    'EPA și DHA sunt acizi grași omega‑3 cu lanț lung, esențiali pentru fluiditatea membranelor, sănătatea cardiovasculară și funcțiile cognitive/vizuale.',
                    'Consumați pește gras de 2–3 ori pe săptămână sau suplimente standardizate. Variantă vegetală: uleiul din alge.',
                    'Echilibrați raportul omega‑6:omega‑3 limitând uleiurile din semințe rafinate; pentru toleranță mai bună alegeți forme enterosolubile sau reesterificate.'
                ]
            },
            2: {
                title: 'Ce este colagenul și de ce este important?',
                summary: 'Proteină structurală pentru piele, articulații și oase. Peptidele hidrolizate (tip I/II/III) se absorb mai bine; vitamina C susține sinteza.',
                content: [
                    'Colagenul alcătuiește țesuturile conjunctive. Tipul I: piele și oase; tipul II: cartilaje; tipul III însoțește adesea tipul I.',
                    'Peptidele hidrolizate îmbunătățesc digestibilitatea. Beneficiile apar de obicei după câteva săptămâni de utilizare zilnică.',
                    'Asigurați un aport suficient de vitamina C pentru a susține sinteza endogenă de colagen.'
                ]
            },
            3: {
                title: 'Vitamina D3: vitamina soarelui pentru imunitate și nu numai',
                summary: 'Reglează balanța calciului, rezistența oaselor și funcția imunitară. Adesea asociată cu K2.',
                content: [
                    'Colecalciferolul susține homeostazia calciu/fosfor și funcția imunitară normală.',
                    'Statusul depinde de expunerea la soare, latitudine și sezon. Sursele alimentare sunt limitate, astfel că suplimentele sunt frecvente.',
                    'Combinarea D3 cu K2 (MK‑7) favorizează mineralizarea osoasă și utilizarea corectă a calciului.'
                ]
            },
            4: {
                title: 'Vitamina C: rol în susținerea imunității',
                summary: 'Antioxidant pentru imunitate și sinteza colagenului; crește absorbția fierului.',
                content: [
                    'Acidul ascorbic participă la apărarea antioxidantă și susține funcția imunitară normală.',
                    'Este esențial pentru sinteza colagenului în piele, vase și ligamente și intensifică absorbția fierului non-hemic.',
                    'Surse: citrice, fructe de pădure, kiwi, ardei, broccoli. Împărțiți dozele pentru niveluri plasmatice mai stabile.'
                ]
            },
            5: {
                title: 'Multivitamine: de ce ar trebui să le ia copiii',
                summary: 'Atenuează carențele în perioada de creștere; susțin imunitatea și cogniția. Dozele diferă în funcție de vârstă.',
                content: [
                    'Dieta copiilor este adesea inconstantă; multivitaminele acoperă ocazional lipsurile de micronutrienți esențiali.',
                    'Nutrienți tipici: vitaminele A, C, D, E, complexul B; minerale precum iod, zinc și uneori fier.',
                    'Forme: comprimate masticabile, jeleuri, lichide. Respectați dozele pe vârstă și igiena dentară după formele dulci.'
                ]
            },
            6: {
                title: 'Clorofilă: beneficii și modalități de administrare',
                summary: 'Pigment vegetal cu proprietăți antioxidante; folosit adesea sub formă de picături lichide.',
                content: [
                    'Clorofila și clorofilina se includ în rutinele de wellness pentru prospețime și suport antioxidant.',
                    'Se diluează de obicei în apă; începeți cu cantitatea minimă recomandată pentru a evalua toleranța.',
                    'Clătiți recipientele după utilizare pentru a evita petele.'
                ]
            },
            7: {
                title: 'Zinc: surse și recomandări de administrare',
                summary: 'Esential pentru imunitate, piele și enzime. Forme: gluconat, citrat, picolinat.',
                content: [
                    'Zincul intră în componența a sute de enzime ce susțin imunitatea, vindecarea și integritatea pielii.',
                    'Surse: carne, fructe de mare, lactate, leguminoase. Fitatii reduc absorbția; înmuierea sau germinarea ajută.',
                    'Administrați separat de doze mari de fier sau calciu; excesul poate provoca greață.'
                ]
            },
            8: {
                title: 'Iod: la ce folosește și cum se administrează',
                summary: 'Sprijină producția hormonilor tiroidieni și funcțiile cognitive și metabolice normale.',
                content: [
                    'Iodul este esențial pentru sinteza tiroxinei (T4) și triiodotironinei (T3), influențând metabolismul și dezvoltarea.',
                    'Surse: sare iodată, pește marin, alge. Atât deficitul, cât și excesul pot afecta tiroida.',
                    'Necesarul crește în sarcină și alăptare; solicitați sfat medical.'
                ]
            },
            9: {
                title: 'Acid folic (vitamina B9): de ce și cum să îl iei',
                summary: 'Crucial pentru sinteza ADN și dezvoltarea tubului neural; susține metabolismul homocisteinei.',
                content: [
                    'B9 susține formarea normală a sângelui și diviziunea celulară. Aportul adecvat este vital preconcepție și în sarcina timpurie.',
                    'Se găsește ca folat în verdețuri, leguminoase și ficat; suplimentele folosesc adesea acid folic sau 5-MTHF.',
                    'Verifică interacțiunile medicamentoase (ex. terapii antifolat) împreună cu medicul.'
                ]
            },
            10: {
                title: 'Acid alfa-lipoic: unde se găsește și cum se administrează',
                summary: 'Antioxidant universal implicat în metabolismul energetic mitocondrial.',
                content: [
                    'ALA acționează ca cofactor pentru enzime mitocondriale și ajută la regenerarea altor antioxidanți (vitaminele C și E).',
                    'Este folosit frecvent pentru susținerea metabolismului și în protocoale pentru sănătatea nervilor.',
                    'Poate fi luat pe stomacul gol pentru absorbție mai bună; poate interacționa cu terapiile hipoglicemiante.'
                ]
            },
            11: {
                title: 'Vitamina A: vedere și imunitate',
                summary: 'Susține vederea, integritatea epitelială și imunitatea.',
                content: [
                    'Retinolul și carotenoizii provitamină A (beta-caroten) susțin vederea la lumină redusă și țesuturile epiteliale.',
                    'Excesul de retinol poate fi teratogen; urmați indicațiile de pe etichetă. Surse: ficat, lactate; carotenoizi în morcovi și cartofi dulci.'
                ]
            },
            12: {
                title: 'Vitamina E: protecție antioxidantă',
                summary: 'Protejează celulele de stresul oxidativ; acționează împreună cu vitamina C.',
                content: [
                    'Tocoferolii și tocotrienolii stabilizează membranele împotriva daunelor oxidative.',
                    'Formulele cu mix de tocoferoli reproduc mai bine aportul alimentar; ține cont de raportul cu acizii grași polinesaturați.'
                ]
            },
            13: {
                title: 'Vitamina K2: echilibru pentru oase și vase',
                summary: 'Activează proteine care direcționează calciul spre oase și îl țin departe de țesuturile moi.',
                content: [
                    'MK-7 are un timp de înjumătățire mai lung decât K1 și MK-4, susținând activarea osteocalcinei și a MGP.',
                    'Se asociază frecvent cu vitamina D3 pentru roluri complementare în metabolismul calciului.'
                ]
            },
            14: {
                title: 'Calciu: structură și semnalizare',
                summary: 'Mineral major pentru oase/dinți și semnalizarea celulară.',
                content: [
                    'Carbonatul de calciu oferă mai mult calciu elementar; citratul este mai blând și necesită mai puțină aciditate gastrică.',
                    'Împărțirea dozelor îmbunătățește absorbția; asigurați un status adecvat de vitamina D.'
                ]
            },
            15: {
                title: 'Fier: unde se găsește și cum se administrează',
                summary: 'Susține hemoglobina și transportul oxigenului; verificați statusul înainte de suplimentare.',
                content: [
                    'Fierul hemic (din carne) se absoarbe mai bine decât cel non-hemic (din plante). Vitamina C crește absorbția fierului non-hemic.',
                    'Forme uzuale: fier bisglicinat, gluconat, sulfat. Excesul poate provoca disconfort gastrointestinal; păstrați departe de copii.'
                ]
            },
            16: {
                title: 'Seleniu: suport antioxidant și tiroidian',
                summary: 'Component al enzimelor antioxidante și al metabolismului hormonilor tiroidieni.',
                content: [
                    'Glutation peroxidazele și deiodinazele necesită seleniu. Surse: nuci braziliene și fructe de mare.',
                    'Aporturile foarte mari pot duce la selenoză; respectați cantitățile recomandate.'
                ]
            },
            17: {
                title: 'Biotină (vitamina B7): păr, piele, unghii',
                summary: 'Cofactor în metabolismul macronutrienților; populară pentru suport cosmetic.',
                content: [
                    'Biotina participă la reacții de carboxilare pentru grăsimi și carbohidrați.',
                    'Dozele mari pot interfera cu unele analize de laborator; informați medicul.'
                ]
            },
            18: {
                title: 'Vitamina B12 (cobalamină): energie și nervi',
                summary: 'Susține formarea globulelor roșii și funcționarea sistemului nervos.',
                content: [
                    'Metilcobalamina și cianocobalamina sunt forme comune; absorbția depinde de factorul intrinsec.',
                    'Vegetarienii/veganii pot necesita suplimentare; monitorizați statusul la vârstnici.'
                ]
            },
            19: {
                title: 'Vitamina B6 (piridoxină): metabolism și dispoziție',
                summary: 'Cofactor în metabolismul aminoacizilor și sinteza neurotransmițătorilor.',
                content: [
                    'Susține metabolismul normal al homocisteinei și eliberarea de energie.',
                    'Dozele foarte mari pe termen lung pot provoca neuropatie senzorială; respectați indicațiile.'
                ]
            },
            20: {
                title: 'Vitamina B1 (tiamină): metabolism energetic',
                summary: 'Cofactor pentru metabolismul carbohidraților și funcția nervoasă.',
                content: [
                    'Tiamin-pirofosfatul este necesar pentru activitatea piruvat dehidrogenazei.',
                    'Riscul de deficit crește în cazul consumului cronic de alcool sau al dietelor foarte rafinate.'
                ]
            },
            21: {
                title: 'Vitamina B2 (riboflavină): energie celulară',
                summary: 'Precursore al FAD/FMNs în reacțiile redox.',
                content: [
                    'Importantă pentru producția mitocondrială de energie și activitatea enzimelor antioxidante.',
                    'Poate colora urina galben intens — este normal și inofensiv.'
                ]
            },
            22: {
                title: 'Vitamina B3 (niacină): metabolism și piele',
                summary: 'Precursor al NAD/NADP; dozele mari pot provoca senzație de arsură (flush).',
                content: [
                    'Sprijină metabolismul energetic normal și sănătatea pielii.',
                    'Niacina flush este un efect vasodilatator benign; forma fără flush, inozitol hexaniacinat, acționează diferit.'
                ]
            },
            23: {
                title: 'Vitamina B5 (acid pantotenic): sinteza CoA',
                summary: 'Necesară pentru sinteza coenzimei A; implicată în metabolismul energetic și lipidic.',
                content: [
                    'Este răspândită în alimentație; deficitul este rar, dar poate cauza oboseală și iritabilitate.',
                    'Uneori se folosește în doze mari pentru susținerea pielii — dovezile sunt variabile.'
                ]
            },
            24: {
                title: 'Coenzima Q10: mitocondrii și inimă',
                summary: 'Ubichinona/ubichinolul susțin energia celulară și protecția antioxidantă.',
                content: [
                    'Face parte din lanțul de transport al electronilor; nivelurile scad odată cu vârsta și la utilizarea statinelor.',
                    'Ubichinolul este forma redusă cu biodisponibilitate superioară în unele studii.'
                ]
            },
            25: {
                title: 'Probiotice: echilibru din interior',
                summary: 'Microorganisme vii care susțin echilibrul microbiomului și bariera intestinală.',
                content: [
                    'Genuri frecvente: Lactobacillus, Bifidobacterium, Streptococcus thermophilus.',
                    'Beneficiile depind de tulpină și de numărul de CFU; păstrați produsul conform instrucțiunilor.'
                ]
            },
            26: {
                title: 'Prebiotice (inulină și FOS): hrană pentru microbiom',
                summary: 'Fibre nedigerabile care hrănesc selectiv bacteriile benefice.',
                content: [
                    'Inulina și fructo-oligozaharidele cresc bifidobacteriile și acizii grași cu lanț scurt.',
                    'Începeți cu doze mici pentru a limita gazele/balonarea; consumați suficiente lichide.'
                ]
            },
            27: {
                title: 'Luteină și Zeaxantină: pigmenți maculari',
                summary: 'Concentrați în retină; susțin performanța vizuală și filtrarea luminii albastre.',
                content: [
                    'Carotenoizii se acumulează în maculă și pot îmbunătăți sensibilitatea la contrast și recuperarea după orbire.',
                    'Surse: verdețuri, gălbenuș de ou; formulele includ adesea mezo-zeaxantină.'
                ]
            },
            28: {
                title: 'Crom: suport pentru metabolismul glucozei',
                summary: 'Implicat în metabolismul normal al macronutrienților și în reglarea glicemiei.',
                content: [
                    'Forme: crom picolinat și crom polinicotinat.',
                    'Susține semnalizarea insulinei; dacă urmați terapii hipoglicemiante, consultați un specialist.'
                ]
            }
        },
        hu: {
            0: { title: 'Magnézium: az esszenciális ásványi anyag egyszerűen', summary: 'Támogatja az energiatermelést, az ideg- és izomműködést, a stresszkezelést és az alvás minőségét. Formák: citrát, glicinát, oxid.', content: ['A magnézium több mint 300 enzimatikus reakció kofaktora, beleértve az ATP-szintézist, a neuromuscularis átvitelt és a stresszválasz szabályozását.', 'A formák felszívódásban és tolerálhatóságban különböznek: a citrát jól szívódik fel; a glicinát kíméletes; az oxid koncentrált, de kevésbé biohasznosul.', 'Élelmiszerforrások: diófélék, magvak, hüvelyesek, teljes kiőrlésű gabonák, zöld levelesek. Alváshoz érdemes este bevenni; vesebetegség esetén kérj szakértői tanácsot.'] },
            1: { title: 'Mi az omega‑3, és miért van rá szükség?', summary: 'Az EPA/DHA támogatja a szívet, az agyat, a gyulladásegyensúlyt és a látást. Források: zsíros hal és algoolaj.', content: ['Az EPA és a DHA hosszú láncú omega‑3 zsírsavak, a membránfluiditás, a szív-ér rendszer és a kognitív/látási funkciók részei.', 'Cél: zsíros hal heti 2–3 alkalommal vagy standardizált kiegészítő. Növényi lehetőség: algoolaj.', 'Az omega‑6:omega‑3 arányt a finomított magolajok csökkentésével egyensúlyozd; jobb tolerálhatósághoz enteric vagy észterezett formák jöhetnek szóba.'] },
            2: { title: 'Mi a kollagén, és miért fontos?', summary: 'Szerkezeti fehérje a bőrnek, ízületeknek, csontoknak. A hidrolizált peptidek (I/II/III típus) jobban felszívódnak; a C-vitamin támogatja a szintézist.', content: ['A kollagén a kötőszövetek alkotója. I. típus: bőr és csont; II. típus: porc; a III. típus gyakran kíséri az I-et.', 'A hidrolizált peptidek javítják az emészthetőséget. A látható hatás általában hetekig tartó napi használatot igényel.', 'Gondoskodj elegendő C-vitaminról a saját kollagénképzéshez.'] },
            3: { title: 'D3-vitamin: a napfényvitamin az immunitásért és azon túl', summary: 'Szabályozza a kalciumegyensúlyt, a csontok erejét és az immunfunkciót. Gyakran K2-vel kombinálják.', content: ['A kolekalciferol támogatja a kalcium/foszfor homeosztázist és a normál immunműködést.', 'A szint a napfénytől, a földrajzi szélességtől és az évszaktól függ. Az élelmiszerforrások korlátozottak, ezért gyakori a kiegészítés.', 'A D3 és K2 (MK‑7) együtt támogatja a csontmineralizációt és a kalcium megfelelő hasznosulását.'] },
            4: { title: 'C-vitamin: szerepe az immunvédelemben', summary: 'Antioxidáns az immunitásért és a kollagénszintézisért; javítja a vas felszívódását.', content: ['Az aszkorbinsav részt vesz az antioxidáns védelemben és a normál immunfunkcióban.', 'Elengedhetetlen a bőr, az erek és a szalagok kollagénszintéziséhez, és fokozza a nem-hem vas felszívódását.', 'Források: citrusfélék, bogyók, kivi, paprika, brokkoli. Az osztott adagok egyenletesebb plazmaszintet adnak.'] },
            5: { title: 'Multivitaminok: miért érdemes gyerekeknek szedni', summary: 'Pótolják a növekedés alatti hiányokat; támogatják az immunitást és a kogníciót. Az adag életkortól függ.', content: ['A gyerekek étrendje változó lehet; a multivitaminok segítenek az esszenciális mikrotápanyagok hézagait áthidalni.', 'Gyakori tápanyagok: A, C, D, E, B-komplex; jód, cink, néha vas.', 'Formátumok: rágótabletta, gumicukor, folyadék. Kövesd az életkori adagolást, cukros formák után moss fogat.'] },
            6: { title: 'Klorofill: előnyök és szedés', summary: 'Növényi pigment antioxidáns tulajdonságokkal; gyakran folyékony cseppekben használják.', content: ['A klorofillt és klorofillint frissességért és antioxidáns támogatásért használják.', 'Általában vízben hígítják; a tolerálhatóság felméréséhez a legalacsonyabb javasolt mennyiséggel kezdd.', 'Használat után öblítsd a tárolóedényt, hogy elkerüld a foltosodást.'] },
            7: { title: 'Cink: források és szedés', summary: 'Kulcsfontosságú az immunitás, a bőr és az enzimek számára. Formák: glükonát, citrát, pikolinát.', content: ['A cink több száz enzimben vesz részt, támogatja az immunfunkciót, a sebgyógyulást és a bőr épségét.', 'Források: hús, kagylófélék, tejtermékek, hüvelyesek. A fitátok csökkenthetik a felszívódást; az áztatás/csíráztatás segít.', 'Válaszd külön a nagy dózisú vastól vagy kalciumtól; a túlzott cink hányingert okozhat.'] },
            8: { title: 'Jód: mire való, és hogyan szedd', summary: 'Támogatja a pajzsmirigyhormonok termelését, valamint a normál kognitív és anyagcsere-funkciót.', content: ['A jód elengedhetetlen a tiroxin (T4) és trijód-tironin (T3) szintéziséhez, hat az anyagcserére és a fejlődésre.', 'Források: jódozott só, tengeri hal, tengeri algák. A hiány és a többlet is érintheti a pajzsmirigyet.', 'Terhesség és szoptatás alatt nő az igény; kérj orvosi tanácsot.'] },
            9: { title: 'Folsav (B9-vitamin): mire való, és hogyan szedd', summary: 'Kulcsfontosságú a DNS-szintézishez és a velőcső fejlődéséhez; támogatja a homocisztein-anyagcserét.', content: ['A B9 támogatja a normál vérképzést és a sejtosztódást. Megfelelő bevitel létfontosságú fogamzás előtt és a korai terhességben.', 'Természetesen folátként van jelen zöld levelesekben, hüvelyesekben és májban; a kiegészítők gyakran folsavat vagy 5‑MTHF-et tartalmaznak.', 'Gyógyszerkölcsönhatásokat (pl. bizonyos antifolátok) szakemberrel ellenőriztesd.'] },
            10: { title: 'Alfa-liponsav: hol található, és hogyan szedd', summary: 'Univerzális antioxidáns a mitokondriális energiametabolizmusban.', content: ['Az ALA mitokondriális enzimek kofaktora, és segíti más antioxidánsok (C- és E-vitamin) regenerálását.', 'Gyakran használják anyagcsere-támogatásra és idegápolási protokollokban.', 'Éhgyomorra jobban felszívódhat; kölcsönhathat a vércukorcsökkentő terápiával.'] },
            11: { title: 'A-vitamin: látás és immunitás', summary: 'Támogatja a látást, a hám épségét és az immunitást.', content: ['A retinol és a provitamin A karotinoidok (béta-karotin) támogatják a sötétben való látást és a hámszöveteket.', 'A túlzott retinol teratogén lehet; kövesd a címkét. Források: máj, tejtermékek; karotinoidok a sárgarépában és édesburgonyában.'] },
            12: { title: 'E-vitamin: antioxidáns védelem', summary: 'Védi a sejteket az oxidatív stressztől; a C-vitaminnal együtt működik.', content: ['A tokoferolok és tokotrienolok stabilizálják a membránokat az oxidatív károsodással szemben.', 'A kevert tokoferol-formulák közelebb állnak a táplálkozási bevitelhez; vedd figyelembe a PUFA-fogyasztást.'] },
            13: { title: 'K2-vitamin: csont- és éregyensúly', summary: 'Aktiválja a fehérjéket, amelyek a kalciumot a csontokba irányítják, a lágy szövetektől távol.', content: ['Az MK‑7 hosszabb felezési idejű, mint a K1 és az MK‑4, támogatja az oszteokalcin és az MGP aktiválását.', 'Gyakran D3-vitaminnal párosítják a kalciumanyagcsere kiegészítő szerepei miatt.'] },
            14: { title: 'Kalcium: szerkezet és jelátvitel', summary: 'Fő ásványi anyag a csontokhoz/fogakhoz és a sejtes jelátvitelhez.', content: ['A kalcium-karbonát több elemi kalciumot ad; a citrát kíméletesebb, és kevesebb gyomorsavat igényel.', 'Az osztott adagok javítják a felszívódást; gondoskodj megfelelő D-vitamin-szintről.'] },
            15: { title: 'Vas: hol található, és hogyan szedd', summary: 'Támogatja a hemoglobint és az oxigénszállítást; használat előtt ellenőrizd a szintet.', content: ['A hem vas (hús) jobban szívódik fel, mint a nem-hem (növények). A C-vitamin fokozza a nem-hem felszívódását.', 'Gyakori formák: ferroszbizglicinát, glükonát, szulfát. A többlet emésztőrendszeri panaszt okozhat; tartsd gyerekektől távol.'] },
            16: { title: 'Szelén: antioxidáns és pajzsmirigy-támogatás', summary: 'Antioxidáns enzimek és a pajzsmirigyhormon-anyagcsere alkotóeleme.', content: ['A glutation-peroxidázok és dejodinázok szelént igényelnek. Források: brazil dió és tenger gyümölcsei.', 'A magas bevitel szelenózist okozhat; tartsd a javasolt mennyiségeket.'] },
            17: { title: 'Biotin (B7-vitamin): haj, bőr, körmök', summary: 'Koenzim a makrotápanyag-anyagcserében; népszerű a kozmetikai támogatásban.', content: ['A biotin részt vesz a zsírok és szénhidrátok karboxiláz-reakcióiban.', 'A nagy kiegészítő adagok zavarhatnak egyes laborvizsgálatokat; jelezd az orvosodnak.'] },
            18: { title: 'B12-vitamin (kobalamin): energia és idegek', summary: 'Támogatja a vörösvérsejt-képződést és az idegrendszer működését.', content: ['A metilkobalamin és a ciánkobalamin gyakori formák; a felszívódás intrinsic faktortól függ.', 'Vegetáriánusoknak/vegánoknak gyakran szükséges kiegészítés; idősebbeknél ellenőrizd a szintet.'] },
            19: { title: 'B6-vitamin (piridoxin): anyagcsere és hangulat', summary: 'Koenzim az aminosav-anyagcserében és a neurotranszmitter-szintézisben.', content: ['Támogatja a normál homocisztein-anyagcserét és az energiafelszabadulást.', 'Nagyon magas, tartós adagok szenzoros neuropátiát okozhatnak; maradj az irányelveknél.'] },
            20: { title: 'B1-vitamin (tiamin): energiametabolizmus', summary: 'Koenzim a szénhidrát-anyagcseréhez és az idegműködéshez.', content: ['A tiamin-pirofoszfát szükséges a piruvát-dehidrogenáz működéséhez.', 'A hiány kockázata krónikus alkoholfogyasztás vagy erősen finomított étrend esetén nő.'] },
            21: { title: 'B2-vitamin (riboflavin): sejtenergia', summary: 'A FAD/FMN prekurzora redoxreakciókban.', content: ['Fontos a mitokondriális energiatermeléshez és az antioxidáns enzimekhez.', 'A vizeletet élénksárgára színezheti — ez várható és ártalmatlan.'] },
            22: { title: 'B3-vitamin (niacin): anyagcsere és bőr', summary: 'A NAD/NADP prekurzora; nagy adagok kipirulást okozhatnak.', content: ['Támogatja a normál energiametabolizmust és a bőr egészségét.', 'A niacin-flush ártalmatlan értágító hatás; a „flush-mentes” inozitol-hexanikotinát másképp viselkedik.'] },
            23: { title: 'B5-vitamin (pantoténsav): CoA-szintézis', summary: 'Szükséges a koenzim A szintéziséhez; részt vesz az energia- és lipidanyagcserében.', content: ['Széles körben megtalálható az élelmiszerekben; a hiány ritka, de fáradtságot és ingerlékenységet okozhat.', 'Nagyobb adagokban néha bőrtámogatásra használják — a bizonyítékok vegyesek.'] },
            24: { title: 'Q10 koenzim: mitokondriumok és szív', summary: 'Az ubikinon/ubikinol támogatja a sejtenergiát és az antioxidáns védelmet.', content: ['Az elektrontranszport-lánc része; a szint korral és sztatinhasználattal csökkenhet.', 'Az ubikinol a redukált forma, egyes vizsgálatokban jobb biohasznosulással.'] },
            25: { title: 'Probiotikumok: egyensúly belülről', summary: 'Élő mikroorganizmusok, amelyek támogatják a mikrobiom egyensúlyát és a bélgátat.', content: ['Gyakori nemzetségek: Lactobacillus, Bifidobacterium, Streptococcus thermophilus.', 'A törzsspecifikus előnyök és a CFU-szám számít; tárold a címke szerint.'] },
            26: { title: 'Prebiotikumok (inulin és FOS): tápláld a mikrobiomot', summary: 'Nem emészthető rostok, amelyek szelektíven táplálják a hasznos baktériumokat.', content: ['Az inulin és a frukto-oligoszacharidok növelik a bifidobaktériumokat és a rövid szénláncú zsírsavakat.', 'Kezdd alacsony adaggal a gázképződés/puffadás csökkentéséhez; igyál eleget.'] },
            27: { title: 'Lutein és zeaxantin: makula-pigmentek', summary: 'A retinában koncentrálódnak; támogatják a látásteljesítményt és a kék fény szűrését.', content: ['A karotinoidok a makulában halmozódnak fel, és támogathatják a kontrasztérzékenységet és a vakítás utáni regenerációt.', 'Források: zöld levelesek, tojássárgája; formulákban gyakran meso-zeaxantinnal párosítják.'] },
            28: { title: 'Króm: a glükózanyagcsere támogatása', summary: 'Részt vesz a makrotápanyagok normál anyagcseréjében és a vércukor szabályozásában.', content: ['Formák: króm-pikolinát és króm-polinikotinát.', 'Támogatja az inzulinjelzést; vércukorcsökkentő terápia mellett kérj szakértői tanácsot.'] }
        },
        pl: {
            0: { title: 'Magnez: niezbędny minerał w prostych słowach', summary: 'Wspiera produkcję energii, funkcję nerwów i mięśni, radzenie sobie ze stresem i jakość snu. Formy: cytrynian, glicynian, tlenek.', content: ['Magnez jest kofaktorem w ponad 300 reakcjach enzymatycznych, w tym syntezie ATP, transmisji nerwowo-mięśniowej i regulacji odpowiedzi na stres.', 'Formy różnią się biodostępnością i tolerancją: cytrynian dobrze się wchłania; glicynian jest łagodny; tlenek jest skoncentrowany, ale mniej biodostępny.', 'Źródła: orzechy, nasiona, rośliny strączkowe, pełne ziarna, zielone liście. Wieczorna dawka może wspierać sen; przy chorobach nerek skonsultuj się ze specjalistą.'] },
            1: { title: 'Czym jest omega‑3 i po co jest potrzebna?', summary: 'EPA/DHA wspierają serce, mózg, równowagę zapalną i wzrok. Źródła: tłuste ryby i olej z alg.', content: ['EPA i DHA to długołańcuchowe kwasy omega‑3, ważne dla płynności błon, zdrowia sercowo-naczyniowego oraz funkcji poznawczych i wzrokowych.', 'Celuj w tłuste ryby 2–3 razy w tygodniu lub standaryzowane suplementy. Opcja roślinna: olej z alg.', 'Równoważ stosunek omega‑6:omega‑3, ograniczając rafinowane oleje z nasion; formy enteric lub reestryfikowane mogą być lepiej tolerowane.'] },
            2: { title: 'Czym jest kolagen i dlaczego jest ważny?', summary: 'Białko strukturalne dla skóry, stawów i kości. Hydrolizowane peptydy (typy I/II/III) wchłaniają się lepiej; witamina C wspiera syntezę.', content: ['Kolagen buduje tkanki łączne. Typ I: skóra i kości; typ II: chrząstka; typ III często towarzyszy typowi I.', 'Hydrolizowane peptydy poprawiają strawność. Korzyści zwykle wymagają codziennego stosowania przez kilka tygodni.', 'Zapewnij wystarczającą ilość witaminy C, aby wspierać własną syntezę kolagenu.'] },
            3: { title: 'Witamina D3: witamina słońca dla odporności i nie tylko', summary: 'Reguluje równowagę wapnia, siłę kości i funkcję odpornościową. Często łączona z K2.', content: ['Cholekalcyferol wspiera homeostazę wapnia/fosforu i prawidłową funkcję odpornościową.', 'Poziom zależy od słońca, szerokości geograficznej i pory roku. Źródła pokarmowe są ograniczone, więc suplementacja jest częsta.', 'Połączenie D3 z K2 (MK‑7) wspiera mineralizację kości i właściwe wykorzystanie wapnia.'] },
            4: { title: 'Witamina C: rola we wsparciu odporności', summary: 'Antyoksydant dla odporności i syntezy kolagenu; poprawia wchłanianie żelaza.', content: ['Kwas askorbinowy uczestniczy w obronie antyoksydacyjnej i wspiera prawidłową funkcję odpornościową.', 'Jest niezbędny do syntezy kolagenu w skórze, naczyniach i więzadłach oraz zwiększa wchłanianie żelaza niehemowego.', 'Źródła: cytrusy, jagody, kiwi, papryka, brokuły. Dzielone dawki dają bardziej stabilny poziom w osoczu.'] },
            5: { title: 'Multiwitaminy: dlaczego dzieci powinny je przyjmować', summary: 'Uzupełniają luki w okresie wzrostu; wspierają odporność i funkcje poznawcze. Dawki zależą od wieku.', content: ['Dieta dzieci bywa nieregularna; multiwitaminy pomagają pokryć okresowe braki mikroskładników.', 'Częste składniki: witaminy A, C, D, E, kompleks B; jod, cynk, czasem żelazo.', 'Formy: do żucia, żelki, płyny. Stosuj dawki odpowiednie do wieku i dbaj o higienę jamy ustnej po słodkich formach.'] },
            6: { title: 'Chlorofil: korzyści i sposób stosowania', summary: 'Barwnik roślinny o właściwościach antyoksydacyjnych; często w kroplach.', content: ['Chlorofil i chlorofilina są stosowane dla świeżości i wsparcia antyoksydacyjnego.', 'Zwykle rozcieńcza się w wodzie; zacznij od najniższej sugerowanej ilości, aby ocenić tolerancję.', 'Po użyciu spłucz pojemniki, aby uniknąć przebarwień.'] },
            7: { title: 'Cynk: źródła i sposób przyjmowania', summary: 'Kluczowy dla odporności, skóry i enzymów. Formy: glukonian, cytrynian, pikolinian.', content: ['Cynk uczestniczy w setkach enzymów wspierających odporność, gojenie ran i integralność skóry.', 'Źródła: mięso, skorupiaki, nabiał, rośliny strączkowe. Fityniany mogą ograniczać wchłanianie; moczenie/kiełkowanie pomaga.', 'Oddzielaj od wysokich dawek żelaza lub wapnia; nadmiar cynku może powodować nudności.'] },
            8: { title: 'Jod: do czego służy i jak przyjmować', summary: 'Wspiera produkcję hormonów tarczycy oraz prawidłowe funkcje poznawcze i metaboliczne.', content: ['Jod jest niezbędny do syntezy tyroksyny (T4) i trijodotyroniny (T3), wpływając na metabolizm i rozwój.', 'Źródła: sól jodowana, ryby morskie, wodorosty. Zarówno niedobór, jak i nadmiar mogą wpływać na tarczycę.', 'Kobiety w ciąży i karmiące mają większe zapotrzebowanie; zasięgnij porady medycznej.'] },
            9: { title: 'Kwas foliowy (witamina B9): do czego i jak przyjmować', summary: 'Kluczowy dla syntezy DNA i rozwoju cewy nerwowej; wspiera metabolizm homocysteiny.', content: ['B9 wspiera prawidłowe tworzenie krwi i podziały komórek. Odpowiednia podaż jest ważna przed poczęciem i we wczesnej ciąży.', 'Naturalnie występuje jako foliany w zielonych liściach, roślinach strączkowych i wątrobie; suplementy często zawierają kwas foliowy lub 5‑MTHF.', 'Interakcje z lekami (np. niektóre antfoliany) skonsultuj ze specjalistą.'] },
            10: { title: 'Kwas alfa-liponowy: gdzie występuje i jak przyjmować', summary: 'Uniwersalny antyoksydant uczestniczący w mitochondrialnym metabolizmie energii.', content: ['ALA działa jako kofaktor enzymów mitochondrialnych i pomaga regenerować inne antyoksydanty (witaminy C i E).', 'Często stosowany we wsparciu metabolicznym i protokołach opieki nad nerwami.', 'Na czczo może lepiej się wchłaniać; może wchodzić w interakcje z terapią obniżającą glukozę.'] },
            11: { title: 'Witamina A: wzrok i odporność', summary: 'Wspiera wzrok, integralność nabłonka i odporność.', content: ['Retinol i karotenoidy prowitaminy A (beta-karoten) wspierają widzenie w słabym świetle i tkanki nabłonkowe.', 'Nadmiar retinolu może być teratogenny; stosuj się do etykiety. Źródła: wątroba i nabiał; karotenoidy w marchwi i batatach.'] },
            12: { title: 'Witamina E: ochrona antyoksydacyjna', summary: 'Chroni komórki przed stresem oksydacyjnym; działa z witaminą C.', content: ['Tokoferole i tokotrienole stabilizują błony przed uszkodzeniem oksydacyjnym.', 'Mieszane formuły tokoferoli bliżej odzwierciedlają dietę; uwzględnij spożycie PUFA.'] },
            13: { title: 'Witamina K2: równowaga kości i naczyń', summary: 'Aktywuje białka kierujące wapń do kości, a nie do tkanek miękkich.', content: ['MK‑7 ma dłuższy okres półtrwania niż K1 i MK‑4, wspierając aktywację osteokalcyny i MGP.', 'Często łączona z witaminą D3 ze względu na uzupełniające role w metabolizmie wapnia.'] },
            14: { title: 'Wapń: struktura i sygnalizacja', summary: 'Główny minerał kości/zębów i sygnalizacji komórkowej.', content: ['Węglan wapnia dostarcza więcej wapnia elementarnego; cytrynian jest łagodniejszy i wymaga mniej kwasu żołądkowego.', 'Dzielone dawki poprawiają wchłanianie; zadbaj o odpowiedni poziom witaminy D.'] },
            15: { title: 'Żelazo: gdzie występuje i jak przyjmować', summary: 'Wspiera hemoglobinę i transport tlenu; przed użyciem sprawdź poziom.', content: ['Żelazo hemowe (mięso) wchłania się lepiej niż niehemowe (rośliny). Witamina C zwiększa wchłanianie niehemowego.', 'Częste formy: bisglicynian żelaza, glukonian, siarczan. Nadmiar może powodować dolegliwości żołądkowe; trzymaj z dala od dzieci.'] },
            16: { title: 'Selen: wsparcie antyoksydacyjne i tarczycy', summary: 'Składnik enzymów antyoksydacyjnych i metabolizmu hormonów tarczycy.', content: ['Peroksydazy glutationowe i dejodynazy wymagają selenu. Źródła: orzechy brazylijskie i owoce morza.', 'Wysokie dawki mogą powodować selenoza; trzymaj się zalecanych ilości.'] },
            17: { title: 'Biotyna (witamina B7): włosy, skóra, paznokcie', summary: 'Koenzym w metabolizmie makroskładników; popularna we wsparciu kosmetycznym.', content: ['Biotyna uczestniczy w reakcjach karboksylaz dla tłuszczów i węglowodanów.', 'Wysokie dawki suplementów mogą zakłócać niektóre badania laboratoryjne; poinformuj lekarza.'] },
            18: { title: 'Witamina B12 (kobalamina): energia i nerwy', summary: 'Wspiera tworzenie czerwonych krwinek i funkcję układu nerwowego.', content: ['Metylokobalamina i cyjanokobalamina to częste formy; wchłanianie zależy od czynnika wewnętrznego.', 'Wegetarianie/weganie często potrzebują suplementacji; u osób starszych monitoruj poziom.'] },
            19: { title: 'Witamina B6 (pirydoksyna): metabolizm i nastrój', summary: 'Koenzym w metabolizmie aminokwasów i syntezie neuroprzekaźników.', content: ['Wspiera prawidłowy metabolizm homocysteiny i uwalnianie energii.', 'Bardzo wysokie dawki z czasem mogą powodować neuropatię czuciową; trzymaj się zaleceń.'] },
            20: { title: 'Witamina B1 (tiamina): metabolizm energii', summary: 'Koenzym metabolizmu węglowodanów i funkcji nerwów.', content: ['Pirofosforan tiaminy jest potrzebny do działania dehydrogenazy pirogronianowej.', 'Ryzyko niedoboru rośnie przy przewlekłym użyciu alkoholu lub silnie rafinowanej diecie.'] },
            21: { title: 'Witamina B2 (ryboflawina): energia komórkowa', summary: 'Prekursor FAD/FMN w reakcjach redoks.', content: ['Ważna dla mitochondrialnej produkcji energii i enzymów antyoksydacyjnych.', 'Może zabarwiać mocz na intensywny żółty — to oczekiwane i nieszkodliwe.'] },
            22: { title: 'Witamina B3 (niacyna): metabolizm i skóra', summary: 'Prekursor NAD/NADP; wysokie dawki mogą powodować rumień.', content: ['Wspiera prawidłowy metabolizm energii i zdrowie skóry.', 'Flush niacynowy to łagodny efekt rozszerzenia naczyń; forma „bez flushu” (heksanikotynian inozytolu) działa inaczej.'] },
            23: { title: 'Witamina B5 (kwas pantotenowy): synteza CoA', summary: 'Potrzebna do syntezy koenzymu A; uczestniczy w metabolizmie energii i lipidów.', content: ['Szeroko obecna w żywności; niedobór jest rzadki, ale może powodować zmęczenie i drażliwość.', 'Czasem stosowana w wyższych dawkach dla skóry — dowody są mieszane.'] },
            24: { title: 'Koenzym Q10: mitochondria i serce', summary: 'Ubichinon/ubichinol wspierają energię komórkową i ochronę antyoksydacyjną.', content: ['Część łańcucha transportu elektronów; poziomy mogą spadać z wiekiem i przy stosowaniu statyn.', 'Ubichinol to forma zredukowana o wyższej biodostępności w niektórych badaniach.'] },
            25: { title: 'Probiotyki: równowaga od wewnątrz', summary: 'Żywe mikroorganizmy wspierające równowagę mikrobiomu i barierę jelitową.', content: ['Częste rodzaje: Lactobacillus, Bifidobacterium, Streptococcus thermophilus.', 'Korzyści zależą od szczepu i liczby CFU; przechowuj zgodnie z etykietą.'] },
            26: { title: 'Prebiotyki (inulina i FOS): karm mikrobiom', summary: 'Niestrawne błonnik, które selektywnie odżywiają pożyteczne bakterie.', content: ['Inulina i fruktooligosacharydy zwiększają bifidobakterie i krótkołańcuchowe kwasy tłuszczowe.', 'Zacznij od niskiej dawki, aby ograniczyć gazy/wzdęcia; pij wystarczająco dużo płynów.'] },
            27: { title: 'Luteina i zeaksantyna: pigmenty plamki żółtej', summary: 'Skoncentrowane w siatkówce; wspierają sprawność wzroku i filtrowanie niebieskiego światła.', content: ['Karotenoidy gromadzą się w plamce i mogą wspierać czułość kontrastu oraz regenerację po olśnieniu.', 'Źródła: zielone liście, żółtka jaj; w formułach często z mezo-zeaksantyną.'] },
            28: { title: 'Chrom: wsparcie metabolizmu glukozy', summary: 'Uczestniczy w prawidłowym metabolizmie makroskładników i regulacji glukozy we krwi.', content: ['Formy: pikolinian chromu i polinikotynian chromu.', 'Wspiera sygnalizację insuliny; przy terapii obniżającej glukozę skonsultuj się ze specjalistą.'] }
        }
    };

    function getCurrentLang() {
        return (window.I18N && window.I18N.current) || 'en';
    }

    function cloneContent(list) {
        return Array.isArray(list) ? list.slice() : [];
    }

    function cloneArticle(item) {
        if (!item || typeof item !== 'object') return {};
        const copy = { ...item };
        if (Array.isArray(item.content)) {
            copy.content = cloneContent(item.content);
        }
        if (typeof item.contentHtml === 'string') {
            copy.contentHtml = String(item.contentHtml);
        }
        return copy;
    }

    function getTranslationsForLang(lang) {
        if (!lang) return null;
        const dict = (window.__BANK_TRANSLATIONS__ && window.__BANK_TRANSLATIONS__[lang]) || null;
        return dict || null;
    }

    function localizeArticles(baseList, lang) {
        const translations = getTranslationsForLang(lang);
        return baseList.map((item, idx) => {
            const translation = translations && translations[idx];
            const localized = cloneArticle(item);
            if (!translation) return localized;
            if (typeof translation.title === 'string') localized.title = translation.title;
            if (typeof translation.summary === 'string') localized.summary = translation.summary;
            if (typeof translation.date === 'string') localized.date = translation.date;
            if (typeof translation.contentHtml === 'string') {
                localized.contentHtml = translation.contentHtml;
                delete localized.content;
            } else if (Array.isArray(translation.content)) {
                localized.content = cloneContent(translation.content);
                delete localized.contentHtml;
            }
            return localized;
        });
    }

    if (typeof window !== 'undefined') {
        window.__BANK_BASE_EN__ = FALLBACK_EN;
        window.__BANK_TRANSLATIONS__ = FALLBACK_TRANSLATIONS;
    }

    const grid = document.getElementById('articles-grid');
    const loadMoreBtn = document.getElementById('load-more');
    if (!grid || !loadMoreBtn) return;

    let rendered = 0;
    let articles = [];
    let enArticles = [];
    let cachedJson = null;
    let langRequestToken = 0;

    function resetAndRender(newArticles) {
        articles = newArticles;
        rendered = 0;
        grid.innerHTML = '';
        loadMoreBtn.style.display = '';
        renderMore();
    }
    

    function getImagePath(index) {
        const num = String(index + 1).padStart(2, '0');
        return `images/bank/bank-${num}.jpg`;
    }

    function createArticleCard(article, index) {
        const el = document.createElement('article');
        el.className = 'card';
        const summaryLabel = (window.__t && __t('bank.summary')) || 'Summary:';
        el.innerHTML = `
            <img class="bank-thumb" src="${getImagePath(index)}" alt="${escapeHtml(article.title)}" loading="lazy" onerror="this.remove()" />
            <h3>${escapeHtml(article.title)}</h3>
            <p><strong data-i18n="bank.summary">${summaryLabel}</strong> ${escapeHtml(article.summary || '')}</p>
        `;
        // hide image if not found to avoid odd placeholders
        const img = el.querySelector('img.bank-thumb');
        if (img) {
            img.addEventListener('error', () => {
                img.remove();
            }, { once: true });
        }
        // Make card and "Read full article" navigate to dedicated page
        el.dataset.index = String(index);
        el.style.cursor = 'pointer';
        el.addEventListener('click', (ev) => {
            const a = ev.target && (ev.target.closest && ev.target.closest('a'));
            if (a) return; // let anchors work
            window.location.href = `post.html?id=${index}`;
        });
        // No inline "Read full article" as the whole card is clickable
        return el;
    }

    function sanitizeDomain(html) {
        if (!html) return '';
        // remove https://healthis.ru (with optional trailing slash) from any text and hrefs
        const pattern = /https?:\/\/(?:www\.)?healthis\.ru\/?/gi;
        return String(html).replace(pattern, '');
    }

    function renderMore() {
        if (!Array.isArray(articles) || articles.length === 0) {
            loadMoreBtn.style.display = 'none';
            return;
        }
        const next = Math.min(rendered + PAGE_SIZE, articles.length);
        for (let i = rendered; i < next; i++) {
            grid.appendChild(createArticleCard(articles[i], i));
        }
        rendered = next;
        if (rendered >= articles.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function getPreloadedItems() {
        try {
            if (window.__BANK_DATA__ && Array.isArray(window.__BANK_DATA__.items) && window.__BANK_DATA__.items.length) {
                return window.__BANK_DATA__.items.map(cloneArticle);
            }
        } catch (e) {}
        return null;
    }

    async function fetchBankJson() {
        if (Array.isArray(cachedJson) && cachedJson.length) {
            return cachedJson.map(cloneArticle);
        }
        const url = new URL('./data/bank.json', window.location.href).href;
        try {
            const res = await fetch(url, { credentials: 'omit', cache: 'no-store' });
            if (!res.ok) throw new Error(String(res.status));
            const data = await res.json();
            if (!data || !Array.isArray(data.items) || data.items.length === 0) throw new Error('empty');
            cachedJson = data.items.map(cloneArticle);
            return cachedJson.map(cloneArticle);
        } catch (e) {
            return null;
        }
    }

    async function ensureEnArticles() {
        if (Array.isArray(enArticles) && enArticles.length) return;
        const preloaded = getPreloadedItems();
        if (Array.isArray(preloaded) && preloaded.length) {
            enArticles = preloaded;
            return;
        }
        const json = await fetchBankJson();
        if (Array.isArray(json) && json.length) {
            enArticles = json;
            return;
        }
        enArticles = FALLBACK_EN.map(cloneArticle);
    }

    async function renderForLanguage(lang) {
        const token = ++langRequestToken;
        const targetLang = lang || 'en';
        await ensureEnArticles();
        let baseList = enArticles;
        if (token !== langRequestToken) return;
        const localized = localizeArticles(baseList, targetLang);
        resetAndRender(localized);
    }

    async function init() {
        loadMoreBtn.addEventListener('click', renderMore);
        await ensureEnArticles();
        await renderForLanguage(getCurrentLang());

        window.addEventListener('i18n:change', (event) => {
            const lang = event && event.detail && event.detail.lang;
            if (!lang) return;
            renderForLanguage(lang);
        });
    }

    init().catch(() => {
        // fallback hard if everything else failed
        resetAndRender(localizeArticles(FALLBACK_EN.map(cloneArticle), getCurrentLang()));
    });
})();


