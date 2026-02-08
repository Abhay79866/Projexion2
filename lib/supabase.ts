
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nhnligkxhiumszqkbmeb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obmxpZ2t4aGl1bXN6cWtibWViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0ODExOTQsImV4cCI6MjA4NjA1NzE5NH0.4CcQnEW2eDaU-NNUEqk9l6FSReSKrOGs505R6xdQPJ0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
