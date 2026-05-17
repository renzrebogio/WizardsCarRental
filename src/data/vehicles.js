// Vehicle fleet data for Wizard's Car Rental Service
export const vehicles = [
  {
    id: 'toyota-fortuner-2026',
    name: 'Toyota Fortuner',
    year: 2026,
    type: 'SUV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    pricePerDay: 4500,
    status: 'Available',
    description: "Eight seats of pure dominance. Whether it's mountain roads, highway runs, or school pick-ups — the Fortuner doesn't adapt to the road. The road adapts to it.",
    fullDescription: 'Command the road with mystical power and unyielding strength. The ultimate artifact for your next grand adventure.',
    power: '201 HP',
    drivetrain: '4x4',
    capacity: '4 Bags',
    features: [
      'Apple CarPlay / Android Auto',
      'Adaptive Cruise Control',
      'Leather Upholstery',
      '360° Vision Crystal (Camera)',
      'Premium Surround Sound',
      'Blind Spot Summoning (Monitor)'
    ],
    image: '/images/fleet_fortuner_transparent.png',
    heroImage: '/images/fortuner-book-transparent.png',
    sideImage: '/images/fortuner-side-transparent.png',
    frontImage: '/images/fortuner-front-transparent.png',
    glowColor: 'primary'
  },
  {
    id: 'mitsubishi-expander-2025',
    name: 'Mitsubishi Expander',
    year: 2025,
    type: 'MPV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Gas',
    pricePerDay: 2800,
    status: 'Available',
    description: 'His name is Asphalt. He eats traffic for breakfast, laughs at tight corners, and still has room for seven. The city was built for him — not the other way around.',
    fullDescription: 'A versatile companion for every quest. Dynamic handling meets spacious comfort in this urban warrior.',
    power: '104 HP',
    drivetrain: 'FWD',
    capacity: '3 Bags',
    features: [
      'Android Auto',
      'Touchscreen Display',
      'Multi-function Steering',
      'Rear Camera',
      'Dual AC',
      'Keyless Entry'
    ],
    image: '/images/fleet_expander_transparent.png',
    heroImage: '/images/expander-book-transparent.png',
    sideImage: '/images/expander-side-transparent.png',
    frontImage: '/images/expander-front-transparent.png',
    glowColor: 'secondary'
  },
  {
    id: 'toyota-innova-2025',
    name: 'Toyota Innova',
    year: 2025,
    type: 'MPV',
    seats: 8,
    transmission: 'Automatic',
    fuel: 'Diesel',
    pricePerDay: 3500,
    status: 'Available',
    description: 'They call her Shiny for a reason. Smooth, composed, and always the most polished presence in the parking lot. The ride your family will actually look forward to.',
    fullDescription: 'The ultimate vessel for family adventures. Spacious, reliable, and enchanted with premium comfort for every passenger.',
    power: '174 HP',
    drivetrain: 'FWD',
    capacity: '3 Bags',
    features: [
      'Apple CarPlay / Android Auto',
      'Dual Zone AC',
      'Leather Upholstery',
      'Rear Camera',
      'Premium Audio System',
      'Keyless Entry'
    ],
    image: '/images/fleet_innova_transparent.png',
    heroImage: '/images/innova-book-transparent.png',
    sideImage: '/images/innova-side-transparent.png',
    frontImage: '/images/innova-front-transparent.png',
    glowColor: 'secondary'
  },
  {
    id: 'nissan-livina-2023',
    name: 'Nissan Livina',
    year: 2023,
    type: 'MPV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Gas',
    pricePerDay: 2500,
    status: 'Limited',
    description: 'Quietly capable, endlessly practical. Slide in seven passengers, load the bags, and go — no drama, no compromise, just everyone arriving together.',
    fullDescription: 'A dependable steed for everyday journeys. Comfortable, fuel-efficient, and built for reliability.',
    power: '104 HP',
    drivetrain: 'FWD',
    capacity: '2 Bags',
    features: [
      'Touchscreen Display',
      'Rear Camera',
      'Dual AC',
      'Multi-function Steering',
      'ABS Brakes',
      'Stability Control'
    ],
    image: '/images/fleet_livina_transparent.png',
    heroImage: '/images/livina-book-transparent.png',
    sideImage: '/images/livina-side-transparent.png',
    frontImage: '/images/livina-front-transparent.png',
    glowColor: 'primary'
  }
];

