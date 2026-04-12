
-- Create storage bucket for resource files (PDFs, etc.)
INSERT INTO storage.buckets (id, name, public)
VALUES ('resources-files', 'resources-files', true);

-- Allow public read access
CREATE POLICY "Public can view resource files"
ON storage.objects FOR SELECT
USING (bucket_id = 'resources-files');

-- Allow public upload (admin panel uses local auth)
CREATE POLICY "Public can upload resource files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'resources-files');

-- Allow public update
CREATE POLICY "Public can update resource files"
ON storage.objects FOR UPDATE
USING (bucket_id = 'resources-files');

-- Allow public delete
CREATE POLICY "Public can delete resource files"
ON storage.objects FOR DELETE
USING (bucket_id = 'resources-files');
