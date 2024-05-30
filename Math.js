//สมการดีกรี3

let get_num21 = document.getElementById('num_21');
let get_num22 = document.getElementById('num_22');
let get_num23 = document.getElementById('num_23');
let get_num24 = document.getElementById('num_24');
let get_button2 = document.getElementById('run_but3');
let get_out2 = document.getElementById('show_out3');

function calculation2() {
  let x_3 = Number(get_num21.value);
  let x_2 = Number(get_num22.value);
  let x_1 = Number(get_num23.value);
  let x_0 = Number(get_num24.value);
  let res_1 = 1;
  let outHTML3 = '';
  let res_2 = 1;
  let res_3 = 1;
  let res_4 = 1;
  let num_pos = Math.abs(x_0);
  function get_plus(ans) {
    return Math.abs(ans)
  }

  for (let i = -1 * num_pos; i <= num_pos; i++) {
    res_1 = x_3
    res_2 = (res_1 * i) + x_2;
    res_3 = (res_2 * i) + x_1;
    res_4 = (res_3 * i) + x_0;
    if (res_4 == 0) {
      sign1 = "+"
      sign2 = "+"
      sign3 = "+"
      sign4 = "-"
      sign5 = "-"
      if (-1 * i < 0) {
        sign1 = "-"
      }
      if (res_2 < 0) {
        sign2 = "-"
      }
      if (res_3 < 0) {
        sign3 = "-"
      }

      res0 = Math.sqrt((res_2 ** 2) - (4 * res_1 * res_3));
      x01 = (-res_2 + res0) / (2 * res_1);
      x02 = (-res_2 - res0) / (2 * res_1);
      if (x01 < 0) {
        sign4 = "+"
      }
      if (x02 < 0) {
        sign5 = "+"
      }
      if (Number.isInteger(x01) && Number.isInteger(x02)) {
        outHTML3 += "<p>(x" + sign1 + get_plus(i) + ")(x" + sign4 + get_plus(x01) + ")(x" + sign5 + get_plus(x02) + ")</p>";
        outHTML3 += "<p>x = " + i + "</p>";
        outHTML3 += "<p>x = " + x01 + "</p>";
        outHTML3 += "<p>x = " + x02 + "</p>";
        i = 1 + num_pos;
      }
      else {
        if (res_1 == 1) {
          outHTML3 += "<p>(x" + sign1 + get_plus(i) + ")(x<sup>2</sup>" + sign2 + get_plus(res_2) + "x" + sign3 + get_plus(res_3) + ")</p>";
        }
        else {
          outHTML3 += "<p>(x" + sign1 + get_plus(i) + ")(" + get_plus(res_1) + "x<sup>2</sup>" + sign2 + get_plus(res_2) + "x" + sign3 + get_plus(res_3) + ")</p>";
        }
      }
    }
  }
  get_out2.innerHTML = (outHTML3);
}

get_button2.addEventListener('click', calculation2);

function reset1() {
  document.getElementById('num_21').value = "";
  document.getElementById('num_22').va;ie = "";
  document.getElementById('num_23').value = "";
  document.getElementById('num_24').value = "";
  get_out2.innerHTML = "แสดงคำตอบที่นี่"
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//สมการกำลัง2

let get_num11 = document.getElementById('num_11');
let get_num12 = document.getElementById('num_12');
let get_num13 = document.getElementById('num_13');
let get_button1 = document.getElementById('run_but1');
let get_out = document.getElementById('show_out1');

function calculation1() {
  let a = Number(get_num11.value);
  let b = Number(get_num12.value);
  let c = Number(get_num13.value);
  let outHtml1 = '';
  let upper_num1 = 0;
  let lower_num1 = 0;
  let upper_num2 = 0;
  let lower_num2 = 0;
  let sign1 = '-';
  let sign2 = '-';

  if (a == '') {
    a = 1
  }
  if (b == '') {
    b = 1
  }
  if (c == '') {
    c = 1
  }

  res = Math.sqrt((b ** 2) - (4 * a * c));

  x1 = (-b + res) / (2 * a);
  x2 = (-b - res) / (2 * a);

  function simplifyFraction(numerator, denominator) {
    const gcd = (a01, b01) => (b01 === 0 ? a01 : gcd(b01, a01 % b01));
    const commonDivisor = gcd(numerator, denominator);
    return [numerator / commonDivisor, denominator / commonDivisor];
  }

  if ((b ** 2) - (4 * a * c) < 0) {
    get_out.innerHTML = '<p>ไม่มีคำตอบในระบบจำนวนจริง</p>';
    return;
  }

  if (!(Number.isInteger(x1)) || !(Number.isInteger(x2))) {
    if (!(Number.isInteger(x1))) {
      const numerator = -b + res;
      const denominator = 2 * a;

      const simplifiedFraction = simplifyFraction(numerator, denominator);
      x1 = `${simplifiedFraction[0]}/${simplifiedFraction[1]}`;
      upper_num1 = simplifiedFraction[0];
      lower_num1 = simplifiedFraction[1];
      if (upper_num1 < 0 || lower_num1 < 0) {
        sign1 = '+'
        upper_num1 = Math.abs(upper_num1)
        lower_num1 = Math.abs(lower_num1)
      }

      for (let i = 0; i < x1.length; i++) {
        if (x1[i] == '-') {
          x1 = x1.replace('-', '')
          x1 = `-${x1}`
          break
        }
      }

      outHtml1 += `<p>แยกได้  : ( ${lower_num1}x ${sign1} ${upper_num1} ) `;
    }
    else {
      if (x1 < 0) {
        sign1 = '+'
      }
      outHtml1 += `<p>แยกได้  : ( x ${sign1} ${Math.abs(x1)} ) `;
    }

    if (!(Number.isInteger(x2))) {
      const numerator = -b - res;
      const denominator = 2 * a;

      const simplifiedFraction = simplifyFraction(numerator, denominator);
      x2 = `${simplifiedFraction[0]}/${simplifiedFraction[1]}`;
      upper_num2 = simplifiedFraction[0];
      lower_num2 = simplifiedFraction[1];
      if (upper_num2 < 0 || lower_num2 < 0) {
        sign2 = '+'
        upper_num2 = Math.abs(upper_num2)
        lower_num2 = Math.abs(lower_num2)
      }

      for (let i = 0; i < x1.length; i++) {
        if (x2[i] == '-') {
          x2 = x2.replaceAll('-', '')
          x2 = `-${x2}`
          break
        }
      }


      outHtml1 +=`( ${lower_num2}x ${sign2} ${upper_num2} )</p><p>x = ${x1}</p><p>x = ${x2}</p>`;
    }
    else {
      if (x2 < 0) {
        sign2 = '+'
      }
      outHtml1 += `( x ${sign2} ${Math.abs(x2)} )</p><p>x = ${x1}</p><p>x = ${x2}</p>`;
    }
    // if (x1 == x2) {
    //   get_out.innerHTML = `<p>(${upper_num1}x${sign1}${lower_num1})(${upper_num2}x${sign2}${lower_num2})</p><p>x = ${x1}</p>`;
    //   return;
    // }
  }
  
  else {
    if (x1 < 0) {
      sign1 = '+'
    }

    if (x2 < 0) {
      sign2 = '+'
    }
    
    if (x1 == x2) {
      get_out.innerHTML = `<p>( x ${sign1} ${Math.abs(x1)} ) ( x ${sign2} ${Math.abs(x2)} )</p><p>x = ${x1}</p>`;
      return;
    }

    else {
      outHtml1 += `<p>แยกได้  : ( x ${sign1} ${Math.abs(x1)} ) ( x ${sign2} ${Math.abs(x2)} )</p><p>x = ${x1}</p><p>x = ${x2}</p>`;
    }
  }
  get_out.innerHTML = outHtml1;
}

get_button1.addEventListener('click', calculation1);

function reset2() {
  document.getElementById('num_11').value = '';
  document.getElementById('num_12').value = '';
  document.getElementById('num_13').value = '';
  get_out.innerHTML = "แสดงคำตอบที่นี่";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// หาตัวประกอบ
let numneed = document.getElementById('num_need');
let run_but2 = document.getElementById('run_but2');
let show_out = document.getElementById('show_out2');

function findation() {
      let y = 1;
      let z = 1;
      let num_f = 0
      let result = [];
      let outHtml2 = "";
      num_f = Number(numneed.value);
      if (num_f < 0) {
        num_f = Number(Math.abs(numneed.value));
      }
      while (z >= 1) {
        z = num_f / y;
        if (Number.isInteger(z)) {
          result.push(" " + Number(z) + " ");
        }
        y += 1;
      }

      outHtml2 += '<p> ตัวประกอบของ ' + num_f + ' มีจำนวน ' + result.length + '</p>'
      outHtml2 += '<p> ได้แก่ ' + result + '</p>'

      let count = result.length;
      let a = 0;
      let k = 0;
      if (Number(numneed.value) > 0) { 
        while (count - a >= 1) {
          let b = result[a];
          let c = result[count - 1];
          let num_line = "--";
          for (let i = 0; i < (num_f).toString().length; i++) {
            num_line += "-";
          }
          if (k == 0) {
            outHtml2 += '<p> คู่อันดับที่คูณกันได้' + num_f + ' : ( ' + b + ' , ' + c + ' ) </p>';
            k += 1;
            a += 1;
            count -= 1;
          }
          else {
            
            outHtml2 += '<p><--------------' + num_line + '> : ( ' + b + ' , ' + c + ' ) </p>';
            a += 1;
            count -= 1;
          }
        } 
      }

      else {
        while (count - a >= 1) {
          let b = result[a];
          let c = result[count - 1];
          if (k == 0) {
            outHtml2 += '<p> ตัวประกอบของ' + num_f + ' : ( ' + '-' + b + ' , ' + c + ' ) </p>';
            outHtml2 += '<p><--------------' + num_line + '> : ( ' + b + ' , ' + '-' + c + ' ) </p>';
            k += 1;
            a += 1;
            count -= 1;
          }
          else {
            outHtml2 += '<p><--------------' + num_line + '> : ( ' + '-' + b + ' , ' + c + ' ) </p>';
            outHtml2 += '<p><--------------' + num_line + '> : ( ' + b + ' , ' + '-' + c + ' ) </p>';
            a += 1;
            count -= 1;
          }
        } 
      }

      show_out.innerHTML = (outHtml2);
}

run_but2.addEventListener('click', findation);

function reset3() {
  document.getElementById('num_need').value = "";
  show_out.innerHTML = "แสดงคำตอบที่นี่"
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ตรรกศาสตร์

let poj_button = document.getElementById('addprapoj');
let del_button = document.getElementById('delprapoj');
let poj_show = document.getElementById('showprapoj');
let show_buttonadd = document.getElementById('showprapoj_but');
let add_butpoj = "";
let add_poj = "";
let k = 2;

function add_prapoj() {
  if (k == 2) {
    add_poj += `<p style='display: inline-block;'>&nbsp&nbspr =&nbsp</p><input id="r" class='input in2'>`;
    add_butpoj += `<input class="but_in" type="button" value="r" onclick="display1('r')" />`;
    k += 1;
  }
  else if (k == 3) {
    add_poj += `<p style='display: inline-block;'>&nbsp&nbsps =&nbsp</p><input id="s" class='input in2'>`;
    add_butpoj += `<input class="but_in" type="button" value="s" onclick="display1('s')" />`;
    k += 1;
  }
  poj_show.innerHTML = (add_poj);
  show_buttonadd.innerHTML = (add_butpoj);
}
poj_button.addEventListener('click', add_prapoj);

function del_prapoj() {
  add_poj = "";
  add_butpoj = "";
  poj_show.innerHTML = (add_poj);
  show_buttonadd.innerHTML = (add_butpoj);
  k = 2
}

del_button.addEventListener('click', del_prapoj);

function reset4() {
  document.getElementById('p').value = "";
  document.getElementById('q').value = "";
  document.getElementById('r').value = "";
  document.getElementById('s').value = "";
  show_res.innerHTML = "แสดงคำตอบที่นี่"
}

let get_button3 = document.getElementById('run_but4');
let show_res = document.getElementById('show_out4');
let data = "";
let show_ans = "";

function display1(value) {
  document.getElementById("joth").value += value;;
  data += value;
}

function clearScreens() {
  document.getElementById("joth").value = "";
  data = "";
}

function calculation3() {
  function and_func(tf, ft) {
    if (tf == "T" && ft == "T") {
      data = data.replace("T∧T","T");
    }
    else if (tf == "T" && ft == "F") {
      return data = data.replace("T∧F","F");
    }
    else if (tf == "F" && ft == "T") {
      return data = data.replace("F∧T","F");
    }
    else {
      return data = data.replace("F∧F","F");
    }
  }

  function or_func(tf, ft) {
    if (tf == "T" && ft == "T") {
      return data = data.replace("TvT","T");
    }
    else if (tf == "T" && ft == "F") {
      return data = data.replace("TvF","T");
    }
    else if (tf == "F" && ft == "T") {
      return data = data.replace("FvT","T");
    }
    else {
      return data = data.replace("FvF","F");
    }
  }

  function if_else1(tf, ft) {
    if (tf == "T" && ft == "T") {
      return data = data.replace("T→T","T");
    }
    else if (tf == "T" && ft == "F") {
      return data = data.replace("T→F","F");
    }
    else if (tf == "F" && ft == "T") {
      return data = data.replace("F→T","T");
    }
    else if (tf == "F" && ft == "F") {
      return data = data.replace("F→F","T");
    }
  }

  function even_if1(tf, ft) {
    if (tf == "T" && ft == "T") {
      return data = data.replace("T↔T","T");
    }
    else if (tf == "T" && ft == "F") {
      return data = data.replace("T↔F","F");
    }
    else if (tf == "F" && ft == "T") {
      return data = data.replace("F↔T","F");
    }
    else if (tf == "F" && ft == "F") {
      return data = data.replace("F↔F","T");
    }
  }

  function and_bracket(tf, ft) {
    if (tf == "T" && ft == "T") {
      data = data.replace("T∧T)","T)");
    }
    else if (tf == "T" && ft == "F") {
      return data = data.replace("T∧F)","F)");
    }
    else if (tf == "F" && ft == "T") {
      return data = data.replace("F∧T)","F)");
    }
    else {
      return data = data.replace("F∧F)","F)");
    }
  }

  function or_bracket(tf, ft) {
    if (tf == "T" && ft == "T") {
      return data = data.replace("TvT)","T)");
    }
    else if (tf == "T" && ft == "F") {
      return data = data.replace("TvF)","T)");
    }
    else if (tf == "F" && ft == "T") {
      return data = data.replace("FvT)","T)");
    }
    else {
      return data = data.replace("FvF)","F)");
    }
  }

  function if_else2(tf, ft) {
    if (tf == "T" && ft == "T") {
      return data = data.replace("T→T)","T)");
    }
    else if (tf == "T" && ft == "F") {
      return data = data.replace("T→F)","F)");
    }
    else if (tf == "F" && ft == "T") {
      return data = data.replace("F→T)","T)");
    }
    else if (tf == "F" && ft == "F") {
      return data = data.replace("F→F)","T)");
    }
  }

  function even_if2(tf, ft) {
    if (tf == "T" && ft == "T") {
      return data = data.replace("T↔T)","T)");
    }
    else if (tf == "T" && ft == "F") {
      return data = data.replace("T↔F)","F)");
    }
    else if (tf == "F" && ft == "T") {
      return data = data.replace("F↔T)","F)");
    }
    else if (tf == "F" && ft == "F") {
      return data = data.replace("F↔F)","T)");
    }
  }
  function reject(ft) {
    if (ft == "T") {
      return data = data.replace("~T", "F");
    }
    else if (ft == "F") {
      return data = data.replace("~F", "T");
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i] == "p") {
      data = data.replace("p", document.getElementById('p').value)
    }
    else if (data[i] == "q") {
      data = data.replace("q", document.getElementById('q').value)
    }
    else if (data[i] == "r") {
      data = data.replace("r", document.getElementById('r').value)
    }
    else if (data[i] == "s") {
      data = data.replace("s", document.getElementById('s').value)
    }
  }

  let bracket_count = 0;
  let data_count = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "(") {
      bracket_count += 1;
    }
  }

  for (let i = 0; i < bracket_count; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] == ")") {
        while (data[j] != "(") {
          j -= 1;
          data_count += 1;
        }
        data = data.substring(0,j) + data.substring(j+1, data.length)
        j += 1;

        while (data[j] != ")") {
          if (data[j] == "∧") {
            if (data_count < 4) {
              and_bracket(data[j-1], data[j+1]);
            }
            else {
              and_func(data[j-1], data[j+1]);
            }
          }
          else if (data[j] == "v") {
            if (data_count < 4) {
              or_bracket(data[j-1], data[j+1]);
            }
            else {
              or_func(data[j-1], data[j+1]);
            }
          }
          else if (data[j] == "→") {
            if (data_count < 4) {
              if_else2(data[j-1], data[j+1]);
            }
            else {
              if_else1(data[j-1], data[j+1]);
            }
          }
          else if (data[j] == "↔") {
            if (data_count < 4) {
              even_if2(data[j-1], data[j+1]);
            }
            else {
              even_if1(data[j-1], data[j+1]);
            }
          }
          else if (data[j] == "~") {
              reject(data[j+1])
          }
        }
        data = data.substring(0,j) + data.substring(j+1, data.length)
      }
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "∧") {
      and_func(data[i-1], data[i+1]);
      i -= 1;
    }
    else if (data[i] == "v") {
      or_func(data[i-1], data[i+1]);
      i -= 1;
    }
    else if (data[i] == "→") {
      if_else1(data[i-1], data[i+1]);
      i -= 1;
    }
    else if (data[i] == "↔") {
      even_if1(data[i-1], data[i+1]);
      i -= 1;
    }
    else if (data[i] == "~") {
      reject(data[i+1])
      i -=1;
  }
  }
  show_res.innerHTML = ("<p>ค่าความจริง ≡ " + data + "</p>");
}

