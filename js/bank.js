/* VITLZ Vitamins Bank - dynamic rendering with "Show more" (29 items) */
(function() {
    const PAGE_SIZE = 8;
    const grid = document.getElementById('articles-grid');
    const loadMoreBtn = document.getElementById('load-more');
    if (!grid || !loadMoreBtn) return;

    // Fallback static data (used only if JSON fetch fails)
    const FALLBACK = [
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

    let rendered = 0;
    let articles = [];

    function getImagePath(index) {
        const num = String(index + 1).padStart(2, '0');
        return `images/bank/bank-${num}.jpg`;
    }

    function createArticleCard(article, index) {
        const el = document.createElement('article');
        el.className = 'card';
        el.innerHTML = `
            <img class="bank-thumb" src="${getImagePath(index)}" alt="${escapeHtml(article.title)}" loading="lazy" onerror="this.remove()" />
            <h3>${escapeHtml(article.title)}</h3>
            <p><strong>${(window.__t && __t('bank.summary')) || 'Summary:'}</strong> ${escapeHtml(article.summary || '')}</p>
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

    async function loadArticlesJson() {
        // Prefer preloaded JS dataset if available (ensures consistent English content)
        try {
            if (window.__BANK_DATA__ && Array.isArray(window.__BANK_DATA__.items) && window.__BANK_DATA__.items.length) {
                return window.__BANK_DATA__.items;
            }
        } catch (e) {}
        // Fallback to JSON fetch
        const url = new URL('./data/bank.json', window.location.href).href;
        try {
            const res = await fetch(url, { credentials: 'omit', cache: 'no-store' });
            if (!res.ok) throw new Error(String(res.status));
            const data = await res.json();
            if (!data || !Array.isArray(data.items) || data.items.length === 0) throw new Error('empty');
            return data.items;
        } catch (e) {
            return null;
        }
    }

    async function init() {
        const fromJson = await loadArticlesJson();
        articles = fromJson || FALLBACK;
        loadMoreBtn.addEventListener('click', renderMore);
        renderMore();
    }

    init();
})();


