// Client testimonials shown on the home carousel and the Testimonials page.
// These are clients of Takeoff Digital Solutions (same founder). Set `location` to the client's real area; empty hides it.
export const testimonials = [
  {
    name: "Affan Mahmood",
    role: "HVAC Owner",
    location: "",
    quote: "Takeoff didn't just build us a site — they built a system. Phones started ringing and we stopped chasing leads.",
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

// Shown wherever testimonials appear so visitors know whose clients these are.
export const testimonialSource = "From clients of Takeoff Digital Solutions, Yugen's sister company. Same founder, same systems.";

export const byline = (t) => [t.role, t.location].filter(Boolean).join(" · ");
