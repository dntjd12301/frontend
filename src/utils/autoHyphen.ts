export const autoHyphen = (event: Event) => {
  const target = event.target as HTMLInputElement;
  target.value = target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(--?)$/g, '');
};
