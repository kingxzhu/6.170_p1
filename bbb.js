function show_date(){
var choice = document.getElementById("s1").value;
if ( choice == 'a1')
{
	console.log('a1')
	return [10,10,11,10,12,10,10,5,11,5,12,5]
}
else if ( choice == 'b1')
{
console.log('b1')
	return [4,15,4,15]
}
else if ( choice == 'c1')
{
	return [3,16,3,16]
}
else if ( choice == 'd1')
{
	return [2,17,2,17]
}

}

var startarray = []
function wait(life){
var table = document.getElementById('tableid');

		for (var i=0;i<400; i++){
			a=Math.floor(i/20)
			b=i%20
			table.rows[a].cells[b].onclick = function(){
    
			//table.rows[a].cells[b].style.backgroundColor = 'black'
			console.log(this.style.backgroundColor)
			this.style.backgroundColor = 'black'
			startarray.push(this.parentNode.rowIndex)
			startarray.push(this.cellIndex)


    }
	
	
	//return life
}
}
function initialize(life,choice){
	
	
	var table = document.getElementById('tableid');
	console.log(choice)
	for (var i=0;i<choice.length/2;i++){
		a= choice[i*2]
		b= choice[i*2+1]
		table.rows[a].cells[b].style.backgroundColor = 'black';
		life[20*a+b]=1
		}
	
	

	console.log(life)
	return life
	}
	
function start()
{

	var inputa = show_date();
	initialize(life,startarray);
	timeout.opt = true
	timeout()
}

function timeout() {
	console.log(timeout.opt,'1')
	if (timeout.opt){
		Timer(function () {
        compute(life)
        timeout();
    }, 1000);}


}

function reset(){
var table = document.getElementById('tableid');
for (i=0 ; i < 400; i++) {
			life[i]=0;
			a=Math.floor(i/20)
			b=i%20
			table.rows[a].cells[b].style.backgroundColor = 'yellow';

		}}
		

function Timer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function() {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
}

