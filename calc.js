var Memory  = "0";      // initialise memory variable
    var Current = "0";      //   and value of Display ("current" value)
    var Operation = 0;      // Records code for eg  etc.
     var MAXLENGTH = 30;

  function AddDigit(dig)          
 {
  if (Current.length > MAXLENGTH)
       { 
        Current = "Aargh! Too long"; 
       } 
       else
       { 
        if ((eval(Current) == 0) && (Current.indexOf(".") == -1))
           { 
            Current = dig;
           } 
           else
           { Current = Current + dig;
           }
       }
     
   document.Calculator.Display.value = Current;
 }
function Dot()                  //PUT IN "." if appropriate.
 {
  if ( Current.length == 0)     //no leading ".", use "0."
    { 
      Current = "0.";
    } 
    else
    {  
      if ( Current.indexOf(".") == -1)
         { Current = Current + ".";
      } 
    }
  document.Calculator.Display.value = Current;
 }


  function PlusMinus()
 {
  
    
     if ( Current.indexOf("-") == 0 )
         { 
          Current = Current.substring(1);
         } 
         else
         { 
          Current = "-" + Current;
         }
    
  document.Calculator.Display.value = Current;
 }

function Clear()                //CLEAR ENTRY
 { Current = "0";
   document.Calculator.Display.value = Current;
 }

function AllClear()             //Clear ALL entries!
 { Current = "0";
   Operation = 0;                //clear operation
   Memory = "0";                  //clear memory
   document.Calculator.Display.value = Current;
 }
 function Operate(op)            //STORE OPERATION e.g. + * / etc.
 {
  if (op.indexOf("*") > -1) { Operation = 1; }      //codes for *
  if (op.indexOf("/") > -1) { Operation = 2; }       // slash (divide)
  if (op.indexOf("+") > -1) { Operation = 3; }       // sum
  if (op.indexOf("-") > -1) { Operation = 4; }       // difference

  Memory = Current;                 //store value
  Current = "";                     //or we could use "0"
  document.Calculator.Display.value = Current;
 }
 function Calculate()            //PERFORM CALCULATION (= button)
 { 
  if (Operation == 1) { Current = eval(Memory) * eval(Current); }
  if (Operation == 2) { Current = eval(Memory) / eval(Current); }
  if (Operation == 3) { Current = eval(Memory) + eval(Current); }
  if (Operation == 4) { Current = eval(Memory) - eval(Current); }
  Operation = 0;                //clear operation
  Memory    = "0";              //clear memory
  document.Calculator.Display.value = Current;
 }

function FixCurrent()
 {
  Current = document.Calculator.Display.value;
  Current = "" + parseFloat(Current);
  if (Current.indexOf("NaN") != -1)
    { Current = "Aargh! I don't understand";
    };
  document.Calculator.Display.value = Current;
 }
