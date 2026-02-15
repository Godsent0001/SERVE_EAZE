// const mockServices = [
//     {
//       id: 1,
//       name: 'Alex Johnson',
//       department: 'Computer Science Department',
//       rating: 4.9,
//       price: 25,
//       unit: 'hr',
//       description: 'Specializing in Python, Java, and Algorithm design for undergraduate courses.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFe2CwPfFudycZeIbpTcr9Wl_sqkRBQC0or5pvcIFS3XzW0VC1_8-J-w7-1de9kAh2a-jQLrczmUmBmok3gUGdzyj0aeOhUVsUvdbYXkkRn2gcQVuSa0MxQGxOCWzHfqD2I3NXafEugVaEctDzFDzQmq51ve5mnSIna_6oh_18nu0d1ztfDCrVo1CzTQAvISWEGYIYZ30XzQi0Lthb96esGF884jGw3-bF97Q2OyFN7ZwQmiX8bhourIABe5bwfaj_7diNn5KxdnQ',
//       badge: 'Verified Provider',
//       badgeType: 'verified'
//     },
//     {
//       id: 2,
//       name: 'Sarah Williams',
//       department: 'Marketing Dept • 5 mins away',
//       rating: 4.7,
//       price: 10,
//       unit: 'trip',
//       description: 'Quick errand runner and package delivery within North Quad. I have a bike!',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS7uCFsJgDb6Nb2biscOW-nibNmT0zeoVlxptxsUv_NaoBL4fDP4KreZVNfinnWv50a2Q4Bb8ewskL88YfTmncG79B4ndR0lPj5TX81GhSHEwih5sVt3EhI-xzY-bukZeicoeq3PhfppLFYL-pJRockKZxSVj2tsZbxtpdZ-v_FrIM_La8kKM6x7uCZ5WVGa3254M-WDxCQDTk78AaE92jLe5RQu9GLM2lOdd2mdCUP9WLoJbz3VH0ieYIjrduaGXzpRiHji2m-6I',
//       badge: 'Fast Delivery',
//       badgeType: 'fast'
//     },
//     {
//       id: 3,
//       name: 'Marcus Chen',
//       department: 'Engineering Block • Available Now',
//       rating: 5.0,
//       price: 15,
//       unit: 'load',
//       description: 'Wash, dry, and fold service with eco-friendly detergent. Same-day turnaround!',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjOPsLJKH8RHgQkh7q3l-2S-kPJL5nEQhGpQmWHZy8gCVFJ7WnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qBQhGpQnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qBQhGpQnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qB',
//       badge: 'Top Rated',
//       badgeType: 'verified'
//     },
//     {
//       id: 4,
//       name: 'Jessica Park',
//       department: 'South Campus Dorms',
//       rating: 4.8,
//       price: 30,
//       unit: 'session',
//       description: 'Certified yoga instructor offering dorm-friendly morning sessions.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG0pXJ3kULX67qdH0k3w-R-5YMtLCPKjJNpRJLQg3Q7y5_ByY0M6RXSy56pJVZ3L0B9XVfMRx7_4lnQZs3Bur5tO8qBL-8B-4LsZA1SEmpUZnpGmhwqh8_uqZ7Y5CJRKPYcvE6QnD5q2mWtAhDlKxFMLqB2J4s-wlKROlRYFmKqnWGU2fDEPj_L9iOg_tTx0hZPirgXxBCOlq9y5N7fzWGjWj5eFpGPhtlSg0YxqNO9mFdD9pz3T20sWjlqg1mQ0CYl1pCjDhSlQ',
//       badge: 'New',
//       badgeType: 'new'
//     },
//     {
//       id: 5,
//       name: 'David Okoro',
//       department: 'Central Library Area',
//       rating: 4.8,
//       price: 25,
//       unit: 'cut',
//       description: 'Licensed apprentice bringing the shop to you. Specializing in fades and edge-ups.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvBa2dmjIwN6vY7rDE97W4d8F_A78jEpypjWnlSWVVDUYZ8hRJ2HmpdSMSq2pbwMP2cvafliG1GqyEhiCWXdnwpXrUoY-rJL7823P4IfXWCr3t_0-wx37O9MbdWL51tqsTAfVahCGW9HaFT30VHP2NsqdZJPljl-E8BNFXxBp-LieAJLuoo-kdnBIon22wCocnHA8zoKfBGPTqhVJkupHxz8S4xKL_p-W2WkzeL0ouY54RkKLV522jS7BoFkwt5hD-3Z_CqK7fMIk',
//       badge: 'Verified Provider',
//       badgeType: 'verified'
//     },
//     {
//       id: 6,
//       name: 'Emily Rodriguez',
//       department: 'North Quad • Online',
//       rating: 4.9,
//       price: 18,
//       unit: 'hr',
//       description: 'Spanish and French tutoring with conversation practice. All levels welcome!',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFe2CwPfFudycZeIbpTcr9Wl_sqkRBQC0or5pvcIFS3XzW0VC1_8-J-w7-1de9kAh2a-jQLrczmUmBmok3gUGdzyj0aeOhUVsUvdbYXkkRn2gcQVuSa0MxQGxOCWzHfqD2I3NXafEugVaEctDzFDzQmq51ve5mnSIna_6oh_18nu0d1ztfDCrVo1CzTQAvISWEGYIYZ30XzQi0Lthb96esGF884jGw3-bF97Q2OyFN7ZwQmiX8bhourIABe5bwfaj_7diNn5KxdnQ',
//       badge: 'Top Rated',
//       badgeType: 'verified'
//     }
//   // Add the rest of your services similarly (2,3,4...)
// ];

