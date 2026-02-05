export default function AboutPage() {
  return (
    <section className="min-h-screen bg-slate-100 px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            About Vinayak Venture
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Industrial-grade stretch film solutions designed for secure wrapping,
            load stability, and dependable protection during transit and storage.
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-lg p-10 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Who We Are
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Vinayak Venture is a professional supplier of industrial stretch film
              packaging solutions, supporting businesses with products built for
              strength, consistency, and efficiency.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Our focus is on dependable sourcing and performance-driven materials
              that help protect goods during handling, storage, and transportation.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Supply Capability
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>• High-strength stretch films for demanding applications</li>
              <li>• Consistent wrapping performance</li>
              <li>• Competitive and transparent pricing</li>
              <li>• 24/7 timely supply support</li>
              <li>• Long-term professional business approach</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-slate-800 to-blue-700 text-white rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Why Vinayak Venture
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Strength & Reliability</h4>
              <p>
                High-strength stretch films you can depend on for secure packaging
                and load stability.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Performance Driven</h4>
              <p>
                Engineered for reliable stretch, strong load holding, and surface
                protection.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Business Trust</h4>
              <p>
                Trusted by businesses across India for consistent quality and
                professional service.
              </p>
            </div>
          </div>
        </div>

        {/* Product Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Product Range Overview
          </h2>

          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
            Stretch film solutions designed to secure, stabilize, and protect
            industrial loads during storage and transportation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Stretch Film – Protection in Every Layer
              </h3>
              <p className="text-slate-600">
                Our stretch films are engineered to deliver reliable stretch,
                strong load holding, and dependable surface protection for
                industrial packaging needs.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-800 mb-3">
                Application Areas
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-slate-600 text-sm">
                <li>• Pallet wrapping</li>
                <li>• Export packaging</li>
                <li>• Warehousing & storage</li>
                <li>• Logistics & transport</li>
                <li>• Industrial load stabilization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="bg-slate-50 rounded-2xl p-10">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-slate-700">
            <div className="bg-white p-4 rounded-lg shadow">Manufacturing</div>
            <div className="bg-white p-4 rounded-lg shadow">Logistics & Warehousing</div>
            <div className="bg-white p-4 rounded-lg shadow">FMCG</div>
            <div className="bg-white p-4 rounded-lg shadow">Pharmaceuticals</div>
            <div className="bg-white p-4 rounded-lg shadow">Electronics</div>
            <div className="bg-white p-4 rounded-lg shadow">Export & Shipping</div>
          </div>
        </div>

      </div>
    </section>
  );
}
