import { create } from "zustand";
import { supabase } from "../supabase/supabase.config"; 
export const useAuthStore= create((set,get)=>({
    signInWithEmail:async(p)=> {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: p.correo,
          password: p.pass,
        })
        if(error){
            return null;
        }
        return data;
      },
      signOut:async()=>{
        const { error } = await supabase.auth.signOut()
        if (error)
            throw new Error("Ocurrió un error en le proceso de cierrde sesión - Si persiste, por favor contactar al administrador. Error: "+ error)
      }

}))