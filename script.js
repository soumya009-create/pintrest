let arr=[
    {name: "flower", image: "https://i.pinimg.com/1200x/76/f1/27/76f1273500ae05c33415a0d1dcc3be59.jpg"},
    {name: "softoy", image: "https://i.pinimg.com/736x/3a/84/fc/3a84fc4f4ccd04d82715fc377c5e2171.jpg"},
    {name: "teddy", image: "https://i.pinimg.com/736x/6e/92/70/6e927031cd869fb6218d3fdab639d7dc.jpg"},
    {name: "plant", image: "https://i.pinimg.com/736x/db/7c/c6/db7cc61366f7ae78889e59a3f79a49ff.jpg"},
    {name: "hi", image: "https://i.pinimg.com/736x/9b/b5/ee/9bb5ee52189f4dcc9fd8b99b186648f8.jpg"}, 
    {name: "by", image: "https://i.pinimg.com/1200x/bc/30/d1/bc30d175803091aa880be79720c77c52.jpg"},

    {name: "cute", image: "https://i.pinimg.com/1200x/b7/e8/aa/b7e8aaff12f48517496e5b2bc63bb635.jpg"},
     {name: "soft", image: "https://i.pinimg.com/1200x/91/c6/0a/91c60ac1c54285fde5c621d2ad79ec51.jpg"},
      {name: "toy", image: "https://i.pinimg.com/736x/ea/c6/43/eac643f1c1e5518ccb3491e30c993bed.jpg"},
    {name: "softteddy", image: "https://i.pinimg.com/736x/b9/86/73/b9867380eed0d513b351293b956ee7de.jpg"},
    {name: "hhuii", image: "https://i.pinimg.com/736x/0a/83/c3/0a83c3775334cae390a64a527ed6f672.jpg"},
    {name: "bear", image: "https://i.pinimg.com/1200x/16/5b/49/165b499ae121491df5117376631f3659.jpg"},
    {name: "bags", image: "https://i.pinimg.com/1200x/09/c3/e7/09c3e71c3ffceec7e7f5633260b659f9.jpg"},
    {name: "baggy-bags", image: "https://i.pinimg.com/736x/bc/64/46/bc64461fa6e7cfa781390604397ab65b.jpg"},
    {name: "etchnic", image: "https://i.pinimg.com/736x/d5/cb/a3/d5cba33531900c35d2f2a708e26cc8ec.jpg"},
    {name: "by", image: "https://i.pinimg.com/736x/7f/96/92/7f9692f530c9b3ef61eec98ba790a04a.jpg"},
    {name: "dude", image: "https://i.pinimg.com/736x/48/9d/f5/489df5d4de251af5aa5828538ca8d15e.jpg"}
]

function uploadpictures(){
let clutter="";
 arr.forEach(function(dets){
    clutter+=` <div class="box">
                        <img src="${dets.image}" alt="">
                    </div> `
})
   document.querySelector(".container").innerHTML=clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}
handleSearchFunctionality();
uploadpictures();
