// "SEO for {trade}" detail on each industry page (/industries/:slug): the Google Business Profile
// categories and core service pages we'd set up for that trade. Keyed by industry slug.
export const industrySeo = {
  hvac: {
    lead: 'HVAC searches split sharply by urgency. “No heat” and “AC not working” searches want a phone number now; heat pump and furnace replacement searches want answers, prices and rebates first. Good HVAC SEO serves both.',
    categories: ['HVAC contractor', 'Furnace repair service', 'Air conditioning contractor', 'Heating contractor'],
    pages: ['Furnace repair', 'Furnace replacement', 'AC repair', 'AC installation', 'Heat pump installation', 'Ductless mini splits', 'Emergency HVAC service', 'Maintenance plans'],
  },
  plumbing: {
    lead: 'Plumbing SEO is won on emergencies and on specific jobs. Homeowners search the problem, like “basement drain backing up” or “no hot water”, and call whoever looks most available and best reviewed.',
    categories: ['Plumber', 'Drainage service', 'Water heater installation service'],
    pages: ['Emergency plumbing', 'Drain cleaning', 'Water heater repair and replacement', 'Sump pumps', 'Backwater valves', 'Basement waterproofing plumbing', 'Pipe repair', 'Bathroom plumbing'],
  },
  electricians: {
    lead: 'Electrical searches are trust-heavy. Homeowners want to see an ESA licence, insurance and reviews before calling, and high-value jobs like panel upgrades and EV chargers are researched and compared.',
    categories: ['Electrician', 'Electrical installation service', 'Electrical repair service', 'Lighting contractor'],
    pages: ['Panel upgrades', 'EV charger installation', 'Knob-and-tube replacement', 'Aluminum wiring', 'Pot lights', 'Rewiring', 'Generator installation', 'Emergency electrician'],
  },
  roofing: {
    lead: 'Roofing SEO has two jobs: catch storm-damage searches the day they happen, and win the long research phase before a full replacement. Local reviews and visible credentials help you beat out-of-town storm chasers.',
    categories: ['Roofing contractor', 'Gutter cleaning service', 'Skylight contractor'],
    pages: ['Roof repair', 'Roof replacement', 'Emergency and storm repair', 'Flat roofing', 'Shingle roofing', 'Eavestroughs', 'Roof inspections', 'Skylights'],
  },
  'general-contractors': {
    lead: 'General contractors rank best with portfolio-led pages for the projects they want more of. Searches like “home addition contractor” or “custom home builder” are researched for months, so detail and proof matter more than speed.',
    categories: ['General contractor', 'Construction company', 'Home builder', 'Remodeler'],
    pages: ['Home additions', 'Major renovations', 'Custom homes', 'Garden and laneway suites', 'Basement apartments', 'Design-build', 'Commercial fit-outs', 'Project gallery'],
  },
  landscaping: {
    lead: 'Landscaping SEO is visual and seasonal. Homeowners search by project, like “interlock driveway” or “backyard landscaping”, and decide on photos, so every service page needs real project galleries and should be live well before spring.',
    categories: ['Landscaper', 'Landscape designer', 'Lawn care service', 'Snow removal service'],
    pages: ['Landscape design', 'Interlock and hardscaping', 'Retaining walls', 'Sod and planting', 'Landscape lighting', 'Lawn maintenance', 'Spring and fall clean-ups', 'Snow removal'],
  },
  'pool-services': {
    lead: 'Pool searches cluster around openings, closings and emergencies like a green pool or failed pump. Ranking before spring and late summer, and capturing every peak-season call, decides how full the year is.',
    categories: ['Swimming pool repair service', 'Swimming pool contractor', 'Pool cleaning service', 'Swimming pool supply store'],
    pages: ['Pool openings', 'Pool closings', 'Weekly maintenance', 'Green pool clean-up', 'Pump and filter repair', 'Heater installation', 'Liner replacement', 'Salt systems'],
  },
  'pest-control': {
    lead: 'Pest control searches are urgent and specific: “mice in walls”, “bed bug exterminator”, “wasp nest removal”. Pest-specific pages and fast, discreet contact options win those calls.',
    categories: ['Pest control service', 'Exterminator'],
    pages: ['Mice and rats', 'Bed bugs', 'Cockroaches', 'Ants', 'Wasps and hornets', 'Raccoons and wildlife', 'Commercial pest control', 'Prevention plans'],
  },
  'concrete-paving': {
    lead: 'Concrete and paving searches are by material and project: “asphalt driveway cost”, “concrete patio”, “interlock walkway”. Material-specific pages with photos and clear pricing ranges win the comparison stage.',
    categories: ['Paving contractor', 'Concrete contractor', 'Asphalt contractor'],
    pages: ['Asphalt driveways', 'Concrete driveways', 'Interlock driveways', 'Concrete patios', 'Walkways and steps', 'Sealing and repair', 'Commercial paving', 'Project gallery'],
  },
  'windows-doors': {
    lead: 'Window and door buyers research for weeks. They search for options, energy efficiency and costs long before asking for quotes, so answer-first guides and real installs earn both rankings and AI citations.',
    categories: ['Window installation service', 'Door supplier', 'Window supplier', 'Glass repair service'],
    pages: ['Window replacement', 'Entry doors', 'Patio and sliding doors', 'Energy-efficient windows', 'Basement windows', 'Storm doors', 'Window repair', 'Install gallery'],
  },
  painting: {
    lead: 'Painting SEO is crowded, so specificity wins. Separate pages for interior, exterior, cabinets and commercial work, with real before-and-after photos and reviews about prep and cleanliness, help you win on value instead of price.',
    categories: ['Painter'],
    pages: ['Interior painting', 'Exterior painting', 'Cabinet painting', 'Deck and fence staining', 'Commercial painting', 'Drywall repair', 'Condo painting', 'Colour consultation'],
  },
  remodeling: {
    lead: 'Renovation searches are high value and slow to convert. Homeowners look up “kitchen renovation cost Toronto” or “basement finishing” months before calling, so detailed project pages and cost guides do the selling.',
    categories: ['Remodeler', 'Kitchen remodeler', 'Bathroom remodeler'],
    pages: ['Kitchen renovations', 'Bathroom renovations', 'Basement finishing', 'Basement apartments', 'Whole-home renovations', 'Flooring', 'Accessibility renovations', 'Project gallery'],
  },
}
