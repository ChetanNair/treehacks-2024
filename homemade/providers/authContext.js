import { createContext, useState, useEffect } from "react";
import { supabase } from "../initSupabase";

export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
    };
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user, session }}>
      {props.children}
    </AuthContext.Provider>
  );
};
