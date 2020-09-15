const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyPriority(style);

const initialColors = {
    '--bg': getStyle(html, '--bg'),
    '--bg-panel': getStyle(html, '--bg-panel'),
    '--color-headings': getStyle(html, '--color-headings'),
    '--color-text': getStyle(html, '--color-text'),
}

const darkMode = {
    '--bg': '#333333',
    '--bg-panel': '#434343',
    '--color-headings': '#3664FF',
    '--color-text': '#B5B5B5',
}

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(key, colors[key])
    );
};

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
