import heroimage from '../assets/redHeroCamero.png'
import herobgImage from '../assets/heroback.webp'
import featureImage1 from "../assets/feature6.webp"
import featureImage2 from "../assets/feature5.webp"
import featureImage3 from "../assets/feature7.webp"
import featureImage4 from "../assets/feature8.webp"
import TestimonialImage1 from '../assets/testimonial5.webp'
import TestimonialImage2 from '../assets/testimonial6.webp'
import TestimonialImage3 from '../assets/testimonial7.webp'
import aboutStoryImage from '../assets/aboutStorypics.webp'
import fleetPng from '../assets/fleespicture.webp'
import HowItworkspng from '../assets/howItworks.webp'
import convertimage1 from '../assets/convert1.webp'
import convertimage2 from '../assets/convert2.webp'
import convertimage3 from '../assets/convert3.webp'
import convertimage4 from '../assets/convert4.webp'
import convertimage5 from '../assets/convert5.webp'
import convertimage6 from '../assets/convert6.webp'
import convertimage7 from '../assets/convert7.webp'
import convertimage8 from '../assets/convert8.webp'
import convertimage9 from '../assets/convert9.webp'
import convertimage10 from '../assets/convert10.webp'
import convertimage11 from '../assets/convert11.webp'
import convertimage12 from '../assets/convert12.webp'
import convertimage13 from '../assets/convert13.webp'
import convertimage14 from '../assets/convert14.webp'
import convertimage15 from '../assets/convert15.webp'
import c43 from '../assets/c432012.webp'
import hilux from '../assets/hilux.webp'
import camry from '../assets/camrypng.webp'
import bmwsedan from '../assets/bmwsedan.webp'
import maybach from '../assets/mercedesMaybach.webp'
import bmwx6 from '../assets/bmwx6.webp'
import gle_43_2017 from '../assets/gle_43_2017.webp'
import gle2022 from '../assets/gle2022.webp'
import glc_2022 from '../assets/glc_2018.webp'
import toyatoh1 from '../assets/toyato_highlander1.webp'
import toyatoh2 from '../assets/toyatohiglander2.webp'
import { describe } from 'zod/v4/core'

// export const navLinks = ['Fleet', 'Experiences', 'How It Works', 'About', 'Contact'];
export const storyImage = aboutStoryImage;
export const FleetPics = fleetPng;
export const navLinks = [
  { label: 'Fleet', href: '/Fleet', },
  { label: 'Experiences', href: '/Experiences', },
  { label: 'How It Works', href: '/how-it-works', },
  { label: 'About', href: '/About', },
  { label: 'Contact', href: '/Contact', },
]
export const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Our Cars", href: "/cars" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Car Rental", href: "/services/car-rental" },
      { name: "Long-Term Rental", href: "/services/long-term-rental" },
      { name: "Business Rental", href: "/services/business-rental" },
      { name: "Airport Pickup", href: "/services/airport-pickup" },
      { name: "Chauffeur Service", href: "/services/chauffeur" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Rental Policies", href: "/rental-policies" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
];
export const HeroImage = heroimage;
export const heroBackgroundImage = herobgImage;
export const majorCities = [
  "Lagos",
  "Abuja",
  "Kano",
  "Ibadan",
  "Port Harcourt",
  "Benin City",
  "Kaduna",
  "Enugu",
  "Aba",
  "Onitsha",
  "Jos",
  "Ilorin",
  "Warri",
  "Uyo",
  "Calabar",
  "Owerri",
  "Akure",
  "Abeokuta",
  "Osogbo",
  "Ado-Ekiti",
  "Makurdi",
  "Minna",
  "Lokoja",
  "Sokoto",
  "Maiduguri",
  "Bauchi",
  "Gombe",
  "Yola",
  "Katsina",
  "Zaria"
];
export const cars = [
  {
    image: featureImage1,
    name: "BMW 5 Series",
    category: "Luxury Sedan",
    price: 85000,
    priceLabel: "₦85,000 / day",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    doors: 4,
    buttonText: "Rent Now",
  },
  {
    image: featureImage2,
    name: "Mercedes-Benz C-Class",
    category: "Executive Sedan",
    price: 95000,
    priceLabel: "₦95,000 / day",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    doors: 4,
    buttonText: "Rent Now",
  },
  {
    image: featureImage3,
    name: "Toyota Land Cruiser",
    category: "Premium SUV",
    price: 150000,
    priceLabel: "₦150,000 / day",
    transmission: "Automatic",
    seats: 7,
    fuel: "Petrol",
    doors: 4,
    buttonText: "Rent Now",
  },
  {
    image: featureImage4,
    name: "Range Rover Sport",
    category: "Luxury SUV",
    price: 180000,
    priceLabel: "₦180,000 / day",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    doors: 4,
    buttonText: "Rent Now",
  },
];


