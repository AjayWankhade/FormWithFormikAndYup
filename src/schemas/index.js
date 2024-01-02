import * as  Yup from 'yup';

export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(20).required("Please enter name..."),
    email:Yup.string().email().required("Please enter email..."),
    password:Yup.string().required("Please enter password..."),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null,"password must same..."])

})
