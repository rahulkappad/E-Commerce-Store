import { getCurrentSession, loginUser, registerUser } from '@/actions/auth'
import { redirect } from 'next/navigation';
import React, { use } from 'react';
import zod from 'zod';
import SignIn from '@/components/auth/SignIn';


const SignInSchema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(5),
})

const SignInPage = async() => {

    const{ user } = await getCurrentSession();  

    if (user) {
        return redirect("/");
    }

    const action = async(prevState:any,formData:FormData)=>{
        "use server";
        const parsed = SignInSchema.safeParse(Object.fromEntries(formData));
        if(!parsed.success){
            return{
        message: "Invalid Form Data",
              };
         }
         const {email,password}=parsed.data;
         const {user,error} = await loginUser(email,password);
         if(error){
            return{message:error};
         }else if(user){
            return redirect("/");
         }
    }

    return<SignIn action={action}/>
}

export default SignInPage