export const features = [

  {
    title: "Well-Maintained Cars",
    description:
      "Every vehicle in our fleet is carefully inspected and maintained for a safe, smooth, and comfortable ride.",
    icon: "ShieldCheck",
  },
  {
    title: "Simple Booking",
    description:
      "Choose your car, select your dates, and get on the road with a quick and hassle-free booking process.",
    icon: "CalendarCheck",
  },
  {
    title: "Transparent Pricing",
    description:
      "Know exactly what you're paying for with clear, upfront rental prices and no hidden fees.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Reliable Support",
    description:
      "Need help before or during your rental? Our team is always ready to assist whenever you need us.",
    icon: "Headset",

  },
];
export const steps = [
  {
    number: "01",
    title: "Choose Your Car",
    description:
      "Browse our collection of reliable vehicles and select the one that fits your needs and style.",
  },
  {
    number: "02",
    title: "Pick Your Dates",
    description:
      "Choose your pickup and return dates, then provide the details needed to complete your booking.",
  },
  {
    number: "03",
    title: "Hit the Road",
    description:
      "Confirm your reservation, pick up your car, and enjoy a smooth journey with RavenCars.",
  },
];
export const testimonials = [
  {
    image: TestimonialImage1,
    title: "Smooth from Start to Finish",
    review:
      "The booking process was incredibly easy, and the car was clean and exactly as described. I had a great experience with RavenCars.",
    name: "Daniel Okafor",
    location: "Lagos, Nigeria",
  },
  {
    image: TestimonialImage3,
    title: "A Great Rental Experience",
    review:
      "The car was in excellent condition, the pricing was clear, and everything went smoothly. I'll definitely be using RavenCars again.",
    name: "Amara Williams",
    location: "Abuja, Nigeria",
  },
  {
    image: TestimonialImage2,
    title: "Reliable and Convenient",
    review:
      "I needed a car for a weekend trip and RavenCars made everything simple. Great vehicle, easy pickup, and excellent service.",
    name: "Chinedu Eze",
    location: "Port Harcourt, Nigeria",
  },
];

export const faqs = [
  {
    question: "What do I need to rent a car?",
    answer:
      "You'll need a valid driver's license, a valid means of identification, and any other required documents depending on the vehicle and rental terms.",
  },
  {
    question: "How do I book a car?",
    answer:
      "Browse our available vehicles, choose your preferred car and rental dates, provide your details, and confirm your booking.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes. Cancellation and modification options depend on the rental terms associated with your booking. Please check our rental policy for specific details.",
  },
  {
    question: "Is there a security deposit?",
    answer:
      "A security deposit may be required depending on the vehicle and rental agreement. The applicable amount will be shown before you confirm your booking.",
  },
  {
    question: "Can I rent a car for more than one day?",
    answer:
      "Absolutely. RavenCars offers flexible rental periods, including daily, weekly, and longer-term rentals.",
  },
  {
    question: "Do you offer airport pickup?",
    answer:
      "Yes. Airport pickup is available for selected locations. Contact our team to arrange your pickup before your trip.",
  },
  {
    question: "What happens if I need help during my rental?",
    answer:
      "Our support team is available to assist with questions or issues throughout your rental period. Simply contact us through your preferred support channel.",
  },
  {
    question: "Can someone else drive the rental car?",
    answer:
      "Additional drivers may be allowed depending on the rental agreement. Any additional driver must meet our eligibility requirements and be registered before driving the vehicle.",
  },
];

