import {createClient} from "@supabase/supabase-js"
export const supabase =  (
    import.meta.env.vi.VITE_APP_SUPABASE_URL,
    import.meta.env.vi.VITE_APP_SUPABASE_ANON_KEY
)