export function getNewId(object: any, objArray: any) {
    let maxId: number = 0;
    objArray.forEach(element => {
        if (element.id > maxId) {
            maxId = element.id
        }
    });
    return maxId + 1;
}