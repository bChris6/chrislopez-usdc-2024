Here is the md file with the initial brainstorming I did at the beginning before starting anything. 

# Brainstorming:
So in short I want to insert a term and a book object. 

Then I want to return a results object that containing the string itself on top (always will be returned) and then, if any, results containing the page number, the line, and ISBN which is always provided in the book object. 

Thus I will want to in a sense "filter" out the content that do not have the word in question. 

With filtering, I will be playing around quite a bit with stings. But Javascript is for the most part dynamically typed so I don't have to worry too much about typing.

I will likely want to grab in one thing at a time moving from bigger things to smaller. 
So maybe grab entire json book object, store the ISBN in the local scope (but not the title as it is not relevant) and then scan through each content entry, ensuring page and line are easy to access and checking the text. 

I do not have to keep the the actual text, so I can potentially append page and line to an array, or map so that I can easily keep them and access them. 

Basic Idea: 
Make a function for processing text and make it yield a boolean to show whether the phrase is in the text.

If it is then append the line and page of that text into my array/map. I haven't chosen which yet whether I will do array or map. 

Do that for each Content json entry there is. 

Now that I have all that, I need to bring this all together into the opposite direction: I want to build my own new result object that I will return. 

I input my array with all the information and craft a json with the desired output. 


# Assumptions I am making 
My first basic goal is to make this practical and easy to use. Thus I am carrying a few assumptions to reach this goal: 

1. An assumption I am making is that these are standalone words and terms. Thus, if I were to put in "No" I would only get results for "No" with spaces around it and I would not get results for "Know" which possess the "no" in the middle. This will make results much more useful and clear, especially since I am not displaying the context of these words or terms. 
2. I am not accepting " " as an input primarily because these are standalone words. 
3. But if I recieve multiple words, I will scan and look for an exact phrase just like that which must be entirely full. So for example, if I were to insert "Do you know" it would not look for the words "do" "you" and "know" individually but only for actual times that in which the entire phrase is used, like in "Well do you know that" would accept the line but "Well did you know that" would not despite it having 2/3 words. 
4. If two or more instances of a words are in a single line, it will only report back once. 

These assumptions are necessary in a situation where I am not receviing too much context. 

# Breaking Down Problem Into Steps
Here is a plan:
1. Start with making a function that can find which lines indeed contain the text and return true or false.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes 
    Just did some research and I found a String.prototype.includes() function that makes my life eaiser. Instead of having to compare on my own this does the work for me! 
2. Have a function that runs through each content section and runs the function I made in #1 and if it returns true it will append an object with the Page, Line to an array of objects
3. Have a function that simplifies #2, it takes in page number, ISBN, and Line and gives out a result object. 
    It will be similar to this https://stackoverflow.com/questions/43709433/can-i-create-an-object-without-a-name-in-js
4. Run #2 as many times as I need for each book object in my starting array. And get an array of processed book objects.
5. Grab that array when #4 finishes running and have a builder helper function that takes in the array of processed book objects and appends them together into a final result. 
