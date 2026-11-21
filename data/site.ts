/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — the ONLY file you need to edit to change homepage content.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  • Every user-facing string is bilingual: { en: 'English', te: 'తెలుగు' }.
 *  • Items marked `placeholder: true` (and comments tagged PLACEHOLDER) are
 *    sample content for this redesign concept — replace them with official
 *    text, figures and photographs before going live.
 *  • Images live in /public/img. Swap a file (keep the same name) or change
 *    the `src` path here. Recommended: JPG/WebP, ≤ 1920px wide, ≤ 300 KB.
 *    Netlify Image CDN resizes and converts them automatically on delivery.
 *  • Links set to '#' are pages that will be built later.
 */

export type Lang = 'en' | 'te'
export type Localized = { en: string; te: string }

export type IconName =
  | 'graduation'
  | 'book'
  | 'flask'
  | 'building'
  | 'award'
  | 'phone'
  | 'sprout'
  | 'users'
  | 'microscope'
  | 'leaf'

export type ImageAsset = {
  src: string
  alt: Localized
  /** Shows a visible "Placeholder" tag on the image while true. */
  placeholder?: boolean
}

/** Set to false to hide all "Placeholder" tags across the site. */
export const showPlaceholderLabels = true

// ─── University identity ────────────────────────────────────────────────────
export const university = {
  name: {
    en: 'Dr. Y.S.R. Horticultural University',
    te: 'డా. వై.ఎస్.ఆర్. ఉద్యాన విశ్వవిద్యాలయం',
  },
  shortName: 'Dr.YSRHU',
  state: { en: 'Andhra Pradesh', te: 'ఆంధ్రప్రదేశ్' },
  location: {
    en: 'Venkataramannagudem, West Godavari, Andhra Pradesh',
    te: 'వెంకటరామన్నగూడెం, పశ్చిమ గోదావరి, ఆంధ్రప్రదేశ్',
  },
  established: 2007,
  government: { en: 'Government of Andhra Pradesh', te: 'ఆంధ్రప్రదేశ్ ప్రభుత్వం' },
  officialSite: 'https://drysrhu.ap.gov.in',
}

// ─── Small interface labels ─────────────────────────────────────────────────
export const ui = {
  skipToContent: { en: 'Skip to main content', te: 'ప్రధాన విషయానికి వెళ్ళండి' },
  textSize: { en: 'Text size', te: 'అక్షర పరిమాణం' },
  decreaseText: { en: 'Decrease text size', te: 'అక్షరాలను చిన్నవి చేయండి' },
  resetText: { en: 'Reset text size', te: 'సాధారణ అక్షర పరిమాణం' },
  increaseText: { en: 'Increase text size', te: 'అక్షరాలను పెద్దవి చేయండి' },
  language: { en: 'Language', te: 'భాష' },
  search: { en: 'Search', te: 'వెతకండి' },
  searchPlaceholder: {
    en: 'Search admissions, notifications, colleges…',
    te: 'ప్రవేశాలు, ప్రకటనలు, కళాశాలల కోసం వెతకండి…',
  },
  searchEmpty: { en: 'No results found. Try another word.', te: 'ఫలితాలు లేవు. మరో పదంతో ప్రయత్నించండి.' },
  searchHint: { en: 'Type to search the site', te: 'వెతకడానికి టైప్ చేయండి' },
  close: { en: 'Close', te: 'మూసివేయండి' },
  menu: { en: 'Menu', te: 'మెనూ' },
  newBadge: { en: 'NEW', te: 'కొత్త' },
  viewAll: { en: 'View all', te: 'అన్నీ చూడండి' },
  readMore: { en: 'Read more', te: 'మరింత చదవండి' },
  previous: { en: 'Previous', te: 'మునుపటి' },
  next: { en: 'Next', te: 'తరువాత' },
  pauseSlideshow: { en: 'Pause slideshow', te: 'స్లైడ్‌షో ఆపండి' },
  playSlideshow: { en: 'Play slideshow', te: 'స్లైడ్‌షో ప్రారంభించండి' },
  goToSlide: { en: 'Go to slide', te: 'స్లైడ్‌కు వెళ్ళండి' },
  placeholder: { en: 'Placeholder', te: 'నమూనా' },
  openImage: { en: 'Open image', te: 'చిత్రాన్ని తెరవండి' },
  tapToCall: { en: 'Tap to call', te: 'కాల్ చేయడానికి నొక్కండి' },
  backToTop: { en: 'Back to top', te: 'పైకి వెళ్ళండి' },
}

