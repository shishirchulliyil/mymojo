import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-fit mx-auto mt-20">
      <SignUp />
    </div>
  );
}
