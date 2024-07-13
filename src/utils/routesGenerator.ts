import { TRoute, TUserPath } from "../types";

export const routesGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.name) {
      acc.push({ path: item.path, element: item.element });
    }
    if (item.children && item.children.length) {
      item.children.forEach((child) => {
        acc.push({ path: child.path!, element: child.element });
      });
    }
    console.log(acc);
    return acc;
  }, []);

  return routes;
};
