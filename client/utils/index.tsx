export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const isClient = (): boolean => process.browser;

type FuncGenericReturn = <T>(value: T) => T;

export const cleanTypeName: FuncGenericReturn = (value) => {
  if (value === null || value === undefined) {
    return value;
  } else if (Array.isArray(value)) {
    return (value as any).map((v: any) => cleanTypeName(v));
  } else if (typeof value === "object") {
    const newObj: Record<any, any> = {};
    Object.entries(value).forEach(([key, v]) => {
      if (key !== "__typename") {
        newObj[key] = cleanTypeName(v);
      }
    });
    return newObj;
  }
  return value;
};
