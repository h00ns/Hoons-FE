export const breakpoints: { [index: string]: number } = {
  sm: 500,
  md: 770,
  lg: 992,
  xl: 1200,
};

export const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });
