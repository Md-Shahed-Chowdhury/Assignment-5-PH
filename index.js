let heartIcons = document.getElementsByClassName('heart-icon');
for(let item of heartIcons)
{
    item.addEventListener('click',function()
{
    let heartCount=parseInt(document.getElementById('heart-count').innerText);
    heartCount++;
    document.getElementById('heart-count').innerText = heartCount;
})
}
function call(a){
    
    document.getElementById(a+'-call').addEventListener('click',function()
{
    let service = document.getElementById(a+'-service').innerText;
    let number = document.getElementById(a+'-number').innerText;
    let serviceTitle = document.getElementById(a+'-service-title').innerText; 
    let coinCount = parseInt(document.getElementById('coin-count').innerText);
    if(coinCount<=0){
        alert('Cannot call.20 coins are required');
        return;
    }
    else{
        
        alert(`Calling ${service} by ${number}...`);
        coinCount-=20;
        document.getElementById('coin-count').innerText =  coinCount;
        let historyChild = document.createElement('div');
        historyChild.classList.add('flex' ,'justify-between', 'items-center', 'bg-gray-100', 'md:p-3','sm:p-2','p-3' ,'rounded-xl');
        historyChild.innerHTML=`
        <div>
            <p class="font-semibold">${serviceTitle}</p>
            <p>${number}</p>
        </div>
        <div>${new Date().toLocaleTimeString('en-US', { hour12: true })}</div>
        `
        document.getElementById('history').appendChild(historyChild);
    }
});

document.getElementById(a+'-copy').addEventListener('click',function(){
    let number = document.getElementById(a+'-number').innerText;
    navigator.clipboard.writeText(number);
    alert(`Number ${number} has been copied`);
    let copyCount = document.getElementById('copy-count').innerText;
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
});
}
call('emergency');
call('police');
call('fire');
call('ambulance');
call('women');
call('anti');
call('electricity');
call('brac');
call('rail');







