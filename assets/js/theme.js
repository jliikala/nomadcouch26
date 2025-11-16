(function () {
  const storageKey = "theme-preference";

  const getPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setPreference = (theme) => {
    localStorage.setItem(storageKey, theme);
    reflectPreference();
  };

  const reflectPreference = () => {
    const theme = getPreference();
    document.documentElement.setAttribute("data-theme", theme);
  };

  reflectPreference();

  window.addEventListener("load", () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      setPreference(getPreference() === "light" ? "dark" : "light");
    });
  });
})();