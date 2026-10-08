export function toBanglaNumber(value: number | string) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";

  return String(value).replace(/\d/g, (digit) => {
    return banglaDigits[Number(digit)];
  });
}