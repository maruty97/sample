function check2(){
   if(form.yourname.value==""){
        alert("名前が入力されてません");
        return false;
    }
    
    if(form.mail.value==""){
        alert("メールアドレスが入力されてません");
        return false;
    }
    if(form.age.value==""){
        alert("年齢が入力されてません");
        return false;
    }
    
    else if(form.age.value<=0){
        alert("0以上の数字を入力してください");
        return false;
        
    }   
    
    if(form.subject.value==""){
        alert("件名が入力されてません");
        return false;
    }
    
    if(form.comment.value==""){
        alert("お問い合わせ内容が入力されてません");
        return false;
    }
    
    return true;
}


