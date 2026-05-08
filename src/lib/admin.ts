export type AdminSeed = {
  email: string;
  password: string;
  name: string;
};

/**
 * IMPORTANT:
 * Demo-only auth seed for local/testing.
 * Not production-ready (no hashing, no sessions, no rate limiting).
 */
export const ADMIN_SEED: AdminSeed = {
  email: "admin@doctor.com",
  password: "Admin@12345",
  name: "مدير الموقع",
};

export function validateAdminLogin(email: string, password: string): boolean {
  return email === ADMIN_SEED.email && password === ADMIN_SEED.password;
}