// ─── Navigation (sticky navbar + dropdowns) ─────────────────────────────────
export type NavLink = { label: Localized; href: string }
export type NavItem = NavLink & { children?: NavLink[] }

export const navigation: NavItem[] = [
  {
    label: { en: 'About', te: 'గురించి' },
    href: '#about',
    children: [
      { label: { en: 'About the University', te: 'విశ్వవిద్యాలయం గురించి' }, href: '#about' },
      { label: { en: 'Vision & Mission', te: 'దార్శనికత & లక్ష్యం' }, href: '#' },
      { label: { en: 'History', te: 'చరిత్ర' }, href: '#' },
      { label: { en: "Vice-Chancellor's Message", te: 'ఉపకులపతి సందేశం' }, href: '#vice-chancellor' },
    ],
  },
  {
    label: { en: 'Administration', te: 'పరిపాలన' },
    href: '#',
    children: [
      { label: { en: 'Vice-Chancellor', te: 'ఉపకులపతి' }, href: '#vice-chancellor' },
      { label: { en: 'Registrar', te: 'రిజిస్ట్రార్' }, href: '#' },
      { label: { en: 'Deans & Directors', te: 'డీన్‌లు & డైరెక్టర్లు' }, href: '#' },
      { label: { en: 'University Officers', te: 'విశ్వవిద్యాలయ అధికారులు' }, href: '#' },
      { label: { en: 'Board of Management', te: 'పాలక మండలి' }, href: '#' },
    ],
  },
  {
    label: { en: 'Colleges', te: 'కళాశాలలు' },
    href: '#',
    children: [
      { label: { en: 'Colleges of Horticulture', te: 'ఉద్యాన కళాశాలలు' }, href: '#' },
      { label: { en: 'Horticultural Polytechnics', te: 'ఉద్యాన పాలిటెక్నిక్‌లు' }, href: '#' },
      { label: { en: 'Affiliated Colleges', te: 'అనుబంధ కళాశాలలు' }, href: '#' },
    ],
  },
  {
    label: { en: 'Academics', te: 'విద్యా విభాగం' },
    href: '#',
    children: [
      { label: { en: 'B.Sc. (Hons.) Horticulture', te: 'బీఎస్సీ (ఆనర్స్) హార్టికల్చర్' }, href: '#' },
      { label: { en: 'Postgraduate & Ph.D.', te: 'పోస్ట్ గ్రాడ్యుయేట్ & పీహెచ్‌డీ' }, href: '#' },
      { label: { en: 'Diploma Programmes', te: 'డిప్లొమా కోర్సులు' }, href: '#' },
      { label: { en: 'Academic Calendar', te: 'విద్యా క్యాలెండర్' }, href: '#' },
    ],
  },
  {
    label: { en: 'Admissions', te: 'ప్రవేశాలు' },
    href: '#',
    children: [
      { label: { en: 'UG & Diploma Admissions', te: 'యూజీ & డిప్లొమా ప్రవేశాలు' }, href: '#' },
      { label: { en: 'PG Admissions', te: 'పీజీ ప్రవేశాలు' }, href: '#' },
      { label: { en: 'NRI & Foreign Nationals', te: 'ఎన్ఆర్ఐ & విదేశీ విద్యార్థులు' }, href: '#' },
      { label: { en: 'Fee Structure', te: 'ఫీజు వివరాలు' }, href: '#' },
    ],
  },
  {
    label: { en: 'Research', te: 'పరిశోధన' },
    href: '#research',
    children: [
      { label: { en: 'Research Stations', te: 'పరిశోధన స్థానాలు' }, href: '#' },
      { label: { en: 'Varieties Released', te: 'విడుదలైన రకాలు' }, href: '#' },
      { label: { en: 'Research Highlights', te: 'పరిశోధన ముఖ్యాంశాలు' }, href: '#research' },
      { label: { en: 'Publications', te: 'ప్రచురణలు' }, href: '#' },
    ],
  },
  {
    label: { en: 'Extension', te: 'విస్తరణ' },
    href: '#',
    children: [
      { label: { en: 'Krishi Vigyan Kendras', te: 'కృషి విజ్ఞాన కేంద్రాలు' }, href: '#' },
      { label: { en: 'Farmer Advisories', te: 'రైతు సలహాలు' }, href: '#' },
      { label: { en: 'Training Programmes', te: 'శిక్షణ కార్యక్రమాలు' }, href: '#' },
    ],
  },
  { label: { en: 'Gallery', te: 'చిత్రమాలిక' }, href: '#gallery' },
  { label: { en: 'Contact', te: 'సంప్రదించండి' }, href: '#contact' },
]