// export default mockServices;


const mockServices = [
  {
    id: "1",
    title: "Advanced Programming & Algorithm Tutoring",
    provider: "Alex Johnson",
    department: "Computer Science Department",
    location: "Engineering Block, UNIBEN",
    rating: 4.9,
    price: 25,
    unit: "hr",
    badge: "Verified Provider",
    badgeType: "verified",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFe2CwPfFudycZeIbpTcr9Wl_sqkRBQC0or5pvcIFS3XzW0VC1_8-J-w7-1de9kAh2a-jQLrczmUmBmok3gUGdzyj0aeOhUVsUvdbYXkkRn2gcQVuSa0MxQGxOCWzHfqD2I3NXafEugVaEctDzFDzQmq51ve5mnSIna_6oh_18nu0d1ztfDCrVo1CzTQAvISWEGYIYZ30XzQi0Lthb96esGF884jGw3-bF97Q2OyFN7ZwQmiX8bhourIABe5bwfaj_7diNn5KxdnQ",

    description: `
I provide in-depth tutoring sessions focused on Python, Java, Data Structures, and Algorithm Design tailored specifically for undergraduate computer engineering and computer science students.

Over the past few years, I’ve helped students move from struggling with core concepts like recursion, time complexity, sorting algorithms, and dynamic programming to confidently solving exam and real-world problems independently.

Each session is structured around:
• Breaking down complex topics into intuitive steps  
• Hands-on coding practice and debugging  
• Exam-focused preparation for midterms and finals  
• Practical project guidance (React apps, backend APIs, system design)

Students I work with often report:
• improved grades  
• deeper conceptual understanding  
• confidence during technical interviews  
• ability to build real projects independently  

I also assist with:
– final year project ideation  
– GitHub portfolio guidance  
– coding test preparation  
– debugging difficult assignments  

Sessions can be held physically on campus or online depending on your preference.
`,

    availability: ["2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"],

    reviews: [
      {
        name: "Daniel O.",
        rating: 5,
        comment:
          "Explained dynamic programming better than any lecturer I’ve had. I finally understand it.",
        time: "1 week ago",
      },
      {
        name: "Grace E.",
        rating: 5,
        comment:
          "Helped me debug my final year project backend in one session. Worth every naira.",
        time: "3 weeks ago",
      },
    ],
  },

  {
    id: "2",
    title: "Campus Errand & Delivery Services",
    provider: "Sarah Williams",
    department: "Marketing Dept",
    location: "North Quad",
    rating: 4.7,
    price: 10,
    unit: "trip",
    badge: "Fast Delivery",
    badgeType: "fast",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS7uCFsJgDb6Nb2biscOW-nibNmT0zeoVlxptxsUv_NaoBL4fDP4KreZVNfinnWv50a2Q4Bb8ewskL88YfTmncG79B4ndR0lPj5TX81GhSHEwih5sVt3EhI-xzY-bukZeicoeq3PhfppLFYL-pJRockKZxSVj2tsZbxtpdZ-v_FrIM_La8kKM6x7uCZ5WVGa3254M-WDxCQDTk78AaE92jLe5RQu9GLM2lOdd2mdCUP9WLoJbz3VH0ieYIjrduaGXzpRiHji2m-6I",

    description: `
Need something picked up quickly across campus? I provide fast, reliable errand and delivery services for students who need help moving items, buying essentials, or sending packages between hostels and academic blocks.

Services include:
• food pickups  
• document delivery  
• parcel transport  
• hostel-to-library runs  
• emergency errands  

I operate mainly within:
– North Quad  
– Engineering block  
– Main Library  
– Lecture halls  

Why students choose my service:
• very fast response time  
• safe handling of items  
• consistent communication during delivery  
• affordable student pricing  

Perfect for:
– busy students  
– last-minute assignments  
– exam periods  
– hostel residents  

Bike-powered mobility ensures quicker movement across campus even during peak hours.
`,

    availability: ["Now", "1:00 PM", "3:00 PM", "6:00 PM"],

    reviews: [
      {
        name: "Michael T.",
        rating: 5,
        comment: "Delivered my documents in under 15 minutes. Super reliable.",
        time: "4 days ago",
      },
    ],
  },

  {
    id: "3",
    title: "Laundry, Drying & Folding Services",
    provider: "Marcus Chen",
    department: "Engineering Block",
    location: "Campus Residence Area",
    rating: 5.0,
    price: 15,
    unit: "load",
    badge: "Top Rated",
    badgeType: "verified",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjOPsLJKH8RHgQkh7q3l-2S-kPJL5nEQhGpQmWHZy8gCVFJ7WnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qBQhGpQnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qBQhGpQnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qB",

    description: `
Professional campus laundry service designed for students who want clean, fresh, neatly folded clothes without the stress of doing it themselves.

What you get:
• washing with eco-friendly detergents  
• proper stain removal  
• machine drying  
• professional folding  
• same-day turnaround for urgent loads  

I handle:
– everyday wear  
– bedsheets  
– sportswear  
– delicate fabrics  

Ideal for:
• students with tight schedules  
• exam season  
• hostel residents without laundry access  

Clothes are treated carefully and returned packaged and organized.
`,

    availability: ["Morning", "Afternoon", "Evening"],

    reviews: [
      {
        name: "Kelvin A.",
        rating: 5,
        comment:
          "Clothes came back smelling amazing and neatly folded. Very professional.",
        time: "1 week ago",
      },
    ],
  },

  {
    id: "4",
    title: "Dorm-Friendly Yoga & Wellness Sessions",
    provider: "Jessica Park",
    department: "South Campus Dorms",
    location: "Dorm studios / Outdoor field",
    rating: 4.8,
    price: 30,
    unit: "session",
    badge: "New",
    badgeType: "new",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG0pXJ3kULX67qdH0k3w-R-5YMtLCPKjJNpRJLQg3Q7y5_ByY0M6RXSy56pJVZ3L0B9XVfMRx7_4lnQZs3Bur5tO8qBL-8B-4LsZA1SEmpUZnpGmhwqh8_uqZ7Y5CJRKPYcvE6QnD5q2mWtAhDlKxFMLqB2J4s-wlKROlRYFmKqnWGU2fDEPj_L9iOg_tTx0hZPirgXxBCOlq9y5N7fzWGjWj5eFpGPhtlSg0YxqNO9mFdD9pz3T20sWjlqg1mQ0CYl1pCjDhSlQ",

    description: `
Certified yoga instructor offering guided sessions designed specifically for students dealing with academic stress, anxiety, and tight schedules.

Focus areas:
• flexibility  
• breathing techniques  
• mental clarity  
• posture improvement  
• relaxation routines  

Perfect for:
– exam periods  
– sedentary students  
– athletes  
– anyone seeking mindfulness  

Sessions are beginner-friendly and conducted in small groups or one-on-one formats.
`,

    availability: ["6:00 AM", "7:30 AM", "6:00 PM"],

    reviews: [],
  },

  {
    id: "5",
    title: "Mobile Haircuts & Grooming",
    provider: "David Okoro",
    department: "Central Library Area",
    location: "Hostels & campus",
    rating: 4.8,
    price: 25,
    unit: "cut",
    badge: "Verified Provider",
    badgeType: "verified",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvBa2dmjIwN6vY7rDE97W4d8F_A78jEpypjWnlSWVVDUYZ8hRJ2HmpdSMSq2pbwMP2cvafliG1GqyEhiCWXdnwpXrUoY-rJL7823P4IfXWCr3t_0-wx37O9MbdWL51tqsTAfVahCGW9HaFT30VHP2NsqdZJPljl-E8BNFXxBp-LieAJLuoo-kdnBIon22wCocnHA8zoKfBGPTqhVJkupHxz8S4xKL_p-W2WkzeL0ouY54RkKLV522jS7BoFkwt5hD-3Z_CqK7fMIk",

    description: `
Professional grooming service brought directly to your hostel or location. Specializing in clean fades, line-ups, and modern campus styles.

Benefits:
• no queue at barbershops  
• hygienic equipment  
• personalized attention  
• flexible timing  

Ideal for:
– busy students  
– last-minute events  
– presentations  
– interviews  
`,
    availability: ["12 PM", "2 PM", "5 PM", "7 PM"],
    reviews: [],
  },

  {
    id: "6",
    title: "Spanish & French Language Tutoring",
    provider: "Emily Rodriguez",
    department: "Online / North Quad",
    location: "Virtual & in-person",
    rating: 4.9,
    price: 18,
    unit: "hr",
    badge: "Top Rated",
    badgeType: "verified",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFe2CwPfFudycZeIbpTcr9Wl_sqkRBQC0or5pvcIFS3XzW0VC1_8-J-w7-1de9kAh2a-jQLrczmUmBmok3gUGdzyj0aeOhUVsUvdbYXkkRn2gcQVuSa0MxQGxOCWzHfqD2I3NXafEugVaEctDzFDzQmq51ve5mnSIna_6oh_18nu0d1ztfDCrVo1CzTQAvISWEGYIYZ30XzQi0Lthb96esGF884jGw3-bF97Q2OyFN7ZwQmiX8bhourIABe5bwfaj_7diNn5KxdnQ",

    description: `
Interactive language tutoring focused on conversation, pronunciation, grammar, and exam preparation.

Students will learn:
• real conversations  
• listening comprehension  
• grammar structures  
• vocabulary building  

Suitable for:
– beginners  
– intermediate learners  
– exam preparation  
– travel readiness  
`,
    availability: ["Online Anytime", "Evenings"],
    reviews: [],
  },
];

export default mockServices;
