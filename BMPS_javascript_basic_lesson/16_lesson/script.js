 const massMark - 78;
 const heightMark = 1.69;
 const massJohn - 92;
 const heightJohn = 1.95;

 //BMl  - moss / height ** 2 - moss/(height * height)
 const BMIMark - massMark / heightMark ** 2;
 const BMIJohn = massJohn / (heightJohn * heightJohn);
 const markHeigherJohn = BMIMark > BMIJohn;

 console.log(BMIMark, BMIJohn , markHeigherJohn);