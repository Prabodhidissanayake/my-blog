export async function getBlogs() {
  return fetch(
    "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=25",
    {
      headers: {
        token: "pj11daaQRz7zUIH56B9Z",
      },
    }
  );
}