export const values = [
  {
    icon: 'ShieldCheck',
    title: "Reliability",
    description:
      "You can count on us to provide well-maintained vehicles and dependable service when you need it.",
  },
  {
    icon: 'Eye',
    title: "Transparency",
    description:
      "Clear pricing and straightforward rental terms, with no unnecessary surprises.",
  },
  {
    icon: 'Zap',
    title: "Convenience",
    description:
      "From booking to returning your car, we make every step as simple and hassle-free as possible.",
  },
  {
    icon: 'Heart',
    title: "Customer First",
    description:
      "We put our customers at the heart of everything we do, ensuring every journey starts and ends with a great experience.",
  },
];

export const HowitworksPics = HowItworkspng;
export const fleetsfilter = ['All', 'Luxury', 'SUV', 'Sports', 'Economy']



export const carsgalery = [
  {
    image: convertimage1,
    grids: c43,
    name: "Mercedes C43 AMG",
    category: "Sports",
    price: 120000,
    priceLabel: "₦120,000 / day",
    transmission: "Automatic",
    seats: 5,
    description: 'A powerful performance sedan that combines sporty handling, premium comfort, and an exciting driving experience.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "3.0L V6",
    mileage: "42,500 km",
  },
  {
    image: convertimage2,
    name: "Toyota Camry 2008",
    category: "Economy",
    grids: camry,
    price: 60000,
    priceLabel: "₦60,000 / day",
    transmission: "Automatic",
    seats: 5,
    description: 'A comfortable and practical sedan, offering a smooth ride and dependable performance for everyday journeys.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "2.4L 4-Cylinder",
    mileage: "128,000 km"

  },
  {
    image: convertimage3,
    name: "Toyota Hilux 2009",
    grids: hilux,
    category: "Economy",
    price: 75000,
    priceLabel: "₦75,000 / day",
    transmission: "Automatic",
    seats: 5,
    description: 'A rugged and capable pickup built for versatility, making it a dependable choice for both city driving and demanding trips.',
    fuel: "Diesel",
    doors: 4,
    buttonText: "Book Now",
    engine: "3.0L 4-Cylinder Diesel",
    mileage: "145,000 km",

  },
  {
    image: convertimage4,
    grids: bmwsedan,
    name: "BMW x4 2012",
    category: "Luxury",
    price: 80000,
    priceLabel: "₦80,000 / day",
    transmission: "Automatic",
    seats: 5,
    description: 'A refined luxury sedan with a comfortable interior, responsive handling, and the distinctive driving experience BMW is known for.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "2.0L 4-Cylinder",
    mileage: "105,000 km",
  },
  {
    image: convertimage5,
    grids: c43,
    name: "Mercedes C43 AMG 2015",
    category: "Economy",
    price: 130000,
    priceLabel: "₦130,000 / day",
    transmission: "Automatic",
    seats: 5,
    description: 'A sporty luxury sedan that delivers strong performance, elegant styling, and a comfortable premium interior.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "3.0L V6",
    mileage: "78,000 km",
  },
  {
    image: convertimage6,
    grids: c43,
    name: "Mercedes C43 2012",
    category: "Luxury",
    price: 95000,
    priceLabel: "₦95,000 / day",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    description: 'A stylish executive sedan offering a balance of comfort, performance, and premium Mercedes-Benz refinement.',
    doors: 4,
    buttonText: "Book Now",
    engine: "3.5L V6",
    mileage: "96,000 km",
  },
  {
    image: convertimage7,
    grids: maybach,
    name: "Mercedes-Maybach 2019",
    category: "Luxury",
    price: 250000,
    priceLabel: "₦250,000 / day",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    description: 'A premium luxury vehicle designed for an exceptional experience, with sophisticated styling, spacious comfort, and refined performance.',
    doors: 4,
    buttonText: "Book Now",
    engine: "4.0L V8",
    mileage: "38,000 km",
  },
  {
    image: convertimage8,
    grids: bmwx6,
    name: "BMW X6 2018",
    category: "SUV",
    price: 180000,
    priceLabel: "₦180,000 / day",
    transmission: "Automatic",
    seats: 5,
    description: 'A bold luxury SUV combining the presence of an SUV with sporty performance, premium comfort, and distinctive coupe-inspired styling.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "3.0L 6-Cylinder",
    mileage: "61,500 km",

  },
  {
    image: convertimage9,
    grids: gle_43_2017,
    name: "Mercedes GLE 43 2017",
    category: "SUV",
    price: 150000,
    priceLabel: "₦150,000 / day",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    description: 'A versatile performance SUV offering a refined cabin, confident road presence, and an engaging driving experience.',
    doors: 4,
    buttonText: "Book Now",
    engine: "3.0L 6-Cylinder",
    mileage: "61,500 km",


  },
  {
    image: convertimage10,
    grids: gle2022,
    name: "Mercedes GLE 53 Coupe 2021",
    category: "SUV",
    price: 200000,
    priceLabel: "₦200,000 / day",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    description: 'A high-performance luxury SUV coupe combining aggressive styling, powerful performance, premium comfort, and modern technology.',
    doors: 4,
    buttonText: "Book Now",
    engine: "3.0L Inline-6",
    mileage: "31,500 km",
  },

  {
    image: convertimage11,
    grids: glc_2022,
    name: "Mercedes GLC 2018",
    category: "Luxury",
    price: 140000,
    priceLabel: "₦140,000 / day",
    transmission: "Automatic",
    seats: 5,
    description: 'A compact luxury SUV that delivers a comfortable ride, modern styling, and a refined interior for everyday travel.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "2.0L 4-Cylinder",
    mileage: "58,500 km",
  },
  {
    image: convertimage14,
    grids: toyatoh1,
    name: "Toyota Highlander 2018",
    category: "SUV",
    price: 120000,
    priceLabel: "₦120,000 / day",
    transmission: "Automatic",
    seats: 7,
    description: 'A spacious family SUV offering comfortable seating, a smooth ride, and plenty of room for passengers and longer journeys.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "3.5L V6",
    mileage: "72,000 km",
  },
  {
    image: convertimage12,
    grids: toyatoh2,
    name: "Toyota Highlander 2015",
    category: "SUV",
    price: 100000,
    priceLabel: "₦100,000 / day",
    transmission: "Automatic",
    seats: 7,
    description: 'A practical and comfortable SUV with generous interior space, reliable performance, and a smooth driving experience.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    ngine: "3.5L V6",
    mileage: "98,000 km",
  },
  {
    image: convertimage13,
    grids: toyatoh1,
    name: "Toyota Highlander 2019",
    category: "SUV",
    price: 130000,
    priceLabel: "₦130,000 / day",
    transmission: "Automatic",
    seats: 7,
    description: 'A refined family SUV designed for comfortable journeys, combining spacious seating, practicality, and dependable performance.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "3.5L V6",
    mileage: "55,000 km",
  },
  {
    image: convertimage15,
    name: "Honda Baby Boy 2014",
    category: "Economy",
    price: 65000,
    priceLabel: "₦65,000 / day",
    transmission: "Automatic",
    seats: 5,
    description: 'A compact and practical vehicle suited for comfortable everyday driving, with easy handling and an efficient design.',
    fuel: "Petrol",
    doors: 4,
    buttonText: "Book Now",
    engine: "1.8L 4-Cylinder",
    mileage: "112,000 km",

  },

];

// 