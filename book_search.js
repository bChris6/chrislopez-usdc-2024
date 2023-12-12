/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
//Putting it all together to get the final result
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    var result = {
        "SearchTerm": searchTerm,
        "Results": getResultsArray(searchTerm, scannedTextObj)
    };
    
    return result; 
}

//Helper Functions 
function findIfTermInText(searchTerm, textString) {
    return textString.includes(searchTerm);
}

//Only keep contents I want from bookObj
function getArrayWithProcessedBookObj(searchTerm, bookObj) { 
    var matchingArray = [];

    for (i = 0; i < bookObj.Content.length; i++) {
        const currentText = bookObj.Content[i].Text;
        if (findIfTermInText(searchTerm, currentText)) {
            //If term is in the text, pushed the processed content
            matchingArray.push(transformContentToDesiredForm(bookObj.Content[i], getISBNForContent(bookObj)));        
        }
    }
    return matchingArray;
}

//Easily Get ISBN, just insert bookObj
function getISBNForContent(bookObj) {
    return bookObj.ISBN;
}


//For processBookObj
function transformContentToDesiredForm(contentIWantToKeepInBookObj, ISBN) {
    var processedBookObj = {
        "ISBN": ISBN,
        "Page": contentIWantToKeepInBookObj.Page,
        "Line": contentIWantToKeepInBookObj.Line
    }
    return processedBookObj;
}

//Merging Arrays to get result array
function getResultsArray(searchTerm, scannedTextObj) {
    var results = [];
    for(var i = 0; i < scannedTextObj.length; i++) {
        const ArrayWithProcessedBookObjs = getArrayWithProcessedBookObj(searchTerm, scannedTextObj[i]);
        for(var j = 0; j < ArrayWithProcessedBookObjs.length; j++) {
            results.push(ArrayWithProcessedBookObjs[j]);
        }
    } 
    return results;
}


/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


//I am using the same case for testing my findIfTermInText button as the sample output uses. 

//Check If The FindIfTerm correctly finds the term inside and returns false when it doesn't. 
const test3IfWordIsInText = findIfTermInText("the", twentyLeaguesIn[0].Content[1].Text);
if(test3IfWordIsInText) {
    console.log("PASS: Test3");
} else {
    console.log("FAIL: Test3");
    console.log("Expected:", true);
}

const test4IfWordIsInText = findIfTermInText("the", twentyLeaguesIn[0].Content[0].Text);
if(test4IfWordIsInText) {
    console.log("FAIL: Test4");
    console.log("Expected:", false);
} else {
    console.log("PASS: Test4");
}
//Check if the testIfWordIsInText is capitalized sensitive as I was requested to have it.
//I am looking for the "The" capital in the first text. 
const test5IfWordIsInTextCaptial = findIfTermInText("The", twentyLeaguesIn[0].Content[1].Text);
if(test5IfWordIsInTextCaptial) {
    console.log("FAIL: Test5");
    console.log("Expected:", false);
} else {
    console.log("PASS: Test5");
}

//Multi Word Input Check 
const test6IfWordIsInTextSpacel = findIfTermInText("The dark", twentyLeaguesIn[0].Content[0].Text);
if(test6IfWordIsInTextSpacel) {
    console.log("PASS: Test6");
} else {
    console.log("FAIL: Test6");
    console.log("Expected:", true);
}


//CheckGetArray
const test7GetArray = getArrayWithProcessedBookObj("the", twentyLeaguesIn[0]);
const test7BookObjectResult = twentyLeaguesOut.Results;

if(JSON.stringify(test7GetArray) === JSON.stringify(test7BookObjectResult)) {
    console.log("PASS: Test7");
} else {
    console.log("FAIL: Test7");
    console.log("Expected:", test7BookObjectResult, "But we recieved", test7GetArray);
}

