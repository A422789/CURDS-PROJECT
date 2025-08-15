let price=document.getElementById('price')
let taxes=document.getElementById('taxes')
let ads=document.getElementById('ads')
let discount=document.getElementById('discount')
let total=document.getElementById('total')
let tittle=document.getElementById('tittle')
let count=document.getElementById('count')
let category=document.getElementById('category')
let submit=document.getElementById('submit')
let deletAll=document.getElementById('delAll')
let search=document.getElementById('search')
let table ;


let newproducts;
let tmp;
let mode='Creat';
if(localStorage.getItem('newproducts')){
    newproducts=JSON.parse(localStorage.getItem('newproducts'))
}else{
    newproducts=[];
}

function totalprice(){
    if(price.value!==''){
        let ruslt =(+price.value+ +taxes.value + +ads.value)- +discount.value;
        total.innerHTML =ruslt
        total.style.background='green'

    }
    else{
        total.innerHTML='';
    }
} ;
submit.onclick=function create(){
    let product ={
        tittle: tittle.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    if(mode==='Creat'){
           if(product.count > 1){
        for(let i=0; i<product.count;i++){
           newproducts.push(product)
        }
     }else{
        newproducts.push(product)
     }

    }
    else{
        newproducts[tmp]=(product);
            mode = 'Creat'
            submit.innerHTML = 'Creat'
            count.classList.remove('hide');
    }
            
          localStorage.setItem('newproducts',JSON.stringify(newproducts))
     cleardata();
       showdata();
 }
 function cleardata(){
     price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
    tittle.value='';
 }
    function showdata(){
         table = '';
             for(let i=0; i<newproducts.length;i++){
                     table +=`<tr>
                     <td>${i+1}</td>
                     <td>${newproducts[i].tittle}</td>
                     <td>${newproducts[i].price}</td>
                     <td>${newproducts[i].taxes}</td>
                     <td>${newproducts[i].ads}</td>
                     <td>${newproducts[i].discount}</td>
                     <td>${newproducts[i]. total}</td>
                     <td>${newproducts[i].category}</td>
                     <td><button id="delete" onclick="deleteproduct(${i})">Delete</button></td>
                     <td><button id="Update" onclick="updateproduct(${i})">Update</button></td>
                     </tr>
                  ` }
                         let del=document.getElementById('del')
                       document.getElementById('table').innerHTML= table;
                  if(newproducts.length > 0){
         
              del.innerHTML=`<button id="delAll" onclick="dellAll()">Delet All(${newproducts.length})</button>`
              
        }else{
            del.innerHTML=''
        }
   
                   
    }
    showdata();

      function deleteproduct(i){
            newproducts.splice(i,1);
            localStorage.setItem('newproducts',JSON.stringify(newproducts))
             showdata();

      }
      function updateproduct(i){
      
        count.classList.add('hide');
        submit.innerHTML='Update';
        mode='Update';
        tittle.value=newproducts[i].tittle;
        price.value=newproducts[i].price;
        taxes.value=newproducts[i].taxes;
        ads.value=newproducts[i].ads;
        discount.value=newproducts[i].discount;
        category.value=newproducts[i].category;
        totalprice();
        scroll({
            top:0,
            behavior: 'smooth'
        }) 
         tmp=i;  
        
    }
       function dellAll(){
             newproducts = [];
            localStorage.setItem('newproducts', JSON.stringify(newproducts));
            document.getElementById('del').innerHTML = '';
            showdata();
        }
function searchdata(id){
    search.classList.remove('hide')
  
    if(id==='Search by Title'){
         search.placeholder=id
        search.onkeyup=function(){
            let table=''
            for(let i=0;i<newproducts.length;i++){
                if(newproducts[i].tittle.includes(search.value)){
                    
                    table +=`<tr>
                     <td>${i+1}</td>
                     <td>${newproducts[i].tittle}</td>
                     <td>${newproducts[i].price}</td>
                     <td>${newproducts[i].taxes}</td>
                     <td>${newproducts[i].ads}</td>
                     <td>${newproducts[i].discount}</td>
                     <td>${newproducts[i]. total}</td>
                     <td>${newproducts[i].category}</td>
                     <td><button id="delete" onclick="deleteproduct(${i})">Delete</button></td>
                     <td><button id="Update" onclick="updateproduct(${i})">Update</button></td>
                     </tr>`
                                           }
            }
                 
            
            document.getElementById('table').innerHTML= table;
        }
    }
else{
     search.placeholder=id
        search.onkeyup=function(){
            let table=''
            for(let i=0;i<newproducts.length;i++){
                if(newproducts[i].category.includes(search.value)){
                    
                    table +=`<tr>
                     <td>${i+1}</td>
                     <td>${newproducts[i].tittle}</td>
                     <td>${newproducts[i].price}</td>
                     <td>${newproducts[i].taxes}</td>
                     <td>${newproducts[i].ads}</td>
                     <td>${newproducts[i].discount}</td>
                     <td>${newproducts[i]. total}</td>
                     <td>${newproducts[i].category}</td>
                     <td><button id="delete" onclick="deleteproduct(${i})">Delete</button></td>
                     <td><button id="Update" onclick="updateproduct(${i})">Update</button></td>
                     </tr>`
                                           }
            }
                 
            
            document.getElementById('table').innerHTML= table;
        }
}
 
}