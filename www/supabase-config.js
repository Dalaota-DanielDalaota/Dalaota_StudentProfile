const SUPABASE_URL = "https://mlnxenfvczdfbxnodvhe.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_6OnaPH86c11ivMfkUVRBTQ_syxWME6E";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);