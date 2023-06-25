import prisma from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST' && req.method !== 'DELETE') {
        return res.status(405).end();
    }
    try {
        if (req.method === 'POST') {
            const { userId } = req.body;
            const allUsers = await prisma.user.findMany({});

            const { currentUser } = await serverAuth(req, res);

            if (!userId || typeof userId !== 'string') {
                throw new Error('Invalid id');
            }

            const user = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            if (!user) {
                throw new Error('Invalid id');
            }

            let updatedFollowingIds = [...(currentUser?.followingIds || [])];
            updatedFollowingIds.push(user.id);


            // Notifications part start here

            try {
                const user = await prisma.user.findUnique({
                    where: {
                        id: userId,
                    }
                });
                if (user?.id) {
                    await prisma.notification.create({
                        data: {
                            body: `${currentUser.username} Started Following You!`,
                            userId: user.id
                        }
                    });

                    await prisma.user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            hasNotification: true
                        }
                    });
                }

            } catch (error) {
                console.log(error)
                return res.status(400).end();
            }

            const updateUser = await prisma.user.update({
                where: {
                    id: currentUser?.id,
                },
                data: {
                    followingIds: updatedFollowingIds,
                },
            });

            let followersCount = 0;

            allUsers.map((user) => {
                if (user.followingIds.includes(userId)) {
                    followersCount = followersCount + 1;
                }
            });

            return res.status(200).json({ updateUser, followersCount });
        }

        if (req.method === 'DELETE') {
            const { userId } = req.query;
            const allUsers = await prisma.user.findMany({});

            const { currentUser } = await serverAuth(req, res);

            if (!userId || typeof userId !== 'string') {
                throw new Error('Invalid id');
            }


const user = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            if (!user) {
                throw new Error('Invalid id');
            }

            let updatedFollowingIds = [...(currentUser?.followingIds || [])];
            updatedFollowingIds = updatedFollowingIds.filter(
                (followingId) => followingId !== userId
            );

            const updateUser = await prisma.user.update({
                where: {
                    id: currentUser?.id,
                },
                data: {
                    followingIds: updatedFollowingIds,
                },
            });

            let followersCount = 0;

            allUsers.map((user) => {
                if (user.followingIds.includes(userId)) {
                    followersCount = followersCount + 1;
                }
            });

            return res.status(200).json({ updateUser, followersCount });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}
