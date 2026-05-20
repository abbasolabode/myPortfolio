import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://gtfutisjsjhqlovtwpdu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0ZnV0aXNqc2pocWxvdnR3cGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMDM2NzksImV4cCI6MjA5NDc3OTY3OX0.CjnKcQS2Np4enik8T86OfvugrKXUbPGj7eEMKiTjgSg"
const supabase = createClient(supabaseUrl, supabaseKey);

//Exporting supabase
export default supabase;