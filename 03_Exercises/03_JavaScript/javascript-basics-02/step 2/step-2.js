const name1 =document.querySelector("#name");
name1.addEventListener('blur',(blur)=>{
    const val =blur.target.value
    alert("thank you for participating!");
console.log(val);
});