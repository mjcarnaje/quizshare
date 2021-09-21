import moment from "moment";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const isClient = (): boolean => process.browser;

type FuncGenericReturn = <T>(value: T) => T;

export const cleanTypeName: FuncGenericReturn = (value: any) => {
  if (value === null || value === undefined) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map((v) => cleanTypeName(v));
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
  moment.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "seconds",
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
  return moment(parseInt(date)).fromNow(true) + " ago";
};

type IGetCursor = <T extends { createdAt: string }>(
  value?: T[]
) => string | null;

export const getCursor: IGetCursor = (array) => {
  if (!array) return null;

  return array[array.length - 1].createdAt;
};

export const getKeyArgs = (str: string, key: string) => {
  const stringObj = str.replace(`${key}:`, "");

  return JSON.parse(stringObj);
};
