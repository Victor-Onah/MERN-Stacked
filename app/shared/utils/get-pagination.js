export default function getPagination(currentPage, threshold, totalPages) {
  if (threshold < 5) threshold = 5;
  if (currentPage > totalPages) currentPage = 1;
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pagination = Array(threshold);

  const isCloseToStart = currentPage <= 3;
  const isCloseToEnd = currentPage >= totalPages - 2;

  if (isCloseToStart) {
    for (let i = 0; i < threshold - 2; i++) {
      pagination[i] = i + 1;
    }
    pagination[threshold - 2] = "...";
    pagination[threshold - 1] = totalPages;
  } else if (isCloseToEnd) {
    pagination[0] = 1;
    pagination[1] = "...";
    for (let i = 2; i < threshold; i++) {
      pagination[i] = totalPages - (threshold - 2) + (i - 2);
    }
  } else {
    pagination[0] = 1;
    pagination[1] = "...";
    for (let i = 2; i < threshold - 2; i++) {
      pagination[i] = currentPage - 2 + (i - 2);
    }
    pagination[threshold - 2] = "...";
    pagination[threshold - 1] = totalPages;
  }

  return pagination;
}
