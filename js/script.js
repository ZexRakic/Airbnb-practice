"use strict";

let footer = document.querySelector(".footy");
const arts = document.getElementById("first-selector");
const outdoor = document.querySelector(".second-selector");
const mountain = document.querySelector(".third-selector");
const beach = document.querySelector(".fourth-selector");
const popular = document.querySelector(".fifth-selector");

const bottomLine = function () {
  arts.classList.remove("active");
  outdoor.classList.remove("active");
  mountain.classList.remove("active");
  beach.classList.remove("active");
  popular.classList.remove("active");
};

arts.addEventListener("click", function () {
  bottomLine();
  arts.classList.add("active");
});

outdoor.addEventListener("click", function () {
  bottomLine();
  outdoor.classList.add("active");
  renderTwo();
});

mountain.addEventListener("click", function () {
  bottomLine();
  mountain.classList.add("active");
  renderOne();
});

beach.addEventListener("click", function () {
  bottomLine();
  beach.classList.add("active");
  render();
});

popular.addEventListener("click", function () {
  bottomLine();
  popular.classList.add("active");
  render();
});

const renderOne = function () {
  const htmlOne = `<table style="width:100%">
<tr>
  <th>HIGH MOUNTAINS</a></th>
  <th>HILLS</a></th> 
  <th>MONT</a></th>
  <th>MOUNTAINS</a></th>
</tr>
<tr>
  <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">How Mont works</a></td>
  <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Diversity on mountains</a></td>
  <td><a href="https://www.airbnb.com/help/home" class="link-style">Host high home</a></td>
  <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Norway</a></td>
</tr>
<tr>
  <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">We see you</a></td>
  <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Nepal Discrimination</a></td>
  <td><a href="https://www.airbnb.com/help/home" class="link-style">Host an Experience
  </a></td>
  <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">Help them</a></td>
</tr>
<tr>
  <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">New home</a></td>
  <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Vision</a></td>
  <td><a href="https://www.airbnb.com/help/home" class="link-style">What an Experience</a>
  </td>
  <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">Up</a></td>
</tr>
<tr>
  <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">How high</a></td>
  <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Mont Everest</a>
  </td>
  <td><a href="https://www.airbnb.com/help/home" class="link-style">Divcibare</a>
  </td>
  <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">Stara planina</a></td>
</tr>
<tr>
  <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Jahorina</a></td>
  <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">Durmitor</a>
  </td>
  <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Kopaonik</a>
  </td>
</tr>
</table>`;
  footer.innerHTML = htmlOne;
};

const renderTwo = function () {
  const htmlTwo = `<table style="width:100%">
  <tr>
    <th>OUTDOOR</a></th>
    <th>PLAY</a></th>
    <th>GAME</a></th>
  </tr>
  <tr>
    <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">Camping</a></td>
    <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Glamping</a></td>
    <td><a href="https://www.airbnb.com/help/home" class="link-style">Outside</a></td>
    <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Valley</a></td>
  </tr>
  <tr>
    <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">Football</a></td>
    <td><a href="https://www.airbnb.com/d/howairbnbworks" class="link-style">Running</a></td>
    <td><a href="https://www.airbnb.com/help/home" class="link-style">Basketball
    </a></td>
    <td><a href="https://www.airbnb.com/against-discrimination" class="link-style">Help</a></td>
  </tr>
 
  </table>`;
  footer.innerHTML = htmlTwo;
};
