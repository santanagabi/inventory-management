import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-radiant-to-br from-purple-500 to-purple-100">
      <div className="max-w-md w-full space-y-8">
        <SignIn />
        <Link href="/">Go Back Home</Link>
      </div>
    </div>
  );
}