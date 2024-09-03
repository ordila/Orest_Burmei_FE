## What Was Refactored:

- **Memoized `getPriority`:**
  Converted `getPriority` into a memoized function to avoid unnecessary recalculations.

- **Combined Formatting and Mapping:**
  Combined the formatting and mapping of data for rows to simplify processing.

- **Updated Dependency Array in `useMemo`:**
  Removed unnecessary dependencies from the dependency array to improve efficiency.

- **Optimized Sorting:**
  Simplified the sorting logic to enhance performance.

- **Used Unique Key:**
  Replaced `index` with `balance.currency` for better performance and correct rendering.
