export function formatCurency(priceCents){
  return (priceCents/100).toFixed(2);
}

export default formatCurency;