const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1uZkBqcGhsaW9ucy5jb20iLCJuaWNrbmFtZSI6Im1uZiIsInBhc3N3b3JkIjoiJDJiJDEwJFlrT3J3VmZwVDBzT0RjMjZEOHJBME96VUtyak0wNDVBLnh6SlhsSDlSRXpZd0llbEc2Qm1pIiwiaWF0IjoxNzA1NDUzNjI0LCJleHAiOjE3MDU0NTk2MjR9.eQybUFL6-wSiAzh4pN-c_GvrftCFU_qh7npFxLAVUCg";

export async function postMessage(message) {
  const res = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  await res.json();
}

export async function getMessages() {
  const res = await fetch("http://localhost:8080/messages", {
    headers: {
      authorization: "Bearer " + token,
    },
  });

  const data = await res.json();
  if (data.error) return [];
  return data.resultados;
}
