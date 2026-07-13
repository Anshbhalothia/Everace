import type { Product } from '../types/product';

export const heroImages = [
  '/images/everace-1.jpeg',
  '/images/everace-2.jpeg',
  '/images/everace-3.jpeg',
  '/images/everace-4.jpeg',
  '/images/everace-5.jpeg',
  '/images/everace-6.jpeg',
  '/images/everace-7.jpeg',
  '/images/everace-8.jpeg',
  '/images/everace-9.jpeg',
  '/images/everace-10.jpeg',
  '/images/everace-11.jpeg',
  '/images/everace-12.jpeg'
];

export const categories = [
  { title: 'Harvest Filaments', description: 'Pure, aromatic saffron reserves from the Himalayas.', slug: 'saffron' },
  { title: 'Premium Nuts', description: 'Curated whole native nuts from historical Kashmiri orchards.', slug: 'dry-fruits' },
  { title: 'Wellness Oils', description: 'Cold-pressed botanical oils with elegant Indian craftsmanship.', slug: 'oils' },
  { title: 'Artisanal Vine Reserves', description: 'Sun-dried ancient vine fruits and luxury sun-cured berries.', slug: 'preserves' },
];

export const testimonials = [
  {
    quote: 'EVERACE feels like a luxury ritual. Every product is quietly indulgent and deeply refined.',
    author: 'Aanya S.',
    role: 'Wellness Curator',
  },
  {
    quote: 'The design, the quality, the calmness of the experience is unlike any other wellness brand.',
    author: 'Dev G.',
    role: 'Interior Stylist',
  },
  {
    quote: 'From the first scent to the last bite, EVERACE brings premium Kashmiri authenticity to home rituals.',
    author: 'Mira P.',
    role: 'Lifestyle Editor',
  },
];

