var sumx = []
for (i=0 ; i < 400; i++) {
sumx.push(0);
}

function compute(life)
{

	for (var x=0; x<20;x++){
		for (var y=0;y<20;y++){
			var sum = 0
			if (x+1<20 && y+1<20){
				sum = sum + life[(x+1)*20+y+1]}
			if (x-1>=0 && y+1<20){
				sum = sum + life[(x-1)*20+y+1]	}
			if (x+1<20 && y-1>=0){
				sum = sum + life[(x+1)*20+y-1]}
			if (x-1>=0 && y-1>=0){
				sum = sum + life[(x-1)*20+y-1]}
			if (y-1>=0){
				sum = sum + life[(x)*20+y-1]}
			if (y+1<20){
				sum = sum + life[(x)*20+y+1]}
			if (x+1<20){
				sum = sum + life[(x+1)*20+y]}
			if (x-1>=0){
				sum = sum + life[(x-1)*20+y]}
				
			sumx[20*x+y]=sum
			
		}
	}
	
	var table = document.getElementById('tableid');
	for (i=0 ; i < 400; i++) {
		indx = Math.floor(i/20)
		indy = i % 20
		//table.rows[indx].cells[indy].style.backgroundColor = 'green'



		var v = life[i]
		var sumg = sumx[i]
		console.log(sumg,v)
		var color = 0
		if (v==1)
		{
			if (sumg<2 || sumg> 3){
				color = 'yellow'
				table.rows[indx].cells[indy].style.backgroundColor = 'yellow'
				//console.log(table.rows[indx].cells[indy].style.backgroundColor)
				
				life[i]=0
				}
		}
		else
		{
			if (sumg==3){
				color = 'black'
				table.rows[indx].cells[indy].style.backgroundColor = color
				life[i]=1
				}
			}
		}
	return life
	

}