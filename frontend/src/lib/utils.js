export function formatDate(date){
    return data.toLocalDateString("en-US",{
        month : "short",
        day : "numeric",
        year :"numeric"
    })
}