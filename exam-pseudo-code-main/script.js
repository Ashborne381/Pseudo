// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
FUNCTION CheckDifference(WordA, WordB):
    // Checks if WordA and WordB differ by EXACTLY one letter.

    // 1. Check length
    IF LENGTH(WordA) != LENGTH(WordB) THEN
        RETURN FALSE
    END IF

    // 2. Count differences
    DifferenceCount = 0
    FOR Index FROM 1 TO LENGTH(WordA):
        IF WordA[Index] != WordB[Index] THEN
            DifferenceCount = DifferenceCount + 1
        END IF
    END FOR

    // 3. Check for exactly one difference
    IF DifferenceCount == 1 THEN
        RETURN TRUE
    ELSE
        RETURN FALSE
    END IF
END FUNCTION
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*
FUNCTION LewisCarrollWordPuzzle(StartWord, EndWord, DICTIONARY):
    // 1. INITIALIZATION
    CurrentWord = StartWord
    MoveCount = 0
    
    // 2. INITIAL VALIDATION (Check start/end words)
    IF LENGTH(StartWord) != LENGTH(EndWord) THEN
        OUTPUT "Error: Start and End words must have the same length."
        RETURN
    END IF
    
    IF NOT DICTIONARY.CONTAINS(StartWord) OR NOT DICTIONARY.CONTAINS(EndWord) THEN
        OUTPUT "Error: Start or End word is not found in the dictionary."
        RETURN
    END IF
    
    // 3. MAIN GAME LOOP
    WHILE CurrentWord != EndWord:
        
        MoveCount = MoveCount + 1
        OUTPUT "----------------------------"
        OUTPUT "Current Word: " + CurrentWord
        OUTPUT "Target Word: " + EndWord
        OUTPUT "Move: " + MoveCount
        
        // Get the user's next word
        INPUT NextWord AS STRING
        
        // 4. INPUT VALIDATION A: Is the word in the dictionary?
        IF NOT DICTIONARY.CONTAINS(NextWord) THEN
            OUTPUT "Error: The word '" + NextWord + "' is not in the dictionary. Try again."
            MoveCount = MoveCount - 1 // Undo the move counter
            CONTINUE // Go to the next iteration of the WHILE loop
        END IF
        
        // 5. INPUT VALIDATION B: Does it differ by exactly one letter?
        IF NOT CheckDifference(CurrentWord, NextWord) THEN
            OUTPUT "Error: The word must differ by EXACTLY one letter from the current word. Try again."
            MoveCount = MoveCount - 1 // Undo the move counter
            CONTINUE
        END IF
        
        // 6. Valid move
        CurrentWord = NextWord
        
    END WHILE
    
    // 7. CONCLUSION
    OUTPUT "===================================="
    OUTPUT "CONGRATULATIONS! You solved the puzzle!"
    OUTPUT "You went from " + StartWord + " to " + EndWord + " in " + MoveCount + " moves."

END FUNCTION
SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
SET variabel startOrd till "FOUR";
SET variabel slutOrd till "FIVE";


function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    // Här behöver du skriva koden för din funktion
let ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"]; // Dictionary containing valid words
let startOrd = "FOUR";
let slutOrd = "FIVE";

function isOneLetterApart(wordOne, wordTwo) {
    if (wordOne.length !== wordTwo.length) {
        return false;
    }
    let diffCount = 0;
    for (let i = 0; i < wordOne.length; i++) {
        if (wordOne[i] !== wordTwo[i]) {
            diffCount++;
        }
    }
    return diffCount === 1;
}

function LewisCarrollWordPuzzle(StartWord, EndWord, DICTIONARY) {
    let CurrentWord = StartWord;
    let MoveCount = 0;

    if (StartWord.length !== EndWord.length) {
        console.log("Error: Start and End words must have the same length.");
        return;
    }

    if (!DICTIONARY.includes(StartWord) || !DICTIONARY.includes(EndWord)) {
        console.log("Error: Start or End word is not found in the dictionary.");
        return;
    }

    while (CurrentWord !== EndWord) {
        MoveCount++;
        console.log("----------------------------");
        console.log("Current Word: " + CurrentWord);
        console.log("Target Word: " + EndWord);
        console.log("Move: " + MoveCount);

        let NextWord = prompt("Enter next word: ");

        if (!DICTIONARY.includes(NextWord)) {
            console.log("Error: The word '" + NextWord + "' is not in the dictionary. Try again.");
            MoveCount--;
            continue;
        }

        if (!isOneLetterApart(CurrentWord, NextWord)) {
            console.log("Error: The word must differ by EXACTLY one letter from the current word. Try again.");
            MoveCount--;
            continue;
        }

        CurrentWord = NextWord;
    }

    console.log("====================================");
    console.log("CONGRATULATIONS! You solved the puzzle!");
    console.log("You went from " + StartWord + " to " + EndWord + " in " + MoveCount + " moves.");
}

// Call the function
LewisCarrollWordPuzzle(startOrd, slutOrd, ordbok);
    

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/
