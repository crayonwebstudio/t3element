export const SITE = {
  name: 'T3element',
  tagline: 'European TYPO3 Engineering, 360° Care & Content Architecture',
  description:
    'Full-service European TYPO3 agency & engineering partner for DACH and EU enterprises: TYPO3 v13/v14 LTS upgrades, custom extensions, headless TYPO3, 360° Care SLA, and the free T3element Content Block Builder.',
  appLoginUrl: 'https://ce.t3element.com/auth/login',
  appRegisterUrl: 'https://ce.t3element.com/auth/registration',
  githubUrl: 'https://github.com/milancrayon/t3element12',
  terUrl: 'https://extensions.typo3.org/extension/t3element',
  packagistUrl: 'https://packagist.org/packages/t3element/t3element12',
  linkedinUrl: 'https://www.linkedin.com/company/t3element',
  whatsappUrl: 'https://wa.me/9624052424',
  meetingUrl: 'https://cal.com/milan-pandya-m3tsbn/15min',
  email: 'info@t3element.com',
  helpEmail: 'help@t3element.com',
  phone: '+91 96 24 052 424',
  address: '320, 3rd Floor, Sagar Complex, Jasoanth Chowk, Bhavnagar, Gujarat (India - 364001)',
  copyright: '© 2026 T3element. All rights reserved.',
};

