export const GETAPI = async (path, options = {}) => {
  return await fetch(path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    ...options,
  }).then((response) => response);
};

export const POSTAPI = async (path, body) => {
  return await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  }).then((response) => response);
};

export const PUTAPI = async (path, body) => {
  return await fetch(path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  }).then((response) => response);
};

export const DELETEAPI = async (path) => {
  return await fetch(path, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
  }).then((response) => response);
};

export const UPLOADAPI = async (path, formData) => {
  return await fetch(path, {
    method: "POST",
    credentials: "include",
    body: formData,
  }).then((response) => response);
};
