export default function getSite() {
  const apiURL = `${process.env.REACT_APP_URL}/globals/sites/infoSite`;

  return fetch(apiURL)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
}
