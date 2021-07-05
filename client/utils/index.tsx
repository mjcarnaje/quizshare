import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%ss",
    m: "a minute",
    mm: "%dm",
    h: "an hour",
    hh: "%dh",
    d: "a day",
    dd: "%dd",
    M: "a month",
    MM: "%dM",
    y: "a year",
    yy: "%dY",
  },
});

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

export const formatDate = (date: string): string => {
  return `${moment(parseInt(date)).fromNow(true)}`;
};

type IGetLastItemDate = <T extends { createdAt: string }>(
  value?: T[]
) => string | null;

export const getLastItemDate: IGetLastItemDate = (array) => {
  if (!array) return null;

  return array[array.length - 1].createdAt;
};

export const getCacheArg = (str: string) => {
  const firstIdx = str.indexOf("{");
  const lastIdx = str.lastIndexOf("}");

  const objString = `{${str.substring(firstIdx + 1, lastIdx)}}`;

  return JSON.parse(objString);
};