// ─── Hero ───────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: { en: 'Established 2007 · Venkataramannagudem', te: '2007లో స్థాపితం · వెంకటరామన్నగూడెం' },
  heading: {
    en: 'Growing the future of horticulture in Andhra Pradesh',
    te: 'ఆంధ్రప్రదేశ్‌లో ఉద్యాన రంగ భవిష్యత్తును పెంపొందిస్తున్నాం',
  },
  tagline: {
    en: 'Education, research and extension for students, farmers and the horticulture sector — rooted in the Godavari delta.',
    te: 'విద్యార్థులు, రైతులు మరియు ఉద్యాన రంగం కోసం విద్య, పరిశోధన మరియు విస్తరణ సేవలు — గోదావరి డెల్టా నుండి.',
  },
  primaryCta: { label: { en: 'UG & Diploma Admissions', te: 'యూజీ & డిప్లొమా ప్రవేశాలు' }, href: '#' },
  secondaryCta: { label: { en: 'PG Admissions', te: 'పీజీ ప్రవేశాలు' }, href: '#' },
  /** Slideshow images — changes slowly every `intervalMs`. PLACEHOLDER photos. */
  intervalMs: 7000,
  slides: [
    {
      src: '/img/hero-orchard.jpg',
      alt: { en: 'Mango orchard at golden hour', te: 'సాయంత్రపు వెలుగులో మామిడి తోట' },
      caption: { en: 'Fruit orchards', te: 'పండ్ల తోటలు' },
      placeholder: true,
    },
    {
      src: '/img/hero-polyhouse.jpg',
      alt: { en: 'Scientists examining seedlings in a research polyhouse', te: 'పాలీహౌస్‌లో మొక్కలను పరిశీలిస్తున్న శాస్త్రవేత్తలు' },
      caption: { en: 'Protected cultivation research', te: 'సంరక్షిత సాగు పరిశోధన' },
      placeholder: true,
    },
    {
      src: '/img/hero-coconut.jpg',
      alt: { en: 'Coconut and banana plantation beside a canal in the Godavari delta', te: 'గోదావరి డెల్టాలో కాలువ పక్కన కొబ్బరి, అరటి తోట' },
      caption: { en: 'Plantation crops of the delta', te: 'డెల్టా తోట పంటలు' },
      placeholder: true,
    },
  ] satisfies (ImageAsset & { caption: Localized })[],
}

// ─── Latest notifications ───────────────────────────────────────────────────
export type NotificationCategory = 'admissions' | 'research' | 'events' | 'circulars'

export const notificationTabs: { id: NotificationCategory; label: Localized }[] = [
  { id: 'admissions', label: { en: 'Admissions', te: 'ప్రవేశాలు' } },
  { id: 'research', label: { en: 'Research', te: 'పరిశోధన' } },
  { id: 'events', label: { en: 'Events', te: 'కార్యక్రమాలు' } },
  { id: 'circulars', label: { en: 'Circulars', te: 'సర్క్యులర్లు' } },
]

export type NotificationItem = {
  category: NotificationCategory
  title: Localized
  /** ISO date, e.g. '2026-11-18' */
  date: string
  href: string
  isNew?: boolean
  placeholder?: boolean
}

