// JavaScript Document
function alignFrame(){
	checkFrame()
	frame.style.left = frame_alignment + 'px';

}
function checkAlignment(){
	if(Math.abs(alignment)==5050){
		if(alignment == -5050){
			for(var i=0; sweetspotLocations[i]; i++){
				sweetspotLocations[i]= (sweetspotLocations[i]+=5050)
			}
		}else{
			for(var i=0; sweetspotLocations[i]; i++){
				sweetspotLocations[i]= (sweetspotLocations[i]-=5050)
			}        
		}
	alignment = 0 
	}
}
function moveLeft(){
	alignment += 50 
	viewer.style.background = 'url(\'./campusnewresized.jpg\') repeat-x ' + alignment +'px'
	frame_alignment -= 4
	for(var i=0; sweetspotLocations[i]; i++){
		sweetspotLocations[i]= (sweetspotLocations[i]+=50)
	}
	alignFrame()
	alignSweetspots()
}
function moveRight(){
    alignment -= 50 
    viewer.style.background = 'url(\'./campusnewresized.jpg\') repeat-x ' + alignment +'px'
    frame_alignment += 4
    for(var i=0; sweetspotLocations[i]; i++){
        sweetspotLocations[i]= (sweetspotLocations[i]-=50)       
    }
    alignFrame()
    alignSweetspots()
}
function checkFrame(){
	if(frame_alignment <= -44){
		frame_alignment = 357 
	}else if(frame_alignment >= 358){
		frame_alignment = -44
	}
}
function resetSweetspots(){
	for(var i=0; sweetspotLocations[i]; i++){
		if(sweetspotLocations[i]>=1200){
			sweetspotLocations[i] = (sweetspotLocations[i]-=5050)
		}else if(sweetspotLocations[i]<= (-3950)){
			sweetspotLocations[i] = (sweetspotLocations[i]+=5050)
		}   
	}     
}  
function moveOver(){
	checkAlignment()
	if(this == lefta){ 
		moveLeft()
	}else{
		moveRight()
	}
	alignFrame()  
	alignSweetspots()
}
function autoscroll(){
	if(alignment == -5050){
		alignment = 0 
	}
	for(var i=0; sweetspots[i]; i++){
		sweetspots[i].style.visibility = 'hidden'
	}
	alignment -= 10
	autoscrollDistance -= 10 
	viewer.style.background = 'url(\'./campusnewresized.jpg\') repeat-x ' + alignment +'px'
	frame_alignment += (3.95/5)
	alignFrame()
}
function showArrow(e){
	e.stopPropagation()
	scrolling = true
	if(this==lefta){
		arrows[0].style.visibility = 'visible'
		arrows[1].style.visibility = 'visible'
		scrolling = setInterval('moveLeft()', 100)
	}else{
		arrows[2].style.visibility = 'visible'
		arrows[3].style.visibility = 'visible'
		scrolling = setInterval('moveRight()', 100)
	}
	arrows[i].style.visibility = 'visible'
}
function hideArrow(e){
	e.stopPropagation()
	clearInterval(scrolling) 
	for(var i=0; arrows[i]; i++){
		arrows[i].style.visibility = 'hidden'
	}	
}

