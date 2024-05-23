# Filter Airports

This project displays a table of airport data with filtering and pagination functionality. It includes filters for airport types and a search bar to filter by airport names.

# Project Demo
![Project Demo](/functional_task/public/filter_airport_demo.gif)

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:

```
cd functional_task
```

3. Install the necessary dependencies:

```
npm install
```

4. Run the project.

```
npm start
```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Component Details

### State Variables

- **currentPage**: Keeps track of the current page number.
- **searchQuery**: Stores the search input value.
- **selectedTypes**: Stores the selected airport types for filtering.
- **recordsPerPage**: Number of records to display per page (fixed at 4).

### Filtering and Pagination

- **filteredAirports**: Filters the airports based on the search query and selected types.
- **currentRecords**: Slices the filtered airports to get the records for the current page.
- **totalPages**: Calculates the total number of pages needed for pagination.

### Rendering

- **Filter Section**: Includes checkboxes for airport types and a search input for filtering by name.
- **Table Section**: Displays the current page of airport records.
- **Pagination Section**: Contains buttons to navigate between pages and displays information about the current page of results.

## Technologies Used

- React.js
- HTML
- CSS
- Javascript
- Font awesome library

## Authors

- [@Snehal](https://github.com/Snehal-Salvi)