export const notifications = {
  heading: { en: 'Latest Notifications', te: 'తాజా ప్రకటనలు' },
  viewAllHref: '#',
  items: [
    {
      category: 'admissions',
      title: {
        en: 'Final mop-up and spot manual counseling for admission into UG courses',
        te: 'యూజీ కోర్సుల ప్రవేశానికి తుది మాప్-అప్ మరియు స్పాట్ మాన్యువల్ కౌన్సెలింగ్',
      },
      date: '2026-11-18',
      href: '#',
      isNew: true,
    },
    {
      category: 'admissions',
      title: {
        en: 'Tentative eligibility list of Sports Games quota candidates',
        te: 'క్రీడా కోటా అభ్యర్థుల తాత్కాలిక అర్హత జాబితా',
      },
      date: '2026-11-12',
      href: '#',
      isNew: true,
    },
    {
      category: 'admissions',
      title: {
        en: 'Study in India Portal (e-Student Visa facility)',
        te: 'స్టడీ ఇన్ ఇండియా పోర్టల్ (ఇ-స్టూడెంట్ వీసా సౌకర్యం)',
      },
      date: '2026-10-29',
      href: '#',
    },
    {
      category: 'research',
      title: {
        en: 'Breakthrough Discovery: First Report of Diploid Turmeric Genotypes',
        te: 'కీలక ఆవిష్కరణ: డిప్లాయిడ్ పసుపు జన్యురూపాల మొదటి నివేదిక',
      },
      date: '2026-11-15',
      href: '#',
      isNew: true,
    },
    {
      category: 'research', // PLACEHOLDER
      title: {
        en: 'Call for project proposals under the university research fund (sample)',
        te: 'విశ్వవిద్యాలయ పరిశోధన నిధి కింద ప్రాజెక్ట్ ప్రతిపాదనల ఆహ్వానం (నమూనా)',
      },
      date: '2026-10-21',
      href: '#',
      placeholder: true,
    },
    {
      category: 'events',
      title: {
        en: 'Dr.YSRHU 7th Convocation notification and application form',
        te: 'డా.వై.ఎస్.ఆర్.హెచ్.యు 7వ స్నాతకోత్సవ ప్రకటన మరియు దరఖాస్తు ఫారం',
      },
      date: '2026-11-10',
      href: '#',
      isNew: true,
    },
    {
      category: 'events', // PLACEHOLDER
      title: {
        en: "Farmers' field day on high-density mango orchards (sample)",
        te: 'అధిక సాంద్రత మామిడి తోటలపై రైతు క్షేత్ర దినోత్సవం (నమూనా)',
      },
      date: '2026-10-30',
      href: '#',
      placeholder: true,
    },
    {
      category: 'circulars',
      title: {
        en: 'Study in India Portal (e-Student Visa facility)',
        te: 'స్టడీ ఇన్ ఇండియా పోర్టల్ (ఇ-స్టూడెంట్ వీసా సౌకర్యం)',
      },
      date: '2026-10-29',
      href: '#',
    },
    {
      category: 'circulars', // PLACEHOLDER
      title: {
        en: 'Revised academic calendar for the 2026–27 academic year (sample)',
        te: '2026–27 విద్యా సంవత్సరానికి సవరించిన విద్యా క్యాలెండర్ (నమూనా)',
      },
      date: '2026-10-14',
      href: '#',
      placeholder: true,
    },
  ] satisfies NotificationItem[],
}

// ─── Quick links (icon tiles) ───────────────────────────────────────────────
export const quickLinks = {
  heading: { en: 'Quick Links', te: 'త్వరిత లింకులు' },
  items: [
    { label: { en: 'UG Admissions', te: 'యూజీ ప్రవేశాలు' }, icon: 'graduation', href: '#' },
    { label: { en: 'PG Admissions', te: 'పీజీ ప్రవేశాలు' }, icon: 'book', href: '#' },
    { label: { en: 'Research', te: 'పరిశోధన' }, icon: 'flask', href: '#research' },
    { label: { en: 'Colleges', te: 'కళాశాలలు' }, icon: 'building', href: '#' },
    { label: { en: 'Convocation', te: 'స్నాతకోత్సవం' }, icon: 'award', href: '#' },
    { label: { en: 'Contact', te: 'సంప్రదించండి' }, icon: 'phone', href: '#contact' },
  ] satisfies { label: Localized; icon: IconName; href: string }[],
}