function alignSweetspots(){
	resetSweetspots()
	for(var i=0; sweetspots[i]; i++){
		if(sweetspotLocations[i]>= 900 || sweetspotLocations[i]<-50){
			sweetspots[i].style.visibility = 'hidden'
		}else{
			sweetspots[i].style.visibility = 'visible'
		}
		sweetspots[i].style.left = sweetspotLocations[i] + 'px'
		if(sweetspots[i].id == 'shallcross'||sweetspots[i].id =='shimada' ){
			sweetspots[i].style.visibility = 'hidden'
			
		}
	}
	
}
function playpauseClicked() {
	if(playpause.innerHTML == 'Start Autoscroll'){
		playpause.innerHTML ='Stop Autoscroll';
		timer = setInterval('autoscroll()', 100)
	}else{
		playpause.innerHTML='Start Autoscroll';
		clearInterval(timer)
		for(var i=0; sweetspotLocations[i]; i++){
			sweetspotLocations[i]= (sweetspotLocations[i]+=autoscrollDistance)       
		}
		alignSweetspots()
		autoscrollDistance =0
	}
}
function openJump(){
	jumpDiv.style.visibility = 'visible'

	if(this.id == 'jumpToShimada'){
		for(var i=0; sweetspots[i]; i++){
			if(sweetspots[i].id == 'shimada'){
				sweetspots[i].style.visibility = 'visible'
				sweetspots[i].style.left = '200px'
			}else{
				sweetspots[i].style.visibility ='hidden'
			}		
		}
		jumpDiv.style.background = 'url(\'\')'
	}else{
		for(var i=0; sweetspots[i]; i++){
			if(sweetspots[i].id == 'shallcross'){
				sweetspots[i].style.visibility = 'visible'
				sweetspots[i].style.left = '200px'
			}else{
				sweetspots[i].styl.visibility = 'hidden'
			}		
		}
		jumpDiv.style.background = 'url(\'\')'
	}
	
}
function showJump(){
	this.style.border = 'red solid 2px'
	if(this.id == 'jumpToShimada'){
		this.title = 'Jump To Shimada'
		this.style.background = 'url(\'jumpShimada.jpg\') top right'
	}else{
		this.title = 'Jump To Shallcross'
		this.style.background = 'url(\'jumpShallcross.jpg\')'
	}
	this.style.width = '200px'
	this.style.height = '200px'

}
function hideJump(){
	this.style.border = 'red dashed 1px'
	this.style.width = '50px'
	this.style.height = '50px'
	this.style.background = 'none'
	
}
function hideJumpDiv(){
	jumpDiv.style.visibility = 'hidden'
	jumpDiv.style.background ='none'
	alignSweetspots()
	
}
function showSpot(){
	this.style.border = 'red solid 2px'
}
function hideSpot(){
	this.style.border= 'red dashed 1px'
}
function showImages(){
	imagesDiv.style.visibility = 'visible';
	r = sweetspots.indexOf(this)
	descriptionDiv.innerHTML = descriptions[r] 
	pics.style.visibility = 'visible'
	img1.style.visibility = 'visible'
	prev.style.visibility = 'visible'
	nextImg.style.visibility = 'visible'
	imgIndex.style.visibility = 'visible'
	imgCaption.style.visibility = 'visible'
	loadImg()    
}
function loadImg(){
	img1.src = pictures[r][p]
	img1.onload = function(){
		img1.style.left = (600-img1.width)/2 + 'px'
		
	}
	imgIndex.innerHTML =  ' ' + (p+1) + ' of ' + (pictures[r].length) + ' '
	imgCaption.innerHTML = captions[r][p]
}
function closeImages(){
	imagesDiv.style.visibility = 'hidden'; 
	p=0
	img1.style.visibility = 'hidden'
	prev.style.visibility = 'hidden'
	nextImg.style.visibility = 'hidden'
	imgIndex.style.visibility = 'hidden'
	pics.style.visibility = 'hidden'
	imgCaption.style.visibility = 'hidden'
	alignSweetspots()
}
function prevPic(){
	if(p==0){
		p = pictures[r].length - 1
	}else{
		p--
	}
	loadImg()
}
function nextPic(){
	if(p==pictures[r].length - 1){
		p = 0
	}else{
		p++
	}
	loadImg()  
}
function moveFrame(event){
	if(beingDragged == true){
		x=(event.pageX-690)
		frame.style.left = x + 'px'
	}
}
function startDrag(){
	beingDragged = true
}
function stopDrag(){
	beingDragged = false
	bigX = ((x * 50)/4)
	scrollOver(bigX)
	alignFrame()
	alignSweetspots()

}
function scrollOver(bigX){
	if(bigX != alignment){
		if(alignment<-bigX){
			moveLeft()
			scrollOver(bigX)
		}else if(alignment>-bigX){
			moveRight()
			scrollOver(bigX)
		}
	}
	alignSweetspots()
}
function stopTimer(){
	clearInterval(timer)
	for(var i=0; sweetspotLocations[i]; i++){
		sweetspotLocations[i]= (sweetspotLocations[i]+=autoscrollDistance)       
	}
	alignSweetspots()
	autoscrollDistance =0
}