export const products: Product[] = [
  {
    id: 'rare-kashmiri-saffron',
    slug: 'kashmiri-saffron-premium-grade',
    title: 'Everace Kashmiri Saffron (Kesar)',
    category: 'Harvest Filaments',
    description: 'Pure Kashmiri saffron threads sourced from the high mountain valleys of purity.',
    origin: 'Pampore Highlands, Kashmir\nHand-harvested with artisanal care.',
    details: ['1g premium threads', 'Natural color intensity', 'Floral fragrance'],
    price: 2499,
    rating: 4.9,
    badge: 'Pure',
    images: ['/images/everace-16.jpeg', '/images/everace-5.jpeg', '/images/everace-6.jpeg'],
    variants: [
      { id: 'saffron-1g', label: '1g', price: 2499, inventory: 22 },
      { id: 'saffron-2g', label: '2g', price: 4499, inventory: 14 },
    ],
    story: 'From the valleys of purity. Hand-harvested with sunrise rituals, this saffron is crafted to elevate every wellness moment.',
    taste: 'Delicate floral, subtly earthy, rich and aromatic.',
    ingredients: ['100% Kashmiri Saffron Stigmas (Grade A++)'],
    storyStages: [
      {
        stage: "Stage 01 — Crimson Grading",
        title: "Atmospheric Dawn Selection",
        description: "Guild artisans carefully harvest the threads during a short two-week dawn matrix high in the fields of Pampore, when moisture index values are mathematically perfect."
      },
      {
        stage: "Stage 02 — Stigma Isolation",
        title: "Meticulous Lab Hand-Separation",
        description: "The deep crimson stigmas are meticulously separated by hand from the pale yellow styles within hours of harvesting to protect fragile organic crocin concentrations."
      },
      {
        stage: "Stage 03 — Curation & Vaulting",
        title: "Ultraviolet Shield Sealing",
        description: "The pure threads are natural-air cured under dark humidity controls and instantly vacuum-sealed into ultraviolet shielding glass cases to preserve volatile aromas permanently."
      }
    ],
    ledger: {
      harvest: "Once Annually (Autumn Solstice)",
      artisan: "Certified Multi-Gen Pampore Guild",
      purity: "100% Organic • Zero-Additive Reserve"
    }
  },
  {
    id: 'wild-blackberry',
    slug: 'wild-blackberry-reserve',
    title: 'Everace Sun-Cured Blackberries',
    category: 'Artisanal Vine Reserves',
    description: 'Gently dehydrated high-altitude blackberries, maintaining raw tartness and deep antioxidant reserves.',
    origin: 'Gurez Forest Margins, Kashmir\nForaged wild, dried under shaded canvas.',
    details: ['200g crystal jar', 'No added cane sugars', 'Rich in anthocyanins'],
    price: 1650,
    rating: 4.8,
    badge: 'Wild Foraged',
    images: ['/images/everace-14.jpeg', '/images/everace-15.jpeg'],
    variants: [{ id: 'blackberry-200g', label: '200g', price: 1650, inventory: 19 }],
    story: 'Foraged from remote forest floors, these berries are handled via temperature-neutral dehydration vectors to maintain their complex enzymatic depth.',
    taste: 'Deeply tart, complex woodsy body with sweet structural undertones.',
    ingredients: ['100% Wild Kashmiri Blackberries'],
    storyStages: [
      {
        stage: "Stage 01 — Wild Foraging",
        title: "Sub-Alpine Woodland Gathering",
        description: "Plucked piece-by-piece along untouched sub-alpine terrain when berries achieve maximum dark pigment accumulation."
      },
      {
        stage: "Stage 02 — Shaded Dehydration",
        title: "Low-Temperature Moisture Equalization",
        description: "Placed upon canvas screens in dark, naturally ventilated mountain rooms to gently evaporate ambient moisture levels without heating raw juices."
      },
      {
        stage: "Stage 03 — Micro-Batch Boxing",
        title: "Hand Appraisal Vaulting",
        description: "Each clusters is manually inspected to eliminate burst berries, instantly locking down original organic structure."
      }
    ],
    ledger: {
      harvest: "Mid-Summer (Monsoon Breaks)",
      artisan: "Gurez Indigenous Woodland Foragers",
      purity: "Unsulfured • Zero Added Concentrates"
    }
  },
  {
    id: 'mountain-cranberry',
    slug: 'mountain-cranberry-reserve',
    title: 'Everace Mountain Cranberries',
    category: 'Artisanal Vine Reserves',
    description: 'Crimson mountain cranberries slow-cured under natural high-altitude solar rays.',
    origin: 'Sonamarg Slopes, Kashmir\nSourced from small alpine allotments.',
    details: ['250g pack', 'Whole plump state', 'Vitamin C dense'],
    price: 1450,
    rating: 4.7,
    images: ['/images/everace-12.jpeg', '/images/everace-13.jpeg'],
    variants: [{ id: 'cranberry-250g', label: '250g', price: 1450, inventory: 25 }],
    story: 'Grown on steep sub-zero elevations, these cranberries develop a defensive skin layout packed with highly concentrated organic acids.',
    taste: 'Brilliant vibrant snap, refreshing tartness, minimal sweetness.',
    ingredients: ['100% Whole Kashmiri Cranberries'],
    storyStages: [
      {
        stage: "Stage 01 — Cold Harvest",
        title: "Sub-Zero Allotment Clipping",
        description: "Collected after the first frost, which triggers a biological signal within the berry to double its interior nutrient density values."
      },
      {
        stage: "Stage 02 — Solar Matte Finish",
        title: "Controlled Sun-Baking",
        description: "Exposed to indirect highland mountain solar arrays over 10 days to achieve a plump, semi-dehydrated state without collapsing core cell walls."
      },
      {
        stage: "Stage 03 — Quality Sort",
        title: "Color Saturation Matrix Audit",
        description: "Only berries reaching deep translucent ruby saturation levels are allocated into our premium retail glass storage units."
      }
    ],
    ledger: {
      harvest: "Late Autumn (Post-Frost)",
      artisan: "Sonamarg Glacial Terrace Allotments",
      purity: "100% Whole Fruit • Zero Artificial Glazes"
    }
  },
  {
    id: 'mamra-almonds',
    slug: 'premium-mamra-almonds-kashmir',
    title: 'Everace Kashmiri Mamra Almonds',
    category: 'Premium Nuts',
    description: 'Crisp, single-estate almonds oil-rich and cultivated natively without computational intervention in limited historical blocks.',
    origin: 'Pulwama Orchards, Kashmir\nNurtured purely under glacial runoffs.',
    details: ['500g luxury pouch', 'High natural oil content', 'Distinct concave shape'],
    price: 3600,
    rating: 4.9,
    badge: 'Elite Lot',
    images: ['/images/everace-4.jpeg', '/images/everace-3.jpeg'],
    variants: [
      { id: 'almond-500g', label: '500g', price: 3600, inventory: 40 },
      { id: 'almond-1kg', label: '1kg', price: 6800, inventory: 18 }
    ],
    story: 'Nurtured purely under mountain runoffs, these concave kernels are globally recognized for maximum natural vitamin E storage properties.',
    taste: 'Intensely crunchy, buttery sweet profile with a prominent natural almond oil layer.',
    ingredients: ['100% Single-Estate Kashmiri Mamra Almonds'],
    storyStages: [
      {
        stage: "Stage 01 — Glacial Cultivation",
        title: "Snowmelt Irrigation Sourcing",
        description: "Sourced from ancient heirloom trees nourished entirely by high-altitude mineral-dense snowmelt runoffs."
      },
      {
        stage: "Stage 02 — Terrace Air-Curing",
        title: "Traditional In-Shell Shaded Drying",
        description: "Harvested pods dry slowly inside ventilated farm lofts, allowing internal kernel fats to cure without losing structural value."
      },
      {
        stage: "Stage 03 — Acoustic Auditing",
        title: "Manual Sound Density Sort",
        description: "Every nut is manually cracked and sorted by hollow auditory pitch to ensure zero shriveled kernels reach our final storage."
      }
    ],
    ledger: {
      harvest: "Once Yearly (Late Summer)",
      artisan: "Pulwama Traditional Nut Growers Guild",
      purity: "Unbleached • Non-Pasteurized Raw Kernels"
    }
  },
  {
    id: 'premium-walnuts',
    slug: 'premium-kashmiri-walnuts',
    title: 'Everace Premium Walnuts (Akhrot)',
    category: 'Premium Nuts',
    description: 'Handpicked walnut halves with a quiet luxury finish and smooth natural richness.',
    origin: 'Anantnag Groves, Kashmir\nSlow-dried for purity.',
    details: ['250g pack', 'Rich omega profile', 'Naturally preserved'],
    price: 1299,
    rating: 4.8,
    images: ['/images/everace-8.jpeg', '/images/everace-7.jpeg', '/images/everace-9.jpeg'],
    variants: [
      { id: 'walnuts-250g', label: '250g', price: 1299, inventory: 34 },
      { id: 'walnuts-500g', label: '500g', price: 2399, inventory: 20 }
    ],
    story: 'Everace walnuts are chosen from the finest Kashmir groves, presenting a nourishing luxury that feels both modern and timeless.',
    taste: 'Buttery, warm, slightly earthy with textured richness.',
    ingredients: ['100% premium walnuts'],
    storyStages: [
      {
        stage: "Stage 01 — Selection",
        title: "Wild Shell Appraisals",
        description: "Elite light-colored walnut kernels are manually handpicked and audited to discard any bitter variations before packing."
      },
      {
        stage: "Stage 02 — Shaded Dehydration",
        title: "Slow Low-Heat Air Curing",
        description: "The unshelled walnuts are cured slowly in dark, ventilated mountain cellars to naturalize humidity levels and prevent the inner oils from oxidizing."
      },
      {
        stage: "Stage 03 — Structural Sorting",
        title: "Intact Whole Half Extraction",
        description: "Artisans manually crack the outer shells using precise hand pressure to extract completely intact halves without fracturing internal cell structures."
      }
    ],
    ledger: {
      harvest: "Seasonal Winter Forage",
      artisan: "Anantnag Highland Growers Estate",
      purity: "Completely Unbleached • Raw Whole Halves"
    }
  },
  {
    id: 'green-kishmis',
    slug: 'kashmiri-green-raisins-reserve',
    title: 'Everace Emerald Long Raisins (Kishmis)',
    category: 'Artisanal Vine Reserves',
    description: 'Elegant, slender green raisins shade-dried slowly in traditional mud brick towers.',
    origin: 'Bijbehara Vineyards, Kashmir\nAir-cured horizontally to protect skin integrity.',
    details: ['400g glass jar', 'Naturally sweet', 'No sulfur treatment'],
    price: 950,
    rating: 4.8,
    images: ['/images/everace-1.jpeg', '/images/everace-4.jpeg'],
    variants: [{ id: 'kishmis-400g', label: '400g', price: 950, inventory: 31 }],
    story: 'These long-form green grapes are dehydrated away from direct sunlight inside mud towers, preserving their translucent emerald green hue and deep internal fructose matrix.',
    taste: 'Delicately sweet, smooth skin snap, bright clean finish.',
    ingredients: ['100% Shade-Dried Seedless Green Grapes'],
    storyStages: [
      {
        stage: "Stage 01 — Vine Selection",
        title: "Elongated Cluster Picking",
        description: "Only elongated, loose clusters are harvested by hand to ensure air flow matches perfectly during the dehydration process."
      },
      {
        stage: "Stage 02 — Tower Shading",
        title: "Traditional Kishmis Khana Curing",
        description: "Hung vertically on jute strings inside traditional high-altitude mud brick towers where constant crosswinds dry the fruit away from solar bleaching."
      },
      {
        stage: "Stage 03 — Stem Sorting",
        title: "Manual Micro-Friction Shelling",
        description: "Each raisin is separated from its secondary stem structure using soft friction beds, ensuring the outer fruit skin stays completely unbroken."
      }
    ],
    ledger: {
      harvest: "Late Summer (Vine Over-Ripening)",
      artisan: "Bijbehara Artisan Vine Guild",
      purity: "Sulfur-Free • No Artificial Oil Coating"
    }
  },
  {
    id: 'black-kishmis',
    slug: 'black-muscat-raisins-seedless',
    title: 'Everace Black Muscat Raisins',
    category: 'Artisanal Vine Reserves',
    description: 'Rare seedless black raisins made from mountain-grown Muscat grapes, naturally sun-cured for rich mineral preservation.',
    origin: 'Shopian Terraces, Kashmir\nSun-dried slowly on elevated clean stone mats.',
    details: ['400g glass jar', 'High iron count', 'Seedless variety'],
    price: 1100,
    rating: 4.9,
    badge: 'Exclusive',
    images: ['/images/everace-2.jpeg', '/images/everace-5.jpeg'],
    variants: [{ id: 'black-kishmis-400g', label: '400g', price: 1100, inventory: 16 }],
    story: 'Sun-cured directly on open terraces, these dark grapes oxidize naturally, developing a profound caramel complexity and dense iron values.',
    taste: 'Intense rich dark profile, dark chocolate and fig notes.',
    ingredients: ['100% Sun-Dried Seedless Black Muscat Grapes'],
    storyStages: [
      {
        stage: "Stage 01 — Terrace Clipping",
        title: "Sugar-Peak Vineyard Selection",
        description: "Grapes are kept on vines until sugar metrics reach maximum capacity, concentrating depth before collection."
      },
      {
        stage: "Stage 02 — Solar Charring",
        title: "Elevated Stone Mat Sun Drying",
        description: "Laid horizontally across elevated slate stone structures to pick up clean thermal heat, turning the skins a deep, rich natural black."
      },
      {
        stage: "Stage 03 — Moisture Gauge",
        title: "Elasticity Hand Tests",
        description: "Artisans physically compress samples to check internal moisture levels, keeping the internal fruit texture rich and jammy."
      }
    ],
    ledger: {
      harvest: "Early Autumn (Pre-Rain)",
      artisan: "Shopian Terrace Viticulturists",
      purity: "100% Untreated • Zero Mineral Oil Glazes"
    }
  },
  {
    id: 'munaka-reserve',
    slug: 'kashmiri-munaka-with-seeds',
    title: 'Everace Heritage Abjosh Munakka',
    category: 'Artisanal Vine Reserves',
    description: 'Large, seeded heritage raisins processed using ancient flash-blanching extraction techniques.',
    origin: 'Pampore Foothills, Kashmir\nBoiled briefly in spring water, sun-cured.',
    details: ['300g crystal jar', 'Therapeutic grade', 'Large seeded fruit'],
    price: 1350,
    rating: 4.9,
    images: ['/images/everace-3.jpeg', '/images/everace-6.jpeg'],
    variants: [{ id: 'munaka-300g', label: '300g', price: 1350, inventory: 22 }],
    story: 'Preserving the interior seed structure is a traditional secret; the seed contains essential phytochemicals that enrich the sweet pulp during the sun-curing process.',
    taste: 'Deeply sweet, complex honey-like flavor with an authentic, textured seeded crunch.',
    ingredients: ['100% Ancient Variety Large Seeded Grapes'],
    storyStages: [
      {
        stage: "Stage 01 — Heritage Sorting",
        title: "Thick-Skin Grape Selection",
        description: "Harvested from ancient, low-yield seeded vines that produce grapes with robust skin structures capable of managing blanching stresses."
      },
      {
        stage: "Stage 02 — The Abjosh Ritual",
        title: "Spring Water Thermal Blanching",
        description: "Clusters undergo flash immersion in boiling mineral spring water for seconds to micro-fracture the skin layer, accelerating the natural dehydration process."
      },
      {
        stage: "Stage 03 — Solar Curing",
        title: "Suspended Line Sun Drying",
        description: "Blanched clusters dry on linen cords beneath open skies, developing a translucent golden-amber color profile."
      }
    ],
    ledger: {
      harvest: "Autumn Equinox Cycle",
      artisan: "Pampore Valley Heritage Connoisseurs",
      purity: "Traditional Abjosh Processed • Intact Seeds"
    }
  },
  {
    id: 'white-honey-reserve',
    slug: 'rare-white-honey-sheshnag',
    title: 'Everace Sheshnag White Honey',
    category: 'Honey Reserves',
    description: 'An exceptionally rare, thick white honey gathered from wild alpine flora near glacial peaks.',
    origin: 'Sheshnag Altitudes, Kashmir\n harvested from high-elevation wildflower zones.',
    details: ['350g crystal jar', 'Naturally opaque white texture', 'Rich trace minerals'],
    price: 2800,
    rating: 5.0,
    badge: 'Ultra Rare',
    images: ['/images/everace-12.jpeg', '/images/everace-15.jpeg'],
    variants: [{ id: 'white-honey-350g', label: '350g', price: 2800, inventory: 8 }],
    story: 'Collected at altitudes exceeding 11,000 feet, this premium white honey crystallizes naturally due to cold weather, preserving its sweet, delicate floral aroma.',
    taste: 'Soft, creamy cream-like consistency with clean, subtle hints of alpine clover.',
    ingredients: ['100% Raw Unheated White Kashmiri Honey'],
    storyStages: [
      {
        stage: "Stage 01 — Glacial Foraging",
        title: "Alpine Blossom Nectar Hunt",
        description: "Bees forage exclusively on short-lived alpine blossoms growing near high-altitude glacial meadows during mid-summer."
      },
      {
        stage: "Stage 02 — Cold Extraction",
        title: "Zero-Heat Comb Spinning",
        description: "Extracted carefully in high-altitude environments using traditional cold spinners to protect raw active enzymes from collapsing."
      },
      {
        stage: "Stage 03 — Natural Opaque Cure",
        title: "Cellar Crystallization Tracking",
        description: "Stored inside deep stone vaults where precise chilly conditions set the signature creamy, opaque white micro-crystalline matrix perfectly."
      }
    ],
    ledger: {
      harvest: "Limited Micro-Batch Summer Forage",
      artisan: "Sheshnag High-Altitude Apiary Guild",
      purity: "Raw Unfiltered • 100% Mono-Floral Origin"
    }
  },
  {
    id: 'kahwa-sugar-free',
    slug: 'kashmiri-kahwa-saffron-infused-sugar-free',
    title: 'Everace Royal Kahwa Elixir (Sugar-Free)',
    category: 'Harvest Filaments',
    description: 'An elite, unsweetened botanical blend of signature green tea leaves, dynamic spices, and premium saffron filaments.',
    origin: 'Srinagar Spice Estates, Kashmir\nBlended manually using strict traditional measures.',
    details: ['150g presentation tin', 'Zero added sweeteners', 'Infused with Grade-A Saffron'],
    price: 1350,
    rating: 4.9,
    images: ['/images/everace-3.jpeg', '/images/everace-16.jpeg'],
    variants: [{ id: 'kahwa-150g', label: '150g', price: 1350, inventory: 45 }],
    story: 'A highly refined version of the classic celebratory welcome drink. Formulated without sugars or fillers to highlight the clean notes of cardamom and real saffron.',
    taste: 'Boldly aromatic, clear green tea warmth, with an extended sweet saffron finish.',
    ingredients: ['Kashmiri Green Tea Leaves', 'Pampore Saffron Filaments', 'Crushed Green Cardamom', 'Almond Flakes', 'Cinnamon Bark'],
    storyStages: [
      {
        stage: "Stage 01 — Leaf Selection",
        title: "High-Altitude Green Tea Forage",
        description: "Handpicking young, whole green tea leaves showing optimal antioxidant retention levels."
      },
      {
        stage: "Stage 02 — Spice Bruising",
        title: "Manual Stone Mortar Crushing",
        description: "Whole cardamom and cinnamon are gently bruised in small stone mortars right before blending to unlock fresh aromatic essential oils."
      },
      {
        stage: "Stage 03 — Filament Infusion",
        title: "Dry Saffron Thread Integration",
        description: "The spice tea baseline is delicately mixed with whole strands of Pampore Saffron inside small timber curing rotating bins."
      }
    ],
    ledger: {
      harvest: "Small-Batch Hand Crafted Blending",
      artisan: "Srinagar Royal Heritage Herb Masters",
      purity: "Zero Preservatives • Keto & Sugar-Free Formulation"
    }
  },
  {
    id: 'premium-anjeer',
    slug: 'premium-kashmiri-anjeer-sun-dried',
    title: 'Everace Sun-Dried Royal Figs (Anjeer)',
    category: 'Artisanal Vine Reserves',
    description: 'Whole, loop-strung premium mountain figs slow-dried to a perfect jammy texture.',
    origin: 'Kashmir Outskirts\nNaturally air-cured on high cotton strings.',
    details: ['400g glass jar', 'Plump jammy interior', 'High dietary fiber'],
    price: 1850,
    rating: 4.8,
    badge: 'Reserve',
    images: ['/images/everace-4.jpeg', '/images/everace-7.jpeg'],
    variants: [{ id: 'anjeer-400g', label: '400g', price: 1850, inventory: 20 }],
    story: 'Sourced from selected high-sugar mountain trees, these figs are pierced and dried vertically to allow active air currents to evenly cure the inner pulp.',
    taste: 'Deeply sweet, soft honeyed texture, clean chewy finish.',
    ingredients: ['100% Whole Kashmiri Figs'],
    storyStages: [
      {
        stage: "Stage 01 — Ripeness Check",
        title: "Tree-Ripened Sugar Appraisal",
        description: "Figs are picked only when they drop slightly on the branch, confirming natural structural sugars have fully developed."
      },
      {
        stage: "Stage 02 — Garland Threading",
        title: "Vertical Cotton Cord Stringing",
        description: "Artisans manually thread the fruit into long vertical garlands, allowing constant wind to pass around each piece evenly."
      },
      {
        stage: "Stage 03 — Flat Compression",
        title: "Manual Disc Press Form",
        description: "The dried figs are gently pressed into disc profiles, setting the smooth jammy interior without drying out the fruit skin."
      }
    ],
    ledger: {
      harvest: "Late Summer Crop Allocation",
      artisan: "Traditional Garland Curing Collectives",
      purity: "No Added Sulfur • Non-Sugar Glazed"
    }
  },
  {
    id: 'glace-cherry',
    slug: 'kashmiri-ruby-cherries-dehydrated',
    title: 'Everace Sun-Preserved Ruby Cherries',
    category: 'Artisanal Vine Reserves',
    description: 'Pitted whole Kashmiri sweet cherries slow-dehydrated to preserve their deep scarlet hue.',
    origin: 'Shopian Orchards, Kashmir\nPitted manually, solar-dried gently.',
    details: ['250g crystal jar', 'Intact ruby skins', 'Rich in natural melatonin'],
    price: 1250,
    rating: 4.8,
    images: ['/images/everace-1.jpeg', '/images/everace-5.jpeg'],
    variants: [{ id: 'cherry-250g', label: '250g', price: 1250, inventory: 29 }],
    story: 'Grown in the historical cherry belts of Shopian, these fruits undergo delicate hand-pitting and sun-curing to retain their clean, authentic flavor profile.',
    taste: 'Bright deep tartness balanced perfectly with concentrated natural fruit sweetness.',
    ingredients: ['100% Pitted Kashmiri Ruby Cherries'],
    storyStages: [
      {
        stage: "Stage 01 — Sorting",
        title: "Firmness Structural Screening",
        description: "Only dark, crisp cherries are selected for processing. Any over-soft fruits are rejected to avoid moisture collapse during drying."
      },
      {
        stage: "Stage 02 — Pitting",
        title: "Manual Needle Needle Extraction",
        description: "The interior pits are removed using high-precision wire tools, keeping the outer circular silhouette completely round and intact."
      },
      {
        stage: "Stage 03 — Curing",
        title: "Slow Canvas Solar Mat Setting",
        description: "Laid out evenly across breathable natural linen blankets to absorb soft warmth until they reach a clean, leather-like texture."
      }
    ],
    ledger: {
      harvest: "Early Summer Gathering (June)",
      artisan: "Shopian High-Fruit Orchard Cooperatives",
      purity: "No High-Fructose Corn Syrup Glazing • Chemical Dye Free"
    }
  },
  {
    id: 'organic-honey',
    slug: 'organic-kashmiri-sidr-honey',
    title: 'Everace Wild Sidr Honey',
    category: 'Honey Reserves',
    description: 'Monofloral honey collected from wild Sidr (Ber) trees in remote canyon segments.',
    origin: 'Unmapped Kashmir Canyons\nRaw extraction without fine-filtering.',
    details: ['500g heavy jar', 'High enzymatic value', 'Thick medicinal consistency'],
    price: 1950,
    rating: 4.9,
    images: ['/images/everace-12.jpeg', '/images/everace-14.jpeg'],
    variants: [{ id: 'honey-500g', label: '500g', price: 1950, inventory: 24 }],
    story: 'Revered globally for its potent therapeutic properties, our raw Sidr honey is hand-harvested twice a year by artisans tracking mountain migratory bees.',
    taste: 'Rich, peppery caramel depth with a complex herbal finish.',
    ingredients: ['100% Pure Monofloral Wild Sidr Honey'],
    storyStages: [
      {
        stage: "Stage 01 — Canyon Scouting",
        title: "Sidr Blossom Tracking",
        description: "Apiaries travel deep into rocky valley corridors during the unique autumn blossom window of the native Sidr tree."
      },
      {
        stage: "Stage 02 — Centrifugation",
        title: "Low-RPM Stainless Spinning",
        description: "Combs undergo gentle cold spinning without modern heat pipes, keeping the live botanical pollens intact."
      },
      {
        stage: "Stage 03 — Settling",
        title: "Natural Gravity Sieve Pack",
        description: "The raw honey is poured slowly through coarse mesh to separate debris while keeping beneficial microscopic elements inside."
      }
    ],
    ledger: {
      harvest: "Bi-Annual Limited Extractions",
      artisan: "Wild Valley Migratory Beekeepers Guild",
      purity: "Raw Unfiltered • Absolute Zero Sugar Feed Protocol"
    }
  },
  {
    id: 'plum-blueberry-blend',
    slug: 'plum-blueberry-sun-dried-mix',
    title: 'Everace Plum & Wild Blueberry Reserve',
    category: 'Artisanal Vine Reserves',
    description: 'A curated dual arrangement of sliced crimson plums and whole wild sub-alpine blueberries.',
    origin: 'Kashmir Highland Belts\nSlow sun-cured blend.',
    details: ['300g presentation jar', 'Curated aesthetic pairing', 'Tart flavor profile'],
    price: 1750,
    rating: 4.8,
    images: ['/images/everace-15.jpeg', '/images/everace-2.jpeg'],
    variants: [{ id: 'plum-blue-300g', label: '300g', price: 1750, inventory: 15 }],
    story: 'This curated pairing is built around balancing contrasting flavors: premium tart wild blueberries highlight the rich, honeyed chewiness of single-estate dried plums.',
    taste: 'Complex jammy bite opening into sharp sub-alpine berry notes.',
    ingredients: ['Sun-Dried Sliced Kashmiri Plums', 'Wild Foraged Himalayan Blueberries'],
    storyStages: [
      {
        stage: "Stage 01 — Harvest Layout",
        title: "Dual-Aesthetic Fruit Collection",
        description: "Crimson plums and deep indigo wild blueberries are picked at the same solar intersection to match acidity values."
      },
      {
        stage: "Stage 02 — Slicing & Curing",
        title: "Hand-Blade Plum Discing",
        description: "Plums are sliced into circular discs by hand, then set beside whole wild blueberries on matching solar processing screens."
      },
      {
        stage: "Stage 03 — Blending",
        title: "Tumble Vault Weight Calibration",
        description: "The two components are gently mixed to ensure equal distribution of visual textures and flavors throughout the lot."
      }
    ],
    ledger: {
      harvest: "Late Summer Alignment",
      artisan: "Highland Fruit Integration Curators",
      purity: "Zero Industrial Glycerin Sprays • Preservative Free"
    }
  },
  {
    id: 'wild-blueberry',
    slug: 'wild-himalayan-blueberry-dried',
    title: 'Everace Wild Sub-Alpine Blueberries',
    category: 'Artisanal Vine Reserves',
    description: 'Intense micro-lot blueberries foraged along high altitude ridgelines, air-dehydrated whole.',
    origin: 'Ladakh Borders, Kashmir\nForaged wild near high-altitude timberlines.',
    details: ['200g crystal jar', 'Micro-kernel intensely concentrated', 'Zero chemical additives'],
    price: 1550,
    rating: 4.9,
    images: ['/images/everace-13.jpeg', '/images/everace-16.jpeg'],
    variants: [{ id: 'blueberry-200g', label: '200g', price: 1550, inventory: 12 }],
    story: 'These rare wild blueberries are much smaller than commercial varieties, packing their deep flavor and rich skin nutrients into a tiny, intense berry profile.',
    taste: 'Crisp skin pop, concentrated zesty tartness, deep woody finish.',
    ingredients: ['100% Wild Himalayan Blueberries'],
    storyStages: [
      {
        stage: "Stage 01 — Border Climb",
        title: "Ridgeline Scree Foraging",
        description: "Foragers travel along high-altitude rocky scree fields to collect deep blue clusters from wild shrubs."
      },
      {
        stage: "Stage 02 — Screen Dehydration",
        title: "Dark Air Current Curing",
        description: "Berries rest inside dark, airy drying rooms to steadily shrink their size while concentrating their deep inner flavors."
      },
      {
        stage: "Stage 03 — Sieve Density Audit",
        title: "Size Filtration Sifting",
        description: "Sifted through custom sizing screens to collect only the dense, nutrient-heavy berries for packaging."
      }
    ],
    ledger: {
      harvest: "Late August Foraging Reserve",
      artisan: "High-Altitude Borderland Forager Networks",
      purity: "Wild Strain Non-Cultivated • Absolute Zero Cane Sugar Added"
    }
  },
  {
    id: 'walnut-oil',
    title: 'Cold-Pressed Walnut Elixir',
    slug: 'cold-pressed-walnut-oil-premium',
    category: 'Wellness Oils',
    description: 'An extraordinary sensory cosmetic and culinary asset extracted slowly using custom traditional wood-press mechanisms.',
    price: 1800,
    rating: 4.8,
    origin: 'Anantnag Highlands, Kashmir\nPressed with calm precision.',
    details: ['250ml glass bottle', 'Cold-pressed', 'Luxury skincare oil'],
    images: ['/images/everace-6.jpeg', '/images/everace-7.jpeg'],
    variants: [{ id: 'oil-250ml', label: '250ml', price: 1800, inventory: 18 }],
    story: 'Extracted without temperature elevation using slow stone rotation variables to prevent fragile bio-actives from collapsing.',
    taste: 'Extremely light fluid consistency with a pure editorial nutty fragrance.',
    ingredients: ['100% Virgin Cold-Pressed Kashmiri Walnut Kernels'],
    storyStages: [
      {
        stage: "Stage 01 — Selection",
        title: "Wild Shell Appraisals",
        description: "Elite light-colored walnut kernels are manually handpicked and audited to discard any bitter variations before oil extraction pipelines begin."
      },
      {
        stage: "Stage 02 — Extraction",
        title: "Wooden Kani Pressing",
        description: "Kernels undergo cold extraction on ultra-slow rotating wooden mills to ensure processing heat readings never cross 30°C, maintaining premium organic molecular integrity."
      },
      {
        stage: "Stage 03 — Purification",
        title: "Zero-Pressure Sedimentation",
        description: "The liquid naturally settles in temperature-controlled glass vaults over 14 days, naturally filtering clear without harsh centrifugal machinery."
      }
    ],
    ledger: {
      harvest: "Small-Batch Autumn Pressings",
      artisan: "Anantnag Extraction Masters Guild",
      purity: "Raw First Press • Extra Virgin Grade"
    }
  },
  {
    id: 'almond-oil',
    title: 'Cold-Pressed Mamra Almond Elixir',
    slug: 'cold-pressed-mamra-almond-oil',
    category: 'Wellness Oils',
    description: 'Premium sweet almond oil pressed purely from Mamra kernels, designed for daily skincare and wellness rituals.',
    origin: 'Pulwama Nut Estates, Kashmir\nPure cold-press extraction without chemical solvents.',
    details: ['100ml dropper bottle', '100% pure Mamra source', 'Rich in natural biotin'],
    price: 2200,
    rating: 4.9,
    badge: 'Pure Extract',
    images: ['/images/everace-9.jpeg', '/images/everace-10.jpeg'],
    variants: [{ id: 'almond-oil-100ml', label: '100ml', price: 2200, inventory: 21 }],
    story: 'Pressed from our premium Mamra almonds, this pure oil retains its deep concentrations of natural skin-plumping vitamins and light textures.',
    taste: 'Soft, clean scent with a rich, velvety golden feel.',
    ingredients: ['100% Pure Cold-Pressed Kashmiri Mamra Almond Oil'],
    storyStages: [
      {
        stage: "Stage 01 — Sorting",
        title: "High-Oil Kernel Isolation",
        description: "Only high-density Mamra almonds are selected for pressing, discarding lower-grade varieties to ensure maximum oil richness."
      },
      {
        stage: "Stage 02 — Low-RPM Pressing",
        title: "Zero-Friction Cold Milling",
        description: "The kernels are crushed using traditional cold-press mills at minimal speeds, maintaining steady temperatures to protect deep natural vitamins."
      },
      {
        stage: "Stage 03 — Vault Filtration",
        title: "Natural Mesh Decantation",
        description: "The extract filters naturally through layers of clean cotton fabric, clarifying cleanly without using chemical thinning agents."
      }
    ],
    ledger: {
      harvest: "Post-Harvest Winter Milling",
      artisan: "Pulwama Traditional Oil Artisans",
      purity: "100% Single-Ingredient Extract • Zero Hexane Solvents"
    }
  },
  {
    id: 'pure-apricot-oil',
    slug: 'pure-apricot-oil-50ml',
    title: 'Everace Pure Apricot Oil',
    category: 'Wellness Oils',
    description: 'Cold-pressed apricot oil in a refined glass bottle for ritual self-care.',
    origin: 'Kashmir orchards\nPressed with calm precision.',
    details: ['50ml bottle', 'Cold-pressed', 'Luxury skincare oil'],
    price: 1499,
    rating: 4.7,
    images: ['/images/everace-13.jpeg', '/images/everace-14.jpeg', '/images/everace-12.jpeg'],
    variants: [{ id: 'oil-50ml', label: '50ml', price: 1499, inventory: 18 }],
    story: 'A refined oil distilled from the finest apricots, designed to bring premium Indian wellness into everyday rituals.',
    taste: 'Soft, nutty, with a natural golden warmth.',
    ingredients: ['100% pure apricot oil'],
    storyStages: [
      {
        stage: "Stage 01 — Kernel Selection",
        title: "Sun-Dried Sweet Seed Sort",
        description: "Wild mountain apricots are slow-dried, cracked, and sweet interior kernels are manually isolated while bitter deviations are fully cast aside."
      },
      {
        stage: "Stage 02 — Wood Pressing",
        title: "Traditional Kani Stone Milling",
        description: "Kernels are crushed on traditional wooden cold-mills turning under 15 RPM. This slow motion limits extraction temperatures below 28°C to guard native vitamins."
      },
      {
        stage: "Stage 03 — Decantation",
        title: "Zero-Pressure Sediment Clear",
        description: "The golden oil settles organically in dark glass jars over two weeks, enabling microscopic residues to separate safely without industrial chemical clarifiers."
      }
    ],
    ledger: {
      harvest: "Small-Batch Autumn Pressing",
      artisan: "Anantnag Holistic Wellness Guild",
      purity: "Extra Virgin Grade • Unrefined First-Press"
    }
  },
  {
    id: 'shilajit-resin',
    slug: 'shilajit-resin-premium',
    title: 'Everace Shilajit Resin',
    category: 'Natural Wellness',
    description: 'Premium Himalayan shilajit resin presented with quiet, premium craftsmanship.',
    origin: 'Himalayan mountains\nHand-sorted resin.',
    details: ['50g jar', 'Pure resin', 'Ancient botanical ritual'],
    price: 1899,
    rating: 4.8,
    images: ['/images/everace-11.jpeg', '/images/everace-17.jpeg', '/images/everace-18.jpeg'],
    variants: [{ id: 'shilajit-50g', label: '50g', price: 1899, inventory: 12 }],
    story: 'A timeless wellness offering, carefully refined for modern luxury routines and subtle energy support.',
    taste: 'Earthy, rich, with warm mineral notes.',
    ingredients: ['100% shilajit resin'],
    storyStages: [
      {
        stage: "Stage 01 — High Altitude Forage",
        title: "Crag Exudate Hand-Scraping",
        description: "Sourced above 16,000 feet in the pristine regions of the Himalayas, where pristine rock layers naturally sweat raw organic resin layers during peak summer months."
      },
      {
        stage: "Stage 02 — Aqueous Purification",
        title: "Tri-Phase Spring Water Washing",
        description: "The raw exudate is washed over three independent cycles using pure natural mountain spring water to clean out dense mineral rock sediments safely."
      },
      {
        stage: "Stage 03 — Solar Hardening",
        title: "Low-Temperature Canvas Curing",
        description: "The refined liquid resin evaporates slowly under indirect high-altitude solar structures for months until it solidifies into a rich, bio-active glass-like paste."
      }
    ],
    ledger: {
      harvest: "Summer Solstice Procurement",
      artisan: "High-Altitude Indigenous Himalayan Gatherers",
      purity: "Fulvic Acid Concentration > 60% • Heavy Metal Lab Certified"
    }
  },


  {
    id: 'wild-pistachios',
    slug: 'wild-himalayan-pistachios',
    title: 'Everace Wild Roasted Pistachios (Pista)',
    category: 'Premium Nuts',
    description: 'Rare, small-kernel wild pistachios, hand-shelled and lightly dry-roasted with native pink salt crystals.',
    origin: 'Ladakh-Kashmir Borders\nGathered from wild mountain shrubs.',
    details: ['200g pack', 'Naturally split shells', 'Lightly salted'],
    price: 1950,
    rating: 4.7,
    badge: 'Exquisite',
    images: ['/images/everace-9.jpeg', '/images/everace-16.jpeg'],
    variants: [{ id: 'pista-200g', label: '200g', price: 1950, inventory: 15 }],
    story: 'Sourced from rocky high-altitude borders, these pistachios are smaller than commercial variants but contain double the concentration of essential monounsaturated fats.',
    taste: 'Intensely savory, rich pine-like clarity, clean salty crunch.',
    ingredients: ['Wild Mountain Pistachios', 'Himalayan Pink Salt Crystals'],
    storyStages: [
      {
        stage: "Stage 01 — Wild Foraging",
        title: "High-Altitude Rocky Terrain Scraping",
        description: "Foragers climb steep rocky border crags to collect small wild pistachio pods from native cold-desert shrubs."
      },
      {
        stage: "Stage 02 — Manual De-husking",
        title: "Cold-Water Skin Stripping",
        description: "Outer soft hulls are stripped using zero-heat water tanks, separating open-mouth varieties from un-split shells manually."
      },
      {
        stage: "Stage 03 — Artisan Roasting",
        title: "Sand-Bed Mineral Roasting",
        description: "Dry-roasted in small batches on hot sand beds mixed with ground pink salt crystals, generating an even, deeply toasted interior kernel finish."
      }
    ],
    ledger: {
      harvest: "Late Crop Foraging (September)",
      artisan: "Borderland Highland Forager Collectives",
      purity: "No Added Vegetable Oils • Non-GMO Wild Strain"
    }
  }
];

export const orderSummary = {
  shipping: 75,
  tax: 0,
  discount: 0,
};

export const quickActions = [
  { title: 'Checkout', label: 'Apple Pay style', key: 'express' },
  { title: 'Gift-ready packaging', label: 'Luxury presentation', key: 'gift' },
];

export const faq = [
  {
    question: 'Can I place a guest order?',
    answer: 'Yes, EVERACE checkout supports a seamless guest flow with minimal fields and express UPI payment readiness.',
  },
  {
    question: 'How long is delivery?',
    answer: 'Premium shipping is designed for speed and care, with tracking updates and soft packaging.',
  },
];