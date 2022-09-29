export async function getBlogs(page, count = 5) {
  return fetch(
    `https://frontend-case-api.sbdev.nl/api/posts?page=${page}&perPage=${count}`,
    {
      headers: {
        token: "pj11daaQRz7zUIH56B9Z",
      },
    }
  );
}

export async function getCatergories() {
  return fetch("https://frontend-case-api.sbdev.nl/api/categories", {
    headers: {
      token: "pj11daaQRz7zUIH56B9Z",
    },
  });
}
