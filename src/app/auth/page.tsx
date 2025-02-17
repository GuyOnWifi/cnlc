// src/app/auth/page.tsx
import SignIn from './signIn';
import SignUp from './signUp';

export default function AuthPage() {
  return (
    <div>
      {/* Render SignIn or SignUp here based on your choice */}
      <SignIn />
      {/* Or you can conditionally render SignUp */}
    </div>
  );
}
