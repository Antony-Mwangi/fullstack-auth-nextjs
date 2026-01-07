// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";

// const handler = NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connectDB();

//         const user = await User.findOne({ email: credentials.email });
//         if (!user) {
//           throw new Error("No user found");
//         }

//         const isValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );

//         if (!isValid) {
//           throw new Error("Invalid password");
//         }

//         return {
//           id: user._id,
//           email: user.email,
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.id = user.id;
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };


import NextAuth from "next-auth";
import { authOptions } from "@/lib/nextAuthOptions";

// Expose GET and POST for NextAuth
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
