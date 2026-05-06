export const DESTINATIONS = [
  {
    name: 'The Maldives',
    slug: 'the-maldives',
    location: 'Indian Ocean',
    price: '₹1,99,999',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200',
    duration: '7 Days',
    type: 'international',
    inclusions: [
      { text: "Overwater Villa Stay", icon: "Hotel" },
      { text: "All-Inclusive Meals", icon: "Utensils" },
      { text: "Speedboat Transfers", icon: "CarTaxiFront" },
      { text: "Snorkeling Equipment", icon: "Ticket" }
    ],
    exclusions: [
      { text: "International Flights", icon: "Plane" },
      { text: "Premium Drinks", icon: "Utensils" },
      { text: "Spa Treatments", icon: "BadgeCheck" }
    ]
  },
  {
    name: 'Dubai, UAE',
    slug: 'dubai-uae',
    location: 'Middle East',
    price: '₹35,000',
    rating: 4.9,
    image: '/images/1_Destinations/International/Dubai/cover/dubai-cover.jpeg',
    duration: '5 Days / 4 Nights',
    type: 'international',
    accommodationDetails: [
      {
        city: 'Dubai',
        country: 'UAE',
        name: 'Admiral Plaza Bur Dubai',
        roomType: 'Standard Room',
        nights: 4,
        meals: 'Daily Breakfast',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
        googleMapsUrl: 'https://maps.app.goo.gl/AdmiralPlaza',
        similarAvailable: true
      }
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Cruise Dinner', content: 'Welcome to your dream destination! Transfer to hotel and evening Dinner at Cruise.' },
      { day: 2, title: 'Dubai Tour & Burj Khalifa', content: 'Experience the best of Dubai with a guided city tour and discover modern marvels, cultural landmarks and visit to the iconic Burj Khalifa skyline views all in one unforgettable journey.' },
      { day: 3, title: 'Desert Safari - Dune Bashing & Dinner', content: 'Golden dunes at sunset, thrilling dune bashing in a 4x4, followed by a magical desert camp dinner under the stars, BBQ feast, traditional performances, warm Arabian night ambiance ✨' },
      { day: 4, title: 'Leisure Day to Explore', content: 'Relaxed day at your own pace, explore hidden gems, café hopping, local markets, scenic views, and spontaneous adventures ✨' },
      { day: 5, title: 'Departure Transfers to Airport', content: 'Smooth hotel-to-airport transfer, hassle-free departure, comfortable ride, timely pickup, stress-free end to your journey' }
    ],
    inclusions: [
      { text: "04 Nights Accommodation in Dubai", icon: "Hotel" },
      { text: "Daily Breakfast", icon: "Utensils" },
      { text: "Marina Dhow Cruise with Dinner", icon: "Ticket" },
      { text: "Desert Safari with BBQ Dinner", icon: "Ticket" },
      { text: "Half-day Dubai City Tour", icon: "BadgeCheck" },
      { text: "Return Airport Transfers (PVT)", icon: "CarTaxiFront" }
    ],
    exclusions: [
      { text: "Flight Tickets", icon: "Plane" },
      { text: "UAE Visa Charges", icon: "BadgeCheck" },
      { text: "Tourism Dirham Fee", icon: "Wallet" },
      { text: "Any Tips or Gratuities", icon: "Wallet" },
      { text: "Items of personal nature", icon: "Wallet" }
    ]
  },
  {
    name: 'Bali, Indonesia',
    slug: 'bali-indonesia',
    location: 'Southeast Asia',
    price: '₹32,000',
    rating: 4.8,
    image: '/images/1_Destinations/International/Bali/cover/bali-cover.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1573790387438-4da905839391?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=1200'
    ],
    duration: '5 Days / 4 Nights',
    type: 'international',
    accommodationDetails: [
      {
        city: 'Ubud',
        country: 'Indonesia',
        name: 'Alankara Villa & Spa Ubud',
        roomType: 'One Bedroom Pool Villa',
        nights: 2,
        meals: 'Daily Breakfast',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800',
        googleMapsUrl: 'https://maps.app.goo.gl/AlankaraVilla',
        similarAvailable: true
      },
      {
        city: 'Kuta/Legian',
        country: 'Indonesia',
        name: 'Bliss Surfer Hotel',
        roomType: 'Deluxe Room',
        nights: 2,
        meals: 'Daily Breakfast',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800',
        googleMapsUrl: 'https://maps.app.goo.gl/BlissSurfer',
        similarAvailable: true
      }
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Leisure', content: 'Arrive at your destination and enjoy a relaxed day at leisure—unwind, explore nearby surroundings, or indulge in hotel amenities at your own pace.' },
      { day: 2, title: 'Mount Batur View & ATV Ride', content: 'Experience breathtaking views of Mount Batur followed by an exciting 90-minute ATV ride through rugged trails and scenic landscapes.' },
      { day: 3, title: 'Nusa Penida West Tour', content: 'Discover the stunning west side of Nusa Penida—visit iconic cliffs, crystal-clear waters, and breathtaking viewpoints on this unforgettable island tour.' },
      { day: 4, title: 'Bedugul Tour with Handara Gate', content: 'Explore the scenic highlands of Bali with a Bedugul tour—visit serene temples, lush landscapes, and capture iconic photos at the famous Handara Gate' },
      { day: 5, title: 'Departure Transfers to Airport', content: 'Smooth hotel-to-airport transfer, hassle-free departure, comfortable ride, timely pickup, stress-free end to your journey ✨' }
    ],
    inclusions: [
      { text: "02 Nights Stay in Ubud", icon: "Hotel" },
      { text: "02 Nights Stay in Kuta/Seminyak", icon: "Hotel" },
      { text: "Daily Breakfast at Hotel", icon: "Utensils" },
      { text: "Bali Swings (Instagrammable Tour)", icon: "Ticket" },
      { text: "Private Airport Transfers", icon: "CarTaxiFront" },
      { text: "Professional English Speaking Guide", icon: "BadgeCheck" }
    ],
    exclusions: [
      { text: "International Flight Tickets", icon: "Plane" },
      { text: "Bali Visa on Arrival", icon: "BadgeCheck" },
      { text: "Lunch and Dinner", icon: "Utensils" },
      { text: "Personal Expenses", icon: "Wallet" },
      { text: "Travel Insurance", icon: "ShieldX" }
    ]
  },
  {
    name: 'Thailand',
    slug: 'thailand',
    location: 'Southeast Asia',
    price: '₹69,999',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1200',
    duration: '6 Days',
    type: 'international',
    inclusions: [
      { text: "Bangkok & Pattaya Hotels", icon: "Hotel" },
      { text: "Coral Island Tour", icon: "Ticket" },
      { text: "Safari World & Marine Park", icon: "Ticket" },
      { text: "Daily Breakfast", icon: "Utensils" }
    ],
    exclusions: [
      { text: "Thailand Visa", icon: "BadgeCheck" },
      { text: "Flight Tickets", icon: "Plane" }
    ]
  },
  {
    name: 'Vietnam',
    slug: 'vietnam',
    location: 'Southeast Asia',
    price: '₹84,999',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200',
    duration: '8 Days',
    type: 'international'
  },
  {
    name: 'Singapore & Malaysia',
    slug: 'singapore-malaysia',
    location: 'Southeast Asia',
    price: '₹1,24,999',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=1200',
    duration: '7 Days',
    type: 'international'
  }
];

