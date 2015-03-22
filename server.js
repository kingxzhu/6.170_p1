function search(text, output) {
    output("Oh, you want to search for '" + text + "'?  How interesting!");
}

function tableCreate(){
var body=document.getElementsByTagName('body')[0];
var tbl=document.createElement('table');
tbl.setAttribute('border','1');
tbl.style.width='30%';

var tbdy=document.createElement('tbody');
for(var i=0;i<20;i++){
    var tr=document.createElement('tr');
    for(var j=0;j<20;j++){
        
        var td=document.createElement('td');
		
		//td.width = '33%'
		
		td.height = 11
        tr.appendChild(td)
		td.style.backgroundColor = 'yellow'
		//console.log(i,j)
        
    }
    tbdy.appendChild(tr);
}

tbl.appendChild(tbdy);
body.appendChild(tbl)
}
/**
 *
 *function change(i,j,color){
 *	
 *	var table = document.getElementById('tableid');
 *	table.rows[i].cells[j].style.backgroundColor = color
 *	if (color === 'black'){
 *		life[i*20+j] = 1;
 *	}
 *	else {
 *	life[i*20+j]=0;
 *	}
 *		console.log(i,j,color)
 *	}
 *
 *function change22222(i,j,color){
 *	
 *	var table = document.getElementById('tableid');
 *	table.rows[i].cells[j].style.backgroundColor = color
 *	if (color === 'black'){
 *		life[i*20+j] = 1;
 *	}
 *	else {
 *	life[i*20+j]=0;
 *	}
 *	console.log(i,j,color)
 *
 *	}
 */

	
	




	

