# Documenting The Progress That I have Made:

# Find if term is in text
First I completed my finding if the term is in text function. It did not take too much time and I was especially helped out by the string.includes() function which made implementing this super easy. 
I implented the tests as well and they return PASS in all three cases, when I checked a correct case, an incorrect case, a capitalized wrongly case, and I added a test to see if it could even find phrases with spaces. I also checked these in both Chrome and Mozilla and I got the same answers! 

# Getting Array with the contents I want in a single book object. 
Inside of a single book object I am table to extract the text that I want. I had a few issues with the exact json formatting. My unit tester helped me get this just right so that I can feed this information into the function for next time. Note: I just realized that I have to take into consideration an input that can have multiple book objects, so I will have to take this into account in the brainstorming section.

--
A few edits: 
I made edits in the order in which I processed my items. Now I am actually processing my contentObjs that I want to keep before I append them to my array. The purpose of this is that it is much easier if I do this now vs later since I have easy access to the ISBN, I can do this at the lower level. This will also make it smoother for abstraction.

# Putting It All Together
I put everything together by doing a double loop where I went through all of the new processed book objs and I appended them to the results.

