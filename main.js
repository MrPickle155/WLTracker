    var W = 0;
    var L = 0;
    let Wdays = [];
    let Ldays = [];
    let daynumber = 0;
    var Sday = 0;

    if (localStorage.getItem("daynumber") > 0) {
      daynumber = parseInt(localStorage.getItem("daynumber"));

      Wdays = localStorage.getItem("Wdata").split(",");
      console.log(Wdays);

      Ldays = localStorage.getItem("Ldata").split(",");
      console.log(Ldays);
    }

    if (localStorage.getItem("Win") > 0) {
      W = parseInt(localStorage.getItem("Win"));
    }

    if (localStorage.getItem("Loss") > 0) {
      L = parseInt(localStorage.getItem("Loss"));
    }

    document.getElementById("W").innerHTML = W;
    document.getElementById("L").innerHTML = L;

    document.getElementById("W-").onclick = function () {
      W -= 1;
      if (W < 0) {
        W = 0;
      }
      localStorage.setItem("Win", W);
      document.getElementById("W").innerHTML = W;
    };
    document.getElementById("W+").onclick = function () {
      W += 1;
      if (W > 9) {
        W = 9;
      }
      localStorage.setItem("Win", W);
      document.getElementById("W").innerHTML = W;
    };

    document.getElementById("L-").onclick = function () {
      L -= 1;
      if (L < 0) {
        L = 0;
      }
      localStorage.setItem("Loss", L);
      document.getElementById("L").innerHTML = L;
    };
    document.getElementById("L+").onclick = function () {
      L += 1;
      if (L > 9) {
        L = 9;
      }
      localStorage.setItem("Loss", L);
      document.getElementById("L").innerHTML = L;
    };

    document.getElementById("FD").onclick = function () {
      daynumber = daynumber + 1;
      localStorage.setItem("daynumber", daynumber);

      Wdays.push("Day " + daynumber + ":" + W);
      Ldays.push("Day " + daynumber + ":" + L);

      localStorage.setItem("Wdata", Wdays);
      localStorage.setItem("Ldata", Ldays);

      W = 0;
      L = 0;

      localStorage.setItem("Win", 0);
      localStorage.setItem("Loss", 0);

      document.getElementById("W").innerHTML = W;
      document.getElementById("L").innerHTML = L;
    };
    document.getElementById("DS").onkeyup = function () {
      console.log(this.value);
      if (/\d/.test(this.value)) {
        for (var i = 0; i < this.value.length; i++) {
          if (/\d/.test(this.value.charAt(i)) == true) {
            Sday = this.value.charAt(i);

            document.getElementById("SR").innerHTML = "Wins: " + Wdays[Sday - 1][6] + " | " + "Losses: " + Ldays[Sday - 1][6];

            break;
          }
        }
      }
    };