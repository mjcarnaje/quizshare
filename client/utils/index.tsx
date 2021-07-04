import moment from "moment";

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
  const moreThanWeek = moment(parseInt(date))
    .fromNow(true)
    .includes("week" || "month" || "year");

  if (moreThanWeek) {
    return moment(parseInt(date)).format("ll");
  }

  return `${moment(parseInt(date)).fromNow(true)} ago`;
};
