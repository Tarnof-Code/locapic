export default function (pseudo = '', action) {
    if (action.type == 'savePseudo') {
        return action.pseudo;
    } else {
        return pseudo;
    }
}