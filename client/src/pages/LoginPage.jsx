import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      localStorage.setItem('token', data.token);
      alert('Login successful!');
    } catch (error) {
      alert('Cannot connect to backend');
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="card w-full max-w-md p-8">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Sign in to access your rescue dashboard.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="btn-primary w-full"
          >
            Login
          </button>
        </div>

        <div className="mt-6 space-y-2">
  {['Demo as Donor', 'Demo as Shelter', 'Demo as Driver', 'Demo as Admin'].map((role) => (
    <button
      key={role}
      type="button"
      onClick={() => alert(`${role} is not configured yet`)}
      className="btn-secondary w-full justify-center"
    >
      {role}
    </button>
  ))}
  </div>
  </div>
  </main>
  );
}