get_button3.addEventListener('click', calculation3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//เครื่องคิดเลข basic

let show_calculator = document.getElementById("show_cal");
let show_cal = ""

function create_calculator() {
  show_cal = `
     <table class="calculator tool_cal">
       <tr>
         <td colspan="3"> <input class="display-box" type="text" id="result" disabled /> </td>

         <!-- clearScreen() function clears all the values -->
         <td> <input type="button" value="C" onclick="clearScreen()" id="btn" /> </td>
         <td> <button onclick="closeScreen()" id="close_calcul" class="close_cal">close</button> </td>
       </tr>
       <tr>
         <!-- display() function displays the value of clicked button -->
         <td> <input class="butcal" type="button" value="1" onclick="display2('1')" /> </td>
         <td> <input class="butcal" type="button" value="2" onclick="display2('2')" /> </td>
         <td> <input class="butcal" type="button" value="3" onclick="display2('3')" /> </td>
         <td> <input class="butcal" type="button" value="/" onclick="display2('/')" /> </td>
         <td> <input class="butcal" type="button" value="root" onclick="display2('&#8730;')" /> </td>
       </tr>
       <tr>
         <td> <input class="butcal" type="button" value="4" onclick="display2('4')" /> </td>
         <td> <input class="butcal" type="button" value="5" onclick="display2('5')" /> </td>
         <td> <input class="butcal" type="button" value="6" onclick="display2('6')" /> </td>
         <td> <input class="butcal" type="button" value="-" onclick="display2('-')" /> </td>
         <td> <input class="butcal" type="button" value="^" onclick="display2('^')" /> </td>
       </tr>
       <tr>
         <td> <input class="butcal" type="button" value="7" onclick="display2('7')" /> </td>
         <td> <input class="butcal" type="button" value="8" onclick="display2('8')" /> </td>
         <td> <input class="butcal" type="button" value="9" onclick="display2('9')" /> </td>
         <td> <input class="butcal" type="button" value="\+" onclick="display2('\+')" /> </td>
         <td> <input class="butcal" type="button" value="log" onclick="display2('log')" /> </td>
       </tr>
       <tr>
         <td> <input class="butcal" type="button" value="." onclick="display2('.')" /> </td>
         <td> <input class="butcal" type="button" value="0" onclick="display2('0')" /> </td>

         <!-- calculate() function evaluates the mathematical expression -->
         <td> <input type="button" value="=" onclick="calculate()" id="btn" /> </td>
         <td> <input class="butcal" type="button" value="*" onclick="display2('*')" /> </td>
       </tr>
     </table>
     `
  show_calculator.innerHTML = show_cal;

}

function closeScreen() {
  show_cal = `<div id="show_cal">
     <button class="tool_cal" onclick="create_calculator()"><img class="img_but1" src="https://cdn.icon-icons.com/icons2/317/PNG/512/calculator-icon_34473.png"></button>
</div>`
  show_calculator.innerHTML = show_cal;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function display2(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


