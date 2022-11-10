var system = [
    { a11: 2.5000, a12: -3.1200, a13: -4.0300, b1: -7.5000},
    { a21: 0.6100, a22:  0.7100, a23: -0.0500, b2:  0.4400},
    { a31:-1.0300, a32: -2.0500, a33:  0.8770, b3: -1.1600}
    ];
    
    // var system = [
    // { a11: 3, a12:-6, a13: 3, b1:-12},
    // { a21: 2, a22: 3, a23: 4, b2:  8},
    // { a31: 4, a32: 5, a33:-2, b3:  4}
    // ];
    
    var showSteps = document.getElementById("tests");
    var endButton = document.getElementById('reCalculate');
    
    
    function getValues(){
      var inputs = document.getElementsByClassName('system-value'),
          names  = [].map.call(inputs, function( input ) {
              return parseFloat(input.value);
          });
    
          var firstRow = names.slice(0,4);
          var secondRow = names.slice(4,8);
          var thirdRow = names.slice(8,12);
    
          console.log(names);
          console.log(firstRow);
          console.log(secondRow);
          console.log(thirdRow);
    
          var  test1 = {
            a11: firstRow[0],
            a12: firstRow[1],
            a13: firstRow[2],
            b1: firstRow[3]
          }
          console.log(test1);
          var  test2 = {
            a21: secondRow[0],
            a22: secondRow[1],
            a23: secondRow[2],
            b2: secondRow[3]
          }
          console.log(test2);
          var  test3 = {
            a31: thirdRow[0],
            a32: thirdRow[1],
            a33: thirdRow[2],
            b3: thirdRow[3]
          }
          console.log(test3);
    
          system = [test1,test2,test3];
          getAnswers(system[0].a11,system[0].a12,system[0].a13,system[0].b1,system[1].a21,system[1].a22,system[1].a23,system[1].b2,system[2].a31,system[2].a32,system[2].a33,system[2].b3);
    
    
    }
    
    
    
    function getAnswers(a11,a12,a13,b1,a21,a22,a23,b2,a31,a32,a33,b3) {
      var clonedSystem = JSON.parse(JSON.stringify(system));
    
    
          document.getElementById('a11_1').innerHTML = a11;
          document.getElementById('a12_1').innerHTML = a12;
          document.getElementById('a13_1').innerHTML = a13;
          document.getElementById('b1_1').innerHTML = b1;
    
          document.getElementById('a21_1').innerHTML = a21;
          document.getElementById('a22_1').innerHTML = a22;
          document.getElementById('a23_1').innerHTML = a23;
          document.getElementById('b2_1').innerHTML = b2;
    
          document.getElementById('a31_1').innerHTML = a31;
          document.getElementById('a32_1').innerHTML = a32;
          document.getElementById('a33_1').innerHTML = a33;
          document.getElementById('b3_1').innerHTML = b3;
    
    
    
          // 1)
          var divider = a11;
          system[0].a11 = a11 = a11/divider;
          system[0].a12 = a12 = a12/divider;
          system[0].a13 = a13 = a13/divider;
          system[0].b1  =  b1 = b1/divider;
          console.log("The result of the first operation")
          console.log(a11,a12,a13,b1);
    
          document.getElementById('a11_2').innerHTML = a11;
          document.getElementById('a12_2').innerHTML = a12;
          document.getElementById('a13_2').innerHTML = a13;
          document.getElementById('b1_2').innerHTML = b1;
                document.getElementById('divider').innerHTML = '/'+ divider;
    
          document.getElementById('a21_2').innerHTML = a21;
          document.getElementById('a22_2').innerHTML = a22;
          document.getElementById('a23_2').innerHTML = a23;
          document.getElementById('b2_2').innerHTML = b2;
    
          document.getElementById('a31_2').innerHTML = a31;
          document.getElementById('a32_2').innerHTML = a32;
          document.getElementById('a33_2').innerHTML = a33;
          document.getElementById('b3_2').innerHTML = b3;
    
    
          document.getElementById('a21_2').innerHTML = a21;
          document.getElementById('a22_2').innerHTML = a22;
          document.getElementById('a23_2').innerHTML = a23;
          document.getElementById('b2_2').innerHTML = b2;
    
          document.getElementById('a31_2').innerHTML = a31;
          document.getElementById('a32_2').innerHTML = a32;
          document.getElementById('a33_2').innerHTML = a33;
          document.getElementById('b3_2').innerHTML = b3;
          // 2)---------------------------------------------------------------------
          document.getElementById('a21_starp_1').innerHTML = a21;
          document.getElementById('a22_starp_1').innerHTML = a22;
          document.getElementById('a23_starp_1').innerHTML = a23;
          document.getElementById('b2_starp_1').innerHTML = b2;
    
          var multiplier1 = a21 * -1;
          system[1].a21 = a21 = a11 * multiplier1 + a21;
          system[1].a22 = a22 = a12 * multiplier1 + a22;
          system[1].a23 = a23 = a13 * multiplier1 + a23;
          system[1].b2  =  b2 =  b1 * multiplier1 +  b2;
    
          var a11_s = a11 * multiplier1;
          var a12_s = a12 * multiplier1;
          var a13_s = a13 * multiplier1;
          var  b1_s = b1 * multiplier1;
    
    
          document.getElementById('a11_starp_1').innerHTML = a11_s;
          document.getElementById('a12_starp_1').innerHTML = a12_s;
          document.getElementById('a13_starp_1').innerHTML = a13_s;
          document.getElementById('b1_starp_1').innerHTML = b1_s;
    
          document.getElementById('a31_starp_1').innerHTML = a21;
          document.getElementById('a32_starp_1').innerHTML = a22;
          document.getElementById('a33_starp_1').innerHTML = a23;
          document.getElementById('b3_starp_1').innerHTML = b2;
          // -----------------------------------------------------------------------
          document.getElementById('a21_starp_2').innerHTML = a31;
          document.getElementById('a22_starp_2').innerHTML = a32;
          document.getElementById('a23_starp_2').innerHTML = a33;
          document.getElementById('b2_starp_2').innerHTML = b3;
    
          var multiplier2 = a31 * -1;
          system[2].a31 = a31 = a11 * multiplier2 + a31;
          system[2].a32 = a32 = a12 * multiplier2 + a32;
          system[2].a33 = a33 = a13 * multiplier2 + a33;
          system[2].b3  =  b3 =  b1 * multiplier2 +  b3;
    
          var a11_s = a11 * multiplier2;
          var a12_s = a12 * multiplier2;
          var a13_s = a13 * multiplier2;
          var  b1_s = b1 * multiplier2;
    
          document.getElementById('a11_starp_2').innerHTML = a11_s;
          document.getElementById('a12_starp_2').innerHTML = a12_s;
          document.getElementById('a13_starp_2').innerHTML = a13_s;
          document.getElementById('b1_starp_2').innerHTML = b1_s;
    
          document.getElementById('a31_starp_2').innerHTML = a31;
          document.getElementById('a32_starp_2').innerHTML = a32;
          document.getElementById('a33_starp_2').innerHTML = a33;
          document.getElementById('b3_starp_2').innerHTML = b3;
    
    
          document.getElementById('a11_2').innerHTML = a11;
          document.getElementById('a12_2').innerHTML = a12;
          document.getElementById('a13_2').innerHTML = a13;
          document.getElementById('b1_2').innerHTML = b1;
                document.getElementById('multipliers').innerHTML = '*('+ multiplier1 + ')' +' | '+'*('+ multiplier2 + ')';
    
          document.getElementById('a11_3').innerHTML = a11;
          document.getElementById('a12_3').innerHTML = a12;
          document.getElementById('a13_3').innerHTML = a13;
          document.getElementById('b1_3').innerHTML = b1;
    
          document.getElementById('a21_3').innerHTML = a21;
          document.getElementById('a22_3').innerHTML = a22;
          document.getElementById('a23_3').innerHTML = a23;
          document.getElementById('b2_3').innerHTML = b2;
    
          document.getElementById('a31_3').innerHTML = a31;
          document.getElementById('a32_3').innerHTML = a32;
          document.getElementById('a33_3').innerHTML = a33;
          document.getElementById('b3_3').innerHTML = b3;
    
    
          console.log("The result of the second operation")
          console.log(a21,a22,a23,b2,"un",a31,a32,a33,b3)
          // 3)---------------------------------------------------------------------
          var divider2 = a22 ;
          system[1].a22 = a22 = a22 / divider2;
          system[1].a23 = a23 = a23 / divider2;
          system[1].b2  =  b2 =  b2 / divider2;
    
          document.getElementById('a11_4').innerHTML = a11;
          document.getElementById('a12_4').innerHTML = a12;
          document.getElementById('a13_4').innerHTML = a13;
          document.getElementById('b1_4').innerHTML = b1;
    
          document.getElementById('a21_4').innerHTML = a21;
          document.getElementById('a22_4').innerHTML = a22;
          document.getElementById('a23_4').innerHTML = a23;
          document.getElementById('b2_4').innerHTML = b2;
                document.getElementById('divider2').innerHTML = divider2;
    
          document.getElementById('a31_4').innerHTML = a31;
          document.getElementById('a32_4').innerHTML = a32;
          document.getElementById('a33_4').innerHTML = a33;
          document.getElementById('b3_4').innerHTML = b3;
    
    
          console.log("The result of the third operation")
          console.log(a21,a22,a23,b2);
          // 4)---------------------------------------------------------------------
          document.getElementById('a11_4').innerHTML = a11;
          document.getElementById('a12_4').innerHTML = a12;
          document.getElementById('a13_4').innerHTML = a13;
          document.getElementById('b1_4').innerHTML = b1;
    
          document.getElementById('a21_4').innerHTML = a21;
          document.getElementById('a22_4').innerHTML = a22;
          document.getElementById('a23_4').innerHTML = a23;
          document.getElementById('b2_4').innerHTML = b2;
    
          document.getElementById('a31_4').innerHTML = a31;
          document.getElementById('a32_4').innerHTML = a32;
          document.getElementById('a33_4').innerHTML = a33;
          document.getElementById('b3_4').innerHTML = b3;
    
          // -----------------------------------------------------------------------
          document.getElementById('a21_starp_3').innerHTML = a31;
          document.getElementById('a22_starp_3').innerHTML = a32;
          document.getElementById('a23_starp_3').innerHTML = a33;
          document.getElementById('b2_starp_3').innerHTML = b3;
    
            document.getElementById('a11_starp_3').innerHTML = a11;
    
          var multiplier3 = a32 * -1;
          system[2].a32 = a32 = a22 * multiplier3 + a32;
          system[2].a33 = a33 = a23 * multiplier3 + a33;
          system[2].b3 =  b3 =  b2 * multiplier3 +  b3;
    
          var a22_s = a22 * multiplier3;
          var a23_s = a23 * multiplier3;
          var  b2_s =  b2 * multiplier3;
    
          document.getElementById('a12_starp_3').innerHTML = a22_s;
          document.getElementById('a13_starp_3').innerHTML = a23_s;
          document.getElementById('b1_starp_3').innerHTML = b2_s;
    
    
          document.getElementById('a31_starp_3').innerHTML = a31;
          document.getElementById('a32_starp_3').innerHTML = a32;
          document.getElementById('a33_starp_3').innerHTML = a33;
          document.getElementById('b3_starp_3').innerHTML = b3;
    
    
    
    
          console.log("The result of the fourth operation")
          console.log(a32,a33,b3);
          // 5)
          var divider3 = a33;
          system[2].a33 = a33 = a33 / divider3;
          system[2].b3  =  b3 = b3  / divider3;
    
    
    
          document.getElementById('a11_5').innerHTML = a11;
          document.getElementById('a12_5').innerHTML = a12;
          document.getElementById('a13_5').innerHTML = a13;
          document.getElementById('b1_5').innerHTML = b1;
    
          document.getElementById('a21_5').innerHTML = a21;
          document.getElementById('a22_5').innerHTML = a22;
          document.getElementById('a23_5').innerHTML = a23;
          document.getElementById('b2_5').innerHTML = b2;
    
          document.getElementById('a31_5').innerHTML = a31;
          document.getElementById('a32_5').innerHTML = a32;
          document.getElementById('a33_5').innerHTML = a33;
          document.getElementById('b3_5').innerHTML = b3;
    
          console.log("The result of the fifth operation")
          console.log(a33,b3);
          // 6
          var z = (b3);
          var y = (b2 +(a23*z*-1));
          var x = (b1 + (a12*y*-1)+(a13*z*-1));
    
          document.getElementById('x').innerHTML = 'x=' + x.toFixed(4);
          document.getElementById('y').innerHTML = 'y=' + y.toFixed(4);
          document.getElementById('z').innerHTML = 'z=' + z.toFixed(4);
    
          console.log("y=",y);
          console.log("x=",x);
          console.log("z=",z);
          console.log(system);
          // 7) Parbaude:
          var  firstEquation = ((clonedSystem[0].a11*x)+(clonedSystem[0].a12*y)+(clonedSystem[0].a13*z));
          var secondEquation = ((clonedSystem[1].a21*x)+(clonedSystem[1].a22*y)+(clonedSystem[1].a23*z));
          var  thirdEquation = ((clonedSystem[2].a31*x)+(clonedSystem[2].a32*y)+(clonedSystem[2].a33*z));
    
          var firstEquation = firstEquation.toFixed(4);
          var realAnswer1 = (clonedSystem[0].b1).toFixed(4);
    
          var secondEquation = secondEquation.toFixed(4);
          var realAnswer2 =  (clonedSystem[1].b2).toFixed(4)
    
          var thirdEquation = thirdEquation.toFixed(4);
          var realAnswer3 = (clonedSystem[2].b3).toFixed(4);
    
          /*if(firstEquation==clonedSystem[0].b1){
          document.getElementById('check_1').innerHTML = firstEquation +  '=' + realAnswer1 +'=> the system is compatible';
          }else{
          document.getElementById('check_1').innerHTML = firstEquation +  '=' + realAnswer1 + '=> system is incompatible';
          }
          if (secondEquation==clonedSystem[1].b2){
          document.getElementById('check_2').innerHTML = secondEquation + '=' + realAnswer2 + '=> the system is compatible';
          }else{
          document.getElementById('check_2').innerHTML = secondEquation + '=' + realAnswer2 + '=> system is incompatible';
          }
          if (thirdEquation==clonedSystem[2].b3){
          document.getElementById('check_3').innerHTML = thirdEquation + '=' + realAnswer3 + '=> the system is compatible';
          }else{
          document.getElementById('check_3').innerHTML = thirdEquation + '=' + realAnswer3 + '=> system is incompatible';
          }*/
    
    
                showSteps.style.display = "block";
                endButton.style.display = "block";
    
    
    };