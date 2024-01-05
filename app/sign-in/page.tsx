import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="w-full max-w-fit mx-auto mt-20">
      <SignIn />
    </div>
  );
}
