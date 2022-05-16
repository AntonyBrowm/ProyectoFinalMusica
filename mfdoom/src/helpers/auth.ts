const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyMzA1Mzk5LCJpYXQiOjE2NTIzMDUwOTksImp0aSI6IjY2OTNjZTIxZjQ4MzRlNDZiYjE2NGFlZWU1OTk3ZWQ0IiwidXNlcl9pZCI6MX0.Yv5E1_rFQUM2aMIsmacU9IPy7pC-I7VBU1ll5aazbYo";

export const fetchAuth = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });