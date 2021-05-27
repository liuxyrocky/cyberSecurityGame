window.$=HTMLElement.prototype.$=function(selector){
    return (this==window?document:this).querySelectorAll(selector);
}
var tetris={
    RN:20,//
    CN:10,//
    CSIZE:26,//26px
    OFFSET_X:15,//15px
    OFFSET_y:15,//15px
    pg:null,//
    currShape:null,//
    nextShape:null,//、
    interval:500,//==>
    timer:null,
    wall:[],//、
    state:1,//、
    STATE_RUNNING:1,//、
    STATE_GAMEOVER:0,//、
    STATE_PAUSE:2,//、
    IMG_GAMEOVER:"img/game-over.png",
    IMG_PAUSE:"img/pause.png",
    SCORES:[0,10,50,80,200],//,
    score:0,//、
    lines:0,//、
    //、
    paintState:function(){//，
        var img=new Image();
        switch(this.state){
            //STATE_GAMEOVER
            case this.STATE_GAMEOVER:
                //   img.srcIMG_GAMEOVER
                img.src=this.IMG_GAMEOVER;
                break;
            //STATE_PAUSE
            case this.STATE_PAUSE:
                //   img.srcIMG_PAUSE
                img.src=this.IMG_PAUSE;
        }
        //imgpg
        this.pg.appendChild(img);
    },
    init:function(){
        this.pg=$(".playground")[0];
        //currShape
        this.currShape=this.randomShape();
        this.nextShape=this.randomShape();
        //、wallRN
        for(var i=0;i<this.RN;i++){
            this.wall[i]=[];
        }
        this.score=0;//、
        this.lines=0;//、
        this.state=1;//、
        this.paint();
        //、
        this.timer=setInterval(function(){
            //tetrisdrop
            tetris.drop();
            //tetrispaint;
            tetris.paint();
        },this.interval);
        //、
        document.onkeydown=function(){
            var e=window.event||arguments[0];
            switch(e.keyCode){
                case 37: tetris.moveL();break;//
                case 39: tetris.moveR();break;//
                case 40: tetris.drop();break;//
                //、
                case 38: tetris.rotateR();break;//
                case 90: tetris.rotateL();break;//Z
                //
                case 80: tetris.pause();break;//P：
                case 81: tetris.gameOver();break;//Q：
                case 67: tetris.myContinue();break;//C，：，
                case 83: //，
                    if(this.state==this.STATE_GAMEOVER){
                        tetris.init();
                    }//S：
            }
        }
    },//init
    //、，，、
    gameOver:function(){
        this.state=this.STATE_GAMEOVER;
        clearInterval(this.timer);
        this.timer=null;
        this.paint();
    },
    pause:function(){
        if(this.state==this.STATE_RUNNING){
            this.state=this.STATE_PAUSE;
        }
    },
    myContinue:function(){
        if(this.state==this.STATE_PAUSE){
            this.state=this.STATE_RUNNING;
        }
    },
    //、
    rotateR:function(){//，
        if(this.state==this.STATE_RUNNING){//
            this.currShape.rotateR();
            if(this.outOfBounds()||this.hit()){//
                this.currShape.rotateL();
            }
        }
    },
    rotateL:function(){//Z，
        if(this.state==this.STATE_RUNNING){
            this.currShape.rotateL();
            if(this.outOfBounds()||this.hit()){//
                this.currShape.rotateR();
            }
        }
    },
    //、
    moveR:function(){
        this.currShape.moveR();
        if(this.outOfBounds()||this.hit()){//
            this.currShape.moveL();
        }
    },
    moveL:function(){
        this.currShape.moveL();
        if(this.outOfBounds()||this.hit()){//
            this.currShape.moveR();
        }
    },
    outOfBounds:function(){//
        //shapecol<0>=CN
        var cells=this.currShape.cells;
        for(var i=0;i<cells.length;i++){
            if(cells[i].col<0||cells[i].col>=this.CN){
                return true;
            }
        }
        return false;
    },
    hit:function(){//
        //shapewall
        var cells=this.currShape.cells;
        for(var i=0;i<cells.length;i++){
            if(this.wall[cells[i].row][cells[i].col]){
                return true;
            }
        }
        return false;
    },
    //、，
    paint:function(){
        //img，
        /*4/<img(.*?){4}>*/
        this.pg.innerHTML=this.pg.innerHTML.replace(/<img(.*?)>/g,"");
        this.paintShape();
        this.paintWall();
        this.paintNext();
        //
        this.paintScore();
        this.paintState();//、
    },
    //、
    paintScore:function(){//span
        //spanthis.score
        $("span")[0].innerHTML=this.score;
        //this.lines
        $("span")[1].innerHTML=this.lines;
    },
    drop:function(){
        //
        if(this.state==this.STATE_RUNNING){//
            if(this.canDrop()){
                this.currShape.drop();
            }else{//、
                //、，cell，wall
                this.landIntoWall();
                //、、
                var ln=this.deleteLines();//
                //、
                this.score+=this.SCORES[ln];
                this.lines+=ln;
                //、。。
                if(!this.isGameOver()){
                    //、nextShape，currShape
                    this.currShape=this.nextShape;
                    //、
                    this.nextShape=this.randomShape();
                }else{//、，
                    clearInterval(this.timer);
                    this.timer=null;
                    this.state=this.STATE_GAMEOVER;
                    this.paint();//
                }
            }
        }
    },
    //、，
    deleteLines:function(){//wall
        //wall,linesline
        for(var row=0,lines=0;row<this.RN;row++){
            //:isFull(row)
            if(this.isFull(row)){
                // ：
                this.deleteL(row);
                // ，lines++
                lines++;
            }
        }
        return lines;
    },
    isFull:function(row){//
        var line=this.wall[row];
        for(var c=0;c<this.CN;c++){
            if(!line[c]){
                return false;
            }
        }
        return true;
    },
    deleteL:function(row){
        this.wall.splice(row,1);
        this.wall.unshift([]);
        for(var r=row;r>0;r--){
            for(var c=0;c<this.CN;c++){
                if(this.wall[r][c]){
                    this.wall[r][c].row++;
                }
            }
        }
    },
    isGameOver:function(){
        var cells=this.nextShape.cells;
        for(var i=0;i<cells.length;i++){
            var cell=this.wall[cells[i].row][cells[i].col];
            if(cell){
                return true;
            }
        }
        return false;
    },
    paintNext:function(){
        var cells=this.nextShape.cells;
        for(var i=0;i<cells.length;i++){
            var r=cells[i].row+1;
            var c=cells[i].col+11;
            var x=c*this.CSIZE+this.OFFSET_X;
            var y=r*this.CSIZE+this.OFFSET_y;
            var img=new Image();
            img.src=cells[i].img;
            img.style.left=x+"px";
            img.style.top=y+"px";
            this.pg.appendChild(img);
        }
    },
    paintWall:function(){
        for(var r=0;r<this.RN;r++){
            for(var c=0;c<this.CN;c++){
                var cell=this.wall[r][c];
                if(cell){
                    var x=cell.col*this.CSIZE+this.OFFSET_X;
                    var y=cell.row*this.CSIZE+this.OFFSET_y;
                    var img=new Image();
                    img.src=cell.img;
                    img.style.left=x+"px";
                    img.style.top=y+"px";
                    this.pg.appendChild(img);
                }
            }
        }
    },
    landIntoWall:function(){

        var cells=this.currShape.cells;
        for(var i=0;i<cells.length;i++){
            this.wall[cells[i].row][cells[i].col]=cells[i];
        }
    },
    canDrop:function(){

        var cells=this.currShape.cells;
        for(var i=0;i<cells.length;i++){
            if(cells[i].row==this.RN-1){
                return false;
            }
            if(this.wall[cells[i].row+1][cells[i].col]){
                return false
            }
        }
        return true;
    },

    randomShape:function(){
        switch(parseInt(Math.random()*7)){
            case 0: return new O();
            case 1: return new L();
            case 2: return new J();
            case 3: return new S();
            case 4: return new Z();
            case 5: return new I();
            case 6: return new T();
        }
    },
    //3
    paintShape:function(){
        var cells=this.currShape.cells;
        for(var i=0;i<cells.length;i++){
            var x=cells[i].col*this.CSIZE+this.OFFSET_X;
            var y=cells[i].row*this.CSIZE+this.OFFSET_y;
            var img=new Image();
            img.src=cells[i].img;
            img.style.left=x+"px";
            img.style.top=y+"px";
            this.pg.appendChild(img);
        }
    },
}
window.onload=function(){
    tetris.init();
}
