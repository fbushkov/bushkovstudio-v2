/* English version: all site copy. Keys mirror ru.js. */
'use strict';
window.CONTENT = window.CONTENT || {};
CONTENT.en = {
plural: n => n === 1 ? 'item' : 'items',

PAGES: {expertise:'Expertise',projects:'Portfolio',philosophy:'Philosophy',contacts:'Contacts'},
TITLES: {blog:'Blog'},

UI: {
  title:'Philipp Bushkov — service design and consulting',
  description:'Service design, product consulting, design systems and UX/UI consulting. Philipp Bushkov is a product consultant and service designer with AI expertise.',
  menuOpen:'Open menu', menuOpenMain:'Open main menu', menuClose:'Collapse main menu',
  mainNav:'Main navigation', sectionsNav:'Page sections', toHome:'Home page',
  back:'Back', filterLbl:'Filter by category:', filterAria:'Category filter', sitemap:'Site map',
  langGroup:'Language', themeGroup:'Color theme',
  themeLight:'L<span class="sr-only">ight</span>', themeDark:'D<span class="sr-only">ark</span>',
  themeLightTitle:'Light theme', themeDarkTitle:'Dark theme',
  home:'Home', crumbs:'Breadcrumbs',
  photoAlt:'Philipp Bushkov',
  intro:'My name is Philipp Bushkov.<br>I am a product consultant and service designer<br>with expertise in&nbsp;AI.',
  h1:'<span>Service design</span><span>Design consulting</span><span>UX/UI/CX</span>',
  ctaMax:'Message me on MAX', ctaMaxStub:'MAX chat link',
  projectsH:'Projects', expertiseH:'Expertise',
  proj1:'<h3>Tizbi</h3><p>Custom software development company</p>',
  proj2:'<h3>Ak Bars Bank</h3><p>Bank of the Republic of Tatarstan</p>',
  proj3:'<h3>Megaplan</h3><p>SaaS platform</p>',
  proj4:'<h3>Volna Sale</h3><p>Telecom operator’s startup</p>',
  allProjects:'View all projects',
  expIntro:'My expertise is strategic design and the development of complex systems for socially significant products, grounded in in-depth analytics, systems thinking and AI&nbsp;tools.',
  bizSize:'Business size', smb:'Small and medium business', ent:'Large business',
  sameTerms:'The terms are the same for small, medium and large businesses.',
  portfolioH:'Portfolio', casesEmpty:'No projects in this category yet.', showAll:'Show all', caseStub:'The case study page is coming soon',
  contactsH:'Contacts', philosophyH:'Philosophy',
  tg:'Telegram:', mail:'Email:', phone:'Phone:', otherServices:'Elsewhere:',
  stubText:'This section is in the works. Meanwhile, take a look at Expertise — it covers the formats of work and prices in detail.', stubBtn:'Go to Expertise',
  close:'Close',
  footLead:'For any collaboration — whether it’s an established product or a growing startup',
  footAlso:'You can also find me<br>on other platforms',
  kvazarH:'Kvazar',
  kvazarText:'If you share the views and ideas set out in the Philosophy section, subscribe to our movement’s Telegram channel. We share experience, discuss ideas and build teams to bring them to life. Straight to the point, no spam or chatter.',
  kvazarBtn:'Learn more', kvazarStub:'Kvazar Telegram channel link',
  rights:'all rights belong to the like-minded',
  request:'Send a request', requestStub:'The request form is coming soon', was:'Was: ',
  includes:'What’s included:', allFrom: n => `Everything in <b>${n}</b>, plus:`, result:'Outcome:',
  more: (n, w) => `${n} more ${w}`, collapse:'Collapse', expand:'Expand',
  funnelAria:'Layers of customer experience: from advertising to the product',
  philoNav:'Page sections',
  credits:'Credits: design — Philipp Bushkov, illustrations — Anastasia Kim, front-end — Ruslan Starodumov'
},

MAIN_NAV: [
  {id:'home',label:'Home',href:'#/'},
  {id:'expertise',label:'Expertise',href:'#/expertise'},
  {id:'projects',label:'Projects',href:'#/projects'},
  {id:'philosophy',label:'Philosophy',href:'#/philosophy'},
  {id:'contacts',label:'Contacts',href:'#/contacts'},
  {id:'blog',label:'Blog',href:'#/blog'},
],

MAP: [
  {title:'Portfolio',href:'#/projects',items:[
    ['Ak Bars Bank','#/projects'],['Volna (telecom operator)','#/projects'],['Megaplan','#/projects'],
    ['Tizbi','#/projects'],['Space AI','#/projects'],['Zhelezno','#/projects']]},
  {title:'Expertise',href:'#/expertise',items:[
    ['Service design','#/expertise/service-design'],['Product consulting','#/expertise/product'],
    ['Design systems','#/expertise/design-systems'],['UX/UI consulting','#/expertise/ux-ui']
    ]},
  {title:'Philosophy',href:'#/philosophy',items:[['ECMR','#/philosophy/ph-ekro'],['Code of rules','#/philosophy/ph-rules']]},
  {title:'Contacts',href:'#/contacts',items:[
    ['bushkovf@mail.ru','mailto:bushkovf@mail.ru'],['bushkovf','https://t.me/bushkovf'],['Kvazar','https://t.me/kvazardesign']]},
],

/* Service cards on the home page */
SERVICES: {
  smb:[
    {id:'service-design',t:'Service design',d:'Designing the customer experience by planning and organizing business resources. A comprehensive overhaul of the company’s entire product.',tags:['one-off service','one month'],p:'from $1,300'},
    {id:'product',t:'Product consulting',d:'Product strategy based on market data and analysis of every factor of the product and the business. Optimization of the development process.',tags:['one-off service','one month'],p:'from $1,800'},
    {id:'design-systems',t:'Design systems',d:'A set of activities to create unified rules and standards.',tags:['one-off service','timeline on request'],p:'Price on request'},
    {id:'ux-ui',t:'UX/UI consulting',d:'Expert help and recommendations to improve the user experience (UX) and the user interface (UI).',tags:['one-off service'],p:'from $60/hour'},
  ],
  ent:[
    {id:'service-design',t:'Service design',d:'Designing the customer experience by planning and organizing business resources. A comprehensive overhaul of the company’s entire product.',tags:['one-off service','2–3 months'],p:'from $3,500'},
    {id:'product',t:'Product consulting',d:'Product strategy based on market data and analysis of every factor of the product and the business. Optimization of the development process.',tags:['one-off service','2 months'],p:'from $3,500'},
    {id:'design-systems',t:'Design systems',d:'A set of activities to create unified rules and standards.',tags:['one-off service','timeline on request'],p:'Price on request'},
    {id:'ux-ui',t:'UX/UI consulting',d:'Expert help and recommendations to improve the user experience (UX) and the user interface (UI).',tags:['one-off service'],p:'from $80/hour'},
  ]
},

SECTIONS: [
  {
    id:'service-design', n:1, title:'Service design', short:'Service design',
    tariffs:{
      smb:[
        {name:'Optimization',for:'Find and remove bottlenecks in a running service',
          items:['Data analysis and study of the business’s capabilities and constraints','Defining problems and goals, setting service design objectives','Generating and selecting solutions','Prototyping and testing','Designing and detailing the service','In-depth consultation on implementation'],
          result:'Customer journey map, service blueprint and implementation plan',
          tags:['One-off service','One month'],old:'$1,800–3,500',price:'$1,300–2,800'},
        {name:'Transformation',for:'Rebuild the service and see the changes through to results',base:0,
          items:['Rolling out and supporting the changes','Measuring effectiveness and developing the service'],
          result:'A working, renewed service and metrics that show the effect',
          tags:['Embedded in your team','Open-ended contract'],old:'from $3,500/mo',price:'from $2,900/mo'}
      ],
      ent:[
        {name:'Optimization',for:'Find and remove bottlenecks in a running service',
          items:['Data analysis and study of the business’s capabilities and constraints','Interviews with departments and partners','Defining problems and goals, setting service design objectives','Generating and selecting solutions','Prototyping and testing','Designing and detailing the service','In-depth consultation on implementation'],
          result:'Customer journey map, service blueprint and an implementation plan by department',
          tags:['One-off service','2–3 months'],price:'from $3,500'},
        {name:'Transformation',for:'Rebuild the service and see the changes through to results',base:0,
          items:['Rolling out and supporting the changes','Measuring effectiveness and developing the service','Training teams and handing over the methodology'],
          result:'A working, renewed service and metrics that show the effect',
          tags:['Embedded in your team','Open-ended contract'],price:'from $5,300/mo'}
      ]
    },
    info:['Service design is an interdisciplinary, iterative approach to building a product. It draws on many methodologies, tools and action scenarios to meet the needs of every stakeholder — from the user to the business.'],
    prose:`
      <div class="note"><p>To be clear on terms: a product is anything a company offers on the market — a service, a physical or a digital product.</p></div>
      <div class="grp">
        <h3>Why service design?</h3>
        <p>Service design is about designing the product as a whole. It covers every point where a person comes into contact with the product: from how the company speaks to customers through advertising and staff, to using the product and coming back to it.</p>
        <p>Service design lets a company see its services through the user’s eyes, balancing their needs with the interests of the business, and create a high-quality customer experience. It also gives departments a shared “language” and helps form common values and an understanding of the product’s purpose.</p>
      </div>
      <div class="grp">
        <h3>When do you need it?</h3>
        <ul class="ilist">
          <li>You want to improve the product and strengthen the company’s position on the market</li>
          <li>You want to create or strengthen the value your organization generates</li>
          <li>You want to rethink the customer experience — from first contact with your organization to purchase and repeat visits</li>
        </ul>
      </div>
      <div class="grp">
        <h3>Service design for users</h3>
        <p>The experience a user gets from your offer passes through a filter of how they perceive your behavior, competence, processes and tools. Users perceive the product through all of these factors together, starting with the outermost one. Hover over a layer to highlight it.</p>
      </div>
      <div data-funnel></div>
      <div class="grp">
        <p>The digital revolution and the abundance of offers on the market raise customers’ demand for a high-quality, unique experience with a product. Innovation is shifting more and more towards service, because products themselves, like software features, are quickly copied. So if your goal is a quality product, focus on internal processes and the level of service, and set out to serve the user.</p>
        <div class="note note--accent"><p>Service design improves the entire customer experience — from first acquaintance with the product to coming back — while taking into account the interests of the business and other stakeholders.</p></div>
      </div>
      <div class="grp">
        <h3>Service design for employees</h3>
        <p>Customer experience is often shaped by departments isolated by their interests and competencies. Each speaks “its own language” and has its own view of the product and its tasks, its own success criteria and KPIs. This gets in the way of a shared understanding.</p>
        <p>Managers often clash too: for the sake of their team goals, closed sprints and features aimed inside the company, they sacrifice the common interest for private ones. Such relationships stand in the way of improving the customer experience and turn into a race between departments that forget the common cause and the product’s value for the customer.</p>
        <div class="note"><p>One of the goals of service design for employees is to remove the boundaries between areas of expertise, to “break down the walls” between isolated departments and help them form shared values and a shared vision of the product. The method isn’t for everyone: changes like these require a certain maturity of the company and its leadership.</p></div>
      </div>`
  },
  {
    id:'product', n:2, title:'Product consulting', short:'Product consulting',
    tariffs:{
      smb:[
        {name:'Development',for:'Shape the product concept and validate it before development',
          items:['Study of the business context and product requirements','Market and competitor analysis','Shaping the product concept','Working out and prioritizing functionality','Building a prototype and testing hypotheses','Detailed report with recommendations for further product development'],
          result:'A validated concept, feature priorities and a development plan',
          tags:['One-off service','One month'],price:'$1,800–2,900'},
        {name:'Transformation',for:'Take the product from concept to launch and keep developing it',base:0,
          items:['Writing the specification and supporting development','Testing and product acceptance','Product launch and support','Further product development'],
          result:'A launched product and a team that develops it according to the strategy',
          tags:['Embedded in your team','Open-ended contract'],price:'from $2,900/mo'}
      ],
      ent:[
        {name:'Development',for:'Shape the product concept and validate it before development',
          items:['Study of the business context and product requirements','Interviews with leadership and teams','Market and competitor analysis','Shaping the product concept','Working out and prioritizing functionality','Building a prototype and testing hypotheses','Detailed report with recommendations for further product development'],
          result:'A validated concept, feature priorities and a development plan agreed with leadership',
          tags:['One-off service','2 months'],price:'from $3,500'},
        {name:'Transformation',for:'Take the product from concept to launch and keep developing it',base:0,
          items:['Writing the specification and supporting development','Testing and product acceptance','Product launch and support','Further product development'],
          result:'A launched product and teams that develop it according to a shared strategy',
          tags:['Embedded in your team','Open-ended contract'],price:'from $4,700/mo'}
      ]
    },
    info:['Product consulting helps companies develop, optimize and successfully bring products to market.','Its goal is to make product decisions more effective and the product more competitive, so the client reaches their business goals.'],
    prose:`
      <div class="grp">
        <p>As a product consultant, I help companies build products that meet the needs of users and the market. I work as a cross-functional specialist: beyond interface and user experience design, I cover product management, business analysis and systems analysis — so product problems get solved systemically.</p>
      </div>
      <div class="grp">
        <h3>Key areas of product consulting</h3>
        <ol class="aspects">
          <li><b>Market and audience needs analysis</b><ul class="ilist"><li>Research into the target audience, competitors and market trends</li><li>Finding unique value propositions and niches for the product</li></ul></li>
          <li><b>Product strategy</b><ul class="ilist"><li>Shaping the concept and positioning</li><li>Defining the product’s key features and characteristics</li><li>Planning development (roadmap)</li></ul></li>
          <li><b>Product design</b><ul class="ilist"><li>Building prototypes and user scenarios</li><li>Optimizing the user experience and interface</li></ul></li>
          <li><b>Technical delivery and project management</b><ul class="ilist"><li>Choosing technologies and development teams</li><li>Keeping timelines and budget under control</li></ul></li>
          <li><b>Testing and launch</b><ul class="ilist"><li>Running tests and collecting feedback</li><li>Launch preparation and marketing support</li></ul></li>
          <li><b>Post-launch support and growth</b><ul class="ilist"><li>Analysis of metrics and user behavior</li><li>Improvements and new features</li></ul></li>
        </ol>
      </div>
      <div class="grp">
        <h3>Benefits of product consulting</h3>
        <ul class="ilist">
          <li>An expert outside view, fresh ideas and best practices</li>
          <li>Lower risk when launching new products</li>
          <li>More effective development and marketing</li>
          <li>Faster time to market with a competitive product</li>
        </ul>
      </div>`
  },
  {
    id:'design-systems', n:3, title:'Design systems and interaction standards', short:'Design systems',
    tariffs:{
      smb:[
        {name:'Core',for:'A minimal foundation, so you don’t have to rewrite everything as the product grows',
          items:['Audit of current solutions','Token architecture (3 levels)','Responsive typography','25–35 basic components','Agreements with developers on the handoff format','Concise documentation'],
          result:'A Figma library and tokens ready to hand over to development',
          tags:['One-off service','4–6 weeks'],price:'$1,800–4,100'},
        {name:'System',for:'A complete system that keeps evolving with the product without you',base:0,
          items:['Full component library for the product','Theme support (light and dark)','Interaction standards and patterns','Complete component documentation','Design review of the implementation with the front-end team','Team training'],
          result:'A system designers and developers use to build interfaces the same way',
          tags:['One-off service','2–4 months'],price:'$4,700–8,200'}
      ]
    },
    info:['A design system is a fixed language in which the product speaks to the user, and design speaks to development. Interaction standards are the rules of that language.'],
    prose:`
      <div class="grp">
        <p>A design system automates routine work by standardizing components and patterns. It frees the team from arguing over pixels and shifts the focus to logic, scenarios and the product’s value for the user.</p>
        <p>The economic sense is direct: features ship faster, there are fewer fixes at the seam between design and development, and onboarding new people gets cheaper. The cost of changing the interface stops growing with the size of the product. A design system is an investment in speed: it makes the product predictable for users, for developers and for the business planning releases.</p>
      </div>
      <div class="grp">
        <h3>When do you need a design system?</h3>
        <ul class="ilist">
          <li>The product has more than one team or designer, and decisions have started to diverge</li>
          <li>The same elements exist in several incompatible versions, and no one can tell which one is right</li>
          <li>Mockups and code live separate lives, and the discrepancies surface at acceptance or in production</li>
          <li>A second platform, a dark theme or a second brand is planned, and the current structure won’t hold</li>
          <li>Onboarding a new designer or front-end developer takes weeks because knowledge isn’t documented</li>
        </ul>
      </div>
      <div class="grp">
        <h3>When you don’t need one</h3>
        <p>A full system is overkill if the product hasn’t found its core value yet, hypotheses change every two weeks and the team is roughly two people. At this stage you’d be paying for stability where you need speed to iterate. The right call here is the Core: tokens, typography, a dozen components and agreements with development. Just enough so you don’t have to rewrite everything when the product takes off.</p>
        <div class="note note--accent"><p>A design system built too early is the most expensive form of premature optimization in product development.</p></div>
      </div>
      <div class="grp">
        <h3>What the work includes</h3>
        <ol class="aspects">
          <li><b>Audit and inventory</b><span>I gather existing solutions, find duplicates and contradictions, and assess technical constraints and the handoff process. The result is a map of the actual state and a justified scope of work.</span></li>
          <li><b>Foundation architecture</b><span>A three-level token system: color, sizing, spacing, radii, shadows, motion. Semantic roles instead of raw values. Themes and states are built into the structure.</span></li>
          <li><b>Responsive typography</b><span>A hierarchy of styles across breakpoints and levels. A single scale works from phone to wide monitor without hand-tuning each screen.</span></li>
          <li><b>Component library</b><span>Components with all their states, variants and usage rules. First comes what covers most of the product’s real screens — not what design systems usually include.</span></li>
          <li><b>Interaction standards</b><span>Patterns, not just elements: forms and validation, loading and errors, navigation, empty states, confirming irreversible actions, rules for interface copy.</span></li>
          <li><b>Documentation</b><span>The purpose of each component, its limits, when to use it and when not to. The documentation is written to be used without me.</span></li>
          <li><b>Alignment with development</b><span>Token handoff format, naming principles, versioning. Design review of implemented components before they reach the shared codebase.</span></li>
          <li><b>Processes and ownership handover</b><span>Change procedures, review process, team training, mentoring designers. The goal is for the system to keep evolving without outside help.</span></li>
        </ol>
      </div>`
  },
  {
    id:'ux-ui', n:4, title:'UX/UI consulting', short:'UX/UI consulting',
    tariffs:{
      smb:[
        {name:'Consultation',for:'An answer to a specific interface question',
          items:['A 60–90 minute session on your question','Review of mockups, a prototype or the live product','Recommendations with examples and priorities','Session recording and a short summary of decisions'],
          result:'An answer to your question and a prioritized list of fixes',
          tags:['One-off service','Hourly rate'],price:'$60/hour',note:'Minimum 1 hour'},
        {name:'Express audit',for:'Find the main interface problems in a week',base:0,
          items:['Expert review against usability heuristics','Analysis of key scenarios and where users drop off','Accessibility check: contrast, target sizes, keyboard','Report with screenshots, priorities and solutions','A session with your team to walk through the results'],
          result:'A report: what to fix first and how',
          tags:['One-off service','5–7 business days'],price:'from $700'},
        {name:'Subscription',for:'Ongoing support when questions come up every week',base:0,
          items:['8 hours of consultations a month','Mockup reviews within 2 business days','Chat for quick questions on business days','Unused hours roll over to the next month'],
          result:'Interface decisions are made faster and without mistakes',
          tags:['Open-ended contract','Monthly billing'],price:'$470/mo'}
      ],
      ent:[
        {name:'Consultation',for:'An answer to a specific interface question',
          items:['A 60–90 minute session on your question','Review of mockups, a prototype or the live product','Recommendations with examples and priorities','Session recording and a short summary of decisions'],
          result:'An answer to your question and a prioritized list of fixes',
          tags:['One-off service','Hourly rate'],price:'$80/hour',note:'Minimum 2 hours'},
        {name:'Express audit',for:'Find the main interface problems in two weeks',base:0,
          items:['Expert review against usability heuristics','Analysis of key scenarios and where users drop off','Accessibility check: contrast, target sizes, keyboard','Check against your design system','Report with screenshots, priorities and solutions','A session with your team to walk through the results'],
          result:'A report: what to fix first and how',
          tags:['One-off service','10–14 business days'],price:'from $1,400'},
        {name:'Subscription',for:'Ongoing support when questions come up every week',base:0,
          items:['16 hours of consultations a month','Mockup reviews within 2 business days','Chat for quick questions on business days','Taking part in your team’s design reviews','Unused hours roll over to the next month'],
          result:'Interface decisions are made faster and without mistakes',
          tags:['Open-ended contract','Monthly billing'],price:'$820/mo'}
      ]
    },
    info:['A UX/UI consultation is an outside look at your interface: what gets in users’ way, why, and how to fix it. A one-off session, an express audit or a subscription — pick the format that matches how often you have questions.'],
    prose:`
      <div class="grp">
        <h3>What people come with</h3>
        <ul class="ilist">
          <li>Conversion is dropping and the reason is unclear</li>
          <li>You need an outside view before launch</li>
          <li>The team is split on a decision and needs an argument</li>
          <li>The interface has grown and become inconsistent</li>
          <li>You need to check accessibility for people with visual and motor impairments</li>
        </ul>
      </div>
      <div class="grp">
        <h3>How the work goes</h3>
        <ol class="aspects">
          <li><b>Request</b><span>You describe the task and send a link to the product or mockups</span></li>
          <li><b>Preparation</b><span>I study the product before we meet, so the intro doesn’t eat your time</span></li>
          <li><b>Review</b><span>A session or an audit: we go through scenarios and look for causes, not symptoms</span></li>
          <li><b>Wrap-up</b><span>A summary or a report. I answer follow-up questions for another 2 weeks</span></li>
        </ol>
      </div>
      <div class="grp">
        <h3>What to prepare</h3>
        <ul class="ilist">
          <li>A link to the product, prototype or Figma file</li>
          <li>The goal: what should change after the consultation</li>
          <li>Metrics, if you have them: conversion, bounce rate, support requests</li>
          <li>Constraints: deadlines, technologies, what can’t be changed</li>
        </ul>
      </div>
      `
  }
],

CATEGORIES: [
  {id:'all',t:'All products'},{id:'saas',t:'SaaS platforms'},{id:'crm',t:'CRM systems'},
  {id:'startup',t:'Startups'},{id:'app',t:'Apps'},{id:'other',t:'Other services'},
],
CASES: [
  {t:'MyHotLunchbox',d:'School meal delivery service',c:['startup','app']},
  {t:'Ak Bars Bank acquiring',d:'Payment acquiring',c:['other']},
  {t:'Megaplan',d:'SaaS platform',c:['saas','crm']},
  {t:'Volna Sale',d:'Telecom operator’s startup',c:['startup']},
  {t:'SpaceAI',d:'AI marketplace',c:['startup','saas']},
  {t:'Tizbi',d:'Custom software development company',c:['other']},
],

FUNNEL: [
  {t:'Advertising and marketing',d:'How the company positions its product in advertising',y:60},
  {t:'Behavior',d:'Staff manners and tone',y:180},
  {t:'Competence',d:'How well staff understand the company’s product or service',y:290},
  {t:'Processes',d:'Procedures staff carry out (returns, exchanges, support)',y:403},
  {t:'Systems and tools',d:'The company’s logistics system or software at points of sale',y:520},
  {t:'Product',d:'A service subscription or a pair of sneakers',y:635},
],

PHILO_NAV: [['ph-enter','Entrance'],['ph-problem','The problem'],['ph-ekro','ECMR'],['ph-why','Why do I do this?'],['ph-rules','Code of rules'],['ph-exit','Exit']],

PHILO: `
<article class="philo">
  <!-- Entrance -->
  <section class="ph-sec" id="ph-enter" data-spysec aria-labelledby="h-ph-enter">
    <h2 id="h-ph-enter">Entrance</h2>
    <p>We live in an era when private corporations have become the equivalent of the state — with all of its typical tools of governance and propaganda for their products, ideas and services, aimed at mass consumers through various kinds of manipulation.</p>
    <p>In the race for customers’ attention and money, these corporate “states” rely on the same principles and mechanisms of influence on mass consciousness that propagandists of leading states have used throughout history, and in the 20th century in particular.</p>
    <figure class="ph-img reveal"><img src="assets/img/philosophy/enter.webp" alt="Silhouette of a person in a lit doorway" width="1440" height="956" loading="lazy" decoding="async"></figure>
    <p class="ph-aside">Today’s advertisers and PR people, sometimes without realizing it, draw on the experience of historical figures such as Stalin, Lenin and other politicians and thinkers of that rank. Churchill and Goebbels are also examples of how the fundamental principles of propaganda and advertising emerged — though within a different socio-economic formation.</p>
    <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
    <p class="ph-big">Just as states reach for absolute power to dictate their rules, private companies within a state reach for monopoly, accumulating “capital” as the equivalent of their power on the domestic and foreign markets.</p>
    <p class="ph-big">The managers, advertisers and PR people of these “states” help the companies they work for gain ever greater power within the state and beyond its borders.</p>
    <p class="ph-big">Using IT products as an instrument of influence in the digital space, corporate “states” spread their influence and seize new territory on the market, swallowing startups and small and medium businesses on their way to monopoly.</p>
  </section>

  <!-- The problem -->
  <section class="ph-sec" id="ph-problem" data-spysec aria-labelledby="h-ph-problem">
    <h2 id="h-ph-problem">The problem</h2>
    <figure class="ph-img reveal"><img src="assets/img/philosophy/problem.webp" alt="Two deer locking antlers in a meadow" width="1440" height="960" loading="lazy" decoding="async"></figure>
    <p>We were once told that the “free market” means fair competition, justice and progress. Yet in practice I more often see a pursuit of absolute power — the desire to crush competitors so as to remain one’s own “caste” and single-handedly control the market, setting one’s own rules for the sake of excess profit. There is not, and never was, any desire in this kind of relationship for progress for the many or for strengthening the state.</p>
    <p>Moreover, under the power of private monopolies, the very existence of the state is called into question in the long run. Nor are there the benevolent democratic forms of relations my people were promised while the Soviet legacy was being divided up at the turn of the era. Still, this is the reality we have to live in and act by its rules, while asserting our own will.</p>
    <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
    <p class="ph-big">At a time when we need to build our own IT products to strengthen a common, united state, some companies spend the state budget inefficiently, using taxpayers’ money from various funds under patriotic slogans that are not always backed by real value.</p>
    <p class="ph-big">Another example: corporations that live off the state budget build products however they please, ignoring users’ feedback, needs and problems, because their access to funding is unlimited. In such conditions there is neither the proclaimed “fair competition”, nor product development that meets end users’ needs. In essence, such companies live at someone else’s expense.</p>
    <p class="ph-aside">This kind of relationship between market policy and the individual is, above all, about money, and the ordinary citizen is merely its object. He lives for the state and the corporation, rather than the state and the corporation living for the citizen and solving his real problems. There is no symbiosis to speak of here.</p>
    <div class="ph-more">
      <button class="ph-more__btn" type="button" aria-expanded="false" aria-controls="ph-more-1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg><span>Expand</span></button>
      <div class="ph-more__body" id="ph-more-1"><div>
        <p>The time when world history saw an example of partnership and symbiosis between the state and the people (the majority of the population) has passed. That was the Soviet era, with a different socio-economic formation, where the life of the state was sustained by the majority of the working masses, and the economic model itself was built on the symbiosis of the state and the working class under the dictatorship of an educated proletariat — rather than a nobility that considered itself entitled by birth to rule, to know more and to live better than everyone else.</p>
        <p>The fact that Soviet power itself eventually sank to the level of a “nomenklatura nobility” shows that people who put personal gain above the common cause came to power — and this halted the development of Stalinist Marxism in theory and practice and the development of Soviet socialism as a new formation.</p>
        <p>Today we have, one way or another, returned to similar forms of relations, disguised as a “fair” market and “fair” competition, and we live in a society where words often diverge from deeds. The boundaries of morality and ethics are being eroded ever further for the profit of beneficiaries.</p>
        <p>All of this works as a chain reaction rooted in thinking driven by momentary instincts and desires. These are encouraged and supported in every way by those who benefit from it, without asking what lies ahead for the people, the state and humanity as a whole.</p>
      </div></div>
    </div>
  </section>

  <!-- ECMR -->
  <section class="ph-sec" id="ph-ekro" data-spysec aria-labelledby="h-ph-ekro">
    <h2 id="h-ph-ekro">The Ethics of Competition and Market Relations</h2>
    <figure class="ph-img reveal"><img src="assets/img/philosophy/ekro.webp" alt="Abstract composition: a sphere on soft waves" width="1440" height="1080" loading="lazy" decoding="async"></figure>
    <p>From these reflections I come to a conclusion: if we live in a market economy, then for the sake of common progress we must foster and support competition — on the market as a whole and on the IT market in particular. This would deprive private corporations of the chance to gain sole power and influence over the market, maintain a balance of forces and strengthen the state.</p>
    <p>My view of market relations shapes a market morality and an “ethics of competition”, in which accumulated knowledge of behavioral psychology, propaganda and advertising is used responsibly, consciously and for the good of society and the state.</p>
    <p>Today, however, because of society’s lack of knowledge and literacy, and because people are seen as objects of relations rather than their subjects, these tools and this knowledge are often used for provocation and manipulation in pursuit of one kind of gain or another. The market lives by the “here and now” principle, without thinking about common interests or responsibility to the country’s future generations.</p>
    <p>That is why I formulated my own philosophical approach to market relations and follow it in my commercial work. I called it the “Ethics of Competition and Market Relations” — ECMR.</p>
    <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
    <p class="ph-big">The Ethics of Competition and Market Relations is an approach to commercial activity that puts the interests of society first, supports competition and innovation, opposes monopolies and manipulation, and strives for the most ethical business possible within the existing capitalist system. It is a balance between pragmatism and idealism aimed at protecting human dignity in a market economy and protecting the state.</p>
    <div class="note"><p>This philosophical approach is a critical, ethically driven alternative to the existing market system, with an emphasis on supporting competition, protecting the interests of society and countering monopolization, elitism and manipulative practices.</p></div>

    <h3>Seven key principles</h3>
    <ol class="aspects ph-principles">
      <li><b>Supporting competition</b><ul class="ilist"><li>Competition is the engine of progress and innovation. Supporting small and medium businesses and startups that solve society’s real problems helps avoid the stagnation caused by large corporations monopolizing the market</li><li>Countering large players’ drive for absolute power, which leads them to ignore the needs of society and the interests of the state</li></ul></li>
      <li><b>An ethical approach to business</b><ul class="ilist"><li>Gradually abandoning manipulative practices that violate moral and ethical norms: getting people “hooked” on gambling, provocative psychological tricks in sales</li><li>Products that serve users’ real needs, not only the interests of the beneficiary</li></ul></li>
      <li><b>Education and enlightenment as a tool of struggle</b><ul class="ilist"><li>Through articles, consultations and other forms of communication — giving every market participant the chance to see how the market works, understand the mechanisms of manipulative influence, recognize deception, make informed choices and become part of a fair economy (<a class="link" href="https://t.me/kvazardesign" target="_blank" rel="noopener">t.me/kvazardesign</a>)</li></ul></li>
      <li><b>Serving society and the state</b><ul class="ilist"><li>Business and its products should be a tool for strengthening the economy and the independence of the state</li><li>Priority goes to projects that develop society and protect national interests, not the interests of a group of beneficiaries</li></ul></li>
      <li><b>Critique of the capitalist paradigm and the search for balance</b><ul class="ilist"><li>Disagreement with market relations built on deception, speculation and preying on human weaknesses</li><li>Accepting the need to act within the existing system, but with an ironic and critical eye — changing the patterns of socio-economic relations through personal example and collaboration with like-minded people</li></ul></li>
      <li><b>Transparency as the basis of trust</b><ul class="ilist"><li>Openness comes first — for example, published prices, which used to be hidden until the first conversation with a client</li><li>Living by one’s values in practice, in particular keeping the word given in advertising a product or service</li></ul></li>
      <li><b>Flexibility and adaptation</b><ul class="ilist"><li>Looking for new solutions and being ready to revise approaches when market conditions change or the approaches stop serving society</li><li>Helping startups and existing products stay resilient so they can survive and grow even in uncertain times. My philosophy is not a dogma but a living process that evolves with the market</li></ul></li>
    </ol>

    <div class="ph-cards">
      <div class="note"><h4>ECMR mission</h4><p>To help build a fair market where business serves people, society and the state, and society and the state, in turn, keep the market in check. To break the paradigm built on deception and manipulation by supporting competition and ethical standards.</p></div>
      <div class="note"><h4>ECMR values</h4><p>Honesty. Serving society. Supporting innovation. Protecting the most vulnerable market players. Countering monopolies and seeking balance. Countering speculation and harmful manipulation.</p></div>
    </div>
  </section>

  <!-- Why do I do this? -->
  <section class="ph-sec" id="ph-why" data-spysec aria-labelledby="h-ph-why">
    <h2 id="h-ph-why">Why do I do this?</h2>
    <figure class="ph-img ph-img--dark reveal"><img src="assets/img/philosophy/why.webp" alt="The studio’s red mark on a dark background" width="1440" height="821" loading="lazy" decoding="async"></figure>
    <p>The market often makes money from deception and from those who know little about a particular field or about how things work. Add to that the greed and gullibility on which people with dishonest intentions build their businesses, profiting from others’ weaknesses and ignorance.</p>
    <p>Ignorance is the main vulnerability that dishonest market players exploit. Today it is important not only to protect users and entrepreneurs from manipulation, but to equip them with knowledge, so they can make their own decisions and understand how they might be steered by those whose intentions are dishonest.</p>
    <div class="ph-goals">
      <div class="ph-goal">
        <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
        <p class="ph-goal__lbl">Micro goal:</p>
        <p class="ph-goal__text">To promote and strengthen my positioning on the IT market by offering my expertise for building socially significant products.</p>
        <div class="ph-more">
          <button class="ph-more__btn" type="button" aria-expanded="false" aria-controls="ph-goal-1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg><span>Expand</span></button>
          <div class="ph-more__body" id="ph-goal-1"><div><p>This includes supporting competition by helping small and medium businesses, abandoning manipulative practices and focusing on “ethical design”. Ultimately, through personal example and education (consultations, articles at <a class="link" href="https://t.me/kvazardesign" target="_blank" rel="noopener">t.me/kvazardesign</a>), to help shape market ethics in which knowledge of behavioral psychology and advertising is used consciously and for the good of society — helping people recognize deception and become active participants in a fair economy.</p></div></div>
        </div>
      </div>
      <div class="ph-goal">
        <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
        <p class="ph-goal__lbl">Mid-level goal:</p>
        <p class="ph-goal__text">To change the patterns of socio-economic relations through a personal example of ethical business and collaboration with like-minded partners who share the ECMR values.</p>
        <div class="ph-more">
          <button class="ph-more__btn" type="button" aria-expanded="false" aria-controls="ph-goal-2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg><span>Expand</span></button>
          <div class="ph-more__body" id="ph-goal-2"><div><p>Education, professional skills and capital are seen not as tools of personal enrichment and power, but as tools for fighting the policy of self-serving manipulation and the power of monopolies and transnational corporations that exploit people’s ignorance, greed and weaknesses for their own interests.</p><p>By supporting innovation and protecting weaker players (small and medium businesses), as well as projects that strengthen the economy and independence of the state, to contribute to a balance of power on the market. This includes criticizing a market nature built on speculation and manipulation, and promoting “transparency” and education, so that our dreams and ideas serve the good of the people and the Motherland.</p></div></div>
        </div>
      </div>
      <div class="ph-goal">
        <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
        <p class="ph-goal__lbl">Macro goal:</p>
        <p class="ph-goal__text">Underlying all of this is the goal of breaking the fundamental paradigm built on deception, manipulation, speculation and the exploitation of people’s ignorance and lack of knowledge for personal gain.</p>
        <div class="ph-more">
          <button class="ph-more__btn" type="button" aria-expanded="false" aria-controls="ph-goal-3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg><span>Expand</span></button>
          <div class="ph-more__body" id="ph-goal-3"><div><p>The macro goal means creating the fairest possible market and principles of competition. A form of relations in which business serves people, society and the state, while society and the state provide oversight and protection against the self-serving intentions of private business aimed at personal gain outside public and state interests — at those levels of responsibility where this is unacceptable.</p></div></div>
        </div>
      </div>
    </div>
    <p class="ph-aside">Humanity deserves better. It only takes setting an example and pointing the way: everything depends on the intentions of strong people — those who hold some form of power or who want to fight this nature. If we take the easy path within the paradigm of “man is a wolf to man”, we will not build a better world, and we will deserve only the consequences of our common ignorance, greed, indifference and fear.</p>
    <p class="ph-aside">On the other hand, I am not trying to build a “new world” by changing the socio-economic formation and searching for revolutionary paths, as our great predecessors did — the Bolsheviks and the early Soviet government, who fought the old formation of feudal-market exploitation. Its masters, under the guise of good deeds and religious justifications, subjugated and exploited their own and other peoples. My path lies within the capitalist world, just with my own, more ironic point of view. It is a balancing act within the circumstances of reality — in the absence of socialist forms of socio-economic relations.</p>
    <div class="note note--accent"><h4>My mission</h4><p>To maintain balance on the market and help build a better-educated society. To strengthen the national economy and the unity of the country. To oppose the dominance of monopolies by promoting the principles of ethical competition (ECMR).</p></div>
  </section>

  <!-- Code of rules -->
  <section class="ph-sec ph-sec--wide" id="ph-rules" data-spysec aria-labelledby="h-ph-rules">
    <h2 id="h-ph-rules">Code of rules</h2>
    <ol class="rules">
      <li><p>I don’t work with religious or quasi-religious organizations, including sects, nor with bookmakers, online casinos, nationalist organizations and similar entities.</p></li>
      <li><p>I work mainly with small and medium businesses and help develop socially significant startups.</p><aside class="rules__note"><b>Comment</b><p>I may work with big business and corporations only on a one-off, case-by-case basis — for example, if a corporation wants to build a product for ideologically sound and useful work with the public, shaping a worldview I share and am ready to support.</p></aside></li>
      <li><p>I don’t work by the “customer is always right” principle. I help work out the design strategy of a product or service so that it is convenient for the user. I rely on data about the business and the market, my professional experience and judgment. The user’s good comes first, everything else second.</p></li>
      <li><p>I don’t use behavioral psychology tools, psychological tricks and manipulation to the detriment of people and society for the sake of the beneficiary, exploiting users’ ignorance and lack of awareness. For example, manipulation designed to get people “hooked” on gambling.</p><aside class="rules__note"><b>Comment</b><p>If you want to use our collaboration to build tools of negative manipulation, deception and other dishonest schemes, justifying it with “people make their own choices” — we are not on the same path. A person makes a choice when they realize they are being manipulated and deceived and understand the possible consequences. Otherwise it is not a choice, it is deception.</p></aside></li>
      <li><p>I don’t tailor solutions to the personal tastes of the client and their managers. Our collaboration serves the end user, whose pleasant experience will also benefit the business. The users’ good comes first, everything else second.</p></li>
      <li><p>I work with sound reasoning and choose tools carefully for the task at hand. I don’t blindly follow trends, fashionable methodologies or new theories just because “that’s how they do it in the West” or “someone somewhere does it”. I approach every task thoughtfully: blindly copying other people’s solutions is a cargo cult.</p></li>
      <li><p>I respect the free will and work of every teammate and stand up for their rights and interests against anyone who encroaches on them in the course of work.</p></li>
      <li><p>My team is made up, of their own free will, only of specialists who share my worldview, love their craft, don’t lock themselves into rules and find new concepts and ideas to solve problems.</p></li>
      <li><p>I respect and value every reasonable, people-oriented client and treat them with the utmost understanding and loyalty. I will always make concessions for such clients and find a compromise in difficult situations — as long as the client doesn’t cross personal boundaries or offend my and my teammates’ honor and dignity.</p></li>
      <li><p>Design as a field of work is a product of the thinking of a designer or a group of designers, and its price is determined by the designer’s value. That value can’t be reduced to crude pricing processes. So prices are formed by a combination of circumstances, indirectly taking into account competitors’ prices, supply and demand on the market and other factors.</p></li>
      <li><p>I don’t take credit for the work of the designer on a project; on the contrary, I promote their work and credit authorship in every project, so they can grow and build a personal reputation that will help their career beyond working with me. I am against anyone living off another person’s name and labor. I run a collective practice for the common cause and the success of the product, embodying new forms of local socio-economic relations.</p><aside class="rules__note"><b>Comment</b><p>I don’t accept anyone appropriating other people’s achievements and building capital on speculation, deception and the suppressed will of employees. I wage an ideological fight against such forms of relations and openly call things by their names.</p></aside></li>
      <li><p>Every member of the Studio is their own boss and subordinate. We look at results and most often adjust the company’s policy and internal and external relations through collective decisions. The exception is difficult critical situations: responsibility for decisions in them lies with the Studio’s founder.</p></li>
    </ol>
  </section>

  <!-- Exit -->
  <section class="ph-sec" id="ph-exit" data-spysec aria-labelledby="h-ph-exit">
    <h2 id="h-ph-exit">Exit</h2>
    <figure class="ph-img ph-img--dark reveal"><img src="assets/img/philosophy/exit.webp" alt="A red dot in the dark" width="1440" height="1080" loading="lazy" decoding="async"></figure>
    <p>If you have a startup or an existing socially significant product in IT or GameDev and need help with product design, UX design, design consulting or service design, get in touch.</p>
    <dl class="contacts contacts--compact">
      <div><dt>Telegram:</dt><dd><a class="link" href="https://t.me/bushkovf" target="_blank" rel="noopener">bushkovf</a></dd></div>
      <div><dt>Email:</dt><dd><a class="link" href="mailto:bushkovf@mail.ru">bushkovf@mail.ru</a></dd></div>
      <div><dt>Phone:</dt><dd><a class="link" href="tel:+79091352248">+7 909 135-22-48</a></dd></div>
    </dl>
  </section>
</article>

<section class="ph-channels" aria-label="Telegram channels">
  <div class="kvazar"><h3>Kvazar</h3><p>If you share the views and ideas set out on this page, subscribe to our movement’s Telegram channel. We share experience, discuss ideas and build teams to bring them to life. Straight to the point, no spam or chatter.</p><a class="btn btn--outline" href="https://t.me/kvazardesign" target="_blank" rel="noopener">Learn more</a></div>
</section>
`
};
