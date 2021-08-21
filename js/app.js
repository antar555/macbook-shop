function memoryPrice(memoryAmount){
    const extraMemory= document.getElementById('extra-memory');

    if(memoryAmount=='8gb'){
       const extraMemoryCost=0
       extraMemory.innerText=extraMemoryCost;
   }
   
    else if(memoryAmount=='16gb'){
        const extraMemoryCost=180
        extraMemory.innerText=extraMemoryCost;
   }

 
}
function storagePrice(storageAmount){
   const extraStorage= document.getElementById('extra-storage');
   if(storageAmount=='256gb'){
       const extraStorageCost=0;
       extraStorage.innerText=extraStorageCost;
   }
   else if(storageAmount=='512gb'){
    const extraStorageCost=100;
    extraStorage.innerText=extraStorageCost;
       
   }
   else if(storageAmount=='1tb'){
    const extraStorageCost=180;
    extraStorage.innerText=extraStorageCost;
       
   }
}

function delivery(deliveryDate){
    const deliveryCharge= document.getElementById('delivery');
    if(deliveryDate=='25'){
        const deliveryCost=0;
        deliveryCharge.innerText=deliveryCost;
    }
    else if(deliveryDate=='21'){
        const deliveryCost=20;
        deliveryCharge.innerText=deliveryCost;

    }


}

function totalPrice(){
    const memoryAmount=document.getElementById('extra-memory');
    
    const memoryAmountTex=memoryAmount.innerText;
    
    const memoryPrice=parseInt(memoryAmountTex);



    const storageAmount=document.getElementById('extra-storage');

    
    const storageAmountText=storageAmount.innerText;

    const storagePrice=parseInt(storageAmountText);

    const deliveryCostAmount= document.getElementById('delivery');

    const deliveryPriceText=deliveryCostAmount.innerText;

    const deliveryPrice=parseInt(deliveryPriceText);

    const basePriceAmount=document.getElementById('base-price');

    const basePriceAmountText=basePriceAmount.innerText;

    const basePrice= parseInt(basePriceAmountText);

    const totalPrice=basePrice+ memoryPrice+storagePrice+deliveryPrice;

    const totalPriceAmount=document.getElementById('total-price');

    totalPriceAmount.innerText= totalPrice;

    const totalGrand= document.getElementById('total-grand');
    totalGrand.innerText=totalPrice;
    


}






document.getElementById('memory-8gb').addEventListener('click',function(){
   memoryPrice('8gb');
   totalPrice();
  
});

document.getElementById('memory-16gb').addEventListener('click',function(){
    memoryPrice('16gb');
    totalPrice();
    
   
});

document.getElementById('storage-256gb').addEventListener('click',function(){
    storagePrice('256gb');
    totalPrice();
   
});

document.getElementById('storage-512gb').addEventListener('click',function(){
    storagePrice('512gb');
    totalPrice();
   
});

document.getElementById('storage-1tb').addEventListener('click',function(){
    storagePrice('1tb');
    totalPrice();
   
});
document.getElementById('delivery-25').addEventListener('click',function(){
    delivery('25');
    totalPrice();
   
});
document.getElementById('delivery-21').addEventListener('click',function(){
    delivery('21');
    totalPrice();
   
});

document.getElementById('apply-button').addEventListener('click',function(){
    const totalPriceAmount=document.getElementById('total-price');

    const totalPriceAmountText=totalPriceAmount.innerText;

    const total= parseInt(totalPriceAmountText);
   
    const couponCode=document.getElementById('coupon');
    
    if(couponCode.value=='stevekaku'){
        const grandTotal= total-total*.2;
        const totalGrand= document.getElementById('total-grand');
        totalGrand.innerText=grandTotal;
       
    }
    else if(couponCode.value==''){
        const grandTotal= total;
        const totalGrand= document.getElementById('total-grand');
        totalGrand.innerText=grandTotal;

    }
    else if(couponCode.value!='stevekaku'){
        alert('you have entered wrong number');
    }
        
    

    
})