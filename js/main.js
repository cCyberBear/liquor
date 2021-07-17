$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            360:{
                items: 2,
                margin:0,
            },
            720:{
                items: 3,
                margin:0,

            }
        },
    });
  });

const product = [
    {
        "id":1,
        "name" : "Belasco Llma Cognac",
        "price" : 33.16,
        "img":"images/liquor1.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon>",
        "type": {"new":true,"top":false,"best":false},
    },
    {
        "id":2,
        "name" : "Dry Vineyard Sauvignon",
        "price" : 33.16,
        "img":"images/liquor2.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon>",
        "type": {"new":true,"top":true,"best":true},
    },
    {
        "id":3,
        "name" : "Belasco Llma Cognac",
        "price" : 22.36,
        "img":"images/liquor3.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon>",
        "type": {"new":false,"top":false,"best":true},
    },
    {
        "id":4,
        "name" : "Camus Cognac Borderies XO",
        "price" : 75.58,
        "img":"images/liquor4.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon>",
        "type": {"new":false,"top":true,"best":false},
    },
    {
        "id":5,
        "name" : "Hennessy V.S Cognac",
        "price" : 88.69,
        "img":"images/liquor5.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' name='star'></box-icon>",
        "type": {"new":false,"top":false,"best":false},
    },
    {
        "id":6,
        "name" : "Luctuson Chardonnavy",
        "price" : 166.58,
        "img":"images/liquor6.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' name='star'></box-icon>",
        "type": {"new":true,"top":false,"best":false},
    },
    {
        "id":7,
        "name" : "New Cabernet Sauvignon",
        "price" : 88.69,
        "img":"images/liquor7.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon>",
        "type": {"new":true,"top":true,"best":false},
    },
    {
        "id":8,
        "name" : "Belasco Llma Cognac",
        "price" : 20.05,
        "img":"images/liquor8.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon>",
        "type": {"new":false,"top":true,"best":true},
    },
    {
        "id":9,
        "name" : "Rémy Martin VSOP",
        "price" : 17.74,
        "img":"images/liquor9.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon>",
        "type": {"new":false,"top":false,"best":false},
    },
    {
        "id":10,
        "name" : "Jack Daniel’s Old",
        "price" : 14.65,
        "img":"images/liquor10.png",
        "start" : "<box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon><box-icon color='#bbaa97' size='20px' type='solid' name='star'></box-icon>",
        "type": {"new":false,"top":false,"best":true},
    },

]

product.map((val,idx)=>{
    $(`
    <div class="product" data="${val.id}">
    <div class="item">
      <div class="img">
        <img src="${val.img}" alt="">
      </div>
      <p class="name">${val.name}</p>
      <div class="comment">
        <div class="star">${val.start}</div>
        <p class="price">£${val.price}</p>
      </div>
    </div>
  </div>
    `).appendTo(".products");
    if(idx===0 || idx%2===0){
        var next = product[idx+1];
        $(`
        <div class="box">
            <div class="product" data="${val.id}">
                <div class="item">
                    <div class="img">
                        <img src="${val.img}" alt="">
                    </div>
                    <p class="name">${val.name}</p>
                    <div class="comment">
                        <div class="star">${val.start}</div>
                        <p class="price">£${val.price}</p>
                    </div>
                </div>
            </div>
            <div class="product" data="${next.id}">
                <div class="item">
                    <div class="img">
                        <img src="${next.img}" alt="">
                    </div>
                    <p class="name">${next.name}</p>
                    <div class="comment">
                        <div class="star">${next.start}</div>
                        <p class="price">£${next.price}</p>
                    </div>
                </div>
            </div>
        </div>
        `).appendTo(".owl-carousel");
    }
    if(val.type.new === true){
        $(`
        <div class="item data="${val.id}">
            <div class="img">
                <img src="${val.img}" alt="">
            </div>
            <div class="text">
                <p class="name">${val.name}</p>${val.start}<p class="price">£${val.price}</p>
            </div>
        </div>
        `).appendTo(".new");
    }
    if(val.type.top === true){
        $(`
        <div class="item data="${val.id}">
            <div class="img">
                <img src="${val.img}" alt="">
            </div>
            <div class="text">
                <p class="name">${val.name}</p>${val.start}<p class="price">£${val.price}</p>
            </div>
        </div>
        `).appendTo(".topp");
    }
    if(val.type.best === true){
        $(`
        <div class="item data="${val.id}">
            <div class="img">
                <img src="${val.img}" alt="">
            </div>
            <div class="text">
                <p class="name">${val.name}</p>${val.start}<p class="price">£${val.price}</p>
            </div>
        </div>
        `).appendTo(".best");
    }
})