// ─── About the university ───────────────────────────────────────────────────
export const about = {
  eyebrow: { en: 'About the University', te: 'విశ్వవిద్యాలయం గురించి' },
  heading: {
    en: 'A university devoted entirely to horticulture',
    te: 'పూర్తిగా ఉద్యాన రంగానికి అంకితమైన విశ్వవిద్యాలయం',
  },
  // PLACEHOLDER text — replace with the official introduction.
  paragraphs: [
    {
      en: 'Dr. Y.S.R. Horticultural University was established by the Government of Andhra Pradesh in 2007 as a dedicated university for horticultural education, research and extension. Its headquarters are at Venkataramannagudem in West Godavari District, in the heart of the fertile Godavari delta.',
      te: 'ఉద్యాన విద్య, పరిశోధన మరియు విస్తరణ కోసం ప్రత్యేక విశ్వవిద్యాలయంగా ఆంధ్రప్రదేశ్ ప్రభుత్వం 2007లో డా. వై.ఎస్.ఆర్. ఉద్యాన విశ్వవిద్యాలయాన్ని స్థాపించింది. దీని ప్రధాన కార్యాలయం సారవంతమైన గోదావరి డెల్టా నడిబొడ్డున, పశ్చిమ గోదావరి జిల్లాలోని వెంకటరామన్నగూడెంలో ఉంది.',
    },
    {
      en: 'Through its colleges, polytechnics and research stations across the state, the university trains the next generation of horticulturists and works alongside farmers to raise the productivity of fruits, vegetables, spices, flowers and plantation crops.',
      te: 'రాష్ట్రవ్యాప్తంగా ఉన్న కళాశాలలు, పాలిటెక్నిక్‌లు మరియు పరిశోధన స్థానాల ద్వారా విశ్వవిద్యాలయం భావి ఉద్యాన నిపుణులను తీర్చిదిద్దుతూ, పండ్లు, కూరగాయలు, సుగంధ ద్రవ్యాలు, పూలు మరియు తోట పంటల ఉత్పాదకత పెంపునకు రైతులతో కలిసి పనిచేస్తోంది.',
    },
  ],
  pillars: [
    {
      icon: 'graduation',
      title: { en: 'Education', te: 'విద్య' },
      text: { en: 'UG, PG, Ph.D. and diploma programmes', te: 'యూజీ, పీజీ, పీహెచ్‌డీ మరియు డిప్లొమా కోర్సులు' },
    },
    {
      icon: 'microscope',
      title: { en: 'Research', te: 'పరిశోధన' },
      text: { en: 'Crop improvement and new varieties', te: 'పంట మెరుగుదల మరియు కొత్త రకాలు' },
    },
    {
      icon: 'users',
      title: { en: 'Extension', te: 'విస్తరణ' },
      text: { en: 'Technology transfer to farmers', te: 'రైతులకు సాంకేతిక బదిలీ' },
    },
  ] satisfies { icon: IconName; title: Localized; text: Localized }[],
  cta: { label: { en: 'Know more about us', te: 'మా గురించి మరింత తెలుసుకోండి' }, href: '#' },
  image: {
    src: '/img/about-campus.jpg',
    alt: { en: 'University academic building surrounded by gardens', te: 'తోటల మధ్య విశ్వవిద్యాలయ భవనం' },
    placeholder: true,
  } satisfies ImageAsset,
}

// ─── Vice-Chancellor ────────────────────────────────────────────────────────
export const viceChancellor = {
  eyebrow: { en: "From the Vice-Chancellor's desk", te: 'ఉపకులపతి సందేశం' },
  name: { en: 'Dr. K. Dhanumjaya Rao', te: 'డా. కె. ధనుంజయ రావు' },
  designation: { en: 'Vice-Chancellor', te: 'ఉపకులపతి' },
  /** PLACEHOLDER — set to e.g. '/img/vice-chancellor.jpg' (portrait, 4:5) to show a photo. */
  // photo: null as string | null,
  photo: '/img/vc.jpeg' as string | null,
  // PLACEHOLDER message — replace with the official message.
  message: {
    en: 'Horticulture is the fastest-growing part of agriculture in Andhra Pradesh, and our university exists to make that growth sustainable and farmer-centred. I invite students, researchers and farmers to be part of our journey — learning in our classrooms, experimenting in our fields and taking proven technologies to every village.',
    te: 'ఆంధ్రప్రదేశ్ వ్యవసాయంలో ఉద్యాన రంగం అత్యంత వేగంగా వృద్ధి చెందుతున్న విభాగం. ఆ వృద్ధిని సుస్థిరంగా, రైతు కేంద్రితంగా మార్చడమే మా విశ్వవిద్యాలయ లక్ష్యం. మా తరగతి గదుల్లో నేర్చుకుంటూ, మా క్షేత్రాల్లో ప్రయోగాలు చేస్తూ, నిరూపితమైన సాంకేతికతలను ప్రతి గ్రామానికి చేర్చే ఈ ప్రయాణంలో భాగం కావాలని విద్యార్థులు, పరిశోధకులు మరియు రైతులను ఆహ్వానిస్తున్నాను.',
  },
  readMoreHref: '#',
}

