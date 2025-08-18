const searchBank = "swil\nWildMan"; //poly\b-walk
function searchBar(term, option){
    if (option == "s"){ //Return words that start will the given pattern
        term = `\\b${term}.*\\b`;
    } else if (option == "e"){ //Return words that end with the given pattern
        term = `\\b.*${term}\\b`;
    } else { //Return words that contain the given pattern, position-agnostic
        term = `\\b.*${term}.*\\b`;
    }
    term = new RegExp(term, "gi");
    const results = searchBank.match(term);
    return results ?? "No words found. Please try refining your search.";
    
}