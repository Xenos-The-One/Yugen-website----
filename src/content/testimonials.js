// Client testimonials shown on the home carousel and the Testimonials page.
// An empty `location` is hidden.
export const testimonials = [
  {
    name: "Affan Mahmood",
    role: "HVAC Owner",
    location: "Vaughan, ON",
    quote: "They didn't just build us a site — they built a system. Phones started ringing and we stopped chasing leads.",
  },
  {
    name: "Kelsey Olso",
    role: "Plumbing Contractor",
    location: "Mississauga, ON",
    quote: "Everything looks professional now. Customers mention the site all the time.",
  },
  {
    name: "Joann Marquez",
    role: "Roofing Specialist",
    location: "Brampton, ON",
    quote: "Leads get answered fast and nothing slips through the cracks anymore.",
  },
  {
    name: "Ashvin Raveendran",
    role: "Electrician",
    location: "Markham, ON",
    quote: "No fluff, no BS. Just clean execution and real results.",
  },
  {
    name: "Philip Almayda",
    role: "General Contractor",
    location: "Richmond Hill, ON",
    quote: "Worth every dollar. Paid for itself quicker than expected.",
  },
  {
    name: "Nadia Qamar",
    role: "Cleaning Services",
    location: "Oakville, ON",
    quote: "Built for contractors, not tech people. Easy and effective.",
  },
  {
    name: "Marcus T.",
    role: "Landscaping Pro",
    location: "Etobicoke, ON",
    quote: "The missed call text back feature alone paid for the entire system in the first week. Unbelievable.",
  },
  {
    name: "Sarah Jenkins",
    role: "Remodeling",
    location: "Scarborough, ON",
    quote: "We finally have a system that automatically gets us 5-star reviews. It's completely hands-off.",
  },
  {
    name: "David Chen",
    role: "HVAC Tech",
    location: "Pickering, ON",
    quote: "I was skeptical about AI, but the web chat books appointments while I'm sleeping.",
  },
];

export const byline = (t) => [t.role, t.location].filter(Boolean).join(" · ");
