import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mavhhlqscacgzcrkscna.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdmhobHFzY2FjZ3pjcmtzY25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyOTQzMTgsImV4cCI6MjAwMTg3MDMxOH0.PatK-FOaizxDcPpAzwXgxUE_rV4Qm43xuWbPHr6j_Ng";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
