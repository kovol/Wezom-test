
//Custom Select

let x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

///////////////////////////////////////////////////////





//Popup open close


let popup = document.getElementById("popupEnter"),
    phonePopup =document.getElementById("popupPhone") ;

[...document.getElementsByClassName("popHandle")].forEach(item => {
  item.addEventListener('click', event => {
   popup.classList.toggle("popupOpen");
  })
});

[...document.getElementsByClassName("phoneHandle")].forEach(item => {
  item.addEventListener('click', event => {
   phonePopup.classList.toggle("popupOpen");
  })
});

/////////////////////////////////////////////////////////

$('#phone').inputmask(); //jQuery phone input mask

//////////////////////////////////////////////////////


// Buy and compare

let cartInd = document.getElementById("cartInd"),
  comInd = document.getElementById("comInd"),
  favInd = document.getElementById("favInd");

[...document.getElementsByClassName("card__buy")].forEach(item => {
  item.addEventListener('click', event => {
    item.innerHTML = item.innerHTML.replace("Купить товар", "В корзине");
    cartInd.innerHTML = +cartInd.innerHTML + 1; 
    cartInd.classList.add("indOpen");
  })
});

[...document.getElementsByClassName("footer__link-compare")].forEach(item => {
      let ev = event => {
      item.innerHTML = item.innerHTML.replace("Сравнить товар", "В сравнении")
      item.style.textDecoration = "none";
      comInd.innerHTML = +comInd.innerHTML + 1; 
      comInd.classList.add("indOpen");
      item.removeEventListener('click', ev);
      }
      item.addEventListener('click', ev);
});
    
[...document.getElementsByClassName("footer__link-favorites")].forEach(item => {
  item.addEventListener('click', event => {
     item.innerHTML = item.innerHTML.replace("В избранное", "В избранном");
     item.style.textDecoration = "none";
     favInd.innerHTML = +favInd.innerHTML + 1; 
     favInd.classList.add("indOpen");
  })
});
/////////////////////////////////////////////////////

//Reset form with selects
let form = document.getElementById("filterForm"),
    res = document.getElementById("reset"),
    mSel = form.getElementsByTagName("select");

res.onclick = resetFunction;
  function resetFunction() {
   for (let i = 0; i < [...mSel].length; i++) {
   for (let j=0; j <= i; j++) {
   form.getElementsByClassName("select-selected")[i].innerHTML = mSel[j].options.item(0).text;
    }
  }
}
//////////////////////////////////////////////////

//Form validation 
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
validate = par => {
  if(par.querySelector('.email').value.match(mailformat) && par.querySelector('.email').value.length > 0) {
    if(par.querySelector('input[type="password"]')){
      if(par.querySelector('input[type="password"]').value.length < 4) {
          return false;
        } 
    }
    return true;
  } else if(par.querySelector('.email').value.length == 0) {
      par.querySelector('.emailErr').focus();
      return false;
    } else return false;
};
let subFun = () => {
alert("Вы успешно подписаны на рассылку");
}


////////Open close side menu on small screens

  let sideButton = document.getElementById("side__header"),
sideMenu = document.getElementsByClassName("side__menu");

if (window.innerWidth <= 720) {
  sideButton.addEventListener('click', event => {

    if (sideMenu[0].style.display === 'none') {
      sideMenu[0].style.display = 'block';
    } else {
      sideMenu[0].style.display = 'none';
      }
  });
}



