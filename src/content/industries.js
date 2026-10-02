// Trade landing pages (/industries/:slug). Each one is written for that trade; keep them distinct.
// `roles` matches testimonial roles in testimonials.js.
export const industries = [
  {
    slug: 'hvac',
    name: 'HVAC',
    business: 'HVAC companies',
    title: 'Marketing for HVAC Companies in the GTA',
    metaDescription:
      'Lead systems, websites and AI search for GTA heating and cooling companies. Answer every no-heat call, fill the shoulder seasons and get recommended on Google and ChatGPT.',
    intro:
      "Your phone rings off the hook on the first cold night and goes quiet in May. We build systems that catch every no-heat call when it's busy, and keep your techs booked with tune-ups and replacements when it isn't.",
    roles: ['HVAC Owner', 'HVAC Tech'],
    challenges: [
      { title: 'Feast-or-famine seasons', text: 'The first cold snap and the first heat wave bring more calls than you can answer, then demand drops off between seasons.' },
      { title: 'After-hours emergencies', text: "No-heat calls come in at 10 p.m. If nobody answers, the homeowner calls the next company with a 24/7 line." },
      { title: 'Long replacement decisions', text: 'Furnace, AC and heat pump replacements are big purchases. Homeowners compare several quotes and go quiet while they decide.' },
      { title: 'Rebates and questions', text: 'Homeowners have endless questions about heat pumps, efficiency and changing rebate programs, and they want answers before they call.' },
    ],
    focus: [
      { title: 'Missed call text back and AI chat', text: 'Every no-heat call and website visitor gets an instant reply, day or night, with urgent calls flagged for your on-call tech.', href: '/products/missed-call-text-back' },
      { title: 'Seasonal tune-up campaigns', text: 'Automatic fall furnace and spring AC reminders to past customers keep the shoulder seasons busy.', href: '/products/one-click-marketing' },
      { title: 'Quote follow-up', text: 'Friendly, automatic check-ins after every replacement estimate, so quiet leads come back to you instead of a competitor.', href: '/products/all-in-one-inbox' },
      { title: 'Local and AI search', text: 'Service pages for furnaces, AC, heat pumps and ductless systems that rank on Google and get cited by AI assistants.', href: '/products/ai-seo' },
    ],
    searches: ['furnace repair near me', 'no heat emergency service', 'AC not cooling', 'heat pump installation cost Ontario', 'furnace replacement Vaughan', 'ductless mini split installer'],
    seasons: [
      { season: 'Spring', text: 'AC tune-up reminders and heat pump content before the first warm week.' },
      { season: 'Summer', text: 'Missed call text back and AI chat carry the load during heat waves.' },
      { season: 'Fall', text: 'Furnace tune-up campaigns to past customers, and replacement follow-ups.' },
      { season: 'Winter', text: 'After-hours capture for no-heat calls, plus review requests after every job.' },
    ],
    faqs: [
      { q: 'Can the system tell an emergency from a routine call?', a: "Yes. Automatic replies can ask a quick question, like whether the home has no heat at all, and flag urgent replies to your on-call tech while booking routine work into normal hours." },
      { q: 'Will you mention rebates in our marketing?', a: 'We can explain rebate programs in plain language on your site and in campaigns, and we keep that content updated, since programs change often.' },
      { q: 'We already run Google Ads. Do we still need this?', a: "Ads bring leads. The Lead & Review System makes sure those leads are answered, followed up and turned into reviews, so you get more out of the ad spend you already have." },
    ],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    business: 'plumbing companies',
    title: 'Marketing for Plumbers in the GTA',
    metaDescription:
      'Lead capture, websites and local SEO for GTA plumbing companies. Never lose an emergency call to voicemail, win more water heater and drain jobs, and grow your Google reviews.',
    intro:
      "When a basement is flooding, the homeowner calls three plumbers and hires whoever answers. We make sure that's you, even when you're under a sink, and turn every finished job into the reviews that win the next call.",
    roles: ['Plumbing Contractor'],
    challenges: [
      { title: 'Emergencies wait for nobody', text: "Burst pipes, backed-up drains and no hot water can't wait. If the call goes to voicemail, the job goes to someone else." },
      { title: 'Hands full all day', text: "You can't answer the phone from a crawl space, and calling back an hour later is usually too late." },
      { title: 'Price shoppers', text: 'Homeowners compare plumbers on reviews and response time before price. A thin review profile costs you jobs.' },
      { title: 'Seasonal flood risk', text: 'Spring thaw and heavy rain bring a rush of sump pump, backwater valve and basement flooding calls all at once.' },
    ],
    focus: [
      { title: 'Missed call text back', text: 'Every missed call gets a text from your number within seconds, so the homeowner keeps talking to you instead of calling the next plumber.', href: '/products/missed-call-text-back' },
      { title: '5-star review system', text: 'Automatic review requests after every job build the profile that wins comparisons on Google Maps.', href: '/products/review-system' },
      { title: 'Service pages that rank', text: 'Separate pages for drains, water heaters, sump pumps, backwater valves and emergencies, written the way homeowners search.', href: '/products/local-seo' },
      { title: 'All-in-one inbox', text: 'Texts, calls, chats and messages in one place on your phone, so your office can triage by urgency.', href: '/products/all-in-one-inbox' },
    ],
    searches: ['emergency plumber near me', 'water heater replacement', 'backwater valve installation Toronto', 'sump pump not working', 'clogged drain plumber', 'basement flooding plumber'],
    seasons: [
      { season: 'Spring', text: 'Sump pump and backwater valve content before the thaw, and fast capture during storms.' },
      { season: 'Summer', text: 'Renovation plumbing and outdoor fixture work; review requests from a busy season.' },
      { season: 'Fall', text: 'Outdoor tap shutoff reminders and water heater replacement campaigns.' },
      { season: 'Winter', text: 'Frozen and burst pipe emergencies, captured 24/7.' },
    ],
    faqs: [
      { q: 'We get a lot of water heater rental questions. Can you help with that?', a: 'Yes. Rental water heaters are common in Ontario, and many homeowners want to know about buyouts or replacing them. We create clear content answering those questions and route the leads to you.' },
      { q: 'Can we use our existing phone number?', a: 'Yes. Missed call text back works with the number your customers already call, so texts come from your business, not a random number.' },
      { q: 'How fast will we see more reviews?', a: 'As soon as review requests start going out after each job. Businesses that ask every customer usually see their review count grow steadily from the first month.' },
    ],
  },
  {
    slug: 'electricians',
    name: 'Electrician',
    business: 'electrical contractors',
    title: 'Marketing for Electricians in the GTA',
    metaDescription:
      'Websites, lead systems and SEO for GTA electrical contractors. Win more panel upgrades, EV charger installs and rewiring jobs, and show homeowners the credentials they look for.',
    intro:
      'Homeowners hire electricians on trust. We build websites and systems that show your licence and reviews up front, answer every inquiry fast, and help you win the panel upgrades, EV chargers and rewiring jobs worth the most.',
    roles: ['Electrician'],
    challenges: [
      { title: 'Trust comes first', text: 'Electrical work feels risky to homeowners. They look for a licence, insurance and reviews before they even call.' },
      { title: 'High-value jobs get compared', text: 'Panel upgrades, rewiring and EV charger installs bring several quotes. Slow follow-up loses them.' },
      { title: 'Insurance-driven urgency', text: 'Knob-and-tube or aluminum wiring found during a home sale or insurance renewal creates urgent, time-sensitive jobs.' },
      { title: 'Small jobs clog the phone', text: "Lots of calls are for small fixes. Sorting them from big projects takes time you don't have." },
    ],
    focus: [
      { title: 'A website built on trust', text: 'Your ESA licence, insurance, warranty and reviews front and centre, with a clear page for every service.', href: '/products/functional-website' },
      { title: 'AI chat that qualifies leads', text: 'Answers common questions, collects job details and photos, and books estimates for the projects you want.', href: '/products/all-in-one-inbox' },
      { title: 'Estimate follow-up', text: 'Automatic check-ins after every quote so panel upgrades and EV installs come back to you.', href: '/products/one-click-marketing' },
      { title: 'Local and AI search', text: 'Rank for EV chargers, panel upgrades and pot lights, and get named when homeowners ask AI who to hire.', href: '/products/ai-seo' },
    ],
    searches: ['electrician near me', 'panel upgrade cost', 'EV charger installation Markham', 'knob and tube replacement Toronto', 'pot light installation', 'breaker keeps tripping'],
    seasons: [
      { season: 'Spring', text: 'Renovation season starts: pot lights, panel upgrades and basement work.' },
      { season: 'Summer', text: 'EV charger, outdoor lighting and AC circuit work; review requests from busy weeks.' },
      { season: 'Fall', text: 'Generator and heating circuit questions, and holiday lighting.' },
      { season: 'Winter', text: 'Interior renovations, rewiring and storm outage calls.' },
    ],
    faqs: [
      { q: 'Should our ESA licence number be on our website?', a: 'Yes. Showing your Electrical Safety Authority licence, along with insurance and warranty details, is one of the simplest ways to build trust with careful homeowners.' },
      { q: 'Can you help us get more EV charger installs?', a: 'Yes. We build a dedicated EV charger page, answer the questions homeowners ask about panels and costs, and target the searches people use when they buy an electric vehicle.' },
      { q: 'Can the chat filter out tiny jobs?', a: 'It can ask a few questions up front and route jobs by type and size, so your team spends time on the work you want.' },
    ],
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    business: 'roofing companies',
    title: 'Marketing for Roofers in the GTA',
    metaDescription:
      'Lead systems, websites and local SEO for GTA roofing contractors. Handle storm-season call spikes, follow up on every replacement quote and build the reviews homeowners check first.',
    intro:
      "After a windstorm, every roofer's phone explodes at once. We make sure every caller gets an instant reply while your crews are on roofs, and that every replacement quote gets followed up until it's signed.",
    roles: ['Roofing Specialist'],
    challenges: [
      { title: 'Storm surges', text: 'Wind and hail bring dozens of calls in a day. Most go to voicemail while your crew is working.' },
      { title: 'Big-ticket comparisons', text: 'Roof replacements are expensive. Homeowners get several quotes and choose the roofer who feels most reliable.' },
      { title: 'Storm-chaser competition', text: 'Out-of-town operators show up after big storms. Local reviews and visible credentials help you stand out.' },
      { title: 'Short season', text: 'Most roofing happens from spring to late fall, so filling the calendar early matters.' },
    ],
    focus: [
      { title: 'Storm-ready lead capture', text: 'Missed call text back and AI chat collect addresses and damage photos from every caller so you can triage by urgency.', href: '/products/missed-call-text-back' },
      { title: 'Quote follow-up', text: 'Automatic check-ins after every inspection and quote, timed so homeowners hear from you before they decide.', href: '/products/one-click-marketing' },
      { title: 'Reviews that beat storm chasers', text: 'A steady flow of local, specific reviews that show homeowners you are established in their area.', href: '/products/review-system' },
      { title: 'Websites that show the work', text: 'Before-and-after galleries, warranty details and clear pages for repairs, replacements and eavestroughs.', href: '/products/functional-website' },
    ],
    searches: ['roof repair near me', 'roof leak emergency', 'new roof cost Ontario', 'roof replacement Brampton', 'eavestrough installation', 'storm damage roof inspection'],
    seasons: [
      { season: 'Spring', text: 'Inspection campaigns after winter, plus ice dam and leak repairs.' },
      { season: 'Summer', text: 'Peak replacement season; quote follow-up keeps the calendar full.' },
      { season: 'Fall', text: 'Pre-winter inspections and eavestrough cleaning reminders.' },
      { season: 'Winter', text: 'Emergency leak calls and booking next season’s replacements early.' },
    ],
    faqs: [
      { q: 'Can we collect photos of the damage before we visit?', a: 'Yes. Texts and website chat let homeowners send photos with their address, which helps you prioritize and prepare before the inspection.' },
      { q: 'How do we compete with big roofing companies on Google?', a: 'Local roofers win with specific service pages, strong reviews from nearby customers, consistent listings and real project photos. Big budgets matter less than being the obvious local choice.' },
      { q: 'Do you handle insurance claim content?', a: 'We can create clear, accurate content explaining how storm damage inspections and the claim process generally work, without making promises about coverage.' },
    ],
  },
  {
    slug: 'general-contractors',
    name: 'General Contractor',
    business: 'general contractors',
    title: 'Marketing for General Contractors in the GTA',
    metaDescription:
      'Websites, lead qualification and SEO for GTA general contractors. Attract bigger projects, filter out tire-kickers and stay in touch through long decision cycles.',
    intro:
      "Big projects take months to decide and come with plenty of tire-kickers. We build websites that attract the right clients, qualify leads before you drive out, and keep you in touch until they're ready to sign.",
    roles: ['General Contractor'],
    challenges: [
      { title: 'Long sales cycles', text: 'Additions, major renovations and custom work can take months from first call to contract.' },
      { title: 'Unqualified leads', text: 'Site visits cost hours. Many inquiries have unrealistic budgets or timelines.' },
      { title: 'Proving you can deliver', text: 'Clients want to see similar projects, understand your process and trust you with a large budget.' },
      { title: 'Referral dependence', text: 'Word of mouth is great but unpredictable. A steady pipeline needs a second source.' },
    ],
    focus: [
      { title: 'A portfolio-led website', text: 'Project pages with photos, scope and timelines that show exactly what you build and how you work.', href: '/products/functional-website' },
      { title: 'Lead qualification', text: 'Forms and AI chat that ask about project type, budget range and timing before you book a site visit.', href: '/products/all-in-one-inbox' },
      { title: 'Long-cycle follow-up', text: 'Helpful, spaced-out check-ins and newsletters that keep you top of mind while clients plan and arrange financing.', href: '/products/one-click-marketing' },
      { title: 'Search for high-value work', text: 'Pages and content targeting additions, major renovations and custom builds in the areas you want to work.', href: '/products/local-seo' },
    ],
    searches: ['general contractor near me', 'home addition contractor', 'major renovation cost GTA', 'basement underpinning Toronto', 'custom home renovation', 'laneway suite builder'],
    seasons: [
      { season: 'Spring', text: 'Project planning peaks; fast response to new inquiries matters most.' },
      { season: 'Summer', text: 'Showcase active projects and collect reviews from finished ones.' },
      { season: 'Fall', text: 'Interior and winter-friendly projects; nurture spring leads early.' },
      { season: 'Winter', text: 'Clients plan next year’s projects; long-cycle follow-up pays off.' },
    ],
    faqs: [
      { q: 'Can you help us show our project portfolio?', a: 'Yes. Project pages with real photos, scope and timelines are some of the most persuasive content a general contractor can have, and they help you rank for the work you want more of.' },
      { q: 'How do you filter out unrealistic budgets?', a: 'Short qualifying questions in your forms and chat, plus honest guidance on typical cost ranges, help serious clients self-select before you invest in a site visit.' },
      { q: 'Should we mention RenoMark or association memberships?', a: 'Yes. Memberships and certifications like RenoMark reassure clients and give search engines and AI tools independent evidence of your credibility.' },
    ],
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    business: 'landscaping companies',
    title: 'Marketing for Landscapers in the GTA',
    metaDescription:
      'Lead systems, websites and local SEO for GTA landscaping and hardscaping companies. Handle the spring rush, sell maintenance contracts and keep clients through the off-season.',
    intro:
      'Every spring, quote requests pile up faster than you can visit properties. We help you answer every request, book estimates efficiently, sell maintenance plans and stay in touch with clients through the winter.',
    roles: ['Landscaping Pro'],
    challenges: [
      { title: 'The spring rush', text: 'Quote requests flood in from March to May, and slow replies lose the best projects.' },
      { title: 'Visual decisions', text: 'Clients buy landscaping with their eyes. Without strong project photos, it is hard to win premium work.' },
      { title: 'Seasonal cash flow', text: 'Work slows dramatically in winter unless you offer snow removal or pre-sell next season.' },
      { title: 'Recurring revenue', text: 'Maintenance contracts are valuable, but selling and renewing them takes consistent follow-up.' },
    ],
    focus: [
      { title: 'Fast quote handling', text: 'Instant replies, photo collection and booking links so you can schedule estimates by area and avoid wasted driving.', href: '/products/all-in-one-inbox' },
      { title: 'A gallery-first website', text: 'Before-and-after projects, interlock, planting and lighting work presented the way clients want to see it.', href: '/products/functional-website' },
      { title: 'Renewal and off-season campaigns', text: 'Automatic reminders for maintenance renewals, spring bookings and snow removal sign-ups.', href: '/products/one-click-marketing' },
      { title: 'Reviews from every property', text: 'Review requests after each project and each season of maintenance.', href: '/products/review-system' },
    ],
    searches: ['landscaper near me', 'interlock driveway cost', 'backyard landscaping ideas Ontario', 'lawn maintenance service', 'snow removal contract', 'retaining wall installation'],
    seasons: [
      { season: 'Spring', text: 'Fast quote capture and booking during the rush.' },
      { season: 'Summer', text: 'Showcase finished projects and collect reviews.' },
      { season: 'Fall', text: 'Fall cleanup offers and snow removal sign-ups.' },
      { season: 'Winter', text: 'Pre-book next spring’s projects with past clients.' },
    ],
    faqs: [
      { q: 'Can we book estimates by neighbourhood to save driving?', a: 'Yes. Booking rules can group estimate slots by area so your days are efficient.' },
      { q: 'How do we sell more maintenance contracts?', a: 'Offer them at the end of every project, follow up automatically, and send renewal reminders before each season. Consistency is what makes recurring revenue grow.' },
      { q: 'Do we need a lot of photos?', a: 'The more real project photos, the better. They make your website and Google profile far more persuasive than stock images.' },
    ],
  },
  {
    slug: 'pool-services',
    name: 'Pool Services',
    business: 'pool service companies',
    title: 'Marketing for Pool Service Companies in the GTA',
    metaDescription:
      'Lead systems, websites and local SEO for GTA pool companies. Fill opening and closing schedules early, capture every service call and sell maintenance packages.',
    intro:
      "Ontario's pool season is short, so the openings and closings calendar fills fast. We help you book it early, answer every service call in peak season, and turn one-time customers into weekly maintenance clients.",
    roles: [],
    challenges: [
      { title: 'A short season', text: 'Most of the year’s revenue happens between spring opening and fall closing.' },
      { title: 'Everyone calls at once', text: 'Openings, green pools and equipment failures all hit in the same few weeks.' },
      { title: 'Repeat business', text: 'Customers who aren’t reminded often book whoever comes up first next year.' },
      { title: 'Equipment questions', text: 'Pumps, heaters, salt systems and liners generate endless questions before people buy.' },
    ],
    focus: [
      { title: 'Opening and closing campaigns', text: 'Automatic reminders to past customers to book openings in spring and closings in late summer, before the calendar fills.', href: '/products/one-click-marketing' },
      { title: 'Peak-season capture', text: 'Missed call text back and AI chat so no service call is lost when your techs are on the road.', href: '/products/missed-call-text-back' },
      { title: 'Maintenance plan sales', text: 'Follow-up after openings that offers weekly or biweekly service.', href: '/products/all-in-one-inbox' },
      { title: 'Search and reviews', text: 'Rank for pool opening, repair and equipment searches, backed by reviews from every visit.', href: '/products/local-seo' },
    ],
    searches: ['pool opening service', 'pool closing near me', 'green pool cleanup', 'pool heater repair', 'weekly pool maintenance', 'pool liner replacement'],
    seasons: [
      { season: 'Spring', text: 'Opening campaigns and fast booking.' },
      { season: 'Summer', text: 'Service calls, maintenance plans and review requests.' },
      { season: 'Fall', text: 'Closing campaigns and equipment upgrade offers.' },
      { season: 'Winter', text: 'Pre-book next season and plan renovations and equipment replacements.' },
    ],
    faqs: [
      { q: 'When should opening reminders go out?', a: 'Well before the first warm weekends, so customers book before the calendar fills. We schedule campaigns around your capacity.' },
      { q: 'Can past customers rebook online?', a: 'Yes. Reminder messages can include a booking link with your available opening and closing slots.' },
      { q: 'Is SEO worth it for such a short season?', a: 'Yes. Homeowners research in the weeks before the season starts, and strong rankings and reviews put you first when they do.' },
    ],
  },
  {
    slug: 'pest-control',
    name: 'Pest Control',
    business: 'pest control companies',
    title: 'Marketing for Pest Control Companies in the GTA',
    metaDescription:
      'Lead systems, websites and local SEO for GTA pest control companies. Answer urgent calls instantly, handle sensitive inquiries discreetly and sell prevention plans.',
    intro:
      "People with a pest problem want help today, and they don't want to explain it twice. We make sure every call and message gets an instant, discreet reply, and turn one-time treatments into prevention plans.",
    roles: [],
    challenges: [
      { title: 'Urgent and emotional', text: 'Mice in the kitchen or bed bugs in the bedroom: customers want help immediately and often call several companies.' },
      { title: 'Discretion matters', text: 'Many customers prefer to text rather than talk about an infestation.' },
      { title: 'Seasonal pests', text: 'Wasps in summer, rodents in fall and wildlife in spring all bring predictable surges.' },
      { title: 'One-and-done customers', text: 'Without follow-up, treatment customers rarely sign up for ongoing prevention.' },
    ],
    focus: [
      { title: 'Instant, discreet replies', text: 'Text-first lead capture and AI chat let customers describe the problem privately and book quickly.', href: '/products/missed-call-text-back' },
      { title: 'Prevention plan follow-up', text: 'Automatic follow-ups after treatments offering seasonal prevention plans.', href: '/products/one-click-marketing' },
      { title: 'Pest-specific pages', text: 'Pages for mice, rats, bed bugs, wasps, cockroaches and wildlife that match how people search.', href: '/products/local-seo' },
      { title: 'Reviews that reassure', text: 'Review requests after every treatment build trust with anxious first-time callers.', href: '/products/review-system' },
    ],
    searches: ['exterminator near me', 'mice in house what to do', 'bed bug treatment Toronto', 'wasp nest removal', 'raccoon removal', 'cockroach exterminator'],
    seasons: [
      { season: 'Spring', text: 'Wildlife and ant season; prevention plan sign-ups.' },
      { season: 'Summer', text: 'Wasp and hornet surges; fast capture matters most.' },
      { season: 'Fall', text: 'Rodents move indoors; exclusion and prevention campaigns.' },
      { season: 'Winter', text: 'Indoor pests and follow-ups for ongoing protection.' },
    ],
    faqs: [
      { q: 'Can customers contact us without calling?', a: 'Yes. Text, website chat and forms all route to one inbox, which many pest control customers prefer for privacy.' },
      { q: 'Should we show our licensing on the website?', a: 'Yes. Showing that your technicians are licensed under Ontario’s pesticide rules, along with insurance and any guarantees, builds trust quickly.' },
      { q: 'How do we sell more prevention plans?', a: 'Offer them at the right moment, after a successful treatment, and follow up automatically before the next seasonal pest peak.' },
    ],
  },
  {
    slug: 'concrete-paving',
    name: 'Concrete & Paving',
    business: 'concrete and paving companies',
    title: 'Marketing for Concrete and Paving Contractors in the GTA',
    metaDescription:
      'Websites, lead systems and local SEO for GTA concrete, asphalt and interlock contractors. Book the season early, win more driveway jobs and follow up on every quote.',
    intro:
      "Driveways, walkways and foundations are big, visible jobs with a limited season. We help you book the calendar early, show off finished work, and follow up on every quote until it's signed.",
    roles: [],
    challenges: [
      { title: 'Weather-limited season', text: 'Most paving and concrete work happens between spring and late fall, so the calendar fills fast.' },
      { title: 'Quote comparisons', text: 'Homeowners collect several driveway quotes and often go with whoever follows up best.' },
      { title: 'Material choices', text: 'Asphalt, concrete and interlock each raise questions about cost, lifespan and maintenance.' },
      { title: 'Neighbourhood effect', text: 'A finished driveway is seen by every neighbour, which is a great referral opportunity if you use it.' },
    ],
    focus: [
      { title: 'Early-season booking', text: 'Campaigns to past customers and last year’s quotes before the season starts.', href: '/products/one-click-marketing' },
      { title: 'Quote follow-up', text: 'Automatic, friendly check-ins after every estimate.', href: '/products/all-in-one-inbox' },
      { title: 'Project galleries', text: 'A website that shows driveways, walkways and patios by material and style.', href: '/products/functional-website' },
      { title: 'Neighbour referrals and reviews', text: 'Review and referral requests after every job to turn one driveway into the next on the street.', href: '/products/review-system' },
    ],
    searches: ['driveway paving near me', 'interlock driveway cost', 'concrete driveway contractor', 'asphalt sealing', 'concrete steps repair', 'foundation crack repair'],
    seasons: [
      { season: 'Spring', text: 'Book the season early with past clients and old quotes.' },
      { season: 'Summer', text: 'Peak work; collect reviews and neighbour referrals.' },
      { season: 'Fall', text: 'Final projects, sealing and next-year pre-bookings.' },
      { season: 'Winter', text: 'Plan, quote and fill the spring calendar early.' },
    ],
    faqs: [
      { q: 'Can we reach out to people who got a quote last year?', a: 'Yes, within Canada’s anti-spam rules. Recent inquiries can usually be contacted, and we help you collect consent so your list stays usable.' },
      { q: 'Should we show prices on our website?', a: 'Honest ranges and the factors that affect cost, such as size, material and base preparation, help serious customers and filter out poor fits.' },
      { q: 'How do neighbour referrals work?', a: 'After a finished job, an automatic message thanks the customer and makes it easy to share your details or leave a review. Many neighbours ask about a new driveway.' },
    ],
  },
  {
    slug: 'windows-doors',
    name: 'Windows & Doors',
    business: 'window and door companies',
    title: 'Marketing for Window and Door Companies in the GTA',
    metaDescription:
      'Websites, lead systems and SEO for GTA window and door installers. Win more replacement quotes, nurture long decision cycles and build trust with reviews and real installs.',
    intro:
      'Window and door replacements are big, considered purchases, and homeowners collect several quotes. We help you stand out with real installs and reviews, follow up on every estimate, and stay in touch until they choose you.',
    roles: [],
    challenges: [
      { title: 'Long decisions', text: 'Homeowners take weeks or months to decide and often compare three or more quotes.' },
      { title: 'Pushy-salesperson reputation', text: 'Many homeowners are wary of high-pressure sales. A calm, helpful approach stands out.' },
      { title: 'Technical questions', text: 'Energy efficiency, glass options and frame materials create lots of questions before purchase.' },
      { title: 'Seasonal triggers', text: 'Drafts in winter and heat in summer drive spikes in interest.' },
    ],
    focus: [
      { title: 'Helpful long-cycle follow-up', text: 'Low-pressure check-ins and useful information that keep you in mind while homeowners decide.', href: '/products/one-click-marketing' },
      { title: 'Answer-first content', text: 'Clear guides on efficiency, glass and frame options that rank and get cited by AI assistants.', href: '/products/ai-seo' },
      { title: 'Install galleries and reviews', text: 'Real before-and-after installs and specific reviews from nearby homeowners.', href: '/products/functional-website' },
      { title: 'Instant quote response', text: 'Every quote request answered immediately with a booking link for an in-home consultation.', href: '/products/all-in-one-inbox' },
    ],
    searches: ['window replacement near me', 'energy efficient windows Ontario', 'front door replacement cost', 'patio door installation', 'drafty windows fix', 'window installers Mississauga'],
    seasons: [
      { season: 'Spring', text: 'Replacement planning season; fast quote response.' },
      { season: 'Summer', text: 'Heat and efficiency content; install photos and reviews.' },
      { season: 'Fall', text: 'Get installs done before winter; follow up on open quotes.' },
      { season: 'Winter', text: 'Draft-driven inquiries and planning for spring installs.' },
    ],
    faqs: [
      { q: 'How do we follow up without seeming pushy?', a: 'Space messages out, lead with helpful information rather than pressure, and stop the moment the homeowner replies or asks you to.' },
      { q: 'Should we write about energy efficiency?', a: 'Yes. Clear, honest explanations of efficiency ratings and glass options answer the questions homeowners research most, and help you rank.' },
      { q: 'Can homeowners book consultations online?', a: 'Yes. Quote requests can include a booking link for in-home consultations based on your availability.' },
    ],
  },
  {
    slug: 'painting',
    name: 'Painting',
    business: 'painting companies',
    title: 'Marketing for Painters in the GTA',
    metaDescription:
      'Websites, lead systems and local SEO for GTA residential and commercial painters. Fill the exterior season, keep interior work steady and win more quotes with reviews and photos.',
    intro:
      'Painting is one of the most competitive trades in the GTA, and homeowners choose on trust, reviews and photos. We help you answer every quote request quickly, show your best work and keep the schedule full year-round.',
    roles: [],
    challenges: [
      { title: 'Crowded market', text: 'Many painters compete on every quote, so reviews and response time make the difference.' },
      { title: 'Seasonal exterior work', text: 'Exterior painting is weather-dependent and the season is short.' },
      { title: 'Price-driven comparisons', text: 'Without clear value, homeowners default to the lowest bid.' },
      { title: 'Quiet winters', text: 'Interior work needs to be marketed actively to fill colder months.' },
    ],
    focus: [
      { title: 'Fast quote response', text: 'Instant replies with photo collection, so you can estimate small jobs quickly and book visits for larger ones.', href: '/products/all-in-one-inbox' },
      { title: 'Before-and-after website', text: 'Interior, exterior, cabinet and commercial work shown with real photos.', href: '/products/functional-website' },
      { title: 'Seasonal campaigns', text: 'Exterior booking reminders in spring and interior offers for winter.', href: '/products/one-click-marketing' },
      { title: 'Reviews that justify your price', text: 'Specific reviews about prep, cleanliness and finish help you win on value, not just price.', href: '/products/review-system' },
    ],
    searches: ['house painters near me', 'interior painting cost', 'exterior house painting', 'kitchen cabinet painting', 'condo painting Toronto', 'commercial painting contractor'],
    seasons: [
      { season: 'Spring', text: 'Book the exterior season early with past clients.' },
      { season: 'Summer', text: 'Peak exterior work; collect reviews and photos.' },
      { season: 'Fall', text: 'Last exterior jobs and interior pre-bookings.' },
      { season: 'Winter', text: 'Interior, cabinet and condo campaigns to fill the schedule.' },
    ],
    faqs: [
      { q: 'Can homeowners send photos for a quick estimate?', a: 'Yes. Text and chat make it easy for homeowners to send room photos, so you can give quick ballpark estimates for smaller jobs.' },
      { q: 'How do we stop competing only on price?', a: 'Show your process, preparation and finished work, and collect reviews that mention quality and cleanliness. Homeowners will pay more for confidence.' },
      { q: 'Should we target condos as well as houses?', a: 'If you do that work, yes. Condo painting has its own searches and considerations, and a dedicated page helps you rank for them.' },
    ],
  },
  {
    slug: 'remodeling',
    name: 'Remodeling',
    business: 'renovation companies',
    title: 'Marketing for Renovation and Remodeling Companies in the GTA',
    metaDescription:
      'Websites, lead systems and SEO for GTA kitchen, bathroom and basement renovators. Attract better projects, qualify leads and stay top of mind through long planning cycles.',
    intro:
      'Kitchens, bathrooms and basements are emotional, expensive decisions. We build portfolio websites that attract the right clients, qualify leads before the consultation, and keep you in touch through months of planning.',
    roles: ['Remodeling'],
    challenges: [
      { title: 'Trust and taste', text: 'Clients want to see work they love from a company they trust with their home and budget.' },
      { title: 'Budget mismatch', text: 'Many inquiries don’t match your typical project size or price range.' },
      { title: 'Long planning cycles', text: 'Clients research for months, and the company that stays helpful often wins.' },
      { title: 'Competition from big brands', text: 'Large renovation companies spend heavily on ads. Smaller firms win on reviews, portfolio and personal service.' },
    ],
    focus: [
      { title: 'Portfolio website', text: 'Project pages for kitchens, bathrooms and basements with real photos, timelines and client stories.', href: '/products/functional-website' },
      { title: 'Lead qualification', text: 'Forms and chat that capture project type, budget range and timing before the consultation.', href: '/products/all-in-one-inbox' },
      { title: 'Helpful nurturing', text: 'Newsletters and follow-ups with design ideas and planning advice while clients decide.', href: '/products/one-click-marketing' },
      { title: 'Search for your best projects', text: 'Pages and guides targeting the renovations and areas you want more of.', href: '/products/local-seo' },
    ],
    searches: ['kitchen renovation near me', 'bathroom renovation cost Toronto', 'basement finishing contractor', 'basement apartment renovation', 'renovation company reviews', 'small bathroom remodel ideas'],
    seasons: [
      { season: 'Spring', text: 'Planning season: fast response and strong portfolio pages.' },
      { season: 'Summer', text: 'Showcase completed projects and collect reviews.' },
      { season: 'Fall', text: 'Book winter interior projects like basements and bathrooms.' },
      { season: 'Winter', text: 'Nurture spring kitchen and addition leads with planning content.' },
    ],
    faqs: [
      { q: 'How do we attract bigger projects?', a: 'Show the projects you want more of, explain your process clearly, publish honest cost guidance and qualify leads up front. Your marketing should look like the clients you want.' },
      { q: 'Can you help with basement apartment renovations?', a: 'Yes. Legal basement units are popular across the GTA, and dedicated content explaining the process helps you reach homeowners planning one.' },
      { q: 'What should our project pages include?', a: 'Before-and-after photos, the scope of work, timeline, challenges solved, and a short quote from the client where possible.' },
    ],
  },
]

export const industryBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]))
