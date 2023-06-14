import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://anyfrhmfxqicdhttxkij.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFueWZyaG1meHFpY2RodHR4a2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjYzNDY3NywiZXhwIjoyMDAyMjEwNjc3fQ.xKmXdHqvIow96RjRvzX1ckYTeVZbjeVPfxkEBtE-8sM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log('Supabase Instance: ', supabase)
