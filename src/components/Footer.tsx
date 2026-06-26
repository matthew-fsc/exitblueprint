export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-2">
        <p className="font-mono text-xs text-mut">Exit Blueprint &copy; {new Date().getFullYear()}</p>
        <p className="text-xs text-mut max-w-2xl mx-auto leading-relaxed">
          The DRS methodology is proprietary IP of Fracture Systems, licensed to Exit Blueprint.
          The score is indicative, not a valuation, offer, or financial advice.
        </p>
      </div>
    </footer>
  );
}
