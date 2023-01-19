    function calcular(event){
       event.preventDefault();
       let bill = document.getElementById('bill').value;
       let serviceQual = document.getElementById('serviceQual').value;
       let people = document.getElementById('people').value;

       if(bill == '' | serviceQual == 0){
        alert('Por favror, preencha os valores!')
        return;
       }
       if(people == '' | people <= 1 ){
        people = 1; 
        document.getElementById('each').style.display = 'none';
       } else {
        document.getElementById('each').style.display = 'block';
       }
       let total = (bill * serviceQual) / people;
       total = total.toFixed(2);
       document.getElementById('tip').innerHTML = total;
       document.getElementById('total').style.display = "block";
    }
    

    document.getElementById('total').style.display = "none";
    document.getElementById('each').style.display = "none";

    document.getElementById("tipsForm").addEventListener('submit', calcular);

