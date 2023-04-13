let data=[
    {
        name:"Arbaaz Khan",
        disc:`${name} persuing BCA from GNE...`
    },
    {
        name:"Vanshika",
        disc:`${name} persuing Btech from GNE...`
    },
    {
        name:"Irshad Khan",
        disc:`${name} persuing BTech from GNE...`
    },
    {
        name:"Jyot",
        disc:`${name} persuing BCA from GNE...`
    },
    {
        name:"Krish",
        disc:`${name} persuing BCA from GNE...`
    }
];


let main=document.createElement("div");
main.classList.add("flx");
for(let i of data){
    let div=document.createElement("div");
    let head=document.createElement("h1");
        let para=document.createElement("p");

        head.innerText=i.name;
        para.innerText=i.disc;

        main.append(div);
        div.append(head);
        div.append(para);
        div.className="card";
        div.classList.add("rep");
        
        
        document.body.append(div);
}