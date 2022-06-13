let Filter = (props) => {

    const contains = (rowValue, filterValue) => {
        return new RegExp(`${filterValue}`, 'i').test(rowValue);
    }

    switch(props.filter.operator){
        case 'contains':
            return contains(props.row[props.filter.column].toString().toLowerCase(), props.filter.value.toString().toLowerCase());
        case 'equals':
            return props.row[props.filter.column].toString().toLowerCase() === props.filter.value.toString().toLowerCase();
        case 'starts with':
            return new RegExp(`^${props.filter.value.toString().toLowerCase()}`, 'i')
                   .test(props.row[props.filter.column].toString().toLowerCase());
        case 'ends with':
            return new RegExp(`${props.filter.value.toString().toLowerCase()}$`, 'i')
                   .test(props.row[props.filter.column].toString().toLowerCase());
        case 'is empty':
            return props.row[props.filter.column].toString().length === 0;
        case 'is not empty':
            return props.row[props.filter.column].toString().length > 0;
        case 'is any of':
            for(let i = 0; i < props.filter.value.length; i++){
                if(contains(props.row[props.filter.column].toString().toLowerCase(), props.filter.value[i])){
                    return true;
                }
            }
            return false;
        default:
            console.log(props);
    }
}
export default Filter;