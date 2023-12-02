const plugin = require("tailwindcss/plugin");

export const baseTypographyPlugins = plugin(function ({
    addBase,
    addUtilities,
    theme,
}) {
    const screens = theme("screens");

    const extractSize = (size) => +size.split("px")[0];

    const makeUnderlineProperties = (size, variant, values) => {
        const breakpoints = {
            sm: {
                headers: 18,
                headlines: 18,
            },
            md: {
                headers: 24,
                headlines: 18,
            },
            lg: {
                headers: 31,
                headlines: 18,
            },
        };
        const currentBreakpoints = breakpoints[variant];
        const extractedSize = extractSize(size);
        return extractedSize >= currentBreakpoints.headers
            ? values.headers
            : extractedSize >= currentBreakpoints.headlines
            ? values.headlines
            : values.paragraphs;
    };
    const makeFontStyle = ({ sizes, lineHeight, fontFamily }) => {
        lineHeight ??= "140%";
        return {
            lineHeight,
            fontFamily,
            fontSize: sizes.sm ?? sizes.md,
            [`@media (min-width: ${screens["sm"]})`]: {
                fontSize: sizes.md,
            },
            [`@media (min-width: ${screens["md"]})`]: {
                fontSize: sizes.lg,
            },
            "&.underlined": {
                position: "relative",
                "&::before": {
                    position: "absolute",
                    top: `calc(${sizes.sm} * ${makeUnderlineProperties(
                        sizes.sm,
                        "sm",
                        {
                            headers: "1.4",
                            headlines: "1.3",
                            paragraphs: "1.25",
                        }
                    )})`,
                    left: 0,
                    content: "''",
                    width: makeUnderlineProperties(sizes.sm, "sm", {
                        headers: "40px",
                        headlines: "30px",
                        paragraphs: "30px",
                    }),
                    borderRadius: "4px",
                    height: makeUnderlineProperties(sizes.sm, "sm", {
                        headers: "2px",
                        headlines: "1.5px",
                        paragraphs: "1.5px",
                    }),
                    backgroundColor: theme("colors.primary"),
                    [`@media (min-width: ${screens["sm"]})`]: {
                        top: `calc(${sizes.md} * ${makeUnderlineProperties(
                            sizes.md,
                            "md",
                            {
                                headers: "1.4",
                                headlines: "1.35",
                                paragraphs: "1.3",
                            }
                        )})`,
                        width: makeUnderlineProperties(sizes.md, "md", {
                            headers: "70px",
                            headlines: "40px",
                            paragraphs: "40px",
                        }),
                        height: makeUnderlineProperties(sizes.md, "md", {
                            headers: "3px",
                            headlines: "2px",
                            paragraphs: "1.5px",
                        }),
                    },
                    [`@media (min-width: ${screens["md"]})`]: {
                        top: `calc(${sizes.lg} * ${makeUnderlineProperties(
                            sizes.lg,
                            "lg",
                            {
                                headers: "1.4",
                                headlines: "1.35",
                                paragraphs: "1.3",
                            }
                        )})`,
                        width: makeUnderlineProperties(sizes.lg, "lg", {
                            headers: "80px",
                            headlines: "40px",
                            paragraphs: "40px",
                        }),
                        height: makeUnderlineProperties(sizes.lg, "lg", {
                            headers: "4px",
                            headlines: "2px",
                            paragraphs: "1.5px",
                        }),
                    },
                },
            },
        };
    };

    const h1 = makeFontStyle({
        sizes: {
            sm: "25px",
            md: "34px",
            lg: "43px",
        },
    });

    const h2 = makeFontStyle({
        sizes: {
            sm: "20px",
            md: "31px",
            lg: "39px",
        },
    });

    const h3 = makeFontStyle({
        sizes: {
            sm: "20px",
            md: "28px",
            lg: "34px",
        },
    });

    const h4 = makeFontStyle({
        sizes: {
            sm: "18px",
            md: "25px",
            lg: "31px",
        },
    });

    const h5 = makeFontStyle({
        sizes: {
            sm: "18px",
            md: "20px",
            lg: "28px",
        },
    });

    const h6 = makeFontStyle({
        sizes: {
            sm: "18px",
            md: "20px",
            lg: "25px",
        },
    });

    const headline1 = makeFontStyle({
        sizes: {
            sm: "18px",
            md: "20px",
            lg: "25px",
        },
    });

    const headline2 = makeFontStyle({
        sizes: {
            sm: "16px",
            md: "18px",
            lg: "20px",
        },
    });

    const headline3 = makeFontStyle({
        sizes: {
            sm: "14px",
            md: "18px",
            lg: "18px",
        },
    });

    const paragraph1 = makeFontStyle({
        sizes: {
            sm: "14px",
            md: "16px",
            lg: "16px",
        },
    });

    const paragraph2 = makeFontStyle({
        sizes: {
            sm: "13px",
            md: "14px",
            lg: "14px",
        },
    });

    const paragraph3 = makeFontStyle({
        sizes: {
            sm: "13px",
            md: "13px",
            lg: "13px",
        },
    });

    const paragraph4 = makeFontStyle({
        sizes: {
            sm: "12px",
            md: "12px",
            lg: "12px",
        },
    });

    // const underlined = {
    //     color: "inherit",
    //     position: "relative",
    //     "&::before": {
    //         position: "absolute",
    //         top: "18px",
    //         left: 0,
    //         content: "''",
    //         width: "40px",
    //         height: "1.5px",
    //         backgroundColor: theme("colors.primary"),
    //         [`@media (min-width: ${screens["sm"]})`]: {
    //             top: "22px",
    //         },
    //         [`@media (min-width: ${screens["md"]})`]: {
    //             top: "22px",
    //         },
    //     },
    // };

    addBase({
        // h1,
        // h2,
        // h3,
        // h4,
        // h5,
        // h6,
        p: paragraph1,
    });
    addUtilities({
        ".primarytext": { color: theme("colors.primary") },
        ".weak": {
            color: theme("colors.font-3"),
        },
        ".weaker": {
            color: theme("colors.font-4"),
        },
        ".weakest": {
            color: theme("colors.font-5"),
        },
        ".h1": h1,
        ".h2": h2,
        ".h3": h3,
        ".h4": h4,
        ".h5": h5,
        ".h6": h6,
        ".headline1": headline1,
        ".headline2": headline2,
        ".headline3": headline3,
        ".paragraph1": paragraph1,
        ".paragraph2": paragraph2,
        ".paragraph3": paragraph3,
        ".paragraph4": paragraph4,
        // ".paragraph1.underlinedxx": underlined,
    });
});
