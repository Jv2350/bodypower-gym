/*
  # Body Power Gym Database Schema

  ## Overview
  Creates tables for managing gym operations including trainers, membership plans, 
  contact inquiries, member reviews, and gallery images.

  ## New Tables
  
  ### `trainers`
  - `id` (uuid, primary key) - Unique trainer identifier
  - `name` (text) - Trainer's full name
  - `specialty` (text) - Training specialization (e.g., "Weight Training", "Cardio")
  - `experience_years` (integer) - Years of experience
  - `image_url` (text) - Profile photo URL
  - `bio` (text) - Trainer biography
  - `created_at` (timestamptz) - Record creation timestamp

  ### `membership_plans`
  - `id` (uuid, primary key) - Unique plan identifier
  - `name` (text) - Plan name (e.g., "Monthly", "3 Months")
  - `duration_months` (integer) - Duration in months
  - `price` (decimal) - Plan price
  - `features` (jsonb) - Array of plan features
  - `is_popular` (boolean) - Mark popular plans
  - `created_at` (timestamptz) - Record creation timestamp

  ### `contact_inquiries`
  - `id` (uuid, primary key) - Unique inquiry identifier
  - `name` (text) - Inquirer's name
  - `email` (text) - Contact email
  - `phone` (text) - Phone number
  - `message` (text) - Inquiry message
  - `status` (text) - Status (pending/contacted/resolved)
  - `created_at` (timestamptz) - Submission timestamp

  ### `member_reviews`
  - `id` (uuid, primary key) - Unique review identifier
  - `member_name` (text) - Reviewer's name
  - `rating` (integer) - Rating (1-5)
  - `review_text` (text) - Review content
  - `image_url` (text) - Optional member photo
  - `is_approved` (boolean) - Approval status
  - `created_at` (timestamptz) - Review submission timestamp

  ### `gallery_images`
  - `id` (uuid, primary key) - Unique image identifier
  - `title` (text) - Image title
  - `image_url` (text) - Image URL
  - `category` (text) - Category (facility/transformation/event)
  - `created_at` (timestamptz) - Upload timestamp

  ### `membership_applications`
  - `id` (uuid, primary key) - Unique application identifier
  - `full_name` (text) - Applicant's full name
  - `email` (text) - Email address
  - `phone` (text) - Phone number
  - `plan_id` (uuid) - Selected membership plan
  - `status` (text) - Application status
  - `created_at` (timestamptz) - Application timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for trainers, plans, reviews (approved), and gallery
  - Authenticated write access for contact inquiries and membership applications
*/

-- Create trainers table
CREATE TABLE IF NOT EXISTS trainers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  specialty text NOT NULL,
  experience_years integer DEFAULT 0,
  image_url text,
  bio text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trainers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view trainers"
  ON trainers FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create membership_plans table
CREATE TABLE IF NOT EXISTS membership_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  duration_months integer NOT NULL,
  price decimal(10,2) NOT NULL,
  features jsonb DEFAULT '[]'::jsonb,
  is_popular boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE membership_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view membership plans"
  ON membership_plans FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create member_reviews table
CREATE TABLE IF NOT EXISTS member_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  member_name text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  image_url text,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE member_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved reviews"
  ON member_reviews FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);

CREATE POLICY "Anyone can submit reviews"
  ON member_reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  category text DEFAULT 'facility',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery images"
  ON gallery_images FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create membership_applications table
CREATE TABLE IF NOT EXISTS membership_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  plan_id uuid REFERENCES membership_plans(id),
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit membership applications"
  ON membership_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);