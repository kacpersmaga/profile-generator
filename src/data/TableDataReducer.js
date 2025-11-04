const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, part) => (acc && acc[part] ? acc[part] : null), obj);
};

export default function TableDataReducer(state, action) {
  switch (action.type) {
    
    case "SET_DATA":
      return {
        originalData: action.payload,
        sortedData: action.payload,
      };

    case "SORT": {
      const { key, direction } = action.payload;
      const sorted = [...state.sortedData];

      sorted.sort((a, b) => {
        const valA = getNestedValue(a, key);
        const valB = getNestedValue(b, key);

        if (valA === null || valB === null) return 0;

        if (typeof valA === 'string') {
          return direction === 'asc' 
            ? valA.localeCompare(valB) 
            : valB.localeCompare(valA);
        }
        
        if (typeof valA === 'number') {
          return direction === 'asc' 
            ? valA - valB 
            : valB - valA;
        }
        
        return 0;
      });

      return { ...state, sortedData: sorted };
    }

    case "RESET_SORT":

      return {
        ...state,
        sortedData: state.originalData,
      };

    default:
      return state;
  }
}