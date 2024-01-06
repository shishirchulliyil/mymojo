import { prisma } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();

  if (user) {
    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id as string,
      },
    });

    if (!match) {
      await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
        },
      });
    }

    redirect("/journal");
  }
};

const NewUser = async () => {
  await createNewUser();
  return <div>Loading ...</div>;
};

export default NewUser;
