JAVASCRIPT CHEAT SHEET !!


// we can connect the javascript file using src attribute in script tag 
<script src="*NAME OF THE FILE *"></script>


/////to add javascript by id use script tag 
<script></script>   //used in body tag 


////// to use html element by id just use like a button  
document.getElementById("*ID GOES HERE*")

////// TO ADD EVENT TO THE ELEMNT OF HTML
document.getElementById("ID GOES HERE").addEventListener("EVENT HERE",
function(event){alert("Hey! this works")});

// to load all the js file before
window.addEventListener("load",function(){...});                    // it loads all the html document at once it is trying to 
                                                                    // acces only window ..document load(everythinh=g on the page images assets CSS) 
                                                                    // < load event trigger < function run and then code

// this triggers the event when whole html is loaded
document.addEventListener("DOMContentLoaded",function(){....});


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

    //  also can assign using for loop   
    
    arrayname.length    // property used to know about the length of an array
    arrayname.push("ITEM GOES HERE");       // function used to add elements in array
    arrayname.sort();                       // funtion used tp sort the array

    ///////////////////////////////////////////////////////////////////
    //
    //                      OBJECTS

    var objectname ={};             //use curly brackets instead of square bracekts as in case of array

    // then                                 //var person ={};
    objectname.property="value";            // person.firstName="Sam";

    
//  FOR MAKING THE ARRAY OF OBJECTS WE NEED TO PUSH THE OBJECT INTO THE ARRAY
arrayname.push(objectname);
// INSTEAD OF PUSHING THE OBJECTS INTO THE ARRAY WE CAN DRIECTLY MAKE THE  ARRAY OF OBJECTS BY USING FOLLOWING FORMAT
var arrayname = [
    {
    // name: "hammer",
    // cost : 9.99,             OBJECT 1
    // id : 101,
    // picture : "hammer.jpg" 
    },
    {
        // name:"screwdriver",
        // cost : 4.99,         OBJECT 2
        // id : 102,
        // picture : "screwdriver.jpg"
    },
    {
        // name:"saw",
        // cost : 12.99,         OBJECT 3
        // id : 103,
        // picture : "saw.jpg"
    }
];


////////////////////////////////////////////////////////////////////////////////////////
/////
/////                   METHODS


var objectname ={};
objectname.functionName = function(){          METHOD CREATION
    function code;
}

objectname.functionName();              function calling

// 
// INSTEAD OF USING OBJECCTNAME AGAIN AND AGAIN WE CAN USE this operator

    this.functionName;      // but csn be used in the scope of that object


///////////////////////////////////////////////////////////////////////////////////////////////////
//
//             EVENT

document.addEventListener("EVENT",second parameter);        //document is writtemn as its for html 
function onClick(event){                                    ("click",onClick)
    do something();
};


                            OR 
document.addEventListener("click",function(event){
    doSomething();
})                            


/////////////////////////////////////////////////////////////////////////////////////////
//
//
                        DOM
                        WINDOW 
                        DOCUMENT (represents html document)
                        
//
//                  SELECTING AN ELEMENT


//  selecting an element by id
document.getElementById("..");

//  selectring elemnets by class name   (CAN SELECT MORE THAN ONE )
document.getElementsByClassName("..");

// selecting elements by tag name 
document.getElementsByTagName("..");

// using query selector  ( query is a CSS selector)
document.querySelector(".class  OR #id  OR any other complex css selector")     it selects only the  first element appearing oin the html document
document.querySelectorAll("..............................................")     it selects all the elemnt with that property but we need to use array method to apply the code on all
                                                                                assign these above mentioned to a variable and then apply changs to variable

//  LIKE THIS   EXAMPLE
// var block = document.getElementById("block");


// block.style.width = "100px";
// block.style.height = "100px";
// block.style.backgroundColor = "red";

// block.style.position = "absolute";

// document.addEventListener("click",function(event){
//     block.style.left= event.clientX + "px";
//     block.style.top= event.clientY +"px";
// })



//  to use input from keyboard into a input text box in javascript
var xx = parseDATATYPE(VAR OF INPUT BOX AS DECLARED IN JS.value),

// to create new element 
document.createElement("NAME OF THE ELEMENT");      it just creates the elemnt it doesn't adds to the html page

// we nee dto assign some text to addd elemnt to a page
element.appendChild(VAR);

//  to assign a element between two elements
element.insertBefore(newElement,referenceElement)