export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const isClient = () => process.browser;
