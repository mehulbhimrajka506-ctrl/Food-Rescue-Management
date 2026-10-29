export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-soft backdrop-blur-sm">
          <div>
            <p className="text-xl font-extrabold tracking-tight text-slate-900">FoodRescue AI</p>
            <p className="text-sm text-slate-600">Don't Waste Food. Rescue It.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-secondary" href="/login">Login</a>
            <a className="btn-primary" href="/register">Start Rescue</a>
          </div>
        </header>

        <section className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Jaipur Food Rescue Network
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Connect surplus food with people who need it before it expires.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              FoodRescue AI matches restaurants, shelters, and volunteer drivers in real time so edible food reaches communities faster and with less waste.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn-primary" href="/register">Donate Surplus Food</a>
              <a className="btn-secondary" href="/login">Explore Live Rescues</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ['2,480', 'kg rescued'],
                ['1,920', 'meals served'],
                ['94%', 'match success'],
              ].map(([value, label]) => (
                <div key={label} className="card p-4">
                  <div className="text-2xl font-extrabold text-slate-900">{value}</div>
                  <div className="text-xs text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Live rescue pulse</p>
                <h2 className="text-2xl font-bold text-slate-900">Jaipur network</h2>
              </div>
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">Live</span>
            </div>

            <div className="space-y-3">
              {[
                'Rahul picked up 15kg from Green Leaf Restaurant',
                'Hope Shelter received a delivery in Sanganer',
                'Meals on Wheels assigned a driver to a critical rescue',
              ].map((event, idx) => (
                <div key={idx} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  <p className="text-sm text-slate-700">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
