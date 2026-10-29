export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="card w-full max-w-xl p-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Create your account</h1>
        <p className="mt-2 text-sm text-slate-600">Join the Jaipur food rescue network.</p>

        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" defaultValue="Green Leaf Kitchen" />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" defaultValue="hello@greenleaf.in" />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-medium text-slate-700">Organization</label>
            <input className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" defaultValue="Green Leaf Restaurant" />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-medium text-slate-700">Role</label>
            <select className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
              <option>donor</option>
              <option>shelter</option>
              <option>driver</option>
              <option>admin</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" defaultValue="password123" />
          </div>
          <div className="md:col-span-2">
            <button type="button" className="btn-primary w-full">Create account</button>
          </div>
        </form>
      </div>
    </main>
  );
}
