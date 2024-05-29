const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then((res) => res.json());
}

export const createCheckout = (co) => {
    return fetch("/api/newCheckout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(co),
    })
  };