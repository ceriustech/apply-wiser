import type { Route } from './+types/home';

import productImage from '~/assets/img/product-nobg-logo.png';
import applyWiserLogo from '~/assets/img/applywiser-logo.png';

export function meta({}: Route.MetaArgs) {
	return [
		{ httpEquiv: 'Content-type', content: 'text/html; charset=utf-8' },
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
		},
		{ title: 'ApplyWiser' },
		{
			name: 'description',
			content:
				'Stop guessing. Start tracking. ApplyWiser offers LIFT, a Google Sheet that shows you which job platforms actually lead to interviews — and which ones ghost you. One-time $9 purchase.',
		},
		{
			name: 'keywords',
			content:
				'job tracker, job search, application tracker, google sheets, job analytics, ghost jobs',
		},
		{ property: 'og:url', content: 'https://applywiser.app' },
		{
			property: 'og:title',
			content: 'ApplyWiser — Data-Driven Job Search Tracker',
		},
		{
			property: 'og:description',
			content:
				'Leads, Interviews, Follow-ups, Tracking. All in one Google Sheet for $9.',
		},
		{ property: 'og:type', content: 'website' },
		{ name: 'twitter:card', content: 'summary_large_image' },
	];
}

export default function Index() {
	return (
		<div className="min-h-screen bg-linear-to-br from-blue-100 via-purple-50 to-green-100 font-sans">
			{/* NAV */}
			<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/40">
				<div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
					<div className="flex items-center gap-2 w-55 h-10">
						<img
							src={applyWiserLogo}
							alt="Platform Conversion Tracking Preview"
							className="w-full h-auto rounded"
						/>
					</div>
					<div className="hidden md:flex items-center gap-8">
						<a
							href="#how-it-works"
							className="text-slate-700 hover:text-slate-900 text-sm font-medium"
						>
							How It Works
						</a>
						<a
							href="#pricing"
							className="text-slate-700 hover:text-slate-900 text-sm font-medium"
						>
							Pricing
						</a>
						<a
							href="#pricing"
							className="bg-blue-900 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
						>
							Get LIFT
						</a>
					</div>
				</div>
			</nav>

			{/* HERO */}
			<section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-24">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left: Copy */}
					<div>
						<h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
							Data, Not Luck:
							<br />
							Optimize Your
							<br />
							Job Search.
						</h1>
						<p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-xl">
							Apply wiser with{' '}
							<span className="font-bold text-slate-900">LIFT</span> — Leads,
							Interviews, Follow-ups, and Tracking. The job application tracker
							that shows you which platforms actually work, which ones ghost
							you, and where to spend your energy.{' '}
							{/* <span className="font-semibold">
								A complete job search system for $9.
							</span> */}
						</p>
						<a
							href="#pricing"
							className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
						>
							Get LIFT — Just $9
							<span>→</span>
						</a>
						<p className="text-xs text-slate-500 mt-2 ml-2">
							One-Time Purchase · Instant Access
						</p>
					</div>

					{/* Platform table image */}
					<div className="p-3">
						<img
							src={productImage}
							alt="Platform Conversion Tracking Preview"
							className="w-full h-auto rounded"
						/>
					</div>
				</div>
			</section>

			{/* DATA BENEFITS */}
			<section id="dashboard" className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
				<h2 className="text-3xl font-bold text-slate-900 mb-10">
					Data Benefits
				</h2>
				<div className="grid md:grid-cols-3 gap-6">
					{[
						{
							icon: '🧭',
							title: 'TARGET EFFECTIVE PLATFORMS',
							desc: 'Instantly see which sites ghost you and which ones lead to interviews.',
						},
						{
							icon: '📋',
							title: 'OPTIMIZE YOUR PIPELINE',
							desc: 'Tracks interview rates, offer probabilities, and rejection percentages to identify where your funnel is leaking.',
						},
						{
							icon: '🤝',
							title: 'ACTIONABLE INSIGHTS',
							desc: 'Receive specific recommendations on where to spend your energy for the best ROI.',
						},
					].map((benefit) => (
						<div
							key={benefit.title}
							className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4">
								{benefit.icon}
							</div>
							<h3 className="font-bold text-sm text-slate-900 tracking-wide mb-2">
								{benefit.title}:
							</h3>
							<p className="text-sm text-slate-600 leading-relaxed">
								{benefit.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* HOW IT WORKS + PRICING */}
			<section
				id="how-it-works"
				className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
			>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left: Steps */}
					<div>
						<h2 className="text-3xl font-bold text-slate-900 mb-10">
							How It Works
						</h2>
						<div className="flex items-start gap-4">
							{[
								{ num: '1', title: 'Purchase & Copy' },
								{ num: '2', title: 'Simple Data Entry' },
								{ num: '3', title: 'Get Real-Time Dashboard Analytics' },
							].map((step, i) => (
								<div key={step.num} className="flex items-start flex-1">
									<div className="flex flex-col items-center flex-1">
										<div className="text-7xl font-bold text-slate-900 leading-none">
											{step.num}
										</div>
										<p className="text-sm text-slate-700 font-medium text-center mt-3 max-w-[100px]">
											{step.title}
										</p>
									</div>
									{i < 2 && <div className="w-12 h-px bg-slate-300 mt-12" />}
								</div>
							))}
						</div>
					</div>

					{/* Right: Pricing card */}
					<div
						id="pricing"
						className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
					>
						<div className="bg-slate-800 text-white text-center py-3 font-bold tracking-wide">
							PRICING
						</div>
						<div className="p-8">
							<div className="grid grid-cols-2 gap-6 mb-6">
								<div>
									<div className="text-6xl font-bold text-slate-900 leading-none">
										$9
									</div>
									<div className="text-sm text-slate-500 mt-2">
										One-Time Purchase
									</div>
								</div>
								<ul className="space-y-2 text-sm text-slate-700">
									<li>• Full Job Tracker Sheet</li>
									<li>• Automated Dashboard Analytics</li>
									<li>• Platform Conversion Scoring</li>
									<li>• Work Type Distribution</li>
									<li>• Quick Insights Panel</li>
									<li>• Future Upgrades Available</li>
								</ul>
							</div>
							<a
								href="YOUR_STRIPE_PAYMENT_LINK_HERE"
								className="block w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-center transition-colors shadow-lg shadow-blue-600/30"
							>
								Buy Now and Start Optimizing
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="max-w-7xl mx-auto px-6 lg:px-12 py-12 mt-12 border-t border-white/40">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-2 w-55 h-10">
						<img
							src={applyWiserLogo}
							alt="Platform Conversion Tracking Preview"
							className="w-full h-auto rounded"
						/>
					</div>
					<p className="text-sm text-slate-600">
						© 2026 ApplyWiser. Built by a job seeker, for job seekers.
					</p>
				</div>
			</footer>
		</div>
	);
}
