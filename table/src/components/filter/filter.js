let Filter = (props) => {
    switch(props.filter.operator){
        case 'contains':
            // TODO
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
            // TODO
        default:
            console.log(props);
    }
}
export default Filter;