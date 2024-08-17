import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { authConfig } from "./auth.config";
import { db } from "./utils/db";
import { getUserByIdForJWT } from "./actions/user";
import { AdminType, Mentor, MentorType, Role } from "@local/database";

declare module "next-auth" {
  // Extend session to hold the extra user data
  interface Session {
    user: {
      id: string;
      realId: string;
      email: string;
      role: Role;
      image: string;
      name: string;
      subRole: MentorType | AdminType | null;
    } & DefaultSession["user"];
  }

  // Extend JWT to hold the extra user data
  interface JWT {
    id: string;
    realId: string;
    email: string;
    role: Role;
    subRole: MentorType | AdminType | null;
    image: string;
    name: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;
      const info = await getUserByIdForJWT(token.sub);
      if (!info) return token;
      token.id = info.id;
      token.email = info.email;
      token.role = info.role;
      token.subRole = info.subRole;
      token.image = info.image;
      token.name = info.name;
      token.realId = info.realId;
      return token;
    },
    async session({ session, token, user }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.email && session.user) {
        session.user.email = token.email;
      }
      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }
      if (token.image && session.user) {
        session.user.image = token.image as string;
      }
      if (token.name && session.user) {
        session.user.name = token.name;
      }
      if (token.subRole && session.user) {
        session.user.subRole = token.subRole as MentorType | AdminType | null;
      }
      if (token.realId && session.user) {
        session.user.realId = token.realId as string;
      }

      console.log("Session:", session);
      console.log("Token:", token);
      return session;
    },
  },
});
