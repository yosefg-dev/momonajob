import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import userController from "../../../controllers/userController"
import GoogleProvider from "next-auth/providers/google"
//import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  secret: 'N@ss3!c63@1',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    /* GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),    //add external providor like google and github  */
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: ".." },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          //getorcreate one
          const user = await userController.getone(credentials.email,credentials.password)
          if (user) {
            return user
          } else {
            //create a user with input and return user and infrom 
            throw new Error('you need to register')
          }
        } catch (error) {
          console.log(error)
        }
       
      }
    })
  ],
}
export default NextAuth(authOptions)