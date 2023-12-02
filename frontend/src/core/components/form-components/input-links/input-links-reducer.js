export default function linksReducer(state, action) {
    switch (action.type) {
        case "add_link": {
            if (state.links.at(-1).url)
                return {
                    ...state,
                    links: [
                        ...state.links,
                        { url: "", show: true, id: state.links.at(-1).id + 1 },
                    ],
                };
            else return state;
        }

        case "remove_link": {
            const copy = [...state.links];
            const filtered = copy.filter((_, index) => index !== action.index);

            if (state.links.length > 1)
                return {
                    ...state,
                    links: filtered,
                };
            else return state;
        }

        case "modify_link": {
            const copy = [...state.links];
            copy[action.index].url = action.payload;
            return {
                ...state,
                links: copy,
            };
        }

        case "populate_default_links": {
            const defaultLinks = action.payload;
            const newLinks = defaultLinks.map((link, i) => ({
                url: "",
                show: true,
                id: i + 1,
                ...link,
            }));

            return {
                ...state,
                links: newLinks,
            };
        }

        case "populate_links": {
            const links = action.payload ?? [
                {
                    id: 1,
                    url: "",
                    show: true,
                },
            ];
            return {
                ...state,
                ...links,
            };
        }
    }
}