export const DOCK_NAV = [
  { label: 'Services', href: '/services' },
  { label: '360° Care', href: '/care-package' },
  { label: 'Element Builder', href: '/element-builder' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const EU_SERVICES = [
  {
    code: '01 / CORE UPGRADES',
    title: 'TYPO3 LTS Upgrades (v13 & v14)',
    summary:
      'Zero-downtime major and minor TYPO3 upgrades across DACH and EU enterprise installations, eliminating upgrade debt, deprecated TypoScript, and legacy extension bottlenecks.',
    deliverables: ['TYPO3 v13 & v14 LTS Migration', 'TCA & Fluid Refactoring', 'Extension Compatibility Audit', 'Zero-Downtime Cutover'],
  },
  {
    code: '02 / CUSTOM ENGINEERING',
    title: 'Custom TYPO3 Extensions & APIs',
    summary:
      'Clean, maintainable Extbase/Fluid extensions, custom content blocks, and ERP/CRM integrations (SAP, HubSpot, Salesforce, Pimcore) built to strict TYPO3 coding standards.',
    deliverables: ['Extbase & Symfony DI', 'REST / GraphQL Integrations', 'Custom Content Elements', 'Automated PHPStan & Tests'],
  },
  {
    code: '03 / DECOUPLED WEB',
    title: 'Headless TYPO3 & Modern Frontends',
    summary:
      'API-first TYPO3 platforms powered by EXT:headless, T3Headless, and ultra-fast Astro or Next.js frontends engineered for sub-second Core Web Vitals across Europe.',
    deliverables: ['EXT:headless & T3Headless', 'Astro / Next.js Frontends', 'Multi-Site & Multi-Language', 'Edge CDN Caching'],
  },
  {
    code: '04 / SECURITY & PRIVACY',
    title: 'GDPR / DSGVO & Security Audits',
    summary:
      'Hardened TYPO3 architectures tailored for European compliance, covering GDPR/DSGVO, Swiss FADP, CSP headers, penetration testing, and EU data-residency hosting.',
    deliverables: ['GDPR / DSGVO Compliance', 'Swiss FADP Readiness', 'CSP & OWASP Hardening', 'EU Cloud / Private VPC'],
  },
  {
    code: '05 / SPEED & SEARCH',
    title: 'Performance, SEO & SXO Tuning',
    summary:
      'Technical TYPO3 optimization for Core Web Vitals, structured JSON-LD schema, multilingual hreflang routing, and answer-engine readiness across European search markets.',
    deliverables: ['95+ Core Web Vitals', 'Technical SEO & Schema', 'Multilingual Hreflang', 'Database & Redis Tuning'],
  },
  {
    code: '06 / REPLATFORMING',
    title: 'Legacy CMS → TYPO3 Migrations',
    summary:
      'Structured content, URL-redirect, and SEO-equity-preserving migrations from WordPress, Drupal, or proprietary CMS platforms into enterprise TYPO3.',
    deliverables: ['Automated Content Import', '301 Redirect Mapping', 'SEO Equity Preservation', 'Editorial Team Training'],
  },
];

export const CARE_TIERS = [
  {
    name: '360 Essential',
    badge: 'FOR GROWING PLATFORMS',
    sla: '< 8h Response Time (Business Hours CET)',
    summary: 'Continuous security patching, core maintenance, and monthly health checks for TYPO3 and headless APIs.',
    features: [
      'Monthly TYPO3 Security & Minor Core Updates',
      '24/7 Uptime & JSON Endpoint Monitoring',
      'Daily Encrypted Offsite Database & FAL Backups',
      'Direct Access to Support Ticket Engineering Desk',
      'Quarterly Core Web Vitals & SEO API Audit',
    ],
    highlighted: false,
  },
  {
    name: '360 Enterprise Care',
    badge: 'MOST POPULAR • MISSION CRITICAL',
    sla: '< 1h Response Time (24/7 SLA)',
    summary: 'Full-lifecycle managed operations including major LTS upgrades, dedicated engineering hours, and 99.99% SLA.',
    features: [
      'Emergency Zero-Day Security Patching (< 4h)',
      'Included TYPO3 Major LTS Upgrades (v13 → v14)',
      'Ongoing T3Element & Frontend Component Sprints',
      '99.99% Guaranteed API & Site Uptime SLA',
      'Dedicated Slack/Teams Channel with Senior Architects',
      'Load Testing & Edge CDN Cache Tuning',
    ],
    highlighted: true,
  },
  {
    name: '360 Custom Cloud & Gov',
    badge: 'REGULATED ENTERPRISES',
    sla: 'Bespoke 24/7 Private VPC SLA',
    summary: 'Tailored compliance, air-gapped cloud infrastructure, and multi-market governance for finance, healthcare, and public sector.',
    features: [
      'Air-Gapped / Private VPC TYPO3 Administration',
      'GDPR / DSGVO & Swiss FADP Security Compliance Audits',
      'Multi-Site Release Orchestration (100+ Markets)',
      'Dedicated Technical Account Manager',
      'Annual Penetration Testing & DR Simulations',
    ],
    highlighted: false,
  },
];

export const ABOUT_METRICS = [
  { value: 'DACH & EU', label: 'Primary Market Focus' },
  { value: 'v13 & v14', label: 'TYPO3 LTS Expertise' },
  { value: '< 1h', label: '24/7 Enterprise SLA' },
  { value: '99.99%', label: 'Managed Uptime Target' },
];

export const ABOUT_PRINCIPLES = [
  {
    num: '01',
    title: 'Engineering First, Zero Lock-In',
    desc: 'Every TYPO3 extension, content block, and headless frontend we build follows clean open-source standards so your internal team always retains full ownership.',
  },
  {
    num: '02',
    title: 'Built for European Compliance',
    desc: 'From GDPR/DSGVO and Swiss FADP data governance to strict CSP headers and EU hosting architectures, compliance is designed in from day one.',
  },
  {
    num: '03',
    title: 'Creators of T3element & T3Headless',
    desc: 'We don’t just use TYPO3, we build tools for the TYPO3 community, powering rapid content block creation and decoupled architectures across Europe.',
  },
];

export const EU_FAQS = [
  {
    q: 'What TYPO3 services does T3element offer for the European market?',
    a: 'T3element provides end-to-end TYPO3 engineering for DACH and EU organizations: TYPO3 v13 & v14 LTS upgrades, custom Extbase/Fluid extension development, headless TYPO3 (Astro/Next.js) architectures, GDPR/DSGVO security audits, and 24/7 360° Care SLA maintenance.',
  },
  {
    q: 'What is included in the T3element 360° Care Package?',
    a: 'Our 360° Care Package covers proactive TYPO3 security and minor core updates, 24/7 uptime monitoring, encrypted offsite backups, major LTS upgrades (Enterprise tier), and guaranteed response SLAs from < 8h (Essential) to < 1h 24/7 (Enterprise).',
  },
  {
    q: 'Can you upgrade our legacy TYPO3 v10 or v11 site to TYPO3 v13 or v14 LTS?',
    a: 'Yes. We audit custom extensions, refactor deprecated TypoScript and TCA, migrate Fluid templates, and execute zero-downtime cutovers to TYPO3 v13 LTS or v14.',
  },
  {
    q: 'Where did the T3element Content Element Builder go?',
    a: 'All T3element Content Element Builder tools, the 6-tab showcase, and the free standalone app (ce.t3element.com) are available on our dedicated Element Builder page (/element-builder) and remain 100% free.',
  },
  {
    q: 'Are your TYPO3 architectures GDPR / DSGVO and Swiss FADP compliant?',
    a: 'Yes. We implement privacy-first tracking, EU/Swiss data-residency hosting, strict Content-Security-Policy (CSP) headers, and cookie-free or consent-gated integrations aligned with GDPR/DSGVO and Swiss FADP.',
  },
];

export const HERO_BADGES = [
  'Supports TYPO3 v13 & v14',
  'Standalone SaaS Tool',
  'Free Installation',
  'Easy Customizable Element',
  'TYPO3 Starter Package',
];

export const CAPABILITY_BLOCKS = [
  {
    id: 'builder',
    title: 'ELEMENT BUILDER',
    stage: 'Discovery & Schema',
    summary:
      'Design custom TYPO3 content elements visually with drag-and-drop fields, repeatable sections, and validation rules in under five minutes, zero TypoScript boilerplate.',
    pills: [
      'DRAG & DROP UI',
      'TEXT & RTE FIELDS',
      'IMAGE & MEDIA',
      'REPEATABLE LISTS',
      'LINK & CTA',
      'FIELD VALIDATIONS',
      'ICON PICKER',
      'ZERO TYPOSCRIPT',
    ],
  },
  {
    id: 'package',
    title: 'TEMPLATE & PACKAGE',
    stage: 'Implementation',
    summary:
      'Write or customize clean HTML & Fluid templates directly inside the builder, then compile TCA definitions and extension metadata into an installable ZIP.',
    pills: [
      'FLUID TEMPLATES',
      'TCA GENERATION',
      'TYPO3 V13 / V14',
      'EXT_EMCONF READY',
      'ONE-CLICK BUILD',
      'CLEAN ZIP EXPORT',
    ],
  },
  {
    id: 'deploy',
    title: 'INTEGRATION & DEPLOY',
    stage: 'Validation & Launch',
    summary:
      'Run T3element as a standalone cloud workspace or install it directly inside your TYPO3 CMS instance via TER or Composer/Packagist.',
    pills: [
      'STANDALONE SAAS',
      'TYPO3 TER EXTENSION',
      'COMPOSER / PACKAGIST',
      'GITHUB OPEN SOURCE',
      'FREE INSTALLATION',
    ],
  },
];

export const SHOWCASE_TABS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    step: '01',
    title: 'Manage all TYPO3 packages in one workspace',
    caption:
      'Track every custom starter package, target TYPO3 version (v13, v14), element count, and build status from a clean overview.',
    metrics: ['TYPO3 v13 & v14', 'Unlimited Packages', '100% Free'],
    mockTitle: 'Packages Overview',
    mockRows: [
      { name: 'corporate_blocks_v14', version: 'TYPO3 13.4 LTS', elements: '8 elements', status: 'Built' },
      { name: 'agency_starter_kit', version: 'TYPO3 11.5 LTS', elements: '12 elements', status: 'Ready' },
      { name: 'landing_hero_suite', version: 'TYPO3 13.4 LTS', elements: '5 elements', status: 'Draft' },
    ],
  },
  {
    id: 'create-element',
    label: 'Create Element',
    step: '02',
    title: 'Define element metadata & category in seconds',
    caption:
      'Set the element title, CType key, icon, and description. T3element scaffolds the underlying TYPO3 configuration automatically.',
    metrics: ['Auto CType Key', 'Custom Icon', 'Wizard Group'],
    mockTitle: 'New Content Element',
    mockRows: [
      { name: 'Element Title', version: 'Hero Feature Banner', elements: 'CType: t3e_hero_banner', status: 'Valid' },
      { name: 'Tab Group', version: 'T3element Custom', elements: 'Position: Top', status: 'Mapped' },
      { name: 'Target Core', version: 'TYPO3 v13 & v14', elements: 'Fluid + TCA', status: 'Active' },
    ],
  },
  {
    id: 'element-field',
    label: 'Element Field',
    step: '03',
    title: 'Drag-and-drop fields & validation rules',
    caption:
      'Add title, description, RTE, image, link, button, or repeatable list items, complete with required/length validation in ~4–5 minutes.',
    metrics: ['~4–5 min setup', '5–6+ Field Types', 'Repeatable Lists'],
    mockTitle: 'Field Schema Builder',
    mockRows: [
      { name: 'headline', version: 'Input (String)', elements: 'Required • Max 120', status: 'Field 01' },
      { name: 'bodytext', version: 'Rich Text (RTE)', elements: 'Preset: Default', status: 'Field 02' },
      { name: 'media_image', version: 'FAL Image', elements: 'Max 1 • WebP/PNG', status: 'Field 03' },
      { name: 'cta_items', version: 'IRRE Repeatable', elements: 'Label + URL', status: 'Field 04' },
    ],
  },
  {
    id: 'element-template',
    label: 'Element Template',
    step: '04',
    title: 'Preview & bind Fluid HTML markup directly',
    caption:
      'Map generated field variables into clean Fluid templates with zero guesswork, ready for Tailwind, Bootstrap, or custom CSS.',
    metrics: ['Fluid Syntax', 'Variable Hints', 'Zero Boilerplate'],
    mockTitle: 'Fluid Template Editor',
    mockRows: [
      { name: '<f:layout name="Default" />', version: 'Templates/HeroBanner.html', elements: 'Auto-bound', status: 'Fluid' },
      { name: '{data.tx_t3element_headline}', version: 'H1 Display Binding', elements: 'Escaped', status: 'Synced' },
      { name: '<f:for each="{items}" as="item">', version: 'Repeatable Loop', elements: 'IRRE', status: 'Synced' },
    ],
  },
  {
    id: 'list-element',
    label: 'List Element',
    step: '05',
    title: 'Review, reorder & audit your element library',
    caption:
      'Inspect all custom content blocks inside your package before compiling, ensuring field names and templates are production-ready.',
    metrics: ['Package Audit', 'Clean Naming', 'Instant Preview'],
    mockTitle: 'Package Elements (5)',
    mockRows: [
      { name: 'Hero Feature Banner', version: '4 fields', elements: 'Templates/Hero.html', status: 'Verified' },
      { name: 'Pricing Comparison', version: '6 fields', elements: 'Templates/Pricing.html', status: 'Verified' },
      { name: 'FAQ Accordion', version: '3 fields', elements: 'Templates/Faq.html', status: 'Verified' },
    ],
  },
  {
    id: 'download-package',
    label: 'Download Package',
    step: '06',
    title: 'Compile & install your TYPO3 extension ZIP',
    caption:
      'Click Build Package to generate a complete, standards-compliant TYPO3 extension archive ready for Extension Manager or Composer.',
    metrics: ['1-Click Build', 'ext_emconf.php', 'TYPO3 Ready'],
    mockTitle: 'Build & Export Archive',
    mockRows: [
      { name: 'corporate_blocks_v14.zip', version: 'TYPO3 14.0', elements: 'TCA + Fluid + SQL', status: 'Download' },
      { name: 'Configuration/TCA/Overrides', version: 'Generated', elements: 'tt_content.php', status: 'Included' },
      { name: 'Resources/Private/Templates', version: 'Generated', elements: '5 Fluid files', status: 'Included' },
    ],
  },
];

