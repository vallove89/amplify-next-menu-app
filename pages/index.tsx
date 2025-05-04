import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

export default function App() {
    
  const { signOut } = useAuthenticator();
  

  return (
    <main>
      <h1>Home</h1>

      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
