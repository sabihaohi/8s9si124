import zim from "https://zimjs.org/cdn/016/zim";
const{Frame,Reactangle,Circle,Label} = zim;
const frame = new Frame(FIT,1920,1080,"#e6f4f7");

frame.on("ready",()=>{

   
var reactionEmitter = new Emitter({
	obj:new Circle(50, "gray",""),
	force:4.5,
	gravity:1.5,
}).center();


 const cao = new Circle(50,"#2CAAE2").pos(300,70).drag();
 label("coa",cao)
 const H20 = new Circle(50,"#2CAAE2").pos(700,170).drag();
 label("H20",H20)

 const NH3 = new Circle(50,"#2CAAE2").pos(900,60).drag();
 label("NH3",NH3)

 const HCL =   new Circle(50,"#2CAAE2").pos(1200,280).drag();
 label("HCL",HCL)

 const NAOH =  new Circle(50,"#2CAAE2").pos(1500,590).drag();
 label("NAOH",NAOH)

 const Mg=  new Circle(50,"#2CAAE2").pos(1800,340).drag();
 label("Mg",Mg)

 const Zn =  new Circle(50,"#2CAAE2").pos(200,500).drag();
 label("Zn",Zn)

 const H2SO4 =  new Circle(50,"#2CAAE2").pos(300,650).drag();
 label("H2SO4",H2SO4);

 const CaOH2 =  new Circle(50,"#2CAAE2").center().drag();
 label("Ca(OH)2",CaOH2)



 function label(text,pos){
    new Label({
        text:text,
        size:25,
        color:white,
        rollColor:red,
        bold:true,
     }).center(pos);
 }
 
  
 cao.on("click",()=>{
    if(cao.hitTestCircle(H20)){
        console.log("hit");
        cao.animate({
            target:cao,
            props:{ 
              x:300,
              y:70
            },
            time:2
        })
    }
})


 


})