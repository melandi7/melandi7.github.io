//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#C76DC9"; colorText="#000000"; colorSele="#DA8BD3";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Lo hiciste muy bien"; messageTime="Termino el tiempo"; messageError="UPS!"; messageErrorG="UPS!"; messageAttempts="Se terminaron tus intentos "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="Ordenar_resources/media/";
var indexG=0;
var words1G=["wqFIb2xhISBNaSBub21icmUgZXMgTWFyaWEgUGVyw6l6LCDCv2PDs21vIGVzdGFzPw==","wqFIb2xhISBNYXJpLCBlc3RveSBtdXkgYmllbiBtdWNobyBndXN0bywgeSB0dSDCv2PDs21vIGVzdGFzPw==","Z3JhY2lhcyBpZ3VhbG1lbnRlLCB5byBlc3RveSBtdXkgYmllbiBjb24gbXVjaGFzIHRhcmVhcw==","wr9FbiBzZXJpbz8sIHRhcmVhcyDCv2RlIHF1w6kgc29uPw==","U29uIGRlIGluZm9ybcOhdGljYSwgcGxhc3RpY2EgeSBtdWNoYXMgbcOhcy4uLg=="];
var words2G=[];
var words3G=[];
var c1=[45,58,55,31,44];
var c2=[];
var c3=[];
