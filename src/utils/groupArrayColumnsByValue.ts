export const groupArrayColumnsByKey = <T, K extends keyof T>(
  data: T[],
  key: K
): Record<string, T[]> => {
  const groupedData: Record<string, T[]> = {};
  for (const entry of data) {
    const year = new Date(<string>entry[key]).getFullYear();

    if (!groupedData[year]) {
      groupedData[year] = [];
    }

    groupedData[year].push(entry);
  }

  return groupedData;
};
