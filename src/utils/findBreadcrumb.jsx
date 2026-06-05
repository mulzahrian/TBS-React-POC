export const findBreadcrumb = (pathname, menus) => {
    for (const menu of menus) {
        if (menu.path === pathname) {
            return [menu];
        }

        if (menu.children) {
            const child = menu.children.find((item) => item.path === pathname);

            if (child) {
                return [menu, child];
            }
        }
    }

    return [];
};
