export const membershipPlans = [
  {
    id: "plan-monthly",
    name: "Monthly",
    duration_months: 1,
    price: 1999,
    features: [
      "Unlimited gym access",
      "Strength and cardio zones",
      "Locker facility",
      "Free fitness assessment",
    ],
    is_popular: false,
    created_at: "2026-03-01T08:00:00.000Z",
  },
  {
    id: "plan-quarterly",
    name: "3 Months",
    duration_months: 3,
    price: 4999,
    features: [
      "Everything in Monthly",
      "Personalized workout guidance",
      "Diet consultation",
      "Body composition tracking",
    ],
    is_popular: true,
    created_at: "2026-03-02T08:00:00.000Z",
  },
  {
    id: "plan-half-yearly",
    name: "6 Months",
    duration_months: 6,
    price: 8999,
    features: [
      "Everything in 3 Months",
      "Priority trainer support",
      "Monthly progress review",
      "Access to special workshops",
    ],
    is_popular: false,
    created_at: "2026-03-03T08:00:00.000Z",
  },
  {
    id: "plan-yearly",
    name: "12 Months",
    duration_months: 12,
    price: 15999,
    features: [
      "Everything in 6 Months",
      "Best value annual pricing",
      "Transformation planning",
      "Exclusive member benefits",
    ],
    is_popular: false,
    created_at: "2026-03-04T08:00:00.000Z",
  },
];

export const trainers = [
  {
    id: "trainer-rohit",
    name: "Rohit Sharma",
    specialty: "Strength Training",
    experience_years: 8,
    image_url: "https://images.unsplash.com/photo-1696563996353-214a3690bb11",
    bio: "Helps members build strength safely with structured plans focused on long-term results.",
    created_at: "2026-03-01T10:00:00.000Z",
  },
  {
    id: "trainer-priya",
    name: "Priya Mehta",
    specialty: "Weight Loss & Cardio",
    experience_years: 6,
    image_url: "https://images.unsplash.com/photo-1605822218374-7222c044e434",
    bio: "Specializes in fat-loss routines, motivation coaching, and sustainable lifestyle habits.",
    created_at: "2026-03-02T10:00:00.000Z",
  },
  {
    id: "trainer-aman",
    name: "Aman Verma",
    specialty: "Functional Fitness",
    experience_years: 5,
    image_url:
      "https://images.pexels.com/photos/6550838/pexels-photo-6550838.jpeg",
    bio: "Designs athletic, mobility-focused training plans that improve performance in daily life.",
    created_at: "2026-03-03T10:00:00.000Z",
  },
  {
    id: "trainer-neha",
    name: "Neha Patil",
    specialty: "Nutrition & Toning",
    experience_years: 7,
    image_url:
      "https://images.pexels.com/photos/8436582/pexels-photo-8436582.jpeg",
    bio: "Combines gym programming with practical nutrition advice to support balanced transformations.",
    created_at: "2026-03-04T10:00:00.000Z",
  },
];

export const memberReviews = [
  {
    id: "review-1",
    member_name: "Akash N.",
    rating: 5,
    review_text:
      "Clean gym, helpful trainers, and a very motivating environment. I saw real progress in just a few months.",
    image_url:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    is_approved: true,
    created_at: "2026-03-10T08:00:00.000Z",
  },
  {
    id: "review-2",
    member_name: "Sneha P.",
    rating: 5,
    review_text:
      "The trainers are attentive and the workout plans are easy to follow. Great place for beginners and regulars.",
    image_url:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    is_approved: true,
    created_at: "2026-03-12T08:00:00.000Z",
  },
  {
    id: "review-3",
    member_name: "Rahul K.",
    rating: 4,
    review_text:
      "Good equipment and strong community feeling. The quarterly plan was worth it for me.",
    image_url:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    is_approved: true,
    created_at: "2026-03-14T08:00:00.000Z",
  },
];

export const galleryImages = [
  {
    id: "gallery-1",
    title: "Strength Zone",
    image_url:
      "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg",
    category: "facility",
    created_at: "2026-03-16T08:00:00.000Z",
  },
  {
    id: "gallery-2",
    title: "Cardio Section",
    image_url:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    category: "facility",
    created_at: "2026-03-15T08:00:00.000Z",
  },
  {
    id: "gallery-3",
    title: "Member Transformation",
    image_url:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    category: "transformation",
    created_at: "2026-03-14T08:00:00.000Z",
  },
  {
    id: "gallery-4",
    title: "Weekend Bootcamp",
    image_url:
      "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
    category: "event",
    created_at: "2026-03-13T08:00:00.000Z",
  },
  {
    id: "gallery-5",
    title: "Functional Training Floor",
    image_url:
      "https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg",
    category: "facility",
    created_at: "2026-03-12T08:00:00.000Z",
  },
  {
    id: "gallery-6",
    title: "Transformation Story",
    image_url:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    category: "transformation",
    created_at: "2026-03-11T08:00:00.000Z",
  },
];
