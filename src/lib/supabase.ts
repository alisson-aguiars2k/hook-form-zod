import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tuxjmiiazdbtwwheqmfc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1eGptaWlhemRidHd3aGVxbWZjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjA4MTEwNiwiZXhwIjoxOTk3NjU3MTA2fQ.9QUuUY8j7PI00Anx2DJk63p58mLkv4nPfIhJIKRYBwk"
);