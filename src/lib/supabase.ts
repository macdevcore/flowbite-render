import { createClient } from '@supabase/supabase-js';

export const userId = '74469a5bd-e480-483f-bdec-0563ff6267c9';
const supabaseUrl = 'https://mhzckigyfxwlxlpunqez.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oemNraWd5Znh3bHhscHVucWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NzMyNjcsImV4cCI6MjAwMjM0OTI2N30.MEWYY5XSrYFY8iUd9p_ybUlZ5IVAD95Y4Std-LYH-iM';
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	global: { fetch: fetch.bind(globalThis) }
});
