// Client testimonials. Set `location` to the client's area (e.g. "Vaughan, ON"); it shows wherever it's filled in.
export const testimonials = [
  {
    name: "Affan Mahmood",
    role: "HVAC Owner",
    location: "",
    quote: "Yugen didn't just build us a site — they built a system. Phones started ringing and we stopped chasing leads.",
  },
  {
    name: "Kelsey Olso",
    role: "Plumbing Contractor",
    location: "",
    quote: "Everything looks professional now. Customers mention the site all the time.",
  },
  {
    name: "Joann Marquez",
    role: "Roofing Specialist",
    location: "",
    quote: "Leads get answered fast and nothing slips through the cracks anymore.",
  },
  {
    name: "Ashvin Raveendran",
    role: "Electrician",
    location: "",
    quote: "No fluff, no BS. Just clean execution and real results.",
  },
  {
    name: "Philip Almayda",
    role: "General Contractor",
    location: "",
    quote: "Worth every dollar. Paid for itself quicker than expected.",
  },
  {
    name: "Nadia Qamar",
    role: "Cleaning Services",
    location: "",
    quote: "Built for contractors, not tech people. Easy and effective.",
  },
  {
    name: "Marcus T.",
    role: "Landscaping Pro",
    location: "",
    quote: "The missed call text back feature alone paid for the entire system in the first week. Unbelievable.",
  },
  {
    name: "Sarah Jenkins",
    role: "Remodeling",
    location: "",
    quote: "We finally have a system that automatically gets us 5-star reviews. It's completely hands-off.",
  },
  {
    name: "David Chen",
    role: "HVAC Tech",
    location: "",
    quote: "I was skeptical about AI, but the web chat books appointments while I'm sleeping.",
  },
];

export const byline = (t) => [t.role, t.location].filter(Boolean).join(" · ");
