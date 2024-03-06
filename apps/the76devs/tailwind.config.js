import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    daisyui: {
        themes: [
            {
                custom: {
                    primary: "#1E40AF",
                    secondary: "#F87171",
                    "base-100": "#000",
                },
            },
        ],
    },

    plugins: [daisyui],
};
