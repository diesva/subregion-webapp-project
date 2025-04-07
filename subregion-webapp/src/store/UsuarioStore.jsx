import { create } from "zustand";
import { InsertarUsuarios } from "../supabase/crudUsuarios";
import { supabase } from "../supabase/supabase.config";

export const useUsuariosStore = create((set, get) => ({
  insertarUsuarioAdmin: async (p) => {
    const { data, error } = await supabase.auth.signUp({
      email: p.correo,
      password: p.pass,
    });
    console.log("data del registro del usuario: ", data);
    if (error) return;
    const datauser = await InsertarUsuarios({idauth: data.user.id, fecharegistro:new Date(), tipouser:"admin",});
    return datauser;
  },
}));
