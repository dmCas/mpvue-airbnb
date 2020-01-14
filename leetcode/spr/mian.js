

//document process 进程

const playerAction = process.argv[2];


if(playerAction != 'rock' && playerAction != 'pager' && playerAction != 'scissor'){
    throw new Error('出错了， 再出过');
}
else {
    let computerAction;
    let random = Math.random() * 3;
    console.log(random);
    if(random <1 ){
        computerAction = 'rock'
        console.log('电脑出了石头');
    }
    else if (random >2){
        computerAction = 'scissor'
        console.log('电脑出了剪刀');
    }
    else{
        computerAction = 'pager'
        console.log('电脑出了布');
    }
    if(playerAction == computerAction){
        console.log('平局，再来');
    }
    else if ((playerAction == 'scissor' && computerAction == 'rock') || (playerAction == 'pager' && computerAction == 'scissor') || (playerAction == 'rock' && computerAction == 'pager')){
        console.log('抱歉，你输了');
    }
    else{
        console.log('恭喜，你赢了');
    }
}