export const ECOSYSTEM_ITEMS = [
  {
    tag: 'STANDALONE SAAS',
    title: 'Web App Builder',
    desc: 'Build and export TYPO3 packages directly in your browser without installing anything locally.',
    href: 'https://ce.t3element.com/auth/registration',
    cta: 'Launch App',
  },
  {
    tag: 'TYPO3 TER',
    title: 'Integrated Extension',
    desc: 'Install T3element inside your TYPO3 CMS backend via the official TYPO3 Extension Repository.',
    href: 'https://extensions.typo3.org/extension/t3element',
    cta: 'View on TER',
  },
  {
    tag: 'COMPOSER / PACKAGIST',
    title: 't3element/t3element12',
    desc: 'Require the TYPO3 v13 & v14 package cleanly in any Composer-based TYPO3 project.',
    href: 'https://packagist.org/packages/t3element/t3element12',
    cta: 'View Packagist',
  },
  {
    tag: 'OPEN SOURCE',
    title: 'GitHub Repository',
    desc: 'Inspect the source, report issues, or contribute to the TYPO3 v13 & v14 integration.',
    href: 'https://github.com/milancrayon/t3element12',
    cta: 'View GitHub',
  },
  {
    tag: 'SUPPORT',
    title: 'Free Installation',
    desc: 'Need help getting started? Our team offers free installation assistance via email.',
    href: 'mailto:help@t3element.com',
    cta: 'help@t3element.com',
  },
  {
    tag: 'CORE VERSIONS',
    title: 'TYPO3 v13 & v14',
    desc: 'Dedicated setup guides and package generation tailored for TYPO3 v13 and v14 LTS.',
    href: '/user-guide',
    cta: 'Read User Guide',
  },
];

