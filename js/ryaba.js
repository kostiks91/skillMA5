const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  	var data = {"text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"]}
  	handleData(data);
 	$.getJSON(
		dataURL,
		function(data) {
			console.log(data);
		}
	);
}

function handleData(data) {
  // кажется, какой-то из этих способов сработает
  const var1 = $("input[name=var1]")[0].value
  const var2 = $("input[name=var2]")[0].value
  const var3 = $("input[name=var3]")[0].value
  const var4 = $("input[name=var4]")[0].value
  const var5 = $("input[name=var5]")[0].value
  const var6 = $("input[name=var6]")[0].value
  const speach = $("input[name=speach]")[0].value
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()
  // надо сделать так чтобы сообщения подменились на значения из формы
  //$("#result").text(data.text.toString().replace("{var1}", var1).replace("{var3}", var3).replace("{var3}", var3).replace("{var4}", var4).replace("{var5}", var5).replace("{var6}", var6));
  var newtext = data.text.toString();
  for (let i = 0; i < data.text.toString().split(' ').length; i++){
  	var newtext = newtext.replace("{var1}", var1);
  	var newtext = newtext.replace("{var2}", var2);
  	var newtext = newtext.replace("{var3}", var3);
  	var newtext = newtext.replace("{var4}", var4);
  	var newtext = newtext.replace("{var5}", var5);
  	var newtext = newtext.replace("{var6}", var6);
  	var newtext = newtext.replace("{speach}", speach);

  }
  $("#result").text(newtext);

}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
