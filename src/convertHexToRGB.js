export default function convertHexToRGB(hexColor) {
    const hexDigits = hexColor
      .toLowerCase()
      .replace('#', '')
      .split('')
      .map((item) => {
        const number = parseInt(item, 10);
        return Number.isNaN(number) ? item.codePointAt() - 87 : number;
      });
  
    const decDigits = hexDigits.reduce((acc, item, index) => {
      if (index % 2 === 0) {
        acc.push(item * 16)
      } else {
        acc[acc.length - 1] += item;
      }
  
      return acc;
    }, []);
  
    const convertedColor = `rgb(${decDigits.join(', ')})`;
  
    return convertedColor;
  }