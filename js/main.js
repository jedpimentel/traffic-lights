



var state = {
  activated: "", // "red" "yellow" "green"
  redTime: 5000, // ms
  yellowTime: 2000,
  yellowFlashOnTime: 500,
  yellowFlashOffTime: 500,
  greenTime: 3000,
  on: "",
  order: ["red", "yellow", "green"],
  id: {
    red: {
      id: "top",
      class: "light-red",
    },
    yellow: {
      id: "middle",
      class: "light-yellow",
    },
    green: {
      id: "bottom",
      class: "light-green",
    }
  }
}
$(document).ready(function() {
  console.log("doop");

  var lights = state.order.length;

  function flashRed() {
    $("#top").toggleClass(state.id.red.class)
    setTimeout(function() {
      $("#top").toggleClass(state.id.red.class);
      //run next color
      flashGreen();
    }, state.redTime);
  }
  function flashGreen() {
    $("#bottom").toggleClass(state.id.green.class)
    setTimeout(function() {
      $("#bottom").toggleClass(state.id.green.class);
      //run next color
      flashYellow();
    }, state.redTime);
  }

  function flashYellow() {
    var totTime = state.yellowTime;
    var onInterval = state.yellowFlashOnTime;
    var offInterval = state.yellowFlashOffTime;
    var totInterval = onInterval + offInterval
    var timesOn = Math.ceil( totTime  / totInterval );
    var timesOff = Math.floor( totTime / totInterval );
    var onTimer, offTimer;
    $("#middle").toggleClass(state.id.yellow.class);
    console.log("initial on");
    onTimer = setInterval(function() {
      console.log("on");
      $("#middle").toggleClass(state.id.yellow.class);
    }, totInterval);
    // after
    if (onTimer < totTime) {
      setTimeout(function() {
        $("#middle").toggleClass(state.id.yellow.class);
        console.log("initial off");
        offTimer = setInterval(function() {
          console.log("off");
          $("#middle").toggleClass(state.id.yellow.class);
        }, totInterval);
      }, onInterval);
    }
    // if the total time means it might end during an "on" cycle

    setTimeout(function() {
      clearInterval(offTimer);
      clearInterval(onTimer);
      flashRed();
      if(timesOn >= timesOff) {
        $("#middle").toggleClass(state.id.yellow.class);
      }
    }, totTime);

    setTimeout(function() {
      console.log("end yellow");

    }, totTime);



  }
  flashRed();
})
// function to make the sign flash

// function to make light blink args: on-time, off-time, duration








// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
