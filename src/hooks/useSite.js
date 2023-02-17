import { useState, useEffect } from "react";
import getSite from "../services/getInfoSite";

export default function useSite() {
  const [site, setSite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [valueError, setValueError] = useState(null);

  useEffect(function () {
    setLoading(true);

    getSite()
      .then((site) => {
        setSite(site);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setValueError(err.message);
      });
  }, []);

  return { site, loading, error, valueError };
}
