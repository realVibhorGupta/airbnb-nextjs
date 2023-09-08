import prisma from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt'; 
import NextAuth from "next-auth/next";

export const authOptions  = {
    adapter : PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            client: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            client: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialProvider({
            name:'credentials',
            credentials : {
                email : {label : 'email' , type : 'text'},
                password : {label : 'password' , type : 'password'},
            },
            async authorize(credentials){
                // You can add more errors / exceptions depending on your need
                if(!credentials?.email ||  !credentials.password){
                    throw new Error('IInvalid credentials');
                }

                const user  = await prisma.user.findUnique({
                    where : {
                        email : credentials.email
                    }
                });
                if(!user || !user?.hashedPassword){
                    throw new Error('Invalid credentials');
                }
                const isCorrectPassword = await  bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if(!isCorrectPassword){
                    throw new Error('Invalid credentials');
                }
                return user;
            }
        })
    ],
    pages:{
        signIn : '/',

    },
    debug : process.env.NODE_ENV ==='development',
    session : {
        strategy : 'jwt',
    },
    secret : process.env.NEXTAUTH_SECRET
};
export default NextAuth