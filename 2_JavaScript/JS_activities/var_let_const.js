// Var ==========================
// console.log(batch);
// var batch = "fjp-eng";
// console.log(batch);
// // var batch = "duplicate-fjp"; // re-initialzation is possible
// var batch; // var => memory allocated only once
// console.log(batch);


// let ==========================
// console.log(batch); // Temporal dead zone
// let batch = "fj_eng";
// console.log(batch);
// // let batch = "dup_fj_eng";  // Cannot be re-declared
// // let batch;
// batch = "dup_fj_eng";  // Re-initailization is possible
// console.log(batch);



// const ======================= "constant"
// initialzation is one time
// initialzation && declaration both at one single point
// console.log(batch);  // Temporal dead zone
// const batch = "fj_eng"; 
// console.log(batch);
// batch = "dup_fj_eng"; // Cannot re-initialize
// console.log(batch);
// const batch; // Cannot re-declare
// console.log(batch);