// ─── Animated counters ──────────────────────────────────────────────────────
export const stats = {
  heading: { en: 'The university at a glance', te: 'ఒక్క చూపులో విశ్వవిద్యాలయం' },
  // PLACEHOLDER figures — replace with official numbers.
  note: { en: 'Placeholder figures for this concept', te: 'ఈ నమూనా కోసం తాత్కాలిక సంఖ్యలు' },
  items: [
    { value: 11, suffix: '', label: { en: 'Colleges', te: 'కళాశాలలు' }, icon: 'building' },
    { value: 23, suffix: '', label: { en: 'Research Stations', te: 'పరిశోధన స్థానాలు' }, icon: 'flask' },
    { value: 4860, suffix: '+', label: { en: 'Students', te: 'విద్యార్థులు' }, icon: 'users' },
    { value: 57, suffix: '', label: { en: 'Varieties Released', te: 'విడుదలైన రకాలు' }, icon: 'sprout' },
  ] satisfies { value: number; suffix: string; label: Localized; icon: IconName }[],
}

// ─── Research highlights (carousel) ─────────────────────────────────────────
export const research = {
  eyebrow: { en: 'Research Highlights', te: 'పరిశోధన ముఖ్యాంశాలు' },
  heading: { en: 'Science that reaches the field', te: 'క్షేత్రానికి చేరే శాస్త్రం' },
  viewAllHref: '#',
  // Items after the first are PLACEHOLDER summaries.
  items: [
    {
      category: { en: 'Spices', te: 'సుగంధ ద్రవ్యాలు' },
      title: { en: 'First report of diploid turmeric genotypes', te: 'డిప్లాయిడ్ పసుపు జన్యురూపాల మొదటి నివేదిక' },
      summary: {
        en: 'University scientists have reported diploid turmeric genotypes for the first time, opening new routes for breeding improved varieties.',
        te: 'విశ్వవిద్యాలయ శాస్త్రవేత్తలు తొలిసారిగా డిప్లాయిడ్ పసుపు జన్యురూపాలను గుర్తించారు, ఇది మెరుగైన రకాల అభివృద్ధికి కొత్త దారులు తెరుస్తుంది.',
      },
      image: { src: '/img/gallery-turmeric.jpg', alt: { en: 'Freshly harvested turmeric rhizomes', te: 'తాజాగా తవ్విన పసుపు దుంపలు' }, placeholder: true },
      href: '#',
    },
    {
      category: { en: 'Biotechnology', te: 'బయోటెక్నాలజీ' },
      title: { en: 'Disease-free banana planting material', te: 'వ్యాధి రహిత అరటి మొక్కలు' },
      summary: {
        en: 'Tissue-culture protocols supply quality, uniform planting material to delta farmers.',
        te: 'కణజాల వర్ధన పద్ధతుల ద్వారా డెల్టా రైతులకు నాణ్యమైన, ఏకరీతి మొక్కలు అందిస్తున్నాం.',
      },
      image: { src: '/img/gallery-tissueculture.jpg', alt: { en: 'Banana plantlets in a tissue-culture lab', te: 'కణజాల వర్ధన ప్రయోగశాలలో అరటి మొక్కలు' }, placeholder: true },
      href: '#',
    },
    {
      category: { en: 'Plantation crops', te: 'తోట పంటలు' },
      title: { en: 'Better oil palm nurseries', te: 'మెరుగైన ఆయిల్ పామ్ నర్సరీలు' },
      summary: {
        en: 'Seedling management practices tested at research stations for stronger, earlier-bearing palms.',
        te: 'బలమైన, త్వరగా కాపుకు వచ్చే మొక్కల కోసం పరిశోధన స్థానాల్లో పరీక్షించిన నర్సరీ పద్ధతులు.',
      },
      image: { src: '/img/gallery-oilpalm.jpg', alt: { en: 'Oil palm seedling nursery', te: 'ఆయిల్ పామ్ నర్సరీ' }, placeholder: true },
      href: '#',
    },
    {
      category: { en: 'Floriculture', te: 'పుష్ప సాగు' },
      title: { en: 'Marigold and chrysanthemum for small farms', te: 'చిన్న రైతులకు బంతి, చామంతి సాగు' },
      summary: {
        en: 'Short-duration flower crops that give smallholders a steady income through the year.',
        te: 'చిన్న రైతులకు ఏడాది పొడవునా స్థిరమైన ఆదాయాన్ని అందించే స్వల్పకాలిక పూల పంటలు.',
      },
      image: { src: '/img/gallery-floriculture.jpg', alt: { en: 'Rows of marigold and chrysanthemum', te: 'బంతి, చామంతి పూల వరుసలు' }, placeholder: true },
      href: '#',
    },
    {
      category: { en: 'Fruit crops', te: 'పండ్ల పంటలు' },
      title: { en: 'High-density mango orchards', te: 'అధిక సాంద్రత మామిడి తోటలు' },
      summary: {
        en: 'Canopy management and spacing trials for higher yields and better fruit quality.',
        te: 'అధిక దిగుబడి, మెరుగైన పండు నాణ్యత కోసం పందిరి నిర్వహణ మరియు దూర ప్రయోగాలు.',
      },
      image: { src: '/img/hero-orchard.jpg', alt: { en: 'Mango orchard rows', te: 'మామిడి తోట వరుసలు' }, placeholder: true },
      href: '#',
    },
    {
      category: { en: 'Protected cultivation', te: 'సంరక్షిత సాగు' },
      title: { en: 'Polyhouse vegetables year-round', te: 'పాలీహౌస్‌లో ఏడాది పొడవునా కూరగాయలు' },
      summary: {
        en: 'Low-cost polyhouse designs and crop schedules suited to coastal Andhra conditions.',
        te: 'కోస్తా ఆంధ్ర పరిస్థితులకు అనువైన తక్కువ ఖర్చు పాలీహౌస్ నమూనాలు మరియు పంట ప్రణాళికలు.',
      },
      image: { src: '/img/hero-polyhouse.jpg', alt: { en: 'Seedlings inside a polyhouse', te: 'పాలీహౌస్‌లో మొక్కలు' }, placeholder: true },
      href: '#',
    },
  ] satisfies { category: Localized; title: Localized; summary: Localized; image: ImageAsset; href: string }[],
}

