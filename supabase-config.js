import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://mcuzinqwgzmouoexwgjl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jdXppbnF3Z3ptb3VvZXh3Z2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3ODEzMTIsImV4cCI6MjA5MjM1NzMxMn0.8us2yp9aqXKY4302SDT6wlJM9aS2hf6zjMV4qf0EGes";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
