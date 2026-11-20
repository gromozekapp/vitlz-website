/* Product detail modal for Formulas cards */
(function () {
    const extras = {
        electrolytes: {
            en: extraElectrolytes({
                facts: 'Supplement Facts',
                ingredientsCol: 'Ingredients',
                oneTab: '1 tablet (%NRV*)',
                twoTab: '2 tablets (%NRV*)',
                calcium: 'Calcium',
                chloride: 'Chloride',
                potassium: 'Potassium',
                magnesium: 'Magnesium',
                sodium: 'Sodium',
                nrv: '*NRV — Nutrient Reference Value',
                when: 'When it can be a useful everyday choice',
                training: 'Training',
                trainingT: 'A companion for your workout routine.',
                travel: 'Travel',
                travelT: 'A practical option while travelling.',
                active: 'Active day',
                activeT: 'Daily support for an on-the-go routine.',
                heat: 'Warm weather',
                heatT: 'A simple way to include essential electrolytes on warmer days.',
                ingredients: 'Ingredients',
                ingredientsT: 'Calcium carbonate, potassium chloride, bulking agent: microcrystalline cellulose; buffered magnesium citrate, sodium chloride; coating: polyvinyl alcohol; anti-caking agents: magnesium stearate, silicon dioxide.',
                use: 'How to use',
                useT: 'For adults: 1–2 tablets per day.',
                store: 'Storage and important information',
                storeT: 'Keep out of reach of children. Do not exceed the recommended daily dose. Store in the original package, in a dry place, at room temperature. Food supplements should not replace a varied, balanced diet and a healthy lifestyle.',
                made: 'Manufactured',
                madeT: 'In the European Union, on the order of Pharmalogic LTD, 9130 Bulgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Questions: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Electrolytes Complex is a food supplement, not a medicine. It is not intended to diagnose, treat, cure or prevent disease.'
            }),
            de: extraElectrolytes({
                facts: 'Nährwertangaben',
                ingredientsCol: 'Inhaltsstoffe',
                oneTab: '1 Tablette (%NRV*)',
                twoTab: '2 Tabletten (%NRV*)',
                calcium: 'Calcium',
                chloride: 'Chlorid',
                potassium: 'Kalium',
                magnesium: 'Magnesium',
                sodium: 'Natrium',
                nrv: '*NRV — Nährstoffbezugswert',
                when: 'Wann es im Alltag passen kann',
                training: 'Training',
                trainingT: 'Eine Begleitung für die Workout-Routine.',
                travel: 'Reisen',
                travelT: 'Eine praktische Option unterwegs.',
                active: 'Aktiver Tag',
                activeT: 'Alltagsunterstützung für unterwegs.',
                heat: 'Warmes Wetter',
                heatT: 'Eine einfache Möglichkeit, essentielle Elektrolyte an wärmeren Tagen einzubeziehen.',
                ingredients: 'Zutaten',
                ingredientsT: 'Calciumcarbonat, Kaliumchlorid, Füllstoff: mikrokristalline Cellulose; gepuffertes Magnesiumcitrat, Natriumchlorid; Überzug: Polyvinylalkohol; Trennmittel: Magnesiumstearat, Siliciumdioxid.',
                use: 'Anwendung',
                useT: 'Für Erwachsene: 1–2 Tabletten täglich.',
                store: 'Lagerung und wichtige Hinweise',
                storeT: 'Außerhalb der Reichweite von Kindern aufbewahren. Die empfohlene Tagesdosis nicht überschreiten. In der Originalverpackung, trocken und bei Raumtemperatur lagern. Nahrungsergänzungsmittel ersetzen keine abwechslungsreiche, ausgewogene Ernährung und einen gesunden Lebensstil.',
                made: 'Hergestellt',
                madeT: 'In der Europäischen Union im Auftrag von Pharmalogic LTD, 9130 Bulgarien, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Fragen: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Electrolytes Complex ist ein Nahrungsergänzungsmittel, kein Arzneimittel. Es ist nicht dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder vorzubeugen.'
            }),
            bg: extraElectrolytes({
                facts: 'Хранителна информация',
                ingredientsCol: 'Съставки',
                oneTab: '1 таблетка (%NRV*)',
                twoTab: '2 таблетки (%NRV*)',
                calcium: 'Калций',
                chloride: 'Хлорид',
                potassium: 'Калий',
                magnesium: 'Магнезий',
                sodium: 'Натрий',
                nrv: '*NRV — референтна хранителна стойност',
                when: 'Кога може да е удобен ежедневен избор',
                training: 'Тренировка',
                trainingT: 'Компаньон за тренировъчната рутина.',
                travel: 'Пътуване',
                travelT: 'Практичен вариант в движение.',
                active: 'Активен ден',
                activeT: 'Ежедневна подкрепа за натоварен график.',
                heat: 'Топло време',
                heatT: 'Прост начин да включите основни електролити в по-топлите дни.',
                ingredients: 'Съставки',
                ingredientsT: 'Калциев карбонат, калиев хлорид, пълнител: микрокристална целулоза; буфериран магнезиев цитрат, натриев хлорид; покритие: поливинилов алкохол; антислепващи агенти: магнезиев стеарат, силициев диоксид.',
                use: 'Начин на употреба',
                useT: 'За възрастни: 1–2 таблетки дневно.',
                store: 'Съхранение и важна информация',
                storeT: 'Да се пази далеч от деца. Да не се превишава препоръчителната дневна доза. Да се съхранява в оригиналната опаковка, на сухо място, при стайна температура. Хранителните добавки не заместват разнообразното и балансирано хранене и здравословния начин на живот.',
                made: 'Произведено',
                madeT: 'В Европейския съюз, по поръчка на Pharmalogic LTD, 9130 България, с. Близнаци, кк Камчия 21-4.',
                questions: 'Въпроси: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Electrolytes Complex е хранителна добавка, а не лекарство. Не е предназначена за диагностика, лечение, излекуване или профилактика на заболявания.'
            }),
            ro: extraElectrolytes({
                facts: 'Informații nutriționale',
                ingredientsCol: 'Ingrediente',
                oneTab: '1 comprimat (%VNR*)',
                twoTab: '2 comprimate (%VNR*)',
                calcium: 'Calciu',
                chloride: 'Clorură',
                potassium: 'Potasiu',
                magnesium: 'Magneziu',
                sodium: 'Sodiu',
                nrv: '*VNR — valoare nutritivă de referință',
                when: 'Când poate fi o alegere practică zilnică',
                training: 'Antrenament',
                trainingT: 'Un companion pentru rutina de antrenament.',
                travel: 'Călătorie',
                travelT: 'O opțiune practică în deplasare.',
                active: 'Zi activă',
                activeT: 'Sprijin zilnic pentru un program dinamic.',
                heat: 'Vreme caldă',
                heatT: 'Un mod simplu de a include electroliți esențiali în zile mai calde.',
                ingredients: 'Ingrediente',
                ingredientsT: 'Carbonat de calciu, clorură de potasiu, agent de încărcare: celuloză microcristalină; citrat de magneziu tamponat, clorură de sodiu; înveliş: alcool polivinilic; antiaglomeranți: stearat de magneziu, dioxid de siliciu.',
                use: 'Mod de utilizare',
                useT: 'Pentru adulți: 1–2 comprimate pe zi.',
                store: 'Păstrare și informații importante',
                storeT: 'A nu se lăsa la îndemâna copiilor. A nu se depăși doza zilnică recomandată. A se păstra în ambalajul original, într-un loc uscat, la temperatura camerei. Suplimentele alimentare nu înlocuiesc o dietă variată, echilibrată și un stil de viață sănătos.',
                made: 'Fabricat',
                madeT: 'În Uniunea Europeană, la comanda Pharmalogic LTD, 9130 Bulgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Întrebări: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Electrolytes Complex este un supliment alimentar, nu un medicament. Nu este destinat diagnosticării, tratării, vindecării sau prevenirii bolilor.'
            }),
            hu: extraElectrolytes({
                facts: 'Tápanyag-összetétel',
                ingredientsCol: 'Összetevők',
                oneTab: '1 tabletta (%NRV*)',
                twoTab: '2 tabletta (%NRV*)',
                calcium: 'Kalcium',
                chloride: 'Klorid',
                potassium: 'Kálium',
                magnesium: 'Magnézium',
                sodium: 'Nátrium',
                nrv: '*NRV — tápanyag-referenciamennyiség',
                when: 'Mikor lehet praktikus mindennapi választás',
                training: 'Edzés',
                trainingT: 'Társ az edzésrutinhoz.',
                travel: 'Utazás',
                travelT: 'Gyakorlatias lehetőség útközben.',
                active: 'Aktív nap',
                activeT: 'Napi támogatás pörgős napokra.',
                heat: 'Meleg idő',
                heatT: 'Egyszerű módja, hogy melegebb napokon esszenciális elektrolitokat is beiktass.',
                ingredients: 'Összetevők',
                ingredientsT: 'Kalcium-karbonát, kálium-klorid, tömegnövelő anyag: mikrokristályos cellulóz; pufferelt magnézium-citrát, nátrium-klorid; bevonat: polivinil-alkohol; csomósodást gátló anyagok: magnézium-sztearát, szilícium-dioxid.',
                use: 'Alkalmazás',
                useT: 'Felnőtteknek: napi 1–2 tabletta.',
                store: 'Tárolás és fontos tudnivalók',
                storeT: 'Gyermekektől elzárva tartandó. A javasolt napi adagot ne lépje túl. Eredeti csomagolásban, száraz helyen, szobahőmérsékleten tárolandó. Az étrend-kiegészítők nem helyettesítik a változatos, kiegyensúlyozott étrendet és az egészséges életmódot.',
                made: 'Gyártás',
                madeT: 'Az Európai Unióban, a Pharmalogic LTD megrendelésére, 9130 Bulgária, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Kérdések: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'A VITLZ Electrolytes Complex étrend-kiegészítő, nem gyógyszer. Nem betegség diagnosztizálására, kezelésére, gyógyítására vagy megelőzésére szolgál.'
            }),
            pl: extraElectrolytes({
                facts: 'Składniki odżywcze',
                ingredientsCol: 'Składniki',
                oneTab: '1 tabletka (%RWS*)',
                twoTab: '2 tabletki (%RWS*)',
                calcium: 'Wapń',
                chloride: 'Chlorek',
                potassium: 'Potas',
                magnesium: 'Magnez',
                sodium: 'Sód',
                nrv: '*RWS — referencyjna wartość spożycia',
                when: 'Kiedy może być praktycznym codziennym wyborem',
                training: 'Trening',
                trainingT: 'Towarzysz codziennej rutyny treningowej.',
                travel: 'Podróż',
                travelT: 'Praktyczna opcja w drodze.',
                active: 'Aktywny dzień',
                activeT: 'Codzienne wsparcie przy napiętym grafiku.',
                heat: 'Ciepła pogoda',
                heatT: 'Prosty sposób, by w cieplejsze dni uwzględnić niezbędne elektrolity.',
                ingredients: 'Składniki',
                ingredientsT: 'Węglan wapnia, chlorek potasu, substancja wypełniająca: celuloza mikrokrystaliczna; buforowany cytrynian magnezu, chlorek sodu; otoczka: alkohol poliwinylowy; substancje przeciwzbrylające: stearynian magnezu, dwutlenek krzemu.',
                use: 'Sposób użycia',
                useT: 'Dla dorosłych: 1–2 tabletki dziennie.',
                store: 'Przechowywanie i ważne informacje',
                storeT: 'Chronić przed dziećmi. Nie przekraczać zalecanej dziennej porcji. Przechowywać w oryginalnym opakowaniu, w suchym miejscu, w temperaturze pokojowej. Suplementy diety nie zastępują zróżnicowanej, zrównoważonej diety i zdrowego stylu życia.',
                made: 'Wyprodukowano',
                madeT: 'W Unii Europejskiej, na zlecenie Pharmalogic LTD, 9130 Bułgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Pytania: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Electrolytes Complex jest suplementem diety, nie lekiem. Nie jest przeznaczony do diagnozowania, leczenia, wyleczenia ani zapobiegania chorobom.'
            })
        },
        collagen: {
            en: extraCollagen({
                facts: 'Supplement Facts',
                ingredientsCol: 'Ingredients',
                oneCap: '1 capsule (%NRV*)',
                b3: 'Vitamin B3',
                c: 'Vitamin C',
                col: 'Marine Collagen',
                nrv: '*NRV — Nutrient Reference Value',
                about: 'About VITLZ',
                aboutT: 'VITLZ is a European brand of food supplements, created for people who value energy, daily well-being and a considered routine. We combine carefully selected ingredients with a clear, modern formula design.',
                quality: 'What we stand for',
                q1: 'Made in Europe — produced to high European standards',
                q2: 'Carefully selected ingredients',
                q3: 'Clean formulas without unnecessary additives',
                q4: 'GMO free',
                q5: 'Third-party tested for safety and purity',
                ingredients: 'Ingredients',
                ingredientsT: 'Marine (fish) collagen; capsule shell: hydroxypropyl methylcellulose; L-ascorbic acid; bulking agent: calcium hydrogen phosphate; anti-caking agents: magnesium stearate, silicon dioxide; nicotinamide.',
                use: 'How to use',
                useT: 'For adults: 1 capsule daily, with food.',
                store: 'Storage and important information',
                storeT: 'Keep out of reach of children. Do not exceed the recommended daily dose. Store in the original package, in a dry place, at room temperature. Food supplements should not replace a varied, balanced diet and a healthy lifestyle.',
                made: 'Manufactured',
                madeT: 'In the European Union, on the order of Pharmalogic LTD, 9130 Bulgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Questions: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Marine Collagen is a food supplement, not a medicine. It is not intended to diagnose, treat, cure or prevent disease. Contains fish.'
            }),
            de: extraCollagen({
                facts: 'Nährwertangaben',
                ingredientsCol: 'Inhaltsstoffe',
                oneCap: '1 Kapsel (%NRV*)',
                b3: 'Vitamin B3',
                c: 'Vitamin C',
                col: 'Meereskollagen',
                nrv: '*NRV — Nährstoffbezugswert',
                about: 'Über VITLZ',
                aboutT: 'VITLZ ist eine europäische Marke für Nahrungsergänzungsmittel — für Menschen, die Energie, Alltagswellness und eine durchdachte Routine schätzen. Wir verbinden ausgewählte Zutaten mit klarer, moderner Formulierung.',
                quality: 'Wofür wir stehen',
                q1: 'Hergestellt in Europa — nach hohen europäischen Standards',
                q2: 'Sorgfältig ausgewählte Zutaten',
                q3: 'Klare Formeln ohne unnötige Zusatzstoffe',
                q4: 'Ohne GVO',
                q5: 'Von Dritten auf Sicherheit und Reinheit geprüft',
                ingredients: 'Zutaten',
                ingredientsT: 'Meereskollagen (Fisch); Kapselhülle: Hydroxypropylmethylcellulose; L-Ascorbinsäure; Füllstoff: Calciumhydrogenphosphat; Trennmittel: Magnesiumstearat, Siliciumdioxid; Nicotinamid.',
                use: 'Anwendung',
                useT: 'Für Erwachsene: 1 Kapsel täglich zu einer Mahlzeit.',
                store: 'Lagerung und wichtige Hinweise',
                storeT: 'Außerhalb der Reichweite von Kindern aufbewahren. Die empfohlene Tagesdosis nicht überschreiten. In der Originalverpackung, trocken und bei Raumtemperatur lagern. Nahrungsergänzungsmittel ersetzen keine abwechslungsreiche, ausgewogene Ernährung und einen gesunden Lebensstil.',
                made: 'Hergestellt',
                madeT: 'In der Europäischen Union im Auftrag von Pharmalogic LTD, 9130 Bulgarien, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Fragen: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Marine Collagen ist ein Nahrungsergänzungsmittel, kein Arzneimittel. Es ist nicht dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder vorzubeugen. Enthält Fisch.'
            }),
            bg: extraCollagen({
                facts: 'Хранителна информация',
                ingredientsCol: 'Съставки',
                oneCap: '1 капсула (%NRV*)',
                b3: 'Витамин B3',
                c: 'Витамин C',
                col: 'Морски колаген',
                nrv: '*NRV — референтна хранителна стойност',
                about: 'За VITLZ',
                aboutT: 'VITLZ е европейска марка хранителни добавки за хора, които ценят енергията, ежедневния комфорт и обмислената рутина. Съчетаваме подбрани съставки с ясна, модерна формула.',
                quality: 'На какво държим',
                q1: 'Произведено в Европа — по високи европейски стандарти',
                q2: 'Внимателно подбрани съставки',
                q3: 'Чисти формули без ненужни добавки',
                q4: 'Без ГМО',
                q5: 'Тествано от трета страна за безопасност и чистота',
                ingredients: 'Съставки',
                ingredientsT: 'Морски (рибен) колаген; обвивка на капсулата: хидроксипропилметилцелулоза; L-аскорбинова киселина; пълнител: калциев хидрогенфосфат; антислепващи агенти: магнезиев стеарат, силициев диоксид; никотинамид.',
                use: 'Начин на употреба',
                useT: 'За възрастни: 1 капсула дневно, с храна.',
                store: 'Съхранение и важна информация',
                storeT: 'Да се пази далеч от деца. Да не се превишава препоръчителната дневна доза. Да се съхранява в оригиналната опаковка, на сухо място, при стайна температура. Хранителните добавки не заместват разнообразното и балансирано хранене и здравословния начин на живот.',
                made: 'Произведено',
                madeT: 'В Европейския съюз, по поръчка на Pharmalogic LTD, 9130 България, с. Близнаци, кк Камчия 21-4.',
                questions: 'Въпроси: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Marine Collagen е хранителна добавка, а не лекарство. Не е предназначена за диагностика, лечение, излекуване или профилактика на заболявания. Съдържа риба.'
            }),
            ro: extraCollagen({
                facts: 'Informații nutriționale',
                ingredientsCol: 'Ingrediente',
                oneCap: '1 capsulă (%VNR*)',
                b3: 'Vitamina B3',
                c: 'Vitamina C',
                col: 'Colagen marin',
                nrv: '*VNR — valoare nutritivă de referință',
                about: 'Despre VITLZ',
                aboutT: 'VITLZ este un brand european de suplimente alimentare, creat pentru oameni care prețuiesc energia, bunăstarea zilnică și o rutină atent aleasă. Combinăm ingrediente selectate cu o formulă clară, modernă.',
                quality: 'Pentru ce susținem',
                q1: 'Fabricat în Europa — după standarde europene ridicate',
                q2: 'Ingrediente atent selectate',
                q3: 'Formule curate, fără aditivi inutili',
                q4: 'Fără OMG',
                q5: 'Testat de terți pentru siguranță și puritate',
                ingredients: 'Ingrediente',
                ingredientsT: 'Colagen marin (pește); înveliș capsulă: hidroxipropilmetilceluloză; acid L-ascorbic; agent de încărcare: hidrogenofosfat de calciu; antiaglomeranți: stearat de magneziu, dioxid de siliciu; nicotinamidă.',
                use: 'Mod de utilizare',
                useT: 'Pentru adulți: 1 capsulă pe zi, la masă.',
                store: 'Păstrare și informații importante',
                storeT: 'A nu se lăsa la îndemâna copiilor. A nu se depăși doza zilnică recomandată. A se păstra în ambalajul original, într-un loc uscat, la temperatura camerei. Suplimentele alimentare nu înlocuiesc o dietă variată, echilibrată și un stil de viață sănătos.',
                made: 'Fabricat',
                madeT: 'În Uniunea Europeană, la comanda Pharmalogic LTD, 9130 Bulgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Întrebări: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Marine Collagen este un supliment alimentar, nu un medicament. Nu este destinat diagnosticării, tratării, vindecării sau prevenirii bolilor. Conține pește.'
            }),
            hu: extraCollagen({
                facts: 'Tápanyag-összetétel',
                ingredientsCol: 'Összetevők',
                oneCap: '1 kapszula (%NRV*)',
                b3: 'B3-vitamin',
                c: 'C-vitamin',
                col: 'Tengeri kollagén',
                nrv: '*NRV — tápanyag-referenciamennyiség',
                about: 'A VITLZ-ről',
                aboutT: 'A VITLZ európai étrend-kiegészítő márka azoknak, akik az energiát, a mindennapi jóllétet és az átgondolt rutint értékelik. Gondosan válogatott összetevőket ötvözünk tiszta, modern formulával.',
                quality: 'Ami mellett kiállunk',
                q1: 'Európában készült — magas európai szabványok szerint',
                q2: 'Gondosan válogatott összetevők',
                q3: 'Tiszta formulák felesleges adalékok nélkül',
                q4: 'GMO-mentes',
                q5: 'Harmadik fél által tesztelve biztonságra és tisztaságra',
                ingredients: 'Összetevők',
                ingredientsT: 'Tengeri (hal) kollagén; kapszulahéj: hidroxipropil-metil-cellulóz; L-aszkorbinsav; tömegnövelő anyag: kalcium-hidrogén-foszfát; csomósodást gátló anyagok: magnézium-sztearát, szilícium-dioxid; nikotinamid.',
                use: 'Alkalmazás',
                useT: 'Felnőtteknek: napi 1 kapszula, étkezéssel.',
                store: 'Tárolás és fontos tudnivalók',
                storeT: 'Gyermekektől elzárva tartandó. A javasolt napi adagot ne lépje túl. Eredeti csomagolásban, száraz helyen, szobahőmérsékleten tárolandó. Az étrend-kiegészítők nem helyettesítik a változatos, kiegyensúlyozott étrendet és az egészséges életmódot.',
                made: 'Gyártás',
                madeT: 'Az Európai Unióban, a Pharmalogic LTD megrendelésére, 9130 Bulgária, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Kérdések: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'A VITLZ Marine Collagen étrend-kiegészítő, nem gyógyszer. Nem betegség diagnosztizálására, kezelésére, gyógyítására vagy megelőzésére szolgál. Halat tartalmaz.'
            }),
            pl: extraCollagen({
                facts: 'Składniki odżywcze',
                ingredientsCol: 'Składniki',
                oneCap: '1 kapsułka (%RWS*)',
                b3: 'Witamina B3',
                c: 'Witamina C',
                col: 'Kolagen morski',
                nrv: '*RWS — referencyjna wartość spożycia',
                about: 'O VITLZ',
                aboutT: 'VITLZ to europejska marka suplementów diety dla osób, które cenią energię, codzienne samopoczucie i przemyślaną rutynę. Łączymy starannie dobrane składniki z jasną, nowoczesną formułą.',
                quality: 'Co jest dla nas ważne',
                q1: 'Wyprodukowano w Europie — według wysokich standardów europejskich',
                q2: 'Starannie dobrane składniki',
                q3: 'Czyste formuły bez zbędnych dodatków',
                q4: 'Bez GMO',
                q5: 'Testowane przez stronę trzecią pod kątem bezpieczeństwa i czystości',
                ingredients: 'Składniki',
                ingredientsT: 'Kolagen morski (rybi); otoczka kapsułki: hydroksypropylometyloceluloza; kwas L-askorbinowy; substancja wypełniająca: wodorofosforan wapnia; substancje przeciwzbrylające: stearynian magnezu, dwutlenek krzemu; nikotynamid.',
                use: 'Sposób użycia',
                useT: 'Dla dorosłych: 1 kapsułka dziennie, z posiłkiem.',
                store: 'Przechowywanie i ważne informacje',
                storeT: 'Chronić przed dziećmi. Nie przekraczać zalecanej dziennej porcji. Przechowywać w oryginalnym opakowaniu, w suchym miejscu, w temperaturze pokojowej. Suplementy diety nie zastępują zróżnicowanej, zrównoważonej diety i zdrowego stylu życia.',
                made: 'Wyprodukowano',
                madeT: 'W Unii Europejskiej, na zlecenie Pharmalogic LTD, 9130 Bułgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Pytania: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Marine Collagen jest suplementem diety, nie lekiem. Nie jest przeznaczony do diagnozowania, leczenia, wyleczenia ani zapobiegania chorobom. Zawiera rybę.'
            })
        },
        urinary: {
            en: extraUrinary({
                facts: 'Supplement Facts',
                ingredientsCol: 'Ingredients',
                oneCap: '1 capsule',
                dman: 'D-Mannose',
                cran: 'Cranberry (Vaccinium macrocarpon Aiton) fruit extract 50:1',
                cranAmt: '2 mg extract, equivalent to 100 mg cranberry',
                nrv: '*NRV — Nutrient Reference Value. This formula is not standardised for NRV vitamins or minerals.',
                when: 'When it can fit a daily routine',
                w1: 'As part of everyday urinary wellness habits, together with hydration and personal care.',
                w2: 'During travel, busy periods, a change of climate or cooler weather.',
                w3: 'A convenient 30-day supply for a daily routine on the go.',
                w4: 'Not a treatment for an active urinary tract infection. If you have frequent symptoms, speak with a qualified healthcare professional.',
                how: 'How to use',
                how1: 'Adults: 1 capsule daily, with food.',
                how2: 'Stay well hydrated throughout the day.',
                how3: '30 capsules — a 30-day course at one capsule a day.',
                how4: 'Use during pregnancy and lactation is not recommended.',
                ingredients: 'Ingredients',
                ingredientsT: 'D-mannose; bulking agent: microcrystalline cellulose; capsule shell: hydroxypropyl methylcellulose; anti-caking agents: silicon dioxide, magnesium stearate; cranberry (Vaccinium macrocarpon Aiton) fruit extract 50:1.',
                store: 'Storage and important information',
                storeT: 'Keep out of reach of children. Do not exceed the recommended daily dose. Store in the original package, in a dry place, at room temperature. Food supplements should not replace a varied, balanced diet and a healthy lifestyle.',
                made: 'Manufactured',
                madeT: 'In the European Union, on the order of Pharmalogic LTD, 9130 Bulgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Questions: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Urinary Complex is a food supplement, not a medicine. It is not intended to diagnose, treat, cure or prevent disease. Laboratory mechanisms described for D-mannose and cranberry do not automatically mean clinically proven benefits at this dose.'
            }),
            de: extraUrinary({
                facts: 'Nährwertangaben',
                ingredientsCol: 'Inhaltsstoffe',
                oneCap: '1 Kapsel',
                dman: 'D-Mannose',
                cran: 'Cranberry-Fruchtextrakt (Vaccinium macrocarpon Aiton) 50:1',
                cranAmt: '2 mg Extrakt, entsprechend 100 mg Cranberry',
                nrv: '*NRV — Nährstoffbezugswert. Diese Formel ist nicht auf NRV-Vitamine oder -Mineralstoffe standardisiert.',
                when: 'Wann es in den Alltag passen kann',
                w1: 'Als Teil alltäglicher Gewohnheiten für das Wohlbefinden der Harnwege — zusammen mit ausreichend Flüssigkeit und persönlicher Pflege.',
                w2: 'Bei Reisen, stressigen Phasen, Klimawechsel oder kühlerem Wetter.',
                w3: 'Praktischer 30-Tage-Vorrat für die tägliche Routine unterwegs.',
                w4: 'Kein Mittel gegen eine akute Harnwegsinfektion. Bei häufigen Beschwerden eine qualifizierte Fachperson aufsuchen.',
                how: 'Anwendung',
                how1: 'Erwachsene: 1 Kapsel täglich zu einer Mahlzeit.',
                how2: 'Über den Tag verteilt gut hydriert bleiben.',
                how3: '30 Kapseln — 30 Tage bei einer Kapsel täglich.',
                how4: 'Während Schwangerschaft und Stillzeit nicht empfohlen.',
                ingredients: 'Zutaten',
                ingredientsT: 'D-Mannose; Füllstoff: mikrokristalline Cellulose; Kapselhülle: Hydroxypropylmethylcellulose; Trennmittel: Siliciumdioxid, Magnesiumstearat; Cranberry-Fruchtextrakt (Vaccinium macrocarpon Aiton) 50:1.',
                store: 'Lagerung und wichtige Hinweise',
                storeT: 'Außerhalb der Reichweite von Kindern aufbewahren. Die empfohlene Tagesdosis nicht überschreiten. In der Originalverpackung, trocken und bei Raumtemperatur lagern. Nahrungsergänzungsmittel ersetzen keine abwechslungsreiche, ausgewogene Ernährung und einen gesunden Lebensstil.',
                made: 'Hergestellt',
                madeT: 'In der Europäischen Union im Auftrag von Pharmalogic LTD, 9130 Bulgarien, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Fragen: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Urinary Complex ist ein Nahrungsergänzungsmittel, kein Arzneimittel. Es ist nicht dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder vorzubeugen. Labor-Mechanismen zu D-Mannose und Cranberry bedeuten nicht automatisch einen klinisch belegten Nutzen in dieser Dosierung.'
            }),
            bg: extraUrinary({
                facts: 'Хранителна информация',
                ingredientsCol: 'Съставки',
                oneCap: '1 капсула',
                dman: 'D-манноза',
                cran: 'Екстракт от плод на червена боровинка (Vaccinium macrocarpon Aiton) 50:1',
                cranAmt: '2 mg екстракт, еквивалент на 100 mg плод',
                nrv: '*NRV — референтна хранителна стойност. Формулата не е стандартизирана към NRV витамини или минерали.',
                when: 'Кога може да се впише в ежедневието',
                w1: 'Като част от ежедневни навици за комфорт на пикочните пътища — заедно с хидратация и лична грижа.',
                w2: 'При пътуване, натоварени периоди, смяна на климата или по-хладно време.',
                w3: 'Удобен запас за 30 дни в движение.',
                w4: 'Не е лечение на активна инфекция на пикочните пътища. При чести симптоми се консултирайте с квалифициран специалист.',
                how: 'Начин на употреба',
                how1: 'За възрастни: 1 капсула дневно, с храна.',
                how2: 'Поддържайте добра хидратация през деня.',
                how3: '30 капсули — курс от 30 дни при една капсула дневно.',
                how4: 'Не се препоръчва при бременност и кърмене.',
                ingredients: 'Съставки',
                ingredientsT: 'D-манноза; пълнител: микрокристална целулоза; обвивка на капсулата: хидроксипропилметилцелулоза; антислепващи агенти: силициев диоксид, магнезиев стеарат; екстракт от плод на червена боровинка (Vaccinium macrocarpon Aiton) 50:1.',
                store: 'Съхранение и важна информация',
                storeT: 'Да се пази далеч от деца. Да не се превишава препоръчителната дневна доза. Да се съхранява в оригиналната опаковка, на сухо място, при стайна температура. Хранителните добавки не заместват разнообразното и балансирано хранене и здравословния начин на живот.',
                made: 'Произведено',
                madeT: 'В Европейския съюз, по поръчка на Pharmalogic LTD, 9130 България, с. Близнаци, кк Камчия 21-4.',
                questions: 'Въпроси: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Urinary Complex е хранителна добавка, а не лекарство. Не е предназначена за диагностика, лечение, излекуване или профилактика на заболявания. Лабораторните механизми на D-маннозата и червената боровинка не означават автоматично доказана клинична полза при тази доза.'
            }),
            ro: extraUrinary({
                facts: 'Informații nutriționale',
                ingredientsCol: 'Ingrediente',
                oneCap: '1 capsulă',
                dman: 'D-manoză',
                cran: 'Extract de fruct de merișor (Vaccinium macrocarpon Aiton) 50:1',
                cranAmt: '2 mg extract, echivalent cu 100 mg merișor',
                nrv: '*VNR — valoare nutritivă de referință. Formula nu este standardizată pentru vitamine sau minerale VNR.',
                when: 'Când se poate potrivi în rutina zilnică',
                w1: 'Ca parte a obiceiurilor zilnice pentru confortul tractului urinar, împreună cu hidratare și grijă personală.',
                w2: 'În călătorii, perioade aglomerate, schimbare de climă sau vreme mai rece.',
                w3: 'Rezervă convenabilă pentru 30 de zile, ușor de luat cu tine.',
                w4: 'Nu este tratament pentru o infecție urinară activă. Dacă ai simptome frecvente, consultă un profesionist calificat.',
                how: 'Mod de utilizare',
                how1: 'Adulți: 1 capsulă pe zi, la masă.',
                how2: 'Menține o hidratare bună pe parcursul zilei.',
                how3: '30 de capsule — 30 de zile la o capsulă pe zi.',
                how4: 'Nu este recomandat în sarcină și alăptare.',
                ingredients: 'Ingrediente',
                ingredientsT: 'D-manoză; agent de încărcare: celuloză microcristalină; înveliș capsulă: hidroxipropilmetilceluloză; antiaglomeranți: dioxid de siliciu, stearat de magneziu; extract de fruct de merișor (Vaccinium macrocarpon Aiton) 50:1.',
                store: 'Păstrare și informații importante',
                storeT: 'A nu se lăsa la îndemâna copiilor. A nu se depăși doza zilnică recomandată. A se păstra în ambalajul original, într-un loc uscat, la temperatura camerei. Suplimentele alimentare nu înlocuiesc o dietă variată, echilibrată și un stil de viață sănătos.',
                made: 'Fabricat',
                madeT: 'În Uniunea Europeană, la comanda Pharmalogic LTD, 9130 Bulgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Întrebări: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Urinary Complex este un supliment alimentar, nu un medicament. Nu este destinat diagnosticării, tratării, vindecării sau prevenirii bolilor. Mecanismele de laborator pentru D-manoză și merișor nu înseamnă automat beneficii clinice demonstrate la această doză.'
            }),
            hu: extraUrinary({
                facts: 'Tápanyag-összetétel',
                ingredientsCol: 'Összetevők',
                oneCap: '1 kapszula',
                dman: 'D-mannóz',
                cran: 'Vörösáfonya-gyümölcskivonat (Vaccinium macrocarpon Aiton) 50:1',
                cranAmt: '2 mg kivonat, 100 mg vörösáfonyának felel meg',
                nrv: '*NRV — tápanyag-referenciamennyiség. A formula nincs NRV-vitaminokra vagy -ásványi anyagokra standardizálva.',
                when: 'Mikor illeszkedhet a napi rutinba',
                w1: 'A húgyúti jóllét mindennapi szokásainak részeként — folyadékbevitellel és személyes gondoskodással együtt.',
                w2: 'Utazáskor, leterhelt időszakokban, klímaváltozáskor vagy hűvösebb időben.',
                w3: 'Kényelmes 30 napos adag útközben.',
                w4: 'Nem kezelés aktív húgyúti fertőzésre. Gyakori tünetek esetén forduljon minősített szakemberhez.',
                how: 'Alkalmazás',
                how1: 'Felnőtteknek: napi 1 kapszula, étkezéssel.',
                how2: 'A nap folyamán maradj jól hidratált.',
                how3: '30 kapszula — 30 nap, napi egy kapszulával.',
                how4: 'Terhesség és szoptatás alatt nem ajánlott.',
                ingredients: 'Összetevők',
                ingredientsT: 'D-mannóz; tömegnövelő anyag: mikrokristályos cellulóz; kapszulahéj: hidroxipropil-metil-cellulóz; csomósodást gátló anyagok: szilícium-dioxid, magnézium-sztearát; vörösáfonya-gyümölcskivonat (Vaccinium macrocarpon Aiton) 50:1.',
                store: 'Tárolás és fontos tudnivalók',
                storeT: 'Gyermekektől elzárva tartandó. A javasolt napi adagot ne lépje túl. Eredeti csomagolásban, száraz helyen, szobahőmérsékleten tárolandó. Az étrend-kiegészítők nem helyettesítik a változatos, kiegyensúlyozott étrendet és az egészséges életmódot.',
                made: 'Gyártás',
                madeT: 'Az Európai Unióban, a Pharmalogic LTD megrendelésére, 9130 Bulgária, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Kérdések: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'A VITLZ Urinary Complex étrend-kiegészítő, nem gyógyszer. Nem betegség diagnosztizálására, kezelésére, gyógyítására vagy megelőzésére szolgál. A D-mannóz és a vörösáfonya laboratóriumi mechanizmusai nem jelentenek automatikusan igazolt klinikai előnyt ennél az adagnál.'
            }),
            pl: extraUrinary({
                facts: 'Składniki odżywcze',
                ingredientsCol: 'Składniki',
                oneCap: '1 kapsułka',
                dman: 'D-mannoza',
                cran: 'Ekstrakt z owocu żurawiny (Vaccinium macrocarpon Aiton) 50:1',
                cranAmt: '2 mg ekstraktu, odpowiednik 100 mg żurawiny',
                nrv: '*RWS — referencyjna wartość spożycia. Formuła nie jest standaryzowana na witaminy ani składniki mineralne RWS.',
                when: 'Kiedy może pasować do codziennej rutyny',
                w1: 'Jako część codziennych nawyków dbania o komfort dróg moczowych — wraz z nawodnieniem i higieną.',
                w2: 'W podróży, w napiętych okresach, przy zmianie klimatu lub chłodniejszej pogodzie.',
                w3: 'Wygodny zapas na 30 dni w drodze.',
                w4: 'To nie jest leczenie aktywnego zakażenia układu moczowego. Przy częstych objawach skonsultuj się z wykwalifikowanym specjalistą.',
                how: 'Sposób użycia',
                how1: 'Dorośli: 1 kapsułka dziennie, z posiłkiem.',
                how2: 'Dbaj o dobre nawodnienie w ciągu dnia.',
                how3: '30 kapsułek — 30 dni przy jednej kapsułce dziennie.',
                how4: 'Nie zaleca się w ciąży i podczas karmienia piersią.',
                ingredients: 'Składniki',
                ingredientsT: 'D-mannoza; substancja wypełniająca: celuloza mikrokrystaliczna; otoczka kapsułki: hydroksypropylometyloceluloza; substancje przeciwzbrylające: dwutlenek krzemu, stearynian magnezu; ekstrakt z owocu żurawiny (Vaccinium macrocarpon Aiton) 50:1.',
                store: 'Przechowywanie i ważne informacje',
                storeT: 'Chronić przed dziećmi. Nie przekraczać zalecanej dziennej porcji. Przechowywać w oryginalnym opakowaniu, w suchym miejscu, w temperaturze pokojowej. Suplementy diety nie zastępują zróżnicowanej, zrównoważonej diety i zdrowego stylu życia.',
                made: 'Wyprodukowano',
                madeT: 'W Unii Europejskiej, na zlecenie Pharmalogic LTD, 9130 Bułgaria, s. Bliznatsi, kk Kamchiya 21-4.',
                questions: 'Pytania: <a href="mailto:info@vitlz.eu">info@vitlz.eu</a>',
                disc: 'VITLZ Urinary Complex jest suplementem diety, nie lekiem. Nie jest przeznaczony do diagnozowania, leczenia, wyleczenia ani zapobiegania chorobom. Mechanizmy laboratoryjne D-mannozy i żurawiny nie oznaczają automatycznie klinicznie potwierdzonych korzyści przy tej dawce.'
            })
        }
    };

    function extraUrinary(t) {
        return `
            <img class="product-detail__lifestyle" src="images/product-details/urinary-how-to-use.jpg" alt="VITLZ Urinary Complex" />
            <h4>${t.how}</h4>
            <ul class="product-detail__uses">
                <li>${t.how1}</li>
                <li>${t.how2}</li>
                <li>${t.how3}</li>
                <li>${t.how4}</li>
            </ul>
            <h4>${t.when}</h4>
            <ul class="product-detail__uses">
                <li>${t.w1}</li>
                <li>${t.w2}</li>
                <li>${t.w3}</li>
                <li>${t.w4}</li>
            </ul>
            <h4>${t.facts}</h4>
            <div class="blog-table-wrap">
                <table class="blog-table product-detail__table">
                    <thead>
                        <tr>
                            <th>${t.ingredientsCol}</th>
                            <th>${t.oneCap}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>${t.dman}</td><td>400 mg</td></tr>
                        <tr><td>${t.cran}</td><td>${t.cranAmt}</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="product-detail__nrv">${t.nrv}</p>
            <h4>${t.ingredients}</h4>
            <p>${t.ingredientsT}</p>
            <h4>${t.store}</h4>
            <p>${t.storeT}</p>
            <h4>${t.made}</h4>
            <p>${t.madeT}</p>
            <p>${t.questions}</p>
            <p class="blog-disclaimer">${t.disc}</p>
        `;
    }

    function extraCollagen(t) {
        return `
            <img class="product-detail__lifestyle" src="images/product-details/collagen-lifestyle.jpg" alt="VITLZ Marine Collagen" />
            <h4>${t.about}</h4>
            <p>${t.aboutT}</p>
            <h4>${t.quality}</h4>
            <ul class="product-detail__uses">
                <li>${t.q1}</li>
                <li>${t.q2}</li>
                <li>${t.q3}</li>
                <li>${t.q4}</li>
                <li>${t.q5}</li>
            </ul>
            <h4>${t.facts}</h4>
            <div class="blog-table-wrap">
                <table class="blog-table product-detail__table">
                    <thead>
                        <tr>
                            <th>${t.ingredientsCol}</th>
                            <th>${t.oneCap}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>${t.b3}</td><td>16 mg (100%)</td></tr>
                        <tr><td>${t.c}</td><td>80 mg (100%)</td></tr>
                        <tr><td>${t.col}</td><td>400 mg</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="product-detail__nrv">${t.nrv}</p>
            <h4>${t.ingredients}</h4>
            <p>${t.ingredientsT}</p>
            <h4>${t.use}</h4>
            <p>${t.useT}</p>
            <h4>${t.store}</h4>
            <p>${t.storeT}</p>
            <h4>${t.made}</h4>
            <p>${t.madeT}</p>
            <p>${t.questions}</p>
            <p class="blog-disclaimer">${t.disc}</p>
        `;
    }

    function extraElectrolytes(t) {
        return `
            <img class="product-detail__lifestyle" src="images/product-details/electrolytes-lifestyle.jpg" alt="VITLZ Electrolytes Complex" />
            <h4>${t.when}</h4>
            <ul class="product-detail__uses">
                <li><strong>${t.training}.</strong> ${t.trainingT}</li>
                <li><strong>${t.travel}.</strong> ${t.travelT}</li>
                <li><strong>${t.active}.</strong> ${t.activeT}</li>
                <li><strong>${t.heat}.</strong> ${t.heatT}</li>
            </ul>
            <h4>${t.facts}</h4>
            <div class="blog-table-wrap">
                <table class="blog-table product-detail__table">
                    <thead>
                        <tr>
                            <th>${t.ingredientsCol}</th>
                            <th>${t.oneTab}</th>
                            <th>${t.twoTab}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>${t.calcium}</td><td>240 mg (30%)</td><td>480 mg (60%)</td></tr>
                        <tr><td>${t.chloride}</td><td>450 mg (56,25%)</td><td>900 mg (112,5%)</td></tr>
                        <tr><td>${t.potassium}</td><td>195 mg (9,75%)</td><td>390 mg (19,5%)</td></tr>
                        <tr><td>${t.magnesium}</td><td>50 mg (13,3%)</td><td>100 mg (26,6%)</td></tr>
                        <tr><td>${t.sodium}</td><td>100 mg</td><td>200 mg</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="product-detail__nrv">${t.nrv}</p>
            <h4>${t.ingredients}</h4>
            <p>${t.ingredientsT}</p>
            <h4>${t.use}</h4>
            <p>${t.useT}</p>
            <h4>${t.store}</h4>
            <p>${t.storeT}</p>
            <h4>${t.made}</h4>
            <p>${t.madeT}</p>
            <p>${t.questions}</p>
            <p class="blog-disclaimer">${t.disc}</p>
        `;
    }

    function fillStaticDetails() {
        const langNow = (window.I18N && window.I18N.current) || 'en';
        document.querySelectorAll('[data-static-detail]').forEach((el) => {
            const key = el.getAttribute('data-static-detail');
            const html = extras[key] && (extras[key][langNow] || extras[key].en);
            if (html) el.innerHTML = html;
        });
    }
    fillStaticDetails();
    window.addEventListener('i18n:change', fillStaticDetails);

    const modal = document.getElementById('product-detail-modal');
    if (!modal) return;

    const dialog = modal.querySelector('.product-detail__dialog');
    const titleEl = document.getElementById('product-detail-title');
    const imgEl = document.getElementById('product-detail-image');
    const taglineEl = document.getElementById('product-detail-tagline');
    const descEl = document.getElementById('product-detail-desc');
    const extraEl = document.getElementById('product-detail-extra');
    const actionsEl = document.getElementById('product-detail-actions');
    const closeBtn = modal.querySelector('.product-detail__close');
    let lastFocus = null;
    let currentCard = null;

    function lang() {
        return (window.I18N && window.I18N.current) || 'en';
    }

    function productKey(card) {
        return (card.id || '').replace(/^product-/, '');
    }

    function fillFromCard(card) {
        const img = card.querySelector('.product-image');
        const title = card.querySelector('.product-title');
        const tagline = card.querySelector('.product-tagline');
        const desc = card.querySelector('.product-desc');
        titleEl.textContent = title ? title.textContent.trim() : '';
        taglineEl.textContent = tagline ? tagline.textContent.trim() : '';
        descEl.textContent = desc ? desc.textContent.trim() : '';
        if (img) {
            imgEl.src = img.getAttribute('src');
            imgEl.alt = img.getAttribute('alt') || titleEl.textContent;
            imgEl.hidden = false;
        } else {
            imgEl.hidden = true;
        }
        const key = productKey(card);
        const extra = extras[key] && (extras[key][lang()] || extras[key].en);
        extraEl.innerHTML = extra || '';
        actionsEl.innerHTML = '';
        const sourceActions = card.querySelector('.product-actions');
        if (sourceActions) {
            actionsEl.appendChild(sourceActions.cloneNode(true));
        }
    }

    function open(card) {
        currentCard = card;
        lastFocus = document.activeElement;
        fillFromCard(card);
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (closeBtn) closeBtn.focus();
    }

    function close() {
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        currentCard = null;
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.querySelectorAll('.product-visual').forEach((visual) => {
        visual.setAttribute('role', 'button');
        visual.setAttribute('aria-haspopup', 'dialog');
        visual.addEventListener('click', () => {
            const card = visual.closest('.product-card');
            if (card) open(card);
        });
        visual.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const card = visual.closest('.product-card');
                if (card) open(card);
            }
        });
    });

    actionsEl.addEventListener('click', (event) => {
        const notify = event.target.closest('.buy-button');
        if (!notify || !currentCard) return;
        event.preventDefault();
        const original = currentCard.querySelector('.buy-button');
        close();
        if (original) original.click();
    });

    if (closeBtn) closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) close();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) close();
        if (event.key !== 'Tab' || !modal.classList.contains('is-visible')) return;
        const nodes = Array.from(dialog.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'));
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });
    window.addEventListener('i18n:change', () => {
        if (currentCard && modal.classList.contains('is-visible')) fillFromCard(currentCard);
    });
})();
