$("#changeMode").click(function(){
    // Change Mode
    $("body").toggleClass("dark-mode");

    // Is the class applied?
    const isDark = $("body").hasClas("dark-mode");

    /*if(isDark){
        $("h1").text("🌓 Dark Mode");
    }else{
        $("h1").text("☀️Light Mode");
    }*/

    $("changeMode").text(isDark ? "🌓 Dark Mode" : "☀️Light Mode");
});