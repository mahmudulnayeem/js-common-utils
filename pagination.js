function getPagination(currentPage, totalPages, windowSize = 5) {
  const pagination = [];
  const halfWindowSize = Math.floor(windowSize / 2);

  // Calculate start and end of pagination range
  let startPage = Math.max(currentPage - halfWindowSize, 1);
  let endPage = Math.min(currentPage + halfWindowSize, totalPages);

  // Adjust if near start or end
  if (startPage <= 2) {
    startPage = 1;
    endPage = Math.min(windowSize, totalPages);
  }

  if (endPage >= totalPages - 1) {
    endPage = totalPages;
    startPage = Math.max(totalPages - windowSize + 1, 1);
  }

  // Add first page and ellipsis if needed
  if (startPage > 1) {
    pagination.push(1);
    if (startPage > 2) pagination.push("...");
  }

  // Add range of pages
  for (let i = startPage; i <= endPage; i++) {
    pagination.push(i);
  }

  // Add ellipsis and last page if needed
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pagination.push("...");
    pagination.push(totalPages);
  }

  return pagination;
}

// Usage example:
const currentPage = 6;
const totalPages = 15;
const windowSize = 5;
const pagination = getPagination(currentPage, totalPages, windowSize);
console.log(pagination); // Output: [1, '...', 4, 5, 6, 7, 8, '...', 15]