export const ROADMAP_ITEMS = [
  'Easy options to attach custom CSS, JS, Fonts, Logos & Icons per package',
  'AI-assisted content & template scaffolding inside the element builder',
  'One-click CSS framework & plugin presets (Bootstrap, Tailwind CSS, Swiper, Owl Carousel)',
  'Community-requested features - submit your priority below',
];

export const FAQ_ITEMS = [
  {
    q: 'What is T3element and how does it work for TYPO3 CMS?',
    a: 'T3element is a free drag-and-drop TYPO3 custom content element builder and starter package generator. You configure fields, validation rules, and Fluid HTML templates visually, then compile a ready-to-install TYPO3 extension ZIP with TCA, SQL, and ext_emconf.php in minutes.',
  },
  {
    q: 'How long does it take to create one TYPO3 content element with 5 fields?',
    a: 'About 4 to 5 minutes. You can configure 5–6 fields (such as title, description, button, link, image, and repeatable IRRE list) complete with validation rules and a Fluid template.',
  },
  {
    q: 'Is T3element free to use for commercial TYPO3 projects?',
    a: 'Yes, T3element is 100% free to use for both personal and commercial TYPO3 CMS projects, whether you use the standalone web builder at ce.t3element.com or the integrated TYPO3 extension.',
  },
  {
    q: 'Which TYPO3 CMS versions are supported by T3element?',
    a: 'T3element supports TYPO3 v13 and v14 LTS, with dedicated Composer, TER, and TypoScript setup instructions in the User Guide.',
  },
  {
    q: 'Do I need deep TypoScript or TCA knowledge to build custom elements?',
    a: 'No. T3element automatically generates Configuration/TCA/Overrides/tt_content.php, database tables, and Fluid template bindings so developers and agencies can ship custom blocks without boilerplate.',
  },
  {
    q: 'Is a generated TYPO3 package editable after it has been built?',
    a: 'No. Once you finalize and build a package for download, that compiled ZIP snapshot is immutable inside the builder. You can download and customize the generated extension code locally or create a new build anytime.',
  },
  {
    q: 'How do I install the integrated T3element extension via Composer?',
    a: 'Run `composer require t3element/t3element12` and `composer require nng/nnrestapi`, include the T3element static TypoScript template in your root template, and import the nnrestapi YAML route enhancer in your site config.yaml.',
  },
  {
    q: 'Do you provide free installation support?',
    a: 'Yes. We provide free installation assistance for T3element. Reach out to our support team at help@t3element.com and we will help you get set up.',
  },
];