export const DOMESTIC_DESTINATIONS = [
  {
    name: 'Kashmir',
    slug: 'kashmir',
    location: 'Paradise on Earth',
    price: '₹45,999',
    duration: '6 Days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic',
    inclusions: [
      { text: "Houseboat Stay in Srinagar", icon: "Hotel" },
      { text: "Shikara Ride on Dal Lake", icon: "Ticket" },
      { text: "Pahalgam & Gulmarg Tours", icon: "CarTaxiFront" },
      { text: "Daily Breakfast & Dinner", icon: "Utensils" }
    ],
    exclusions: [
      { text: "Gondola Ride Phase 2", icon: "Ticket" },
      { text: "Pony Rides", icon: "CarTaxiFront" }
    ]
  },
  {
    name: 'Himachal',
    slug: 'himachal',
    location: 'The Land of Gods',
    price: '₹34,999',
    duration: '5 Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  },
  {
    name: 'Kerala',
    slug: 'kerala',
    location: "God's Own Country",
    price: '₹39,999',
    duration: '6 Days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  },
  {
    name: 'Andaman',
    slug: 'andaman',
    location: 'Emerald Blue Isles',
    price: '₹54,999',
    duration: '5 Days',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589394815804-964ed9be2eb3?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  },
  {
    name: 'Goa',
    slug: 'goa',
    location: 'The Sunshine State',
    price: '₹24,999',
    duration: '4 Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  },
  {
    name: 'Rajasthan',
    slug: 'rajasthan',
    location: 'The Land of Kings',
    price: '₹42,999',
    duration: '6 Days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  },
  {
    name: 'Uttarakhand',
    slug: 'uttarakhand',
    location: 'Dev Bhoomi',
    price: '₹29,999',
    duration: '5 Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  },
  {
    name: 'Sikkim',
    slug: 'sikkim',
    location: 'The Hidden Gem',
    price: '₹49,999',
    duration: '7 Days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1620067086685-6d60c490807b?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  },
  {
    name: 'Meghalaya',
    slug: 'meghalaya',
    location: 'Abode of Clouds',
    price: '₹38,999',
    duration: '5 Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1540960309100-388960161494?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  },
  {
    name: 'Ladakh',
    slug: 'ladakh',
    location: 'The Cold Desert',
    price: '₹59,999',
    duration: '8 Days',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1594411130985-802521c72635?auto=format&fit=crop&q=80&w=1200',
    type: 'domestic'
  }
];

export const TRAVEL_STORIES = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD393tvbW42HSXXIeROCkttuc16G7CxuOBf0GFSNh9jTxUswGzjQokebjpAajTOgld-hzC1pCiPJskaH4wybj_XtCsyZVWlYFncB4UyE-llK0HAlgZVZlTBnZjq3Eu6je1rpdrQxHFUgDOwf2Uq7O3JD2XMkTMFWQYEqN5xEeQhmO2ihndQgSHv3QMNYmZC1C8jhF_2b4-DKNgq6dDlXXcNa2gsKNkDJETZ9m1mBuZPNJ8f7DPeB46zCMRd_xCNpNYjwcZ5bNHhYgI',
    likes: 342,
    comments: 56
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrSV4rYZRkDoRrGny1YmnCOmfBY-ofFpRPsNjW-xOJZKmJZGAB80skD08_tOZ9qiRoX8laYRVilmGbeiTB0K9h9-TYhzyijsBqvMIPY5C7bwoiaVcY6vIvnrdOX0gDLe3Ct2qCpCm8C5nyEjYNg7UmZV79-jTnMSUlczv0zxPEUuv_V9aJKZ-v7KlIqu08DkjdYMKbb9cet7tjIX9mGZ4W1HRpMcb75cVJnuSYG4g88OvNBL6TZ-pUgX0s9rbMk1OsqX1FXkcIv6s',
    likes: 512,
    comments: 89
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCybdrV_E_aGKweL9Y0o4b6xKoTGK6Ke7AEs-K5zMXi92FZtA6I0sz7DKPRh59TSpyOB3mlhq6lOxTmeTdgDJMgTSRPuF3GeUQTZO-EZ2YfJ0STMqIunMjjRkdSBQH5qObPeDEKgKsmNQ9UoAAF8D-zUIEkBDzxCxgDdA-pwo5eA4pdwO2Lymp4vq0r0sA1613uyOjq1Tx0y3AxAtMKl9egcko3jgJOYP4EOgf9p9esY3DRkZzanx-BNmpvg5nStkpEcc1b_Y7O2mY',
    likes: 218,
    comments: 24
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7CnoaTjKg-kgkgPwWCv7WDoee7jJr53y7BlS-wKq70lFfwXtdBKxVQgORKyOf0gx7-i2xgZuEPikkQpRP-c25h5RMIrHZF-wjzL6U7Yx7OBLjGroAwPrwx-X31rjrBr-IgJf0zLeUYM_9vx5F0TObi-LbAjdp6PkKly8c7bxkB7mQEkeZEzZabvLHXQHi2Ilsvo6d7FlcCYIrRs7KDUmdQ7vfgf2qYa9dfK8saRZaSrmGdtgqQ3rVu4VJsqym-x8EhZYkm711C7A',
    likes: 476,
    comments: 67
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJfKvpJrx_RD2LhMIdipCUHUvFY5Rc73zx1DYqseF9c1vrwNWn8-cxqXzGSeESU6SO-4pZM2cxAZ0cmHvM---UwNqxf758WRQpsLGj-AM-b5eRvb5mfzrHCfhvNDQ7bFdFGc5YJIjeoYLBcBAiY1TVPDaWw_Mk2uU85K-yxGU41AJI5FM9E7Gl5kB8sWovesClINCuv4ct5CVQmVU8karIal7cbMETRBzz9-XhCoF_-YTJLdD9dkJIT37R2tPx_35tK7-T2f8DRFc',
    likes: 389,
    comments: 42
  }
];

export const HERO_IMAGES = {
  main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1WNbJKc_7U0nhNgaIyQK2JXG6fWhZa2ZBjtHSi3otG1TJS62aewjUcxhZO9iBFNSt5cof7LAnKNDv1UtNbJCF9s8jwk2Y4SbPc_ji9Gxq8rjwRsUoMhM1MV5w2LyXxN6aP0nn2EfjqHxfFPTdxHxKhWlK47lKQKrf0YNxbrVi5YJ-nAeOxbNMGfsJT-hBYZ9DsVqufZzB9sPwJzE_vf7t5jPiEm-fMn483MAUHLzFS1n2V7xWra6Rk_Tc3MafWB8OfYF-g_WP-UI',
  service1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlF98PwBJpB-rNmLBsvEvVMF5ePGCHJ2tUhKrRghQLQHiMMHMZ2B2ztakoWjZlT86CVDqY961SwAzmMJfMCugkjnuL-LR-FdBvHQQ52Dz2lv4vKh31iom5kNkw-7epsYaW17ogS4u48g7BVKCH6mzIlw8LRwevO0bmhAmKj6ITARtYrwuwEP1C2FIENHrkJG5N_Wt13KBzMXsAciZ2Fy8MO2BgiwRG8SMf2nTifB2akoYh-jWXGTVdItgibX43_MQffQ4RTAUeaGQ',
  service2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkhLCHPGWNUXmqZw2_68YrQNL1Eg3-XQoKUQUPFMgDYsSFus6xEpZFlsfzDJZmQXaUvcFt7liqDzz2ln4CP8y_SQ4WTqntkqjp_xOz0npUczNmPahbdvBxglApvqBlqxk3nAWcMTwMNsh5RrASSRpPkrxwpx3LqvJrAH3gFfsxcwKpr2W5oAD20wglMROoXyBiOvmGmEepjwevD1zdiFC28tcLcgaRBJiS9DAixi1PbSiTs1uXea3hpEEDjcd0CTgb_bvpDQFEJ1o',
  service3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2-tzWAT7xKyIdvLiXNYbZ6sE1tvkLIEeOtIKsPvsxERpFQq1YAxiBRLUpAUAwJiqzj_sAaDcunOBhJ1fjxYHXTibrY5krsQTYKrlIFeLcVbYR-GJnSmmw3BXo0WpqaHjDO2TuKPMqXmpInXQtSu_sZcCugzE2yIxQHWl9w1MgEIm9ffF_zDNhZ5iElanGie9SBCOcexzd2cJAlVg3TAobekJXEOwRpBiHBAF9hBCxRx0lBQpNkNaQ8d9TNipeCobBlzXNQMbNs6Q',
  whyChooseUs1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzA2mGOdTHc2AxZWXoZNqILXQJYHqiwmF6J-1PB1JQZiTVMg3PZbolPNMF-Ci0kFCbXyTwVG3TwY57CCF_sXeAbVHDuYyTXJg8aMDxZs5i0q59sdJ5JkRy46SbB0o-lQ9Vu-lulGTuIGUrYy5VVlmMLKbGG7_k41NsEatdDN17vHCkWH2WyLblZQAADxCTD5DE8D0qsoG79BKxgVQ619ORq1anhkc9W25LB_h9sH15ErY5RCEcztAH3CEYZkOSG-XlHmfFEYnQlgs',
  whyChooseUs2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbVMb2PjhfTj4626ovstFnKuPt7_ameuPd9NFf1OqJD4I92bfE6Fq1Yclji5IvdCbGsih2IxEfLElzmeGMhqg0EBpPdyww0JRTWQrdN-kPg7GnWRN13y3wQ9rxC95gdaE9mqWaNotwd4EI-HeArmb3-_pNiV7T6xqjTQ9O5NhKXKYzEeQyJQLq4pX1H0KX4zYSoNm0X971LWn0Kdw72bzpAxpMvIAaUFyiiYzoTqcIjwPbvLV70ztPAaWlMmXBsyFddwO6dbWXzBA'
};
