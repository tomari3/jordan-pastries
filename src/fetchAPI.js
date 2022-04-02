export const fetchAPI = async (api) => {
  const res = await fetch(api);
  const data = await res.json();
  return data;
};