// Rates page additional vehicles
export const rateVehicles = [
  {
    id: 'toyota-fortuner-2026',
    name: 'Toyota Fortuner',
    pricePerDay: 4500,
    pricePerWeek: 28000,
    pricePerMonth: 95000,
    seats: 7,
    specs: ['Diesel Engine', '4x4 Drivetrain'],
    image: vehicles[0].image,
    popular: false
  },
  {
    id: 'mitsubishi-expander-2025',
    name: 'Mitsubishi Expander',
    pricePerDay: 2800,
    pricePerWeek: 17500,
    pricePerMonth: 60000,
    seats: 7,
    specs: ['Gasoline', 'FWD Drivetrain'],
    image: vehicles[1].image,
    popular: false
  },
  {
    id: 'toyota-innova-2025',
    name: 'Toyota Innova',
    pricePerDay: 3500,
    pricePerWeek: 21000,
    pricePerMonth: 75000,
    seats: 8,
    specs: ['Diesel Engine', 'Dual AC'],
    image: vehicles[2].image,
    popular: true
  },
  {
    id: 'nissan-livina-2023',
    name: 'Nissan Livina',
    pricePerDay: 2500,
    pricePerWeek: 15000,
    pricePerMonth: 52000,
    seats: 7,
    specs: ['Gasoline', 'Quiet Cabin'],
    image: vehicles[3].image,
    popular: false
  }
];

// Add-on options
export const addOns = [
  {
    id: 'gps',
    name: 'GPS Navigator',
    description: 'Never lose your way on the quest.',
    pricePerDay: 300,
    icon: 'explore'
  },
  {
    id: 'driver',
    name: 'Additional Driver',
    description: 'Share the burden of the journey.',
    pricePerDay: 500,
    icon: 'person_add'
  },
  {
    id: 'child-seat',
    name: 'Child Seat',
    description: 'Protect the smallest adventurers.',
    pricePerDay: 250,
    icon: 'child_care'
  }
];

// FAQ data
export const faqData = [
  {
    question: 'What documents do I need to rent a vehicle?',
    answer: "To conjure a rental, you will need a valid driver's license (from this realm or accepted international realms), a major credit card in the primary driver's name, and proof of insurance if you choose to decline our magical coverage options."
  },
  {
    question: 'Do you offer self-drive or only chauffeured services?',
    answer: 'We offer both Self-Drive and With Driver options for all our enchanted vehicles. Self-Drive gives you full control of your quest, while our With Driver service provides a highly trained guide who knows every road and shortcut in the realm.'
  },
  {
    question: 'What areas and realms do you serve?',
    answer: 'Our primary sanctum is in Kawit, Cavite, but we serve the entire Cavite province, Metro Manila, and surrounding regions. For long-distance quests to Batangas, Laguna, or beyond, simply contact our guild for special arrangements.'
  },
  {
    question: 'Is magical insurance included in the base rate?',
    answer: 'Basic magical protection (Comprehensive Insurance) is included in all our rental rates. This covers damage to the vehicle and third-party liability. Enhanced protection spells are available as add-ons for complete peace of mind.'
  },
  {
    question: 'What happens if my enchanted vehicle breaks down?',
    answer: 'Our 24/7 Roadside Assistance spell is always active. Contact our Direct Hotline at +63 0915-772-2706 and a rescue party will be dispatched immediately. If the vehicle cannot be repaired on-site, we will summon a replacement vehicle to your location at no additional cost.'
  }
];
