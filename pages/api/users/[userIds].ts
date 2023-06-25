import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const { userIds } = req.query;
        if (!userIds||typeof userIds !=='string') {
            throw new Error('Invalid Id')
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userIds // Ensure the `userIds` is of string type
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const followersCount=await prisma.user.count({
            where:{
                followingIds:{
                    has:userIds
                }
            }
        })
        return res.status(200).json({ user,followersCount });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}



