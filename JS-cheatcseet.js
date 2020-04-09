JAVASCRIPT CHEAT SHEET !!


// we can connect the javascript file using src attribute in script tag 
<script src="*NAME OF THE FILE *"></script>


/////to add javascript by id use script tag 
<script></script>   //used in body tag 


////// to get html element by id just use 
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
