JAVASCRIPT CHEAT SHEET !!


// we can connect the javascript file using src attribute in script tag 
<script src="*NAME OF THE FILE *"></script>


/////to add javascript by id use script tag 
<script></script>   //used in body tag 


////// to use html element by id just use like a button  
document.getElementById("*ID GOES HERE*")


//////to create a variable 
use var NAME;                   use "" or '' to store a character or string to a variable
                                no need to use quotes for true or false as it is just a datatype
/////can also use 
var name1,name2,name3;          variable must begin with the uppercase letter lowercase letter ,underscore or dollar sign
        or                      use camelCase
var name1=VALUE,
    name2=VALUE,
    age;        

///// we can use math library to perform some functions
Math.max(a,b);
Math.sqrt(a,b);
Math.round(a,ab);

/// OPERAtORS    
==  EQUALS TO 
=== DO GOOD COMPARISON BETWEEN DATATYPES
<
>


// COMPARISON OF STRINGS
"STRING1" > "STRING2";
it will just compare the strings alphabet by alphabet and check which comes first
ALL CAPITAL LETTERS COME BEFORE THE LOWER CASE LETTERS



///////////////////////////////////////////////////////////
                COERSION RULES
undefined = false;
null = false;
0= false;
any other number (including negative) = true;
""=false;
"any other string" = true;      "false"=true;

///////////////////////////////////////////////////////////
                STRINGS 
if text contains single quotes enclose string in double ones 
                        and 
if text contains double quotes then enclose string in single quotes
        
can escape the  quote by using backslash \

IF string contains both types of quotse ::  in this case choose one quote for string that is like double quote for string and then use 
                                            backslash for quotes inside the sentence

                                            //  backslash  '\
                                            is a special character
                                            using \ alone cleras the last character befor it
                                           use twice \\ wil print one backslash

use addition to concatenate strings   
substring(a,b)      ,a is index NodeIterator. of first letter adn b is the index no. of the character next to the last character
substring(x)        ,will strat from x and goes on till last of the string
substr()
charAt();           ,gives you character at that place
indexOf("CHARACTER");      if there is no character in the string then  it will return -1

term1.indexOf(term2)        ,it checks whether term2 exists in term 1or not



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      
//                      FUNCTIONS

function functionName(parameter){
    code here; 
}

///////////////////////////////////////////////////////////
//
//                      ARRAYS

var arrayname=[];
    // then assign starting from index 0;

            OR 
var arrayname =[item1,
                item2,
                item3,
                .....];

 alsocan assign using for looop                //  