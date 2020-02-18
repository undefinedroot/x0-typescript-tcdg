export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  // sample input: '29/10/2018'
  //['year', 'month; 0 base', 'day'];
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
