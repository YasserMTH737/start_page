"use strict";

function handleResize() {
    var widthX = window.innerWidth;
    var heightX = window.innerHeight;

    var heightCAR = document.getElementById("captionAR").clientHeight * 2;
    var heightCEN = document.getElementById("captionEN").clientHeight * 2;

    var widthY = (widthX / 2);
    //
    var backPhoto = document.getElementById("photo").style;
    var photoSecX = document.getElementById("Background photos").style;

    var capARF = document.getElementById("forwardOverlayARCaption").style;
    var capARB = document.getElementById("backwardOverlayARCaption").style;

    var capENF = document.getElementById("forwardOverlayENCaption").style;
    var capENB = document.getElementById("backwardOverlayENCaption").style;
    //
    backPhoto.height = heightX.toString() + "px";
    backPhoto.width = widthX.toString() + "px";

    photoSecX.height = widthX.toString() + "px";
    photoSecX.height = heightX.toString() + "px";

    capARF.height = capARB.height = heightCAR.toString() + "px";
    capENF.height = capENB.height = heightCEN.toString() + "px";

    capARF.width = capARB.width = capENF.width = capENB.width = widthY.toString() + "px";
}

handleResize();
window.addEventListener("resize",handleResize,false);

var photos = [
    "http://www.trainingmagazine.ae/wp-content/uploads/2014/07/saudi-arabia-flag.jpg",
    "https://www.highreshdwallpapers.com/wp-content/uploads/2012/05/Blue-Square-Wallpaper.jpg",
    "IMG_20170324_174129.jpg",
];

var captionAR = [
    "قال السماء كئيبة وتجهما *** قلت: ابتسم، يكفي التجهم في السماء",
    "بقدرِ الكدِّ تكتسبُ المعالي *** ومن طلب العلا سهر الليالي",
    "تروم العز ثم تنام ليلاً *** يغوص البحر من طلب اللآلي",
    "سَلامٌ عَلَى الدُّنْيَا إذا لَمْ يَكُنْ بِهَا *** صَدِيقٌ صَدُوقٌ صَادِقُ الوَعْدِ مُنْصِفَا",
    "دَعِ الأَيَّامَ تَفْعَل مَا تَشَاءُ *** وطب نفساً إذا حكمَ القضاءُ",
    "نعيب زماننا والعيب فينا *** وما لزماننا عيبٌ سوانا",
    "وليسَ الذئبُ يأكلُ لحمَ ذئبٍ *** ويأكلُ بعضنا بعضاً عيانا",
    "يُخَاطِبني السَّفيهُ بِكُلِّ قُبْحٍ *** فأكرهُ أن أكونَ له مجيبا",
    "شَكَوْتُ إلَى وَكِيعٍ سُوءَ حِفْظِي *** فَأرْشَدَنِي إلَى تَرْكِ المعَاصي",
    "إني رأيتُ وقوفَ الماء يفسدهُ *** إِنْ سَاحَ طَابَ وَإنْ لَمْ يَجْرِ لَمْ يَطِبِ",
    "أما تَرَى الأُسْدَ تُخْشى وهْي صَامِتة ٌ؟ ***  والكلبُ يخسى لعمري وهو نباحُ",
    "إِذا هَبَّتْ رِياحُكَ فَاغْتَنِمْها",
    "تعلم فليسَ المرءُ يولدُ عالماً ***  وَلَيْسَ أخو عِلْمٍ كَمَنْ هُوَ جَاهِلُ",
    "إذا لم تخشَ عاقبة َ الليالي *** وَلَمْ تستحِ فافعَلْ ما تشاءُ",
    "الابتسامة عند الامرأة كالعلامة السرية عند ابناء الماسونية، كل النساء تستطيع استعمالها بجرأة لأنه ليس آحد سواهن يستطيع فهمها.",
    "في حالات المرض، تتميز الأحلام بشدة خارقة وبروز قوي. وتتشابه كثيرا مع الواقع.. قد تكون اللوحة، بمجموعها عجيبة وشاذة، ولكن تسلسل الصور والإطار العام يكونان -في الوقت ذاته- على درجة من المعقولية، ويشتملان على تفاصيل دقيقة جدا.",
    "العبد حر إذا قنع، والحر عبد إذا طمع.",
    "السياسة ليس لها دين و أن الدين إذا خالف السياسة كفرته السياسة و لكن لا يحق للدين تكفيرها إن خالفته!",
    "وأَتْعَبُ مَن ناداك من لا تُجيبه ****	وأَغيظُ مَن عاداك مَن لا تُشاكل",
    "مَا قَلَّ مَالِيَ إِلاَّ زَادَنِي كَرَمًا ***** حَتَّى يَكُونَ بِرِزْقِ اللَّهِ تَعْوِيضِي",
    "وَلا أَحمِلُ الحِقدَ القَديمَ عَلَيهِم ***** وَلَيسَ كَريمُ القَومِ مَن يَحمِلُ الحِقد",
    "فَإِن يَأكُلوا لَحمي وَفَرتُ لحومَهُم ***** وَإِن يَهدِموا مَجدي بنيتُ لَهُم مَجدا",
    "لمثل هذا يذوب القلبُ من كمدٍ 	إن كان في القلبِ إسلامٌ وإيمانُ /الأندلس",


];

var captionEN = [
    "Someday, I’ll write the next page",
    "Grey words can’t make anything happen",
    "Step by step I go, though it’s a doubtful world",
    "Go beyond even the unseen fears",
    "I’ve thought many times, that the revolution was within my hands. Isn’t it strange? If you want to laugh, go ahead and laugh.",
    "The rest of us who were lift behind wanted to become something",
    "We repeat the same morning over and over",
    "You’re the only one who can choose your tomorrow",
    "If you always do what you always did, you’ll always get what you always got",
    "A dream isn’t something that someone tells you to go for. It’s something you fulfill of your own will. ",
    /*"",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",*/
    

];

//Changing the photos functions -------------------------------- ***
var x = 0;

function changePicFwd() {
    if (x === photos.length -1) {
        x = 0;
    } else {
    x++;
    }
    var imageX = document.getElementById("photo");
    imageX.setAttribute("src",photos[x]);
    console.log(x);
    return x;
}

function changePicBwd() {
    if (x === 0) {
        x = (photos.length -1);
    } else {
    x--;
    }
    var imageX = document.getElementById("photo");
    imageX.setAttribute("src",photos[x]);
    return x;
}
//---------------------------------------------------------

//Changing the Arabic caption functions
var y = 0;

function changeCaptionARFwd() {
    if (x === captionAR.length -1) {
        x = 0;
    } else {
    x++;
    }
    var ARCaption = document.getElementById("captionAR");
    ARCaption.innerHTML = captionAR[x];
    return x;
}

function changeCaptionARBwd() {
    if (x === 0) {
        x = captionAR.length -1;
    } else {
    x--;
    }
    var ARCaption = document.getElementById("captionAR");
    ARCaption.innerHTML = captionAR[x];
    return x;
}
//--------------------------------------------------------

//Changing the English caption functions
var z = 0;

function changeCaptionENFwd() {
    if (x === captionEN.length -1) {
        x = 0;
    } else {
    x++;
    }
    var ENCaption = document.getElementById("captionEN");
    ENCaption.innerHTML = captionEN[x];
    return x;
}

function changeCaptionENBwd() {
    if (x === 0) {
        x = captionEN.length -1;
    } else {
    x--;
    }
    var ENCaption = document.getElementById("captionEN");
    ENCaption.innerHTML = captionEN[x];
    return x;
}

//---------------------------------------------------