// ─── Gallery (grid + lightbox) ──────────────────────────────────────────────
export const gallery = {
  eyebrow: { en: 'Gallery', te: 'చిత్రమాలిక' },
  heading: { en: 'Life on campus and in the field', te: 'క్యాంపస్ మరియు క్షేత్రంలో జీవితం' },
  viewAllHref: '#',
  // PLACEHOLDER photographs — replace with university photos.
  images: [
    { src: '/img/gallery-fieldwork.jpg', alt: { en: 'Students in a field practical class', te: 'క్షేత్ర ప్రాక్టికల్ తరగతిలో విద్యార్థులు' }, placeholder: true },
    { src: '/img/gallery-floriculture.jpg', alt: { en: 'Floriculture research plots', te: 'పుష్ప సాగు పరిశోధన క్షేత్రాలు' }, placeholder: true },
    { src: '/img/gallery-extension.jpg', alt: { en: "Farmers' field day", te: 'రైతు క్షేత్ర దినోత్సవం' }, placeholder: true },
    { src: '/img/gallery-tissueculture.jpg', alt: { en: 'Tissue-culture laboratory', te: 'కణజాల వర్ధన ప్రయోగశాల' }, placeholder: true },
    { src: '/img/about-campus.jpg', alt: { en: 'Campus academic building', te: 'క్యాంపస్ విద్యా భవనం' }, placeholder: true },
    { src: '/img/gallery-turmeric.jpg', alt: { en: 'Turmeric harvest', te: 'పసుపు పంట కోత' }, placeholder: true },
    { src: '/img/gallery-oilpalm.jpg', alt: { en: 'Oil palm nursery', te: 'ఆయిల్ పామ్ నర్సరీ' }, placeholder: true },
    { src: '/img/hero-coconut.jpg', alt: { en: 'Coconut plantation in the delta', te: 'డెల్టాలో కొబ్బరి తోట' }, placeholder: true },
  ] satisfies ImageAsset[],
}

