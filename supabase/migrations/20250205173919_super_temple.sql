/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)
      - `status` (text, default: 'pending')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated admin to read all submissions
    - Add policy for anyone to create submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can create submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);