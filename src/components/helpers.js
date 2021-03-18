export const filterArray = (conditions, arr) => {
    let tempArray = [];
    let flag = false;

    arr.forEach((item, idx) => {
        conditions.forEach((condition, idx) => {
            if(item[condition]) {
                flag = true;
            } else {
                flag = false;
            }
        })

        if (flag) {
            tempArray.push(item);
        }
      });
}

export const generateOptions = (sOption, arr) => {
    
}