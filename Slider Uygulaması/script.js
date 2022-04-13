var models = [
    {
        name: "bmw",
        img: "",// You must Upload Any İmage
        link: "https://tr.wikipedia.org/wiki/Anasayfa"

    },
    {
        name: "audi",
        img: "",// You must Upload Any İmage
        link: "https://tr.wikipedia.org/wiki/Anasayfa"

    },
    {
        name: "mercedes",
        img: "",// You must Upload Any İmage
        link: "https://tr.wikipedia.org/wiki/Anasayfa"

    },
    {
        name: "volswagen",
        img: "",// You must Upload Any İmage
        link: "https://tr.wikipedia.org/wiki/Anasayfa"

    },
    {
        name: "porsche",
        img: "",// You must Upload Any İmage
        link: "https://tr.wikipedia.org/wiki/Anasayfa"

    }
];
var index = 0;
var slaytCount = models.length;
var settings =  {
        duration : "500",
        random : true,
};
var interval;

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});



function init(settings){
    var prev;
    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random() *  slaytCount);
            }while(index == prev);
            prev = index;

            //random index
            
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            index++;
        };
        showSlide(index);

    },settings.duration)
}
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    });
})
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    });
})
function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].img);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}