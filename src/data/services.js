export const categories = [
  { id: 'all', label: 'All Treatments' },
  { id: 'sculpting', label: 'Body Sculpting & Tummy Tuck' },
  { id: 'laser', label: 'Laser Hair Removal' },
  { id: 'drainage', label: 'Lymphatic & Debloat' },
  { id: 'skin', label: 'Skin Tightening & RF' },
  { id: 'packages', label: 'Signature Packages' }
];

export const services = [
  {
    id: 'tummy-tuck-signature',
    category: 'sculpting',
    title: 'Non-Surgical Tummy Tuck (Flagship)',
    tagline: 'Our award-nominated signature body transformation',
    duration: '60 mins',
    price: 135,
    popular: true,
    image: '/images/before_after_tummytuck.jpg',
    description: 'Shardae’s most requested signature protocol: combining high-frequency ultrasonic cavitation to liquefy deep fat cells with vacuum radiofrequency to contract loose skin and snatch the waistline with zero downtime.',
    benefits: ['Zero needles, cuts, or surgical downtime', 'Immediate inch reduction and skin firming', 'Targeted fat cell membrane breakdown', 'Award-nominated transformation protocol'],
    areas: ['Abdomen & Waistline', 'Flanks & Love Handles', 'Lower Belly Postpartum'],
    recommendedSessions: '4 - 6 Sessions for dramatic, lasting results'
  },
  {
    id: 'laser-hair-removal',
    category: 'laser',
    title: 'Medical-Grade Diode Laser Hair Removal',
    tagline: 'Virtually pain-free with advanced contact ice-chill cooling',
    duration: '45 mins',
    price: 95,
    popular: true,
    image: '/images/treatment_room.jpg',
    description: 'Triple-wavelength medical diode laser targeting root hair follicles with integrated sub-zero cooling. Performed by Shardae in our private, hygienic Stafford suite across all Fitzpatrick skin tones.',
    benefits: ['Sub-zero contact cooling for pain-free sessions', 'Safe and effective across all Fitzpatrick skin tones', 'Permanently reduces ingrown hairs and razor bumps', 'Quick, comfortable sessions'],
    areas: ['Full Body', 'Hollywood & Brazilian', 'Underarms & Bikini Line', 'Full Legs', 'Face & Chin'],
    recommendedSessions: '6 - 8 Sessions for permanent clearance'
  },
  {
    id: 'brazilian-lymphatic',
    category: 'drainage',
    title: 'Brazilian Sculpt & Lymphatic Drainage',
    tagline: 'Instant debloat, contour & waist snatching',
    duration: '75 mins',
    price: 150,
    popular: true,
    image: '/images/before_after_slimming.jpg',
    description: 'Specialised vigorous manual strokes and deep pumping drainage technique that eliminates fluid retention, accelerates toxin flushing, and delivers immediate waist definition.',
    benefits: ['Immediate visible reduction in bloating', 'Stimulates lymphatic flow & metabolism', 'Reduces water retention and heavy legs', 'Post-procedure recovery support'],
    areas: ['Full Body Detox', 'Targeted Abdominal Snatch', 'Lower Limbs & Flanks'],
    recommendedSessions: 'Bi-weekly or event prep 48h prior'
  },
  {
    id: 'cavitation-rf-body',
    category: 'skin',
    title: 'Multi-Polar RF Dermal Skin Tightening',
    tagline: 'Collagen remodeling & elasticity restoration',
    duration: '50 mins',
    price: 120,
    popular: false,
    image: '/images/clinic_towels.jpg',
    description: 'Controlled radiofrequency thermal waves heat deep dermal layers to 42°C, instantly contracting existing collagen fibers while stimulating long-term neocollagenesis to firm lax skin.',
    benefits: ['Tightens loose post-weight loss or postpartum skin', 'Improves skin tone and elasticity', 'Comfortable warm massage sensation', 'No downtime or skin irritation'],
    areas: ['Stomach & Lower Belly', 'Upper Arms (Bingo Wings)', 'Neck & Décolletage', 'Inner & Outer Thighs'],
    recommendedSessions: '4 - 6 Sessions spaced 1-2 weeks apart'
  },
  {
    id: 'wood-therapy',
    category: 'sculpting',
    title: 'Maderotherapy (Colombian Wood Therapy)',
    tagline: 'Cellulite breakdown & muscular definition',
    duration: '50 mins',
    price: 110,
    popular: false,
    image: '/images/before_after_slimming.jpg',
    description: 'Ancient Colombian technique utilizing hand-crafted anatomical wooden implements to break down fibrous cellulite, loosen fascia, and sculpt natural curves.',
    benefits: ['Smooths dimpled skin texture', 'Fascia release and blood oxygenation', 'Activates body contouring curves', '100% natural, holistic & non-invasive'],
    areas: ['Legs & Glutes Lift', 'Abdomen Contouring', 'Waist Hourglass Sculpting'],
    recommendedSessions: '6 - 8 Sessions'
  },
  {
    id: 'genie-hourglass-signature',
    category: 'packages',
    title: 'The Bodi Genie VIP Transformation Protocol',
    tagline: 'Full consultation & bespoke 3-in-1 contouring by Shardae',
    duration: '100 mins',
    price: 245,
    popular: true,
    image: '/images/shardae_rae.jpg',
    description: 'The definitive Bodi Genie masterclass personally conducted by Shardae Rae: Combining 360° Cavitation, Brazilian Lymphatic sculpting strokes, and Radiofrequency vacuum skin tightening in one VIP session.',
    benefits: ['Maximum inch loss in a single booking', 'Targeted waist cinching and booty pop', 'VIP express consultation & body diagnostic', 'Includes bespoke post-care hydration guide'],
    areas: ['Full Midsection + Love Handles + Gluteal Sculpt'],
    recommendedSessions: 'Most clients book 3-session packs'
  }
];

export const addOns = [
  { id: 'laser-underarms', name: 'Laser Hair Removal Underarm Add-on', price: 30, duration: '+15 mins' },
  { id: 'cryo-firming', name: 'Cryo-Firming Ice Therapy Finish', price: 35, duration: '+15 mins' },
  { id: 'infra-mat', name: 'Infrared Jade Stone Detox Mat', price: 25, duration: '+20 mins' },
  { id: 'cellulite-cupping', name: 'Glute Vacuum Cupping Plump', price: 40, duration: '+20 mins' },
  { id: 'collagen-boost', name: 'Medical Grade Firming Ampoule', price: 30, duration: '+0 mins' }
];
