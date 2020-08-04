
        // Function for Backspace Button
         function backSpace(){
            var inputScreen = document.getElementById('btnValue').value;
            var backSpace = inputScreen.slice(0, inputScreen.length - 1);
            document.getElementById('btnValue').value = backSpace;
        }

        // DeleteAll Button handler
        var deleteAll = document.getElementById('deleteAll').addEventListener('click', function(){
            document.getElementById("btnValue").value = '';
        })

        // Hiding Below Section notification
        var match = document.getElementById("match");
        match.style.display = "none";
        var misMatch = document.getElementById("misMatch");
        misMatch.style.display = "none";
        var validPin = document.getElementById("validPin");
        validPin.style.display = "none";

        // Hiding tryLeft
        var tryLeft = document.getElementById("tryLeft");
        tryLeft.style.display = "none";

        // Generate Random number
        var generate = document.getElementById("generate");
        generate.addEventListener('click', function(){
            var result = Math.floor(1000 + Math.random() * 9000);
            var mainPin = document.getElementById("showPin").value = result;
        })

        // Backspace button Handler
        var btnBack = document.getElementById("btnBack");
        btnBack.addEventListener('click', function(){
            backSpace();
        })

        // All Button Handler
        var button7 = document.getElementById("btn7");
        button7.addEventListener('click', function(){
        document.getElementById("btnValue").value += 7;
        })

        var button8 = document.getElementById("btn8");
        button8.addEventListener('click', function(){
        document.getElementById("btnValue").value += 8;
        })
        var button9 = document.getElementById("btn9");
        button9.addEventListener('click', function(){
        document.getElementById("btnValue").value += 9;
        })

        var button4 = document.getElementById("btn4");
        button4.addEventListener('click', function(){
        document.getElementById("btnValue").value += 4;
        })

        var button5 = document.getElementById("btn5");
        button5.addEventListener('click', function(){
        document.getElementById("btnValue").value += 5;
        })

        var button6 = document.getElementById("btn6");
        button6.addEventListener('click', function(){
        document.getElementById("btnValue").value += 6;
        })

        var button1 = document.getElementById("btn1");
        button1.addEventListener('click', function(){
        document.getElementById("btnValue").value += 1;
        })

        var button2 = document.getElementById("btn2");
        button2.addEventListener('click', function(){
        document.getElementById("btnValue").value += 2;
        })

        var button3 = document.getElementById("btn3");
        button3.addEventListener('click', function(){
        document.getElementById("btnValue").value += 3;
        })

        var button0 = document.getElementById("btn0");
        button0.addEventListener('click', function(){
        document.getElementById("btnValue").value += 0;
        })

       // Submit button Handler
        var submitBtn = document.getElementById("submitBtn");
        submitBtn.addEventListener('click', function(){

           var pinResult = document.getElementById("showPin").value ;
           var submit =  document.getElementById("btnValue").value;
            
            if(pinResult == submit && pinResult != ""  && submit != "" ){    
               var match = document.getElementById("match");
               match.style.display = "block";
               var misMatch = document.getElementById("misMatch");
               misMatch.style.display = "none";
               var validPin = document.getElementById("validPin");
               validPin.style.display = "none";
               var tryLeft = document.getElementById("tryLeft");
               tryLeft.style.display = "none";
               document.getElementById("showPin").value = "";
               document.getElementById("btnValue").value = "";
           }

           else if( pinResult != submit && pinResult != ""  && submit != ""){
               var match = document.getElementById("match");
               match.style.display = "none";
               var validPin = document.getElementById("validPin");
               validPin.style.display = "none";
               var misMatch = document.getElementById("misMatch");
               misMatch.style.display = "block";
               var tryLeft = document.getElementById("tryLeft");
               tryLeft.style.display = "block";
               document.getElementById("showPin").value = "";
               document.getElementById("btnValue").value = "";
            }
            else if(pinResult == ""  && submit == ""){
                var validPin = document.getElementById("validPin");
                validPin.style.display = "block";
            }
        })   
       