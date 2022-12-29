const button=document.getElementById("button");
const aa=document.getElementById("aa");
const bb=document.getElementById("bb");
const cc=document.getElementById("cc");
const dd=document.getElementById("dd");
const ee=document.getElementById("ee");
const ff=document.getElementById("ff");
const gg=document.getElementById("gg");
const hh=document.getElementById("hh");
const ii=document.getElementById("ii");
const uee=document.getElementById("uee");
const sitaa=document.getElementById("sitaa");
const migii=document.getElementById("migii");
const hidarii=document.getElementById("hidarii");
const haisyy=document.getElementById("haisyy");
const bunsyou=document.getElementById("bunsyou");
const hosoku=document.getElementById("hosoku");
const tugihe=document.getElementById("tugi");
const a=document.getElementById("a");
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");
const f=document.getElementById("f");
const g=document.getElementById("g");
const h=document.getElementById("h");
const i=document.getElementById("i");
const j=document.getElementById("j");
const k=document.getElementById("k");
const l=document.getElementById("l");
const m=document.getElementById("m");
const n=document.getElementById("n");
const o=document.getElementById("o");
const p=document.getElementById("p");
const q=document.getElementById("q");
const r=document.getElementById("r");
const s=document.getElementById("s");
const t=document.getElementById("t");
const u=document.getElementById("u");
const v=document.getElementById("v");
const w=document.getElementById("w");
const x=document.getElementById("x");
const y=document.getElementById("y");
const z=document.getElementById("z");
const zz=document.getElementById("zz");
const rogoma=document.getElementById("rogoma");
const kokonikaku=document.getElementById("kokonikaku");
const tekiyou=document.getElementById("tekiyouya");
const mouitido=document.getElementById("mouitido");
const sukura=document.getElementById("sukura");
const kikann=document.getElementById("kikann");
const ueniku=document.getElementById("ueniku");
const hidariniku=document.getElementById("hidariniku");
const maeniku=document.getElementById("maeniku");
const ezzi=[0,2,4,6,0,2,4];
const kounaa=[0,3,6,9,0,3,6]
var nasake='';
var konaina=10;
var sukippu=0;
var hourensouda=[];
var mutyakutyayaruwa=0;
var zyoutaihaaku=0;
const annnakoto=[a,b,c,d,e,f,g,h,i];
const konnnakoto=[j,k,l,m,n,o,p,q,r];
const iinaiina=[s,t,u,v,w,x,y,z,zz];
var koredake=0;
var ezzikana=[];
var kounaakana=[];
var zyoutaiizyou=[0,0,0];
const suuzidatte=[8,7,6,5,4,3,2,1,0];
const raretusureba=[2,5,8,1,4,7,0,3,6];
const yakudatuda=[6,3,0,7,4,1,8,5,2];
var siro=[6,6,6,6,0,6,6,6,6];
var aka=[6,6,6,6,1,6,6,6,6];
var ao=[6,6,6,6,2,6,6,6,6];
var daidai=[6,6,6,6,3,6,6,6,6];
var midori=[6,6,6,6,4,6,6,6,6];
var kiiro=[6,6,6,6,5,6,6,6,6];
var maedato=[0,0,0,0,0,0,0,0,0];
var usirodato=[0,0,0,0,0,0,0,0,0];
var uedato=[0,0,0,0,0,0,0,0,0];
var sitadato=[0,0,0,0,0,0,0,0,0];
var migidato=[0,0,0,0,0,0,0,0,0];
var hidaridato=[0,0,0,0,0,0,0,0,0];
var haisyoku=0;
var zyoutai=0;//0=siro 1=aka 2=ao 3=daidai 4=midori 5=ki
const idraretune=[aa,bb,cc,dd,ee,ff,gg,hh,ii];
var idraretu=[siro,aka,ao,daidai,midori,kiiro];
inne();
sukura.onclick=()=>{
    if(koredake===0){
        koredake=10;
        document.getElementsByClassName('atara')[0].classList.toggle('visi');
    }else if(koredake===10){
        koredake=0;
        document.getElementsByClassName('atara')[0].classList.toggle('visi');
    }
    nasake='';
    kokonikaku.innerText='';
    hourensouda=[];
    for (let tukuru = 0; tukuru < 20; tukuru++) {
        tukuttemita();
    }
}
aa.onclick=()=>{
    if(zyoutai===0){
        if(siro[0]===6){
            siro[0]=0;
        }else{
            siro[0]++;
        }
    }else if(zyoutai===1){
        if(aka[0]===6){
            aka[0]=0;
        }else{
            aka[0]++;
        }
    }else if(zyoutai===2){
        if(ao[0]===6){
            ao[0]=0;
        }else{
            ao[0]++;
        }
    }else if(zyoutai===3){
        if(daidai[0]===6){
            daidai[0]=0;
        }else{
            daidai[0]++;
        }
    }else if(zyoutai===4){
        if(midori[0]===6){
            midori[0]=0;
        }else{
            midori[0]++;
        }
    }else if(zyoutai===5){
        if(kiiro[0]===6){
            kiiro[0]=0;
        }else{
            kiiro[0]++;
        }
    }
    inne();
}
bb.onclick=()=>{
    if(zyoutai===0){
        if(siro[1]===6){
            siro[1]=0;
        }else{
            siro[1]++;
        }
    }else if(zyoutai===1){
        if(aka[1]===6){
            aka[1]=0;
        }else{
            aka[1]++;
        }
    }else if(zyoutai===2){
        if(ao[1]===6){
            ao[1]=0;
        }else{
            ao[1]++;
        }
    }else if(zyoutai===3){
        if(daidai[1]===6){
            daidai[1]=0;
        }else{
            daidai[1]++;
        }
    }else if(zyoutai===4){
        if(midori[1]===6){
            midori[1]=0;
        }else{
            midori[1]++;
        }
    }else if(zyoutai===5){
        if(kiiro[1]===6){
            kiiro[1]=0;
        }else{
            kiiro[1]++;
        }
    }
    inne();
}
cc.onclick=()=>{
    if(zyoutai===0){
        if(siro[2]===6){
            siro[2]=0;
        }else{
            siro[2]++;
        }
    }else if(zyoutai===1){
        if(aka[2]===6){
            aka[2]=0;
        }else{
            aka[2]++;
        }
    }else if(zyoutai===2){
        if(ao[2]===6){
            ao[2]=0;
        }else{
            ao[2]++;
        }
    }else if(zyoutai===3){
        if(daidai[2]===6){
            daidai[2]=0;
        }else{
            daidai[2]++;
        }
    }else if(zyoutai===4){
        if(midori[2]===6){
            midori[2]=0;
        }else{
            midori[2]++;
        }
    }else if(zyoutai===5){
        if(kiiro[2]===6){
            kiiro[2]=0;
        }else{
            kiiro[2]++;
        }
    }
    inne();
}
dd.onclick=()=>{
    if(zyoutai===0){
        if(siro[3]===6){
            siro[3]=0;
        }else{
            siro[3]++;
        }
    }else if(zyoutai===1){
        if(aka[3]===6){
            aka[3]=0;
        }else{
            aka[3]++;
        }
    }else if(zyoutai===2){
        if(ao[3]===6){
            ao[3]=0;
        }else{
            ao[3]++;
        }
    }else if(zyoutai===3){
        if(daidai[3]===6){
            daidai[3]=0;
        }else{
            daidai[3]++;
        }
    }else if(zyoutai===4){
        if(midori[3]===6){
            midori[3]=0;
        }else{
            midori[3]++;
        }
    }else if(zyoutai===5){
        if(kiiro[3]===6){
            kiiro[3]=0;
        }else{
            kiiro[3]++;
        }
    }
    inne();
}
ff.onclick=()=>{
    if(zyoutai===0){
        if(siro[5]===6){
            siro[5]=0;
        }else{
            siro[5]++;
        }
    }else if(zyoutai===1){
        if(aka[5]===6){
            aka[5]=0;
        }else{
            aka[5]++;
        }
    }else if(zyoutai===2){
        if(ao[5]===6){
            ao[5]=0;
        }else{
            ao[5]++;
        }
    }else if(zyoutai===3){
        if(daidai[5]===6){
            daidai[5]=0;
        }else{
            daidai[5]++;
        }
    }else if(zyoutai===4){
        if(midori[5]===6){
            midori[5]=0;
        }else{
            midori[5]++;
        }
    }else if(zyoutai===5){
        if(kiiro[5]===6){
            kiiro[5]=0;
        }else{
            kiiro[5]++;
        }
    }
    inne();
}
gg.onclick=()=>{
    if(zyoutai===0){
        if(siro[6]===6){
            siro[6]=0;
        }else{
            siro[6]++;
        }
    }else if(zyoutai===1){
        if(aka[6]===6){
            aka[6]=0;
        }else{
            aka[6]++;
        }
    }else if(zyoutai===2){
        if(ao[6]===6){
            ao[6]=0;
        }else{
            ao[6]++;
        }
    }else if(zyoutai===3){
        if(daidai[6]===6){
            daidai[6]=0;
        }else{
            daidai[6]++;
        }
    }else if(zyoutai===4){
        if(midori[6]===6){
            midori[6]=0;
        }else{
            midori[6]++;
        }
    }else if(zyoutai===5){
        if(kiiro[6]===6){
            kiiro[6]=0;
        }else{
            kiiro[6]++;
        }
    }
    inne();
}
hh.onclick=()=>{
    if(zyoutai===0){
        if(siro[7]===6){
            siro[7]=0;
        }else{
            siro[7]++;
        }
    }else if(zyoutai===1){
        if(aka[7]===6){
            aka[7]=0;
        }else{
            aka[7]++;
        }
    }else if(zyoutai===2){
        if(ao[7]===6){
            ao[7]=0;
        }else{
            ao[7]++;
        }
    }else if(zyoutai===3){
        if(daidai[7]===6){
            daidai[7]=0;
        }else{
            daidai[7]++;
        }
    }else if(zyoutai===4){
        if(midori[7]===6){
            midori[7]=0;
        }else{
            midori[7]++;
        }
    }else if(zyoutai===5){
        if(kiiro[7]===6){
            kiiro[7]=0;
        }else{
            kiiro[7]++;
        }
    }
    inne();
}
ii.onclick=()=>{
    if(zyoutai===0){
        if(siro[8]===6){
            siro[8]=0;
        }else{
            siro[8]++;
        }
    }else if(zyoutai===1){
        if(aka[8]===6){
            aka[8]=0;
        }else{
            aka[8]++;
        }
    }else if(zyoutai===2){
        if(ao[8]===6){
            ao[8]=0;
        }else{
            ao[8]++;
        }
    }else if(zyoutai===3){
        if(daidai[8]===6){
            daidai[8]=0;
        }else{
            daidai[8]++;
        }
    }else if(zyoutai===4){
        if(midori[8]===6){
            midori[8]=0;
        }else{
            midori[8]++;
        }
    }else if(zyoutai===5){
        if(kiiro[8]===6){
            kiiro[8]=0;
        }else{
            kiiro[8]++;
        }
    }
    inne();
}
haisyy.onclick=()=>{
    if(haisyoku===1){
        haisyoku=0;
        haisyy.innerText='';
        haisyy.innerText='世界配色';
        haisyy.style.backgroundColor='yellow';
        haisyy.style.color='black';
        bunsyou.innerText='';
        hosoku.innerText='';
        bunsyou.innerText='世界配色です';
        hosoku.innerText='※白のセンターキューブの反対が黄色となっています。確認してください。';
        inne();
    }else{
        haisyoku=1;
        haisyy.innerText='';
        haisyy.innerText='日本配色';
        haisyy.style.backgroundColor='blue';
        haisyy.style.color='white';
        bunsyou.innerText='';
        hosoku.innerText='';
        bunsyou.innerText='日本配色です';
        hosoku.innerText='※白のセンターキューブの反対が青色となっています。確認してください。';
        inne();
    }
}
uee.onclick=()=>{
    ueya();
}
sitaa.onclick=()=>{
    sitaya();
}
migii.onclick=()=>{
    migiya();
}
hidarii.onclick=()=>{
    hidariya();
}
tugihe.onclick=()=>{
    hyouzisitadesyou();
    if(hourensouda.length===0){
        hanndannnihairu();
        hanndannkizyunn();
    }
    ugokasitadesyou();
    inonotarou();
}
window.addEventListener("load", function(e){
    window.addEventListener('keydown', function(e){
        var code = e.Code;
        switch(code) {
            case 37: // ←
            case 38: // ↑
            case 39: // →
            case 40: // ↓
            e.preventDefault();
    }
    });
})
document.onkeydown=function(e){
    if(e.key==='ArrowUp'){
        ueya();
    }else if(e.key==='ArrowDown'){
        sitaya();
    }else if(e.key==='ArrowRight'){
        migiya();
    }else if(e.key==='ArrowLeft'){
        hidariya();
    }
}
function ueya(){
    if(zyoutai===0){
        zyoutai=2;
    }else if(zyoutai===5){
        zyoutai=4;
    }else{
        zyoutai=0;
    }
    inne();
}
function sitaya(){
    if(zyoutai===0){
        zyoutai=4;
    }else if(zyoutai===5){
        zyoutai=2;
    }else{
        zyoutai=5;
    }
    inne();
}
function migiya(){
    if(zyoutai===1){
        zyoutai=2;
    }else if(zyoutai===2){
        zyoutai=3;
    }else if(zyoutai===3){
        zyoutai=4;
    }else{
        zyoutai=1;
    }
    inne();
}
function hidariya(){
    if(zyoutai===1){
        zyoutai=4;
    }else if(zyoutai===2){
        zyoutai=1;
    }else if(zyoutai===3){
        zyoutai=2;
    }else{
        zyoutai=3;
    }
    inne();
}
function inne(){
    idraretu=[siro,aka,ao,daidai,midori,kiiro];
    kikann.innerText='';
    for (let ko = 0; ko < idraretune.length; ko++) {
        const pa=idraretu[zyoutai][ko];
        const papa=idraretune[ko];
        if(pa===0){
            papa.style.backgroundColor='white';
            if(ko===4){
                rogoma.style.display='block';
            }
        }else if(pa===1){
            papa.style.backgroundColor='red';
            if(ko===4){
                rogoma.style.display='none';
                kikann.innerText='赤';
            }
        }else if(pa===2){
            if(haisyoku===1){
                papa.style.backgroundColor='yellow';
                if(ko===4){
                    rogoma.style.display='none';
                    kikann.innerText='黄';
                }
            }else{
                papa.style.backgroundColor='blue';
                if(ko===4){
                    rogoma.style.display='none';
                    kikann.innerText='青';
                }
            }
        }else if(pa===3){
            papa.style.backgroundColor='orange';
            if(ko===4){
                rogoma.style.display='none';
                kikann.innerText='橙';
            }
        }else if(pa===4){
            papa.style.backgroundColor='green';
            if(ko===4){
                rogoma.style.display='none';
                kikann.innerText='緑';
            }
        }else if(pa===5){
            if(haisyoku===1){
                papa.style.backgroundColor='blue';
                if(ko===4){
                    rogoma.style.display='none';
                    kikann.innerText='青';
                }
            }else{
                papa.style.backgroundColor='yellow';
                if(ko===4){
                    rogoma.style.display='none';
                    kikann.innerText='黄';
                }
            }
        }else if(pa===6){
            papa.style.backgroundColor='silver';
        }
    }
    if (zyoutai===0) {
        if(haisyoku===1){
            uee.style.backgroundColor='yellow';
        }else{
            uee.style.backgroundColor='blue';
        }
        sitaa.style.backgroundColor='green';
        migii.style.backgroundColor='red';
        hidarii.style.backgroundColor='orange';
    } else if(zyoutai===1) {
        uee.style.backgroundColor='white';
        if(haisyoku===1){
            sitaa.style.backgroundColor='blue';
            migii.style.backgroundColor='yellow';
        }else{
            sitaa.style.backgroundColor='yellow';
            migii.style.backgroundColor='blue';
        }
        hidarii.style.backgroundColor='green';
    } else if(zyoutai===2) {
        uee.style.backgroundColor='white';
        if(haisyoku===1){
            sitaa.style.backgroundColor='blue';
        }else{
            sitaa.style.backgroundColor='yellow';
        }
        migii.style.backgroundColor='orange';
        hidarii.style.backgroundColor='red';
    } else if(zyoutai===3) {
        uee.style.backgroundColor='white';
        if(haisyoku===1){
            sitaa.style.backgroundColor='blue';
            hidarii.style.backgroundColor='yellow';
        }else{
            sitaa.style.backgroundColor='yellow';
            hidarii.style.backgroundColor='blue';
        }
        migii.style.backgroundColor='green';
    } else if(zyoutai===4) {
        uee.style.backgroundColor='white';
        if(haisyoku===1){
            sitaa.style.backgroundColor='blue';
        }else{
            sitaa.style.backgroundColor='yellow';
        }
        migii.style.backgroundColor='red';
        hidarii.style.backgroundColor='orange';
    } else if(zyoutai===5) {
        uee.style.backgroundColor='green';
        if(haisyoku===1){
            sitaa.style.backgroundColor='yellow';
        }else{
            sitaa.style.backgroundColor='blue';
        }
        migii.style.backgroundColor='red';
        hidarii.style.backgroundColor='orange';
    }
}
button.onclick=()=>{
    if(koredake===0){
        mutyakutyayaruwa=0;
        kinyuunohanndann();
        if(mutyakutyayaruwa===0){
            hourensouda=[];
            sukura.style.display='none';
            tugihe.style.visibility ="visible";
            koredake=1;
            button.innerText='';
            button.innerText='間違えた場合はこちら';
            button.style.fontWeight='400';
            bunsyou.innerText='';
            hosoku.innerText='';
            bunsyou.innerText='矢印に従って回してください';
            hosoku.innerText='※三列に矢印がある場合は持ち替えです。指示通りに持ち替えてください。';
            document.getElementsByClassName('hyouzi')[0].classList.toggle('ima');
            document.getElementsByClassName('hyouzi')[1].classList.toggle('ima');
            hyouzisitadesyou();
            if(hourensouda.length===0){
                hanndannnihairu();
                hanndannkizyunn();
            }
            ugokasitadesyou();
            inonotarou();
        }else if(mutyakutyayaruwa===2){
            bunsyou.innerText='';
            hosoku.innerText='';
            bunsyou.innerText='記入ミスがあります';
            hosoku.innerText='よく確認して入力し直してください。';
        }else{
            return;
        }
    }else if(koredake===1){
        zyoutai=0;
        koredake=0;
        button.innerText='';
        button.innerText='スタート';
        button.style.fontWeight='600';
        bunsyou.innerText='';
        hosoku.innerText='';
        bunsyou.innerText='現在の色を入力してください';
        hosoku.innerText='※センターキューブの位置関係に気をつけながら間違いのないように入力ください。';
        document.getElementsByClassName('hyouzi')[0].classList.toggle('ima');
        document.getElementsByClassName('hyouzi')[1].classList.toggle('ima');
        siro=[];
        aka=[];
        ao=[];
        daidai=[];
        midori=[];
        kiiro=[];
        if(uedato[4]!==0 && uedato[4]!==5){
            hourensouda=[24];
            inonotarou();
        }
        if(uedato[4]===5){
            hourensouda=[24,24];
            inonotarou();
            inonotarou();
        }
        if(maedato[4]===1){
            hourensouda[23];
            inonotarou();
        }
        if(maedato[4]===2){
            hourensouda[23,23];
            inonotarou();
            inonotarou();
        }
        if(maedato[4]===3){
            hourensouda[22];
            inonotarou();
        }
        siro=uedato;
        midori=maedato;
        aka=migidato;
        ao=usirodato;
        daidai=hidaridato;
        kiiro=sitadato;
        inne();
    }else if(koredake===10){
        return;
    }else{
        var konaina=10;
        sukura.style.display='block';
        button.innerText='';
        button.innerText='スタート';
        button.style.fontWeight='600';
        bunsyou.innerText='';
        hosoku.innerText='';
        bunsyou.innerText='現在の色を入力してください';
        hosoku.innerText='※センターキューブの位置関係に気をつけながら間違いのないように入力ください。';
        document.getElementsByClassName('hyouzi')[0].classList.toggle('ima');
        document.getElementsByClassName('hyouzi')[1].classList.toggle('ima');
        siro=[6,6,6,6,0,6,6,6,6];
        aka=[6,6,6,6,1,6,6,6,6];
        ao=[6,6,6,6,2,6,6,6,6];
        daidai=[6,6,6,6,3,6,6,6,6];
        midori=[6,6,6,6,4,6,6,6,6];
        kiiro=[6,6,6,6,5,6,6,6,6];
        maedato=[0,0,0,0,0,0,0,0,0];
        usirodato=[0,0,0,0,0,0,0,0,0];
        uedato=[0,0,0,0,0,0,0,0,0];
        sitadato=[0,0,0,0,0,0,0,0,0];
        migidato=[0,0,0,0,0,0,0,0,0];
        hidaridato=[0,0,0,0,0,0,0,0,0];
        haisyoku=0;
        zyoutai=0;
        hourensouda=[];
        mutyakutyayaruwa=0;
        zyoutaihaaku=0;
        koredake=0;
        ezzikana=[];
        kounaakana=[];
        zyoutaiizyou=[0,0,0];
        sukippu=0;
        inne();
    }
}
function kinyuunohanndann(){
    let korezyanakya=[0,0,0,0,0,0,0];
    for (let array = 0; array < idraretu.length; array++) {
        let sadama=idraretu[array];
        for (let kazu = 0; kazu < 9; kazu++) {
            if(sadama[kazu]===6){
                korezyanakya[0]=korezyanakya[0]+1;
            }else if(sadama[kazu]===0){
                korezyanakya[1]=korezyanakya[1]+1;
            }else if(sadama[kazu]===1){
                korezyanakya[2]=korezyanakya[2]+1;
            }else if(sadama[kazu]===2){
                korezyanakya[3]=korezyanakya[3]+1;
            }else if(sadama[kazu]===3){
                korezyanakya[4]=korezyanakya[4]+1;
            }else if(sadama[kazu]===4){
                korezyanakya[5]=korezyanakya[5]+1;
            }else if(sadama[kazu]===5){
                korezyanakya[6]=korezyanakya[6]+1;
            }
        }
    }
    if(korezyanakya[0]>0){
        mutyakutyayaruwa=1;
        bunsyou.innerText='';
        hosoku.innerText='';
        bunsyou.innerText='無記入の欄があります';
        hosoku.innerText='※センターキューブの位置関係に気をつけながら間違いのないように入力ください。';
    }else if(korezyanakya[1]===9 && korezyanakya[2]===9 && korezyanakya[3]===9 && korezyanakya[4]===9 && korezyanakya[5]===9 && korezyanakya[6]===9){
        let siroaa=[0,0,0,0,0,0,0,0,0]
        let akaaa=[1,1,1,1,1,1,1,1,1];
        let aoaa=[2,2,2,2,2,2,2,2,2];
        let daidaiaa=[3,3,3,3,3,3,3,3,3];
        let midoriaa=[4,4,4,4,4,4,4,4,4];
        let kiiroaa=[5,5,5,5,5,5,5,5,5];
        if(siro.toString()===siroaa.toString() && aka.toString()===akaaa.toString() && ao.toString()===aoaa.toString() && daidai.toString()===daidaiaa.toString() && midori.toString()===midoriaa.toString() && kiiro.toString()===kiiroaa.toString()){
            mutyakutyayaruwa=1;
            bunsyou.innerText='';
            hosoku.innerText='';
            bunsyou.innerText='既に完成されています。';
            hosoku.innerText='※センターキューブの位置関係に気をつけながら間違いのないように入力ください。';
        }else{
            uedato=[kiiro[0],kiiro[1],kiiro[2],kiiro[3],kiiro[4],kiiro[5],kiiro[6],kiiro[7],kiiro[8]];
            maedato=[ao[8],ao[7],ao[6],ao[5],ao[4],ao[3],ao[2],ao[1],ao[0]];
            hidaridato=[daidai[8],daidai[7],daidai[6],daidai[5],daidai[4],daidai[3],daidai[2],daidai[1],daidai[0]];
            migidato=[aka[8],aka[7],aka[6],aka[5],aka[4],aka[3],aka[2],aka[1],aka[0]];
            usirodato=[midori[8],midori[7],midori[6],midori[5],midori[4],midori[3],midori[2],midori[1],midori[0]];
            sitadato=[siro[0],siro[1],siro[2],siro[3],siro[4],siro[5],siro[6],siro[7],siro[8]];
            hanndannnihairu();
            if(mutyakutyayaruwa===0){
                let yannkanokaina=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                for (let koraaa = 0; koraaa < 24; koraaa++) {
                    yannkanokaina[ezzikana[koraaa]]++;
                    yannkanokaina[kounaakana[koraaa]+13]++;
                }
                let nyahaha=[12,1,1,1,1,1,1,1,1,1,1,1,1,16,1,1,1,1,1,1,1,1];
                if(yannkanokaina.toString()===nyahaha.toString()){
                    return;
                }else{
                    mutyakutyayaruwa=2;
                }
            }
        }
    }else{
        mutyakutyayaruwa=1;
        let sanzenn='';
        bunsyou.innerText='';
        hosoku.innerText='';
        bunsyou.innerText='記入ミスがあります';
        let ironoguaiha=[0,'白','赤','青','橙','緑','黄']
        let wasuretetaha=[0,'白','赤','黄','橙','緑','青']
        for (let moutyo = 1; moutyo < korezyanakya.length; moutyo++) {
            if(korezyanakya[moutyo]>9){
                let painana=korezyanakya[moutyo]- 9;
                if(haisyoku===1){
                    sanzenn=sanzenn+wasuretetaha[moutyo]+'の面が'+painana+'個多く、';
                }else{
                    sanzenn=sanzenn+ironoguaiha[moutyo]+'の面が'+painana+'個多く、';
                }
            }else if(korezyanakya[moutyo]<9){
                let painana=9-korezyanakya[moutyo];
                if(haisyoku===1){
                    sanzenn=sanzenn+wasuretetaha[moutyo]+'の面が'+painana+'個少なく、';
                }else{
                    sanzenn=sanzenn+ironoguaiha[moutyo]+'の面が'+painana+'個少なく、';
                }
            }
        }
        hosoku.innerText=sanzenn+'なっています';
    }
    
}
function hyouzisitadesyou(){
    bunsyou.innerText='';
    bunsyou.innerText='矢印に従って回してください';
    hosoku.innerText='';
    hosoku.innerText='※三列に矢印がある場合は持ち替えです。指示通りに持ち替えてください。';
    ueniku.style.display='none';
    hidariniku.style.display='none';
    maeniku.style.display='none';
    for (let nanndakottya = 0; nanndakottya < annnakoto.length; nanndakottya++) {
        if(uedato[nanndakottya]===0){
            annnakoto[nanndakottya].style.backgroundColor='white';
            if(nanndakottya===4){
                ueniku.style.display='block';
            }
        }else if(uedato[nanndakottya]===1){
            annnakoto[nanndakottya].style.backgroundColor='red';
        }else if(uedato[nanndakottya]===2){
            if (haisyoku===1) {
                annnakoto[nanndakottya].style.backgroundColor='yellow';
            } else {
                annnakoto[nanndakottya].style.backgroundColor='blue';
            }
        }else if(uedato[nanndakottya]===3){
            annnakoto[nanndakottya].style.backgroundColor='orange';
        }else if(uedato[nanndakottya]===4){
            annnakoto[nanndakottya].style.backgroundColor='green';
        }else if(uedato[nanndakottya]===5){
            if (haisyoku===1) {
                annnakoto[nanndakottya].style.backgroundColor='blue';
            } else {
                annnakoto[nanndakottya].style.backgroundColor='yellow';
            }
        }
    }
    for (let eezyanaika = 0; eezyanaika < konnnakoto.length; eezyanaika++) {
        if(maedato[eezyanaika]===0){
            konnnakoto[eezyanaika].style.backgroundColor='white';
            if(eezyanaika===4){
                maeniku.style.display='block';
            }
        }else if(maedato[eezyanaika]===1){
            konnnakoto[eezyanaika].style.backgroundColor='red';
        }else if(maedato[eezyanaika]===2){
            if (haisyoku===1) {
                konnnakoto[eezyanaika].style.backgroundColor='yellow';
            } else {
                konnnakoto[eezyanaika].style.backgroundColor='blue';
            }
        }else if(maedato[eezyanaika]===3){
            konnnakoto[eezyanaika].style.backgroundColor='orange';
        }else if(maedato[eezyanaika]===4){
            konnnakoto[eezyanaika].style.backgroundColor='green';
        }else if(maedato[eezyanaika]===5){
            if (haisyoku===1) {
                konnnakoto[eezyanaika].style.backgroundColor='blue';
            } else {
                konnnakoto[eezyanaika].style.backgroundColor='yellow';
            }
        }
    }
    for (let sounannka = 0; sounannka < iinaiina.length; sounannka++) {
        if(hidaridato[sounannka]===0){
            iinaiina[sounannka].style.backgroundColor='white';
            if(sounannka===4){
                hidariniku.style.display='block';
            }
        }else if(hidaridato[sounannka]===1){
            iinaiina[sounannka].style.backgroundColor='red';
        }else if(hidaridato[sounannka]===2){
            if (haisyoku===1) {
                iinaiina[sounannka].style.backgroundColor='yellow';
            } else {
                iinaiina[sounannka].style.backgroundColor='blue';
            }
        }else if(hidaridato[sounannka]===3){
            iinaiina[sounannka].style.backgroundColor='orange';
        }else if(hidaridato[sounannka]===4){
            iinaiina[sounannka].style.backgroundColor='green';
        }else if(hidaridato[sounannka]===5){
            if (haisyoku===1) {
                iinaiina[sounannka].style.backgroundColor='blue';
            } else {
                iinaiina[sounannka].style.backgroundColor='yellow';
            }
        }
    }
}
function ugokasitadesyou(){
    for (let forfor = 0; forfor < 9; forfor++) {
        annnakoto[forfor].innerText='';
        konnnakoto[forfor].innerText='';
        iinaiina[forfor].innerText='';
    }
    const nya=hourensouda[0];
    if(nya===0){
        s.innerText='←';
        t.innerText='←';
        u.innerText='←';
        j.innerText='←';
        k.innerText='←';
        l.innerText='←';
    }else if(nya===1){
        s.innerText='→';
        t.innerText='→';
        u.innerText='→';
        j.innerText='→';
        k.innerText='→';
        l.innerText='→';
    }else if(nya===2){
        c.innerText='↑';
        f.innerText='↑';
        i.innerText='↑';
        l.innerText='↑';
        o.innerText='↑';
        r.innerText='↑';
    }else if(nya===3){
        c.innerText='↓';
        f.innerText='↓';
        i.innerText='↓';
        l.innerText='↓';
        o.innerText='↓';
        r.innerText='↓';
    }else if(nya===4){
        a.innerText='↓';
        d.innerText='↓';
        g.innerText='↓';
        j.innerText='↓';
        m.innerText='↓';
        p.innerText='↓';
    }else if(nya===5){
        a.innerText='↑';
        d.innerText='↑';
        g.innerText='↑';
        j.innerText='↑';
        m.innerText='↑';
        p.innerText='↑';
    }else if(nya===6){
        y.innerText='→';
        z.innerText='→';
        zz.innerText='→';
        p.innerText='→';
        q.innerText='→';
        r.innerText='→';
    }else if(nya===7){
        y.innerText='←';
        z.innerText='←';
        zz.innerText='←';
        p.innerText='←';
        q.innerText='←';
        r.innerText='←';
    }else if(nya===8){
        u.innerText='↑';
        x.innerText='↑';
        zz.innerText='↑';
        g.innerText='→';
        h.innerText='→';
        i.innerText='→';
    }else if(nya===9){
        u.innerText='↓';
        x.innerText='↓';
        zz.innerText='↓';
        g.innerText='←';
        h.innerText='←';
        i.innerText='←';
    }else if(nya===10){
        s.innerText='↓';
        v.innerText='↓';
        y.innerText='↓';
        a.innerText='←';
        b.innerText='←';
        c.innerText='←';
    }else if(nya===11){
        s.innerText='↑';
        v.innerText='↑';
        y.innerText='↑';
        a.innerText='→';
        b.innerText='→';
        c.innerText='→';
    }else if(nya===12){
        hosoku.innerText='';
        hosoku.innerText='真ん中のみ動かして下さい。';
        b.innerText='↓';
        e.innerText='↓';
        h.innerText='↓';
        k.innerText='↓';
        n.innerText='↓';
        q.innerText='↓';
    }else if(nya===13){
        hosoku.innerText='';
        hosoku.innerText='真ん中のみ動かして下さい。';
        b.innerText='↑';
        e.innerText='↑';
        h.innerText='↑';
        k.innerText='↑';
        n.innerText='↑';
        q.innerText='↑';
    }else if(nya===14){
        hosoku.innerText='';
        hosoku.innerText='真ん中のみ動かして下さい。';
        t.innerText='↑';
        w.innerText='↑';
        z.innerText='↑';
        d.innerText='→';
        e.innerText='→';
        f.innerText='→';
    }else if(nya===15){
        hosoku.innerText='';
        hosoku.innerText='真ん中のみ動かして下さい。';
        t.innerText='↓';
        w.innerText='↓';
        z.innerText='↓';
        d.innerText='←';
        e.innerText='←';
        f.innerText='←';
    }else if(nya===16){
        hosoku.innerText='';
        hosoku.innerText='2列動かして下さい。';
        c.innerText='↑';
        f.innerText='↑';
        i.innerText='↑';
        l.innerText='↑';
        o.innerText='↑';
        r.innerText='↑';
        b.innerText='↑';
        e.innerText='↑';
        h.innerText='↑';
        k.innerText='↑';
        n.innerText='↑';
        q.innerText='↑';
    }else if(nya===17){
        hosoku.innerText='';
        hosoku.innerText='2列動かして下さい。';
        c.innerText='↓';
        f.innerText='↓';
        i.innerText='↓';
        l.innerText='↓';
        o.innerText='↓';
        r.innerText='↓';
        b.innerText='↓';
        e.innerText='↓';
        h.innerText='↓';
        k.innerText='↓';
        n.innerText='↓';
        q.innerText='↓';
    }else if(nya===18){
        hosoku.innerText='';
        hosoku.innerText='2列動かして下さい。';
        a.innerText='↓';
        d.innerText='↓';
        g.innerText='↓';
        j.innerText='↓';
        m.innerText='↓';
        p.innerText='↓';
        b.innerText='↓';
        e.innerText='↓';
        h.innerText='↓';
        k.innerText='↓';
        n.innerText='↓';
        q.innerText='↓';
    }else if(nya===19){
        hosoku.innerText='';
        hosoku.innerText='2列動かして下さい。';
        a.innerText='↑';
        d.innerText='↑';
        g.innerText='↑';
        j.innerText='↑';
        m.innerText='↑';
        p.innerText='↑';
        b.innerText='↑';
        e.innerText='↑';
        h.innerText='↑';
        k.innerText='↑';
        n.innerText='↑';
        q.innerText='↑';
    }else if(nya===20){
        hosoku.innerText='';
        hosoku.innerText='2列動かして下さい。';
        t.innerText='↑';
        u.innerText='↑';
        w.innerText='↑';
        x.innerText='↑';
        z.innerText='↑';
        zz.innerText='↑';
        d.innerText='→';
        e.innerText='→';
        f.innerText='→';
        g.innerText='→';
        h.innerText='→';
        i.innerText='→';
    }else if(nya===21){
        hosoku.innerText='';
        hosoku.innerText='2列動かして下さい。';
        t.innerText='↓';
        u.innerText='↓';
        w.innerText='↓';
        x.innerText='↓';
        z.innerText='↓';
        zz.innerText='↓';
        d.innerText='←';
        e.innerText='←';
        f.innerText='←';
        g.innerText='←';
        h.innerText='←';
        i.innerText='←';
    }else if(nya===22){
        hosoku.innerText='';
        hosoku.innerText='持ち替えて下さい。';
        s.innerText='←';
        t.innerText='←';
        u.innerText='←';
        v.innerText='←';
        w.innerText='←';
        x.innerText='←';
        y.innerText='←';
        z.innerText='←';
        zz.innerText='←';
        j.innerText='←';
        k.innerText='←';
        l.innerText='←';
        m.innerText='←';
        n.innerText='←';
        o.innerText='←';
        p.innerText='←';
        q.innerText='←';
        r.innerText='←';
    }else if(nya===23){
        hosoku.innerText='';
        hosoku.innerText='持ち替えて下さい。';
        s.innerText='→';
        t.innerText='→';
        u.innerText='→';
        v.innerText='→';
        w.innerText='→';
        x.innerText='→';
        y.innerText='→';
        z.innerText='→';
        zz.innerText='→';
        j.innerText='→';
        k.innerText='→';
        l.innerText='→';
        m.innerText='→';
        n.innerText='→';
        o.innerText='→';
        p.innerText='→';
        q.innerText='→';
        r.innerText='→';
    }else if(nya===24){
        hosoku.innerText='';
        hosoku.innerText='持ち替えて下さい。';
        a.innerText='↑';
        d.innerText='↑';
        g.innerText='↑';
        j.innerText='↑';
        m.innerText='↑';
        p.innerText='↑';
        b.innerText='↑';
        e.innerText='↑';
        h.innerText='↑';
        k.innerText='↑';
        n.innerText='↑';
        q.innerText='↑';
        c.innerText='↑';
        f.innerText='↑';
        i.innerText='↑';
        l.innerText='↑';
        o.innerText='↑';
        r.innerText='↑';
    }else if(nya===25){
        hosoku.innerText='';
        hosoku.innerText='持ち替えて下さい。';
        a.innerText='↓';
        d.innerText='↓';
        g.innerText='↓';
        j.innerText='↓';
        m.innerText='↓';
        p.innerText='↓';
        b.innerText='↓';
        e.innerText='↓';
        h.innerText='↓';
        k.innerText='↓';
        n.innerText='↓';
        q.innerText='↓';
        c.innerText='↓';
        f.innerText='↓';
        i.innerText='↓';
        l.innerText='↓';
        o.innerText='↓';
        r.innerText='↓';
    }else if(nya===26){
        hosoku.innerText='';
        hosoku.innerText='持ち替えて下さい。';
        s.innerText='↑';
        t.innerText='↑';
        u.innerText='↑';
        v.innerText='↑';
        w.innerText='↑';
        x.innerText='↑';
        y.innerText='↑';
        z.innerText='↑';
        zz.innerText='↑';
        a.innerText='→';
        b.innerText='→';
        c.innerText='→';
        d.innerText='→';
        e.innerText='→';
        f.innerText='→';
        g.innerText='→';
        h.innerText='→';
        i.innerText='→';
    }else if(nya===27){
        hosoku.innerText='';
        hosoku.innerText='持ち替えて下さい。';
        s.innerText='↓';
        t.innerText='↓';
        u.innerText='↓';
        v.innerText='↓';
        w.innerText='↓';
        x.innerText='↓';
        y.innerText='↓';
        z.innerText='↓';
        zz.innerText='↓';
        a.innerText='←';
        b.innerText='←';
        c.innerText='←';
        d.innerText='←';
        e.innerText='←';
        f.innerText='←';
        g.innerText='←';
        h.innerText='←';
        i.innerText='←';
    }
}
function inonotarou(){
    let mizi=[];
    const nya=hourensouda[0];
    if(nya===0){
        mizi.push(maedato[0],maedato[1],maedato[2]);
        maedato.splice(0,3,migidato[0],migidato[1],migidato[2]);
        migidato.splice(0,3,usirodato[0],usirodato[1],usirodato[2]);
        usirodato.splice(0,3,hidaridato[0],hidaridato[1],hidaridato[2]);
        hidaridato.splice(0,3,mizi[0],mizi[1],mizi[2]);
        mizi.length=0;
        mizi.push(uedato[0],uedato[1],uedato[2],uedato[3],uedato[4],uedato[5],uedato[6],uedato[7],uedato[8]);
        uedato.length=0;
        uedato.push(mizi[6],mizi[3],mizi[0],mizi[7],mizi[4],mizi[1],mizi[8],mizi[5],mizi[2]);
    }else if(nya===1){
        mizi.push(maedato[0],maedato[1],maedato[2]);
        maedato.splice(0,3,hidaridato[0],hidaridato[1],hidaridato[2]);
        hidaridato.splice(0,3,usirodato[0],usirodato[1],usirodato[2]);
        usirodato.splice(0,3,migidato[0],migidato[1],migidato[2]);
        migidato.splice(0,3,mizi[0],mizi[1],mizi[2]);
        mizi.length=0;
        mizi.push(uedato[0],uedato[1],uedato[2],uedato[3],uedato[4],uedato[5],uedato[6],uedato[7],uedato[8]);
        uedato.length=0;
        uedato.push(mizi[2],mizi[5],mizi[8],mizi[1],mizi[4],mizi[7],mizi[0],mizi[3],mizi[6]);
    }else if(nya===2){
        mizi.push(maedato[2],maedato[5],maedato[8]);
        maedato.splice(2,1,sitadato[2]);
        maedato.splice(5,1,sitadato[5]);
        maedato.splice(8,1,sitadato[8]);
        sitadato.splice(2,1,usirodato[6]);
        sitadato.splice(5,1,usirodato[3]);
        sitadato.splice(8,1,usirodato[0]);
        usirodato.splice(0,1,uedato[8]);
        usirodato.splice(3,1,uedato[5]);
        usirodato.splice(6,1,uedato[2]);
        uedato.splice(2,1,mizi[0]);
        uedato.splice(5,1,mizi[1]);
        uedato.splice(8,1,mizi[2]);
        mizi.length=0;
        mizi.push(migidato[0],migidato[1],migidato[2],migidato[3],migidato[4],migidato[5],migidato[6],migidato[7],migidato[8]);
        migidato.length=0;
        migidato.push(mizi[6],mizi[3],mizi[0],mizi[7],mizi[4],mizi[1],mizi[8],mizi[5],mizi[2]);
    }else if(nya===3){
        mizi.push(maedato[2],maedato[5],maedato[8]);
        maedato.splice(2,1,uedato[2]);
        maedato.splice(5,1,uedato[5]);
        maedato.splice(8,1,uedato[8]);
        uedato.splice(2,1,usirodato[6]);
        uedato.splice(5,1,usirodato[3]);
        uedato.splice(8,1,usirodato[0]);
        usirodato.splice(0,1,sitadato[8]);
        usirodato.splice(3,1,sitadato[5]);
        usirodato.splice(6,1,sitadato[2]);
        sitadato.splice(2,1,mizi[0]);
        sitadato.splice(5,1,mizi[1]);
        sitadato.splice(8,1,mizi[2]);
        mizi.length=0;
        mizi.push(migidato[0],migidato[1],migidato[2],migidato[3],migidato[4],migidato[5],migidato[6],migidato[7],migidato[8]);
        migidato.length=0;
        migidato.push(mizi[2],mizi[5],mizi[8],mizi[1],mizi[4],mizi[7],mizi[0],mizi[3],mizi[6]);
    }else if(nya===4){
        mizi.push(maedato[0],maedato[3],maedato[6]);
        maedato.splice(0,1,uedato[0]);
        maedato.splice(3,1,uedato[3]);
        maedato.splice(6,1,uedato[6]);
        uedato.splice(0,1,usirodato[8]);
        uedato.splice(3,1,usirodato[5]);
        uedato.splice(6,1,usirodato[2]);
        usirodato.splice(2,1,sitadato[6]);
        usirodato.splice(5,1,sitadato[3]);
        usirodato.splice(8,1,sitadato[0]);
        sitadato.splice(0,1,mizi[0]);
        sitadato.splice(3,1,mizi[1]);
        sitadato.splice(6,1,mizi[2]);
        mizi.length=0;
        mizi.push(hidaridato[0],hidaridato[1],hidaridato[2],hidaridato[3],hidaridato[4],hidaridato[5],hidaridato[6],hidaridato[7],hidaridato[8]);
        hidaridato.length=0;
        hidaridato.push(mizi[6],mizi[3],mizi[0],mizi[7],mizi[4],mizi[1],mizi[8],mizi[5],mizi[2]);
    }else if(nya===5){
        mizi.push(maedato[0],maedato[3],maedato[6]);
        maedato.splice(0,1,sitadato[0]);
        maedato.splice(3,1,sitadato[3]);
        maedato.splice(6,1,sitadato[6]);
        sitadato.splice(0,1,usirodato[8]);
        sitadato.splice(3,1,usirodato[5]);
        sitadato.splice(6,1,usirodato[2]);
        usirodato.splice(2,1,uedato[6]);
        usirodato.splice(5,1,uedato[3]);
        usirodato.splice(8,1,uedato[0]);
        uedato.splice(0,1,mizi[0]);
        uedato.splice(3,1,mizi[1]);
        uedato.splice(6,1,mizi[2]);
        mizi.length=0;
        mizi.push(hidaridato[0],hidaridato[1],hidaridato[2],hidaridato[3],hidaridato[4],hidaridato[5],hidaridato[6],hidaridato[7],hidaridato[8]);
        hidaridato.length=0;
        hidaridato.push(mizi[2],mizi[5],mizi[8],mizi[1],mizi[4],mizi[7],mizi[0],mizi[3],mizi[6]);
    }else if(nya===6){
        mizi.push(maedato[6],maedato[7],maedato[8]);
        maedato.splice(6,3,hidaridato[6],hidaridato[7],hidaridato[8]);
        hidaridato.splice(6,3,usirodato[6],usirodato[7],usirodato[8]);
        usirodato.splice(6,3,migidato[6],migidato[7],migidato[8]);
        migidato.splice(6,3,mizi[0],mizi[1],mizi[2]);
        mizi.length=0;
        mizi.push(sitadato[0],sitadato[1],sitadato[2],sitadato[3],sitadato[4],sitadato[5],sitadato[6],sitadato[7],sitadato[8]);
        sitadato.length=0;
        sitadato.push(mizi[6],mizi[3],mizi[0],mizi[7],mizi[4],mizi[1],mizi[8],mizi[5],mizi[2]);
    }else if(nya===7){
        mizi.push(maedato[6],maedato[7],maedato[8]);
        maedato.splice(6,3,migidato[6],migidato[7],migidato[8]);
        migidato.splice(6,3,usirodato[6],usirodato[7],usirodato[8]);
        usirodato.splice(6,3,hidaridato[6],hidaridato[7],hidaridato[8]);
        hidaridato.splice(6,3,mizi[0],mizi[1],mizi[2]);
        mizi.length=0;
        mizi.push(sitadato[0],sitadato[1],sitadato[2],sitadato[3],sitadato[4],sitadato[5],sitadato[6],sitadato[7],sitadato[8]);
        sitadato.length=0;
        sitadato.push(mizi[2],mizi[5],mizi[8],mizi[1],mizi[4],mizi[7],mizi[0],mizi[3],mizi[6]); 
    }else if(nya===8){
        mizi.push(uedato[6],uedato[7],uedato[8]);
        uedato.splice(6,3,hidaridato[8],hidaridato[5],hidaridato[2]);
        hidaridato.splice(2,1,sitadato[0]);
        hidaridato.splice(5,1,sitadato[1]);
        hidaridato.splice(8,1,sitadato[2]);
        sitadato.splice(0,3,migidato[6],migidato[3],migidato[0]);
        migidato.splice(0,1,mizi[0]);
        migidato.splice(3,1,mizi[1]);
        migidato.splice(6,1,mizi[2]);
        mizi.length=0;
        mizi.push(maedato[0],maedato[1],maedato[2],maedato[3],maedato[4],maedato[5],maedato[6],maedato[7],maedato[8]);
        maedato.length=0;
        maedato.push(mizi[6],mizi[3],mizi[0],mizi[7],mizi[4],mizi[1],mizi[8],mizi[5],mizi[2]);
    }else if(nya===9){
        mizi.push(uedato[6],uedato[7],uedato[8]);
        uedato.splice(6,3,migidato[0],migidato[3],migidato[6]);
        migidato.splice(0,1,sitadato[2]);
        migidato.splice(3,1,sitadato[1]);
        migidato.splice(6,1,sitadato[0]);
        sitadato.splice(0,3,hidaridato[2],hidaridato[5],hidaridato[8]);
        hidaridato.splice(2,1,mizi[2]);
        hidaridato.splice(5,1,mizi[1]);
        hidaridato.splice(8,1,mizi[0]);
        mizi.length=0;
        mizi.push(maedato[0],maedato[1],maedato[2],maedato[3],maedato[4],maedato[5],maedato[6],maedato[7],maedato[8]);
        maedato.length=0;
        maedato.push(mizi[2],mizi[5],mizi[8],mizi[1],mizi[4],mizi[7],mizi[0],mizi[3],mizi[6]);
    }else if(nya===10){
        mizi.push(uedato[0],uedato[1],uedato[2]);
        uedato.splice(0,3,migidato[2],migidato[5],migidato[8]);
        migidato.splice(2,1,sitadato[8]);
        migidato.splice(5,1,sitadato[7]);
        migidato.splice(8,1,sitadato[6]);
        sitadato.splice(6,3,hidaridato[0],hidaridato[3],hidaridato[6]);
        hidaridato.splice(0,1,mizi[2]);
        hidaridato.splice(3,1,mizi[1]);
        hidaridato.splice(6,1,mizi[0]);
        mizi.length=0;
        mizi.push(usirodato[0],usirodato[1],usirodato[2],usirodato[3],usirodato[4],usirodato[5],usirodato[6],usirodato[7],usirodato[8]);
        usirodato.length=0;
        usirodato.push(mizi[6],mizi[3],mizi[0],mizi[7],mizi[4],mizi[1],mizi[8],mizi[5],mizi[2]);
    }else if(nya===11){
        mizi.push(uedato[0],uedato[1],uedato[2]);
        uedato.splice(0,3,hidaridato[6],hidaridato[3],hidaridato[0]);
        hidaridato.splice(0,1,sitadato[6]);
        hidaridato.splice(3,1,sitadato[7]);
        hidaridato.splice(6,1,sitadato[8]);
        sitadato.splice(6,3,migidato[8],migidato[5],migidato[2]);
        migidato.splice(2,1,mizi[0]);
        migidato.splice(5,1,mizi[1]);
        migidato.splice(8,1,mizi[2]);
        mizi.length=0;
        mizi.push(usirodato[0],usirodato[1],usirodato[2],usirodato[3],usirodato[4],usirodato[5],usirodato[6],usirodato[7],usirodato[8]);
        usirodato.length=0;
        usirodato.push(mizi[2],mizi[5],mizi[8],mizi[1],mizi[4],mizi[7],mizi[0],mizi[3],mizi[6]);
    }else if(nya===12){
        mizi.push(maedato[1],maedato[4],maedato[7]);
        maedato.splice(1,1,uedato[1]);
        maedato.splice(4,1,uedato[4]);
        maedato.splice(7,1,uedato[7]);
        uedato.splice(1,1,usirodato[7]);
        uedato.splice(4,1,usirodato[4]);
        uedato.splice(7,1,usirodato[1]);
        usirodato.splice(1,1,sitadato[7]);
        usirodato.splice(4,1,sitadato[4]);
        usirodato.splice(7,1,sitadato[1]);
        sitadato.splice(1,1,mizi[0]);
        sitadato.splice(4,1,mizi[1]);
        sitadato.splice(7,1,mizi[2]);
    }else if(nya===13){
        mizi.push(maedato[1],maedato[4],maedato[7]);
        maedato.splice(1,1,sitadato[1]);
        maedato.splice(4,1,sitadato[4]);
        maedato.splice(7,1,sitadato[7]);
        sitadato.splice(1,1,usirodato[7]);
        sitadato.splice(4,1,usirodato[4]);
        sitadato.splice(7,1,usirodato[1]);
        usirodato.splice(1,1,uedato[7]);
        usirodato.splice(4,1,uedato[4]);
        usirodato.splice(7,1,uedato[1]);
        uedato.splice(1,1,mizi[0]);
        uedato.splice(4,1,mizi[1]);
        uedato.splice(7,1,mizi[2]);
    }else if(nya===14){
        mizi.push(uedato[3],uedato[4],uedato[5]);
        uedato.splice(3,3,hidaridato[7],hidaridato[4],hidaridato[1]);
        hidaridato.splice(1,1,sitadato[3]);
        hidaridato.splice(4,1,sitadato[4]);
        hidaridato.splice(7,1,sitadato[5]);
        sitadato.splice(3,3,migidato[7],migidato[4],migidato[1]);
        migidato.splice(1,1,mizi[0]);
        migidato.splice(4,1,mizi[1]);
        migidato.splice(7,1,mizi[2]);
    }else if(nya===15){
        mizi.push(uedato[3],uedato[4],uedato[5]);
        uedato.splice(3,3,migidato[1],migidato[4],migidato[7]);
        migidato.splice(1,1,sitadato[5]);
        migidato.splice(4,1,sitadato[4]);
        migidato.splice(7,1,sitadato[3]);
        sitadato.splice(3,3,hidaridato[1],hidaridato[4],hidaridato[7]);
        hidaridato.splice(1,1,mizi[2]);
        hidaridato.splice(4,1,mizi[1]);
        hidaridato.splice(7,1,mizi[0]);
    }else if(nya===16){
        hourensouda.unshift(2,13);
        inonotarou();
        inonotarou();
    }else if(nya===17){
        hourensouda.unshift(3,12);
        inonotarou();
        inonotarou();
    }else if(nya===18){
        hourensouda.unshift(4,12);
        inonotarou();
        inonotarou();
    }else if(nya===19){
        hourensouda.unshift(5,13);
        inonotarou();
        inonotarou();
    }else if(nya===20){
        hourensouda.unshift(8,14);
        inonotarou();
        inonotarou();
    }else if(nya===21){
        hourensouda.unshift(9,15);
        inonotarou();
        inonotarou();
    }else if(nya===22){
        mizi.push(maedato[3],maedato[4],maedato[5]);
        maedato.splice(3,3,migidato[3],migidato[4],migidato[5]);
        migidato.splice(3,3,usirodato[3],usirodato[4],usirodato[5]);
        usirodato.splice(3,3,hidaridato[3],hidaridato[4],hidaridato[5]);
        hidaridato.splice(3,3,mizi[0],mizi[1],mizi[2]);
        hourensouda.unshift(0,7);
        inonotarou();
        inonotarou();
    }else if(nya===23){
        mizi.push(maedato[3],maedato[4],maedato[5]);
        uedato.splice(3,3,hidaridato[3],hidaridato[4],hidaridato[5]);
        hidaridato.splice(3,3,usirodato[3],usirodato[4],usirodato[5]);
        usirodato.splice(3,3,migidato[3],migidato[4],migidato[5]);
        migidato.splice(3,3,mizi[0],mizi[1],mizi[2]);
        hourensouda.unshift(1,6);
        inonotarou();
        inonotarou();
    }else if(nya===24){
        hourensouda.unshift(2,5,13);
        inonotarou();
        inonotarou();
        inonotarou();
    }else if(nya===25){
        hourensouda.unshift(3,4,12);
        inonotarou();
        inonotarou();
        inonotarou();
    }else if(nya===26){
        hourensouda.unshift(8,7,14);
        inonotarou();
        inonotarou();
        inonotarou();
    }else if(nya===27){
        hourensouda.unshift(9,6,15);
        inonotarou();
        inonotarou();
        inonotarou();
    }
    hourensouda.shift();
}
//U=0 U'=1 R=2 R'=3 L=4 L'=5 D=6 D'=7 F=8 F'=9 B=10 B'=11 M=12 M'=13 S=14 S'=15 RW=16 RW'=17 LW=18 LW'=19 FW=20 FW'=21 Y=22 Y'=23 x=24 X'=25 z=26 z'=27
function hanndannnihairu(){
    ezzikana=[];
    kounaakana=[];
    let nagainamae=[uedato[7],maedato[1],uedato[5],migidato[1],uedato[1],usirodato[1],uedato[3],hidaridato[1],maedato[5],migidato[3],migidato[5],usirodato[3],usirodato[5],hidaridato[3],hidaridato[5],maedato[3],sitadato[1],maedato[7],sitadato[5],migidato[7],sitadato[7],usirodato[7],sitadato[3],hidaridato[7]];
    let nimoakitta=[uedato[8],maedato[2],migidato[0],uedato[2],migidato[2],usirodato[0],uedato[0],usirodato[2],hidaridato[0],uedato[6],hidaridato[2],maedato[0],sitadato[2],migidato[6],maedato[8],sitadato[8],usirodato[6],migidato[8],sitadato[6],hidaridato[6],usirodato[8],sitadato[0],maedato[6],hidaridato[8]];
    for (let inedex = 0; inedex<12; inedex++) {
        let naduke=2*inedex;
        if(nagainamae[naduke]===5 && nagainamae[naduke+1]===maedato[4]){
            ezzikana.push(1,0);
        }else if(nagainamae[naduke+1]===5 && nagainamae[naduke]===maedato[4]){
            ezzikana.push(0,1);
        }else if(nagainamae[naduke]===5 && nagainamae[naduke+1]===migidato[4]){
            ezzikana.push(2,0);
        }else if(nagainamae[naduke+1]===5 && nagainamae[naduke]===migidato[4]){
            ezzikana.push(0,2);
        }else if(nagainamae[naduke]===5 && nagainamae[naduke+1]===usirodato[4]){
            ezzikana.push(3,0);
        }else if(nagainamae[naduke+1]===5 && nagainamae[naduke]===usirodato[4]){
            ezzikana.push(0,3);
        }else if(nagainamae[naduke]===5 && nagainamae[naduke+1]===hidaridato[4]){
            ezzikana.push(4,0);
        }else if(nagainamae[naduke+1]===5 && nagainamae[naduke]===hidaridato[4]){
            ezzikana.push(0,4);
        }else if(nagainamae[naduke]===maedato[4] && nagainamae[naduke+1]===migidato[4]){
            ezzikana.push(5,0);
        }else if(nagainamae[naduke+1]===maedato[4] && nagainamae[naduke]===migidato[4]){
            ezzikana.push(0,5);
        }else if(nagainamae[naduke]===migidato[4] && nagainamae[naduke+1]===usirodato[4]){
            ezzikana.push(6,0);
        }else if(nagainamae[naduke+1]===migidato[4] && nagainamae[naduke]===usirodato[4]){
            ezzikana.push(0,6);
        }else if(nagainamae[naduke]===usirodato[4] && nagainamae[naduke+1]===hidaridato[4]){
            ezzikana.push(7,0);
        }else if(nagainamae[naduke+1]===usirodato[4] && nagainamae[naduke]===hidaridato[4]){
            ezzikana.push(0,7);
        }else if(nagainamae[naduke]===hidaridato[4] && nagainamae[naduke+1]===maedato[4]){
            ezzikana.push(8,0);
        }else if(nagainamae[naduke+1]===hidaridato[4] && nagainamae[naduke]===maedato[4]){
            ezzikana.push(0,8);
        }else if(nagainamae[naduke]===0 && nagainamae[naduke+1]===maedato[4]){
            ezzikana.push(9,0);
        }else if(nagainamae[naduke+1]===0 && nagainamae[naduke]===maedato[4]){
            ezzikana.push(0,9);
        }else if(nagainamae[naduke]===0 && nagainamae[naduke+1]===migidato[4]){
            ezzikana.push(10,0);
        }else if(nagainamae[naduke+1]===0 && nagainamae[naduke]===migidato[4]){
            ezzikana.push(0,10);
        }else if(nagainamae[naduke]===0 && nagainamae[naduke+1]===usirodato[4]){
            ezzikana.push(11,0);
        }else if(nagainamae[naduke+1]===0 && nagainamae[naduke]===usirodato[4]){
            ezzikana.push(0,11);
        }else if(nagainamae[naduke]===0 && nagainamae[naduke+1]===hidaridato[4]){
            ezzikana.push(12,0);
        }else if(nagainamae[naduke+1]===0 && nagainamae[naduke]===hidaridato[4]){
            ezzikana.push(0,12);
        }else{
            mutyakutyayaruwa=2;
            break;
        }
    }
    for (let ineedex = 0; ineedex < 8; ineedex++) {
        const oyaa = ineedex*3;
        if(nimoakitta[oyaa]===5 && nimoakitta[oyaa+1]===maedato[4] && nimoakitta[oyaa+2]===migidato[4]){
            kounaakana.push(1,0,0);
        }else if(nimoakitta[oyaa+1]===5 && nimoakitta[oyaa+2]===maedato[4] && nimoakitta[oyaa]===migidato[4]){
            kounaakana.push(0,1,0);
        }else if(nimoakitta[oyaa+2]===5 && nimoakitta[oyaa]===maedato[4] && nimoakitta[oyaa+1]===migidato[4]){
            kounaakana.push(0,0,1);
        }else  if(nimoakitta[oyaa]===5 && nimoakitta[oyaa+1]===migidato[4] && nimoakitta[oyaa+2]===usirodato[4]){
            kounaakana.push(2,0,0);
        }else if(nimoakitta[oyaa+1]===5 && nimoakitta[oyaa+2]===migidato[4] && nimoakitta[oyaa]===usirodato[4]){
            kounaakana.push(0,2,0);
        }else if(nimoakitta[oyaa+2]===5 && nimoakitta[oyaa]===migidato[4] && nimoakitta[oyaa+1]===usirodato[4]){
            kounaakana.push(0,0,2);
        }else  if(nimoakitta[oyaa]===5 && nimoakitta[oyaa+1]===usirodato[4] && nimoakitta[oyaa+2]===hidaridato[4]){
            kounaakana.push(3,0,0);
        }else if(nimoakitta[oyaa+1]===5 && nimoakitta[oyaa+2]===usirodato[4] && nimoakitta[oyaa]===hidaridato[4]){
            kounaakana.push(0,3,0);
        }else if(nimoakitta[oyaa+2]===5 && nimoakitta[oyaa]===usirodato[4] && nimoakitta[oyaa+1]===hidaridato[4]){
            kounaakana.push(0,0,3);
        }else  if(nimoakitta[oyaa]===5 && nimoakitta[oyaa+1]===hidaridato[4] && nimoakitta[oyaa+2]===maedato[4]){
            kounaakana.push(4,0,0);
        }else if(nimoakitta[oyaa+1]===5 && nimoakitta[oyaa+2]===hidaridato[4] && nimoakitta[oyaa]===maedato[4]){
            kounaakana.push(0,4,0);
        }else if(nimoakitta[oyaa+2]===5 && nimoakitta[oyaa]===hidaridato[4] && nimoakitta[oyaa+1]===maedato[4]){
            kounaakana.push(0,0,4);
        }else  if(nimoakitta[oyaa]===0 && nimoakitta[oyaa+1]===migidato[4] && nimoakitta[oyaa+2]===maedato[4]){
            kounaakana.push(5,0,0);
        }else if(nimoakitta[oyaa+1]===0 && nimoakitta[oyaa+2]===migidato[4] && nimoakitta[oyaa]===maedato[4]){
            kounaakana.push(0,5,0);
        }else if(nimoakitta[oyaa+2]===0 && nimoakitta[oyaa]===migidato[4] && nimoakitta[oyaa+1]===maedato[4]){
            kounaakana.push(0,0,5);
        }else  if(nimoakitta[oyaa]===0 && nimoakitta[oyaa+1]===usirodato[4] && nimoakitta[oyaa+2]===migidato[4]){
            kounaakana.push(6,0,0);
        }else if(nimoakitta[oyaa+1]===0 && nimoakitta[oyaa+2]===usirodato[4] && nimoakitta[oyaa]===migidato[4]){
            kounaakana.push(0,6,0);
        }else if(nimoakitta[oyaa+2]===0 && nimoakitta[oyaa]===usirodato[4] && nimoakitta[oyaa+1]===migidato[4]){
            kounaakana.push(0,0,6);
        }else  if(nimoakitta[oyaa]===0 && nimoakitta[oyaa+1]===hidaridato[4] && nimoakitta[oyaa+2]===usirodato[4]){
            kounaakana.push(7,0,0);
        }else if(nimoakitta[oyaa+1]===0 && nimoakitta[oyaa+2]===hidaridato[4] && nimoakitta[oyaa]===usirodato[4]){
            kounaakana.push(0,7,0);
        }else if(nimoakitta[oyaa+2]===0 && nimoakitta[oyaa]===hidaridato[4] && nimoakitta[oyaa+1]===usirodato[4]){
            kounaakana.push(0,0,7);
        }else  if(nimoakitta[oyaa]===0 && nimoakitta[oyaa+1]===maedato[4] && nimoakitta[oyaa+2]===hidaridato[4]){
            kounaakana.push(8,0,0);
        }else if(nimoakitta[oyaa+1]===0 && nimoakitta[oyaa+2]===maedato[4] && nimoakitta[oyaa]===hidaridato[4]){
            kounaakana.push(0,8,0);
        }else if(nimoakitta[oyaa+2]===0 && nimoakitta[oyaa]===maedato[4] && nimoakitta[oyaa+1]===hidaridato[4]){
            kounaakana.push(0,0,8);
        }else{
            mutyakutyayaruwa=2;
            break;
        }
    }
}
function hanndannkizyunn(){
    if(ezzikana[16]!==9){
        sukippu=1;
        sirokurosu();
    }else if(ezzikana[18]!==10){
        hourensouda=[22];
    }else if(ezzikana[20]!==11){
        hourensouda=[22,22];
    }else if(ezzikana[22]!==12){
        hourensouda=[23];
    }else if(kounaakana[12]!==5 || ezzikana[8]!==5){
        if(sukippu===1){
            hosoku.innerText='';
            hosoku.innerText='白クロス完成';
        }
        sukippu=2;
        ehutuueru();
    }else if(kounaakana[15]!==6 || ezzikana[10]!==6){
        if(sukippu===1){
            hosoku.innerText='';
            hosoku.innerText='白クロス完成';
        }
        hourensouda=[22];
    }else if(kounaakana[18]!==7 || ezzikana[12]!==7){
        if(sukippu===1){
            hosoku.innerText='';
            hosoku.innerText='白クロス完成';
        }
        hourensouda=[22,22];
    }else if(kounaakana[21]!==8 || ezzikana[14]!==8){
        if(sukippu===1){
            hosoku.innerText='';
            hosoku.innerText='白クロス完成';
        }
        hourensouda=[23];
    }else{
        if(sukippu===2){
            hosoku.innerText='';
            hosoku.innerText='F2L完成';
        }
        ollll();
    }
}
function ollll(){
    zyoutaihaaku++;
    let outihekaero=[0,0];
    for (let nanikakou = 0; nanikakou < 4; nanikakou++) {
        if(ezzikana[nanikakou*2]===0){
            outihekaero[1]++;
            if(outihekaero[1]===zyoutaiizyou[1]){
                ezzikana[nanikakou*2-1]=ezzikana[nanikakou*2];
                ezzikana[nanikakou*2]=0;
            }
        }
    }
    for (let nanikakoukana = 0; nanikakoukana < 4; nanikakoukana++) {
        if(kounaakana[nanikakoukana*3]===0){
            outihekaero[0]++;
            if(outihekaero[0]===zyoutaiizyou[0]){
                kounaakana[nanikakoukana*3-2]=kounaakana[nanikakoukana*3-1]+kounaakana[nanikakoukana*3];
                kounaakana[nanikakoukana*3-1]=0;
                kounaakana[nanikakoukana*3]=0;
            }
        }
    }
    if(outihekaero[0]===zyoutaiizyou[0] && outihekaero[1]===zyoutaiizyou[1]){
        let outihekaero=[0,0,0,0];
        let yabai=[4,1,2,3];
        let kamosi=[3,4,1,2];
        let renai=[2,3,4,1];
        for (let yabaikamosirenai = 0; yabaikamosirenai < 4; yabaikamosirenai++) {
            if(ezzikana[yabaikamosirenai*2]!==yabaikamosirenai+1){
                outihekaero[0]++;
            }
            if(ezzikana[yabaikamosirenai*2]!==yabai[yabaikamosirenai]){
                outihekaero[1]++;
            }
            if(ezzikana[yabaikamosirenai*2]!==kamosi[yabaikamosirenai]){
                outihekaero[2]++;
            }
            if(ezzikana[yabaikamosirenai*2]!==renai[yabaikamosirenai]){
                outihekaero[3]++;
            }
            if(kounaakana[yabaikamosirenai*3]!==yabaikamosirenai+1){
                outihekaero[0]++;
            }
            if(kounaakana[yabaikamosirenai*3]!==yabai[yabaikamosirenai]){
                outihekaero[1]++;
            }
            if(kounaakana[yabaikamosirenai*3]!==kamosi[yabaikamosirenai]){
                outihekaero[2]++;
            }
            if(kounaakana[yabaikamosirenai*3]!==renai[yabaikamosirenai]){
                outihekaero[3]++;
            }
        }
        if(outihekaero[0]===0){
            bunsyou.innerText='';
            hosoku.innerText='';
            tugihe.style.visibility ="hidden";
            koredake=2;
            button.innerText='';
            button.innerText='別のスクランブルへ';
            if(zyoutaiizyou[0]+zyoutaiizyou[1]===0){
                if(zyoutaihaaku===2 && sukippu===4){
                    bunsyou.innerText='PLLスキップの前面揃い!0.347%!';
                    hosoku.innerText='完成!';
                }else if(zyoutaihaaku===1 && sukippu===3){
                    bunsyou.innerText='OLL&PLLスキップ(LLスキップ)の前面揃い!!0.0016%!!!'
                    hosoku.innerText='完成!';
                }else{
                    bunsyou.innerText='完成!';
                    hosoku.innerText='別のスクランブルを開始する場合はボタンを押してください。';
                }
            }else {
                bunsyou.innerText='パリティ(決して揃わない形)になっています';
                hosoku.innerText='ピボットしています。確認して下さい。';
            }
        }else if(outihekaero[1]===0){
            hourensouda=[0];
            if(zyoutaiizyou[0]+zyoutaiizyou[1]===0 && sukippu===4){
                hosoku.innerText='';
                hosoku.innerText='PLL完成';
            }
            if(zyoutaihaaku===2 && sukippu===4){
                bunsyou.innerText='';
                bunsyou.innerText='PLLスキップ!1.389%!';
            }else if(zyoutaihaaku===1 && sukippu===3){
                bunsyou.innerText='';
                bunsyou.innerText='OLL&PLLスキップ(LLスキップ)!0.0064%!!'
            }
        }else if(outihekaero[2]===0){
            hourensouda=[0,0];
            if(zyoutaiizyou[0]+zyoutaiizyou[1]===0 && sukippu===4){
                hosoku.innerText='';
                hosoku.innerText='PLL完成';
            }
            if(zyoutaihaaku===2 && sukippu===4){
                bunsyou.innerText='';
                bunsyou.innerText='PLLスキップ!1.389%!';
            }else if(zyoutaihaaku===1 && sukippu===3){
                bunsyou.innerText='';
                bunsyou.innerText='OLL&PLLスキップ(LLスキップ)!0.0064%!!'
            }
        }else if(outihekaero[3]===0){
            hourensouda=[1];
            if(zyoutaiizyou[0]+zyoutaiizyou[1]===0 && sukippu===4){
                hosoku.innerText='';
                hosoku.innerText='PLL完成';
            }
            if(zyoutaihaaku===2 && sukippu===4){
                bunsyou.innerText='';
                bunsyou.innerText='PLLスキップ!1.389%!';
            }else if(zyoutaihaaku===1 && sukippu===3){
                bunsyou.innerText='';
                bunsyou.innerText='OLL&PLLスキップ(LLスキップ)!0.0064%!!'
            }
        }else if(outihekaero[0]===2){
            bunsyou.innerText='';
            hosoku.innerText='';
            bunsyou.innerText='パリティ(決して揃わない形)になっています';
            if(zyoutaiizyou[0]+zyoutaiizyou[1]===0){
                hosoku.innerText='位置が入れ替わっているキューブがあります。';
            }else{
                hosoku.innerText='位置が入れ替わっているキューブとねじれたキューブがあります。';
            }
        }else if(outihekaero[1]===2){
            hourensouda=[0];
        }else if(outihekaero[2]===2){
            hourensouda=[0,0];
        }else if(outihekaero[3]===2){
            hourensouda=[1];
        }else if(zyoutaiizyou[2]===1){
            kounaakana[2]=kounaakana[1];
            kounaakana[1]=kounaakana[4];
            kounaakana[4]=kounaakana[2];
            kounaakana[2]=0;
            ppll();
        }else if(zyoutaiizyou[0]+zyoutaiizyou[1]===0){
            if(sukippu===3){
                if(zyoutaihaaku===1){
                    zyoutaihaaku=100;
                    bunsyou.innerText='';
                    bunsyou.innerText='OLLスキップ!0.463%!';
                }
                hosoku.innerText='';
                hosoku.innerText='OLL完成';
            }
            sukippu=4;
            ppll();
        }else{
            ppll();
        }
    }else{
        sukippu=3;
        oll();
    }
}
function oll(){
    for (let indexx = 0; indexx < 4; indexx++) {
        if(ezzikana[0]!==0 && ezzikana[2]!==0 && ezzikana[4]!==0 && ezzikana[6]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[2,0,0,3,1,2,0,3,1,2,1,3];
        }else if(ezzikana[0]!==0 && ezzikana[2]!==0 && ezzikana[4]!==0 && ezzikana[6]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[2,0,0,2,2,1,2,2,1,2,2,0,0,2];
        }else if(ezzikana[0]!==0 && ezzikana[2]!==0 && ezzikana[4]!==0 && ezzikana[6]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[16,0,3,1,17,8,2,9];
        }else if(ezzikana[0]!==0 && ezzikana[2]!==0 && ezzikana[4]!==0 && ezzikana[6]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[8,3,9,16,0,2,1,17];
        }else if(ezzikana[0]!==0 && ezzikana[2]!==0 && ezzikana[4]!==0 && ezzikana[6]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[2,2,7,2,0,0,3,6,2,0,0,2];
        }else if(ezzikana[0]!==0 && ezzikana[2]!==0 && ezzikana[4]!==0 && ezzikana[6]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[5,1,4,1,5,0,0,4];
        }else if(ezzikana[0]!==0 && ezzikana[2]!==0 && ezzikana[4]!==0 && ezzikana[6]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[2,0,3,0,2,0,0,3];
        }else if(ezzikana[1]!==0 && ezzikana[3]!==0 && ezzikana[5]!==0 && ezzikana[7]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[2,0,0,2,2,8,2,9,0,0,3,8,2,9];
        }else if(ezzikana[1]!==0 && ezzikana[3]!==0 && ezzikana[5]!==0 && ezzikana[7]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[20,0,2,1,3,15,0,2,1,3,9];
        }else if(ezzikana[1]!==0 && ezzikana[3]!==0 && ezzikana[5]!==0 && ezzikana[7]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[20,2,0,3,1,21,0,8,2,0,3,1,9];
        }else if(ezzikana[1]!==0 && ezzikana[3]!==0 && ezzikana[5]!==0 && ezzikana[7]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[20,2,0,3,1,21,1,8,2,0,3,1,9];
        }else if(ezzikana[1]!==0 && ezzikana[3]!==0 && ezzikana[5]!==0 && ezzikana[7]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[8,3,9,2,0,15,2,1,3,14];
        }else if(ezzikana[1]!==0 && ezzikana[3]!==0 && ezzikana[5]!==0 && ezzikana[7]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[15,2,0,3,14,1,3,8,2,9];
        }else if(ezzikana[1]!==0 && ezzikana[3]!==0 && ezzikana[5]!==0 && ezzikana[7]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[2,0,0,2,2,8,2,9,0,0,13,0,2,1,17];
        }else if(ezzikana[1]!==0 && ezzikana[3]!==0 && ezzikana[5]!==0 && ezzikana[7]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[14,2,0,3,1,3,1,3,0,2,15];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[16,0,3,1,12,0,2,1,3];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[2,0,3,1,13,0,2,1,17];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[19,0,0,4,0,5,0,18];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[16,0,0,3,1,2,1,17];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[2,0,3,1,3,8,2,9,2,0,0,3];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[2,0,3,0,3,8,2,9,2,0,0,3];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[2,0,3,1,3,8,2,9];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[8,2,0,3,1,9];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[3,1,3,8,2,9,0,2];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[2,0,2,2,1,3,8,2,0,2,1,9];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[2,0,0,2,2,8,2,9,2,0,0,3];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[2,0,3,0,2,1,3,1,3,8,2,9];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[5,1,4,1,5,0,4,0,4,9,5,8];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[3,8,2,0,3,1,9,0,2];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[4,9,5,1,4,0,8,1,5];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[16,0,17,0,2,1,3,0,2,1,13,1,16];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[3,9,1,8,1,2,0,3,0,2];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[8,0,2,1,3,0,2,1,3,9];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[3,8,2,0,2,1,2,2,9,2,2,1,3,0,2,0,3];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[16,0,3,0,2,0,0,17];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[19,1,4,1,5,0,0,18];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[12,2,0,3,0,2,0,0,3,0,13];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[12,5,1,4,1,5,0,0,4,1,13];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[8,0,2,1,2,2,9,2,0,2,1,3];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[9,1,5,0,4,4,8,5,1,5,0,4];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[16,0,12,0,3,1,16,1,17];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[17,1,13,1,2,0,17,0,16];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[14,2,0,3,1,3,8,2,20];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[3,1,8,0,2,1,3,9,2];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[3,1,2,1,3,0,0,2,8,2,0,3,1,9];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[8,0,2,1,3,9];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[9,1,5,0,4,8];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[2,0,3,0,2,0,0,3,8,2,0,3,1,9];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]]!==0 && kounaakana[kounaa[3+indexx]]!==0){
            hourensouda=[17,7,16,1,17,6,16,4,9,5,0,4,8,5];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]]!==0 && kounaakana[kounaa[1+indexx]]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[18,6,19,0,18,7,19,3,8,2,1,3,9,2];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[16,0,3,0,2,1,3,0,2,0,0,17];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[19,1,4,1,5,0,4,1,5,0,0,18];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+1]!==0 && kounaakana[kounaa[1+indexx]+2]!==0 && kounaakana[kounaa[2+indexx]+2]!==0 && kounaakana[kounaa[3+indexx]+1]!==0){
            hourensouda=[8,2,0,3,1,2,0,3,1,9];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]+1]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[9,5,1,4,0,5,1,4,0,8];
        }else if(ezzikana[ezzi[indexx]+1]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[19,0,18,18,1,18,18,1,18,18,0,18];
        }else if(ezzikana[ezzi[indexx]]!==0 && ezzikana[ezzi[1+indexx]+1]!==0 && ezzikana[ezzi[2+indexx]+1]!==0 && ezzikana[ezzi[3+indexx]]!==0 && kounaakana[kounaa[indexx]+2]!==0 && kounaakana[kounaa[1+indexx]+1]!==0 && kounaakana[kounaa[2+indexx]+1]!==0 && kounaakana[kounaa[3+indexx]+2]!==0){
            hourensouda=[18,1,18,18,0,18,18,0,18,18,1,18];
        }
        if(hourensouda.length!==0){
            if(indexx===1){
                hourensouda.unshift(0);
            }else if(indexx===2){
                hourensouda.unshift(0,0);
            }else if(indexx===3){
                hourensouda.unshift(1);
            }
            break;
        }
    }
    if(hourensouda.length===0){
        if(zyoutaiizyou===[0,0,0]){
            zyoutaiizyou=[1,0];
            ollll();
        }else if(zyoutaiizyou===[1,0,0]){
            zyoutaiizyou=[0,1];
            ollll();
        }else if(zyoutaiizyou===[0,1,0]){
            zyoutaiizyou=[1,1]
            ollll();
        }
    }
    console.log(ezzikana,kounaakana);
    console.log(hourensouda);
}
function ppll(){
    let identy=[1,2,3,4,1,2,3]
    for (let idexxs = 0; idexxs < 4; idexxs++) {
        for (let innn = 0; innn < 4; innn++) {
            if(ezzikana[ezzi[innn]]===identy[idexxs+3] && kounaakana[kounaa[innn]]===identy[idexxs] && ezzikana[ezzi[innn+1]]===identy[idexxs] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs+1] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[12,12,1,12,0,0,13,1,12,12];
                hosoku.innerText='';
                hosoku.innerText='Uaパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs+1] && kounaakana[kounaa[innn]]===identy[idexxs] && ezzikana[ezzi[innn+1]]===identy[idexxs+3] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[12,12,0,12,0,0,13,0,12,12,];
                hosoku.innerText='';
                hosoku.innerText='Ubパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs+2] && kounaakana[kounaa[innn]]===identy[idexxs] && ezzikana[ezzi[innn+1]]===identy[idexxs+3] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs+1] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[12,12,0,12,12,0,0,12,12,0,12,12];
                hosoku.innerText='';
                hosoku.innerText='Hパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs+3] && kounaakana[kounaa[innn]]===identy[idexxs] && ezzikana[ezzi[innn+1]]===identy[idexxs+2] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs+1] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[12,12,1,12,12,1,13,0,0,12,12,0,0,13];
                hosoku.innerText='';
                hosoku.innerText='Zパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+1] && ezzikana[ezzi[innn+1]]===identy[idexxs+3] && kounaakana[kounaa[innn+1]]===identy[idexxs] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs+1] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[2,0,3,1,3,8,2,2,1,3,1,2,0,3,9];
                hosoku.innerText='';
                hosoku.innerText='Tパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs+2] && kounaakana[kounaa[innn]]===identy[idexxs+1] && ezzikana[ezzi[innn+1]]===identy[idexxs+1] && kounaakana[kounaa[innn+1]]===identy[idexxs] && ezzikana[ezzi[innn+2]]===identy[idexxs] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs+3] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[3,1,9,2,0,3,1,3,8,2,2,1,3,1,2,0,3,0,2];
                hosoku.innerText='';
                hosoku.innerText='Fパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+1] && ezzikana[ezzi[innn+1]]===identy[idexxs+1] && kounaakana[kounaa[innn+1]]===identy[idexxs] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs+3] && ezzikana[ezzi[innn+3]]===identy[idexxs+3] && kounaakana[kounaa[innn+3]]===identy[idexxs+2]){
                hourensouda=[2,11,3,8,2,10,3,9,2,10,3,8,2,11,3];
                hosoku.innerText='';
                hosoku.innerText='Eパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs] && ezzikana[ezzi[innn+1]]===identy[idexxs+1] && kounaakana[kounaa[innn+1]]===identy[idexxs+3] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs+1] && ezzikana[ezzi[innn+3]]===identy[idexxs+3] && kounaakana[kounaa[innn+3]]===identy[idexxs+2]){
                hourensouda=[11,2,11,4,4,10,3,11,4,4,10,10];
                hosoku.innerText='';
                hosoku.innerText='Aaパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+1] && ezzikana[ezzi[innn+1]]===identy[idexxs+1] && kounaakana[kounaa[innn+1]]===identy[idexxs+2] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs] && ezzikana[ezzi[innn+3]]===identy[idexxs+3] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[10,5,10,2,2,11,4,10,2,2,10,10];
                hosoku.innerText='';
                hosoku.innerText='Abパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+2] && ezzikana[ezzi[innn+1]]===identy[idexxs+1] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs+3] && kounaakana[kounaa[innn+2]]===identy[idexxs] && ezzikana[ezzi[innn+3]]===identy[idexxs+2] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[8,2,1,3,1,2,0,3,9,2,0,3,1,3,8,2,9];
                hosoku.innerText='';
                hosoku.innerText='Yパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+2] && ezzikana[ezzi[innn+1]]===identy[idexxs+2] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs+1] && kounaakana[kounaa[innn+2]]===identy[idexxs] && ezzikana[ezzi[innn+3]]===identy[idexxs+3] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[3,0,2,1,3,21,0,2,0,0,3,1,2,1,3,20,2];
                hosoku.innerText='';
                hosoku.innerText='Vパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+2] && ezzikana[ezzi[innn+1]]===identy[idexxs+3] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs] && ezzikana[ezzi[innn+3]]===identy[idexxs+1] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[17,7,8,16,1,17,9,6,16,16,0,17,1,17,8,16,9];
                hosoku.innerText='';
                hosoku.innerText='Nbパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs] && ezzikana[ezzi[innn+1]]===identy[idexxs+3] && kounaakana[kounaa[innn+1]]===identy[idexxs+3] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs+1] && kounaakana[kounaa[innn+3]]===identy[idexxs+1]){
                hourensouda=[2,0,3,0,2,0,3,9,2,0,3,1,3,8,2,2,1,3,0,0,2,1,3];
                hosoku.innerText='';
                hosoku.innerText='Naパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+3] && ezzikana[ezzi[innn+1]]===identy[idexxs+2] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs+1] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs+3] && kounaakana[kounaa[innn+3]]===identy[idexxs]){
                hourensouda=[2,1,2,2,7,2,0,3,6,2,1,2,1,3,0,2,0,3];
                hosoku.innerText='';
                hosoku.innerText='Raパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs+3] && kounaakana[kounaa[innn]]===identy[idexxs+1] && ezzikana[ezzi[innn+1]]===identy[idexxs+1] && kounaakana[kounaa[innn+1]]===identy[idexxs] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[2,2,8,2,0,2,1,3,9,2,0,0,3,0,0,2];
                hosoku.innerText='';
                hosoku.innerText='Rbパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+1] && ezzikana[ezzi[innn+1]]===identy[idexxs+2] && kounaakana[kounaa[innn+1]]===identy[idexxs] && ezzikana[ezzi[innn+2]]===identy[idexxs+1] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs+3] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[3,13,8,2,9,2,0,0,17,0,16,0,0,17];
                hosoku.innerText='';
                hosoku.innerText='Jaパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs+1] && kounaakana[kounaa[innn]]===identy[idexxs+1] && ezzikana[ezzi[innn+1]]===identy[idexxs] && kounaakana[kounaa[innn+1]]===identy[idexxs] && ezzikana[ezzi[innn+2]]===identy[idexxs+2] && kounaakana[kounaa[innn+2]]===identy[idexxs+2] && ezzikana[ezzi[innn+3]]===identy[idexxs+3] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[2,0,3,9,2,0,3,1,3,8,2,2,1,3];
                hosoku.innerText='';
                hosoku.innerText='Jbパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs+2] && ezzikana[ezzi[innn+1]]===identy[idexxs+2] && kounaakana[kounaa[innn+1]]===identy[idexxs] && ezzikana[ezzi[innn+2]]===identy[idexxs+3] && kounaakana[kounaa[innn+2]]===identy[idexxs+1] && ezzikana[ezzi[innn+3]]===identy[idexxs+1] && kounaakana[kounaa[innn+3]]===identy[idexxs+3]){
                hourensouda=[2,2,8,8,2,0,0,2,0,0,3,8,2,0,3,1,3,8,2,2];
                hosoku.innerText='';
                hosoku.innerText='Gcパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs] && kounaakana[kounaa[innn]]===identy[idexxs] && ezzikana[ezzi[innn+1]]===identy[idexxs+2] && kounaakana[kounaa[innn+1]]===identy[idexxs+3] && ezzikana[ezzi[innn+2]]===identy[idexxs+3] && kounaakana[kounaa[innn+2]]===identy[idexxs+1] && ezzikana[ezzi[innn+3]]===identy[idexxs+1] && kounaakana[kounaa[innn+3]]===identy[idexxs+2]){
                hourensouda=[2,2,0,3,0,3,1,2,1,2,2,6,1,3,0,2,7];
                hosoku.innerText='';
                hosoku.innerText='Gaパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs+3] && kounaakana[kounaa[innn]]===identy[idexxs+2] && ezzikana[ezzi[innn+1]]===identy[idexxs+1] && kounaakana[kounaa[innn+1]]===identy[idexxs+1] && ezzikana[ezzi[innn+2]]===identy[idexxs] && kounaakana[kounaa[innn+2]]===identy[idexxs+3] && ezzikana[ezzi[innn+3]]===identy[idexxs+2] && kounaakana[kounaa[innn+3]]===identy[idexxs]){
                hourensouda=[3,1,2,0,7,2,2,0,3,0,2,1,2,1,2,2,6];
                hosoku.innerText='';
                hosoku.innerText='Gbパーム';
            }else if(ezzikana[ezzi[innn]]===identy[idexxs+2] && kounaakana[kounaa[innn]]===identy[idexxs] && ezzikana[ezzi[innn+1]]===identy[idexxs+1] && kounaakana[kounaa[innn+1]]===identy[idexxs+3] && ezzikana[ezzi[innn+2]]===identy[idexxs+3] && kounaakana[kounaa[innn+2]]===identy[idexxs+1] && ezzikana[ezzi[innn+3]]===identy[idexxs] && kounaakana[kounaa[innn+3]]===identy[idexxs+2]){
                hourensouda=[2,0,3,1,6,2,2,1,2,1,3,0,3,0,2,2,7];
                hosoku.innerText='';
                hosoku.innerText='Gdパーム';
            }
            if(hourensouda.length!==0){
                if(innn===1){
                    hourensouda.unshift(0);
                }else if(innn===2){
                    hourensouda.unshift(0,0);
                }else if(innn===3){
                    hourensouda.unshift(1);
                }
                break;
            }
        }
        if(hourensouda.length!==0){
            break;
        }
    }
    console.log(ezzikana,kounaakana);
    console.log(hosoku);
    console.log(hourensouda);
    if(hourensouda.length===0){
        zyoutaiizyou[2]=1;
        ollll();
    }
}
function ehutuueru(){
    let hantei=ezzikana.indexOf(5);
    let hentai=kounaakana.indexOf(5);
    for (let index = 0; index < 4; index++) {
        if(hentai===kounaa[3+index]+1 && hantei===ezzi[index]){
            hourensouda=[2,1,3];
        }else if(hentai===kounaa[1+index]+2 && hantei===ezzi[1+index]+1){
            hourensouda=[9,0,8];
        }else if(hentai===kounaa[index]+2 && hantei===ezzi[2+index]){
            hourensouda=[2,0,3];
        }else if(hentai===kounaa[index]+1 && hantei===ezzi[3+index]+1){
            hourensouda=[9,1,8];
        }else if(hentai===kounaa[3+index]+2 && hantei===ezzi[2+index]){
            hourensouda=[9,0,8,1,2,0,3];
        }else if(hentai===kounaa[1+index]+1 && hantei===ezzi[3+index]+1){
            hourensouda=[2,1,3,0,9,1,8];
        }else if(hentai===kounaa[3+index]+2 && hantei===ezzi[2+index]+1){
            hourensouda=[9,1,8,0,0,9,0,8];
        }else if(hentai===kounaa[1+index]+1 && hantei===ezzi[3+index]){
            hourensouda=[2,0,3,0,0,2,1,3];
        }else if(hentai===kounaa[3+index]+2 && hantei===ezzi[1+index]+1){
            hourensouda=[9,0,0,8,0,0,9,0,8];
        }else if(hentai===kounaa[1+index]+1 && hantei===ezzi[index]){
            hourensouda=[2,0,0,3,0,0,2,1,3];
        }else if(hentai===12 && hantei===ezzi[2+index]+1){
            hourensouda=[9,0,8,0,2,1,3];
        }else if(hentai===12 && hantei===ezzi[3+index]){
            hourensouda=[2,1,3,1,9,0,8];
        }else if(hentai===kounaa[1+index] && hantei===ezzi[index]+1){
            hourensouda=[9,0,0,8,1,9,0,8];
        }else if(hentai===kounaa[3+index] && hantei===ezzi[1+index]){
            hourensouda=[2,0,0,3,0,2,1,3];
        }else if(hentai===kounaa[2+index] && hantei===ezzi[+index]+1){
            hourensouda=[9,1,8,1,9,0,8];
        }else if(hentai===kounaa[2+index] && hantei===ezzi[1+index]){
            hourensouda=[2,0,3,0,2,1,3];
        }else if(hentai===kounaa[1+index]+1 && hantei===ezzi[2+index]+1){
            hourensouda=[2,0,0,3,0,9,1,8];
        }else if(hentai===kounaa[3+index]+2 && hantei===ezzi[3+index]){
            hourensouda=[9,0,0,8,1,2,0,3];
        }else if(hentai===kounaa[1+index]+2 && hantei===ezzi[2+index]){
            hourensouda=[2,1,3,0,2,0,3];
        }else if(hentai===kounaa[3+index]+1 && hantei===ezzi[3+index]+1){
            hourensouda=[9,0,8,1,9,1,8];
        }else if(hentai===kounaa[index] && hantei===ezzi[1+index]){
            hourensouda=[2,0,0,3,1,2,0,3];
        }else if(hentai===kounaa[index] && hantei===ezzi[index]+1){
            hourensouda=[9,0,0,8,0,9,1,8];
        }else if(hentai===kounaa[index] && hantei===ezzi[1+index]+1){
            hourensouda=[9,1,9,4,8,5,0,0,8];
        }else if(hentai===kounaa[index] && hantei===ezzi[index]){
            hourensouda=[2,0,2,7,3,6,0,0,3];
        }else if(hentai===kounaa[index]+2 && hantei===ezzi[1+index]+1){
            hourensouda=[2,1,3,0,0,9,1,8];
        }else if(hentai===kounaa[index]+1 && hantei===ezzi[index]){
            hourensouda=[9,0,8,0,0,2,0,3];
        }else if(hentai===14 && hantei===ezzi[1+index]){
            hourensouda=[2,1,3,0,2,1,3];
        }else if(hentai===14 && hantei===ezzi[2+index]+1){
            hourensouda=[2,1,3,9,1,8];
        }else if(hentai===13 && hantei===ezzi[index]+1){
            hourensouda=[9,0,8,1,9.0,8];
        }else if(hentai===13 && hantei===ezzi[3+index]){
            hourensouda=[9,0,8,2,0,3];
        }else if(hentai===kounaa[3+index]+2 && hantei===8){
            hourensouda=[9,0,8,0,0,9,0,8];
        }else if(hentai===kounaa[3+index]+2 && hantei===9){
            hourensouda=[9,1,8,1,2,0,3];
        }else if(hentai===kounaa[1+index]+1 && hantei===8){
            hourensouda=[2,1,3,0,0,2,1,3];
        }else if(hentai===kounaa[1+index]+1 && hantei===9){
            hourensouda=[2,0,3,0,9,1,8];
        }else if(hentai===kounaa[index] && hantei===9){
            hourensouda=[2,1,3,9,0,0,8];
        }else if(hentai===kounaa[index]+1 && hantei===8){
            hourensouda=[9,9,1,9,9,1,9,9,0,0,9,9];
        }
        if(hourensouda.length>0){
            if(index===3){
                hourensouda.unshift(1);
            }else if(index===2){
                hourensouda.unshift(0,0);
            }else if(index===1){
                hourensouda.unshift(0);
            }
            break;
        }
    }
    if(hentai===12 && hantei===9){
        hourensouda=[9,9,0,0,3,9,9,2,0,0,8,1,8]
    }else if(hentai===13 && hantei===8){
        hourensouda=[2,0,0,2,0,3,0,2,0,0,2,2]
    }else if(hentai===14 && hantei===8){
        hourensouda=[9,0,0,9,1,8,1,9,0,0,9,9]
    }else if(hentai===13 && hantei===9){
        hourensouda=[9,0,9,1,5,0,4,9,9]
    }else if(hentai===14 && hantei===9){
        hourensouda=[2,1,2,0,10,1,11,2,2]
    }
    if(hourensouda.length===0){
        let neruwa=[];
        if(hentai===3 || hentai===4 || hentai===5 || hantei===2 || hantei===3){
            neruwa.push(1);
        }
        if(hentai===6 || hentai===7 || hentai===8 || hantei===4 || hantei===5){
            neruwa.push(2);
        }
        if(hentai===9 || hentai===10 || hentai===11 || hantei===6 || hantei===7){
            neruwa.push(3);
        }
        if(hentai===0 || hentai===1 || hentai===2 || hantei===0 || hantei===1){
            neruwa.push(4);
        }
        if(hentai===15 || hentai===16 || hentai===17 || hantei===10 || hantei===11){
            neruwa.push(5);
        }
        if(hentai===18 || hentai===19 || hentai===20 || hantei===12 || hantei===13){
            neruwa.push(6);
        }
        if(hentai===21 || hentai===22 || hentai===23 || hantei===14 || hantei===15){
            neruwa.push(7);
        }
        if(neruwa[0]===5 || neruwa[1]===5){
            if(neruwa[0]===2){
                hourensouda=[0];
            }
            hourensouda.push(3,0,2);
        }else if(neruwa[0]===6 || neruwa[1]===6){
            if(neruwa[0]===3){
                hourensouda=[0];
            }
            hourensouda.push(11,0,10);
        }else if(neruwa[0]===7 || neruwa[1]===7){
            if(neruwa[0]===4){
                hourensouda=[0];
            }
            hourensouda.push(5,0,4);
        }
    }
    console.log(hantei,hentai);
    console.log(hourensouda);
}
function sirokurosu(){
    if(ezzikana[0]===9){
        hourensouda=[8,8];
    }else if(ezzikana[1]===9){
        hourensouda=[8,6,3,7];
    }else if(ezzikana[2]===9){
        hourensouda=[0,8,8];
    }else if(ezzikana[3]===9){
        hourensouda=[3,8,2];
    }else if(ezzikana[4]===9){
        hourensouda=[0,0,8,8];
    }else if(ezzikana[5]===9){
        hourensouda=[0,3,9,2];
    }else if(ezzikana[6]===9){
        hourensouda=[1,8,8];
    }else if(ezzikana[7]===9){
        hourensouda=[4,9,5];
    }else if(ezzikana[8]===9){
        hourensouda=[6,3,7];
    }else if(ezzikana[9]===9){
        hourensouda=[8];
    }else if(ezzikana[10]===9){
        hourensouda=[6,6,11,6,6];
    }else if(ezzikana[11]===9){
        hourensouda=[6,2,7];
    }else if(ezzikana[12]===9){
        hourensouda=[7,5,6];
    }else if(ezzikana[13]===9){
        hourensouda=[6,6,10,6,6];
    }else if(ezzikana[14]===9){
        hourensouda=[9];
    }else if(ezzikana[15]===9){
        hourensouda=[7,4,6];
    }else if(ezzikana[17]===9){
        hourensouda=[9,6,3,7];
    }else if(ezzikana[18]===9){
        hourensouda=[2,6,3,7];
    }else if(ezzikana[19]===9){
        hourensouda=[2,8];
    }else if(ezzikana[20]===9){
        hourensouda=[10,10,0,0,8,8];
    }else if(ezzikana[21]===9){
        hourensouda=[10,6,2,7];
    }else if(ezzikana[22]===9){
        hourensouda=[5,7,4,6];
    }else if(ezzikana[23]===9){
        hourensouda=[5,9];
    }
    console.log(ezzikana.indexOf(9));
    console.log(hourensouda);
}
function tukuttemita(){
    let nakanaka = Math.floor( Math.random() * 6 );
    if(nakanaka===konaina){
        tukuttemita();
    }else{
        konaina=nakanaka;
        let konayuki=Math.floor( Math.random() * 3 );
        if(nakanaka===0){
            nasake=nasake+'U';
            hourensouda.push(0);
        }else if(nakanaka===1){
            nasake=nasake+'D';
            hourensouda.push(6);
        }else if(nakanaka===2){
            nasake=nasake+'F';
            hourensouda.push(8);
        }else if(nakanaka===3){
            nasake=nasake+'B';
            hourensouda.push(10);
        }else if(nakanaka===4){
            nasake=nasake+'R';
            hourensouda.push(2);
        }else if(nakanaka===5){
            nasake=nasake+'L';
            hourensouda.push(4);
        }
        if(konayuki===1){
            nasake=nasake+"'";
            hourensouda[hourensouda.length-1]++; 
        }else if(konayuki===2){
            nasake=nasake+'2';
            let houre=hourensouda[hourensouda.length-1];
            hourensouda.push(houre);
        }
        nasake=nasake+' ';
        kokonikaku.innerText=nasake;
    }
}
mouitido.onclick=()=>{
    nasake='';
    kokonikaku.innerText='';
    hourensouda=[];
    for (let tukuru = 0; tukuru < 20; tukuru++) {
        tukuttemita();
    }
}
tekiyou.onclick=()=>{
    uedato=[0,0,0,0,0,0,0,0,0];
    maedato=[4,4,4,4,4,4,4,4,4];
    migidato=[1,1,1,1,1,1,1,1,1];
    usirodato=[2,2,2,2,2,2,2,2,2];
    hidaridato=[3,3,3,3,3,3,3,3,3];
    sitadato=[5,5,5,5,5,5,5,5,5];
    for (let hou = 0; hou < hourensouda.length; hou) {
        inonotarou();
    }
    siro=uedato;
    midori=maedato;
    aka=migidato;
    ao=usirodato;
    daidai=hidaridato;
    kiiro=sitadato;
    inne();
    koredake=0;
    document.getElementsByClassName('atara')[0].classList.toggle('visi');
}
mouitido.addEventListener('mouseover', () => {
    poppu.style.display = 'block';
}, false);
mouitido.addEventListener('mouseleave', () => {
    poppu.style.display = 'none';
}, false);
tekiyou.addEventListener('mouseover', () => {
    poppo.style.display = 'block';
}, false);
tekiyou.addEventListener('mouseleave', () => {
    poppo.style.display = 'none';
}, false);