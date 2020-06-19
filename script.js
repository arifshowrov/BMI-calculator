
//marks details



//console.log(MarkBMI);



//document.querySelector('#resultbox ').textContent = MarkBMI; 

//


//document.getSelection('height').value = MarkHeight ;

//var MarkMass  ;
//var MarkHeight ;
// 
//var MarkBMI = MarkMass / ( MarkHeight * MarkHeight);



document.querySelector('.btn').addEventListener('click', function () {
    
    
    


    var MarkHeight =  document.querySelector('.height').value / 3.280  ;
    console.log(MarkHeight);
    
    var MarkMass = 
    document.querySelector('.weight').value;
    console.log(MarkMass);
    
    var MarkBMI =  document.querySelector('#resultbox ').textContent =  MarkMass /  (MarkHeight * MarkHeight) ; 
    
    
});



//var MarkHeight = document.querySelector('.height').value;
//console.log(MarkHeight)
//
//var MarkMass = document.querySelector('.weight').value;
//console.log(MarkHeight)
  

//var MarkMass  ;
//var MarkHeight ;
//var MarkBMI = MarkMass / ( MarkHeight * MarkHeight);











//john's details

//var JohnMass = 80;
//var JohnHeight = 1.58496;
//var JohnBMI = JohnMass / ( JohnHeight * JohnHeight);
//
//console.log(JohnBMI);
//
////comparing bmi
//
//var CompareBMI =  MarkBMI > JohnBMI 
//
//console.log(  'is marks BMI heigher than johns?' + ' ' + 'the answer is' + ' ' + CompareBMI);
