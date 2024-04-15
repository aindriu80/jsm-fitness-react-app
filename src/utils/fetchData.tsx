export const fetchData = async (url: string, options: string) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
