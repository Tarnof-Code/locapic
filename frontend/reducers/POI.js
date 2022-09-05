export default function (listPOI = [], action) {
    if (action.type == "addPOI") {
        let listPOICopy = [...listPOI, action.POI]
        return listPOICopy

    } else if (action.type == "delPOI") {
        let listPOICopy = listPOI.filter(e => e.latitude !== action.POI.latitude && e.longitude !== action.POI.longitude)
        return listPOICopy
    } else {
        return listPOI
    }
}