// ─── Contact & footer ───────────────────────────────────────────────────────
export const contact = {
  eyebrow: { en: 'Contact Us', te: 'మమ్మల్ని సంప్రదించండి' },
  heading: { en: 'We are here to help', te: 'మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాం' },
  address: {
    en: [
      'Dr. Y.S.R. Horticultural University',
      'Venkataramannagudem',
      'West Godavari District',
      'Andhra Pradesh, Pin 534 101',
    ],
    te: [
      'డా. వై.ఎస్.ఆర్. ఉద్యాన విశ్వవిద్యాలయం',
      'వెంకటరామన్నగూడెం',
      'పశ్చిమ గోదావరి జిల్లా',
      'ఆంధ్రప్రదేశ్, పిన్ 534 101',
    ],
  },
  /** `tel` must be in international format without spaces for tap-to-call. */
  phones: [
    { label: { en: 'General', te: 'సాధారణ' }, display: '+91-8818-284311', tel: '+918818284311' },
    { label: { en: 'UG & Diploma admissions', te: 'యూజీ & డిప్లొమా ప్రవేశాలు' }, display: '73826 33640', tel: '+917382633640' },
    { label: { en: 'PG admissions', te: 'పీజీ ప్రవేశాలు' }, display: '83310 17124', tel: '+918331017124' },
    { label: { en: 'Research', te: 'పరిశోధన' }, display: '73826 33664', tel: '+917382633664' },
    { label: { en: 'Other queries', te: 'ఇతర సందేహాలు' }, display: '73826 33644', tel: '+917382633644' },
  ],
  map: {
    title: { en: 'Map showing Dr. Y.S.R. Horticultural University, Venkataramannagudem', te: 'వెంకటరామన్నగూడెంలోని విశ్వవిద్యాలయ పటం' },
    embedSrc:
      'https://www.google.com/maps?q=Dr.+Y.S.R.+Horticultural+University,+Venkataramannagudem,+Andhra+Pradesh+534101&output=embed',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=Dr.+Y.S.R.+Horticultural+University+Venkataramannagudem',
    directionsLabel: { en: 'Get directions', te: 'దారి చూపించు' },
  },
  socialHeading: { en: 'Follow us', te: 'మమ్మల్ని అనుసరించండి' },
  // PLACEHOLDER — replace '#' with the official social media URLs.
  social: [
    { network: 'facebook', label: 'Facebook', href: '#' },
    { network: 'x', label: 'X (Twitter)', href: '#' },
    { network: 'youtube', label: 'YouTube', href: '#' },
    { network: 'instagram', label: 'Instagram', href: '#' },
  ] as const,
}

export const footer = {
  columns: [
    {
      heading: { en: 'Students', te: 'విద్యార్థులు' },
      links: [
        { label: { en: 'UG & Diploma Admissions', te: 'యూజీ & డిప్లొమా ప్రవేశాలు' }, href: '#' },
        { label: { en: 'PG Admissions', te: 'పీజీ ప్రవేశాలు' }, href: '#' },
        { label: { en: 'Academic Calendar', te: 'విద్యా క్యాలెండర్' }, href: '#' },
        { label: { en: 'Convocation', te: 'స్నాతకోత్సవం' }, href: '#' },
      ],
    },
    {
      heading: { en: 'University', te: 'విశ్వవిద్యాలయం' },
      links: [
        { label: { en: 'About', te: 'గురించి' }, href: '#about' },
        { label: { en: 'Administration', te: 'పరిపాలన' }, href: '#' },
        { label: { en: 'Research', te: 'పరిశోధన' }, href: '#research' },
        { label: { en: 'Gallery', te: 'చిత్రమాలిక' }, href: '#gallery' },
      ],
    },
    {
      heading: { en: 'Important', te: 'ముఖ్యమైనవి' },
      links: [
        { label: { en: 'RTI', te: 'సమాచార హక్కు' }, href: '#' },
        { label: { en: 'Tenders', te: 'టెండర్లు' }, href: '#' },
        { label: { en: 'Recruitment', te: 'నియామకాలు' }, href: '#' },
        { label: { en: 'Anti-Ragging', te: 'ర్యాగింగ్ నిరోధం' }, href: '#' },
      ],
    },
  ],
  copyright: {
    en: `© ${new Date().getFullYear()} Dr. Y.S.R. Horticultural University. All rights reserved.`,
    te: `© ${new Date().getFullYear()} డా. వై.ఎస్.ఆర్. ఉద్యాన విశ్వవిద్యాలయం. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.`,
  },
  disclaimer: {
    en: 'Redesign concept for demonstration. The official website is drysrhu.ap.gov.in.',
    te: 'ప్రదర్శన కోసం రూపొందించిన నమూనా. అధికారిక వెబ్‌సైట్ drysrhu.ap.gov.in.',
  },
}
