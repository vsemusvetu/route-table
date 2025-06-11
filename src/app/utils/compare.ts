export function compare(a: any, b: any, isAsc: boolean): number {
  // Handle IP address comparison
  if (typeof a === 'string' && a.match(/^\d+\.\d+\.\d+\.\d+$/)) {
    const numA = ipToNumber(a);
    const numB = ipToNumber(b);
    return (numA < numB ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
  // Standard comparison for other types
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function ipToNumber(ip: string): number {
  return ip.split('.').reduce((acc, octet, idx) => {
    return acc + (parseInt(octet) * Math.pow(256, 3 - idx));
  }, 0);
}