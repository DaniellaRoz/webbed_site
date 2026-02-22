export async function loadBooks() {
    const res = await fetch("/api/books");
    return res.json();
}

export function convertToTally(number) {
    if (number === 0) {
        return "未読";
    }
    
    let tallyString = "";
    
    for (number; number > 4; number -= 5) {
        tallyString += "𝍶";
    }

    switch (number) {
        case 4:
            tallyString += "𝍵";
            break;
        case 3:
            tallyString += "𝍴";
            break;
        case 2:
            tallyString += "𝍳";
            break;
        case 1:
            tallyString += "𝍲";
            break;       
    }

    return tallyString;
}
