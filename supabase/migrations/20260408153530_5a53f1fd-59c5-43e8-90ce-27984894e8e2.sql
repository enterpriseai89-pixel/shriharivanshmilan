
-- Add public INSERT/UPDATE/DELETE policies for katha_bookings
CREATE POLICY "Public can insert katha bookings"
ON public.katha_bookings FOR INSERT TO public
WITH CHECK (true);

CREATE POLICY "Public can update katha bookings"
ON public.katha_bookings FOR UPDATE TO public
USING (true);

CREATE POLICY "Public can delete katha bookings"
ON public.katha_bookings FOR DELETE TO public
USING (true);

-- Add public INSERT/UPDATE/DELETE policies for resources
CREATE POLICY "Public can insert resources"
ON public.resources FOR INSERT TO public
WITH CHECK (true);

CREATE POLICY "Public can update resources"
ON public.resources FOR UPDATE TO public
USING (true);

CREATE POLICY "Public can delete resources"
ON public.resources FOR DELETE TO public
USING (true);

-- Add public INSERT/UPDATE/DELETE policies for schedules
CREATE POLICY "Public can insert schedules"
ON public.schedules FOR INSERT TO public
WITH CHECK (true);

CREATE POLICY "Public can update schedules"
ON public.schedules FOR UPDATE TO public
USING (true);

CREATE POLICY "Public can delete schedules"
ON public.schedules FOR DELETE TO public
USING (true);
