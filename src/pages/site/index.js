import React from "react";
import Section from "../../components/section/index.js";
import useSite from "../../hooks/useSite.js";

export default function Site() {
  const { site, loading, error, valueError } = useSite();

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
          ></div>
          <p className="ml-2">Cargando...</p>
        </div>
      ) : (
        <Section sections={site.Section} />
      )}
      {error ? <p>{valueError}</p> : ""}
    </>
  );
}
