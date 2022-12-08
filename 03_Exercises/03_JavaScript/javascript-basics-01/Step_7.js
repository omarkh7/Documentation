function getshoes(){
    var shoe = document.getElementById("shoe_size").value;
    var birthday = document.getElementById("year").value;
    var result = (((((shoe*2)+5)*50)- birthday)+1766)
    window.alert(result);
}