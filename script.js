var point = 'notIncluded';
var app = new Vue({ 
    el: '#app',
    data: {
        display: '0',
        items: [
            ['AC','DE','%','/'],
            ['7', '8', '9', '*'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '=']
        ]
    },
    methods: {
        calculator: function (command) {
            const display = document.getElementById('display')
            const value = display.value
        
            switch(command){
                //AC入力時
                case 'AC':
                    display.value = '0'
                    point = 'notIncluded'
                    break;
                
                //DE入力時
                case 'DE':
                    display.value = display.value.slice(0,-1)
                    if(display.value === ""){
                        display.value = '0'
                    }
                    if(display.value === '0'){
                        point = 'notIncluded'
                    }
                    break;
                
                //=入力時
                case '=':
                    display.value  = Math.round(new Function('return '+value)() * 1000000)/1000000
                    break;
            }
        
            //文字数制限
            txt = display.value;
            var length = txt.length
            
            if(length < 12){
                switch(command){       
                    //%入力時
                    case '%':
                        if(value === '0'){
                            display.value = '0'
                        }else if(isNaN(value.slice(-1))){
                            ;
                        }else{
                            display.value += command
                            point = 'notIncluded'
                        }            
                        break;
                
                    //÷入力時
                    case '/':
                        if(value === '0'){
                            display.value = '0'
                        }else if(isNaN(value.slice(-1))){
                            ;
                        }else{
                            display.value += command
                            point = 'notIncluded'
                        }
                        break;
        
                    //7入力時
                    case '7':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
                    
                    //8入力時
                    case '8':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
                    
                    //9入力時
                    case '9':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
                        
                    //×入力時
                    case '*':
                        if(value === '0'){
                            display.value = '0'
                        }else if(isNaN(value.slice(-1))){
                            ;
                        }else{
                            display.value += command
                            point = 'notIncluded'
                        }
                        break;
                        
                    //4入力時
                    case '4':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
        
                    //5入力時
                    case '5':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
        
                    //6入力時
                    case '6':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
        
                    //-入力時
                    case '-':
                        if(value === '0'){
                            display.value = '0'
                        }else if(isNaN(value.slice(-1))){
                            ;
                        }else{
                            display.value += command
                            point = 'notIncluded'
                        }
                        break;
        
                    //1入力時
                    case '1':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
        
                    //2入力時
                    case '2':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
                        
                    //3入力時
                    case '3':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
                        
                    //+入力時
                    case '+':
                        if(value === '0'){
                            display.value = '0'
                        }else if(isNaN(value.slice(-1))){
                            ;
                        }else{
                            display.value += command
                            point = 'notIncluded'
                        }
                        break;
                        
                    //0入力時
                    case '0':
                        if(value === '0'){
                            display.value = command
                        }else{
                            display.value += command
                        }
                        break;
                        
                    //.入力時
                    case '.':
                        if(isNaN(value.slice(-1))){
                            ;
                        }else if(point === 'notIncluded'){
                            display.value += command;
                            point = 'included';
                        }
                        break;
                }
            }else{
                alert('12文字以上は入力できません。');
            }
        }
    }
})