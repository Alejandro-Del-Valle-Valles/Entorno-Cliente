const SHOW_BTN = document.getElementById('show');

if(SHOW_BTN) {
    SHOW_BTN.addEventListener('click', () => {
        var windows = [];
        var left = 100;
        var top = 100;

        for (var i = 0; i < 3; i++) {
            let win = window.open('about:blank', '', `width=300,height=200,left=${left},top=${top}`);
            
            if (win) {
                windows.push(win);
                win.setTimeout(function() {
                    win.close();
                }, 10000);
            }

            left += 10;
            top += 10;
        }
    });
}