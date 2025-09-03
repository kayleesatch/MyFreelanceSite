export default function PaymentButton({ href, label = "Checkout" }) {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-2 py-2 rounded-xl border border-slate-300 hover:bg-slate-500 card-hover"
        >
            {label}
        </a>
    );
}