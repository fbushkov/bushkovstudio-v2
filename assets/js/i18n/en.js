/* English version: all site copy. Keys mirror ru.js. */
'use strict';
window.CONTENT = window.CONTENT || {};
CONTENT.en = {
plural: n => n === 1 ? 'item' : 'items',

PAGES: {expertise:'Expertise',projects:'Portfolio',philosophy:'Philosophy',contacts:'Contacts'},
TITLES: {blog:'Blog'},

UI: {
  title:'Philipp Bushkov — strategic service designer',
  description:'Strategic design, service design, design systems and business diagnostics. Philipp Bushkov designs how a company creates experiences for customers and teams.',
  menuOpen:'Open menu', menuOpenMain:'Open main menu', menuClose:'Collapse main menu',
  mainNav:'Main navigation', sectionsNav:'Page sections', toHome:'Home page',
  back:'Back', filterLbl:'Filter by category:', filterAria:'Category filter', sitemap:'Site map',
  langGroup:'Language', themeGroup:'Color theme',
  themeLight:'L<span class="sr-only">ight</span>', themeDark:'D<span class="sr-only">ark</span>',
  themeLightTitle:'Light theme', themeDarkTitle:'Dark theme',
  home:'Home', crumbs:'Breadcrumbs',
  photoAlt:'Philipp Bushkov',
  intro:'My name is Philipp Bushkov.<br>I design how a company creates experiences.<br>I connect the customer journey, internal<br>processes and the company’s tools.',
  h1:'<span>Strategic</span><span>service designer</span><span>CX/EX/UX</span>',
  ctaMax:'Discuss your task', ctaMaxStub:'MAX chat link',
  projectsH:'Projects', expertiseH:'Expertise',
  proj1:'<h3>Tizbi</h3><p>Custom software development company</p>',
  proj2:'<h3>Ak Bars Bank</h3><p>Bank of the Republic of Tatarstan</p>',
  proj3:'<h3>Megaplan</h3><p>SaaS platform</p>',
  proj4:'<h3>Volna Sale</h3><p>Telecom operator’s startup</p>',
  allProjects:'View all projects',
  expIntro:'My expertise is strategic design. I rethink methodologies and management dogmas that are adopted without adapting them to local realities, and I design the service and the team’s way of working around the product.',
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
  kvazarText:'If you share the views and ideas set out in the Philosophy section, you can subscribe to our movement’s Telegram channel. We share experience, discuss ideas and build teams to bring them to life. Straight to the point, no spam or chatter.',
  kvazarBtn:'Learn more', kvazarStub:'Kvazar Telegram channel link',
  rights:'all rights belong to the like-minded',
  request:'Send a request', requestStub:'The request form is coming soon', was:'Was: ',
  includes:'What’s included:', allFrom: n => `Everything in <b>${n}</b>, plus:`, result:'Outcome:',
  more: (n, w) => `${n} more ${w}`, collapse:'Collapse', expand:'Expand',
  funnelAria:'Layers of customer experience from advertising to the product',
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
  {title:'Expertise',href:'#/expertise',items:[['Diagnostics','#/expertise/diagnostics'],['Strategic design','#/expertise/strategy'],
    ['Service design','#/expertise/service-design'],['Team operating system','#/expertise/team-os']
    ]},
  {title:'Philosophy',href:'#/philosophy',items:[['ECMR','#/philosophy/ph-ekro'],['Code of rules','#/philosophy/ph-rules']]},
  {title:'Contacts',href:'#/contacts',items:[
    ['bushkovf@mail.ru','mailto:bushkovf@mail.ru'],['bushkovf','https://t.me/bushkovf'],['Kvazar','https://t.me/kvazardesign']]},
],

  /* Карточки услуг на главной */
SERVICES: {
  smb:[
    {"id": "diagnostics", "t": "Diagnostics", "d": "An outside look at your product, processes and metrics. Shows where the business loses customers and money and where to start.", "tags": ["strategy session", "express diagnostics"], "p": "from $180"},
    {"id": "strategy", "t": "Strategic design", "d": "Rethinking methodologies and metrics that were introduced without adapting them to your business. Product strategy and a clear management rhythm.", "tags": ["one-off service", "3–4 weeks"], "p": "from $1,800"},
    {"id": "service-design", "t": "Service design", "d": "Designing the customer experience by planning and organizing business resources. A comprehensive overhaul of the company’s entire product.", "tags": ["one-off service", "one month"], "p": "from $1,800"},
    {"id": "team-os", "t": "Team operating system", "d": "Design systems, standards and processes that help the team build the product faster and with fewer arguments.", "tags": ["one-off service", "4–6 weeks"], "p": "from $1,800"}
  ],
  ent:[
    {"id": "diagnostics", "t": "Diagnostics", "d": "How the company really creates its product and where the system works against results. A map of problems and a roadmap for leadership.", "tags": ["strategy session", "3–4 weeks"], "p": "from $350"},
    {"id": "strategy", "t": "Strategic design", "d": "Rebuilding KPIs, regulations and management methodologies that no longer serve results. A pilot and scaling.", "tags": ["one-off service", "2–4 months"], "p": "from $7,100"},
    {"id": "service-design", "t": "Service design", "d": "Designing the whole service together with department processes. A target blueprint, a pilot and metrics.", "tags": ["one-off service", "2–3 months"], "p": "from $10,600"},
    {"id": "team-os", "t": "Team operating system", "d": "A design system as a shared standard for several teams, plus the rules and tools the company develops on its own.", "tags": ["one-off service", "2–4 months"], "p": "from $7,100"}
  ]
},

/* ---------------------------------------------------------
   Тарифы. Единый формат карточки:
   название → для чего → что входит → на выходе →
   формат и срок → цена → действие.
   Старший тариф не повторяет младший: «Всё из „…“» + только
   разница (+). Длинный список сворачивается после 5 пунктов.
   --------------------------------------------------------- */

SECTIONS: [
  {
    id:"diagnostics", n:1, title:"Diagnostics", short:"Diagnostics",
    tariffs:{
      smb:[
        {"name": "Strategy session", "gen": "Strategy session", "for": "Work through one problem and see where to go next", "items": ["A two-hour meeting with the owner or a manager", "Reviewing your product and materials beforehand", "Looking at the problem through the eyes of customers, the team and the money", "A prioritized list of steps and a recording of the meeting"], "result": "A clear next step and an answer to whether you need a bigger project", "tags": ["One-off meeting", "2 hours"], "price": "$180"},
        {"name": "Express diagnostics", "for": "Find the main bottlenecks in your business in two weeks", "items": ["Interviews with the owner and key employees", "Walking the customer journey from first contact to repeat purchase", "Audit of the interface and touchpoints", "Review of the metrics you base decisions on", "Review of the team’s processes and tools", "A report with ten priorities and a wrap-up meeting"], "result": "A map of problems and a plan for the next three months", "tags": ["One-off service", "1–2 weeks"], "price": "$1,100", "note": "Credited toward a project"}
      ],
      ent:[
        {"name": "Strategy session", "gen": "Strategy session", "for": "Work through one problem and decide how to approach it", "items": ["A meeting of up to three hours with the heads of a business unit", "Reviewing your product, structure and materials beforehand", "Looking at the problem through the eyes of customers, teams and management", "A prioritized list of steps and a recording of the meeting"], "result": "A shared view of the problem and a decision on where to start", "tags": ["One-off meeting", "Up to 3 hours"], "price": "$350"},
        {"name": "Strategic diagnostics", "for": "See how the company really creates its product and where the system works against results", "items": ["Interviews with leadership, teams and partners", "Current-state customer journey map and service blueprint", "Audit of processes, regulations and tools", "Audit of metrics, KPIs and management methodologies", "Maturity assessment of the product and design function", "Target picture and a 6–12 month roadmap", "A pilot proposal and a presentation of findings to leadership"], "result": "A map of problems, a target picture and a roadmap that leadership understands", "tags": ["One-off service", "3–4 weeks"], "price": "from $5,300", "note": "50% credited toward a project"}
      ]
    },
    info:["Diagnostics is an outside look at how the work around your product is organized. It shows where the company loses customers, money and time, and where to start changing things.", "Every direction starts with diagnostics. If it turns out you don’t need a bigger project, you get a plan and can follow it on your own."],
    prose:`
      <div class="grp">
        <h3>When do you need diagnostics?</h3>
        <ul class="ilist">
          <li>The company works hard, but results aren’t growing</li>
          <li>You introduced a methodology or a metrics system and never saw the benefit</li>
          <li>Departments argue about priorities, and each one is right by its own numbers</li>
          <li>Before a big project, you need to understand what really needs fixing</li>
        </ul>
      </div>
      <div class="grp">
        <h3>Why it’s fast</h3>
        <p>I do the routine part of the work (transcribing interviews, consolidating data, a first pass over the interface) with AI. My time goes into conversations with people and conclusions. That is why diagnostics takes weeks rather than months and costs less than the project it may grow into.</p>
        <div class="note note--accent"><p>A strategy session is the simplest way to get to know each other. In two hours it becomes clear whether the problem has a solution and whether you need me for it.</p></div>
      </div>
      `
  },
  {
    id:"strategy", n:2, title:"Strategic design", short:"Strategic design",
    tariffs:{
      smb:[
        {"name": "Rebuild", "gen": "Rebuild", "for": "Rebuild metrics and methodologies to fit your business", "items": ["Review of the methodologies and metrics already in place", "Interviews with the owner and key employees", "Finding metrics that have become goals and hurt the work", "A metrics tree from customer outcome down to team tasks", "Rules for the weekly review of numbers and decision-making", "Product strategy and quarterly priorities"], "result": "A handful of metrics instead of dozens of reports, and a clear management rhythm", "tags": ["One-off service", "3–4 weeks"], "price": "$1,800–2,900"},
        {"name": "Support", "for": "Put the new system in place and make it a habit", "base": 0, "items": ["Taking part in metric reviews during the first months", "Adjusting metrics and rules along the way", "Training managers to work with the new system", "Product decisions together with the team"], "result": "A management system that works without outside help", "tags": ["Embedded in your team", "Monthly"], "price": "from $2,400/mo"}
      ],
      ent:[
        {"name": "Rebuild", "gen": "Rebuild", "for": "Rebuild the metrics and management methodologies of a unit or the whole company", "items": ["Audit of methodologies, regulations, KPIs and reporting", "Interviews with leadership and teams", "Finding metric conflicts between departments", "A metrics tree from customer outcome down to team metrics", "Metric owners and rules for changing metrics", "Decision-making process and management rhythm", "Product strategy and roadmap", "A pilot in one department"], "result": "A new management model proven in a pilot, and a plan to scale it", "tags": ["One-off service", "2–4 months"], "price": "from $7,100"},
        {"name": "Support", "for": "Scale the model and see the changes through to results", "base": 0, "items": ["Rolling the model out to other departments", "Handling resistance to change and internal communication", "Adjusting metrics and regulations", "Training managers and handing over the methodology"], "result": "A management model the company develops on its own", "tags": ["Embedded in your team", "Monthly"], "price": "from $4,100/mo"}
      ]
    },
    info:["Strategic design is designing how a company makes decisions. Not an interface or a single service, but the rules people work by, the metrics they use to judge success, and the methodologies that manage them.", "Many methodologies arrive ready-made from books, courses and other companies and are introduced without being rethought for local realities. I help you figure out what actually works for you and what has turned into ritual."],
    prose:`
      <div class="grp">
        <h3>Where the problem comes from</h3>
        <p>Every methodology was created under specific conditions. In another country, industry and culture, for a company of a different size and people of a different maturity. When it is copied as is, only the form remains, without the meaning. Meetings are held because that’s the rule. Metrics are collected because the report requires them. Goals are set because the book says so.</p>
        <p>Six months later the team spends a noticeable share of its time maintaining a system that was supposed to help it. Leadership sees numbers but doesn’t see what is really going on.</p>
      </div>
      <div class="grp">
        <h3>Dogmas I work with</h3>
        <ul class="ilist">
          <li>KPIs are met while things get worse for the customer</li>
          <li>Statistics and “valuable final product” reports are filled in for the report, not for decisions</li>
          <li>Scrum and Agile have become a set of meetings, while decisions are made the old way</li>
          <li>OKRs have become a work plan with a new name</li>
          <li>Research and customer journey maps were done once and filed away</li>
        </ul>
        <div class="note"><p>I’m not against methodologies. I’m against applying them without understanding why they were created and how they work in your conditions. Sometimes it’s enough to keep half of the rituals and drop the rest.</p></div>
      </div>
      <div class="grp">
        <h3>How the work goes</h3>
        <ol class="aspects">
          <li><b>Review</b><span>I look at how methodologies and metrics really live in the company, not on paper. I talk to the people who fill them in and to those who make decisions based on them.</span></li>
          <li><b>Meaning</b><span>For every rule and metric we answer one question. Which decision does it help make? If there’s no answer, the rule is unnecessary.</span></li>
          <li><b>Rebuild</b><span>I rebuild the system starting from the outcome for the customer and the business. I keep what works and change what gets in the way.</span></li>
          <li><b>Pilot</b><span>We test the new system on one team or department before changing everything.</span></li>
          <li><b>Handover</b><span>I train managers and document the rules so the system works without me.</span></li>
        </ol>
      </div>
      <div class="grp">
        <h3>Metrics and product strategy</h3>
        <p>A good metrics system is not a dashboard but an agreement on what counts as success. I connect product, service and team metrics into one tree so everyone can see how their work affects the overall result. Product strategy grows out of this tree rather than living as a separate document.</p>
        <div class="note note--accent"><p>When a measure becomes a target, it ceases to be a good measure. The point is not to find the perfect metric, but to make numbers help people make decisions.</p></div>
      </div>
      `
  },
  {
    id:"service-design", n:3, title:"Service design", short:"Service design",
    tariffs:{
      smb:[
        {"name": "Optimization", "gen": "Optimization", "for": "Find and remove bottlenecks in a running service", "items": ["Data analysis and study of the business’s capabilities and constraints", "Defining problems and goals, setting service design objectives", "Generating and selecting solutions", "Prototyping and testing", "Designing and detailing the service", "Service metrics and how to collect them", "Detailed consultation on implementation"], "result": "A customer journey map, a service blueprint and an implementation plan", "tags": ["One-off service", "One month"], "price": "$1,800–2,900"},
        {"name": "Transformation", "for": "Rebuild the service and see the changes through to results", "base": 0, "items": ["Rolling out and supporting the changes", "Measuring effectiveness and developing the service"], "result": "A working, renewed service and metrics that show the effect", "tags": ["Embedded in your team", "Monthly"], "price": "from $2,400/mo"}
      ],
      ent:[
        {"name": "Design", "gen": "Design", "for": "Design the whole service together with department processes", "items": ["Data analysis and study of the business’s capabilities and constraints", "Interviews with departments and partners", "Current-state customer journey map and service blueprint", "Defining problems and goals, setting service design objectives", "Generating and selecting solutions, prototyping and testing", "Target-state service blueprint with department processes", "Service metrics and how to collect them", "A pilot in one area"], "result": "A target service blueprint proven in a pilot, and a rollout plan by department", "tags": ["One-off service", "2–3 months"], "price": "$10,600–17,600"},
        {"name": "Transformation", "for": "Rebuild the service and see the changes through to results", "base": 0, "items": ["Rolling out and supporting the changes", "Measuring effectiveness and developing the service", "Training teams and handing over the methodology"], "result": "A working, renewed service and metrics that show the effect", "tags": ["Embedded in your team", "Monthly"], "price": "from $4,100/mo"}
      ]
    },
    info:["Service design is an interdisciplinary, iterative approach to building a product. It draws on many methodologies, tools and action scenarios to meet the needs of every stakeholder — from the user to the business."],
    prose:`
      <div class="note"><p>For a shared understanding of terms, a product is anything a company offers on the market (a service or a physical/digital product).</p></div>
      <div class="grp">
        <h3>Why service design?</h3>
        <p>Service design is about designing the product as a whole. It covers every possible point where a person comes into contact with it, from their reaction to how the company speaks to customers through advertising and staff to the final use of the product and coming back to it.</p>
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
        <p>Customer experience is often shaped by departments within a company that are isolated in their interests and competencies. Each speaks “its own language”. Employees from different departments have their own view of the product and the problems it solves, their own success criteria, KPIs and so on. This gets in the way of forming a shared understanding.</p>
        <p>On top of that, there is often a conflict between managers who, for the sake of their team goals, closed sprints and features aimed inside the company, sacrifice the common interest for private ones. Such relationships stand in the way of improving the customer experience and turn into a race between departments that forget the common cause and the product’s value for the customer.</p>
        <div class="note"><p>One of the missions of service design for employees is to remove the boundaries between areas of expertise, “breaking down the walls” between isolated departments and helping them form shared values and a shared vision of the company’s product. However, the method isn’t for everyone, since such evolutionary forms require a certain maturity of the company and its top management. Far from everyone has it.</p></div>
      </div>`
  },
  {
    id:"team-os", n:4, title:"Team operating system", short:"Team operating system",
    tariffs:{
      smb:[
        {"name": "Core", "gen": "Core", "for": "A minimal foundation so you don’t have to rewrite everything as the product grows", "items": ["Audit of current solutions", "Three-level token architecture", "Responsive typography", "25–35 base components", "Contrast and target size check against WCAG", "Agreements with development on the handoff format", "Short documentation"], "result": "A Figma library and tokens ready to hand off to development", "tags": ["One-off service", "4–6 weeks"], "price": "$1,800–4,100"},
        {"name": "System", "for": "A complete system that evolves with the product without you", "base": 0, "items": ["Complete component library for the product", "Light and dark themes", "Interaction standards and patterns", "Working rules for design and development", "Complete component documentation", "Team training"], "result": "A system that designers and developers use to build interfaces the same way", "tags": ["One-off service", "2–3 months"], "price": "$4,700–8,200"}
      ],
      ent:[
        {"name": "Standard", "gen": "Standard", "for": "A design system as a shared standard for several teams and products", "items": ["Audit of solutions across all products and teams", "Token and theme architecture for several brands or platforms", "Complete component and pattern library", "WCAG 2.2 accessibility requirements and contrast checks", "Documentation and the handoff process to development", "Working rules for design, development and product"], "result": "A single standard that teams use to build interfaces the same way", "tags": ["One-off service", "2–4 months"], "price": "$7,100–14,100"},
        {"name": "Adoption", "for": "Make the system part of how the company works", "base": 0, "items": ["A system owner and a process for accepting changes", "Choosing and setting up the team’s tools", "Onboarding designers and developers", "Metrics of system usage", "Team training and mentoring"], "result": "A system the company develops internally without outside help", "tags": ["Embedded in your team", "Monthly"], "price": "from $4,100/mo"}
      ]
    },
    info:["A team operating system is the rules, standards and tools a team uses to build the product. The design system is its main part, but not the only one.", "A design system is the documented language the product uses to speak to users and that design uses to speak to development. Interaction standards are the rules of that language."],
    prose:`
      <div class="grp">
        <p>A design system automates routine work by standardizing components and patterns. It frees the team from arguing over pixels and shifts the focus to logic, scenarios and the product’s value for the user.</p>
        <p>The economic sense is direct. Features ship faster, there are fewer fixes at the seam between design and development, and onboarding new people gets cheaper. The cost of changing the interface stops growing with the size of the product. A design system is an investment in speed that makes the product predictable for users, for developers and for the business planning releases.</p>
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
        <p>A full system is overkill if the product hasn’t found its core value yet, hypotheses change every two weeks and the team is roughly two people. At this stage you’d be paying for stability where you need speed to iterate. The right call here is the Core, with tokens, typography, a dozen components and agreements with development. Just enough so you don’t have to rewrite everything when the product takes off.</p>
        <div class="note note--accent"><p>A design system built too early is the most expensive form of premature optimization in product development.</p></div>
      </div>
      <div class="grp">
        <h3>What the work includes</h3>
        <ol class="aspects">
          <li><b>Audit and inventory</b><span>I gather existing solutions, find duplicates and contradictions, and assess technical constraints and the handoff process. The result is a map of the actual state and a justified scope of work.</span></li>
          <li><b>Foundation architecture</b><span>A three-level token system for color, sizing, spacing, radii, shadows and motion. Semantic roles instead of raw values. Themes and states are built into the structure.</span></li>
          <li><b>Responsive typography</b><span>A hierarchy of styles across breakpoints and levels. A single scale works from phone to wide monitor without hand-tuning each screen.</span></li>
          <li><b>Component library</b><span>Components with all their states, variants and usage rules. First comes what covers most of the product’s real screens — not what design systems usually include.</span></li>
          <li><b>Interaction standards</b><span>Not just elements but patterns for forms and validation, loading and errors, navigation, empty states and confirming irreversible actions, plus rules for interface copy.</span></li>
          <li><b>Accessibility</b><span>Contrast, target sizes and keyboard use under WCAG 2.2 are built into tokens and components from the start rather than checked at the end.</span></li>
          <li><b>Documentation</b><span>The purpose of each component, its limits, when to use it and when not to. The documentation is written to be used without me.</span></li>
          <li><b>Alignment with development</b><span>Token handoff format, naming principles, versioning. Design review of implemented components before they reach the shared codebase.</span></li>
          <li><b>Processes and ownership handover</b><span>Change procedures, review process, team training, mentoring designers. The goal is for the system to keep evolving without outside help.</span></li>
        </ol>
      </div>
      <div class="grp">
        <h3>More than components</h3>
        <p>A design system only works when the people around it have agreed on how to work. That is why the team operating system also covers how design, development and product work together, a clear owner for every decision, and tools the team actually uses rather than keeps for show.</p>
        <div class="note"><p>For employees, it means fewer arguments and less rework, and a fast start for newcomers. For users, it means a consistent interface and predictable product behavior.</p></div>
      </div>`
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
  <section class="ph-sec" id="ph-enter" data-spysec aria-labelledby="h-ph-enter">
    <h2 id="h-ph-enter">Entrance</h2>
    <p>We live in an era when private corporations are the equivalent of the state, with all of its typical tools of governance and propaganda for their products, ideas and services, aimed at mass consumers through various kinds of manipulation.</p>
    <p>In the race for customers’ attention and money, these corporate “states” fundamentally rely on the same principles and mechanisms of influence on mass public consciousness that were used by the propagandists of leading states throughout history, and in the 20th century in particular.</p>
    <figure class="ph-img reveal"><img src="assets/img/philosophy/enter.webp" alt="Silhouette of a person in a lit doorway" width="1440" height="956" loading="lazy" decoding="async"></figure>
    <p class="ph-aside">Today’s advertisers and PR people, sometimes without realizing it, draw on the past achievements of such minds and historical figures as Joseph Stalin, Lenin and other politicians and thinkers of that rank. Churchill and Goebbels are also examples of how the fundamental principles of propaganda and advertising emerged, while representing, on the other hand, a different socio-economic formation.</p>
    <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
    <p class="ph-big">Just as states reach for absolute power in their desire to dictate their own rules, private companies within a state reach for monopoly, accumulating “capital” as the equivalent of their power on the domestic and foreign markets.</p>
    <p class="ph-big">In this respect, the managers, advertisers and PR people of such “states” help the company they work for gain ever greater power within the state and beyond its borders.</p>
    <p class="ph-big">Using IT products as a tool of influence in the digital environment, these corporate “states” spread their influence and capture new territory on the market, absorbing startups and small and medium businesses as they strive for monopoly.</p>
  </section>

  <section class="ph-sec" id="ph-problem" data-spysec aria-labelledby="h-ph-problem">
    <h2 id="h-ph-problem">The problem</h2>
    <figure class="ph-img reveal"><img src="assets/img/philosophy/problem.webp" alt="Two deer locking antlers in a meadow" width="1440" height="960" loading="lazy" decoding="async"></figure>
    <p>We were once told that the “free market” means fair competition, justice and progress. Yet all I see is self-interest and faint-heartedness in the pursuit of absolute power and the desire to crush competitors, so as to remain one’s own “caste” and single-handedly control the market, setting one’s own rules for the sake of excess profit. In this kind of relationship there is not, and never was, any desire for progress for the many or for strengthening the state.</p>
    <p>Moreover, under the power of private monopolies the very existence of the state is called into question in the long run. Nor are there the benevolent democratic forms of relations my people were promised while the Soviet legacy was being divided up at the turn of the era. Still, this is the reality in which we have to live and act by its rules, while asserting our own will.</p>
    <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
    <p class="ph-big">At a time when we need to create our own IT products to strengthen a common, united state, some companies manage to spend the state budget inefficiently, using taxpayers’ money from various funds under the banner of patriotism and other, often empty, slogans.</p>
    <p class="ph-big">Another example is when corporations that live off the state budget build products however they please, ignoring users’ feedback, needs and problems, thanks to their unlimited access to funding. In such conditions there is neither the so-called “fair competition” these companies claim to seek, nor product development that meets end users’ needs. In essence, it is living at someone else’s expense.</p>
    <p class="ph-aside">This form of relations between market policy and the individual is first and foremost about money, and the ordinary citizen in it is an object. He lives for the state and the corporation, rather than the state and the corporation living for the citizen and solving his real problems. There can be no talk of a symbiotic relationship here.</p>
    <div class="ph-more">
      <button class="ph-more__btn" type="button" aria-expanded="false" aria-controls="ph-more-1">${icon('chevron-down')}<span>Expand</span></button>
      <div class="ph-more__body" id="ph-more-1"><div><p>The time when world history saw an example of partnership and symbiosis between the state and the people (the majority of the population) has passed. That was the Soviet era, with a different socio-economic formation, where the life of the state was sustained by the majority of the working masses, and where the economic model itself was built on the symbiosis of the state and the working class under the dictatorship of an educated proletariat, rather than a nobility supposedly entitled by God to rule, to understand and know more, and to live better than the supposedly “unworthy” rest.</p><p>The fact that Soviet power itself eventually sank to the level of a “nomenklatura nobility” only shows that the self-serving nature of certain people within the system took the reins, halting the development of Stalinist Marxism in theory and practice and the development of Soviet socialism as a new formation.</p><p>Today we have, one way or another, returned to similar forms of relations, disguised as a “fair” market and “fair” competition, living in a hypocritical society. The boundaries of morality and ethics are being eroded ever further so that beneficiaries can make a profit.</p><p>All of this works as a chain reaction rooted in primitive thinking that lives by instincts and desires. These are encouraged and supported in every way by those who simply benefit from it, without asking what lies ahead for the people, the state and humanity as a whole.</p></div></div>
    </div>
  </section>

  <section class="ph-sec" id="ph-ekro" data-spysec aria-labelledby="h-ph-ekro">
    <h2 id="h-ph-ekro">The Ethics of Competition and Market Relations</h2>
    <figure class="ph-img reveal"><img src="assets/img/philosophy/ekro.webp" alt="A sphere on soft waves, abstract composition" width="1440" height="1080" loading="lazy" decoding="async"></figure>
    <p>Based on the reasoning above, I come to the conclusion that if we live in a market economy, then for the sake of common progress we must promote the development and support of competition on the market as a whole and on the IT market in particular.</p>
    <p>This would help deprive private corporations of the chance to gain sole power and influence over the market, while also helping to maintain a balance of power on the market and strengthen the state.</p>
    <p>My view of market relations helps shape a market morality and an “ethics of competition”, in which accumulated knowledge of behavioral psychology, propaganda and advertising is used with full responsibility, consciously, for the good of society and the state.</p>
    <p>Today, however, because of society’s lack of knowledge and education, and because people are seen as objects of relations rather than their subjects, all these tools and knowledge are often used for provocation and manipulation in pursuit of one kind of gain or another. As a result, the market operates on a “here and now” principle, without thinking about common interests or responsibility to the country’s future generations.</p>
    <p>In this respect, I created my own philosophical approach to market relations, which I follow in my commercial work, and called it the “Ethics of Competition and Market Relations” (ECMR).</p>
    <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
    <p class="ph-big">The Ethics of Competition and Market Relations is an approach to commercial activity that puts the interests of society first, supports competition and innovation, opposes monopolies and manipulation, and strives to build the most ethical business possible within the existing capitalist system. It is a balance between pragmatism and idealism, aimed at protecting human dignity in a market economy and protecting the state.</p>
    <div class="note"><p>This philosophical approach is a critical and ethically oriented alternative to the existing market system, with an emphasis on supporting competition, protecting the interests of society and countering monopolization, elitism and manipulative practices.</p></div>

    <h3>Seven key principles</h3>
    <ol class="aspects ph-principles">
      <li><b>Supporting competition</b><ul class="ilist"><li>Competition is seen as the engine of progress and innovation (supporting small and medium businesses, as well as startups that solve real problems of society, helps avoid the stagnation caused by large corporations monopolizing the market);</li><li>Countering the drive of large players toward absolute power, which leads to ignoring the needs of society and the interests of the state.</li></ul></li>
      <li><b>An ethical approach to business</b><ul class="ilist"><li>Gradually abandoning manipulative practices that violate the laws of morality and ethics (for example, getting people “hooked” on gambling or provocative psychological tricks in sales);</li><li>A focus on creating products that serve users’ real needs, not only the interests of the beneficiary.</li></ul></li>
      <li><b>Education and enlightenment as a tool of struggle</b><ul class="ilist"><li>Through research articles, consultations and other forms of communication, giving every participant in market relations the opportunity to see how the market works, recognize manipulation and make informed choices, so that everyone can understand the mechanisms of manipulative influence, recognize deception and become an active participant in a fair economy (<a class="link" href="https://t.me/kvazardesign" target="_blank" rel="noopener">t.me/kvazardesign</a>).</li></ul></li>
      <li><b>Serving society and the state</b><ul class="ilist"><li>Business and its products should be a tool for strengthening the economy and independence of the state;</li><li>Priority goes to projects that contribute to the development of society and the protection of national interests, rather than the interests of a group of beneficiaries.</li></ul></li>
      <li><b>Critique of the capitalist paradigm and the search for balance</b><ul class="ilist"><li>Condemning the “exploitative” nature of market relations built on deception, speculation and exploiting human weaknesses;</li><li>Accepting the need to act within the existing capitalist system, but with an ironic and critical eye aimed at changing the patterns of socio-economic relations through personal example and collaboration with like-minded people.</li></ul></li>
      <li><b>Transparency as the basis of trust</b><ul class="ilist"><li>Priority goes to openness. For example, to pricing, which used to be hidden until the lead was “caught”;</li><li>Living by one’s values in practice. In particular, keeping the word given in advertising a product or service.</li></ul></li>
      <li><b>Flexibility and adaptation</b><ul class="ilist"><li>Looking for new solutions and being ready to reconsider one’s approaches when market conditions change or when those approaches stop serving society;</li><li>Helping startups and existing products stay resilient on the market, so they can survive and grow even under uncertainty. My philosophy is not a dogma but a living process that develops and adapts to the market.</li></ul></li>
    </ol>

    <div class="ph-cards">
      <div class="note"><h4>ECMR mission</h4><p>To help create a fair market where business serves people, society and the state, while society and the state, in turn, oversee the market. To strive to break the paradigm built on deception and manipulation by supporting competition and ethical standards.</p></div>
      <div class="note"><h4>ECMR values</h4><p>Honesty. Serving society. Supporting innovation. Protecting the most vulnerable market players. Countering monopolies and seeking balance. Countering speculation and harmful manipulation.</p></div>
    </div>
  </section>

  <section class="ph-sec" id="ph-why" data-spysec aria-labelledby="h-ph-why">
    <h2 id="h-ph-why">Why do I do this?</h2>
    <figure class="ph-img ph-img--dark reveal"><img src="assets/img/philosophy/why.webp" alt="The studio’s red mark on a dark background" width="1440" height="821" loading="lazy" decoding="async"></figure>
    <p>People deceive, and the market makes money from deception and from “newcomers to the subject”, those who know little about the specifics of a particular field or about how life works in general. On top of that, add people’s greed and naivety, on which others with dishonest intentions build their businesses, profiting from the “weaknesses” and ignorance of others.</p>
    <p>Ignorance is the main vulnerability that dishonest market players exploit. Today it is important not only to protect users and entrepreneurs from manipulation, but also to equip them with knowledge and education, so they can make their own decisions and understand how they might be steered and manipulated by those whose intentions are dishonest.</p>
    <div class="ph-goals">
      <div class="ph-goal">
        <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
        <p class="ph-goal__lbl">Micro goal:</p>
        <p class="ph-goal__text">To promote and strengthen my positioning on the IT market by offering my expertise to create socially significant products.</p>
        <div class="ph-more">
          <button class="ph-more__btn" type="button" aria-expanded="false" aria-controls="ph-goal-1">${icon('chevron-down')}<span>Expand</span></button>
          <div class="ph-more__body" id="ph-goal-1"><div><p>This includes supporting competition by helping small and medium businesses, abandoning manipulative practices and focusing on “ethical design”. Ultimately, through personal example and education (consultations, articles at <a class="link" href="https://t.me/kvazardesign" target="_blank" rel="noopener">t.me/kvazardesign</a>), to help shape market ethics in which knowledge of behavioral psychology and advertising is used consciously, for the good of society, helping people recognize deception and become active participants in a fair economy.</p></div></div>
        </div>
      </div>
      <div class="ph-goal">
        <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
        <p class="ph-goal__lbl">Mid-level goal:</p>
        <p class="ph-goal__text">To change the patterns of socio-economic relations through a personal example of ethical business and collaboration with like-minded partners who share the values of ECMR.</p>
        <div class="ph-more">
          <button class="ph-more__btn" type="button" aria-expanded="false" aria-controls="ph-goal-2">${icon('chevron-down')}<span>Expand</span></button>
          <div class="ph-more__body" id="ph-goal-2"><div><p>Education, professional skills and capital are seen not as tools of personal enrichment and power, but as tools for fighting the policy of self-serving manipulation and the power of monopolies and transnational corporations that exploit people’s ignorance, greed and weaknesses for their own interests.</p><p>By supporting innovation, protecting weaker players (small and medium businesses), as well as projects that strengthen the economy and independence of the state, to contribute to a balance of power on the market. This includes criticizing a market nature built on speculation and manipulation, and promoting “transparency” and education, so that our dreams and ideas serve the good of the people and the Motherland.</p></div></div>
        </div>
      </div>
      <div class="ph-goal">
        <span class="ph-mark" aria-hidden="true" data-logo-slot></span>
        <p class="ph-goal__lbl">Macro goal:</p>
        <p class="ph-goal__text">Underlying all of this is the goal of breaking the fundamental paradigm built on deception, manipulation, speculation and the use of human ignorance and the population’s lack of education for personal gain.</p>
        <div class="ph-more">
          <button class="ph-more__btn" type="button" aria-expanded="false" aria-controls="ph-goal-3">${icon('chevron-down')}<span>Expand</span></button>
          <div class="ph-more__body" id="ph-goal-3"><div><p>The macro goal means creating the fairest possible market and principles of competition. Creating a form of relations in which business serves people, society and the state, while society and the state provide oversight and protection against the self-serving intentions of private business aimed at personal gain outside public and state interests, at those levels of responsibility where this is unacceptable.</p></div></div>
        </div>
      </div>
    </div>
    <p class="ph-aside">Humanity deserves better in this world. It only takes setting an example and pointing the way, for it all comes down to the intentions of strong people who hold some form of power or who want to fight this nature. If we take the easy path within the paradigm of “man is a wolf to man”, we will not build a better world, for we will deserve only the consequences of our common ignorance, greed, foolishness and cowardice.</p>
    <p class="ph-aside">On the other hand, I am not trying to build a “new world” by changing the socio-economic formation, searching for and reflecting on revolutionary paths, as our great predecessors did in the person of the Bolsheviks and the early Soviet government, which fought the old formation of feudal-market exploiters and “world-eaters”. The latter, under the guise of good deeds, enslaved and robbed their own and other peoples, justifying their policies by “the Lord”, the fictions of myth-makers and other harmful propaganda. My path lies within the formation of the capitalist world, just with my own, more ironic point of view. It is a balancing act within the circumstances of reality, in the absence of socialist forms of socio-economic relations.</p>
    <div class="note note--accent"><h4>My mission</h4><p>To strive to maintain balance on the market and to help shape a more educated society. To strengthen the national economy and promote the unity of the country. To counter the dominance of monopolies by promoting the principles of ethical competition (ECMR).</p></div>
  </section>

  <section class="ph-sec ph-sec--wide" id="ph-rules" data-spysec aria-labelledby="h-ph-rules">
    <h2 id="h-ph-rules">Code of rules</h2>
    <ol class="rules">
      <li><p>I don’t work with religious or quasi-religious organizations, especially various pagan sects, nor with bookmakers, nationalist organizations, online casinos and similar entities.</p></li>
      <li><p>I work mainly with small and medium businesses, and I also help develop socially significant startup products.</p><aside class="rules__note"><b>Comment</b><p>With big business and corporations I may allow collaboration only on a one-off, private basis (for example, if a corporation wants to create a product aimed at ideologically sound and useful work with the public to shape a worldview that I share and am ready to support).</p></aside></li>
      <li><p>I don’t run my practice on the principle that “the customer is always right”. I help work out the design strategy of a product or service so that it is convenient for the user. I rely on data about the business and the market, my professional experience and my opinion. The user’s good comes first, everything else second.</p></li>
      <li><p>I don’t use behavioral psychology tools, psychological tricks and manipulation in a context harmful to people and society to serve the personal interests of the beneficiary, exploiting users’ ignorance and lack of awareness. For example, manipulation to get people hooked on “the needle of gambling” in a product, and other such mechanisms.</p><aside class="rules__note"><b>Comment</b><p>If you are thinking of using our collaboration to build tools of negative manipulation aimed at deceiving people and other kinds of fraud, which you justify by saying that “people make their own choices”, we are not on the same path. A person makes a choice when they realize they are being manipulated and deceived, and understand what the consequences may be and why. In this case it would not be a choice, it would be deception.</p></aside></li>
      <li><p>I don’t cater to the tastes of the client and their managers. Our collaboration will serve the end user, whose pleasant experience will also have a good effect on the business. The users’ good comes first, everything else second.</p></li>
      <li><p>I work with sound reasoning and carefully choose the tools that will help handle the tasks at hand. I don’t blindly follow trends, fashionable methodologies or new theories, like local cargo-cult adepts, just because “that’s how they do it in the West” or “someone somewhere does it”. We approach every task with our own thinking, not with blind imitation.</p></li>
      <li><p>I respect the free will and work of every teammate, and I defend their rights and interests against anyone who encroaches on them within working relations.</p></li>
      <li><p>My team is joined, of their own free will, only by specialists who see themselves as part of my worldview, love their specialty, don’t confine themselves to rules and laws, and find new concepts and ideas for solving the tasks at hand.</p></li>
      <li><p>I respect and value every reasonable, people-oriented client and treat them with the utmost understanding and loyalty. For such clients I will always make concessions and find a compromise in difficult situations, as long as the client does not cross the boundaries of personal relations or offend the honor and dignity of me and my teammates.</p></li>
      <li><p>Design as an activity is a product of the thought of a designer or a group of designers, and its price is determined by the designer’s value. This value cannot be determined by, or submit to, crude pricing processes. Therefore the price level is formed by a set of circumstances that indirectly take into account competitors’ prices, supply and demand on the market, and other factors affecting pricing.</p></li>
      <li><p>I don’t take credit for the work of the designer on a project; on the contrary, I help promote their work by crediting authorship in every project, giving them the opportunity to grow and build a personal reputation that will benefit their further career beyond working with me. I am against profiting from a person’s name and labor. I run a collective practice for the common cause and the success of the product, representing new forms of local socio-economic relations.</p><aside class="rules__note"><b>Comment</b><p>I hold in contempt everyone who tries to appropriate other people’s achievements and build their capital on speculation, deception and the suppressed will of employees. I wage an ideological fight against such forms of relations and am not shy about calling things by their names.</p></aside></li>
    </ol>
  </section>

  <section class="ph-sec" id="ph-exit" data-spysec aria-labelledby="h-ph-exit">
    <h2 id="h-ph-exit">Exit</h2>
    <figure class="ph-img ph-img--dark reveal"><img src="assets/img/philosophy/exit.webp" alt="A red dot in the dark" width="1440" height="1080" loading="lazy" decoding="async"></figure>
    <p>If you have a startup or an existing socially significant product in IT or GameDev and need help with product design, UX design, design consulting or service design, get in touch with me using the contacts below.</p>
    <dl class="contacts contacts--compact">
      <div><dt>Telegram:</dt><dd><a class="link" href="https://t.me/bushkovf" target="_blank" rel="noopener">bushkovf</a></dd></div>
      <div><dt>Email:</dt><dd><a class="link" href="mailto:bushkovf@mail.ru">bushkovf@mail.ru</a></dd></div>
      <div><dt>Phone:</dt><dd><a class="link" href="tel:+79091352248">+7 909 135-22-48</a></dd></div>
    </dl>
  </section>
</article>

<section class="ph-channels" aria-label="Telegram channels">
  <div class="kvazar"><h3>Kvazar</h3><p>If you share the views and ideas set out in the Philosophy section, you can subscribe to our movement’s Telegram channel. We share experience, discuss ideas and build teams to bring them to life. Straight to the point, no spam or chatter.</p><a class="btn btn--outline" href="https://t.me/kvazardesign" target="_blank" rel="noopener">Learn more</a></div>
</section>
`
};
