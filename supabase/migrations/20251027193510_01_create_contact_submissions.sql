/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `project_type` (text, required)
      - `brief_goal` (text, required)
      - `created_at` (timestamptz, default now())
      - `ip_address` (text, optional for rate limiting)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public insert access (form submissions)
    - Add policy for authenticated admin read access

  3. Important Notes
    - Public can insert (submit forms) but not read
    - Only authenticated users can read submissions
    - Rate limiting should be handled client-side and via IP tracking
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  brief_goal text NOT NULL,
  ip_address text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);