document.addEventListener("DOMContentLoaded", function ()
{
    const toggle = document.getElementById("dark-toggle");
    const root = document.documentElement;

    // Load saved mode from localStorage
    const isDark = localStorage.getItem("darkMode") === "true";
    if (isDark)
    {
        root.classList.add("dark");
        toggle.checked = true;
    }

    // Toggle mode and save preference
    toggle.addEventListener("change", () =>
    {
        if (toggle.checked)
        {
            root.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        }
        else
        {
            root.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    });
});