export const COMPARISON_ROWS = [
  { metric: 'Average Element Build Time', t3: '~4–5 minutes', manual: '2–3 hours (TCA + TypoScript + Fluid)' },
  { metric: 'TCA & tt_content.php Setup', t3: 'Auto-generated', manual: 'Hand-written PHP arrays' },
  { metric: 'Repeatable IRRE Lists', t3: 'Drag-and-drop toggle', manual: 'Manual inline table & TCA wiring' },
  { metric: 'Supported TYPO3 Versions', t3: 'v13 & v14 LTS', manual: 'Manual core migration per version' },
  { metric: 'Pricing & Licensing', t3: '100% Free + Free Install Support', manual: 'Developer hours' },
];

export const HOW_TO_STEPS = [
  {
    step: '01',
    title: 'Create Package',
    desc: 'Provide your package name, description, extension key, and select your target TYPO3 CMS version (v13 or v14).',
  },
  {
    step: '02',
    title: 'Create & Configure Element',
    desc: 'Use the drag-and-drop UI to define field names, types, validations, repeatable lists, and Fluid HTML templates.',
  },
  {
    step: '03',
    title: 'Build Package',
    desc: 'Once all custom content elements are ready, click Build Package to compile TCA, Fluid, and extension metadata.',
  },
  {
    step: '04',
    title: 'Install Package',
    desc: 'Download the generated TYPO3 extension archive and import it into your TYPO3 CMS site via Extension Manager or Composer.',
  },
];

