import type { BlogPost } from "./blogs";

export type CreateBlogPostInput = Pick<
  BlogPost,
  "title" | "slug" | "category" | "excerpt" | "content" | "image" | "published"
>;

/**
 * IMPORTANT:
 * Demo-only helper for the admin UI.
 * No database, no persistence: it only logs payloads to the console.
 * Replace with real DB calls (create/update/delete) when backend is added.
 */
export async function createBlogPost(input: CreateBlogPostInput) {
  const payload = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString().slice(0, 10),
    ...input,
  };

  // For now: just log. Later: save to DB.
  console.log("[createBlogPost] (demo)", payload);

  return payload;
}

export type UpdateBlogPostInput = CreateBlogPostInput & { id: string };

/**
 * IMPORTANT:
 * Demo-only helper for the admin UI.
 * No database, no persistence: it only logs payloads to the console.
 * Replace with real DB calls (create/update/delete) when backend is added.
 */
export async function updateBlogPost(input: UpdateBlogPostInput) {
  const payload = {
    ...input,
    updatedAt: new Date().toISOString(),
  };

  // For now: just log. Later: update in DB.
  console.log("[updateBlogPost] (demo)", payload);

  return payload;
}

