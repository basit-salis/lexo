import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/libs/mongodb";
import User from "@/models/User";

interface IUser {
  email: String;
  name: String;
  password: String;
  role: String;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        userId: { label: "User ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { userId, password } = credentials as {
          userId: string;
          password: string;
        };
        console.log(userId, password);
        let client = await clientPromise;
        let db = client.db("lexo");
        const user: any = await db.collection("users").findOne({
          username: "bassit",
          email: "user@gmailcom",
        });

        if (!user) {
          // return  new NextResponse("Error", {status:401});`
          throw new Error("invalid user credentials");
        }
        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) return true;
      else return false;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        // token.id = profile.id
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      user: any;
      token: any;
    }) {
      // session!.user.accessToken = token.accessToken;
      // session!.user.id = token.id;
      return { ...session, token };
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/",
    newUser: "/auth/signUp",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
