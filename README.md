# Orest Burmei Code Challenge

Welcome to the Orest Burmei Code Challenge repository. This project includes a series of tasks and improvements that have been made to enhance the functionality and performance of the code. Below you'll find an overview of the tasks completed and the refactoring that was done.

## Tasks

### Task 1: Sum Calculation Functions

Implemented three different functions and tests to calculate the sum of integers from 1 to `n` using different approaches

### Task 2: Currency Swap Form

Implemented a currency swap form that allows users to select currencies, enter an amount, and see the converted amount based on live token prices. The form utilizes React, TypeScript, and Material-UI (MUI) for building the user interface and handling form state.

**Key Features:**

- Currency selection using a dropdown menu
- Real-time conversion based on token prices
- Error handling for API calls
- Snackbar notifications for successful swaps

### Task 3: Wallet Page Refactoring

Refactored the Wallet Page to improve performance and code readability. This included optimizing the sorting and filtering of wallet balances, as well as memoizing functions to prevent unnecessary recalculations.

**Refactoring Details:**

- **Memoized `getPriority`:** Converted `getPriority` into a memoized function to avoid unnecessary recalculations.
- **Combined Formatting and Mapping:** Combined the formatting and mapping of data for rows to simplify processing.
- **Updated Dependency Array in `useMemo`:** Removed unnecessary dependencies from the dependency array to improve efficiency.
- **Optimized Sorting:** Simplified the sorting logic to enhance performance.
- **Used Unique Key:** Replaced `index` with `balance.currency` for better performance and correct rendering.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/ordila/Orest_Burmei_FE
cd Orest_Burmei_FE
npm install

```
