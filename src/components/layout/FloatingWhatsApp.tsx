import { getWhatsAppHref } from "@/lib/contact";

export function FloatingWhatsApp() {
  const href = getWhatsAppHref();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4"
      style={{ ["--tw-ring-color" as never]: "color-mix(in srgb, #25D366 40%, transparent)" }}
      aria-label="تواصل عبر واتساب"
    >
      <IconWhatsapp />
      <span className="sr-only">واتساب</span>
    </a>
  );
}

function IconWhatsapp() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 3C8.82 3 3 8.63 3 15.59c0 2.56.79 4.94 2.14 6.93L4 29l6.69-1.99A13.6 13.6 0 0 0 16 28.18c7.18 0 13-5.63 13-12.59C29 8.63 23.18 3 16 3Zm7.77 18.43c-.33.92-1.63 1.68-2.66 1.9-.71.15-1.63.27-4.74-1.03-3.97-1.66-6.53-5.76-6.72-6.01-.19-.25-1.62-2.14-1.62-4.09s1.02-2.91 1.38-3.31c.36-.4.79-.5 1.06-.5h.77c.25 0 .58-.1.91.69.33.8 1.12 2.75 1.22 2.95.1.2.17.44.03.7-.14.27-.21.44-.41.67-.2.23-.42.51-.6.69-.2.2-.41.41-.18.8.23.4 1.02 1.66 2.18 2.69 1.5 1.34 2.77 1.75 3.16 1.95.4.2.63.17.86-.1.23-.27.99-1.13 1.25-1.52.26-.39.53-.33.89-.2.36.13 2.29 1.07 2.68 1.26.4.2.66.29.76.45.1.16.1.94-.23 1.86Z" />
    </svg>
  );
}

