const totalBtn = document.getElementsByClassName('seats');
let count = 0;
for (const btn of totalBtn) {
    btn.addEventListener('click', function (event) {
        if(count>=4){
            alert('You can not select more than 4 seats');
             totalBtn.forEach(function(button){
                button.setAttribute('disabled',true);
             });
        }
        count++;
        if(count>0){
            document.getElementById('applyBtn').removeAttribute('disabled');
        }
        //baki seat count kortesi
        const remainingSeat = document.getElementById('remaining-seat').innerText;
        let remaining=parseInt(remainingSeat);
        remaining--;
        document.getElementById('remaining-seat').innerText=remaining;
        // barti seat
        const totalSeat = document.getElementById('total-selected-seat').innerText;
        let total=parseInt(totalSeat);
        total++;
        document.getElementById('total-selected-seat').innerText= total;
       
       

        document.getElementById('total').innerText=count*550;
        document.getElementById('grandTotal').innerText=count*550;

        let sobuj=event.target;
        sobuj.style.backgroundColor='#1DD100';
        sobuj.style.color='white';

        let seatCount=event.target.innerText;
         showSeat(seatCount);















        btn.setAttribute('disabled',true);

    });




}

function setCoupon(){
    const taka=document.getElementById('grandTotal').innerText;
    let taka1=parseInt(taka);
    const kupon=document.getElementById('myCoupon').value;

    if(kupon==='NEW15'){
        taka1=taka1-(0.15*taka1);
        document.getElementById('grandTotal').innerText=taka1;
        const kuponHidden=document.getElementById('kupon');
        kuponHidden.classList.add('hidden');

    }
    else if(kupon==='Couple 20'){
        taka1=taka1-(0.2*taka1);
        document.getElementById('grandTotal').innerText=taka1;
        const kuponHidden=document.getElementById('kupon');
        kuponHidden.classList.add('hidden');

    }
    else{
        alert('You entered a wrong coupon');
    }

}
function nextBtn(){
    const a=document.getElementById('section1');
    a.classList.add('hidden');
    const b=document.getElementById('section2');
    b.classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');
}
function exitTicket(){
    document.getElementById('success').addEventListener('click',function(event){
        location.reload();
    });
}

function showSeat(s){
    let seatNumber =document.createElement('div');
    seatNumber.classList.add('flex','justify-between');

    let seatNo=document.createElement('p');
    let seatClass=document.createElement('p');
    let seatPrice=document.createElement('p');

    seatNo.innerText=s;
    seatClass.innerText='Economy';
    seatPrice.innerText='550';
    
    seatNumber.appendChild(seatNo);
    seatNumber.appendChild(seatClass);
    seatNumber.appendChild(seatPrice);
    
    document.getElementById('seat-number').appendChild(seatNumber);


}