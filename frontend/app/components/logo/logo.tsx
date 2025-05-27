export default function Logo({ size = "sm" }: { size?: "sm" | "base" }) {
  return (
    <a href="/">
      <div className="bg-gradient-to-br from-teal-400 to-green-400 px-4 py-2 rounded-md hover:via-emerald-400 shadow-lg shadow-emerald-400/20">
        <h2
          className={`text-${size === "sm" ? "sm" : "base"} text-white font-GeistMono-Regular tracking-widest`}
        >
          Zenly
        </h2>
      </div>
    </a>
  );
}
