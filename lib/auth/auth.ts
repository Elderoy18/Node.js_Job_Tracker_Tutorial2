import dns from "dns";

if (process.env.NODE_ENV !== "production") {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
}

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true
    },
});

export async function getSession(){
    const result = await auth.api.getSession({
        headers: await headers()
    });

    return result;
}

// You're importing a module that depends on "next/headers". This API is only available in Server Components in the App Router, but you are using it in the Pages Router.
export async function signOut(){
    const result = await auth.api.signOut({
        headers: await headers()
    });
    
    if (result.success){
        redirect("/sign-in");
    }
}