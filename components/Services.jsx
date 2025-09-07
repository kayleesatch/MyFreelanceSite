import { useState } from "react";
import PaymentButton from "./PaymentButton";
import TermsOfService from "./TermsOfService";

const packages = [
    {
        name: "Starter",
        price: 300,
        description: "Single-page or simple multi-section site. Perfect for small businesses.",
        includes: ["Responsive design", "Contact form", "Basic SEO", "1 week support"],
        checkoutLink: 'https://buy.stripe.com/00wbJ11f17Bu39p0fR00004'
    },
    {
        name: "Pro",
        price: 800,
        description: "Multi-page website with more features. Ideal for growing businesses.",
        includes: ["Up to 5 pages", "Custom design", "Enhanced SEO", "2 weeks support"],
        checkoutLink: "https://buy.stripe.com/eVqdR98Ht092dO32nZ00005"
    },
    {
        name: "Premium",
        price: 1500,
        description: "Full-featured website with advanced customizations. Best for larger businesses.",
        includes: ["Unlimited pages", "Advanced features", "SEO optimization", "1 month support"],
        checkoutLink: "https://buy.stripe.com/28E5kD7Dp4pifWb3s300006"
    },
];

const hostingPlans = {
    monthly: [
        {
            tier: "Hobby",
            price: 15,
            description: "Affordable hosting for personal projects or small sites. Minimal maintenance.",
            checkoutLink: "https://buy.stripe.com/bJe4gz3n98Fy5hxbYz00007",
        },
        {
            tier: "Basic",
            price: 50,
            description: "Ideal for small businesses or personal projects that need reliable hosting and essential support.",
            checkoutLink: "https://buy.stripe.com/7sY4gz4rd3leaBR6Ef00008",
        },
        {
            tier: "Standard",
            price: 100,
            description: "Perfect for growing businesses that need dependable hosting, regular maintenance, and priority updates.",
            checkoutLink: "https://buy.stripe.com/cNi14n6zlbRKeS7aUv00009",
        },
        {
            tier: "Premium",
            price: 200,
            description: "Designed for established businesses that require full-service hosting, advanced maintenance, and priority support.",
            checkoutLink: "https://buy.stripe.com/eVq3cvaPB2ha8tJ3s30000a",
        },
    ],
    yearly: [
        {
            tier: "Hobby",
            price: 150,
            description: "Save with annual billing. Affordable hosting for personal projects or small sites. Minimal maintenance.",
            checkoutLink: "https://buy.stripe.com/14A14n2j50926lB5Ab0000e"
        },
        {
            tier: "Basic",
            price: 500,
            description: "Save with annual billing. Includes reliable hosting and essential support for small businesses or projects.",
            checkoutLink: "https://buy.stripe.com/cNi9AT3n93ledO31jV0000b",
        },
        {
            tier: "Standard",
            price: 1000,
            description: "Save with annual billing. Includes dependable hosting, regular maintenance, and priority updates.",
            checkoutLink: "https://buy.stripe.com/3cI14ng9V6xq6lB6Ef0000c",
        },
        {
            tier: "Premium",
            price: 2000,
            description: "Save with annual billing. Includes full-service hosting, advanced maintenance, and priority support.",
            checkoutLink: "https://buy.stripe.com/4gM9AT9Lx092aBR5Ab0000d",
        },
    ],
};

export default function Services() {
    const [billing, setBilling] = useState("monthly");
    const [showTerms, setShowTerms] = useState(false);

    return (
        <section id="services" className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-2">Website Packages</h2>
            <h3 className="text-xl font-semibold mb-6 text-slate-500">(One Time Payment)</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {packages.map((pkg, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-400 p-6 shadow-xl hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                        <p className="opacity-80 mb-4">{pkg.description}</p>
                        <ul className="text-sm list-disc ml-5 space-y-1 mb-4">
                            {pkg.includes.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <span className="text-2xl font-bold">${pkg.price.toLocaleString()}</span>
                            </div>
                            <PaymentButton href={pkg.checkoutLink} label="Book Now" />
                        </div>
                        <p className="text-xs text-slate-300 mt-2">
                            *By clicking Book Now, you agree to our{" "}
                            <button 
                                onClick={() => setShowTerms(true)}
                                className="underline hover:text-slate-200 transition"
                            >
                                Terms of Service
                            </button>
                            .
                        </p>
                    </div>
                ))}
            </div>

            {/* Hosting & Mintenance Section */}
            <div className='rounded-2xl border border-slate-400 p-6 shadow-lg mt-10'>
                <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-2xl font-bold'>
                        Hosting & Maintenance Plans
                    </h3>
                    {/* Toggle Slider*/}
                    <div 
                        className="relative inline-flex items-center cursor-pointer" 
                        onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
                    >
                        <span className="mr-2 text-sm font-medium">Monthly</span>
                        <div className="w-14 h-8 bg-gray-400 border border-slate-700 rounded-full relative transition">
                            <div
                                className={`absolute top-0.5 left-0.5 w-7 h-7 rounded-full bg-orange-500 border border-slate-600 transform transition-transform ${
                                    billing === "yearly" ? "translate-x-6" : ""
                                }`}
                            />
                            </div>
                            <span className="ml-2 text-sm font-medium">Yearly</span>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                        {hostingPlans[billing].map((plan, idx) => (
                            <div
                                key={idx}
                                className='rounded-xl border border-slate-700 p-4 shadow hover:shadow-md transition'
                            >
                                <h4 className='text-lg font-semibold mb-2'>{plan.tier}</h4>
                                <p className="opacity-80 mb-4">{plan.description}</p>
                                <p className='text-2xl font-bold mb-4'>
                                    ${plan.price.toLocaleString()}{" "}
                                    <span className='text-sm font-normal opacity-70'>
                                        /{billing}
                                    </span>
                                </p>
                                <PaymentButton href={plan.checkoutLink} label="Subscribe" />
                                <p className="text-xs text-slate-300 mt-2">
                                    *By clicking Subscribe, you agree to our{" "}
                                    <button 
                                        onClick={() => setShowTerms(true)}
                                        className="underline hover:text-slate-200 transition"
                                    >
                                        Terms of Service
                                    </button>
                                    .
                                </p>
                            </div>
                        ))}
                    </div>
            </div>
            <TermsOfService open={showTerms} onClose={() => setShowTerms(false)} />
        </section>
    );
}