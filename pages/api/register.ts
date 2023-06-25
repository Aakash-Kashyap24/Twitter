import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        const { email, username, name, password } = req.body;

        const isUser=await prisma.user.findUnique({
            where:{
                email
            }
        })

        if (isUser) {
            throw new Error('Already Registerd')
        }
        const hashedPassword = await bcrypt.hash(password, 12);
console.log('email',email)
        const user = await prisma.user.create({
            data: {
                email:email,
                username:username,
                name:name,
                hashedPassword:hashedPassword,
            }
        });

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}