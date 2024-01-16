const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1uZkBqcGhsaW9ucy5jb20iLCJuaWNrbmFtZSI6Im1uZiIsInBhc3N3b3JkIjoiJDJiJDEwJHFvN0sycHNzTFBCZU1Tb3ZiVGdja2VqWllTR3IvdjA2a1dzZ3Z6QTNlUHc5U3R0YTNGZllTIiwiaWF0IjoxNzA1NDM0MTQxLCJleHAiOjE3MDU0Mzc3NDF9._wjKoLgb23SkzcXp5PSUV1BAaqQ1OlPCsSy3JR8FRy8";

export async function postMessage(message) {
  const res = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      authorization: "Bearer " + token,
    },
    body: message,
  });
  const data = await res.json();
  console.log({ data });
}

export async function getMessages() {
  const res = await fetch("http://localhost:8080/messages", {
    headers: {
      authorization: "Bearer " + token,
    },
  });

  const data = await res.json();
  return data.resultados;
}
