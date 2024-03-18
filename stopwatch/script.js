$(document).ready(function () {
  mode = 0;
  let timer = 0;
  let lapcounter = 0;
  lapnum = 0;
  $("#start").click(function () {
    showhidebtns("#stop", "#lap");
    mode = 1;
    startAction();
  });

  $("#stop").click(function () {
    showhidebtns("#resume", "#reset");
    mode = 0;
    clearInterval(action);
  });

  $("#resume").click(function () {
    showhidebtns("#stop", "#lap");
    mode = 1;
    startAction();
  });

  $("#reset").click(function () {
    location.reload();
  });

  $("#lap").click(function () {
    lapcounter = 0;
    addLap();
  });

  // functions

  function showhidebtns(x, y) {
    $(".control").hide();
    $(x).show();
    $(y).show();
  }

  function startAction() {
    action = setInterval(function () {
      timer++;
      if (timer == 100 * 60 * 100) {
        timer = 0;
      }
      lapcounter++;
      if (lapcounter == 100 * 60 * 100) {
        lapcounter = 0;
      }
      update();
    }, 10);
  }

  function update() {
    timesec = Math.floor((timer % 6000) / 100);
    timemin = Math.floor(timer / 6000);
    timecentisec = Math.floor((timer % 6000) % 100);
    $("#timecentisec").text(format(timer));
    $("#timesec").text(format(timesec));
    $("#timemin").text(format(timemin));

    lapsec = Math.floor((lapcounter % 6000) / 100);
    lapmin = Math.floor(lapcounter / 6000);
    lapcentisec = Math.floor((lapcounter % 6000) % 100);
    $("#lapcentisec").text(format(lapcounter));
    $("#lapsec").text(format(lapsec));
    $("#lapmin").text(format(lapmin));
  }

  function format(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }
  function addLap() {
    lapnum++;
    var code = `<div class="lapbox"><p>lap${lapnum}</p><p>${lapmin}:${lapsec}:${lapcentisec}</p></div>`;
    $("#laps").prepend(code);
  }
});