export const ELEMENT_LIBRARY = [
  {
    id: 'hero-banner',
    category: 'Layout',
    title: 'Hero Feature Banner',
    ctype: 't3e_hero_banner',
    buildTime: '~4 min',
    fields: ['Headline (Input)', 'Subcopy (RTE)', 'Hero Visual (FAL)', 'CTA Link (Link)'],
    fluidTag: '<section class="t3e-hero"><h1>{data.tx_t3element_headline}</h1></section>',
  },
  {
    id: 'pricing-grid',
    category: 'Conversion',
    title: 'Pricing Comparison Grid',
    ctype: 't3e_pricing_grid',
    buildTime: '~5 min',
    fields: ['Section Title (Input)', 'Plan Name (Input)', 'Price (Input)', 'Features (IRRE List)'],
    fluidTag: '<f:for each="{plans}" as="plan"><div class="tier">{plan.title}</div></f:for>',
  },
  {
    id: 'faq-accordion',
    category: 'Data',
    title: 'FAQ Accordion Block',
    ctype: 't3e_faq_accordion',
    buildTime: '~3 min',
    fields: ['Heading (Input)', 'Question (Input)', 'Answer (RTE)', 'Items (IRRE List)'],
    fluidTag: '<f:for each="{items}" as="q"><details><summary>{q.title}</summary></details></f:for>',
  },
  {
    id: 'media-slider',
    category: 'Media',
    title: 'Media Gallery & Slider',
    ctype: 't3e_media_slider',
    buildTime: '~4 min',
    fields: ['Gallery Title (Input)', 'Slides (FAL Media)', 'Caption (Input)', 'Autoplay (Checkbox)'],
    fluidTag: '<f:for each="{slides}" as="img"><f:image image="{img}" /></f:for>',
  },
  {
    id: 'team-cards',
    category: 'Layout',
    title: 'Team & Testimonials',
    ctype: 't3e_team_cards',
    buildTime: '~4 min',
    fields: ['Name (Input)', 'Role (Input)', 'Portrait (FAL)', 'Quote (RTE)', 'Members (IRRE)'],
    fluidTag: '<f:for each="{members}" as="m"><article>{m.name}</article></f:for>',
  },
  {
    id: 'feature-matrix',
    category: 'Data',
    title: 'Feature Icon Matrix',
    ctype: 't3e_feature_matrix',
    buildTime: '~4 min',
    fields: ['Eyebrow (Input)', 'Icon (Selector)', 'Title (Input)', 'Rows (IRRE List)'],
    fluidTag: '<div class="grid"><f:for each="{rows}" as="r">{r.title}</f:for></div>',
  },
  {
    id: 'cta-split',
    category: 'Conversion',
    title: 'CTA Split Banner',
    ctype: 't3e_cta_split',
    buildTime: '~3 min',
    fields: ['Headline (Input)', 'Description (RTE)', 'Primary Link (Link)', 'Badge (Input)'],
    fluidTag: '<f:link.typolink parameter="{data.tx_t3element_cta}">Get Started</f:link.typolink>',
  },
  {
    id: 'timeline-steps',
    category: 'Media',
    title: 'Process Timeline',
    ctype: 't3e_timeline',
    buildTime: '~4 min',
    fields: ['Step Number (Input)', 'Title (Input)', 'Summary (RTE)', 'Steps (IRRE List)'],
    fluidTag: '<ol><f:for each="{steps}" as="s"><li>{s.title}</li></f:for></ol>',
  },
];

export const PACKAGES_LIST = [
  { name: 'Property Project', desc: 'Property Project Package', ver: '14.x.x', elements: 8 },
  { name: 'TYPO3 Expert', desc: 'TYPO3 Expert Package', ver: '13.x.x', elements: 6 },
  { name: 'BXP AG Landing Page', desc: 'BXP AG Landing Webpage Package', ver: '13.x.x', elements: 5 },
  { name: 'Media Source Ag', desc: 'Media Source Ag Package', ver: '14.x.x', elements: 9 },
  { name: 'Boat School TYPO3', desc: 'Boat School Package', ver: '13.x.x', elements: 4 },
  { name: 'Codetoil Package', desc: 'Codetoil Package', ver: '14.x.x', elements: 7 },
  { name: 'Erpuat Landing Page', desc: 'Erpuat Landing Page Package', ver: '13.x.x', elements: 5 },
  { name: 'Bootstrap Package', desc: 'Bootstrap Kickstarter Package', ver: '13.x.x', elements: 11 },
  { name: 'UNV creation Solution', desc: 'UNV creation Solution Package', ver: '14.x.x', elements: 6 },
  { name: 'Agencico - Tailwind Component Project', desc: 'Agencico - Tailwind Component Package', ver: '14.x.x', elements: 10 },
];
