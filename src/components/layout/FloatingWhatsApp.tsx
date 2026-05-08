export function FloatingWhatsApp() {
  const phone = "0000000000";
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-extrabold text-white shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4"
      style={{ ["--tw-ring-color" as never]: "color-mix(in srgb, #25D366 40%, transparent)" }}
      aria-label="تواصل عبر واتساب"
    >
      <IconWhatsapp />
      <span className="hidden sm:inline">واتساب</span>
    </a>
  );
}

function IconWhatsapp() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a8 8 0 0 1-12.8 6.3L4 20l2.3-3.2A8 8 0 1 1 20 11.5z" />
      <path d="M9.5 9.2c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.6-.1.8l-.5.6c-.2.2-.2.5 0 .7.6.9 1.4 1.7 2.3 2.3.2.1.5.1.7 0l.6-.5c.2-.2.5-.2.8-.1l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .6-.5.8-.5.2-1.7.6-3.6-.2-2-.8-3.8-2.6-4.6-4.6-.8-1.9-.4-3.1-.2-3.6z" />
    </svg>
  );
}

