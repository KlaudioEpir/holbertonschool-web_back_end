export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const value of array) {
    array[idx] = appendString + value;
    idx++;
  }

  return array;
}
./U hoq var: var është i vjetëruar, ndaj u zëvendësua me const dhe let që janë më të sigurta../
./U përdor for...of: Në vend të for...in (që iteronte mbi indeksat e vjetër), përdorëm for...of për të marrë direkt vlerat e listës./
./U mbajt indeksi: Pasi for...of merret vetëm me vlerat, shtuam një variabël idx për të ruajtur pozicionin dhe për të modifikuar listën origjinale në vend (in-place)../
