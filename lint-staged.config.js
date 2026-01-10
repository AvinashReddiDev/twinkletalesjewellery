export default {
  "apps/public-twinkle-tales/**/*.{js,jsx,mjs}": (filenames) => {
    const relativeFiles = filenames
      .map((file) => file.replace("apps/public-twinkle-tales/", ""))
      .join(" ");
    return [
      `prettier --write ${filenames.join(" ")}`,
      `cd apps/public-twinkle-tales && pnpm exec eslint --fix ${relativeFiles}`,
    ];
  },
  "apps/service-core/**/*.{js,mjs}": (filenames) => {
    const relativeFiles = filenames
      .map((file) => file.replace("apps/service-core/", ""))
      .join(" ");
    return [
      `prettier --write ${filenames.join(" ")}`,
      `cd apps/service-core && pnpm exec eslint --fix ${relativeFiles}`,
    ];
  },
  "apps/**/*.{json,css,md}": (filenames) => {
    return `prettier --write ${filenames.join(" ")}`;
  },
};
