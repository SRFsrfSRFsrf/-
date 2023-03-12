let DanCi=["tedious","oblige","absorbed","allrgic","excursion","earnest","exclaim","whoa","civilization","architecture","capture","condense","condensed","exceed",
"distress","distinguish","distinctive","complimentary","complementary","bulk","criticism","deficit","dumb","grocery","stationary","stationery","pad",
"album","proclaim","scandal","thrust","proficiency","moreover","evidently","exposure","adequate","adequately","competent","jerk","jerky","function",
"span","scratch","tune","adjust","destinetion","precise","beneficial","asset","sour","subjunctive","be/feel obliged to do sth","get/be serious about",
"run into sb","fresh from","distinguish between","nail sth.down","thrust sth.upon sb","get/feel/be lost","become/be attracted to sth.","out of curiosity",
"look upon sb/sth.as","be equipped with sth","swell with pride/anger,etc"];
let DanCiFanYi=["a. 冗长乏味的","vt. 迫使；使负有义务","a. 极感兴趣的；全神贯注的；专注的","a. 不喜欢某事；对某事反感   过敏的","n. 短途出行；远足","a. 非常认真的；郑重其事的","v. （由于惊奇.气氛或激动）呼喊，惊叫","intery. 哎呀，哇（表示惊讶或认为某事物令人赞叹）","n. 文明（社会）","n. 建筑风格；建筑式样   建筑学","vt. （用文字或图片）记录下，描述，捕捉   俘虏；逮捕","vt. 将（讲话或文章）压缩","a. 压缩的","vt. 超过；超出","n. 忧虑；苦恼；悲伤","v. 区分；辨别","a. 与众不同的；特殊的；特别的",
"a. 免费赠送的   赞美的；钦佩的","a. 互为补充的；互补的","n. （某物的）大部分，多半","n. 批评，批判，指责","n. （素质，技能或能力的）缺乏，不足   赤字；亏损；逆差","a. 愚蠢的","n. 超级市场   食品杂货","a. 不（移）动的；静止的","n. 文具","n. 便笺本；拍纸薄   垫；衬垫；护垫","n. （收存照片.邮票等的）薄；册","vt. 宣称；宣布；声明","n. （尤指当局本应改变的）令人震惊的事，引起愤慨的事   （尤指牵涉知名人士的）丑闻，丑事","v. 猛推；猛塞","n. 熟练；精通",
"ad. 而且；再者；此外","ad. 明显地；显然","n. 接触；体验   暴露","a. 足够的；充分的；合乎需求的","ad. 足够地；充分地","a. 合格的；能干的","n. 猛的一动；猝然一动","a. （在行进中）不平稳的，颠簸的","n. （事物的）功能，作用；（某人的）职责   vi. 正常工作；正常运转","n. （两个日期或事件之间的）时距，期间",
"n. 从零开始；从头开始；白手起家   （物件或皮肤上的）刮痕，划痕","vt. 调整；调节（发动机）使达到最佳状态   为（乐器）调音，定弦","v. 调整；调节   适应","n. 目的地；终点","a. 精确的；准确的","a. 有利的；有帮助的；有用的","n. 有利条件；长处   资产，财产","a. 酸的","a. （语法中的）虚拟语气的   n. （语法中的）虚拟语气","（因形式.法律.义务等关系而）非做不可，迫使","对···是认真的；并非开玩笑的","偶然遇见某人","刚从···来的；刚有···经历的","区分；辨别","钉；将某物钉牢   最终确定；对某事作出定论","迫使某人做某事；迫使某人接受某事   迷惘；困惑；不知所措","对某事/物产生兴趣","出于好奇","吧某人/某物看作","以···为装备；配备···","洋洋得意/怒气冲冲等"];
let Num=new Array();
let Judgement;
Judgement=0;
/*let name=window.prompt("请输入你的名字：");
if(name=="石若飞"||name=="srf"||name=='SRF')
{
    Judgement=0;
}
else
{
    window.alert("名字不正确，您无法使用此功能");
}*/
function JiZhi()
{
    let h=1;
    while(h)
    {
        Num[1]=Math.floor(Math.random()*100000%DanCi.length);
        if(Num[1]==Num[0])
        {
            h=1;
        }
        else
        {
            Num[0]=Num[1];
            h=0;
        }
    }
}
function KaiShi()
{
    let box1=document.getElementById('body1');
    let box31=document.getElementById('body31');
    if(Judgement==0)
    {
        Num[0]=Math.floor(Math.random()*100000%DanCi.length);
        box1.innerHTML=DanCi[Num[0]];
        box31.innerHTML="继续";
        Judgement=1;
    }
    else if(Judgement==1)
    {
        JiZhi();
        box31.innerHTML="继续";
        box1.innerHTML=DanCi[Num[0]];
    }
    else if(Judgement==2)
    {
        JiZhi();
        box31.innerHTML="继续";
        box1.innerHTML=DanCiFanYi[Num[0]];
    }
}
function TiShi()
{
    let box2=document.getElementById('body2');
    if(Judgement==0||Judgement==1)
    {
        box2.innerHTML=DanCiFanYi[Num[0]];
    }
    else if(Judgement==2)
    {
        box2.innerHTML=DanCi[Num[0]];
    }
}
function JieShu()
{
    let box1=document.getElementById('body1');
    let box2=document.getElementById('body2');
    let box31=document.getElementById('body31');
    if(Judgement==1||Judgement==2)
    {
        box1.innerHTML="无";
        box2.innerHTML="无";
        box31.innerHTML="开始";
        Judgement=0;
    }
}
function ZhuanHuan()
{
    let box31=document.getElementById('body31');
    if(Judgement==0||Judgement==1)
    {
        window.alert("已转换成中文");
        box31.innerHTML="开始";
        Judgement=2;
    }
    else if(Judgement==2)
    {
        window.alert("已转换成英文");
        box31.innerHTML="开始";
        Judgement=1;
    }
}
Num[2]=0;
function JiCuo()
{
    let box1_1=document.getElementById('body2_1');
    if(box1_1[Num[2]].innerHTML!="无")
    {
        let i;
        for(i=0;i<9;i++)
        {
            box1_1[i]=box1_1[i+1];
        }
        box1_1[Num[2]].innerHTML=DanCi[Num[0]];
        Num[2]=9;
    }
    else
    {
        box1_1[Num[2]].innerHTML=DanCi[Num[0]];
        Num[2]++;
    }
}
