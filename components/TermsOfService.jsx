export default function TermsOfService({ open, onClose }) {
    if (!open) return null;
    
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-slate-900 p-6 rounded-2xl max-w-2xl w-full text-left text-slate-200 shadow-xl relative">
                <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>

                <h2 className="text-xl font-semibold mt-6 mb-2">Billing & Grace Period</h2>
                <p className="mb-4">
                    Payments are due on the billing cycle agreed upon (monthly or yearly).
                    Clients will have a 5-day grace period after a missed payment.
                    If no payment or communication is received with this period, the account may by placed on hold.
                    Accounts may remain on hold for up to 90 days, after which they may be permanently deleted.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Service Priority</h2>
                <p className="mb-4">
                    Higher-tier hosting and maintenance plans receive priority in service, support, and updates over lower-tier plans.
                    While all clients will be supported, Premium and Standard plans will be prioritized before Basic or Hobby plans.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Account Termination</h2>
                <p className="mb-4">
                    We reserve the right to suspend or terminate accounts for non-payment, misuse, or violation of these terms.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Updates to Terms</h2>
                <p className="mb-4">
                    These terms may be updated periodically. Clients will be notified of significant changes.
                </p>

                <p className="mt-8 text-sm text-slate-400">
                    Last updated: 9-2-2025
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
                >
                    ✖
                </button>
            </div>
        </div>
    )
}