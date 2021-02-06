let btn_ar = document.getElementById('lang_ar');
let btn_fr = document.getElementById('lang_fr');
let btn_en = document.getElementById('lang_en');

// All Text Node //
var title = document.getElementById('title');
//Home.html Text Node //
var subtitle = document.getElementById('subtitle');
//eqtMethod.html Text Node //
var subtitleDelivery = document.getElementById('subtitle2');
var eatIn = document.getElementById('eatin');
var takeWith = document.getElementById('takewith');



let language = { 
    arabe: { 
      welcome: "مرحبا بكم في سناك ديليس",
      subtitle: "اختر اللغة التي تريدها",
      subtitledelivery: "اختر طريقة الأكل التي تريدها",
      eat_in: "أكل هنا",
      eat_out: "طلبية للاخذ"
    }, 
    french: { 
      welcome: "Bienvenue chez SnackDélice",
      subtitle: "Choisissez la langue que vous voulez",
      subtitledelivery: "Choisissez la méthode Eat que vous voulez",
      eat_in: "Manger ici",
      eat_out: "Emporter"
    }, 
    english: { 
      welcome: "Welcome To SnackDélice",
      subtitle: "Choose the language you want",
      subtitledelivery: "Choose the Eat Method you want",
      eat_in: "Eat here",
      eat_out: "Take Away"
    } 
  }; 

function fillLang(lang){

    if(lang == "arabe"){

        if(location.href.indexOf('Home') > -1)
        {
          title.innerHTML = language.arabe.welcome;
          subtitle.innerHTML = language.arabe.subtitle;

        }else if(location.href.indexOf('eatMethod') > -1)
        {
          title.innerHTML = language.arabe.welcome;
          subtitleDelivery.innerHTML = language.arabe.subtitledelivery;
          eatIn.innerHTML = language.arabe.eat_in;
          takeWith.innerHTML = language.arabe.eat_out;
        }
             
    }else if(lang == "french"){

      if(location.href.indexOf('Home') > -1)
      {
        title.innerHTML = language.french.welcome;
        subtitle.innerHTML = language.french.subtitle;

      }else if(location.href.indexOf('eatMethod') > -1)
      {
        title.innerHTML = language.french.welcome;
        subtitleDelivery.innerHTML = language.french.subtitledelivery;
        eatIn.innerHTML = language.french.eat_in;
        takeWith.innerHTML = language.french.eat_out;
      }
  
    }else if(lang == "english"){

      if(location.href.indexOf('Home') > -1)
      {
        title.innerHTML = language.english.welcome;
        subtitle.innerHTML = language.english.subtitle;

      }else if(location.href.indexOf('eatMethod') > -1)
      {
        title.innerHTML = language.english.welcome;
        subtitleDelivery.innerHTML = language.english.subtitledelivery;
        eatIn.innerHTML = language.english.eat_in;
        takeWith.innerHTML = language.english.eat_out;
      }

    }
  
}

btn_ar.addEventListener('click', function(){

    localStorage.setItem('Lang', "arabe");
    location.href = "eatMethod.html";
  
})

btn_fr.addEventListener('click', function(){

    localStorage.setItem('Lang', "french");
    location.href = "eatMethod.html";
});

btn_en.addEventListener('click', function(){

    localStorage.setItem('Lang', "english");
    location.href = "eatMethod.html";
});

eatIn.addEventListener('click', function(){

  location.href = "MealsMenu.html";
})
takeWith.addEventListener('click', function(){

  location.href = "MealsMenu.html";
})